import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 constructor(private http: HttpClient) { }
   private url = 'http://localhost:3000/carts';

   getCarts() {
     return this.http.get(this.url);
   }

   getCart(id: any) {
     return this.http.get(`${this.url}/${id}`);
   }

   createCart(cart: any) {
     return this.http.post(this.url, cart);
   }

   updateCart(id: any, cart: any) {
     return this.http.put(`${this.url}/${id}`, cart);
   }

   deleteCart(id: any) {
     return this.http.delete(`${this.url}/${id}`);
   }
 }
