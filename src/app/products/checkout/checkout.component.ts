import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  constructor(
    private cs : CartService,
     private orderS: OrdersService,
private router: Router
    ){}
  ngOnInit(): void {
    this.cs.getCart().subscribe((s:any)=>{
      this.cart = s;
    })
  }
  cart : any = null
  getTotal(): number {

    return this.cart.items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  }

  onSubmit(){
    // "product_id": "prod003",
    //       "name": "Bike Pump",
    //       "quantity": 1,
    //       "price": 25.99
    //cid, pid ,price, quantity, date, status
    this.cart.items.forEach((i:any) => {
      this.orderS.createOrder({cid: AppComponent.getUser().id,pid:i.product_id,price:i.price,quantity:i.quantity,date:Date.now(),status:'pending'}).subscribe((s:any)=>{

      })
    });

    // setTimeout(() => {
    //   this.cart.items = [];
    //   this.cs.updateCart(this.cart.id,this.cart).subscribe();
    //   this.router.navigateByUrl('/products/cart');
    // }, 500);

  }
}

