import { Observable } from 'rxjs/Rx'
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from "../../environments/environment";
import { CoreService } from './core.service';

@Injectable()
export class APIService {
    private CONTENT_TYPE = {
        JSON : "application/json",
        URL_ENCODED : "application/x-www-form-urlencoded"
    }

    protected apiHost: string = environment.apiHost;
    protected defaultHeaders: Array<Headers> = null;
    protected authHeaders: Array<Headers> = null;
    protected page: number;
    protected size: number;

    constructor(
        protected http: Http,
        protected core: CoreService
    ) {
        this.page = 0;
        this.size = 0;
        this.defaultHeaders = new Array<Headers>();
        this.authHeaders = new Array<Headers>();
    }

    private refreshToken(){
        
    }

    /**
    * @param {string} method - api method
    * @param {string} path - api endpoint
    * @param {Boolean = true} authorize - api need authorize or not default : true
    * @param {any} data - body need to send to server
    */
    public callAPI(method: string, apiEndpoint: string, data?: any, h?: Array<any>, authorize: Boolean = true, contentType : string = "JSON") {
        let call;
        let headers = new Headers();
        if (authorize) {
            let accessToken = (this.core && this.core.getUserData()) ? "Bearer " + this.core.getUserData().access_token : null;
            headers.append("Authorization", accessToken);
        }
        if (h) {
            h.map((header) => {
                let headerKey = Object.keys(header)[0];
                let headerValue = header[headerKey];
                headers.append(headerKey, headerValue);
            });
        }
        if (contentType && this.CONTENT_TYPE[contentType]) {
            headers.append("Content-Type", this.CONTENT_TYPE[contentType]);
        }
        switch (method) {
            case 'get':
                call = this.http.get(apiEndpoint, new RequestOptions({ headers: headers }));
                break;
            case 'post':
                call = this.http.post(apiEndpoint, data, new RequestOptions({ headers: headers }));
                break;
            case 'put':
                call = this.http.put(apiEndpoint, data, new RequestOptions({ headers: headers }));
                break;
            case 'patch':
                call = this.http.patch(apiEndpoint, data, new RequestOptions({ headers: headers }));
            case 'delete':
                call = this.http.delete(apiEndpoint, new RequestOptions({ headers: headers, body: data }));
                break;
            default: // GET
                call = this.http.request(apiEndpoint, new RequestOptions({ method: method, headers: headers, body: data }));
                break;
        }
        if (call) {
            return call.map(res => {
                if(res.status === 200){
                    let data = res.json();
                    return data;
                }
                else if(res.status === 204){
                    return null;
                }
            }).catch((error) => {
                if (error.status === 0) {
                    error.status = 504;
                    error.statusText = "Gateway Time-out";
                }
                return Observable.throw(error);
            });
        }
    }
    protected getApiEndpoint(path: string, params?: Array<any>): string {
        let apiEndpoint: string = path;
        if (params) {
            let paramLength = params.length;
            for (let i = 0; i < paramLength; i++) {
                apiEndpoint = apiEndpoint.replace("$" + (i + 1), params[i]);
            }
        }
        if (!path.startsWith("http"))
            apiEndpoint = this.apiHost + apiEndpoint.replace(/\/\//g, "\/").replace("\/", "");
        return apiEndpoint;
    }

    protected initDefaultHeaders(defaultHeaders: Array<any>) {
        this.defaultHeaders = defaultHeaders;
    }

    protected initAuthHeaders(authHeaders: Array<any>) {
        this.authHeaders = authHeaders;
    }

    private checkToken(key, value) {

    }

    private getToken(key) {

    }
}