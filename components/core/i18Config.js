import i18next from "i18next";
import common_en from "../../i18lang/common_en.json";
import common_es from "../../i18lang/common_es.json";

export function i18Config() {
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
}