import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class CoreService {

	public document : any = null;
	public window : any = null;
	public $ : any = null;

	private localStorage : any = null;
	private userData : any = null;

	constructor(
		@Inject(PLATFORM_ID) private platformId : Object
		){
		if(isPlatformBrowser(this.platformId)){
			this.localStorage = localStorage;
			this.document = document;
			this.window = window;
			this.$ = $;
		}
	}

	public lsSetItem(key, value){
		this.localStorage.setItem(key, JSON.stringify(value));
	}

	public lsGetItem(key){
		return this.tryParseJson(this.localStorage.getItem(key));
	}

	public lsRemoveItem(key){
		this.localStorage.removeItem(key);
	}

	public lsRemoveAll(){
		this.localStorage.clear();
	}

	public tryParseJson(jsonString){
		try{
			return JSON.parse(jsonString);
		}
		catch(e){
			if(jsonString){
				return jsonString;
			}
			return null;
		}
	}

	public getUserData(){
		return this.userData;
	}

	public setUserData(userData? : any){
		if(userData){
			this.userData = userData;
			this.lsSetItem('userData', this.userData);
		}
		else{
			this.userData = this.lsGetItem('userData');
		}
	}

}