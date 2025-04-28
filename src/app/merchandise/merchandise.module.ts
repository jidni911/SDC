import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
    FormsModule
  ]
})
export class MerchandiseModule { }
