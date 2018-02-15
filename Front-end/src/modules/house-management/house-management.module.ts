import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HOUSE_MANAGEMENT_ROUTE, HOUSE_MANAGEMENT_COMPONENT } from './house-management.routes';

import { HouseManagementComponent } from './house-management.component';
import { ViewHousesComponent } from './components/view-houses/view-houses.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { ViewDetailHouseComponent } from './components/view-detail-house/view-detail-house.component';
import { SharedModule } from "../../shared/components/shared.module";
import { HouseManagementService } from './house-management.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOUSE_MANAGEMENT_ROUTE),
    SharedModule
  ],
  declarations: [
    HOUSE_MANAGEMENT_COMPONENT
  ],
  providers : [
    HouseManagementService
  ]
})
export class HouseManagementModule { }
