/**
 * 
 */
 import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';
 import { APIService } from '../../shared/services/api.service';

 @Injectable()
 export class AccountManagementService extends APIService {
 	private apiName = {
 		getAccounts : "account"
 	}

 	constructor (protected http : Http){
 		super(http);
 		this.apiHost += "oha-account/";
 	}

 	getAccounts(){
 		let apiEndpoint = this.getApiEndpoint(this.apiName.getAccounts);
 		this.callAPI("GET", apiEndpoint).subscribe(
 			data =>{
 				console.log(data);
 			},
 			err =>{
 				console.log(err);
 			}
 		);
 	}
 }