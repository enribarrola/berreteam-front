import ThreeHandler from "../../components/core/CusThreeHandler/ThreeHandler";
import {useTranslation} from "react-i18next";

export default function Preview(props) {
    const [t, i18n] = useTranslation("common");

    return (<>
        <ThreeHandler>
        </ThreeHandler>
        <div className="renderer"></div>
    </>)
}