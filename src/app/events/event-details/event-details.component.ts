import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user';
import { EventsService } from 'src/app/service/events.service';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  user: User | null = null
  apiUrl = environment.apiUrl
  isSeller(): any {
    return Array.from(this.user?.roles || []).map((v: any) => { return v.name }).includes('ROLE_SELLER')
  }
  eventId!: any;
  constructor(private route: ActivatedRoute, private es: EventsService, private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.user.subscribe((res: User|null) => {
      this.user = res
    })
    this.eventId = this.route.snapshot.params['id'];
    this.es.getEvent(this.eventId).subscribe((r: any) => {
      this.event = r;      
    })
  }
  event: any = null;

  showSponsorshipRequest(): any {
    return this.user?.id == this.event.organiser.id
  }
}
