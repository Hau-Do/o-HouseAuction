import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
	moduleId : module.id,
	selector: 'pagination-component',
	templateUrl:'pagination.component.html',
	styleUrls: ['pagination.component.css']
})
export class AccountManagementComponent implements OnInit, OnDestroy { 
	@Input('page') page : number; 
	

	ngOnInit(){

	}

	ngOnDestroy(){

	}
}