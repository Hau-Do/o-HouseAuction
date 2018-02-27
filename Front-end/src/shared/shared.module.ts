import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoResultComponent } from './components/no-result/no-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { APIService } from './services/api.service';
import { CoreService } from './services/core.service';

@NgModule({
	imports:      [ CommonModule ],
	declarations: [ NoResultComponent, LoadingComponent ],
	providers : [APIService, CoreService],
	exports:      [ 
		NoResultComponent,
		LoadingComponent,
		CommonModule,
		FormsModule
	]
})
export class SharedModule { }