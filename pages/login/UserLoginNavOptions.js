import {Nav, NavDropdown} from "react-bootstrap"
import {useTranslation} from "react-i18next";
import {useStore} from "zustand";

export default function UserLoginNavOptions(props) {
    const crops = props;
    const [t, i18n] = useTranslation("common");
    const [isLogged, setLogged] = useStore()

    return (<>
        <NavDropdown title="Client" id="basic-nav-dropdown">

            <NavDropdown.Item href="">

            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">{t("base.lightMode")}</NavDropdown.Item>
            <NavDropdown.Divider/>
            {isLogged ? (<>
                    <NavDropdown.Item href="/logout">{t("logout")}</NavDropdown.Item></>) :
                (<>
                    <NavDropdown.Item href="/login">{t("login.tag")}</NavDropdown.Item>
                    <NavDropdown.Item href="/signin">{t("signin")}</NavDropdown.Item>
                </>)
            }
        </NavDropdown>
    </>);
}
