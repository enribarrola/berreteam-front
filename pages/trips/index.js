import {useEffect, useState} from "react";

export default function Trips() {
    return (<>
        <h1>Trips</h1>
        <UserProfileEdit/>
    </>)
}

export function UserProfileEdit() {
    let [viajes, setViajes] = useState([])

    // let mViajes = []
    let data = {
        id: 0,
        from: "Place 1",
        destination: "Place 2",
        time: new Date().toLocaleDateString('es-ar', {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
        }),
        driver: "Kala",
        imgFrom: "img/trips/landscape_1.jpg",
        imgTo: "img/trips/landscape_2.jpg",
    }
    useEffect(() => {
        var viajes = []
        // for (let j = 0; j < data.length; j++) { //TODO descomentar
        for (let i = 0; i < 9; i++) {
            viajes.push(
                <>
                    {/*<TripCard data={data[j]}/>*/} {/*TODO descomentar*/}
                    <TripCard key={i}  data={data}/>
                </>
            )
        }
        // if (data.length % 2 != 0) {
        //
        //     var md = {
        //         id: 9,
        //         from: "",
        //         destination: "",
        //         time: "",
        //         driver: ""
        //     }
        //     viajes.push(<>
        //         <TripCard data={md}></TripCard>
        //     </>)
        // }
        setViajes(viajes);
    }, [setViajes]);


    return (<>
        <div className="container-fluid body-content">
            <div id="viajesPendientes" className="container-fluid">
                <div className="row">
                    {viajes}
                </div>
            </div>
        </div>
    </>)
}

export function TripCard({data}) {

    return (
        <>
            <div className="trip-card col" >
                <div className="trip-img">
                    <h1>{data.id}</h1>
                    <div className="">
                        <img src={data.imgFrom} alt="" height={18} width={18}/>
                    </div>
                    <p className="from row-sm justify-content-center">{data.from}</p>
                    <p className="to row-sm justify-content-center">{data.destination}</p>
                    <p className="driver row-sm justify-content-center">{data.driver}</p>
                    <p className="time row-sm justify-content-center">{data.time}</p>
                </div>
            </div>
        </>
    )
}
