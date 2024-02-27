import {useEffect} from 'react';
import UserLoginData from "../config/useStore";
import {useRouter} from 'next/navigation'

export default function AppUserLogin() {

    const {isLogged, setLogged} = UserLoginData();
    const router = useRouter()
    useEffect(() => {
        const form = document.getElementById('loginform')
        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            const username = document.getElementById('username').value
            const password = document.getElementById('password').value
            console.log(username, password)
            try {
                const res = await fetch(`http://localhost:8080/login?username=${username}&password=${password}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'no-cors'
                })
                document.getElementById('username').value = "";
                document.getElementById('password').value = "";
                setLogged(true)
                router.push("/settings")
                console.log(isLogged)
            } catch (err) {
                console.error(err.message);
                setLogged(false)

            }

        });
    }, []);


    return (<>
        <form id='loginform'>
            <div className='col'>
                <div className='row'>
                    <div className='row'>
                        <label htmlFor='username'>Email:</label>
                    </div>
                    <div className='row'>
                        <input id='username' type='text' htmlFor='username'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                    </div>
                    <div className='row'>
                        <input id='password' type='password' htmlFor='password'/>
                    </div>
                </div>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    </>)
}