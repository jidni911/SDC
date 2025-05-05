import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  usernames : any[] = []
  messege = "Waiting for submit button click";
  ngOnInit(): void {
    this.authService.getAllUsernames().subscribe((r:any)=>{
      this.usernames = r;
      
    })

    this.signinForm.setValue({
      // email: '',
      username: '',
      password: '',
      rememberMe: false
    })
  }
  constructor(private authService: AuthService, private router: Router, private usersService: UsersService) { }
  signinForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(false)
  })
  emailState = ""
  usernameState = ""
  passwordState = ""
  onSubmit() {
    let flag = true;
  
    // const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passwordPattern.test(password)) {
    //   flag = false;
    //   this.passwordState = "is-invalid";
    // } else {
    //   this.passwordState = "is-valid";
    // }
    if (flag) {
      this.authService.login({ username: this.signinForm.value.username, password: this.signinForm.value.password })
        .subscribe({
          next: (v: any) => {
            console.log(v)
            this.messege = v.user.username;
              this.emailState = "is-valid";
              this.passwordState = "is-valid";
              if (this.signinForm.value.rememberMe) {
                localStorage.setItem('user', JSON.stringify(v.user));
                localStorage.setItem('token', v.jwtToken);
                this.usersService.changeUser(v.user)
              } else {
                sessionStorage.setItem('user', JSON.stringify(v.user));
                sessionStorage.setItem('token', v.jwtToken);
                this.usersService.changeUser(v.user)
              }
              // AppComponent.setUser(JSON.parse(json))
              // window.location.href="/intro";
              this.router.navigate(['/intro']);

          },
          error: (e) => {
            // console.log(e.error.message);
            this.messege = e.error.message;
            alert(e.error.message);
          }
        }

        );

    }

  }

  loadDemo(userName: string) {
    if(userName == 'Demo') {
      this.signinForm.setValue({
        username: 'demoUser',
        password: 'Demo@1234',
        rememberMe: 'true'
      })
    } else {
      this.signinForm.setValue({
        username: userName,
        password: 'Onetwothree12@',
        rememberMe: 'true'
      })
    }
  }

}
