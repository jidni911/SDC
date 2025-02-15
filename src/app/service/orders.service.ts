import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { OrderStatus } from '../model/orderStatus';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
    


    constructor(private http: HttpClient) { }
    private url = environment.apiUrl + '/order';

    getOrders() {
      return this.http.get(this.url);
    }

    getOrdersForSeller( status: OrderStatus, page: number = 0, size: number=10) {
      return this.http.get(`${this.url}/seller?page=${page}&size=${size}&status=${status}`);
    }

    getOrder(id: any) {
      return this.http.get(`${this.url}/${id}`);
    }

    createOrder(order: any) {
      return this.http.post(this.url, order);
    }

    updateOrder(id: any, order: any) {
      return this.http.put(`${this.url}/${id}`, order);
    }

}
