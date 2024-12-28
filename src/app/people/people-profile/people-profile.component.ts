import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-people-profile',
  templateUrl: './people-profile.component.html',
  styleUrls: ['./people-profile.component.scss']
})
export class PeopleProfileComponent implements OnInit {
  peopleId!: any;
  constructor(private route: ActivatedRoute, private us : UsersService) { }
  ngOnInit(): void {
    this.peopleId = this.route.snapshot.params['id'];
    this.us.getUser(this.peopleId).subscribe((r: any) => {

      this.person = r;
    })
  }
  person: any = null;

}
