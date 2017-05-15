import {Component, ElementRef, Inject, Input, ViewChild} from "@angular/core";

import {JQ_TOKEN} from "./jquery.service";

@Component({
  moduleId: module.id,
  selector: "simple-modal",
  styleUrls: ["simple-modal.component.css"],
  templateUrl: "simple-modal.component.html",
})

export class SimpleModalComponent {
  @Input()
  public title: string;

  @Input()
  public elementId: string;

  @Input()
  public closeOnBodyClick: string;

  @ViewChild("modalcontainer")
  public containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  public closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal("hide");
    }
    this.$(this.containerEl.nativeElement).modal("hide");
  }
}
