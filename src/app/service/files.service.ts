import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private apiURL = 'http://localhost:3000/file'; // Update with your actual API URL
  
  getImageUrl(imageId: number) {
    
  }
  constructor(private httpClient: HttpClient) {}

  uploadImage(img: File) {
    const formData: FormData = new FormData();
    formData.append('image', img, img.name);  // Ensure 'image' matches @RequestParam name
  
    return this.httpClient.post<{ id: number, url: string }>(this.apiURL + '/uploadImage', formData).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}