import { Component } from "@angular/core";
import { AuthService } from "../users/auth.service";
import { EventsService } from "../events/index";
import { ISession } from "../events/shared/events.model";

@Component({
  moduleId: module.id,
  selector: "nav-bar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"]
})

export class NavBarComponent {
  searchTerm = "";
  foundSessions: ISession[];

  constructor (
    private authService: AuthService,
    private eventsService: EventsService
  ) {}

  searchSessions(searchTerm) {
    this.eventsService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      }
    );
  }
}
