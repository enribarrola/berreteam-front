import GBAPanel from "./GBAPanel";
import GBANavbar from "./GBANavbar";
import GBALoadData from "./GBALoadData";
import GBAEmulator from "./GBAEmulator";
import {Component} from "react";

export default function GBAMain(props) {

    const navbar = new GBANavbar(props);
    const loadData = new GBALoadData(props);
    const panel = new GBAPanel(props);
    const emu = new GBAEmulator(props);


    return (<>
        {navbar}
    </>)


}

