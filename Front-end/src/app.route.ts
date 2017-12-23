import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/account-management/components/sign-in/sign-in.component';
import { MainComponent } from './snippets/main/main.component';

export const router: Routes = [
    {
        path: 'account',
        loadChildren: 'modules/account-management/account-management.module#AccountManagementModule'
    },
    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: '',
        component: MainComponent
    },

];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);