import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private rolesUrl = 'http://localhost:3000/role';

  constructor(private http: HttpClient) { }

  getUsersByRoleName(roleName: string, page: number, size: number) {
    return this.http.get(`${this.rolesUrl}/${roleName}?page=${page}&size=${size}`);
  }

  getRolesOfUser(id: number) {
    return this.http.get(`${this.rolesUrl}/roleOf/${id}`);
  }

  assignRole(roleName: string, id: number) {
    return this.http.post(`${this.rolesUrl}/assign/${roleName}/to/${id}`, null);
  }

  removeRole(roleName: string, id: number) {
    return this.http.post(`${this.rolesUrl}/remove/${roleName}/from/${id}`, null);
  }

}

