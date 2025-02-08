import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment';

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
        this.cartService.getCart().subscribe((res: any) => {
          this.cart = res;
          let cardIds: any[] = this.cart.items.map((v: any) => { return v.product.id })

          if (cardIds.includes(Number(this.productId))) {
            this.inCart = true
          }
        })
      }
    })
  }
  addToCart() {
    if (AppComponent.getUser()) {
      this.cartService.addToCart(this.product.id).subscribe((res: any) => {
        this.cart = res;
        let cardIds: any[] = this.cart.items.map((v: any) => { return v.product.id })

        if (cardIds.includes(Number(this.productId))) {
          this.inCart = true
        }
      })
    } else {
      this.router.navigateByUrl('/signin');
    }
  }
  getStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) + (halfStar ? '☆' : '') + '★'.repeat(emptyStars);
  }

  getUrl(url: any) {
    return environment.apiUrl + url
  }

}
