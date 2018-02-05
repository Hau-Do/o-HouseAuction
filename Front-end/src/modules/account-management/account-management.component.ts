import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from './account-management.service';

@Component({
 selector: 'account-management-component',
 templateUrl:'./account-management.component.html'
})
export class AccountManagementComponent implements OnInit{ 
	constructor(private accountManagementService : AccountManagementService){

	}

	ngOnInit(){
		this.accountManagementService.getAccounts();
	}
}