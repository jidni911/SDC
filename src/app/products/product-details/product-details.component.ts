import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any = null
  product: any = null
  cart: any = null
  inCart = false

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe((r: any) => {
      this.product = r;
      if (AppComponent.getUser()) {
        this.cartService.getCart(AppComponent.getUser().id).subscribe((res: any) => {
          this.cart = res;
          let cardIds: any[] = this.cart.items.map((v: any) => { return v.product_id })
          if (cardIds.includes(this.productId)) {
            this.inCart = true
          }
        })
      }
    })
  }
  addToCart() {
    if (AppComponent.getUser()) {
      const userId = AppComponent.getUser().id;
      this.cart.items.push({
        product_id: this.productId,
        name: this.product.name,
        quantity: 1,
        price: this.product.price
      })
      this.cartService.updateCart(userId, this.cart).subscribe((res: any) => {
        this.cart = res;
        this.ngOnInit()
      });
    } else {
      this.router.navigateByUrl('/signin');
    }
  }

}
