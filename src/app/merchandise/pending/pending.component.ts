import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Order } from '../model/jersey';
import { JerseyService } from '../services/jersey.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  constructor(private jerseyService: JerseyService) { }
  ngOnInit(): void {
    this.jerseyService.getOrders().subscribe((v: any) => {
      this.orders = v;
      console.log(v);
      
    })
  }

  currentOrderToVerify: Order | null = null;
  verifiedOrders: Order[] = [];


  orders: Order[] = [];

  calculateTotal(order: Order) {
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + order.deliveryCharge;
  }
  verifyOrder(order: Order) {
    this.verifiedOrders.push(order);
    this.orders = this.orders.filter(o => o !== order);
    this.showToast('Order verified! ✅')
  }

  confirmVerification() {
    if (this.currentOrderToVerify) {
      this.verifiedOrders.push(this.currentOrderToVerify);
      this.orders = this.orders.filter(o => o !== this.currentOrderToVerify);
      this.currentOrderToVerify = null;
      this.showToast('Order verified successfully! ✅');
      const modalElement = document.getElementById('confirmModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal?.hide();
      }
    }
  }

  openConfirmModal(order: any) {
    this.currentOrderToVerify = order;
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  toastMessage: string | null = null;

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // Hide after 3 seconds
  }

  // currentOrderToVerify: any = null;
}
