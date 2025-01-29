import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static user:any = null
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    AppComponent.user = userData ? JSON.parse(userData) : null;
  }
  static getUser(){
    return AppComponent.user
  }
  static setUser(user:any){
    AppComponent.user = user
    localStorage.setItem('user', JSON.stringify(user));
  }
  static removeUser(){
    AppComponent.user = null;
    localStorage.removeItem('user')
  }


  public static development = true
  public static projectName = "South Dhaka Cyclists"
  appComponent = AppComponent;

 
}
