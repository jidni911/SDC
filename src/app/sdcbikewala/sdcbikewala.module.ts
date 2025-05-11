import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdcbikewalaRoutingModule } from './sdcbikewala-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FlashCardComponent } from './home/flash-card/flash-card.component';
import { TrendingsComponent } from './home/trendings/trendings.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FlashCardComponent,
    TrendingsComponent
  ],
  imports: [
    CommonModule,
    SdcbikewalaRoutingModule
  ]
})
export class SdcbikewalaModule { }
