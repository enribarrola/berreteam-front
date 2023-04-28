import {Nav} from "react-bootstrap"
import {useTranslation} from "react-i18next";

export default function UserLoginNavOptions(props) {
    const crops = props;
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <Nav.Link href="/login">{t("login.tag")}</Nav.Link>
        <Nav.Link href="/signin">{t("signin")}</Nav.Link>
        <Nav.Link href="/logout">{t("logout")}</Nav.Link>
    </>);

}
