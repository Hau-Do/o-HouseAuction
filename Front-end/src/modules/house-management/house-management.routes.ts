import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ViewDetailHouseComponent } from './components/view-detail-house/view-detail-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';


const HOUSE_MANAGEMENT_ROUTE: Routes = [
    {
        path: '',
        component: HouseManagementComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'house', component: ViewDetailHouseComponent },
                    { path: 'post', component: PostHouseComponent }
                ]
            }
        ]
    }
];

export const houseManagementRouter = RouterModule.forChild(HOUSE_MANAGEMENT_ROUTE);