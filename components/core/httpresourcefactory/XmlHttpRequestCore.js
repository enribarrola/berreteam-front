import XMLHttpRequest from 'xhr2';
import {PureComponent} from "react";

/**
 *
 */
export default class XmlHttpRequestCore extends PureComponent {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.xhr = new XMLHttpRequest();
        this.noResponseData = "::NODATA::";
        this.BASE_URL = "https://localhost:8443/api/v1"
        this.ASYNC = true;
        this.RESPONSE_DATA = "";
        this.METHOD = "GET";
    }

    /**
     * ReadyState values:
     * 0: unsent (before send)
     * 1: opened (after send)
     * 2: headers received (after send)
     * 3: loading (after send)
     * 4: done (after send)
     * @param callback
     */
    resourceRequest() {
    };

    /**
     *
     * @param method
     * @param body
     * @param endpoint
     */
    send() {
    };

    /**
     *
     */
    sendToEnd() {
    };

    /**
     *
     * @param callback
     */
    get() {
    };

    /**
     *
     * @param body
     */
    post() {
    };

    /**
     *
     */
    put() {
    };

    /**
     *
     * @param data
     */
    defaultCallback() {
    };
}


XmlHttpRequestCore.prototype.put = function () {
    this.send('PUT');
}
XmlHttpRequestCore.prototype.post = function (body = "") {
    this.send('POST', body);
}
XmlHttpRequestCore.prototype.get = function (endpoint, body, callback = undefined) {
    if (callback == undefined) {
        callback = this.defaultCallback;
    }
    this.resourceRequest(callback);
    this.sendToEnd(endpoint, body);
}

XmlHttpRequestCore.prototype.send = function (endpoint = "/", body = "", method = "GET") {
    if (method != this.METHOD) {
        method = this.METHOD;
    }
    if (endpoint != "/") {
        this.xhr.open(method, this.BASE_URL + endpoint, this.ASYNC);
    } else {
        this.xhr.open(method, this.BASE_URL, this.ASYNC);
    }
    this.xhr.send(body);
}
XmlHttpRequestCore.prototype.sendToEnd = function (endpoint = "/", body = "") {
    this.send(endpoint, body)
}
XmlHttpRequestCore.prototype.resourceRequest = function (callback) {
    this.xhr.onreadystatechange = () => {
        this.defaultCallback("xhr.readystate:" + this.xhr.readyState);
        switch (this.xhr.readyState) {
            case 0:
                this.defaultCallback("readyState: {\"code\": 0, \"unsent\"}" + this.xhr.response)
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 1:
                this.defaultCallback("readyState: {\"code\": 1, \"opened\"}" + this.xhr.response)
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 2:
                this.defaultCallback("readyState: {\"code\": 2, \"headers\"}" + this.xhr.response)
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 3:
                this.defaultCallback("readyState: {\"code\": 3, \"loading\"}" + this.xhr.response)
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 4:
                this.defaultCallback("readyState: {\"code\": 4, \"done\"}" + this.xhr.response)
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                // callback(xhr.response);
                this.defaultCallback(this.RESPONSE_DATA)
                break;
        }
    }
}
XmlHttpRequestCore.prototype.defaultCallback = function (data) {
    console.log(data)
}

