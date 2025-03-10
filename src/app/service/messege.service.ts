import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {
  url = environment.apiUrl + '/messege';
  constructor(private http: HttpClient) { }

  getMesseges(chatId:any,page: number = 0, size: number = 100) {
    return this.http.get(this.url+`/chat/${chatId}?page=${page}&size=${size}`);
  }

  getChats(page: number = 0, size: number = 20) {
    return this.http.get(this.url+`?page=${page}&size=${size}`);
  }

  sendMessage(messege: any) {
    return this.http.post(this.url, messege);
  }

  getSuggestions(query: string,page: number = 0, size: number = 20) {
    return this.http.get(this.url+`/newChatSuggestions/${query}?page=${page}&size=${size}`);
  }

  createChat(chatName: string, users: any[]) {
    return this.http.get(this.url+`/newChat?name=${chatName}&ids=${users}`);
  }
}
