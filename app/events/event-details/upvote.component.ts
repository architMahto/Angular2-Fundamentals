import { Component, EventEmitter, Input, Output  } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "upvote",
  styleUrls: ["upvote.component.css"],
  templateUrl: "upvote.component.html",
})

export class UpvoteComponent {
  @Input()
  public count: number;

  @Input()
  set voted(val) {
    this.iconColor = val ? "red" : "white";
  }

  @Output()
  public vote = new EventEmitter();

  public iconColor: string;

  public onClick() {
    this.vote.emit({});
  }
}
