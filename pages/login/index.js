import {useContext} from "react";
import {InitDataContext, TranslatorContext} from "../../components/core/CusContext";
import {useTranslation} from "react-i18next";


export default function Login(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <div className="non-navbar-content">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="center-margins ">
                            {/*username*/}
                            <div id="usernameField" className="input-group mb-2 ">
                                <div className="col-sm-4 ">
                                    <span className="input-group-text" id="username">{t("login.username")}</span>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" aria-label="username"
                                           aria-describedby="username"/>
                                </div>
                            </div>

                            {/*password*/}
                            <div id="passwordField" className="input-group mb-2 ">
                                <div className="col-sm-4 ">
                                    <span className="input-group-text" id="password">{t("login.password")}</span>
                                </div>
                                <div className="col">
                                    <input type="password" className="form-control" aria-label="password"
                                           aria-describedby="password"/>
                                </div>
                            </div>
                        </div>
                        {/*<p className="card-text">Some quick example text</p>*/}
                        <div className="center-margins ">
                            <div className="input-group mb-2">
                                <div className="col-sm-4 "></div>
                                <div className="col">
                                    <a href="#" className="btn btn-primary">{t("login.tag")}</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}