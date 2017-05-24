import { Component } from "@angular/core";
import { EventsService } from "../events/index";
import { ISession } from "../events/shared/events.model";
import { AuthService } from "../users/auth.service";

@Component({
  moduleId: module.id,
  selector: "nav-bar",
  styleUrls: ["navbar.component.css"],
  templateUrl: "navbar.component.html",
})

export class NavBarComponent {
  public searchTerm = "";
  public foundSessions: any;

  constructor (
    private authService: AuthService,
    private eventsService: EventsService,
  ) {}

  public searchSessions(searchTerm) {
    this.eventsService.searchSessions(searchTerm).subscribe(
      (sessions) => {
        this.foundSessions = sessions;
      },
    );
  }
}
