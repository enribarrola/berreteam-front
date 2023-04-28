import {Container, Nav, Navbar} from "../../libs/react-bootstrap";
import {useContext} from "react";
import {InitDataContext, TranslatorContext} from "../core/CusContext";
import UserLoginNavOptions from "../../pages/login/UserLoginNavOptions";
import Image from "next/image";
import {useTranslation} from "react-i18next";


export default function CustomNavbar(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext);
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <Navbar variant={"dark"} bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" className={"logo"}>
                    <Image src={"/img/logo-light.png"} width={"60"} height={"60"} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">{t("about")}</Nav.Link>
                        <Nav.Link href="/contact">{t("contact.us")}</Nav.Link>
                        <UserLoginNavOptions props={props}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}