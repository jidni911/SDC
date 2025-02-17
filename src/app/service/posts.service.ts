import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


    constructor(private http: HttpClient) { }
    private url = environment.apiUrl + '/post';

    getPosts(page: number = 0, size: number = 10) {
      return this.http.get(this.url + `?page=${page}&size=${size}`);
    }

    getPost(id: any) {
      return this.http.get(`${this.url}/${id}`);
    }

    createPost(post: any) {
      return this.http.post(this.url, post);
    }

    updatePost(id: any, post: any) {
      return this.http.put(`${this.url}/${id}`, post);
    }

    likePost(postId: any) {
      return this.http.post(`${this.url}/like/${postId}`, "");

      //TODO watch backend
    }
}
