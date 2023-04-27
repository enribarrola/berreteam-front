import '../styles/dark.css'
import {I18nextProvider} from "react-i18next";
import data from "./data.json";
import CustomHead from "../components/head/CustomHead";
import i18next from "i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";
import RouterFactory from "../components/core/RouterFactory";
import {Route} from "react-router-dom";
import Home from "./home/Home";
import About from "./about";
import Contact from "./contact";
import NoPage from "./NoPage";
import {createContext, useEffect} from "react";
import Index from "./index";
import Footer from "../components/footer/Footer";
import CustomNavbar from "../components/nav/CustomNavbar";

const NavbarContext = createContext("test")


function Layout() {
    return <h1>LAYOUT</h1>;
}

function MyApp({Component, pageProps}) {
    let routerFactory;
    i18next.init({
        interpolation: {escapeValue: false},  // React already does escaping
        lng: 'es',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            }, es: {
                common: common_es
            },
        },
    });
    useEffect(() => {
        routerFactory =
            <RouterFactory>
                <Route path="/" element={<Index/>}>
                    <Route index element={<Index/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </RouterFactory>;
    })

    return (<>
        <I18nextProvider i18n={i18next}>
            <CustomHead name={data.name} description={data.description}/>
            <CustomNavbar/>
            {/*<NavbarContext.Provider value={"test"}>*/}
            {/*    <CustomNavbar/>*/}
            {/*</NavbarContext.Provider>*/}

            <Component {...pageProps} />
            {routerFactory}

            <Footer/>
        </I18nextProvider>
    </>);

}

export default MyApp;

