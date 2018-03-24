import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CoreService {

	private localStorage : any = null;
	private userData : any = null;
	private emitChangeSource = new Subject<any>();

	public document : any = null;
	public window : any = null;
	public $ : any = null;
	public changeEmitted$ = this.emitChangeSource.asObservable();

	constructor(
		@Inject(PLATFORM_ID) private platformId : Object
		){
		if(isPlatformBrowser(this.platformId)){
			this.localStorage = localStorage;
			this.document = document;
			this.window = window;
			this.$ = $;
		}
		if(!this.userData){
			this.setUserData();
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

	public removeUserData(){
		this.userData = null;
		this.lsRemoveAll();
	}

	public emitChange(change : any){
		this.emitChangeSource.next(change);
	}
}