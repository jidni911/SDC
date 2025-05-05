import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  apiUrl = environment.apiUrl;
  user :User | null = null


  //Form Values
  name = this.user?.fullName;
  phoneNumber = this.user?.phoneNumber
  userName = this.user?.username;
  email = this.user?.email;
  phone = this.user?.phoneNumber;
  address = this.user?.address;
  paymentMethod = 'bkash'
  paymentNumber = this.user?.phoneNumber
  transactionId = 'abcyzx'
  promoCode = ''

  //Form Values End
  constructor(
    private cs: CartService,
    private orderS: OrdersService,
    private router: Router,
    private usersService: UsersService
  ) { }
  list: any[] = []
  cartItems: any[] = []
  ngOnInit(): void {
    this.usersService.user.subscribe((res: User | null) => {
      this.user = res
    })
    this.router.url.split('?')[1].split('&').forEach((v) => {
      if (v.split('=')[0] === 'ids') {
        this.list = v.split('=')[1].split(',');
      }
    })

    this.cs.getCartItems(this.list).subscribe((r: any) => {
      this.cartItems = r;

    })


  }
  getTotal(): number {

    return this.cartItems.reduce((acc: number, item: any) => acc + ((item.product.discountPrice || item.product.price) * item.quantity), 0);

  }

  onSubmit() {
    let orderData = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      userName: this.userName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      paymentMethod: this.paymentMethod,
      paymentNumber: this.paymentNumber,
      transactionId: this.transactionId,
      orderItemIds: this.list.map(v => +v)
    }

    this.orderS.createOrder(orderData).subscribe((r: any) => {
      const blob = new Blob([r], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();
      window.URL.revokeObjectURL(url);
      this.router.navigateByUrl('/products');//TODO navigate to order page
    })

  }
}

