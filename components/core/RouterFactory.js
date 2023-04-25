
import {BrowserRouter,Routes} from "react-router-dom";
export default function RouterFactory ({children},params){

    return (<>
        <BrowserRouter >
            <Routes location={"/"}>
                {children}
            </Routes>
        </BrowserRouter>
    </>)
}