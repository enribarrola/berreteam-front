import XMLHttpRequest from 'xhr2';
import {PureComponent} from "react";

/**
 *
 */
export default class XmlHttpRequestCore extends PureComponent {
    /**
     *
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
}

/**
 *
 */
XmlHttpRequestCore.prototype.put = function () {
    this.send('PUT');
}
/**
 *
 * @param body
 */
XmlHttpRequestCore.prototype.post = function (body = "") {
    this.send('POST', body);
}
/**
 *
 * @param endpoint
 * @param body
 * @param callback
 */
XmlHttpRequestCore.prototype.get = function (endpoint, body, callback = undefined) {
    if (callback != undefined) {
        this.defaultCallback = callback;
    }
    this.resourceRequest(callback);
    this.sendToEnd(endpoint, body);
}
/**
 *
 * @param endpoint
 * @param body
 * @param method
 */
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
/**
 *
 * @param endpoint
 * @param body
 */
XmlHttpRequestCore.prototype.sendToEnd = function (endpoint = "/", body = "") {
    this.send(endpoint, body)
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
XmlHttpRequestCore.prototype.resourceRequest = function (callback) {
    this.xhr.onreadystatechange = () => {
        this.defaultCallback("xhr.readystate:" + this.xhr.readyState);
        switch (this.xhr.readyState) {
            case 0:
                this.defaultCallback("stage_0");
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 1:
                this.defaultCallback("stage_1");
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 2:
                this.defaultCallback("stage_2");
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 3:
                this.defaultCallback("stage_3");
                this.defaultCallback(this.xhr.getAllResponseHeaders())
                break;
            case 4:
                this.defaultCallback("stage_4");
                this.RESPONSE_DATA = this.xhr.response;
                this.defaultCallback("response: "+this.RESPONSE_DATA)
                break;
        }
    }
}
/**
 *
 * @param data
 */
XmlHttpRequestCore.prototype.defaultCallback = function (data) {
    console.log(data)
}

