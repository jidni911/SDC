import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'allProducts', pathMatch: 'full' },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'addProduct', component: AddProductsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
