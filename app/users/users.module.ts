import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

import { usersRouting } from "./users.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        usersRouting
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UsersModule {
    constructor() {}
}
