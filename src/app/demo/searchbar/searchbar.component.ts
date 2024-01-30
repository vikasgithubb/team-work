import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';
import { UserdataService } from 'src/app/userdata.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Teamdata } from 'src/app/teamdata';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  constructor(private http: HttpClient,private userdataservice: UserdataService,private authService: AuthService) {
    
   }

  names: string[] = [];

  ngOnInit() {
    this.userdataservice.fetchteamdata(this.authService.getUser()).subscribe(
      (teamData: any) => {
        // Assuming teammates is an array of strings in Teamdata
        this.names = teamData;

        // Log the updated names array
        console.log('Updated Names:', this.names);
      },
      (error) => {
        console.error('Error fetching team data:', error);
      }
    );
  
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
