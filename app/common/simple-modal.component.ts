import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple-modal',
  templateUrl: "simple-modal.component.html",
  styleUrls: ["simple-modal.component.css"]
})

export class SimpleModalComponent {
  @Input()
  title: string;
}
