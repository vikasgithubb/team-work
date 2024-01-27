import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  

  
  constructor(private http: HttpClient,private userdataservice: UserdataService) {
    this.userdataservice.fetchData();
   }

   searchTerm: string = '';
  searchResults: Userdetails[] = [];
  
    onSearch() {
      this.userdataservice.fetchData().subscribe(data => {
        // Perform search logic here based on this.searchTerm
        this.searchResults = data.filter(user =>
          user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
  }

  selectedName: string | null = null;


  names: string[]= ["vikas madugundu","vivek","somu","vikas madugundu","vivek","somu","vikas madugundu","vivek","somu","vikas ruddy","vivek","chandu"];




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
