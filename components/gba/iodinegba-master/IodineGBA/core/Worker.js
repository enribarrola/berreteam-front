"use strict";
/*
 Copyright (C) 2012-2019 Grant Galitz

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
// importScripts("../includes/TypedArrayShim.js");
// importScripts("Cartridge.js");
// importScripts("DMA.js");
// importScripts("Emulator.js");
// importScripts("Graphics.js");
// importScripts("RunLoop.js");
// importScripts("Memory.js");
// importScripts("IRQ.js");
// importScripts("JoyPad.js");
// importScripts("Serial.js");
// importScripts("Sound.js");
// importScripts("Timer.js");
// importScripts("Wait.js");
// importScripts("CPU.js");
// importScripts("Saves.js");
// importScripts("sound/FIFO.js");
// importScripts("sound/Channel1.js");
// importScripts("sound/Channel2.js");
// importScripts("sound/Channel3.js");
// importScripts("sound/Channel4.js");
// importScripts("CPU/ARM.js");
// importScripts("CPU/THUMB.js");
// importScripts("CPU/CPSR.js");
// importScripts("graphics/RendererProxy.js");
// importScripts("graphics/RendererShim.js");
// importScripts("graphics/Renderer.js");
// importScripts("graphics/BGTEXT.js");
// importScripts("graphics/BG2FrameBuffer.js");
// importScripts("graphics/BGMatrix.js");
// importScripts("graphics/AffineBG.js");
// importScripts("graphics/ColorEffects.js");
// importScripts("graphics/Mosaic.js");
// importScripts("graphics/OBJ.js");
// importScripts("graphics/OBJWindow.js");
// importScripts("graphics/Window.js");
// importScripts("graphics/Compositor.js");
// importScripts("memory/DMA0.js");
// importScripts("memory/DMA1.js");
// importScripts("memory/DMA2.js");
// importScripts("memory/DMA3.js");
// importScripts("cartridge/SaveDeterminer.js");
// importScripts("cartridge/SRAM.js");
// importScripts("cartridge/FLASH.js");
// importScripts("cartridge/EEPROM.js");
// importScripts("cartridge/GPIO.js");

import GameBoyAdvanceEmulator from "./Emulator";
import TypedArrayShim from "../includes/TypedArrayShim";
import {Component} from "react";

const tas = new TypedArrayShim();
export default class GBAWorker extends Component {
    constructor(props) {
        super(props)
        console.log("GBAWorker");
        this.Iodine = new GameBoyAdvanceEmulator();
        //Save callbacks waiting to be satisfied:
        this.saveImportPool = [];
        //Graphics Buffers:
        this.gfxBuffers = [tas.getSharedUint8Array(160 * 240 * 3),
            tas.getSharedUint8Array(160 * 240 * 3)];
        this.gfxCounters = tas.getSharedInt32Array(3);
        //Audio Buffers:
        this.audioBuffer = null;
        this.audioCounters = null;
        this.audioBufferSize = 0;
        this.audioBufferSizeMask = 0;
        this.audioSamplesRemaining = tas.getSharedInt32Array(1);
        //Time Stamp tracking:
        this.timestamp = tas.getSharedUint32Array(1);
        //Interval Timer handle:
        this.timerHandle = null;
        this.timerRate = 0;
        //Pass the shared array buffers:
    }

    componentDidMount() {
        try {
            window.postMessage({
                messageID: 0,
                gfxBuffer1: gfxBuffers[0],
                gfxBuffer2: gfxBuffers[1],
                gfxCounters: gfxCounters,
                audioSamplesRemaining: audioSamplesRemaining,
                timestamp: timestamp
            }, [gfxBuffers[0].buffer, gfxBuffers[1].buffer, gfxCounters.buffer, audioSamplesRemaining.buffer, timestamp.buffer]);
        } catch (e) {
            window.postMessage({
                messageID: 0,
                gfxBuffer1: gfxBuffers[0],
                gfxBuffer2: gfxBuffers[1],
                gfxCounters: gfxCounters,
                audioSamplesRemaining: audioSamplesRemaining,
                timestamp: timestamp
            });
        }
    }

//Event decoding:
    onmessage = function (event) {
        console.log(event);
        let data = event.data;
        switch (data.messageID | 0) {
            case 0:
                Iodine.play();
                break;
            case 1:
                Iodine.pause();
                break;
            case 2:
                Iodine.restart();
                break;
            case 3:
                Iodine.setIntervalRate(+data.payload);
                changeTimer(data.payload | 0);
                break;
            case 4:
                Iodine.attachGraphicsFrameHandler(graphicsFrameHandler);
                break;
            case 5:
                Iodine.attachAudioHandler(audioHandler);
                break;
            case 6:
                Iodine.enableAudio();
                break;
            case 7:
                Iodine.disableAudio();
                break;
            case 8:
                Iodine.toggleSkipBootROM(!!data.payload);
                break;
            case 9:
                Iodine.toggleDynamicSpeed(!!data.payload);
                break;
            case 10:
                Iodine.attachSpeedHandler(speedHandler);
                break;
            case 11:
                Iodine.keyDown(data.payload | 0);
                break;
            case 12:
                Iodine.keyUp(data.payload | 0);
                break;
            case 13:
                Iodine.incrementSpeed(+data.payload);
                break;
            case 14:
                Iodine.setSpeed(+data.payload);
                break;
            case 15:
                Iodine.attachBIOS(data.payload);
                break;
            case 16:
                Iodine.attachROM(data.payload);
                break;
            case 17:
                Iodine.exportSave();
                break;
            case 18:
                Iodine.attachSaveExportHandler(saveExportHandler);
                break;
            case 19:
                Iodine.attachSaveImportHandler(saveImportHandler);
                break;
            case 20:
                processSaveImportSuccess(data.payload);
                break;
            case 21:
                processSaveImportFail();
                break;
            case 22:
                Iodine.toggleOffthreadGraphics(!!data.payload);
                break;
            case 23:
                Iodine.attachPlayStatusHandler(playStatusHandler);
        }

    }
}

var graphicsFrameHandler = {
    //Function only called if graphics is THIS thread:
    copyBuffer: function (swizzledFrame) {
        //Push a frame of graphics to the blitter handle:
        //Load the counter values:
        var start = gfxCounters[0] | 0;                     //Written by the other thread.
        var end = gfxCounters[1] | 0;                       //Written by this thread.
        //Check if buffer is full:
        if ((end | 0) == (((start | 0) + 2) | 0)) {
            //Skip copying a frame out:
            return;
        }
        //Copy samples into the ring buffer:
        //Hardcoded for 2 buffers for a triple buffer effect:
        gfxBuffers[end & 0x1].set(swizzledFrame);
        //Increment the ending position counter by 1:
        //Atomic to commit the counter to memory:
        Atomics.store(gfxCounters, 1, ((end | 0) + 1) | 0);
    }
};
//Shim for our audio api:
var audioHandler = {
    initialize: function (channels, sampleRate, bufferLimit, call1, call2, call3) {
        //Initialize the audio mixer input:
        channels = channels | 0;
        sampleRate = +sampleRate;
        bufferLimit = bufferLimit | 0;
        //Generate an audio buffer:
        audioBufferSize = ((bufferLimit | 0) * (channels | 0)) | 0;
        audioBufferSizeMask = 1;
        while ((audioBufferSize | 0) >= (audioBufferSizeMask | 0)) {
            audioBufferSizeMask = (audioBufferSizeMask << 1) | 1;
        }
        audioBufferSize = ((audioBufferSizeMask | 0) + 1) | 0;
        audioBuffer = tas.getSharedFloat32Array(audioBufferSize | 0);
        audioCounters = tas.getSharedInt32Array(2);
        try {
            postMessage({
                messageID: 1,
                channels: channels | 0,
                sampleRate: +sampleRate,
                bufferLimit: bufferLimit | 0,
                audioBuffer: audioBuffer,
                audioCounters: audioCounters
            }, [audioBuffer.buffer, audioCounters.buffer]);
        } catch (e) {
            postMessage({
                messageID: 1,
                channels: channels | 0,
                sampleRate: +sampleRate,
                bufferLimit: bufferLimit | 0,
                audioBuffer: audioBuffer,
                audioCounters: audioCounters
            });
        }
    },
    push: function (buffer, startPos, endPos) {
        startPos = startPos | 0;
        endPos = endPos | 0;
        //Push audio to the audio mixer input handle:
        //Load the counter values:
        var start = audioCounters[0] | 0;                 //Written to by the other thread.
        var end = audioCounters[1] | 0;                   //Written by this thread.
        var endCorrected = ((end | 0) & (audioBufferSizeMask | 0)) | 0;
        var freeBufferSpace = ((end | 0) - (start | 0)) | 0;
        freeBufferSpace = ((audioBufferSize | 0) - (freeBufferSpace | 0)) | 0;
        var amountToSend = ((endPos | 0) - (startPos | 0)) | 0;
        amountToSend = Math.min(amountToSend | 0, freeBufferSpace | 0) | 0;
        endPos = ((startPos | 0) + (amountToSend | 0)) | 0;
        //Push audio into buffer:
        for (; (startPos | 0) < (endPos | 0); startPos = ((startPos | 0) + 1) | 0) {
            audioBuffer[endCorrected | 0] = +buffer[startPos | 0];
            endCorrected = ((endCorrected | 0) + 1) | 0;
            if ((endCorrected | 0) == (audioBufferSize | 0)) {
                endCorrected = 0;
            }
        }
        //Update the cross thread buffering count:
        end = ((end | 0) + (amountToSend | 0)) | 0;
        //Atomic store to commit writes to memory:
        Atomics.store(audioCounters, 1, end | 0);
    },
    register: function () {
        //Register into the audio mixer:
        postMessage({messageID: 2});
    },
    unregister: function () {
        //Unregister from audio mixer:
        postMessage({messageID: 3});
    },
    setBufferSpace: function (spaceContain) {
        //Ensure buffering minimum levels for the audio:
        postMessage({messageID: 4, audioBufferContainAmount: spaceContain | 0});
    },
    remainingBuffer: function () {
        //Report the amount of audio samples in-flight:
        var ringBufferCount = this.remainingBufferShared() | 0;
        var audioSysCount = audioSamplesRemaining[0] | 0;
        return ((ringBufferCount | 0) + (audioSysCount | 0)) | 0;
    },
    remainingBufferShared: function () {
        //Reported the sample count left in the shared buffer:
        var start = audioCounters[0] | 0;
        var ringBufferCount = ((end | 0) - (start | 0)) | 0;
        return ringBufferCount | 0;
    }
};

export function saveImportHandler(saveID, saveCallback, noSaveCallback) {
    postMessage({messageID: 5, saveID: saveID});
    saveImportPool.push([saveCallback, noSaveCallback]);
}

export function saveExportHandler(saveID, saveData) {
    postMessage({messageID: 6, saveID: saveID, saveData: saveData});
}

export function speedHandler(speed) {
    postMessage({messageID: 7, speed: speed});
}

export function processSaveImportSuccess(saveData) {
    saveImportPool.shift()[0](saveData);
}

export function processSaveImportFail() {
    saveImportPool.shift()[1]();
}

export function playStatusHandler(isPlaying) {
    isPlaying = isPlaying | 0;
    postMessage({messageID: 8, playing: (isPlaying | 0)});
    if ((isPlaying | 0) == 0) {
        if (timerHandle) {
            clearInterval(timerHandle);
            timerHandle = null;
        }
    } else {
        if (!timerHandle) {
            initTimer(timerRate | 0);
        }
    }
}

export function changeTimer(rate) {
    rate = rate | 0;
    if (timerHandle) {
        clearInterval(timerHandle);
        initTimer(rate | 0);
    }
    timerRate = rate | 0;
}

export function initTimer(rate) {
    rate = rate | 0;
    if ((rate | 0) > 0) {
        timerHandle = setInterval(function () {
            Iodine.timerCallback(timestamp[0] >>> 0);
        }, rate | 0);
    }
}