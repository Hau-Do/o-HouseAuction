import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { Route } from '@angular/router';

import { appRouter } from "./app.route";

import { AppComponent } from "./app.component";
import { NavBarComponent } from './snippets/navbar/navbar.component';
import { MainMenuComponent } from "./snippets/main-menu/main-menu.component";
import { FooterComponent } from "./snippets/footer/footer.component";
import { PreFooterComponent } from "./snippets/pre-footer/pre-footer.component";
import { AccountManagementModule } from "./modules/account-management/account-management.module";
// import { ViewDetailHouseComponent } from "./modules/house-management/components/view-detail-house/view-detail-house.component";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainMenuComponent,
        PreFooterComponent,
        FooterComponent,
    ],
    imports: [
        HouseManagementModule,
        AccountManagementModule,
        // LayoutsModule,
        BrowserModule,
        FormsModule,
        appRouter
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HouseAuctionModule {}