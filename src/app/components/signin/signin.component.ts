import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from './../../service/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  ngOnInit(): void {
    this.signinForm.setValue({
      email:'',
      password:''
    })
  }
  constructor(private userService:UsersService){}
  signinForm : FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  onSubmit(){
    // if (this.signinForm.valid) {
    //   this.userService.signIn(this.signinForm.value).subscribe(
    //     response => {
    //       console.log('Sign in successful', response);
    //       // Handle successful sign in, e.g., navigate to another page
    //     },
    //     error => {
    //       console.error('Sign in failed', error);
    //       // Handle sign in error, e.g., show error message
    //     }
    //   );
    // } else {
    //   console.error('Form is invalid');
    //   // Handle form validation errors
    // }
  }

}
