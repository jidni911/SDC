import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/model/orderStatus';
import { OrdersService } from 'src/app/service/orders.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  apiUrl = environment.apiUrl;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {  }
  orderStatus = OrderStatus;
}
