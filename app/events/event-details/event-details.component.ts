import { Component, OnInit } from "@angular/core";

import { IEvent, ISession } from "../shared/index";

import { EventsService } from "../shared/events.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "event-details.component.html",
    styleUrls: ["event-details.component.css"]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy = "all";
    sortBy = "votes";

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params["id"]);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(
            null,
            this.event.sessions.map(
                session => session.id
            )
        );
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventsService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
