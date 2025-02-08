import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }
    private url = environment.apiUrl + '/post';

    getPosts() {
      return this.http.get(this.url);
    }

    getPost(id: any) {
      return this.http.get(`${this.url}/${id}`);
    }

    createPost(product: any) {
      return this.http.post(this.url, product);
    }

    updatePost(id: any, product: any) {
      return this.http.put(`${this.url}/${id}`, product);
    }

}
