import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import { OrderStatus } from 'src/app/model/orderStatus';
import { environment } from 'src/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() status!: OrderStatus;
  @Input() title!: string;

  @Output() reloadParent = new EventEmitter<void>(); // Notify parent


  onReload(): void {
    this.loadOrders(0);
  }


  apiUrl = environment.apiUrl;
  page: any;
  orders: any[] = [];

  constructor(private orderService: OrdersService, protected router: Router) {}

  ngOnInit(): void {
    this.loadOrders(0);
  }

  loadOrders(pageNumber: number): void {
    this.orderService.getOrdersForSeller(this.status, pageNumber).subscribe((response: any) => {
      this.page = response;
      this.orders = response.content;
    });
  }

  onPageChange(pageNumber: number): void {
    this.loadOrders(pageNumber);
  }
  onConfirm(id: any): void {
    if(this.status === OrderStatus.PROCESSING) {
      this.router.navigate([`/products/memo/${id}`]);
    } else{
      this.orderService.updateOrder(id,this.status, true).subscribe((r: any) => {
        if(r.result) {
          this.loadOrders(0);
          this.reloadParent.emit(); // Notify parent
        } else {
          window.alert(r.message);
        }
      });
    }

  }
  onReject(id: any): void {
    this.orderService.updateOrder(id, this.status, false).subscribe((r: any) => {
      if(r.result) {
        this.loadOrders(0);
        this.reloadParent.emit(); // Notify parent
      } else {
        window.alert(r.message);
      }
    });
  }
}
