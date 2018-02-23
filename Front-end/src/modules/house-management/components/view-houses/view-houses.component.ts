import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { House } from '../../../../shared/models/house';
import { HouseManagementService } from "../../house-management.service";

@Component({
  selector: 'view-houses-component',
  templateUrl: './view-houses.component.html',
  styleUrls: ['./view-houses.component.css']
})

export class ViewHousesComponent implements OnInit, OnDestroy {

  // just test data
  public houseList : Array<House> = [
    {
      _id : "aaaa",
      address : "23 Nguyễn Bỉnh Khiêm Quận 1",
      area : 1,
      sessionEnd : false,
      bidStates : [],
      createdDate : (new Date()).toISOString(),
      endDate : (new Date(+new Date() + 864000000)).toISOString(),
      startPrice : 0,
      endPrice : 0,
      owner : "Teo",
      info : {
        beds : 2,
        baths : 2,
        sqMeter : 200
      },
      type : "Nhà dân",
      avatar : "./assets/images/inside4.png"
    },
    {
      _id : "bbbb",
      address : "23 Nguyễn Bỉnh Khiêm Quận 3",
      area : 3,
      sessionEnd : false,
      bidStates : [],
      createdDate : (new Date()).toISOString(),
      endDate : (new Date(+new Date() + 864000000)).toISOString(),
      startPrice : 0,
      endPrice : 0,
      owner : "Ti",
      info : {
        beds : 3,
        baths : 5,
        sqMeter : 600
      },
      type : "Nhà dân",
      avatar : "./assets/images/inside5.jpg"
    }
  ];

  constructor(
    private router : Router,
    private houseManagementService : HouseManagementService
  ){

  }

  getHouses(){
    this.houseManagementService.getHouses(function(houses){
      console.log(houses);
    });
  }

  ngOnInit() {
    this.getHouses();
  }

  ngOnDestroy(){

  }
}
