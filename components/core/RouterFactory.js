import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import Index from "../../pages";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Login from "../../pages/login";
import Preview from "../../pages/preview";
import Error from "next/error";
export default function RouterFactory({...pageProps}) {

    let router;

    useEffect(() => {

        router = (<BrowserRouter>
            <Routes location={"/"}>
                <Route path="/" element={<Index {...pageProps}/>}>
                    <Route path="/about" element={<About {...pageProps}/>}/>
                    <Route path="/contact" element={<Contact {...pageProps}/>}/>
                    <Route path="/login" element={<Login {...pageProps}/>}/>
                    <Route path="/preview" element={<Preview {...pageProps}/>}/>
                    {/*TODO no borrar para no olvidar... no se debe usar*/}
                    {/*<Route path="/*" element={<Error statusCode={404}/>}/>*/}
                    <Route path="/404" element={<Error statusCode={404}/>}/>
                    <Route path="/500" element={<Error statusCode={500}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>)


    })
    return (<>
        {router}
    </>)
}