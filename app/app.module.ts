import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { NavBarComponent } from "./nav/navbar.component";

import {
    CollapsibleWellComponent,
    JQ_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    Toastr,
    TOASTR_TOKEN,
} from "./common/index";

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventListResolver,
    EventResolver,
    EventsListComponent,
    EventsService,
    EventThumbnailComponent,
    LocationValidator,
    SessionListComponent,
    UpvoteComponent,
    VotersService,
} from "./events/index";

import { EventsAppComponent } from "./events.app.component";

import { appRoutes } from "./routes";

import { AuthService } from "./users/auth.service";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    bootstrap: [
        EventsAppComponent,
    ],
    declarations: [
        CreateEventComponent,
        CreateSessionComponent,
        CollapsibleWellComponent,
        DurationPipe,
        Error404Component,
        EventsAppComponent,
        EventDetailsComponent,
        EventsListComponent,
        EventThumbnailComponent,
        LocationValidator,
        ModalTriggerDirective,
        NavBarComponent,
        SessionListComponent,
        SimpleModalComponent,
        UpvoteComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        EventsService,
        EventResolver,
        EventListResolver,
        VotersService,
        {
            provide: "canDeactivateCreateEvent",
            useValue: checkDirtyState,
        },
        AuthService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery,
        },
    ],
})

export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event, do you really want to cancel?");
    }
    return true;
}
