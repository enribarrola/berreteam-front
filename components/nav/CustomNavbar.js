import {useTranslation} from "react-i18next";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Image from "next/image";
import {Link} from "react-router-dom";
import {useContext} from "react";
import NavbarContext from "../../pages/_app";

export default function CustomNavbar(props) {
    const [t, i18n] = useTranslation('common');
    const navContextValue = useContext(NavbarContext);
    return (<>
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/" className={"logo"}>
                        <Image src={"/img/logo-light.png"} width={"60"} height={"60"} alt="logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={"/about"}><Link to={"/about"}>About</Link></Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/*<nav className="navbar navbar-expand-lg change ">*/}
        {/*    <div className="container">*/}
        {/*        <Link href="/">*/}
        {/*            <a className="logo">*/}
        {/*                <img src={"/img/logo-light.png"} alt="logo"/>*/}
        {/*            </a>*/}
        {/*        </Link>*/}
        {/*        <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
        {/*                data-target="#navbarSupportedContent"*/}
        {/*                aria-controls="navbarSupportedContent" aria-expanded="false"*/}
        {/*                aria-label="Toggle navigation"><span*/}
        {/*            className="icon-bar"><i className="fas fa-bars"></i></span></button>*/}

        {/*        <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
        {/*            <ul className="navbar-nav ml-auto">*/}
        {/*                <NavLinkItem href="/about" text={t("about")}/>*/}
        {/*                /!*<NavDropdown/>*!/*/}
        {/*                <NavLinkItem href="/contact" text={t("contact.us")}/>*/}
        {/*                <li className="nav-item dropdown">*/}
        {/*                         <span className="nav-link dropdown-toggle"*/}
        {/*                               data-toggle="dropdown"*/}
        {/*                               role="button" aria-haspopup="true"*/}
        {/*                               aria-expanded="false">Blog</span>*/}
        {/*                    <div className="dropdown-menu"><a className="dropdown-item" href="/blog/blog-dark/">Blog*/}
        {/*                        Standard</a><a*/}
        {/*                        className="dropdown-item" href="/blog-list/blog-list-dark/">Blog List</a><a*/}
        {/*                        className="dropdown-item" href="/blog-grid/blog-grid-dark/">Blog Grid</a><a*/}
        {/*                        className="dropdown-item" href="/blog-details/blog-details-dark/">Blog Details</a>*/}
        {/*                    </div>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</nav>*/}

    </>)
}


// function NavDropdown() {
//     return <li className="nav-item dropdown">
//         <span className="nav-link dropdown-toggle"
//               data-toggle="dropdown"
//               role="button" aria-haspopup="true"
//               aria-expanded="false">Blog</span>
//         <div className="dropdown-menu"><a className="dropdown-item" href="/blog/blog-dark/">Blog
//             Standard</a><a
//             className="dropdown-item" href="/blog-list/blog-list-dark/">Blog List</a><a
//             className="dropdown-item" href="/blog-grid/blog-grid-dark/">Blog Grid</a><a
//             className="dropdown-item" href="/blog-details/blog-details-dark/">Blog
//             Details</a>
//         </div>
//     </li>;
// }