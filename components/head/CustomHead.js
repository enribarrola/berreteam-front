import Head from "next/head";
import {useContext} from "react";
import {InitDataContext} from "../core/CusContext";

export default function CustomHead(props) {
    const crops = props;
    const initDataContext = useContext(InitDataContext)
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width"/>
            <meta charSet="utf-8"/>
            <title>{initDataContext.name}</title>
            <meta name="description" content={initDataContext.description}/>
            <link rel="icon" href="./img/favicon.ico"/>
        </Head>
    </>)
}