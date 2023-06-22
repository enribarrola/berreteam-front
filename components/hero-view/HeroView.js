export function HeroView({data}) {

    let title = null;
    let subtitle = null;
    let shortDescription = null;
    let smallImage = "/img/hero.jpg";

    if (data.subtitle) {
        subtitle = data.subtitle;
    }
    if (data.title) {
        title = data.title;
    }
    if (data.shortDescription) {
        shortDescription = data.shortDescription;
    }
    if (data.smallImage) {
        smallImage = data.smallImage;
    }


    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="hero-inner-img  ">
                        <img src={smallImage} alt=""/>
                    </div>
                </div>
                <div className="col-sm-2">
                </div>
                <div className="col-sm-4">
                    <div className="row ">
                        <h4 className={"hero-title"}>{title}</h4>
                        <h5 className={"hero-subtitle"}>{subtitle}</h5>
                        <p className={"hero-description"}>{shortDescription}</p>
                    </div>
                </div>
                <div className="col-sm-2">
                </div>
            </div>
        </div>);
}
