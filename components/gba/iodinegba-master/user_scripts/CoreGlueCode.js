// "use strict";
/*
 Copyright (C) 2012-2019 Grant Galitz

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Component } from "react";
import GameBoyAdvanceEmulator from "../IodineGBA/core/Emulator";

export default class CoreGlueCode extends Component {
    static IodineGUI = {};

    constructor(props) {
        super(props)
    }

    componentDidMount = (params) => {
        window.onload = function () {
            //Populate settings:
            registerDefaultSettings();
            //Initialize Iodine:
            registerIodineHandler();
            //Initialize the timer:
            calculateTiming();
            //Initialize the graphics:
            registerBlitterHandler();
            //Initialize the audio:
            registerAudioHandler();
            //Register the save handler callbacks:
            registerSaveHandlers();
            //Register the GUI controls.
            registerGUIEvents();
            //Register GUI settings.
            registerGUISettings();
        }
        CoreGlueCode.IodineGUI = {
            Iodine: null,
            Blitter: null,
            coreTimerID: null,
            GUITimerID: null,
            toMap: null,
            toMapIndice: 0,
            suspended: false,
            isPlaying: false,
            startTime: (+(new Date()).getTime()),
            mixerInput: null,
            currentSpeed: [false, 0],
            defaults: {
                timerRate: 8,
                sound: true,
                volume: 1,
                skipBoot: false,
                toggleSmoothScaling: true,
                toggleDynamicSpeed: false,
                toggleOffthreadGraphics: true,
                toggleOffthreadCPU: (window.navigator.userAgent.indexOf('AppleWebKit') == -1 || (window.navigator.userAgent.indexOf('Windows NT 10.0') != -1 && window.navigator.userAgent.indexOf('Trident') == -1)),
                keyZonesGBA: [
                    //Use this to control the GBA key mapping:
                    //A:
                    88,
                    //B:
                    90,
                    //Select:
                    16,
                    //Start:
                    13,
                    //Right:
                    39,
                    //Left:
                    37,
                    //Up:
                    38,
                    //Down:
                    40,
                    //R:
                    83,
                    //L:
                    65
                ],
                keyZonesControl: [
                    //Use this to control the emulator function key mapping:
                    //Volume Down:
                    55,
                    //Volume Up:
                    56,
                    //Speed Up:
                    52,
                    //Slow Down:
                    51,
                    //Reset Speed:
                    53,
                    //Toggle Fullscreen:
                    54,
                    //Play/Pause:
                    80,
                    //Restart:
                    82
                ]
            }
        }
        
    }

    registerIodineHandler() {
        try {
            /*
            We utilize SharedArrayBuffer and Atomics API,
            which browsers prior to 2016 do not support:
            */
            if (typeof SharedArrayBuffer != "function" || typeof Atomics != "object") {
                throw null;
            }
            else if (!IodineGUI.defaults.toggleOffthreadCPU && IodineGUI.defaults.toggleOffthreadGraphics) {
                //Try starting Iodine normally, but initialize offthread gfx:
                IodineGUI.Iodine = new IodineGBAWorkerGfxShim();
            }
            else if (IodineGUI.defaults.toggleOffthreadGraphics) {
                //Try starting Iodine in a webworker:
                IodineGUI.Iodine = new IodineGBAWorkerShim();
                //In order for save on page unload, this needs to be done:
                addEvent("beforeunload", window, registerBeforeUnloadHandler);
            }
            else {
                throw null;
            }
        }
        catch (e) {
            //Otherwise just run on-thread:
            CoreGlueCode.IodineGUI.Iodine = new GameBoyAdvanceEmulator();
        }
    }
    registerBeforeUnloadHandler(e) {
        CoreGlueCode.IodineGUI.Iodine.pause();
        if (e.preventDefault) {
            e.preventDefault();
        }
        return "IodineGBA needs to process your save data, leaving now may result in not saving current data.";
    }
    initTimer() {
        CoreGlueCode.IodineGUI.Iodine.setIntervalRate(+CoreGlueCode.IodineGUI.defaults.timerRate);
        CoreGlueCode.IodineGUI.coreTimerID = setInterval(function () {
            CoreGlueCode.IodineGUI.Iodine.timerCallback(((+(new Date()).getTime()) - (+CoreGlueCode.IodineGUI.startTime)) >>> 0);
        }, CoreGlueCode.IodineGUI.defaults.timerRate | 0);
    }
    calculateTiming() {
        CoreGlueCode.IodineGUI.Iodine.setIntervalRate(+CoreGlueCode.IodineGUI.defaults.timerRate);
    }
    startTimer() {
        CoreGlueCode.IodineGUI.coreTimerID = setInterval(function () {
            CoreGlueCode.IodineGUI.Iodine.timerCallback(((+(new Date()).getTime()) - (+CoreGlueCode.IodineGUI.startTime)) >>> 0);
        }, CoreGlueCode.IodineGUI.defaults.timerRate | 0);
    }
    updateTimer(newRate) {
        newRate = newRate | 0;
        if ((newRate | 0) != (CoreGlueCode.IodineGUI.defaults.timerRate | 0)) {
            CoreGlueCode.IodineGUI.defaults.timerRate = newRate | 0;
            CoreGlueCode.IodineGUI.Iodine.setIntervalRate(+CoreGlueCode.IodineGUI.defaults.timerRate);
            if (CoreGlueCode.IodineGUI.isPlaying) {
                if (CoreGlueCode.IodineGUI.coreTimerID) {
                    clearInterval(CoreGlueCode.IodineGUI.coreTimerID);
                }
                initTimer();
            }
        }
    }
    registerBlitterHandler() {
        CoreGlueCode.IodineGUI.Blitter = new GfxGlueCode(240, 160);
        CoreGlueCode.IodineGUI.Blitter.attachCanvas(document.getElementById("emulator_target"));
        CoreGlueCode.IodineGUI.Iodine.attachGraphicsFrameHandler(IodineGUI.Blitter);
        CoreGlueCode.IodineGUI.Blitter.attachGfxPostCallback(function () {
            if (CoreGlueCode.IodineGUI.currentSpeed[0]) {
                var speedDOM = document.getElementById("speed");
                speedDOM.textContent = "Speed: " + CoreGlueCode.IodineGUI.currentSpeed[1] + "%";
            }
        });
    }
    registerAudioHandler() {
        var Mixer = new GlueCodeMixer(document.getElementById("play"));
        CoreGlueCode.IodineGUI.mixerInput = new GlueCodeMixerInput(Mixer);
        CoreGlueCode.IodineGUI.Iodine.attachAudioHandler(CoreGlueCode.IodineGUI.mixerInput);
    }
}