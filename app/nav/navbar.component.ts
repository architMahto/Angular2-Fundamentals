import { Component } from "@angular/core";

import { AuthService } from "../users/auth.service";

@Component({
    moduleId: module.id,
    selector: "nav-bar",
    templateUrl: "navbar.component.html",
    styleUrls: ["navbar.component.css"]
})

export class NavBarComponent {
    constructor (private authService: AuthService) {

    }
}
