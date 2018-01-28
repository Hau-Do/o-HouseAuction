import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
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


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainMenuComponent,
        PreFooterComponent,
        FooterComponent,
        SignInComponent
    ],
    imports: [
        HttpModule,
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