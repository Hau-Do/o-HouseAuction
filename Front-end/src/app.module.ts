import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { SnippetsModule } from './snippets/snippets.module';

import { AppComponent } from "./app.component";
import { NavBarComponent } from './snippets/navbar/navbar.component';
import { appRouter } from "./app.route";
import { ProductOneComponent } from "./snippets/product-one/product-one.component";
import { MainComponent } from "./snippets/main/main.component";
import { MainMenuComponent } from "./snippets/main-menu/main-menu.component";
import { FooterComponent } from "./snippets/footer/footer.component";
import { PreFooterComponent } from "./snippets/pre-footer/pre-footer.component";
import { SignInComponent } from "./modules/account-management/components/sign-in/sign-in.component";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NavBarComponent,
        MainMenuComponent,
        ProductOneComponent,
        PreFooterComponent,
        FooterComponent,
        SignInComponent
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