import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleProfileComponent } from './people-profile/people-profile.component';
import { AllPeopleComponent } from './all-people/all-people.component';

const routes: Routes = [
  {path:'', redirectTo:'all',pathMatch:'full'},
  {path:'all', component : AllPeopleComponent},
  {path:'profile/:id', component : PeopleProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
