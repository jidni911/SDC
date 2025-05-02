import { JerseyService } from './../services/jersey.service';
import { AppComponent } from 'src/app/app.component';
import { Jersey } from './../model/jersey';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiUrl = environment.apiUrl
  constructor(private jerseyService: JerseyService) { }
  ngOnInit(): void {
    this.jerseyService.getJerseys().subscribe((v: any) => {
      this.jerseys = v;
    })
  }



  jerseys : Jersey[] = [];

  isAdmin() {    
    return AppComponent.getRoles().find((v : any) => v.name == 'ROLE_ADMIN');
  }
}
