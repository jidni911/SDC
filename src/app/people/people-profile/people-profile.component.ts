import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-people-profile',
  templateUrl: './people-profile.component.html',
  styleUrls: ['./people-profile.component.scss']
})
export class PeopleProfileComponent implements OnInit {
  user: User | null = null
  peopleId!: any;
  constructor(private route: ActivatedRoute,private router: Router, private us : UsersService) { }
  ngOnInit(): void {
    if(this.user) {
      this.peopleId = this.route.snapshot.params['id'];
      this.us.getUser(this.peopleId).subscribe((r: any) => {
        this.person = r;
      })
    } else {
      this.router.navigateByUrl('/signin')
    }
  }
  person: any = null;
  apiUrl = environment.apiUrl

}
