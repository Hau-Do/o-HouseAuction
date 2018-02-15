import { Routes } from '@angular/router';
import { ViewHousesComponent } from './components/view-houses/view-houses.component';
import { ViewDetailHouseComponent } from './components/view-detail-house/view-detail-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';

export const HOUSE_MANAGEMENT_ROUTE: Routes = [
	{ path: '', component : ViewHousesComponent},
	{ path: ':id', component: ViewDetailHouseComponent },
	{ path: 'post', component: PostHouseComponent }
];

export const HOUSE_MANAGEMENT_COMPONENT = [
	HouseManagementComponent,
	ViewHousesComponent,
	ViewDetailHouseComponent,
	PostHouseComponent
]