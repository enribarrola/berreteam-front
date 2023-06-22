import XmlHttpRequestCore from "./XmlHttpRequestCore";


export default function HttpRequestsTestClass ({children}) {

    let  xml = new XmlHttpRequestCore()
    xml.get("http://localhost:8080/",{},null)
    return(
        <>
            {children}
        </>
    )
}