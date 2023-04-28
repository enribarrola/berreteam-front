import Image from "next/image";

export default function Contact(props) {
    const crops = props;
    return (<>
        <main>
            <header className="pages-header circle-bg valign">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="cont mt-100 mb-50 text-center"><h1 className="color-font fw-700">Contact
                                us</h1></div>
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
        </main>
    </>)

}