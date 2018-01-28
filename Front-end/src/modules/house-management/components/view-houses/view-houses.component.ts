import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { House } from '../../../../shared/models/house';
import { HouseManagementService } from "../../house-management.service";

@Component({
  selector: 'view-houses-component',
  templateUrl: './view-houses.component.html',
  styleUrls: ['./view-houses.component.css']
})

export class ViewHousesComponent implements OnInit, OnDestroy {

  // just test data
  private houseList : Array<House>;

  constructor(
    private router : Router, private houseManagementService : HouseManagementService
    ) {

  }
  
  viewDetails(idHouse : string) {
    this.router.navigate(["/house"]);
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
