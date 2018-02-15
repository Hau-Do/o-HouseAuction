import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
	moduleId : module.id,
	selector: 'no-result-component',
	templateUrl:'no-result.component.html',
	styleUrls: ['no-result.component.css']
})
export class NoResultComponent implements OnInit, OnDestroy { 
	@Input('icon') icon : string;
	@Input('title') title : string;
	@Input('body') body : string; 

	ngOnInit(){
		console.log(this.icon);
	}

	ngOnDestroy(){

	}
}