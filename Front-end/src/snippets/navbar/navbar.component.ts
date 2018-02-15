import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'navbar-component',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavBarComponent implements OnInit {
    
    constructor(
        private router: Router
    ) {
        
    }

    ngOnInit() {

    }

    logOut() {
        /**
         * clear session here
         */

         // need to get out 'view-house-component' !!!
        this.router.navigate(['sign-in']);
        console.log("log CMN out.");
    }
}