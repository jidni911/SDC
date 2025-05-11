import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './intro/contact/contact.component';
import { MerchandiseModule } from '../merchandise/merchandise.module';


@NgModule({
  declarations: [
    IntroComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    MerchandiseModule
  ]
})
export class IntroModule { }
