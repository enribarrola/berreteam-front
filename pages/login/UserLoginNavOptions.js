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

        </NavDropdown>
    </>);
}
