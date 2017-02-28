import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "collapsible-well",
    templateUrl: "collapsible-well.component.html",
    styleUrls: ["collapsible-well.component.css"]
})

export class CollapsibleWellComponent {
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
