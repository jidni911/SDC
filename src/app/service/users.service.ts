import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  createUser(user: any) {
    let modifiedUser = {
      username: user.username,
      contact: user.contact,
      email: user.email,
      address: user.address,
      dob: user.dob,
      gender: user.gender,
      password: this.hashPassword(user.password),
      role: 'user',
      uniqueName: user.username.toLowerCase().replace(/\s+/g, '_') + '@' + user.contact.slice(-4)

    }
    return this.http.post(this.url, modifiedUser);
  }

  updateUser(user: any) {
    return this.http.put(this.url + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.url + '/' + id);
  }



  hashPassword(pass: string): string {
    const salt = bcrypt.genSaltSync(10); // Generate salt with cost factor of 10
    return bcrypt.hashSync(pass, salt);
  }

  comparePassword(plain: string, hash: string): boolean {
    return bcrypt.compareSync(plain, hash);
  }

  signIn(data: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getUsers().subscribe(
        (users: any) => {
          const user = users.find((u: any) => u.email === data.email);
          if (user && this.comparePassword(data.password, user.password)) {
            if (data.rememberMe) {
              localStorage.setItem('user', JSON.stringify(user));
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
            }
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => reject(error)
      );
    });
  }


}
