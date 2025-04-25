import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl + '/intro'
  getHome() {
    return this.http.get(this.baseUrl+'/home')
  }
  updateHome(value: any) {
    return this.http.post(this.baseUrl+'Update', value)
  }
  addSpecial(formData: FormData) {
    return this.http.post(this.baseUrl + 'AddSpecial', formData);
  }

}
