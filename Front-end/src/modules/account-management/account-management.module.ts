import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { accountManagementRouter } from './account-management.routes';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';


@NgModule({
  imports: [
      accountManagementRouter

  ],
  declarations: [
    AccountManagementComponent,
    MyAuctionComponent
  ]
})
export class AccountManagementModule { }
