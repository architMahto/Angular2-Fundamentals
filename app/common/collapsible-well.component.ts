import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "collapsible-well",
    styleUrls: ["collapsible-well.component.css"],
    templateUrl: "collapsible-well.component.html",
})

export class CollapsibleWellComponent {
    public visible = true;

    public toggleContent() {
        this.visible = !this.visible;
    }
}
