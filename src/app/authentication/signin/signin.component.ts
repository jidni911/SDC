import { UsersService } from './../../service/users.service';
import { User } from 'src/app/model/user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User | null = null;
  userImageUrl = 'https://i.pravatar.cc/150?img=3';
  identifier = 'demoUser';
  password = 'Demo@1234';
  userFetched: boolean | null = null;
  loading = false;
  rememberMe = false;//TODO try it, try music
  showPassword = false;
  userInfo = { username: '', fullName: '', profilePicture: '' };
  apiUrl = environment.apiUrl
  constructor(private authService: AuthService, private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.user.subscribe((r: User | null) => {
      this.user = r;
      if (r) {
        this.userImageUrl = r.profilePicture.url ? this.apiUrl + r.profilePicture.url : 'https://i.pravatar.cc/150?img=3';
      }
    })
  }

  fetchUser() {
    if (!this.identifier.trim()) return;
    this.loading = true;
    this.authService.getUserByIdentifier(this.identifier).subscribe((r: User) => {
      console.log(r);
      if (r) {
        this.userInfo.username = r.username;
        this.userInfo.fullName = r.fullName;
        this.userInfo.profilePicture = r.profilePicture.url ? this.apiUrl + r.profilePicture.url : 'https://i.pravatar.cc/150?img=3';
        this.loading = false;
        this.userFetched = true;
      } else {
        this.userFetched = false;
        this.loading = false;
      }
    });
  }

  login() {
    this.loading = true;
    this.authService.login({ username: this.userInfo.username, password: this.password })
      .subscribe({
        next: (v: any) => {
          console.log(v)
          if (this.rememberMe) {
            localStorage.setItem('token', v.jwtToken);
            this.usersService.changeUser(v.user)
          } else {
            sessionStorage.setItem('token', v.jwtToken);
            this.usersService.changeUser(v.user)
          }
          this.loading = false;
          this.userFetched = null;
          this.identifier = '';
          this.password = '';
          // this.router.navigate(['/intro']);

        },
        error: (e) => {
          this.loading = false;
          alert(e.error.message);
        }
      }

      );

  }


  reset() {
    this.userFetched = null;
    this.identifier = '';
    this.password = '';
  }

  logout() {
    this.authService.logout().subscribe((v: any) => {
      this.usersService.changeUser(null);
    });
  }
}
