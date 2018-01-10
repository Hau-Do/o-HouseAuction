import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';

const ACCOUNT_MANAGEMENT_ROUTE: Routes = [
    {
        path: '',
        component: AccountManagementComponent
    },
    {
        path: 'my-auction',
        component: MyAuctionComponent
    }
];

export const accountManagementRouter = RouterModule.forChild(ACCOUNT_MANAGEMENT_ROUTE);