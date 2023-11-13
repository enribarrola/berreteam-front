import {NavDropdown} from "react-bootstrap"
import {useTranslation} from "react-i18next";

export default function UserLoginNavOptions(props) {
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    let isLogged = false; //TODO
    function userIsLogged(isLogged) {
        if (isLogged) {
            return (<>
                <NavDropdown.Item href="/logout">{t("logout")}</NavDropdown.Item>
            </>);
        } else {
            return (<>
                <NavDropdown.Item href="/register">{t("register")}</NavDropdown.Item>
                <NavDropdown.Item href="/login">{t("login")}</NavDropdown.Item>
            </>);
        }
    }

    return (<>
        <NavDropdown title="Client" id="basic-nav-dropdown">
            {userIsLogged(isLogged)}
            {/*<NavDropdown.Divider/>*/}
        </NavDropdown>
    </>);
}
