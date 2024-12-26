import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  ngOnInit(): void {
    this.signinForm.setValue({
      email: '',
      password: '',
      rememberMe: false
    })
  }
  constructor(private userService: UsersService, private router : Router) { }
  signinForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(false)
  })
  emailState = ""
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
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      flag = false;
      this.passwordState = "is-invalid";
    } else {
      this.passwordState = "is-valid";
    }
    if (flag) {
      this.userService.signIn(this.signinForm.value).then((isAuthenticated) => {
        if (isAuthenticated) {
          this.emailState = "is-valid";
          this.passwordState = "is-valid";
          let json = ''
          if(this.signinForm.value.rememberMe){
            json = localStorage.getItem('user') || ''
          } else {
            json = sessionStorage.getItem('user') || ''
          }
          AppComponent.setUser(JSON.parse(json))
          this.router.navigateByUrl('/dashboard');
        } else {
          this.emailState = "is-invalid";
          this.passwordState = "is-invalid";
        }
      }).catch((error) => {
        console.error('Error during sign-in:', error);
      });

    }

  }

  loadDemo(){
    this.signinForm.setValue({
      email: 'demo@example.com',
      password: 'Demo@1234',
      rememberMe:'true'
    })
  }

}
