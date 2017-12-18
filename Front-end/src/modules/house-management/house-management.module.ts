import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '../../layouts/layouts.module';

import { houseManagementRoutes } from './house-management.routes';

import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';
// import { NavBarComponent } from '../../layouts/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      houseManagementRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    LayoutsModule
  ],
  declarations: [
    //NavBarComponent,
    HouseManagementComponent,
    ViewHouseComponent,
    PostHouseComponent
    
  ],
  bootstrap: [ HouseManagementComponent ]
})
export class HouseManagementModule { }
