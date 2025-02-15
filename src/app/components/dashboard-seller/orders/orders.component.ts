import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OrderStatus } from 'src/app/model/orderStatus';
import { OrdersService } from 'src/app/service/orders.service';
import { environment } from 'src/environment';
import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChildren(OrderListComponent) childComponents!: QueryList<OrderListComponent>;
  reloadAllChildren() {
    this.childComponents.forEach(child => child.onReload()); // Reloads all child components
  }
  apiUrl = environment.apiUrl;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {  }
  orderStatus = OrderStatus;

  
}
