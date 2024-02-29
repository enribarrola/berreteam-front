import {useEffect} from "react";

export default function CountryEditView() {

    let countryData = {}
    async function getCountryById(id) {
        try {
            const res = await fetch(`http://localhost:8080/country/get/`+id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors'
            })
            const resp = await res.json();
            console.log(resp);
            countryData = resp
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    getCountryById(10)

    useEffect(() => {

    }, []);

    return (<>
        <hr></hr>
        <h1>countryEditView</h1>



        <hr></hr>
    </>)
}