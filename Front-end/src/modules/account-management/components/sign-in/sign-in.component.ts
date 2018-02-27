import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountManagementService } from '../../account-management.service';

@Component({
  selector: 'view-house-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit{

  constructor(
    private router: Router,
    private account: AccountManagementService
    ) {

  }

  ngOnInit() {

  }

  signIn(form: NgForm) {
    /**
     * do something here
     */
     if(form.value.username && form.value.password){
       let data = {
         clientId : 'acme',
         secret : 'acmesecret',
         username : form.value.username,
         password : form.value.password,
         grant_type : 'password'
       }
       this.account.signin(data).subscribe((data)=>{
         console.log(data);
       },(err)=>{ 
         console.log(err);
       });
       this.router.navigate(['../view-house']);
     }
     else{

     }
   }

 }
