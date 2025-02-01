import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.signupForm.setValue({
      fullName: '',
      username: '',
      email: '',
      password: '',
      retypePassword: '',
      gender: '',
      dob: '',
      phoneNumber: '',
      address: '',
      profilePicture: ''
    })
    this.fullNameState = "";
    this.usernameState = "";
    this.emailState = "";
    this.passwordState = "";
    this.retypePasswordState = "";
    this.genderState = "";
    this.dobState = "";
    this.phoneNumberState = "";
    this.addressState = "";
    this.profilePictureState = "";
    this.messege = "Waiting for submit button click";
  }
  signupForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    retypePassword: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    profilePicture: new FormControl()
  });
  fullNameState = "";
  usernameState = "";
  emailState = "";
  passwordState = "";
  retypePasswordState = "";
  genderState = "";
  dobState = "";
  phoneNumberState = "";
  addressState = "";
  profilePictureState = "";
  messege = "Waiting for submit button click"

  checkUsernameAvailability() {
    if (this.signupForm.value.username.length >= 5) {
      this.authService.checkUsernameAvailability(this.signupForm.value.username).subscribe((r: any) => {
        if (r) {
          this.usernameState = "is-valid"
        } else {
          this.usernameState = "is-invalid"
        }
      })
    } else {
      this.usernameState = "is-invalid"
    }
  }

  checkEmailAvailability() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(this.signupForm.value.email)) {
      this.authService.checkEmailAvailability(this.signupForm.value.email).subscribe((r: any) => {
        if (r) {
          this.emailState = "is-valid"
        } else {
          this.emailState = "is-invalid"
        }
      })
    }
  }

  onSubmit() {
    this.messege = "checking input, please wait..."
    let flag = true;
    if (this.signupForm.value.username.length < 3) {
      flag = false;
      this.usernameState = "is-invalid"
    } else {
      this.usernameState = "is-valid"
    }
    if (!/^\d{10,}$/.test(this.signupForm.value.phoneNumber)) {
      flag = false;
      this.phoneNumberState = "is-invalid"
    } else {
      this.phoneNumberState = "is-valid"
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.signupForm.value.email)) {
      flag = false;
      this.emailState = "is-invalid"
    } else {
      this.emailState = "is-valid"
    }
    if (this.signupForm.value.address.length < 10) {
      flag = false;
      this.addressState = "is-invalid"
    } else {
      this.addressState = "is-valid"
    }
    const dob = new Date(this.signupForm.value.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (isNaN(dob.getTime()) || age < 10) {
      flag = false;
      this.dobState = "is-invalid";
    } else {
      this.dobState = "is-valid";
    }
    const validGenders = ['MALE', 'FEMALE', 'NOT_SPECIFIED'];
    if (!validGenders.includes(this.signupForm.value.gender)) {
      flag = false;
      this.genderState = "is-invalid";
    } else {
      this.genderState = "is-valid";
    }
    const password = this.signupForm.value.password;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      flag = false;
      this.passwordState = "is-invalid";
    } else {
      this.passwordState = "is-valid";
    }
    if (this.signupForm.value.password !== this.signupForm.value.retypePassword) {
      flag = false;
      this.retypePasswordState = "is-invalid"
    } else {
      this.retypePasswordState = "is-valid"
    }

    if (flag) {
      this.messege = "all data looks valid. trying to modify and submit"
      this.authService.signup(this.signupForm.value).subscribe((data: any) => {
        this.messege = "submitted successfully redirecting to log in page"
        this.router.navigateByUrl('/signin')
      });
    } else {
      this.messege = "some data wasnt standand. check again"
    }
  }


  onReset() {
    this.ngOnInit()
  }
  fillDemoData() {
    this.signupForm.setValue({
      fullName: 'Demo User',
      username: 'demoUser',
      email: 'demo@example.com',
      password: 'Demo@1234',
      retypePassword: 'Demo@1234',
      gender: 'MALE',
      dob: '2000-01-01',
      phoneNumber: '1234567890',
      address: '123 Demo Street, Demo City',
      profilePicture: ''
    });
  }


}
