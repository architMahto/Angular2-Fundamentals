import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "create-event.component.html",
    styleUrls: ["create-event.component.css"]
})

export class CreateEventComponent {
    isDirty = true;

    constructor(private router: Router) {}

    cancel() {
        this.router.navigate(["/events"]);
    }
}
