/**
 * Style
 */
// import "../public/styles/bootstrap-4/css/bootstrap.css";
import "../public/styles/animate.css";
//https://fontawesome.com/download
import "../libs/fontawesome-free-6.4.0-web/css/all.css";
import "../libs/fontawesome-free-6.4.0-web/js/all.min";
//https://ionic.io/ionicons/usage
import '../public/styles/dark.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * App
 */
import data from "./data.json";
import {useEffect, useRef, useState} from "react";
import RouterFactory from "../components/core/RouterFactory";
import {Route} from "react-router-dom";
import Index from "./index";
import About from "./about";
import Contact from "./contact";
import {InitDataContext, RouterContext} from "../components/core/CusContext";
import Error from "next/error";
import CustomNavbar from "../components/nav/CustomNavbar";
import Footer from "../components/core/footer/Footer";
import CustomHead from "../components/head/CustomHead";
import I18Config from "../components/core/I18nConfig";
import Login from "./login";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import HttpRequestsTestClass from "../components/core/HttpResourceFactory/HttpRequestsTestClass";
import ThreeHandler from "../components/core/CusThreeHandler/ThreeHandler";

function MyApp({Component, pageProps}) {
    const [mData, setData] = useState(null)

    let router = useRef(<RouterFactory>
        <Route path="/" element={<Index props={mData}/>}>
            <Route path="/about" element={<About props={mData}/>}/>
            <Route path="/contact" element={<Contact props={mData}/>}/>
            <Route path="/login" element={<Login props={mData}/>}/>
            <Route path="/*" element={<Error statusCode={404}/>}/>
            <Route path="/404" element={<Error statusCode={404}/>}/>
            <Route path="/500" element={<Error statusCode={500}/>}/>
        </Route>
    </RouterFactory>).current;

    useEffect(() => {


    })

    return (<>
        <InitDataContext.Provider value={data}>
            <RouterContext.Provider value={router}>
                <I18Config>
                    <CustomHead/>
                    {/*<SSRProvider>*/}
                    <HttpRequestsTestClass/>
                    <CustomNavbar props={mData} {...pageProps}/>
                    <ThreeHandler >
                    </ThreeHandler>
                    <div className="renderer"></div>

                    <Component {...pageProps} />
                    {/*</SSRProvider>*/}
                    <Footer props={mData} {...pageProps}/>
                </I18Config>
            </RouterContext.Provider>
        </InitDataContext.Provider>
    </>);
}

export default MyApp;
export const getStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "es", ["index",])),
        }, // revalidate: 60 * 60 * 24 // Try to remove revalidate
    };
};