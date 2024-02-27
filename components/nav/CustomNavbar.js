import {useTranslation} from "react-i18next";
import UserLoginData from "../../pages/config/useStore";

export default function CustomNavbar() {
    const [t, i18n] = useTranslation("common");
    const {isLogged, setLogged} = UserLoginData();

    // console.log(isLogged)
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
                            {isLogged ? (<>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/settings">Settings</a>
                                </li>
                                    <a className="nav-link " aria-current="page" href="/logout">{t("logout")}</a></>) :
                                (<>
                                    <a className="nav-link " aria-current="page" href="/login">{t("login.tag")}</a>
                                    <a className="nav-link " aria-current="page" href="/signin">{t("signin")}</a>
                                </>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}




