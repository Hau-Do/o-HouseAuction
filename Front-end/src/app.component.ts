import {
	Router,
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router'
import { Component, ElementRef, ViewChild } from '@angular/core'
import { LoadingComponent } from './shared/components/loading/loading.component';
import { CoreService } from './shared/services/core.service';
@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: ['app.component.css']
})
export class AppComponent {
	public isLogin : boolean = false;

	title = 'o-HouseAuction';
	@ViewChild(LoadingComponent) loading: LoadingComponent;

	constructor(private router: Router, private core : CoreService) {
		router.events.subscribe((event: RouterEvent) => {
			this._navigationInterceptor(event);
		});
		core.changeEmitted$.subscribe(change => {
			if(change.isLogin){
				this.isLogin = change.isLogin;
			}
		});
	}

	// Shows and hides the loading spinner during RouterEvent changes
	private _navigationInterceptor(event: RouterEvent): void {
		if (this.loading) {
			if (event instanceof NavigationStart) {
				this.loading.showLoader();
			}
			if (event instanceof NavigationEnd) {
				this.loading.hideLoader();
			}
			// Set loading state to false in both of the below events to
			// hide the spinner in case a request fails
			if (event instanceof NavigationCancel) {
				this.loading.hideLoader();
			}
			if (event instanceof NavigationError) {
				this.loading.hideLoader();
			}
		}
	}

	public checkLogout(event){
		this.isLogin = event;
	}
}
