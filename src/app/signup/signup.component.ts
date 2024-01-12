import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  private token = '';

  constructor(private http: HttpClient, private router: Router) { }


  signup(firstnamein: any,lastnamein: any,emailin:any,passwordin:any): Observable<string> {
    const jsonPayload = {
      firstname: firstnamein,
      lastname: lastnamein,
      email: emailin,
      password: passwordin,
      role: "USER"
    };

    console.log("loadforsignup"+jsonPayload);

   

    return this.http.post<string>('http://localhost:8080/api/v1/auth/register', jsonPayload)
      .pipe(
        tap(token => {
          this.token = token;
          this.router.navigate(['/auth']);
        })
      );

  }
}
