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
  onDateInputChange() {
    const selectedDate = this.eventForm.value.date; // Get the selected date
    const startTime = new Date(selectedDate + 'T13:00:00').toISOString().substr(0, 19); // Set 07:00 AM
  
    this.eventForm.patchValue({ startTime });
  }
  
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
    // if(!AppComponent.getUser()){
    //   this.router.navigateByUrl('/signin');
    // }
  }


  eventForm: FormGroup = new FormGroup({
    name: new FormControl('Chill Ride'),
    date: new FormControl(new Date(Date.now() + 86400000).toISOString().substr(0, 10)), // YYYY-MM-DD
    dayOfWeek: new FormControl('FRIDAY'),
    fromLocation: new FormControl('Kamalapur'),
    toLocation: new FormControl('Sharighat'),
    startTime: new FormControl(new Date().toISOString().substr(0, 19)), // YYYY-MM-DDTHH:mm:ss
    duration: new FormControl(2), // Convert to number
    distanceInKM: new FormControl(20), // Convert to number
    description: new FormControl('lorem ipsum dolor sit amet consectetur adipiscing elit')
  });
  


  onSubmit() {

    this.eventsService.createEvent(this.eventForm.value).subscribe((r) => {

      this.router.navigateByUrl('/events')
    })

  }

}
