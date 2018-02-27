/**
 * 
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AccountManagementService } from '../../account-management.service';

@Injectable()
class SignInService {



	constructor(
		private accountService : AccountManagementService
		){

	}

}