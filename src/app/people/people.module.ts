import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { PeopleProfileComponent } from './people-profile/people-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AllPeopleComponent,
    PeopleCardComponent,
    PeopleProfileComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
