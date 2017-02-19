import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";

import { usersRoutes } from "./users.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(usersRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})

export class UsersModule {
    constructor() {}
}
