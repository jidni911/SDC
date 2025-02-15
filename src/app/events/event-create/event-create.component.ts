import { EventsService } from './../../service/events.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilesService } from 'src/app/service/files.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  apiUrl = environment.apiUrl
  constructor(
    private eventsService: EventsService, 
    private router: Router,
    private fileService: FilesService
  ) { }
  ngOnInit(): void {
    // if(!AppComponent.getUser()){
    //   this.router.navigateByUrl('/signin');
    // }
  }
  eventCover :{id  : number, url : string} = {url : '', id : 0};

  onDateInputChange() {
    const selectedDate = this.eventForm.value.date; // Get the selected date
    // const startTime = new Date(selectedDate + 'T13:00:00').toISOString().substr(0, 19); // Set 07:00 AM
    let startTime = new Date(selectedDate);
    startTime.setHours(13, 0, 0);
    let startTime2 = startTime.toISOString().substr(0, 19);
    let dayOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][startTime.getDay()];
    this.eventForm.patchValue({ dayOfWeek: dayOfWeek });
    this.eventForm.patchValue({ startTime: startTime2 });
  }



  eventForm: FormGroup = new FormGroup({
    coverImage: new FormControl(''),
    name: new FormControl('Chill Ride'),
    date: new FormControl(new Date(Date.now() + 86400000).toISOString().substr(0, 10)), // YYYY-MM-DD
    dayOfWeek: new FormControl('FRIDAY' ),
    fromLocation: new FormControl('Kamalapur'),
    toLocation: new FormControl('Sharighat'),
    startTime: new FormControl(new Date().toISOString().substr(0, 19)), // YYYY-MM-DDTHH:mm:ss
    duration: new FormControl(2), // Convert to number
    distanceInKM: new FormControl(20), // Convert to number
    description: new FormControl('lorem ipsum dolor sit amet consectetur adipiscing elit')
  });



  onSubmit() {
    this.eventForm.get('coverImage')?.setValue(this.eventCover.id);
    // console.log(this.eventForm.value);
    
    this.eventsService.createEvent(this.eventForm.value).subscribe((r) => {

      this.router.navigateByUrl('/events')
    })

  }

  handleImageInput(event : Event) {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      
      const file = input.files[0];
      this.fileService.uploadImage(file).subscribe((r) => {
        setTimeout(() => {
          this.eventCover = r;
          input.value = '';
        }, 1000);
      })
    }
  }

}
