import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
onEventClick(id: number) {
    this.router.navigateByUrl('/events/event/'+ id);
}
  events = [
    {
      id: 1,
      name: 'Event 1',
      date: '2023-10-01',
      dayOfWeek: 'Sunday',
      fromLocation: 'Location A',
      toLocation: 'Location B',
      startTime: '08:00 AM',
      duration: '2 hours',
      distance: '20 km',
      location: 'Location 1',
      description: 'Description of Event 1',
      organiser: 'SDC'
    },
    {
      id: 2,
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
    },
    {
      id: 3,
      name: 'Event 3',
      date: '2023-11-01',
      dayOfWeek: 'Wednesday',
      fromLocation: 'Location E',
      toLocation: 'Location F',
      startTime: '07:00 AM',
      duration: '1.5 hours',
      distance: '15 km',
      location: 'Location 3',
      description: 'Description of Event 3',
      organiser: 'SDC'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
