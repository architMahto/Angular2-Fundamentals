import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { IEvent, ISession } from "../shared/index";

import { EventsService } from "../shared/events.service";

@Component({
    moduleId: module.id,
    styleUrls: ["event-details.component.css"],
    templateUrl: "event-details.component.html",
})

export class EventDetailsComponent implements OnInit {
    public addMode: boolean;
    public event: IEvent;
    public filterBy = "all";
    public sortBy = "votes";

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute) {

    }

    public ngOnInit() {
        this.route.data.forEach((data) => {
            let event = "event";
            this.event = data[event];
            this.addMode = false;
        });

        // this.event = this.eventsService.getEvent(+this.route.snapshot.params["id"]);
    }

    public addSession() {
        this.addMode = true;
    }

    public saveNewSession(session: ISession) {
        const nextId = Math.max.apply(
            null,
            this.event.sessions.map((session) => session.id),
        );
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventsService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    public cancelAddSession() {
        this.addMode = false;
    }
}
