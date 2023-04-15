import Link from "next/link";

export default function NavItem(props) {
    return (<>
        <li className="nav-item">
            <Link href={props.href}>
                <a className="nav-link">
                    {props.text}
                </a>
            </Link>
        </li>
    </>)
}