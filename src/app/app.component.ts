import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public static readonly development = true
  public static readonly projectName = "South Dhaka Cyclists"
  appComponent = AppComponent;
}
