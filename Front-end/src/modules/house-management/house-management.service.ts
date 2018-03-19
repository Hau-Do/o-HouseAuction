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
		getHouses : "house?page=$1&size=$2",
		getHouse : "house/$1"
	}

	constructor(protected http : Http, protected core : CoreService){
		super(http, core);
		this.apiHost += "oha-house/";
	}

	public getHouses(callback){
		let apiEndpoint = this.getApiEndpoint(this.apiName.getHouses, [0,10]);
		this.callAPI("GET", apiEndpoint).subscribe(res => {
			callback(res, null);
		},
		err => {
			callback(null, err);
		});
	}

	public getHouse(houseId, callback){
		let apiEndpoint = this.getApiEndpoint(this.apiName.getHouse, [houseId]);
		this.callAPI("GET", apiEndpoint).subscribe(res => {
			callback(res, null);
		},
		err => {
			callback(null, err);
		});
	}

	public countDown(house, start : Date, end : Date){
		return Observable.interval(1000).subscribe(()=>{
		  let t = (new Date(end.getTime() - start.getTime())).getTime();
		  let milisecond = t % 1000 === 0 ? 999 : t % 1000;
		  t = Math.floor((t - milisecond) / 1000);
		  let second = t % 60 === 0 ? 59 : t % 60;
		  t = Math.floor((t - second) / 60);
		  let minute = t % 60 === 0 ? 59 : t % 60;
		  t = Math.floor((t - minute) / 60);
		  let hour = t % 24 === 0 ? 23 : t % 24;
		  t = Math.floor((t - hour) / 24);
		  let day = t % 365;
		  house.displayTimeLeft = {
			day : day,
			hour : hour,
			minute : minute
		  };
		  start = new Date();
		});  
	  }
}