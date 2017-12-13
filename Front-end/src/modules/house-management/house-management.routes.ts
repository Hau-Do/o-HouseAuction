import { Routes } from '@angular/router';

import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { PageNotFoundComponent } from './not-found.component';

export const houseManagementRoutes: Routes = [
    { path: 'view-house', component: ViewHouseComponent },
    { path: 'post-house', component: PostHouseComponent },
   
    // { path: '',   redirectTo: '/view-house', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }

];