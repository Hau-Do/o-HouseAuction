import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/account-management/components/sign-in/sign-in.component';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'modules/house-management/house-management.module#HouseManagementModule',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    },
    {
        path: 'login',
        component: SignInComponent
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);