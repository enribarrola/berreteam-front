import {useContext} from "react";
// import {TranslatorContext} from "../CusContext";

export default function Logger() {
    // const [t,i18n] = useContext(TranslatorContext)
    let levels = ['log', 'dir', 'error', 'count', 'info'];
    let logger = {}
    levels.forEach(function (level) {
        logger[level] = function () {
            let args = Array.prototype.slice(arguments);
            args.unshift('[' + this.constructor.displayName + ']');
            console[level].apply(console, args);
        };
    });
}
