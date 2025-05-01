import { freePickupPointAddresses, sizes } from './../model/jersey';
import { Component, OnInit } from '@angular/core';
import { Jersey, Order, OrderItem, Size } from '../model/jersey';
import { ActivatedRoute } from '@angular/router';
import { JerseyService } from '../services/jersey.service';
import { environment } from 'src/environment';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(private route: ActivatedRoute, private jerseyService: JerseyService) { }
  apiUrl = environment.apiUrl
  id: number | null = null;
  jersey: Jersey | null = null;
  imageUrl: string | null = null;

  currentOrder: Order = { name: '', phone: '', items: [] as OrderItem[], deliveryCharge: 0, address: 'Dhaka' };
  deliveryOption: string = "Free Pick Up Point";
  chest: number = 0;
  length: number = 0;

  // orders: Order[] = [];

  toastMessage: string | null = null;

  // jerseys = []
  sizes = sizes
  freePickupPointAddresses = freePickupPointAddresses


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.jerseyService.getJersey(this.id).subscribe((v: any) => {
        this.jersey = v;
        this.imageUrl =this.apiUrl+ v.images[0].url;
      })
    }
  }

  addOrderItem(size: Size, sleeve: string) {
    let price = 0;
    if (size.name.toLowerCase().startsWith('baby')) {
      if (sleeve.toLowerCase() == 'half') {
        price = this.jersey!.babyHalfSleevePrice;
      } else {
        price = this.jersey!.babyFullSleevePrice;
      }
    } else {
      if (size.name.toLowerCase().startsWith('custom')) {
        size.chest = this.chest;
        size.length = this.length;
        if (sleeve.toLowerCase() == 'half') {
          price = this.jersey!.customHalfSleevePrice;
        } else {
          price = this.jersey!.customFullSleevePrice;
        }
      } else {
        if (sleeve.toLowerCase() == 'half') {
          price = this.jersey!.halfSleevePrice;
        } else {
          price = this.jersey!.fullSleevePrice;
        }
      }
    }

    let orderItem: OrderItem = {
      jersey: this.jersey!,
      size: size,
      sleeve: sleeve,
      quantity: 1,
      price: price
    };

    if (this.currentOrder.items.some(item => item.size.name == orderItem.size.name && item.sleeve == orderItem.sleeve)) {
      this.currentOrder.items.find(item => item.size.name == orderItem.size.name && item.sleeve == orderItem.sleeve)!.quantity++;
      return;
    }

    this.currentOrder.items.push(orderItem);
  }

  removeOrderItem(orderItem: OrderItem) {
    orderItem.quantity--;
    if (orderItem.quantity == 0) {

      this.currentOrder.items = this.currentOrder.items.filter(item => item !== orderItem);
    }
  }
  calculateTotal(order: Order) {
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + order.deliveryCharge;
  }

  submitOrder() {
    this.jerseyService.placeOrder(this.currentOrder).subscribe((v: any) => {
      console.log(v);
      this.showToast('Order placed successfully! 🎉');
      this.currentOrder = { name: '', phone: '', items: [] as OrderItem[], deliveryCharge: 0, address: 'Dhaka' };
      
    })
  }

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // Hide after 3 seconds
  }
}
