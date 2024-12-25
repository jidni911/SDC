import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public static development = true
  public static projectName = "South Dhaka Cyclists"
  public static role = "user"
  appComponent = AppComponent;
}
