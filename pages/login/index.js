import {useEffect} from 'react';
import {useRouter} from 'next/navigation'
import CustomNavbar from "../../components/nav/CustomNavbar";

export default function AppUserLogin({userLoginData}) {

    const {isLogged, setLogged} = userLoginData();
    // console.log(userLoginData)
    console.log(isLogged,setLogged)
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
            }

        });
    }, []);


    return (<>
        <CustomNavbar userLoginData={userLoginData}/>
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