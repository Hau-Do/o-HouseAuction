import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';

const ACCOUNT_MANAGEMENT_ROUTE: Routes = [
    {
        path: '',
        component: AccountManagementComponent
    }
];

export const accountManagementRouter = RouterModule.forChild(ACCOUNT_MANAGEMENT_ROUTE);