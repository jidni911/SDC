import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EventsService } from 'src/app/service/events.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  apiUrl = environment.apiUrl
  isSeller(): any {
    return AppComponent.getUser().roles.map((v: any) => { return v.name }).includes('ROLE_SELLER')
  }
  eventId!: any;
  constructor(private route: ActivatedRoute, private es: EventsService) { }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.es.getEvent(this.eventId).subscribe((r: any) => {
      this.event = r;      
    })
  }
  event: any = null;

  showSponsorshipRequest(): any {
    return AppComponent.getUser().id == this.event.organiser.id
  }
}
