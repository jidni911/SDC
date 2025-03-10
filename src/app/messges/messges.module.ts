import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessgesRoutingModule } from './messges-routing.module';
import { MessgesComponent } from './messges/messges.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessgesComponent
  ],
  imports: [
    CommonModule,
    MessgesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MessgesModule { }
