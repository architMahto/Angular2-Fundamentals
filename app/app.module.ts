import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { NavBarComponent } from "./nav/navbar.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventsAppComponent } from "./events.app.component";

import { EventsService } from "./events/shared/events.service";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent
    ],
    providers: [
        EventsService,
        ToastrService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})

export class AppModule {

}
