import { Routes } from '@angular/router';


export const ViewHouseRoute: Routes = [
    {
        path: 'crisis-center',
        loadChildren: './page-1/crisis-center.module#CrisisCenterModule',
        data: { preload: true }
      },
      { path: '',   redirectTo: '/superheroes', pathMatch: 'full' }

];
