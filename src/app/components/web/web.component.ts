import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  signout() {
    AppComponent.removeUser()
  }
  changerole(role: string) {
    AppComponent.role = role;
  }
  appComponent = AppComponent;
}
