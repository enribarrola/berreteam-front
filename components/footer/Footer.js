import Link from "next/link";
import {useContext, useEffect} from "react";
import Image from "next/image";
import {Container} from "../../libs/react-bootstrap";
import {InitDataContext, TranslatorContext} from "../core/CusContext";
import {useTranslation} from "react-i18next";

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
            <Container>
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
                            <div className="copy-right"><p>© 2023 - Made with passion by <Link
                                href="/">Berreteam</Link>.
                            </p></div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    </>)
}
