import i18next from "i18next";
import common_en from "../../i18lang/common_en.json";
import common_es from "../../i18lang/common_es.json";
import {I18nextProvider, initReactI18next, useTranslation} from "react-i18next";
import {useEffect} from "react";

export default function I18nConfig({children}) {

    useEffect(() => {


    })
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

    return (<I18nextProvider i18n={i18next}>
        {/*<TranslatorContext.Provider value={useTranslation("common")}>*/}
        {children}
        {/*</TranslatorContext.Provider>*/}
    </I18nextProvider>)
}
