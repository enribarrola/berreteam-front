import Head from "next/head";
import {useContext} from "react";
import {InitDataContext} from "../core/CusContext";
import Script from "next/script";

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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
            <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></Script>
        </Head>
    </>)
}