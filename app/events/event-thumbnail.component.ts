import { Component,
         Input,
         Output,
         EventEmitter
       } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
    moduleId: module.id,
    selector: "event-thumbnail",
    templateUrl: "event-thumbnail.component.html",
    styleUrls: ["event-thumbnail.component.css"]
})

export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    getStartedTimeClass() {
        const isEarlyStart = this.event && this.event.time === "8:00 am";
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}
