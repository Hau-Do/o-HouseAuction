import { NgModule } from "@angular/core";
import { HouseManagementModule } from './modules/house-management/house-management.module';
import { LayoutsModule } from './layouts/layouts.module';

import { NavBarComponent } from './layouts/navbar/navbar.component';


@NgModule({
    imports: [
        HouseManagementModule,
        LayoutsModule
    ],
    declarations: [
        NavBarComponent
    ], 
    exports: [
        NavBarComponent
    ]
})

export class HouseAuctionModule {}