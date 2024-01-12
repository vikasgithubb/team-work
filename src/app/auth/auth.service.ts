import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = '';
  
 
  getAuthToken(): string | null{
    const accesstoken : string = this.cookieService.get("access_token");
  
    console.log('this should be your token header',accesstoken);

    return accesstoken;
  }


  

  setAuthToken(token: string ): void {
    if (token === 'logout' || token !== null) {
      this.cookieService.set("access_token", token);
    } else {
      this.cookieService.set("access_token",'logout');
    }
  }

  get isLoggedIn() { return this.cookieService.get("access_token") !== 'logout';}

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(user: string, password: string): Observable<AuthResponse> {
    const jsonPayload = {
      email: user,
      password: password
    };

    console.log('Sending JSON payload:', jsonPayload);

    return this.http.post<AuthResponse>('http://localhost:8080/api/v1/auth/authenticate', jsonPayload)
      .pipe(
        tap(token => {
          this.cookieService.set("access_token", token.access_token);
        this.cookieService.set("refresh_token", token.refresh_token);
        console.log('Your access token after login success:', token.access_token);
        console.log('Your refresh token after login success:', token.refresh_token);
          this.router.navigate(['/demo']);
        })
      );
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  logout() {
    this.cookieService.set("access_token",'logout');
  }
}
