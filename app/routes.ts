import { Routes } from "@angular/router";

import {
    EventsListComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
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
        resolve: { event: EventResolver }
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
