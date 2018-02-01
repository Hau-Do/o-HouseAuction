import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'pagination-component',
	templateUrl:'./pagination.component.html',
	styleUrls: ['chat.component.css']
})
export class AccountManagementComponent implements OnInit, OnDestroy { 
	@Input('page') page : number; 
	

	ngOnInit(){

	}

	ngOnDestroy(){

	}
}