import CustomHead from "../../components/head/CustomHead";
import UserNavbar from "../../components/userInterface/UserNavbar";
import Footer from "../../components/footer/Footer";
import {useTranslation} from "react-i18next";
import CustomNavbar from "../../components/nav/CustomNavbar";

export default function Index(data, ...pageProps) {
    const [t, i18n] = useTranslation('common');

    return (<>
            <CustomHead/>
            {/*<CustomNavbar data={data}/>*/}
            <div className="non-navbar-content">
                <div className="container">
                    <div className="card">
                        {/*<img className="card-img-top" src="..." alt="Card image cap"></img>*/}
                        <div className="card-body">
                            {/*<h5 className="card-title">Card title</h5>*/}
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
                                        <a href="#" className="btn btn-primary">{t("login.login")}</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}