import { HomeServiceService } from './../../service/home-service.service';
import { UsersService } from 'src/app/service/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  constructor(private usersService: UsersService,private homeService: HomeServiceService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((r: any) => {
      this.users = r;
    })
    this.homeService.getHome().subscribe((r:any)=>{
      this.home = r;
      this.introForm.patchValue(this.home);
    })
  }
  home:any= null;
  users: any[] = []

  introForm : FormGroup = new FormGroup({
    welcomeText : new FormControl('hello'),
  })

  onSubmit(){
    this.homeService.updateHome(this.introForm.value).subscribe((r:any)=>{
      console.log(r);
    })
  }

}
//TODO intro page controlling, post deletation, user deletation