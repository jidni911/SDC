import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  constructor(private es:EventsService,private router: Router){}
onEventClick(id: number) {
    this.router.navigateByUrl('/events/event/'+ id);
}
  events:any[] =[]

  ngOnInit(): void {
    this.es.getEvents().subscribe((r:any)=>{
      this.events = r
    })
  }
}
