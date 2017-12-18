import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { HouseManagementModule } from './modules/house-management/house-management.module';
import { HouseAuctionModule } from './app.module'


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HouseAuctionModule);
