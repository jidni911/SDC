// temp-service.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

export interface TempFile {
  name: string;
  size: number;
  type: string;
  important: boolean;
  createdAt: string;
  selected?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {
  private api = environment.apiUrl + '/tempfile';

  constructor(private http: HttpClient) { }



  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<boolean>(`${this.api}`, formData, { observe: 'events', reportProgress: true });
  }

  getAllFiles() {
    return this.http.get<TempFile[]>(this.api);
  }

  deleteFile(filename: string) {
    return this.http.delete(`${this.api}/${filename}`);
  }

  markImportant(filename: string) {
    return this.http.post(`${this.api}/mark-important/${filename}`, {});
  }

  markUnimportant(filename: string) {
    return this.http.post(`${this.api}/mark-unimportant/${filename}`, {});
  }

  verifyPassword(password: string) {
    return this.http.post<{ verified: boolean }>(`${this.api}/check-password`, { password });
  }

}
