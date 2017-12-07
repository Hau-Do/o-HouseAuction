import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHouseRoute } from './view-house.routes';

import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';


@NgModule({
  declarations: [
    Page1Component,
    Page2Component
  ],
  imports: [
    RouterModule.forRoot(ViewHouseRoute),
    BrowserModule
  ],
  providers: [],
  bootstrap: [Page1Component,Page2Component]
})
export class HouseManagementModule { }
