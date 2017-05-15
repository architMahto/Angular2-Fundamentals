import { Component,
         EventEmitter,
         Input,
         Output,
       } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
    moduleId: module.id,
    selector: "event-thumbnail",
    styleUrls: ["event-thumbnail.component.css"],
    templateUrl: "event-thumbnail.component.html",
})

export class EventThumbnailComponent {
    @Input()
    public event: IEvent;

    @Output()
    public eventClick = new EventEmitter();

    public handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    public getStartedTimeClass() {
        const isEarlyStart = this.event && this.event.time === "8:00 am";
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}
