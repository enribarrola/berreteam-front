import {useTranslation} from "react-i18next";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import UserLoginNavOptions from "../../pages/login/UserLoginNavOptions";

export default function CustomNavbar(props) {
    // const [t, i18n] = useContext(TranslatorContext);
    const [t, i18n] = useTranslation("common");

    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">{t("company")}</Navbar.Brand>
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
