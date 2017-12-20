import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { layoutsRoutes } from './layouts.routes';

// import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        // RouterModule.forRoot(
        //     layoutsRoutes,
        //     { enableTracing: true }
        // )
    ],
    declarations: [
        // NavBarComponent
    ]
})

export class LayoutsModule {}