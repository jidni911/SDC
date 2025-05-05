import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  user: User | null = null;
  ngOnInit(): void {
    this.usersService.getMySelf().subscribe((res: any) => {
      this.usersService.changeUser(res);
    }, (err: any) => {
      console.log(err);
    })
  }

  public static projectName = "South Dhaka Cyclists"


}
