import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
    moduleId: module.id,
    styleUrls: ["login.component.css"],
    templateUrl: "login.component.html",
})

export class LoginComponent {
    public loginInvalid = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    public login(formValues) {
        this.authService.loginUser(
            formValues.userName,
            formValues.password,
        )
        .subscribe((response) => {
          if (!response) {
            this.loginInvalid = true;
          } else {
            this.router.navigate(["events"]);
          }
        });
    }

    public cancel() {
        this.router.navigate(["events"]);
    }
}
