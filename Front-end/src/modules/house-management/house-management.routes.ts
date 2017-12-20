import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';


const HOUSE_MANAGEMENT_ROUTE: Routes = [
    // { path: 'view-house', component: ViewHouseComponent },
    // { path: 'post-house', component: PostHouseComponent },
    {
        path: '',
        component: HouseManagementComponent
    }
];

export const houseManagementRouter = RouterModule.forChild(HOUSE_MANAGEMENT_ROUTE);