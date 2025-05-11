import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  user: User | null = null;
  ngOnInit(): void {
    this.setupUser();
  }

  public static projectName = "South Dhaka Cyclists"
  setupUser() {
    let token = localStorage.getItem('token');
    if(token == null) {
      token = sessionStorage.getItem('token');
    };
    if(token == null) {
      return;
    }
    // this.usersService.changeToken(token);
    this.usersService.getMySelf().subscribe((res: any) => {
      if(res == null) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        return;
      }
      this.usersService.changeUser(res);
    }, (err: any) => {
      console.log(err);
    })
  }

}
