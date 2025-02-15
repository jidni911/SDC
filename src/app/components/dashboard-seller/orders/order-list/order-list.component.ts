import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import { OrderStatus } from 'src/app/model/orderStatus';
import { environment } from 'src/environment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() status!: OrderStatus;
  @Input() title!: string;

  apiUrl = environment.apiUrl;
  page: any;
  orders: any[] = [];

  constructor(private orderService: OrdersService) {}

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
}
