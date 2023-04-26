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

function Layout() {
    return <CustomNavbar/>;
}

export default class Index extends PureComponent {

    constructor({children, props}) {
        super(props);
        this.children = children;
        this.routerFactory = undefined;
    }


    // Similar to componentDidMount and componentDidUpdate:
    componentDidMount() {
        this.routerFactory =
        <RouterFactory>
            <Route path="" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
        </RouterFactory>;
    }

    // new GBAWorker();
    render(props) {
        return <>
            <main>

                {this.children}
                {this.routerFactory}

            </main>
            <Footer/>
        </>
    }
}
