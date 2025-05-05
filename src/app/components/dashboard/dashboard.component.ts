import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  roles(): Role[] { 
    return Array.from(this.user?.roles || [{ name: 'ROLE_USER' }]);
  }

  constructor(private router: Router, private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.user.subscribe((res: User | null) => {
      this.user = res
      // this.then();
    })

    
  }
  getCurrentRoute() {
    return this.router.url;
  }

}
