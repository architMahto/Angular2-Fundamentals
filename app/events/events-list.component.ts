import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/events.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared/index";

@Component({
    moduleId: module.id,
    selector: "events-list",
    templateUrl: "events-list.component.html"
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(
            private eventsService: EventsService,
            private route: ActivatedRoute,
            private toastr: ToastrService
        ) {

    }

    handleEventClicked(data) {
        this.toastr.success(data);
    }

    ngOnInit() {
        this.events = this.route.snapshot.data["events"];
    }
}
