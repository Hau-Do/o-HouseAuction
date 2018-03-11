import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HouseManagementService } from "../../house-management.service";
import { House } from "../../../../shared/models/house";

@Component({
  moduleId: module.id,
  selector: 'view-detail-house-component',
  templateUrl: 'view-detail-house.component.html',
  styleUrls: ['view-detail-house.component.css']
})

export class ViewDetailHouseComponent {


  private currentVal: number = 114;
  private biddingVal: number = 115;

  private currentHouseId = null;
  public currentHouse : House = null;

  constructor(private route: ActivatedRoute, private houseManagementService : HouseManagementService) {
    this.route.params.subscribe( params => {
      this.currentHouseId = params["id"];
      this.houseManagementService.getHouse(this.currentHouseId, (res)=>{
        this.currentHouse = res;
        this.currentHouse.avatar = "https://picsum.photos/900/600/?random";
        this.currentHouse.timeLeft = new Date(+this.currentHouse.endDate - + new Date());
        this.currentHouse.createdDate = new Date(this.currentHouse.createdDate);
        this.currentHouse.endDate = new Date(this.currentHouse.endDate);
        this.houseManagementService.countDown(this.currentHouse, new Date(), this.currentHouse.endDate);
        console.log(this.currentHouse);
      });
    });
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
