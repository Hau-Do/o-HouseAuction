import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'view-detail-house-component',
  templateUrl: './view-detail-house.component.html',
  styleUrls: ['./view-detail-house.component.css']
})

export class ViewDetailHouseComponent {

  private currentVal: number = 114;
  private biddingVal: number = 115;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }

  public updateVal(num: number){
    this.biddingVal += num;
    if(this.biddingVal <= this.currentVal) {
      this.biddingVal = this.currentVal;
    }
  }

  public bidNow(biddingVal: number){
    this.currentVal = biddingVal;
  }

}
