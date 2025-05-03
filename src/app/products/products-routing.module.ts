import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SellerComponent } from './seller/seller.component';
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

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: ProductHomeComponent, children: [

      { path: '', component: DashboardComponent },
      { path: 'pos', component: PosComponent },
      { path: 'sellsHistory', component: SellsHistoryComponent },
      { path: 'customerHistory', component: CustomerHistoryComponent },
      { path: 'allProducts', component: AllProductsComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },
  { path: 'addProduct', component: AddProductsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'seller/:id', component: SellerComponent },
  { path: 'memo/:id', component: MemoComponent },
  { path: 'shopMemo', component: ShopMemoComponent },
  { path: "card/:id", component: ProductCardComponent },
  { path: 'allMemo', component: AllMemoComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
