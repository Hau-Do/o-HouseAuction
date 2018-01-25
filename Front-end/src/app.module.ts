import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { Route } from '@angular/router';

import { appRouter } from "./app.route";

import { AppComponent } from "./app.component";
import { NavBarComponent } from './layouts/navbar/navbar.component';
import { MainMenuComponent } from "./layouts/main-menu/main-menu.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { PreFooterComponent } from "./layouts/pre-footer/pre-footer.component";
import { SignInComponent } from "./modules/account-management/components/sign-in/sign-in.component";
import { MyCartComponent } from "./modules/account-management/components/my-cart/my-cart.component";
import { MyAuctionComponent } from "./modules/account-management/components/my-auction/my-auction.component";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainMenuComponent,
        PreFooterComponent,
        FooterComponent,
        SignInComponent,

        MyCartComponent,
        MyAuctionComponent
    ],
    imports: [
        HouseManagementModule,
        // LayoutsModule,
        BrowserModule,
        FormsModule,
        appRouter
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HouseAuctionModule {}