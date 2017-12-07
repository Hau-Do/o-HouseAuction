import { Routes } from '@angular/router';

import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';

export const ViewHouseRoute: Routes = [
    { path: './components/view-house/page-1/page-1.component', component: Page1Component },
    { path: './components/view-house/page-2/page-2.component', component: Page2Component }

];