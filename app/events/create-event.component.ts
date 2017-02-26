import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { EventsService } from "./shared/index";

@Component({
    moduleId: module.id,
    templateUrl: "create-event.component.html",
    styleUrls: ["create-event.component.css"]
})

export class CreateEventComponent {
    isDirty = true;

    constructor(
        private router: Router,
        private eventsService: EventsService
    ) {}

    saveEvent(formValues) {
        this.eventsService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(["/events"]);
    }

    cancel() {
        this.router.navigate(["/events"]);
    }
}
