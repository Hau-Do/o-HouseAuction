import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    
    numItenms  = 10;

    constructor() {

    }

    ngOnInit() {

    }
}