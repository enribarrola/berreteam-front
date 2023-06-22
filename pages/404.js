export default function error404(props) {
    const crops = props;

    return (
        <>
            <div className="non-navbar-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-sm-3">
                            <div className="img-fluid">
                                <img src={"/img/warning-sign.png"} alt={"warning-sign"}/>
                                <h1>404</h1>

                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </>
    )
}