import { Routes } from "@angular/router";

import {
    EventsListComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from "./events/index";

import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
    {
        path: "events/new",
        component: CreateEventComponent,
        canDeactivate: ["canDeactivateCreateEvent"]
    },
    {
        path: "events",
        component: EventsListComponent,
        resolve: { events: EventListResolver }
    },
    {
        path: "events/:id",
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: "events/session/new",
        component: CreateSessionComponent
    },
    {
        path: "404",
        component: Error404Component
    },
    {
        path: "",
        redirectTo: "/events",
        pathMatch: "full"
    },
    {
        path: "users",
        loadChildren: "app/users/users.module#UsersModule"
    }
];
