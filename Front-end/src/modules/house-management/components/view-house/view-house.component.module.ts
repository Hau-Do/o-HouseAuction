import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHouseRoute } from './view-house.routes';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(ViewHouseRoute),
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class HouseManagementModule { }
