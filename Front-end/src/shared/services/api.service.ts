import {Observable} from 'rxjs/Rx'
import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';


export interface IMockupAPI {}

@Injectable()
export class MockupAPI implements IMockupAPI {

	constructor(protected http: Http) { }

    /**
     * @param {string} method - api method
     * @param {string} path - api endpoint
     * @param {Boolean = false} authorize - api need authorize or not default : false
     * @param {any} data - body need to send to server
     */
     public callAPI(method : string, apiEndpoint : string, authorize : Boolean = false, data?:any){
     	let call;
     	let headers = new Headers();
     	if(authorize){
     		let accessToken = "";
     		headers.append("Authorization", accessToken);
     	}
     	switch (method) {
     		case 'get':
     		call = this.http.get(apiEndpoint, new RequestOptions({headers: headers}));
     		break;
     		case 'post':
     		call = this.http.post(apiEndpoint, data,new RequestOptions({headers: headers}));
     		break;
     		case 'put':
     		call = this.http.put(apiEndpoint, data,new RequestOptions({headers: headers}));
     		break;
     		case 'patch':
     		call = this.http.patch(apiEndpoint, data, new RequestOptions({headers : headers}));
     		case 'delete':
     		call = this.http.delete(apiEndpoint, new RequestOptions({headers: headers, body : data}));
     		break;
            default: // GET
            call = this.http.request(apiEndpoint, new RequestOptions({method : method, headers : headers, body : data}));
            break;
        }
        if(call){
        	return call.map(res => {
        		if(res._body !== "" && res._body !== null){
        			res._body = '{"data" : ' + res._body + ', "status" : ' + res.status + '}';
        			let result = res.json();
        			if(result && result.data && result.data.name === "MongoError")
        			{
        				let error = {
        					status : 500,
        					statusText : result["name"] + " : " + result["message"]
        				}
        				return Observable.of(error);
        			}
        			return result;
        		}

        	}).catch((error) => {
        		if(error.status === 0){
        			error.status = 504;
        			error.statusText = "Gateway Time-out";
        		}
        		return Observable.of(error);
        	});	
        }
    }
    public getApiEndpoint(path : string, apiName : string, params : Array<string>) : string{
    	let apiEndpoint : string = apiName;
    	let paramLength = params.length;
    	for(let i = 0; i < paramLength; i++){
    		apiEndpoint = apiEndpoint.replace("$" + (i + 1), params[i]);
    	}
    	return apiEndpoint;
    }
}