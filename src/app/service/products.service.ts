import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/product';

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  createProduct(product: any) {
    return this.http.post(this.url, product);
  }

  updateProduct(id: any, product: any) {
    return this.http.put(`${this.url}/${id}`, product);
  }



}
