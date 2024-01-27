import { Injectable } from '@angular/core';
import { Userdetails } from './demo/searchbar/userdetails';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Teamdata } from './teamdata';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { 
    
  }

  private apiUrl = 'http://localhost:8080/api/v1/users/allusers';


  private teamapiurl = 'http://localhost:8080/api/v1/teams/teamup';


    
   

  
  jsonData: Userdetails[] = [];
 


  fetchData(): Observable<Userdetails[]> {
    if (this.jsonData.length > 0) {
      // If data is already available, return it as an observable
      return of(this.jsonData);
    } else {
      // If data is not available, make an HTTP request and cache the result
      return this.http.get<Userdetails[]>(this.apiUrl)
        .pipe(
          tap(data => this.jsonData = data),  // Cache the data
          catchError(error => {
            console.error('Error fetching data:', error);
            return of([]);  // Return an empty array in case of an error
          })
        );
    }
  }


  fetchteamdata(): Observable<Teamdata>{


    return this.http.get<Teamdata>(this.teamapiurl);
  }


}
