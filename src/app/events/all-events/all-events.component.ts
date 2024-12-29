import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  isSeller(): any {
    return AppComponent.getUser().role == "seller"
  }
  constructor(private es: EventsService, private router: Router) { }
  onEventClick(id: number) {
    this.router.navigateByUrl('/events/event/' + id);
  }
  events: any[] = []

  ngOnInit(): void {
    this.es.getEvents().subscribe((r: any) => {
      this.events = r
    })
  }
}
