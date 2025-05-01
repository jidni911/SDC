import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { PendingComponent } from './pending/pending.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'add', component: AddComponent},
  {path: 'home', component: HomeComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'orders', component: PendingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseRoutingModule { }
