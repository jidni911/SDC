import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventId!: number;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
  }
  event = {
    id: this.eventId,
    name: 'Event 2',
    date: '2023-10-15',
    dayOfWeek: 'Sunday',
    fromLocation: 'Location C',
    toLocation: 'Location D',
    startTime: '09:00 AM',
    duration: '3 hours',
    distance: '30 km',
    location: 'Location 2',
    description: 'Description of Event 2',
    organiser: 'User'
  }
}
