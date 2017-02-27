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
    EventsService,
    EventRouteActivator,
    EventListResolver
} from "./events/index";

import { EventsAppComponent } from "./events.app.component";

import { AuthService } from "./users/auth.service";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";

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
        CreateEventComponent
    ],
    providers: [
        EventsService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: "canDeactivateCreateEvent",
            useValue: checkDirtyState
        },
        AuthService,
        ToastrService
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
