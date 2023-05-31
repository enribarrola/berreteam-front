import Link from "next/link";
import {useContext, useEffect} from "react";
import Image from "next/image";
import {InitDataContext} from "../core/CusContext";
import {useTranslation} from "react-i18next";
import Script from "next/script";

export default function Footer(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext)
    const [t, i18n] = useTranslation("common");
    let contactAddress = initDataContext.contact.addr + " - " + initDataContext.contact.cp + " " + initDataContext.contact.city;
    let contactList = [];
    useEffect(() => {
        Object.keys(initDataContext.contact.social).forEach(key => {
            if (key == "facebook") {
                contactList.push(<Link href={key}>
                    <a><i className={"fab fa-" + key + "-f"}></i></a>
                </Link>);
            } else {
                contactList.push(<Link href={key}>
                    <a><i className={"fab fa-" + key}></i></a>
                </Link>);
            }
        });
    })


    return (<>
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
                                        <p>{initDataContext.contact.email}</p></div>
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
                            <div className="logo"><Image src="/img/logo-light.png" width={"60"} height={"60"} alt=""/>
                            </div>
                            <div className="social">
                                {contactList}
                            </div>
                            <div className="copy-right"><p>© 2023 - <Link
                                href="/">Berreteam</Link>.
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
                integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
                crossOrigin="anonymous"></Script>
    </>)
}
