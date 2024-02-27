import {useEffect} from 'react';
import {useRouter} from "next/navigation";

export default function CreateAppUser() {
    const router = useRouter()


    useEffect(() => {
        // TODO redireccionar si no esta logueado
        // console.log(isLogged)
        // if(isLogged === false){
        //     router.push("/")
        // }
        const form = document.getElementById('createappuser')
        form.addEventListener('submit', async (event) => {
            event.preventDefault()

            const username = document.getElementById('username').value
            const password = document.getElementById('password').value
            const name = document.getElementById('name').value
            const surname = document.getElementById('surname').value
            const email = document.getElementById('email').value

            await fetch('http://localhost:8080/appuser/save', {
                method: 'POST',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'name': name,
                    'surname': surname,
                    'email': email
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors'
            })

            // const resp = await res.json()
            // console.log(resp);
        });

    }, []);
    return (<>
        <form id='createappuser'>
            <div className='mb-3 row'>
                <label htmlFor='username' className='col-sm-2 col-form-label'>Username</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='username'/>
                </div>
            </div>

            <div className='mb-3 row'>
                <label htmlFor='password' className='col-sm-2 col-form-label'>Password</label>
                <div className='col-sm-10'>
                    <input type='password' className='form-control' id='password'/>
                </div>
            </div>
            <div className='mb-3 row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='name'/>
                </div>
            </div>
            <div className='mb-3 row'>
                <label htmlFor='surname' className='col-sm-2 col-form-label'>Surname</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='surname'/>
                </div>
            </div>
            <div className='mb-3 row'>
                <label htmlFor='email' className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='email'/>
                </div>
            </div>
            <input type='submit' className='btn' value='Submit'/>
        </form>
    </>)
}



// const config = {
//     url: "http://localhost:8080/appuser/save",
//     method: 'POST',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
//     data: {'username': username,
//         'password': password,
//         'name': name,
//         'surname': surname,
//         'email': email
//     },
// };
// axios.post(config) .then(function (response) {
//     console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });