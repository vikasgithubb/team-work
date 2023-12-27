import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{



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
