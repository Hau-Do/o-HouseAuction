import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressInformationComponent } from './modules/account-management/components/check-out/adddress-information/address-information.component';
import { CheckOutComponent } from './modules/account-management/components/check-out/check-out.component';

export const APP_ROUTE: Routes = [
    { path: '', redirectTo: 'house', pathMatch: 'full' },
    { 
        path: 'house',
        loadChildren: 'modules/house-management/house-management.module#HouseManagementModule'
    },
    { 
        path: 'account',
        loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    },
    { path: '**', redirectTo: 'house' }
];

export const APP_COMPONENT = [
    
]