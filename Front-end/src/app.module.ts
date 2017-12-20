import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AppComponent } from "./app.component";
import { NavBarComponent } from './layouts/navbar/navbar.component';
import { appRouter } from "./app.route";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    imports: [
        // HouseManagementModule,
        // LayoutsModule,
        BrowserModule,
        FormsModule,
        appRouter
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HouseAuctionModule {}