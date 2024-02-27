import {useContext, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {InitDataContext} from "../CusContext";
import Script from "next/script";

export default function Footer() {
    const initDataContext = useContext(InitDataContext)
    const [t, i18n] = useTranslation("common");
    let contactAddress = initDataContext.contact.addr + " - " + initDataContext.contact.cp + " " + initDataContext.contact.city;
    let contactList = [];
    useEffect(() => {
        Object.keys(initDataContext.contact.social).forEach(key => {
            if (key === "facebook") {
                contactList.push(<a href={key}>
                    <a><i className={"fab fa-" + key + "-f"}></i></a>
                </a>);
            } else {
                contactList.push(<a href={key}>
                    <a><i className={"fab fa-" + key}></i></a>
                </a>);
            }
        });
    })


    return <>
        <footer className="sub-bg">
            <div className={"container"}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="item md-mb50">
                            <div className="title"><h5>{t("contact.us")}</h5></div>
                            <ul>
                                <li><span className="icon pe-7s-map-marker"></span>
                                    <div className="cont"><h6>{t("contact.address")}</h6>
                                        <p>{contactAddress}</p></div>
                                </li>
                                <li><span className="icon pe-7s-mail"></span>
                                    <div className="cont"><h6>{t("contact.email")}</h6>
                                        {/*<p>{initDataContext.contact.email}</p>*/}
                                    </div>
                                </li>
                                <li><span className="icon pe-7s-call"></span>
                                    <div className="cont"><h6>{t("contact.tel")}</h6>
                                        <p>{initDataContext.contact.tel}</p></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <div className="item">
                            <div className="logo"><img src="/img/logo-light.png" width={"60"} height={"60"} alt=""/>
                            </div>
                            <div className="social">
                                {contactList}
                            </div>
                            <div className="copy-right"><p>© 2023 - <a
                                href="/">NextJs</a>.
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossOrigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                crossOrigin="anonymous"></Script>
    </>
}
