import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {
  url = environment.apiUrl + '/messege';
  constructor(private http: HttpClient) { }

  getMesseges(page: number = 0, size: number = 20) {
    return this.http.get(this.url+`?page=${page}&size=${size}`);
  }
}
