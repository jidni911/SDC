import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessgesRoutingModule } from './messges-routing.module';
import { MessgesComponent } from './messges/messges.component';


@NgModule({
  declarations: [
    MessgesComponent
  ],
  imports: [
    CommonModule,
    MessgesRoutingModule
  ]
})
export class MessgesModule { }
