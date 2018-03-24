import { Injectable } from '@angular/core';
import { Router, CanActivate , CanActivateChild, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CoreService } from '../shared/services/core.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private core : CoreService, private route : ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) {
        if (this.core.getUserData()) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    canActivateChild (route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        if (this.core.getUserData()) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}