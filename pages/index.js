import {HeroView} from "../components/hero-view/HeroView";
import {Carousel, CarouselItem} from "react-bootstrap";
import XmlHttpRequestCore from "../components/core/HttpResourceFactory/XmlHttpRequestCore";


export default function Index(props) {

    // TODO fetch from db info
    const mdata = {
        title: "Lorem ipsum dolor sitame",
        subtitle: "don't harame",
        shortDescription: "noResponseData",
        smallImage: "https://dummyimage.com/1350x760/fafafa/0d1bde.jpg"
    };
    const mdata2 = {
        title: "Joystick",
        subtitle: "Xbox 360",
        shortDescription: "yoystick gamer xbox 360",
        smallImage: "https://dummyimage.com/1350x760/fafafa/0d1bde.jpg"
    };

    let xml = new XmlHttpRequestCore(props)
    xml.get("http://localhost:8080/api/v1/rest/msgservice",null,null);



    return (<>
        <div className="hero-bg non-navbar-content container-fluid">
            <div className="container">
                <Carousel slide={true} controls={true} touch={true} >
                    <CarouselItem >
                        <HeroView data={mdata} ></HeroView>
                    </CarouselItem>
                    <CarouselItem  >
                        <HeroView data={mdata2}></HeroView>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    </>);
}
