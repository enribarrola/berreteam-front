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

            <link rel="stylesheet" href="/styles/ionicons.min.css"/>
            {/*<style data-href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap">*/}
            {/*</style>*/}
            {/*<style data-href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap">*/}
            {/*</style>*/}

        </Head>
    </>)
}