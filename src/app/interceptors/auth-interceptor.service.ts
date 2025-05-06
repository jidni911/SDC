import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from local storage
    let token = localStorage.getItem('token');
    if(token == null) {
      token = sessionStorage.getItem('token');
    };
    // console.log("AuthInterceptor - Token:", token);
    // console.log(token);
    

    if (token) {
      // Clone the request and add the Authorization header
      const cloned = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true',
          // 'bypass-tunnel-reminder': 'true'
        }
      });
      // console.log("Request Headers:", cloned);

      return next.handle(cloned);
    } else {
      const cloned = req.clone({
        setHeaders: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      return next.handle(cloned);
    }

  }
}
