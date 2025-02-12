import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentUrl = environment.apiUrl + '/comment';

  constructor(private http: HttpClient) { }

  getAllCommentsByPostId(postId: string): Observable<any> {
    return this.http.get<any>(`${this.commentUrl}/post/${postId}`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  addComment(comment: any) {
    return this.http.post(this.commentUrl, comment);
  }

  updateComment(commentId: string, comment: any): Observable<any> {
    return this.http.put<any>(`${this.commentUrl}/${commentId}`, comment)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http.delete<any>(`${this.commentUrl}/${commentId}`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

}

