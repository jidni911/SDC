import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemoComponent } from './memo/memo.component';
import { ShopMemoComponent } from './shop-memo/shop-memo.component';
import { AllMemoComponent } from './all-memo/all-memo.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { PosComponent } from './pos/pos.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { SellsHistoryComponent } from './sells-history/sells-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    AddProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    MemoComponent,
    ShopMemoComponent,
    AllMemoComponent,
    ProductHomeComponent,
    PosComponent,
    CustomerHistoryComponent,
    SellsHistoryComponent,
    DashboardComponent,
    OrdersComponent,
    OrderListComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
