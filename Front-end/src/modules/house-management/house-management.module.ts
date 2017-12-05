import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { houseManagementRoutes } from './house-management.routes';

import { ViewHouseComponent } from './components/view-house/view-house.component';


@NgModule({
  declarations: [
    ViewHouseComponent
  ],
  imports: [
    RouterModule.forRoot(houseManagementRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [ViewHouseComponent]
})
export class HouseManagementModule { }
