import data from "../../pages/data.json"
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export default function Footer(props) {

    const [t, i18n] = useTranslation('common');
    let contactAddress = data.contact.addr + " - " + data.contact.cp + " " + data.contact.city;

    return (
        <>
            <footer className="sub-bg">
                <div className="container">
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
                                            <p>{data.contact.email}</p></div>
                                    </li>
                                    <li><span className="icon pe-7s-call"></span>
                                        <div className="cont"><h6>{t("contact.tel")}</h6>
                                            <p>{data.contact.tel}</p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/*<div className="item md-mb50">*/}
                            {/*    <div className="title"><h5>{t("recentnews")}</h5></div>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            <div className="img"><a href="/blog-details/blog-details-dark/"><img*/}
                            {/*                src="/img/blog/1.jpg"*/}
                            {/*                alt=""/></a></div>*/}
                            {/*            <div className="sm-post"><a href="/blog-details/blog-details-dark/"><p>The*/}
                            {/*                Start-Up*/}
                            {/*                Ultimate*/}
                            {/*                Guide to Make Your WordPress Journal.</p></a><a*/}
                            {/*                href="/blog/blog-dark/"><span*/}
                            {/*                className="date">14 sep 2022</span></a></div>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <div className="img"><a href="/blog-details/blog-details-dark/"><img*/}
                            {/*                src="/img/blog/2.jpg"*/}
                            {/*                alt=""/></a></div>*/}
                            {/*            <div className="sm-post"><a href="/blog-details/blog-details-dark/"><p>The*/}
                            {/*                Start-Up*/}
                            {/*                Ultimate*/}
                            {/*                Guide to Make Your WordPress Journal.</p></a><a*/}
                            {/*                href="/blog/blog-dark/"><span*/}
                            {/*                className="date">14 sep 2022</span></a></div>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <div className="subscribe"><input type="text"*/}
                            {/*                                              placeholder="Type Your Email"/><span*/}
                            {/*                className="subs pe-7s-paper-plane"></span></div>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="logo"><img src="/img/logo-light.png" alt=""/></div>
                                <div className="social">
                                    {data.contact?.facebook ? <Link href={data.contact.facebook}>
                                        <a><i className="fab fa-facebook-f"></i></a>
                                    </Link> : null}
                                    {data.contact?.twitter ? <Link href={data.contact.twitter}>
                                        <a><i className="fab fa-twitter"></i></a>
                                    </Link> : null}
                                    {data.contact?.instagram ? <Link href={data.contact.instagram}>
                                        <a><i className="fab fa-instagram"></i></a>
                                    </Link> : null}
                                    {data.contact?.youtube ? <Link href={data.contact.youtube}>
                                        <a><i className="fab fa-youtube"></i></a>
                                    </Link> : null}
                                </div>
                                <div className="copy-right"><p>© 2023 - Made with passion by <a
                                    // target="_blank"
                                    href="/">Berreteam</a>.
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
