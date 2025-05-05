import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environment';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  user:User|null = null
  productId: any = null
  product: any = null
  cart: any = null
  inCart = false

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.user.subscribe((res: User|null) => {
      this.user = res
    })
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe((r: any) => {
      this.product = r;
      if (this.user) {
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
    if (this.user) {
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

  canEdit() {
    
    if (this.user) {
      if (Array.from(this.user.roles || []).map((v: any) => { return v.name }).includes('ROLE_ADMIN') || this.product.seller.id == this.user.id) {
        return true
      }
    }
    return false
  }
}
