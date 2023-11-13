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
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap dependency
/**
 * App
 */
import RouterFactory from "../components/core/RouterFactory";


import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import CustomHead from "../components/head/CustomHead";
import i18next from "i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";
import {I18nextProvider} from "react-i18next";
import {InitDataContext} from "../components/core/CusContext";
import data from "./data.json"

function MyApp({Component, pageProps}) {

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
            <InitDataContext.Provider value={data}>
                <I18nextProvider i18n={i18next}>
                    <CustomHead/>
                    <Component {...pageProps} />
                    <RouterFactory {...pageProps}/>
                    {/*{router}*/}
                </I18nextProvider>
            </InitDataContext.Provider>
        </>
    );
}

export default MyApp;
export const getStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "es", ["index",])),
        }, // revalidate: 60 * 60 * 24 // Try to remove revalidate
    };
};