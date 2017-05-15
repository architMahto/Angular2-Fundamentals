import { Routes } from "@angular/router";

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListResolver,
    EventResolver,
    EventsListComponent,
} from "./events/index";

import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
    {
        canDeactivate: ["canDeactivateCreateEvent"],
        component: CreateEventComponent,
        path: "events/new",
    },
    {
        component: EventsListComponent,
        path: "events",
        resolve: { events: EventListResolver },
    },
    {
        component: EventDetailsComponent,
        path: "events/:id",
        resolve: { event: EventResolver },
    },
    {
        component: CreateSessionComponent,
        path: "events/session/new",
    },
    {
        component: Error404Component,
        path: "404",
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/events",
    },
    {
        loadChildren: "app/users/users.module#UsersModule",
        path: "users",
    },
];
