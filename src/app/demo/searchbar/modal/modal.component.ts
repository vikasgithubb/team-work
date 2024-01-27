import { Component, Input, OnInit } from '@angular/core';
import { members } from './members';
import { HttpClient } from '@angular/common/http';
import { fromdatapo } from './fromdatapo';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Userdetails } from '../userdetails';
import { UserdataService } from 'src/app/userdata.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{

 

  constructor(private http: HttpClient, private userdataservice: UserdataService) {
    
  }

  options: members[] = []; 
  

fetchoptions() {
  this.userdataservice.fetchData().subscribe(data => {
    this.options = data.map(user => ({
      name: user.firstname,
      id: user.id 
    }));
  });
}

   


  selectedOptions: members[] = [];
  handleError:any;
  groupname: String = "";
  groupobjective: String = "";

  private membersurl = 'http://localhost:8080/api/v1/teammates/save';
  handleUpdateResponse: any;
 
  HandleRequiredErrorResponse: any;


  onSubmit() {

    let randomTeamId = Math.floor(Math.random() * 1000) + 1;
    let formData = {
      team: {
        teamid: randomTeamId,
        teamname: this.groupname,
        description: this.groupobjective,
        teammates: this.selectedOptions.map(option => ({ id: option.id, teamid: randomTeamId }))
      }
    };

    console.log('team information',formData);

    this.http.post<fromdatapo>(this.membersurl, formData).subscribe(
      response => {
        // Handle the response here
        this.handleUpdateResponse(response);
      },
      error => {
        // Handle errors here
        this.handleError(error);
      }
   );
   

    this.resetForm();
  }


  resetForm() {
    this.selectedOptions = [];
    this.groupname = "";
    this.groupobjective = "";
  }


}
