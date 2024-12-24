import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardDeveloperComponent } from './components/dashboard-developer/dashboard-developer.component';
import { DashboardSellerComponent } from './components/dashboard-seller/dashboard-seller.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: 'intro', component: IntroComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'resetpass', component: ResetpassComponent},
  {path: 'dashboard', component: DashboardComponent,
    children:[
      {path: 'dashboardadmin', component: DashboardAdminComponent},
      {path: 'dashboarddev', component: DashboardDeveloperComponent},
      {path: 'dashboardseller', component: DashboardSellerComponent},
      {path: 'dashboarduser', component: DashboardUserComponent},
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
