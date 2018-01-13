import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { accountManagementRouter } from './account-management.routes';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';


@NgModule({
  imports: [
      accountManagementRouter

  ],
  declarations: [
    AccountManagementComponent,
    MyAuctionComponent,
    MyCartComponent,
    CheckOutComponent
  ]
})
export class AccountManagementModule { }
