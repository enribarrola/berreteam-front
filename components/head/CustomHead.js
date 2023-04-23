import Head from "next/head";
export default function CustomHead(params) {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width"/>
            <meta charSet="utf-8"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <title>{params.name}</title>
            <meta name="description" content={params.description}/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="sharedArrayBuffer" description="using cross-orgiin-isolation in the web browser" /> 
            <link rel="stylesheet" href="/styles/ionicons.min.css"/>

        </Head>
    </>)
}