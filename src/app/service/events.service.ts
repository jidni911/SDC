import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
    private url = environment.apiUrl + '/event';

    getEvents() {
      return this.http.get(this.url);
    }

    getEvent(id: any) {
      return this.http.get(`${this.url}/${id}`);
    }

    createEvent(event: any) {
      return this.http.post(this.url, event);
    }

    updateEvent(id: any, event: any) {
      return this.http.put(`${this.url}/${id}`, event);
    }
}
