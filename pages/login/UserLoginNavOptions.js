import {Nav} from "../../libs/react-bootstrap";
import {useContext} from "react";
import {InitDataContext, TranslatorContext} from "../../components/core/CusContext";
import {useTranslation} from "react-i18next";

export default function UserLoginNavOptions(props) {
    const crops = props;
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <Nav.Link href="/login">{t("login")}</Nav.Link>
        <Nav.Link href="/signin">{t("signin")}</Nav.Link>
        <Nav.Link href="/logout">{t("logout")}</Nav.Link>
    </>);

}
