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

  cart: any

}
