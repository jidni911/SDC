import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellsRoutingModule } from './sells-routing.module';
import { CartComponent } from './cart/cart.component';
import { ReviewComponent } from './review/review.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    CartComponent,
    ReviewComponent,
    AllReviewsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SellsRoutingModule
  ]
})
export class SellsModule { }
