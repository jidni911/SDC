import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EventsService } from 'src/app/service/events.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  apiUrl = environment.apiUrl;
  isSeller(): any {
    return AppComponent.getUser().roles.map((v: any) => { return v.name }).includes('ROLE_SELLER')
  }
  constructor(private es: EventsService, private router: Router) { }
  onEventClick(id: number) {
    this.router.navigateByUrl('/events/event/' + id);
  }
  events: any[] = []
  currentEvents: any[] = []
  upcomingEvents: any[] = []
  pastEvents: any[] = []

  ngOnInit(): void {
    this.es.getEvents().subscribe((r: any) => {
      this.events = r.content     

      this.currentEvents = this.events.filter((v: any) => {
        const startTime = new Date(v.startTime);
        startTime.setHours(startTime.getHours() - 12);
        const eventEndTime = new Date(v.startTime);
        eventEndTime.setHours(eventEndTime.getHours() + v.duration);
        return startTime < new Date() && eventEndTime > new Date();
      })

      this.upcomingEvents = this.events.filter((v: any) => {
        const startTime = new Date(v.startTime);
        
        startTime.setHours(startTime.getHours() - 12);
        
        return startTime > new Date()
      })

      this.pastEvents = this.events.filter((v: any) => {
        const eventEndTime = new Date(v.startTime);
        eventEndTime.setHours(eventEndTime.getHours() + v.duration); // Correctly adding duration
        return eventEndTime < new Date();
      });
    })
  }
  calculateEndTime(startTime: any, duration: any) {
    const eventEndTime = new Date(startTime);
    eventEndTime.setHours(eventEndTime.getHours() + duration);
    return eventEndTime;
  }
  filterMyEvents(v: any[]) {
    return v.filter((value: any) => {
      return value.organiser.id == AppComponent.getUser().id
    })
  }
}
