import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { MemoComponent } from './memo/memo.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShopMemoComponent } from './shop-memo/shop-memo.component';
import { AllMemoComponent } from './all-memo/all-memo.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { PosComponent } from './pos/pos.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { SellsHistoryComponent } from './sells-history/sells-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: '', component: ProductHomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'pos', component: PosComponent },
      { path: 'shopMemo', component: ShopMemoComponent },
      { path: 'sellsHistory', component: SellsHistoryComponent },
      { path: 'allMemo', component: AllMemoComponent },
      { path: 'memo/:id', component: MemoComponent },
      { path: 'customerHistory', component: CustomerHistoryComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'allProducts', component: AllProductsComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },
  { path: 'addProduct', component: AddProductsComponent },
  { path: "editProduct/:id", component: ProductCardComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
