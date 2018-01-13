import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'modules/account-management/components/check-out/addres-information/address-information.module#AddressInformationModule'
    }
];

export const checkOutRouter: ModuleWithProviders = RouterModule.forRoot(router);