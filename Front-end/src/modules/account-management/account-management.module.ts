import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ACCOUNT_MANAGEMENT_ROUTE, ACCOUNT_MANAGEMENT_COMPONENT } from './account-management.routes';
import { AccountManagementComponent } from './account-management.component';
import { MyAuctionComponent } from './components/my-auction/my-auction.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OrderStatusComponent } from './components/check-out/order-status/order-status.component';
import { AddressInformationComponent } from './components/check-out/adddress-information/address-information.component';

import { AccountManagementService } from './account-management.service';

import { CoreService } from '../../shared/services/core.service';

@NgModule({
  imports: [
    RouterModule.forChild(ACCOUNT_MANAGEMENT_ROUTE),
    CommonModule,
    SharedModule
  ],
  declarations: [
    ACCOUNT_MANAGEMENT_COMPONENT
  ],
  providers : [
    AccountManagementService
  ]
})
export class AccountManagementModule { 

  constructor(private core : CoreService, private router: Router){
    if(this.core.getUserData()){
      this.router.navigate(['/']);
    }
  }

}
