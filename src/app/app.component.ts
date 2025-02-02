import { RolesService } from './service/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private rolesService: RolesService) { }
  static user: any = null
  static roles = []
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    AppComponent.user = userData ? JSON.parse(userData) : null;
    if (AppComponent.user && AppComponent.user.id) {
      AppComponent.roles = AppComponent.user.roles;
    }
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
