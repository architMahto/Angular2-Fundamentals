import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

import { usersRouting } from "./users.routes";

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        usersRouting,
    ],
    providers: [
    ],
})

export class UsersModule {
}
