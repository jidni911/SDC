import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
// import { ResetpassComponent } from '../components/resetpass/resetpass.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'resetpass', component: ResetpassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
