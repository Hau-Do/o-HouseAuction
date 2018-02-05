import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'view-house-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit{
  
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  signIn(form: NgForm) {
    /**
     * do something here
     */
    this.router.navigate(['../view-house']);
    console.log("signed in");
  }

}
