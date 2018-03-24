import { Component } from "@angular/core";
import { OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountManagementService } from "../../account-management.service";
import { CoreService } from "../../../../shared/services/core.service";

@Component({
  moduleId: module.id,
  selector: "sign-in-component",
  templateUrl: "sign-in.component.html",
  styleUrls: ["sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  @Input() public isLogin: boolean;

  private returnUrl: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private account: AccountManagementService,
    private core: CoreService
  ) {
    if (this.core.getUserData()) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.returnUrl =
      "'" + this.route.snapshot.queryParams["returnUrl"] + "'" || "house";
  }

  signIn(form: NgForm) {
    /**
     * do something here
     */
    if (form.value.username && form.value.password) {
      let data = {
        clientId: "acme",
        secret: "acmesecret",
        username: form.value.username,
        password: form.value.password,
        grant_type: "password"
      };
      this.account.signin(data, (err, data) => {
        if (!err && data) {
          this.core.setUserData(data);
          this.router.navigate([this.returnUrl]);
          this.core.emitChange({ isLogin: true });
        } else {
          console.error(err);
        }
      });
    } else {
    }
  }
}
