import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  static user: any = null
  static roles = []
  ngOnInit(): void {
    AppComponent.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.usersService.getMySelf().subscribe((res: any) => {      
      AppComponent.user = res
      AppComponent.roles = AppComponent.user?.roles;
      localStorage.setItem('user', JSON.stringify(AppComponent.user));
    }, (err: any) => {
      AppComponent.removeUser();
    })
  }
  static getUser() {
    return AppComponent.user
  }
  static getRoles() {
    return AppComponent.roles
  }
  static removeUser() {
    AppComponent.user = null;
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }


  public static development = true
  public static projectName = "South Dhaka Cyclists"
  appComponent = AppComponent;


}
