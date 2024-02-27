import CustomNavbar from "../components/nav/CustomNavbar";


export default function Index({userLoginData}) {

    return (<>
        <CustomNavbar userLoginData={userLoginData} />
        <div className="hero-bg non-navbar-content container-fluid">
            <div className="container">
                <h1>INDEX</h1>
            </div>
        </div>
    </>);
}
