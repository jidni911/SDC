import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/product';

  getProducts( page : number = 0, size : number = 10) {
    return this.http.get(this.url + `?page=${page}&size=${size}`);
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

  searchProducts(productText: string) {
    return this.http.get(`${this.url}/search/${productText}`);
  }
  searchSellerProducts(productText: string) {
    return this.http.get(`${this.url}/sellerSearch/${productText}`);
  }
}
