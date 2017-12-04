// Angular framework
import { Component } from '@angular/core';

// Services
import { ViewHouseService } from './view-house.service';
import { viewClassName } from '@angular/compiler';

// Components


@Component({
  selector: 'view-house-component',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css']
})

export class ViewHouseComponent {

  constructor(
    private viewHouseService : ViewHouseService,
  ) {

  } 
  
}
