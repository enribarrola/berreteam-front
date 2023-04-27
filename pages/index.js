// import styles from '../styles/Home.module.css'
import CustomNavbar from "../components/nav/CustomNavbar";
import Footer from "../components/footer/Footer";
import GBAPanel from "../components/gba/GBAPanel"
import GBALoadData from "../components/gba/GBALoadData"
import GBAEmulator from "../components/gba/GBAEmulator";
import GBAWorker from "../components/gba/iodinegba-master/IodineGBA/core/Worker";
import GBAMain from "../components/gba/GBAMain";
import RouterFactory from "../components/core/RouterFactory";
import {Route, Routes} from "react-router-dom";
import Contact from "./contact";
import NoPage from "./NoPage";
import {PureComponent, useEffect, useState} from "react";
import Home from "./home/Home";
import About from "./about";
import XmlHttpRequestCore from "../components/core/httpresourcefactory/XmlHttpRequestCore";

function Layout() {
    return <CustomNavbar/>;
}

export default function Index(children = {}, props = {}) {

    const xhr = new XmlHttpRequestCore();
    let routerFactory = null;


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // xhr.get("/user/roles");
    })


    // new GBAWorker();

    return <>
        <main>
        </main>

    </>
}
