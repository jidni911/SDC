import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  constructor(private usersService: UsersService, private router:Router) { }
  ngOnInit(): void {
    this.signupForm.setValue({
      username: '',
      contact: '',
      email: '',
      address: '',
      dob: '',
      gender: '',
      password: '',
      retypePassword: ''
    })
    this.usernameState = "";
    this.contactState = "";
    this.emailState = "";
    this.addressState = "";
    this.dobState = "";
    this.genderState = "";
    this.passwordState = "";
    this.retypePasswordState = "";
  }
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    retypePassword: new FormControl(''),
  });
  usernameState = "";
  contactState = "";
  emailState = "";
  addressState = "";
  dobState = "";
  genderState = "";
  passwordState = "";
  retypePasswordState = "";
  messege = "Waiting for submit button click"
  onSubmit() {
    this.messege="checking input, please wait..."
    let flag = true;
    if (this.signupForm.value.username.length < 3) {
      flag = false;
      this.usernameState = "is-invalid"
    } else {
      this.usernameState = "is-valid"
    }
    if (!/^\d{10,}$/.test(this.signupForm.value.contact)) {
      flag = false;
      this.contactState = "is-invalid"
    } else {
      this.contactState = "is-valid"
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
    const validGenders = ['M', 'F', 'N'];
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

    if(flag){
      this.messege = "all data looks valid. trying to modify and submit"
      this.usersService.createUser(this.signupForm.value).subscribe((data: any) => {
        this.messege="submitted successfully redirecting to log in page"
        this.router.navigateByUrl('/signin')
      });
    } else {
      this.messege = "some data wasnt standand. check again"
    }
  }


  onReset(){
    this.ngOnInit()
  }
  fillDemoData(){
    this.signupForm.setValue({
      username: 'demoUser',
      contact: '1234567890',
      email: 'demo@example.com',
      address: '123 Demo Street, Demo City',
      dob: '2000-01-01',
      gender: 'M',
      password: 'Demo@1234',
      retypePassword: 'Demo@1234'
    });
  }

  hashPassword(pass: string): string {
    const salt = bcrypt.genSaltSync(10); // Generate salt with cost factor of 10
    return bcrypt.hashSync(pass, salt);
  }

  comparePassword(plain:string,hash:string): boolean {
    return bcrypt.compareSync(plain, hash);
  }


}
