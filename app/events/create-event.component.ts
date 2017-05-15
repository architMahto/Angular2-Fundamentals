import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { EventsService } from "./shared/index";

@Component({
    moduleId: module.id,
    styleUrls: ["create-event.component.css"],
    templateUrl: "create-event.component.html",
})

export class CreateEventComponent {
    public isDirty = true;

    constructor(
        private router: Router,
        private eventsService: EventsService,
    ) {}

    public saveEvent(formValues) {
        this.eventsService.saveEvent(formValues).subscribe((event) => {
          this.isDirty = false;
          this.router.navigate(["/events"]);
        });
    }

    public cancel() {
        this.router.navigate(["/events"]);
    }
}
