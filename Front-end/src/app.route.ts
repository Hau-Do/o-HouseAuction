import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'modules/house-management/house-management.module#HouseManagementModule',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);