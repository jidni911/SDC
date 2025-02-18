import { UsersService } from 'src/app/service/users.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  getUrl(arg0: any) {
    if (arg0 == null) return "https://img.freepik.com/premium-photo/waving-silk-flag-bangladesh_920128-168.jpg";
    return environment.apiUrl + arg0.url
  }

  constructor(private usersService: UsersService) { }
  person: any;
  ngOnInit(): void {
    this.usersService.getMySelf().subscribe((r: any) => {
      this.person = r
    })
  }

  handleProfilePictureChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      target.disabled = true
      this.usersService.changeProfilePicture(file).subscribe((res: any) => {
        setTimeout(() => {
          this.person.profilePicture = res
          target.disabled = false
          target.value = ''
        },1000)
      })
    }
  }
  handleCoverPictureChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      this.usersService.changeCoverPicture(file).subscribe((res: any) => {
        setTimeout(() => {
          this.person.coverPicture = res
          target.value=''
        },1000)
      })
    }
  }
}
