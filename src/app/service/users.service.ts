// import { User } from 'dummy datas/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/user';
  getMySelf(): any {
    return this.http.get(this.url + '/me');
  }
  changeProfilePicture(img: File) {
      const formData: FormData = new FormData();
      formData.append('image', img, img.name);  // Ensure 'image' matches @RequestParam name
  
      return this.http.post(this.url + '/changeProfilePicture', formData);
  }
  changeCoverPicture(img: File) {
    const formData: FormData = new FormData();
    formData.append('image', img, img.name);  // Ensure 'image' matches @RequestParam name

    return this.http.post(this.url + '/changeCoverPicture', formData);
}
  getProfilePictureOf(userId: any) {
    return this.http.get(this.url +  '/getProfilePictureOf' + '/' + userId );
  }
  
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

 
  private userSource = new BehaviorSubject<User | null>(null); 
  user = this.userSource.asObservable();

  changeUser(user: User | null) {
    this.userSource.next(user);
  }

}
