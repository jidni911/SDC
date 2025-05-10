import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  currentStep: number = 1;
  progress: number = 0;
  emailVerificationCode: string = '';


  signUpObj = {
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    dob: '',
    gender: '',
    password: '',
    retypePassword: ''
  }

  signUpObjState = {
    fullName: null as boolean | null,
    username: null as boolean | null,
    email: null as boolean | null,
    phoneNumber: null as boolean | null,
    address: null as boolean | null,
    dob: null as boolean | null,
    gender: null as boolean | null,
    password: null as boolean | null,
    retypePassword: null as boolean | null
  }

  signUpObjError = {
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    dob: '',
    gender: '',
    password: '',
    retypePassword: ''
  }

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.signupForm = this.fb.group({
    //   fullName: ['', [Validators.required]],
    //   username: ['', [Validators.required, Validators.minLength(5)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
    //   address: ['', [Validators.required, Validators.minLength(10)]],
    //   dob: ['', [Validators.required]],
    //   gender: ['', [Validators.required]],
    //   password: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    //     ]
    //   ],
    //   retypePassword: ['', [Validators.required]]
    // });

    this.updateProgress();
  }


  nextStep(): void {
    if (this.isCurrentStepValid()) {
      this.currentStep++;
      this.updateProgress();
    } else {

    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateProgress();
    }
  }

  updateProgress(): void {
    const totalSteps = 3;
    this.progress = (this.currentStep / totalSteps) * 100;
  }

  isCurrentStepValid(): boolean {

    if (this.currentStep === 1) {
      if (this.signUpObjState.fullName && this.signUpObjState.username && this.signUpObjState.email) {
        return true;
      }

    } else if (this.currentStep === 2) {
      if (this.signUpObjState.phoneNumber && this.signUpObjState.address && this.signUpObjState.dob) {
        return true;
      }
    } else if (this.currentStep === 3) {
      if (this.signUpObjState.gender && this.signUpObjState.password && this.signUpObjState.retypePassword) {
        return true;
      }
    }
    return false;

  }

  fullNameChange() {
    const fullName = this.signUpObj.fullName;
    if (fullName == "") {
      this.signUpObjError.fullName = '';
      this.signUpObjState.fullName = null;
      return
    }
    if (fullName.length >= 3) {
      this.signUpObjError.fullName = '';
      this.signUpObjState.fullName = true;
    } else {
      this.signUpObjError.fullName = 'At least 3 characters';
      this.signUpObjState.fullName = false;
    }

  }

  checkUsernameAvailability() {
    const username = this.signUpObj.username;
    if (username.length >= 5) {
      this.authService.checkUsernameAvailability(username).subscribe((available) => {

        if (!available) {
          this.signUpObjError.username = 'This username is already taken.';
          this.signUpObjState.username = false;
        } else {
          this.signUpObjError.username = '';
          this.signUpObjState.username = true;
        }

      });
    } else if (username == "") {
      this.signUpObjError.username = '';
      this.signUpObjState.username = null;
    } else {
      this.signUpObjError.username = 'At least 5 characters';
      this.signUpObjState.username = false;
    }
  }

  checkEmailAvailability() {
    const email = this.signUpObj.email;
    if (email == "") {
      this.signUpObjError.email = '';
      this.signUpObjState.email = null;
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
      this.authService.checkEmailAvailability(email).subscribe((available) => {
        if (!available) {
          this.signUpObjError.email = 'This email is already taken.';
          this.signUpObjState.email = false;
        } else {
          this.signUpObjError.email = '';
          this.signUpObjState.email = true;
        }
      });
    } else {
      this.signUpObjError.email = 'Invalid email';
      this.signUpObjState.email = false;
    }
  }

  checkPhoneNumberAvailability() {
    const phoneNumber = this.signUpObj.phoneNumber;
    if (phoneNumber == "") {
      this.signUpObjError.phoneNumber = '';
      this.signUpObjState.phoneNumber = null;
      return
    }
    if (phoneNumber.length >= 11 && phoneNumber.length <= 14) {
      this.signUpObjError.phoneNumber = '';
      this.signUpObjState.phoneNumber = true;
    } else {
      this.signUpObjError.phoneNumber = 'Valid phone number required.';
      this.signUpObjState.phoneNumber = false;
    }
  }

  checkAddressAvailability() {
    const address = this.signUpObj.address;
    if (address == "") {
      this.signUpObjError.address = '';
      this.signUpObjState.address = null;
      return
    }
    if (address.length >= 10) {
      this.signUpObjError.address = '';
      this.signUpObjState.address = true;
    } else {
      this.signUpObjError.address = 'Minimum 10 characters.';
      this.signUpObjState.address = false;
    }
  }

  checkDobAvailability() {
    const dob = this.signUpObj.dob;
    if (dob == "") {
      this.signUpObjError.dob = '';
      this.signUpObjState.dob = null;
      return
    }
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age >= 10) {
      this.signUpObjError.dob = '';
      this.signUpObjState.dob = true;
    } else {
      this.signUpObjError.dob = 'You must be at least 10 years old.';
      this.signUpObjState.dob = false;
    }
  }

  checkGenderAvailability() {
    const gender = this.signUpObj.gender;
    if (gender == "") {
      this.signUpObjError.gender = '';
      this.signUpObjState.gender = null;
      return
    }
    if (gender) {
      this.signUpObjError.gender = '';
      this.signUpObjState.gender = true;
    } else {
      this.signUpObjError.gender = 'Please select a gender.';
      this.signUpObjState.gender = false;
    }
  }

  checkPasswordAvailability() {
    const password = this.signUpObj.password;
    if (password == "") {
      this.signUpObjError.password = '';
      this.signUpObjState.password = null;
      return
    }
    if (password.length >= 8) {
      this.signUpObjError.password = '';
      this.signUpObjState.password = true;
    } else {
      this.signUpObjError.password = 'Minimum 8 characters.';
      this.signUpObjState.password = false;
    }
  }

  checkRetypePasswordAvailability() {
    const password = this.signUpObj.password;
    const retypePassword = this.signUpObj.retypePassword;
    if (retypePassword == "") {
      this.signUpObjError.retypePassword = '';
      this.signUpObjState.retypePassword = null;
      return
    }
    if (password === retypePassword) {
      this.signUpObjError.retypePassword = '';
      this.signUpObjState.retypePassword = true;
    } else {
      this.signUpObjError.retypePassword = 'Passwords do not match.';
      this.signUpObjState.retypePassword = false;
    }
  }

  onSubmit(): void {
    if (!this.isCurrentStepValid()) {
      return;
    }

    this.authService.signup(this.signUpObj).subscribe((v:boolean) => {
      if (v) {
        this.currentStep = 4;
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  }
  verifyEmail(){
    this.authService.verifyEmail(this.signUpObj.email, this.emailVerificationCode.trim()).subscribe((v:boolean) => {
      if (v) {
        this.currentStep = 1;
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  }
}

