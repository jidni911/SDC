import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { environment } from 'src/environment';

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

      this.cartService.getCart().subscribe((r: any) => {
        this.cart = r;
      })
    })
  }

  cart: any = null
  products: any[] = []

  getTotal(): number {
    return this.cart.items.reduce((acc: number, item: any) => acc + (item.product.discountPrice * item.quantity), 0);
  }

  removeItem(productId: any) {
    this.cartService.removeFromCart(productId).subscribe((r: any) => {
      this.ngOnInit()
    })

  }

  getUrlof(url: any) {
    return environment.apiUrl + url
  }

  increaseQuantity(item: any) {
    if(item.product.quantity<=item.quantity){
      return
    }
    this.setQuantity(item.id, item.quantity + 1)
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      this.setQuantity(item.id, item.quantity - 1)
    }
  }

  setQuantity(itemId: any, quantity: any) {
    this.cartService.setQuantity(itemId,quantity).subscribe((r:any)=>{
      this.cart = r
    })
  }

  removeSelectedItems() {
    throw new Error('Method not implemented.');
    }
    

  checkout() {

    //TODO work from here
    this.router.navigateByUrl('/products/checkout')
  }
}
