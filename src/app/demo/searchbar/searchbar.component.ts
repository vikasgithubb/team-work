import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{
 

  constructor(private http: HttpClient) {
    this.fetchData();
   }

  private apiUrl = 'http://localhost:8080/api/v1/users/allusers';

    searchTerm: string = '';
    jsonData: Userdetails[] = [];
    searchResults: Userdetails[] = [];
  

    fetchData() {
      this.http.get<Userdetails[]>(this.apiUrl).subscribe(data => {
        this.jsonData = data;
      });
    }
  
    onSearch() {
      // Perform search logic here based on this.searchTerm
      this.searchResults = this.jsonData.filter(user =>
        user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  

  selectedName: string | null = null;


  names: string[]= ["vikas madugundu","vivek","somu","vikas madugundu","vivek","somu","vikas madugundu","vivek","somu","vikas ruddy","vivek","chandu"];


   ngOnInit(): void {
    console.log("start");
   }

   duplicateContainer() {
    const newName = prompt('Enter a new name:');
    
    if (newName !== null) {
      this.names.push(newName);
    }
    
  }

  handleContainerClick(username: string){
   
    this.selectedName = username;
   
  }


  







   

}
