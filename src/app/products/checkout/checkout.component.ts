import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  apiUrl = environment.apiUrl;
  user :any = AppComponent.getUser()


  //Form Values
  name = this.user.fullName;
  phoneNumber = this.user.phoneNumber
  userName = this.user.username;
  email = this.user.email;
  phone = this.user.phone;
  address = this.user.address;
  paymentMethod = 'bkash'
  paymentNumber = this.user.phoneNumber
  transactionId = 'abcyzx'
  promoCode = ''

  //Form Values End
  constructor(
    private cs: CartService,
    private orderS: OrdersService,
    private router: Router
  ) { }
  list: any[] = []
  cartItems: any[] = []
  ngOnInit(): void {

    this.router.url.split('?')[1].split('&').forEach((v) => {
      if (v.split('=')[0] === 'ids') {
        this.list = v.split('=')[1].split(',');
      }
    })

    this.cs.getCartItems(this.list).subscribe((r: any) => {
      this.cartItems = r;

    })


    console.log(this.user);


  }
  getTotal(): number {

    return this.cartItems.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  }

  onSubmit() {
    // "product_id": "prod003",
    //       "name": "Bike Pump",
    //       "quantity": 1,
    //       "price": 25.99
    //cid, pid ,price, quantity, date, status
    this.cartItems.forEach((i: any) => {
      this.orderS.createOrder({ cid: AppComponent.getUser().id, pid: i.product_id, price: i.price, quantity: i.quantity, date: Date.now(), status: 'pending' }).subscribe((s: any) => {

      })
    });

    // setTimeout(() => {
    //   this.cart.items = [];
    //   this.cs.updateCart(this.cart.id,this.cart).subscribe();
    //   this.router.navigateByUrl('/products/cart');
    // }, 500);

  }
}

