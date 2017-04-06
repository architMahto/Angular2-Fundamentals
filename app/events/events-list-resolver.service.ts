import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { EventsService } from "./shared/events.service";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventsService: EventsService) {}

    resolve() {
        // We are mapping the returned observable to return the list
        // of events on that stream
        return this.eventsService.getEvents();
    }
}
