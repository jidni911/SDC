import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerComponent } from './seller/seller.component';
import { MemoComponent } from './memo/memo.component';
import { ShopMemoComponent } from './shop-memo/shop-memo.component';
import { AllMemoComponent } from './all-memo/all-memo.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    AddProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    SellerComponent,
    MemoComponent,
    ShopMemoComponent,
    AllMemoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
