export default function GBAPanel(params) {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2  text-right">
                        <button className="btn btn-primary show" id="play">Play</button>
                    </div>
                    <div className="col-sm-2  text-center">
                        <button id="pause" className="btn btn-warning hide">Pause</button>
                    </div>
                    <div className="col-sm-2 text-left">
                        <button id="restart" className="btn btn-danger">Restart</button>
                    </div>
                </div>
            </div>
        </>
    )
}