import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Order } from '../model/jersey';

@Injectable({
  providedIn: 'root'
})
export class JerseyService {




  baseUrl = environment.apiUrl + '/jersey';

  constructor(private http: HttpClient) { }


  getJersey(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  getJerseys() {
    return this.http.get(this.baseUrl);
  }

  addJersey(jersey: any) {
    return this.http.post(this.baseUrl, jersey);
  }


  placeOrder(currentOrder: Order) {
    return this.http.post(this.baseUrl + '/order', currentOrder);
  }

  getOrders() {
    return this.http.get(this.baseUrl + '/order');
  }

  makePayment(currentOrderToPay: Order) {
    return this.http.post(this.baseUrl + '/payment', currentOrderToPay);
  }
}
