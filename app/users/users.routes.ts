import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

const usersRoutes: Routes = [
    {
        children: [
            {
                component: ProfileComponent,
                path: "profile",
            },
            {
                component: LoginComponent,
                path: "login",
            },
        ],
        path: "",
    },
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
