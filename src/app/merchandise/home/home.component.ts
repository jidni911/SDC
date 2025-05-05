import { JerseyService } from './../services/jersey.service';
import { AppComponent } from 'src/app/app.component';
import { Jersey } from './../model/jersey';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null = null
  apiUrl = environment.apiUrl
  constructor(private jerseyService: JerseyService, private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.user.subscribe((res: User|null) => {
      this.user = res
    })
    this.jerseyService.getJerseys().subscribe((v: any) => {
      this.jerseys = v;
    })
  }



  jerseys : Jersey[] = [];

  isAdmin() {    
    return Array.from(this.user?.roles || []).find((v : any) => v.name == 'ROLE_ADMIN');
  }
}
