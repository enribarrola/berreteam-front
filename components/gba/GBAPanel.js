
import TypedArrayShim from "./iodinegba-master/IodineGBA/includes/TypedArrayShim";
import Emulator from "../gba/iodinegba-master/IodineGBA/core/Emulator"
import Cartridge from "./iodinegba-master/IodineGBA/core/Cartridge";
import GameBoyAdvanceDMA from "./iodinegba-master/IodineGBA/core/DMA";
import GameBoyAdvanceGraphics from "./iodinegba-master/IodineGBA/core/Graphics";
import GameBoyAdvanceIO from "./iodinegba-master/IodineGBA/core/RunLoop";
export default function GBAPanel(params){
    const props = {tas: new TypedArrayShim(),};

    const cartridge = new Cartridge(props);
    const gbadma = new GameBoyAdvanceDMA(props);
    const emulator = new Emulator();
    const gbg = new GameBoyAdvanceGraphics();
    const runLoop = new GameBoyAdvanceIO();
    return (
        <>
            <button className="btn btn-primary show" id="play" >Play</button>
            <button id="pause" className="btn btn-warning hide" >Pause</button>
            <button id="restart" className="btn btn-danger">Restart</button>
        </>
    )
}