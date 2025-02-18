import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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
      email: '',
      username: '',
      password: '',
      rememberMe: false
    })
  }
  constructor(private authService: AuthService, private router: Router) { }
  signinForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(false)
  })
  emailState = ""
  usernameState = ""
  passwordState = ""
  onSubmit() {
    let flag = true;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.signinForm.value.email)) {
      flag = false;
      this.emailState = "is-invalid"
    } else {
      flag = true
      this.emailState = "is-valid"

    }
    const password = this.signinForm.value.password;
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
              } else {
                sessionStorage.setItem('user', JSON.stringify(v.user));
                sessionStorage.setItem('token', v.jwtToken);
              }
              // AppComponent.setUser(JSON.parse(json))
              window.location.href="/intro";

          },
          error: (e) => {
            // console.log(e.error.message);
            this.messege = e.error.message;
          }
        }

        );

    }

  }

  loadDemo(userName: string) {
    if(userName == 'Demo') {
      this.signinForm.setValue({
        email: 'demo@example.com',
        username: 'demoUser',
        password: 'Demo@1234',
        rememberMe: 'true'
      })
    } else {
      this.signinForm.setValue({
        email: 'demo@example.com',
        username: userName,
        password: 'Onetwothree12@',
        rememberMe: 'true'
      })
    }
  }

}
