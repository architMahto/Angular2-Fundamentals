import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/events.service";

@Component({
    moduleId: module.id,
    selector: "events-list",
    templateUrl: "events-list.component.html"
})

export class EventsListComponent implements OnInit {
    events: any[];

    constructor(private eventsService: EventsService) {

    }

    handleEventClicked(data) {
        console.log("received:", data);
    }

    ngOnInit() {
        this.events = this.eventsService.getEvents();
    }
}
