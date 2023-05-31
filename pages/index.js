import {HeroView} from "../components/hero-view/HeroView";


export default function Index(props) {

    const mdata = {
        title: "Lorem ipsum dolor sitame",
        subtitle:"don't harame",
        shortDescription: "noResponseData",
        smallImage: "/img/joystick.jpg"
    }

    return (<>

        <div className="hero-bg non-navbar-content container-fluid">
            <div className="container">
                <HeroView data={mdata}></HeroView>
            </div>
        </div>
    </>);
}
