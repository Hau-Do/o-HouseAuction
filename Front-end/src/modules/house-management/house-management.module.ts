import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsModule } from '../../snippets/snippets.module';

// import { houseManagementRoutes } from './house-management.routes';
import { houseManagementRouter } from './house-management.routes';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { PostHouseComponent } from './components/post-house/post-house.component';
import { HouseManagementComponent } from './house-management.component';

// import { NavBarComponent } from '../../layouts/navbar/navbar.component';

@NgModule({
  imports: [
    houseManagementRouter,
    // RouterModule.forRoot(
    //   houseManagementRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    // LayoutsModule
  ],
  declarations: [
    //NavBarComponent,
    HouseManagementComponent,
    ViewHouseComponent,
    PostHouseComponent
    
  ]
})
export class HouseManagementModule { }
