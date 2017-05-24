import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import { IUser } from "./users.model";

@Injectable()
export class AuthService {
    public currentUser: IUser;

    constructor(private http: Http) {}

    public loginUser(userName: string, password: string) {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers });
        let loginInfo = { username: userName, password };

        return this.http.post("/api/login", JSON.stringify(loginInfo), options)
                        .do((response) => {
                          if (response) {
                            this.currentUser = <IUser> response.json().user;
                          }
                        })
                        .catch((error) => {
                          return Observable.of(false);
                        });
    }

    public isAuthenticated() {
        return !!this.currentUser;
    }

    public checkAuthenticationStatus() {
        return this.http.get("/api/currentIdentity").map((response: any) => {
            if (response._body) {
                return response.json();
            } else {
                return {};
            }
        })
        .do((currentUser) => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        })
        .subscribe();
    }

    public updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers });

        return this.http.put(
            `/api/users/${this.currentUser.id}`,
            JSON.stringify(this.currentUser),
            options,
        );
    }

    public logout() {
        this.currentUser = undefined;

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers });

        return this.http.post(
            "/api/logout",
            JSON.stringify({}),
            options,
        );
    }
}
