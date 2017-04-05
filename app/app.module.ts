import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

import {
    EventThumbnailComponent,
    CreateSessionComponent,
    SessionListComponent,
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
    UpvoteComponent,
    EventsService,
    VotersService,
    LocationValidator,
    EventRouteActivator,
    EventListResolver,
    DurationPipe
} from "./events/index";

import { EventsAppComponent } from "./events.app.component";

import { AuthService } from "./users/auth.service";
import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import { appRoutes } from "./routes";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        NavBarComponent,
        Error404Component,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        CreateSessionComponent,
        SessionListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CollapsibleWellComponent,
        UpvoteComponent,
        SimpleModalComponent,
        LocationValidator,
        ModalTriggerDirective,
        DurationPipe
    ],
    providers: [
        EventsService,
        EventRouteActivator,
        EventListResolver,
        VotersService,
        {
            provide: "canDeactivateCreateEvent",
            useValue: checkDirtyState
        },
        AuthService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        }
    ],
    bootstrap: [
        EventsAppComponent
    ]
})

export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event, do you really want to cancel?");
    }
    return true;
}
