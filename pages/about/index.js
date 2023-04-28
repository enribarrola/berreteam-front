import Image from "next/image";

export default function About(props) {
    const crops = props;
    return (<>
        <main>
            <header className="pages-header circle-bg valign">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="cont mt-100 mb-50 text-center">
                                <h1 className="color-font fw-700">Our dedicated team of creatives is
                                    bursting with talent, experience and passion for what we do.</h1>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="img"><Image src="/img/slid/about.jpg" layout={"fill"} alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="half sub-bg">
                    <div className="circle-color">
                        <div className="gradient-circle"></div>
                        <div className="gradient-circle two"></div>
                    </div>
                </div>
            </header>
            <section className="intro-section section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="htit sm-mb30"><h4>Who We Are ?</h4></div>
                        </div>
                        <div className="col-lg-8 offset-lg-1 col-md-8">
                            <div className="text">
                                <div><p className="wow txt mb-10 words chars splitting" data-splitting="true">We
                                    develop
                                    creative
                                    solutions for small and big brands alike, build authentic product identities and
                                    much
                                    more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis
                                    vitae
                                    eut.</p>
                                    <p className="wow txt words chars splitting" data-splitting="true">lorem in id
                                        tristique
                                        in
                                        elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula
                                        odio
                                        posuere
                                        quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus
                                        risus
                                        vitae
                                        feugiat fames aliquet sed.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services bords section-padding lficon">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="sec-head  text-center"><h6 className="wow fadeIn"
                                                                       data-wow-delay=".5s">Best
                                Features</h6>
                                <h3 className="wow color-font">We are a new digital product development agency</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                            <div className="item-box">
                                <div><span className="icon pe-7s-paint-bucket"></span></div>
                                <div className="cont"><h6>Graphic Design</h6>
                                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                            <div className="item-box">
                                <div><span className="icon pe-7s-phone"></span></div>
                                <div className="cont"><h6>Web &amp; Mobile Design</h6>
                                    <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
                            <div className="item-box">
                                <div><span className="icon pe-7s-display1"></span></div>
                                <div className="cont"><h6>Social Media Marketing</h6>
                                    <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="1.1s">
                            <div className="item-box">
                                <div><span className="icon pe-7s-diskette"></span></div>
                                <div className="cont"><h6>Document Legal Policy</h6>
                                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>)
}