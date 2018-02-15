import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoResultComponent } from './no-result/no-result.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
	imports:      [ CommonModule ],
	declarations: [ NoResultComponent, LoadingComponent ],
	exports:      [ 
		NoResultComponent,
		LoadingComponent,
		CommonModule,
		FormsModule
	]
})
export class SharedModule { }