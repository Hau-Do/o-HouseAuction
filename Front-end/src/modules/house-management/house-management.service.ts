/**
 * 
 */
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { APIService } from "../../shared/services/api.service";
import { CoreService } from "../../shared/services/core.service";

@Injectable()
export class HouseManagementService extends APIService{
	private apiName = {
		"getHouse" : "house?page=$1&size=$2"
	}

	constructor(protected http : Http, protected core : CoreService){
		super(http, core);
		this.apiHost += "oha-house/";
	}

	public getHouses(callback){
		let apiEndpoint = this.getApiEndpoint(this.apiName.getHouse, [0,10]);
		super.callAPI("GET", apiEndpoint).subscribe(res => {
			console.log(res);
		},
		err => {
			console.log(err);
		});
	}
}