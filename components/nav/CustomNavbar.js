import {useTranslation} from "react-i18next";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import UserLoginNavOptions from "../../pages/login/UserLoginNavOptions";

export default function CustomNavbar() {
    const [t, i18n] = useTranslation("common");

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/trips">Trips</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/login">Login</a>
                            </li>
                            {isLogged ? (<>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/settings">Settings</a>
                                </li>
                                    <NavDropdown.Item href="/logout">{t("logout")}</NavDropdown.Item></>) :
                                (<>
                                    <NavDropdown.Item href="/login">{t("login.tag")}</NavDropdown.Item>
                                    <NavDropdown.Item href="/signin">{t("signin")}</NavDropdown.Item>
                                </>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}




