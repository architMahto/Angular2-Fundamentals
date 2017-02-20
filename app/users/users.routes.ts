import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

const usersRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "profile",
                component: ProfileComponent
            },
            {
                path: "login",
                component: LoginComponent
            }
        ]
    }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
