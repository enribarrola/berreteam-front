import Head from "next/head";
import {useContext} from "react";
import {InitDataContext} from "../core/CusContext";

export default function CustomHead(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext)
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <title>{initDataContext.name}</title>
            <meta name="description" content={initDataContext.description}/>
            <link rel="icon" href="./img/favicon.ico"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                  crossOrigin="anonymous"/>
        </Head>
    </>)
}