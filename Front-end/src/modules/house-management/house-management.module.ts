import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { houseManagementRoutes } from './house-management.routes';

import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      houseManagementRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    HouseManagementComponent,
    ViewHouseComponent,
    PostHouseComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ HouseManagementComponent ]
})
export class HouseManagementModule { }
