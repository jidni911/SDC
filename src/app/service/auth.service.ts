import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';
  
  constructor(private http: HttpClient) {}
  
  signup(value: any) {
    return this.http.post(`${this.apiUrl}/signup`, value);
  }
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    // localStorage.removeItem('token');
    return this.http.post(`${this.apiUrl}/signout`, {});
  }

  // isLoggedIn() {
  //   const token = this.getToken();
  //   return token && !this.jwtHelper.isTokenExpired(token);
  // }

  checkEmailAvailability(email: any) {
    return this.http.get(this.apiUrl + '/checkEmailAvailability?email=' + email);
  }
  checkUsernameAvailability(username: any) {
    return this.http.get(this.apiUrl + '/checkUsernameAvailability?username=' + username);
  }
}
