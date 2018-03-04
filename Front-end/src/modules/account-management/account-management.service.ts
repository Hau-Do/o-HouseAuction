/**
* 
*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APIService } from '../../shared/services/api.service';
import { CoreService } from "../../shared/services/core.service";

@Injectable()
export class AccountManagementService extends APIService {
	private apiName = {
		getAccounts: "account"
	}
	private returnUrl : string = "";

	constructor(protected http: Http, protected core: CoreService) {
		super(http, core);
		this.apiHost += "oha-account/";
		let defaults = [

		];
		let authInfos = [
			{ Authorization: 'userData.accessToken' }
		]
		this.initDefaultHeaders(defaults);
		this.initAuthHeaders(authInfos);
	}

	getAccounts() {
		let apiEndpoint = this.getApiEndpoint(this.apiName.getAccounts);
		this.callAPI("GET", apiEndpoint).subscribe(
			data => {
				console.log(data);
			},
			err => {
				console.log(err);
			}
		);
	}

	signin(data) {
		console.log("Basic " + btoa(data.clientId + ":" + data.secret));
		let headers = [
			{ Authorization: "Basic " + btoa(data.clientId + ":" + data.secret) }
		];
		delete data.clientId;
		delete data.secret;
		return this.callAPI("post", this.getApiEndpoint("http://localhost:8080/uaa/oauth/token?grant_type=$1&username=$2&password=$3", [data.grant_type, data.username, data.password]), null, headers, false, "URL_ENCODED");
	}
}