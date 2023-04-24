// import styles from '../styles/Home.module.css'
import CustomNavbar from "../components/nav/CustomNavbar";
import Footer from "../components/footer/Footer";
import GBAPanel from "../components/gba/GBAPanel"
import GBALoadData from "../components/gba/GBALoadData"
import GBAEmulator from "../components/gba/GBAEmulator";
import GBAWorker from "../components/gba/iodinegba-master/IodineGBA/core/Worker";
export default function Home() {
    new GBAWorker();
    return (<>
        {/* <CustomNavbar /> */}
        <main>
            <div id="container">
                <div id="menu" className="paused">
                    <ul className="menu" id="menu_top">
                        <GBALoadData />
                        <GBAPanel>
                            
                        </GBAPanel>
                        <GBAEmulator />
                     
                    </ul>
                </div>
                <div id="main">
                    <canvas className="canvas" id="emulator_target" width="240" height="160"></canvas>
                </div>
                <div className="touch-controls">
                    <div className="touch-dpad">
                        <button id="touch-up">↑</button><br />
                        <button id="touch-left">←</button>
                        <button id="touch-right">→</button><br />
                        <button id="touch-down">↓</button>
                    </div>
                    <div className="touch-buttons">
                        <button id="touch-select">SELECT</button>
                        <button id="touch-start">START</button>
                    </div>
                    <div className="touch-buttons">
                        <button id="touch-a">A</button>
                        <button id="touch-b">B</button><br />
                        <button id="touch-l">L</button>
                        <button id="touch-r">R</button>
                    </div>
                </div>
                <span className="message" id="tempMessage"></span>
            </div>
        </main>
        <Footer />
    </>)
}
