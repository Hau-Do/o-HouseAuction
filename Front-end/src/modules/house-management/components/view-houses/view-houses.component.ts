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
      area : "Thành Phố Hồ Chí Minh",
      sessionEnd : false,
      bidStates : [],
      createdDate : (new Date()).toIOString(),
      endDate : new (new Date() + 864000000).toIOSring()
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
