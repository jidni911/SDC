import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {


  constructor(private router: Router, private authService: AuthService) { }
  sign() {
    if (AppComponent.getUser()) {
      this.authService.logout().subscribe((v: any) => {
        console.log(v);
      });
      AppComponent.removeUser();
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }
  appComponent = AppComponent;

  isDev(): any {
    return AppComponent.getRoles().find((v: any) => v.name == "ROLE_DEV")
  }
  getUser() {
    return AppComponent.getUser()
  }
}
