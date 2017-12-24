import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { houseManagementRouter } from './house-management.routes';

import { HouseManagementComponent } from './house-management.component';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';

@NgModule({
  imports: [
    houseManagementRouter
  ],
  declarations: [
    HouseManagementComponent,
    ViewHouseComponent,
    PostHouseComponent
  ]
})
export class HouseManagementModule { }
