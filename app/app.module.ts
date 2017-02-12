import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NavBarComponent } from "./nav/navbar.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventsAppComponent } from "./events.app.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [
        EventsAppComponent
    ]
})

export class AppModule {

}
