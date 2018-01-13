import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

const ACCOUNT_MANAGEMENT_ROUTE: Routes = [
    {
        path: '',
        component: AccountManagementComponent
    },
    {
        path: 'my-auction',
        component: MyAuctionComponent
    },
    {
        path: 'my-cart',
        component: MyCartComponent
    },
    {
        path: 'checkout',
        component: CheckOutComponent
    }
];

export const accountManagementRouter = RouterModule.forChild(ACCOUNT_MANAGEMENT_ROUTE);