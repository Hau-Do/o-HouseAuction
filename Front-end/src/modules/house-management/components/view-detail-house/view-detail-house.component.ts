import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'view-detail-house-component',
  templateUrl: './view-detail-house.component.html',
  styleUrls: ['./view-detail-house.component.css']
})

export class ViewDetailHouseComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }
}
