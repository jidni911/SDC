import { User } from './../model/user';
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
  sendOtpToEmail(email: any) {
    return this.http.get(this.apiUrl + '/sendOtpToEmail?email=' + email);
  }

  signup(value: any) {
    return this.http.post<boolean>(`${this.apiUrl}/signup`, value);
  }
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    return this.http.post(`${this.apiUrl}/signout`, {});
  }


  checkEmailAvailability(email: any) {
    return this.http.get(this.apiUrl + '/checkEmailAvailability?email=' + email);
  }
  checkUsernameAvailability(username: any) {
    return this.http.get(this.apiUrl + '/checkUsernameAvailability?username=' + username);
  }

  getUserByIdentifier(identifier: string) : Observable<User> {
    return this.http.get<User>(this.apiUrl + '/getUserByIdentifier?identifier=' + identifier);
  }

  verifyEmail(email:string,otp: any) {
    const value = {
      email: email,
      otp: otp
    };
    return this.http.post<boolean>(`${this.apiUrl}/verifyEmail`, value);
  }

  forgotPassword(username: any) {
    return this.http.get(this.apiUrl + '/forgotPassword?username=' + username, { responseType: 'text' });
  }

  resetPassword(value: any) {
    return this.http.post<boolean>(`${this.apiUrl}/resetPassword`, value);
  }
 
}
