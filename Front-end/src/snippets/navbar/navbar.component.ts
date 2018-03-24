import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CoreService } from '../../shared/services/core.service';

@Component({
    moduleId : module.id,
    selector: 'navbar-component',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavBarComponent implements OnInit {
    
    public isLogin = false;

    constructor(
        private router: Router,
        private core : CoreService
    ) {
        
    }

    ngOnInit() {
        if(this.core.getUserData()){
            this.isLogin = true;
        }
    }

    logOut() {
        /**
         * clear session here
         */
        this.core.lsRemoveAll();
         // need to get out 'view-house-component' !!!
        this.router.navigate(['account/signin']);
    }
}