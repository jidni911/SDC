import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) { }
  ngOnInit(): void {

    if (!AppComponent.getUser()) {
      this.router.navigateByUrl('/signin')
    }
    this.cartService.getCart(AppComponent.getUser().id).subscribe((r: any) => {
      this.cart = r;

    })


  }

  cart: any = null

  getTotal(): number {

    return this.cart.items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  }

  removeItem(product_id: any) {
    this.cart.items = this.cart.items.filter((item:any) => {return item.product_id!=product_id});
    // console.log(this.cart);
    this.cartService.updateCart(AppComponent.getUser().id,this.cart).subscribe((r:any)=>{
      this.ngOnInit()
    })

  }

  getProductImgUrlById(product_id: any){
    return "https://via.placeholder.com/600x400"
  }

}
