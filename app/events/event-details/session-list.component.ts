import { Component, Input, OnChanges } from "@angular/core";

import { AuthService } from "../../users/auth.service";
import { ISession } from "../shared/index";
import { VotersService } from "./voters.service";

@Component({
    moduleId: module.id,
    selector: "session-list",
    styleUrls: ["session-list.component.css"],
    templateUrl: "session-list.component.html",
})

export class SessionListComponent implements OnChanges {
    @Input()
    public sessions: ISession[];

    @Input()
    public filterBy: string;

    @Input()
    public sortBy: string;

    @Input()
    public eventId: number;

    public visibleSessions: ISession[] = [];

    constructor(
      private authService: AuthService,
      private votersService: VotersService,
    ) {}

    public ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === "name" ?
            this.visibleSessions.sort(sortByNameAsc) :
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    public toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.votersService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        } else {
            this.votersService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }

        if (this.sortBy === "votes") {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    public userHasVoted(session: ISession) {
        return this.votersService.userHasVoted(session, this.authService.currentUser.userName);
    }

    public filterSessions(filter) {
        if (filter === "all") {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter((session) => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    } else if (s1.name === s2.name) {
        return 0;
    } else {
        return -1;
    }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
