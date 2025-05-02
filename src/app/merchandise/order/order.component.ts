import { freePickupPointAddresses, sizes } from './../model/jersey';
import { Component, OnInit } from '@angular/core';
import { Jersey, Order, OrderItem, Size } from '../model/jersey';
import { ActivatedRoute } from '@angular/router';
import { JerseyService } from '../services/jersey.service';
import { environment } from 'src/environment';
import { AppComponent } from 'src/app/app.component';
import * as bootstrap from 'bootstrap';


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

  currentOrder: Order = {
    name: '',
    phone: '',
    items: [] as OrderItem[],
    deliveryCharge: 0,
    deliveryOption: 'Free Pick Up Point',
    address: '',
    paid: false,
    paymentMethod: '',
    accountNumber: '',
    trxId: '',
    createdAt: '',
    updatedAt: ''
  };
  // deliveryOption: string = "Free Pick Up Point";
  chest: number = 0;
  length: number = 0;

  // orders: Order[] = [];



  // jerseys = []
  sizes = sizes
  freePickupPointAddresses = freePickupPointAddresses


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.jerseyService.getJersey(this.id).subscribe((v: any) => {
        this.jersey = v;
        this.imageUrl = this.apiUrl + v.images[0].url;
      })
    }
    if (AppComponent.getUser() == null) {
      this.currentOrder.name = '';
      this.currentOrder.phone = '';
      if (window.confirm('Please login first! 🎉')) {
        window.location.href = '/signin';
      }
    } else {
      this.currentOrder.name = AppComponent.getUser().fullName;
      this.currentOrder.phone = AppComponent.getUser().phoneNumber;
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
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), order.deliveryCharge);
  }

  submitOrder() {
    if (AppComponent.getUser() == null) {
      this.showToast('Please login first! 🎉', 'warning');
      return
    }
    if (this.currentOrder.items.length == 0) {
      this.showToast('Please select at least one item! 🎉', 'warning');
      return
    }
    if (this.currentOrder.address == '') {
      this.showToast('Please enter your address! 🎉', 'warning');
      return
    }
    if (this.currentOrder.name.trim() == '') {
      this.showToast('Please enter your name! 🎉', 'warning');
      return
    }
    if (this.currentOrder.phone.trim() == '') {
      this.showToast('Please enter your phone! 🎉', 'warning');
      return
    }
    this.currentOrder.address = this.currentOrder.address.trim();
    this.jerseyService.placeOrder(this.currentOrder).subscribe((v: any) => {
      console.log(v);
      if (v == null) {
        this.showToast('Some thing went wrong! Contact the developer!', 'warning');
      } else {
        this.showToast('Order placed successfully! 🎉', 'success');
        this.currentOrder = {
          name: '',
          phone: '',
          items: [] as OrderItem[],
          deliveryCharge: 0,
          deliveryOption: 'Free Pick Up Point',
          address: '',
          paid: false,
          paymentMethod: '',
          accountNumber: '',
          trxId: '',
          createdAt: '',
          updatedAt: ''
        };
      }
    })
  }

  toastMessage: string | null = null;
  toastType: string = 'success';
  showToast(message: string, type: string) {
    this.toastType = type;
    this.toastMessage = message;

    const toast = new bootstrap.Toast(document.getElementById('liveToast')!);
    toast.show();
    setTimeout(() => {
      toast.hide();
      this.toastMessage = null;
    }, 3000); // Hide after 3 seconds
  }
}
