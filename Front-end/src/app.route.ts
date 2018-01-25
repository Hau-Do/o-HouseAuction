import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/account-management/components/sign-in/sign-in.component';
import { ViewHousesComponent } from './modules/house-management/components/view-houses/view-houses.component';
import { MyCartComponent } from './modules/account-management/components/my-cart/my-cart.component';
import { MyAuctionComponent } from './modules/account-management/components/my-auction/my-auction.component';
import { ViewDetailHouseComponent } from './modules/house-management/components/view-detail-house/view-detail-house.component';

export const router: Routes = [
    // {
    //     path: 'houses',
    //     loadChildren: 'modules/house-management/house-management.module#HouseManagementModule'
    // },
    // {
    //     path: 'account',
    //     loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    // }

    { path:'', redirectTo: 'view-house', pathMatch: 'full' },
    { path: 'view-house', component: ViewHousesComponent },
    { path: 'my-cart', component: MyCartComponent },
    { path: 'my-auctions', component: MyAuctionComponent },
    { path: 'detail-house/:idHouse', component: ViewDetailHouseComponent },

    {path: '**', component: ViewHousesComponent}
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);