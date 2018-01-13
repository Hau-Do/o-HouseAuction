import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckOutComponent } from './check-out.component';
import { appRouter } from '../../../../app.route';
import { OrderStatusComponent } from './order-status/order-status.component';


@NgModule({
  imports: [
   appRouter   
  ],
  declarations: [
    CheckOutComponent,
    OrderStatusComponent
  ]
})
export class CheckOutModule { }
