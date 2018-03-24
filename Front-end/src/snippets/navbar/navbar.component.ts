import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { CoreService } from "../../shared/services/core.service";

@Component({
  moduleId: module.id,
  selector: "navbar-component",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"]
})
export class NavBarComponent implements OnInit {
  @Input() public isLogin = false;

  @Output() public logout: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router, private core: CoreService) {}

  ngOnInit() {
    if (this.core.getUserData()) {
      this.isLogin = true;
    }
  }

  logOut() {
    /**
     * clear session here
     */
    this.core.removeUserData();
    // need to get out 'view-house-component' !!!
    this.router.navigate(["account/signin"]);
    this.isLogin = false;
    this.logout.emit(this.isLogin);
  }
}
