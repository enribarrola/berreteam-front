import {useTranslation} from "react-i18next";
import {Container, Nav, Navbar, NavDropdown} from "../../libs/react-bootstrap";
import Image from "next/image";
import About from "../../pages/about";
import {Link} from "react-router-dom";


export default function GBANavbar(props) {
    const [t, i18n] = useTranslation('common');
    return (<>
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Link to="/" className={"logo"}>
                        <Image src={"/img/logo-light.png"} width={"60"} height={"60"} alt="logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to={"/about"} element={<About/>}>About</Link></Nav.Link>
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