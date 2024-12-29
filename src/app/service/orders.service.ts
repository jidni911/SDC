import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


    constructor(private http: HttpClient) { }
    private url = 'http://localhost:3000/orders';

    getOrders() {
      return this.http.get(this.url);
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
