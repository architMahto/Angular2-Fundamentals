import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "./shared/events.service";
import { IEvent } from "./shared/index";

@Component({
    moduleId: module.id,
    selector: "events-list",
    templateUrl: "events-list.component.html",
})

export class EventsListComponent implements OnInit {
   public events: IEvent[];

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute,
    ) {

    }

    public ngOnInit() {
        let events = "events";
        this.events = this.route.snapshot.data[events];
    }
}
