import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OrderStatusComponent } from './components/check-out/order-status/order-status.component';
import { AuthGuard } from '../../_guards/auth.guard';

export const ACCOUNT_MANAGEMENT_ROUTE: Routes = [
    {
        path: '',
        component: AccountManagementComponent
    },
    {
        path: 'signin',
        component: SignInComponent
    },
    {
        path: 'my-auctions',
        component: MyAuctionComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'my-cart',
        component: MyCartComponent,
        canActivate : [AuthGuard]
    },
    { 
        path: 'order-status', 
        component: OrderStatusComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'checkout',
        component: CheckOutComponent,
        canActivate : [AuthGuard]
    }
];

export const ACCOUNT_MANAGEMENT_COMPONENT = [
    AccountManagementComponent,
    MyAuctionComponent,
    MyCartComponent,
    CheckOutComponent,
    SignInComponent,
    OrderStatusComponent
]