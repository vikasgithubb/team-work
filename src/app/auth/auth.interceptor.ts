import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   

   const authtoken:string | null = this.authService.getAuthToken();

    if (authtoken !== null || authtoken === "logout") {
      // Clone the request and add the Authorization header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authtoken}`
        }
      });
    }

    return next.handle(request);
  }
}
