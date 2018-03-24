/**
 * 
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountManagementService } from '../../account-management.service';
import { CoreService } from '../../../../shared/services/core.service';

@Component({
  moduleId: module.id,
  selector: 'singup-component',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  private returnUrl : string = "";
  public username : string;
  public password : string;
  public fullname : string;
  public address : string;
  public walletAddress : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private account: AccountManagementService,
    private core: CoreService
  ) {

  }
  
  ngOnInit(){
      
  }

  signup(){
    if(!this.username || !this.password){
      return;
    }
    if(!this.fullname || !this.address || !this.walletAddress){
      return;
    }

    let accountData = {
      username : this.username,
      password : this.password
    }
    this.account.signup(accountData).subscribe((account) => {
      console.log(account);
    }, (err) => {
      console.error(err);
    });

    let userData = {
      fullname : this.fullname,
      address : this.address,
      walletAddress : this.walletAddress
    }
  }
}
