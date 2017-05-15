import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Toastr, TOASTR_TOKEN } from "../../common/toastr.service";
import { AuthService } from "../auth.service";

@Component({
    moduleId: module.id,
    styleUrls: ["profile.component.css"],
    templateUrl: "profile.component.html",
})

export class ProfileComponent implements OnInit {
    public profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(
        private router: Router,
        private authService: AuthService,
        @Inject(TOASTR_TOKEN) private toastr: Toastr,
    ) {

    }

    public ngOnInit() {
        this.firstName = new FormControl(
            this.authService.currentUser.firstName,
            [
                Validators.required,
                Validators.pattern("[a-zA-Z].*"),
            ],
        );
        this.lastName = new FormControl(
            this.authService.currentUser.lastName,
            Validators.required,
        );

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
        });
    }

    public saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(
                formValues.firstName,
                formValues.lastName,
            )
            .subscribe(() => {
                this.toastr.success("Profile Saved");
            });
        }
    }

    public logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(["/user/login"]);
        });
    }

    public validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    public validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    public cancel() {
        this.router.navigate(["events"]);
    }
}
