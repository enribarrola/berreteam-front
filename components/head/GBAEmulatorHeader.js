
function GBAEmulatorHeader(params) {
    //TODO CAMBIAR DE CARPETA A /SCRIPTS
    return (<>
        <Head>
            <Script src="/scripts/IodineGBA/IodineGBA/core/Cartridge.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/includes/TypedArrayShim.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/DMA.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Emulator.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Graphics.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/RunLoop.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Memory.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/IRQ.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/JoyPad.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Serial.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Sound.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Timer.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Wait.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/CPU.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/Saves.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/sound/FIFO.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/sound/Channel1.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/sound/Channel2.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/sound/Channel3.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/sound/Channel4.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/CPU/ARM.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/CPU/THUMB.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/CPU/CPSR.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/Renderer.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/RendererShim.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/RendererProxy.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/BGTEXT.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/BG2FrameBuffer.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/BGMatrix.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/AffineBG.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/ColorEffects.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/Mosaic.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/OBJ.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/OBJWindow.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/Window.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/graphics/Compositor.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/memory/DMA0.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/memory/DMA1.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/memory/DMA2.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/memory/DMA3.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/cartridge/SaveDeterminer.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/cartridge/SRAM.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/cartridge/FLASH.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/cartridge/EEPROM.js" />
            <Script src="/scripts/IodineGBA/IodineGBA/core/cartridge/GPIO.js" />

            <Script src="/scripts/IodineGBA/user_scripts/AudioGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/base64.js" />
            <Script src="/scripts/IodineGBA/user_scripts/CoreGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/GfxGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/GUIGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/JoyPadGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/ROMLoadGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/SavesGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/WorkerGfxGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/WorkerGlueCode.js" />
            <Script src="/scripts/IodineGBA/user_scripts/XAudioJS/swfobject.js" />
            <Script src="/scripts/IodineGBA/user_scripts/XAudioJS/resampler.js" />
            <Script src="/scripts/IodineGBA/user_scripts/XAudioJS/XAudioServer.js" />
        </Head>
    </>)

}