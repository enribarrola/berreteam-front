/**
 * Style
 */
// import "../public/styles/bootstrap-4/css/bootstrap.css";
//https://fontawesome.com/download
import "../libs/fontawesome-free-6.4.0-web/css/all.css";
import "../libs/fontawesome-free-6.4.0-web/js/all.min";
//https://ionic.io/ionicons/usage
/**
 * App
 */
import data from "./data.json";
import {useEffect, useRef, useState} from "react";
import RouterFactory from "../components/core/RouterFactory";
import {Route} from "react-router-dom";
import {InitDataContext, RouterContext} from "../components/core/CusContext";
import Error from "next/error";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {SSRProvider} from "react-bootstrap";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";
import AppUserLogin from "./login";
import CustomNavbar from "../components/nav/CustomNavbar";
import Footer from "../components/core/footer/Footer";
import CustomHead from "../components/head/CustomHead";
import Index from "./index";
import About from "./about";
import AppSettings from "./settings";


function MyApp({Component, pageProps}) {

    let router = useRef(
        <RouterFactory>
            <Route path="/" element={<Index/>}>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<AppUserLogin  />}/>
                <Route path="/settings" element={<AppSettings />}/>
                <Route path="/404" element={<Error statusCode={404}/>}/>
                <Route path="/500" element={<Error statusCode={500}/>}/>
            </Route>
        </RouterFactory>).current;

    useEffect(() => {

    },[])
    i18next
        .init({
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
    return (<>
        <SSRProvider>
            <RouterContext.Provider value={router}>
                <InitDataContext.Provider value={data}>
                    <I18nextProvider i18n={i18next}>
                        <CustomHead/>
                        <CustomNavbar/>
                        <Component {...pageProps} />
                        <Footer/>
                    </I18nextProvider>
                </InitDataContext.Provider>
            </RouterContext.Provider>
        </SSRProvider>
    </>);
}

export default MyApp;
export const getStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "es", ["index",])),
        },
    };
};