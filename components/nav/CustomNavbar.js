import NavLinkItem from "./NavItem";
import {useTranslation} from "react-i18next";
import Link from "next/link";


export default function CustomNavbar(props) {
    const [t, i18n] = useTranslation('common');
    return (<>
        <nav className="navbar navbar-expand-lg change ">
            <div className="container">
                <Link href="/">
                    <a className="logo">
                        <img src={"/img/logo-light.png"} alt="logo"/>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span
                    className="icon-bar"><i className="fas fa-bars"></i></span></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <NavLinkItem href="/about" text={t("about")}/>
                        {/*<NavDropdown/>*/}
                        <NavLinkItem href="/contact" text={t("contact.us")}/>
                        <li className="nav-item dropdown">
                                 <span className="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                       role="button" aria-haspopup="true"
                                       aria-expanded="false">Blog</span>
                            <div className="dropdown-menu"><a className="dropdown-item" href="/blog/blog-dark/">Blog
                                Standard</a><a
                                className="dropdown-item" href="/blog-list/blog-list-dark/">Blog List</a><a
                                className="dropdown-item" href="/blog-grid/blog-grid-dark/">Blog Grid</a><a
                                className="dropdown-item" href="/blog-details/blog-details-dark/">Blog Details</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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