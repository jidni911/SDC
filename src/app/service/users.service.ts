import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getProfilePictureOf(userId: any) {
    return this.http.get(this.url +  '/getProfilePictureOf' + '/' + userId );
  }
  
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/user';
  
  getUsers() {
    return this.http.get(this.url);
  }
  
  getUser(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  
  

  updateUser(user: any) {
    return this.http.put(this.url + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

 

}
