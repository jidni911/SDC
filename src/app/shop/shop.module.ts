import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopHomeComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
