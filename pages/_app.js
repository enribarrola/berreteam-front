import '../styles/dark.css'
import {I18nextProvider} from "react-i18next";
import data from "./data.json";
import CustomHead from "../components/head/CustomHead";
import i18next from "i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";


function MyApp({Component, pageProps}) {
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
    return (<>
        <I18nextProvider i18n={i18next}>
            <CustomHead name={data.name} description={data.description}/>

            <Component {...pageProps} />
        </I18nextProvider>
    </>);

}

export default MyApp
