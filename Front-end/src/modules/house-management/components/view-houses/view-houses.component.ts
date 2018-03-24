import { Component, OnInit, OnDestroy, ApplicationRef} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { House } from '../../../../shared/models/house';
import { HouseManagementService } from "../../house-management.service";
import { Pagination } from "../../../../shared/models/pagination";

@Component({
  moduleId : module.id,
  selector: 'view-houses-component',
  templateUrl: 'view-houses.component.html',
  styleUrls: ['view-houses.component.css']
})

export class ViewHousesComponent implements OnInit, OnDestroy {

  private countDownArray : Array<any>;
  // just test data
  public houseList : Array<House> = [];

  constructor(
    private router : Router,
    private houseManagementService : HouseManagementService,
    private app : ApplicationRef
  ){

  }

  getHouses(){
    this.houseManagementService.getHouses((res, err) => {
      let pagination : Pagination = res;
      this.houseList = pagination.content;
      this.houseList.map( house => {
        house.avatar = "https://picsum.photos/900/600/?random";
        house.timeLeft = new Date(+house.endDate - + new Date());
        house.createdDate = new Date(house.createdDate);
        house.endDate = new Date(house.endDate);
        this.houseManagementService.countDown(house, new Date(), house.endDate);
        house.info = {
          beds : 2,
          baths : 2,
          sqMeter : 100
        }
        house.type = "Nhà dân";
      })
    });
  }

  ngOnInit() {
    this.getHouses();
  }

  ngOnDestroy(){
    this.houseList = null;
  }
}
