import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
// import { SignresetpassComponent } from './signresetpass/signresetpass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetpassComponent } from './resetpass/resetpass.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ResetpassComponent,
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    
  ]

})
export class AuthenticationModule { }
