import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.scss']
})
export class AllPeopleComponent implements OnInit {
  getUrl(arg0: any) {
      if (arg0 == null) return "https://img.freepik.com/premium-photo/waving-silk-flag-bangladesh_920128-168.jpg";
      return environment.apiUrl + arg0.url
    }
  people: any[] = []

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((r: any) => {
      this.people = r;
    })
  }
}
