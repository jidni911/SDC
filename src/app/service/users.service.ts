import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
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
  
  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/user';
  
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
