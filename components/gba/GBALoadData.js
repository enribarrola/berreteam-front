
import CoreGlueCode from "./iodinegba-master/user_scripts/CoreGlueCode"

export default function GBALoadData(params) {



    return (<>
        <li id="bios-game-load">
            File
            <ul>
                <li><span>BIOS: </span> <input type="file" id="bios_load_x" className="files" /></li>
                <li><span>Game: </span> <input type="file" id="rom_load" className="files" /></li>
            </ul>
        </li>
    </>)
}