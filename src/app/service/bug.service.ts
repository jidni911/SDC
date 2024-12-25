import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/bugs';

  getBugs() {
    return this.http.get(this.url);
  }

  getBug(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  createBug(bug: any) {
    return this.http.post(this.url, bug);
  }

  updateBug(id: any, bug: any) {
    return this.http.put(`${this.url}/${id}`, bug);
  }

  deleteBug(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
