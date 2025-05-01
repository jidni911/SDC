import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { PendingComponent } from './pending/pending.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
    OrderComponent,
    PendingComponent,
    ConfirmedComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MerchandiseModule { }
