import {useContext} from "react";
import {InitDataContext, TranslatorContext} from "../core/CusContext";
import {useTranslation} from "react-i18next";
import UserLoginNavOptions from "../../pages/login/UserLoginNavOptions";
import Image from "next/image";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function CustomNavbar(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext);
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Link</Nav.Link>

                        <UserLoginNavOptions />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>)
}

// <Navbar variant={"dark"} bg="dark" expand="lg">
//     <Container>
//         <Navbar.Brand href="/" className={"logo"}>
//             <Image src={"/img/logo-light.png"} width={"60"} height={"60"} alt="logo"/>
//         </Navbar.Brand>
//         <Navbar.Toggle/>
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 <Nav.Link href="/about">{t("about")}</Nav.Link>
//                 <Nav.Link href="/contact">{t("contact.us")}</Nav.Link>
//                 <UserLoginNavOptions props={crops}/>
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>