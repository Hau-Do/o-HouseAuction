/**
 * 
 */
 import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';
 import { APIService } from '../../shared/services/api.service';

 @Injectable()
 export class AccountManagementService extends APIService {
 	private apiName = {
 		getAccounts : "account?page=$1&size=$2"
 	}

 	constructor (protected http : Http){
 		super(http);
 		this.apiHost += "account/";
 	}

 	getAccounts(){
 		let apiEndpoint = this.getApiEndpoint(this.apiName.getAccounts , [1, 10]);
 		this.callAPI("GET", apiEndpoint).subscribe(
 			res =>{

 			},
 			err =>{

 			}
 		);
 	}
 }