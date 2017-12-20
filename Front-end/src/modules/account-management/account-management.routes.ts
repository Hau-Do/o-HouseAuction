import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';

const ACCOUNT_MANAGEMENT_ROUTE: Routes = [
    // { path: 'view-house', component: ViewHouseComponent },
    // { path: 'post-house', component: PostHouseComponent },
    {
        path: '',
        component: AccountManagementComponent
    }
];

export const accountManagementRouter = RouterModule.forChild(ACCOUNT_MANAGEMENT_ROUTE);