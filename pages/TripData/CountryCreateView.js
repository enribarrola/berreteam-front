import {useEffect} from "react";

export default function CountryCreateView() {


    async function createCountry(form) {
        try {
            form.addEventListener('submit', async (event) => {
                event.preventDefault()
                const iso = document.getElementById('iso').value
                const name = document.getElementById('name').value
                const nice_name = document.getElementById('nice_name').value
                const iso3 = document.getElementById('iso3').value
                const num_code = document.getElementById('num_code').value
                const phone_code = document.getElementById('phone_code').value
                const res = await fetch(`http://localhost:8080/country/save`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        iso: iso,
                        iso3: iso3,
                        name: name,
                        nice_name: nice_name,
                        num_code: num_code,
                        phone_code: phone_code
                    }),

                    mode: 'no-cors'
                })
                // const response = await res.json();
                console.log("ADSDASDSA")
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        const form = document.getElementById("countryCreateView")
        createCountry(form)

    }, []);

    return (<>
        <hr></hr>
        <h1>COUNTRY CREATE VIEW</h1>

        <form id={"countryCreateView"}>
            <label htmlFor='iso'>iso:</label>
            <input id='iso' type='text'/>
            <br/>
            <label htmlFor='name'>name:</label>
            <input id='name' type='text'/>
            <br/>
            <label htmlFor='nice_name'>nice_name:</label>
            <input id='nice_name' type='text'/>
            <br/>
            <label htmlFor='iso3'>iso3:</label>
            <input id='iso3' type='text'/>
            <br/>
            <label htmlFor='num_code'>num_code:</label>
            <input id='num_code' type='text'/>
            <br/>
            <label htmlFor='phone_code'>phone_code:</label>
            <input id='phone_code' type='text'/>
            <br/>
            <input type='submit' value='Submit'/>
        </form>

        <hr></hr>
    </>)
}