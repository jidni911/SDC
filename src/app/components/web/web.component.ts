import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  constructor(private router:Router){}
  sign() {
    if(AppComponent.getUser()){
      AppComponent.removeUser();
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }
  changerole(role: string) {
    AppComponent.user.role = role;
    // window.location.reload()
  }
  appComponent = AppComponent;
}
