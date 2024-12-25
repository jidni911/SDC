import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
    if(this.user){
      this.forward('dashboard'+this.user.role)
    }
  }
  user!: any;

  forward(route: string) {
    this.router.navigateByUrl('/dashboard/' + route);
  }

  

}
