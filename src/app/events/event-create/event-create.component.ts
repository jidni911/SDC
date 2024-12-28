import { EventsService } from './../../service/events.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
    if(!AppComponent.getUser()){
      this.router.navigateByUrl('/signin');
    }
  }


  eventForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    dayOfWeek: new FormControl(''),
    fromLocation: new FormControl(''),
    toLocation: new FormControl(''),
    startTime: new FormControl(''),
    duration: new FormControl(''),
    distance: new FormControl(''),
    description: new FormControl(''),
    organiser: new FormControl(AppComponent.getUser().id)
  });

  onSubmit() {
    console.log(this.eventForm.value);
    this.eventsService.createEvent(this.eventForm.value).subscribe((r) => {
      this.router.navigateByUrl('/events')
    })

  }

}
