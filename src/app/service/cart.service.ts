import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  


  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/carts';

  getCarts() {
    return this.http.get(this.url);
  }

  getCart() {
    return this.http.get(`${this.url}`);
  }

  addToCart(id: any) {
    return this.http.post(`${this.url}/add/${id}`,"");
  }

  setQuantity(itemId: any, quantity: any) {
    return this.http.get(`${this.url}/setQuantity/${itemId}/${quantity}`);
  }

  removeFromCart(id: any) {
    return this.http.delete(`${this.url}/remove`, { params: { productId: id } });
  }
}
