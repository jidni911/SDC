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

const routes: Routes = [
  { path: '', redirectTo: 'allProducts', pathMatch: 'full' },
  { path: 'allProducts', component: AllProductsComponent },
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
