
export default function GBAPanel(params) {

    return (
        <>
            <button className="btn btn-primary show" id="play">Play</button>
            <button id="pause" className="btn btn-warning hide">Pause</button>
            <button id="restart" className="btn btn-danger">Restart</button>
        </>
    )
}