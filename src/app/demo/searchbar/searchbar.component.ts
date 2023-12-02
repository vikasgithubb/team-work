import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{

 
  names: string[]= ["vikas","vivek","somu"];


   ngOnInit(): void {
    console.log("start");
   }

   duplicateContainer() {
    const newName = prompt('Enter a new name:');
    
    if (newName !== null) {
      this.names.push(newName);
    }
    
  }

   

}
