import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoResultComponent } from './components/no-result/no-result.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
	imports:      [ CommonModule ],
	declarations: [ NoResultComponent, LoadingComponent ],
	providers : [],
	exports:      [ 
		NoResultComponent,
		LoadingComponent,
		CommonModule,
		FormsModule
	]
})
export class SharedModule { }