import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { houseManagementRouter } from './house-management.routes';

import { HouseManagementComponent } from './house-management.component';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { ViewDetailHouseComponent } from './components/view-detail-house/view-detail-house.component';

@NgModule({
  imports: [
    houseManagementRouter
  ],
  declarations: [
    HouseManagementComponent,
    ViewHouseComponent,
    PostHouseComponent,
    ViewDetailHouseComponent
  ]
})
export class HouseManagementModule { }
