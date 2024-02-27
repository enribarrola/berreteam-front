import CreateAppUser from "../appuser/CreateAppUser";

export default function Settings() {

    return (<>
        <hr/>
        <div className="row">
            <div className="col-sm-1">
                <nav className="nav flex-column">
                    <a className="nav-link" aria-current="page" href="#">User</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                </nav>
            </div>
            <div className="col">
                <div className="hero-bg non-navbar-content container-fluid">
                    <div className="container">
                        <h1>AppSettings</h1>
                        <hr/>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#create">Create</a>
                            </li>
                        </ul>
                        <hr/>
                        <CreateAppUser />
                    </div>
                </div>
            </div>
        </div>
    </>);
}
