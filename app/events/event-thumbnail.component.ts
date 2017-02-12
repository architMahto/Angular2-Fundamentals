import { Component,
         Input,
         Output,
         EventEmitter
       } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "event-thumbnail",
    templateUrl: "event-thumbnail.component.html",
    styleUrls: ["event-thumbnail.component.css"]
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }
}
