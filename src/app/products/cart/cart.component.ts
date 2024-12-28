import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService, private ps: ProductsService) { }
  ngOnInit(): void {

    if (!AppComponent.getUser()) {
      this.router.navigateByUrl('/signin')
    }
    this.ps.getProducts().subscribe((s: any) => {
      this.products = s;

      this.cartService.getCart(AppComponent.getUser().id).subscribe((r: any) => {
        this.cart = r;

      })
    })


  }

  cart: any = null
  products: any[] = []

  getTotal(): number {

    return this.cart.items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  }

  removeItem(product_id: any) {
    this.cart.items = this.cart.items.filter((item: any) => { return item.product_id != product_id });
    // console.log(this.cart);
    this.cartService.updateCart(AppComponent.getUser().id, this.cart).subscribe((r: any) => {
      this.ngOnInit()
    })

  }

  getProductImgUrlById(product_id: any) {
    return this.products.filter((v)=>v.id==product_id)[0].mainImage
  }

}
