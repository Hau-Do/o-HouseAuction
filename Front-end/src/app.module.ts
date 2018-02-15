import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { RouterModule } from '@angular/router';

import { APP_ROUTE } from "./app.route";

import { AppComponent } from "./app.component";
import { NavBarComponent } from './snippets/navbar/navbar.component';
import { MainMenuComponent } from "./snippets/main-menu/main-menu.component";
import { FooterComponent } from "./snippets/footer/footer.component";
import { PreFooterComponent } from "./snippets/pre-footer/pre-footer.component";
import { SharedModule } from "./shared/components/shared.module";
import { AccountManagementModule } from "./modules/account-management/account-management.module";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainMenuComponent,
        PreFooterComponent,
        FooterComponent
    ],
    imports: [
        HttpModule,
        SharedModule,
        // LayoutsModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(APP_ROUTE)
    ],
    exports : [
        RouterModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HouseAuctionModule {}