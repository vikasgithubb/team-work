import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = '';
  get isLoggedIn() { return this.token !== ''; }

  constructor(private http: HttpClient, private router: Router) { }

  login(user: String, password: String): Observable<string> {
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username: user,
      password: password
    }).pipe(tap(token => {this.token = token;
      this.router.navigate(['/demo']);}));
  }

  logout() {
    this.token = '';
  }
}
