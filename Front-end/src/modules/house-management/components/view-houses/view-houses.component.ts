import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { House } from '../../../../shared/models/house';

@Component({
  selector: 'view-houses-component',
  templateUrl: './view-houses.component.html',
  styleUrls: ['./view-houses.component.css']
})

export class ViewHousesComponent implements OnInit {

  // just test data
  private houseList = [
    { numberFloor: 3, address: "21svsdf" },
    { numberFloor: 4, address: "xcv" }
  ];

  constructor(
    private router: Router,
  ) {

  }
  
  ngOnInit() {
    
  }

  viewDetails(idHouse: string) {
    console.log("clicked - idHouse");
    this.router.navigate(['/detail-house']);
  }
}
