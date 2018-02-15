import { Component, Input, OnInit, OnDestroy, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
	moduleId : module.id,
	selector: 'loading-component',
	templateUrl:'loading.component.html',
	styleUrls: ['loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy { 
	@Input('size') size : Number = 0;
	@Input('color') color : string = "#fff";

	@ViewChild('spinnerElement') spinnerElement : ElementRef;

	public r : Number = 0;
	public r2 : Number = 0;
	public rMinusStrokeWidth : Number = 0;
	public r2MinusStrokeWidth : Number = 0;
	public viewBox : string = "0 0 0 0";
	public d : string = "M0 0c0-0-0-0-0-0";
	public from : string = "0 0 0";
	public to : string = "0 0 0";
	public strokeWidth : Number = 3;

	constructor(private ngZone : NgZone, private renderer : Renderer){

	}

	showLoader(){
		// We wanna run this function outside of Angular's zone to
  		// bypass change detection
  		this.ngZone.runOutsideAngular(() => {
        	// For simplicity we are going to turn opacity on / off
        	// you could add/remove a class for more advanced styling
        	// and enter/leave animation of the spinner
        	this.renderer.setElementStyle(this.spinnerElement.nativeElement, 'opacity', '1');
        });
	}

	hideLoader(){
		// We wanna run this function outside of Angular's zone to
    	// bypass change detection,
    	this.ngZone.runOutsideAngular(() => {
	      	// For simplicity we are going to turn opacity on / off
	      	// you could add/remove a class for more advanced styling
	     	// and enter/leave animation of the spinner
	     	this.renderer.setElementStyle(this.spinnerElement.nativeElement, 'opacity', '0');
	     });
    }

    ngOnInit(){
    	this.r = Math.floor((Number(this.size) - 2)/ 2);
    	this.r2 = 2 * Number(this.r);
    	this.viewBox = "0 0 " + this.size + " " + this.size;
    	this.strokeWidth = Number(this.strokeWidth) + Math.floor(Number(this.r) / 20) ;
    	console.log(this.strokeWidth);
    	this.rMinusStrokeWidth = Number(this.r) - Number(this.strokeWidth);
    	this.r2MinusStrokeWidth = Number(this.r2) - Number(this.strokeWidth);
    	var c1 = Math.floor(Number(this.r) / 2) + 0.94;
    	var c2 = Number(this.r) - Number(c1);
    	this.d = "M" + this.r2MinusStrokeWidth + " " + this.r + "c0-" + c1 + "-" + c2 +"-" + this.rMinusStrokeWidth + "-" + this.rMinusStrokeWidth + "-" + this.rMinusStrokeWidth;
    	this.from = "0 " + this.r + " " + this.r;
    	this.to = "360 " + this.r + " " + this.r;
    }

    ngOnDestroy(){

    }
}