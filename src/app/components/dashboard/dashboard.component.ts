import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.user = AppComponent.getUser()
    if(this.user){
      this.forward('dashboard'+this.user.role)
    }else{
      this.router.navigateByUrl('/signin');
    }
  }
  user!: any;
  AppComponent = AppComponent;

  forward(route: string) {
    this.router.navigateByUrl('/dashboard/' + route);
  }



}
