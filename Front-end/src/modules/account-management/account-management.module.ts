import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { accountManagementRouter } from './account-management.routes';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

import { AccountManagementService } from './account-management.service';


@NgModule({
  imports: [
      accountManagementRouter
  ],
  declarations: [
    AccountManagementComponent,
    MyAuctionComponent,
    MyCartComponent,
    CheckOutComponent
  ],
  providers : [
  	AccountManagementService
  ]
})
export class AccountManagementModule { }
