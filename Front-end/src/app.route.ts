import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/account-management/components/sign-in/sign-in.component';

export const router: Routes = [
    // {
    //     path: '', redirectTo: '/login', pathMatch: 'full' // !!!
    // },
    // {
    //     path: 'login', component: SignInComponent
    // },
    {
        path: 'houses',
        loadChildren: 'modules/house-management/house-management.module#HouseManagementModule'
    },
    {
        path: 'account',
        loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);