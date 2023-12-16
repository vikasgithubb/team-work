import { Component, OnInit } from '@angular/core';
import { members } from './members';
import { HttpClient } from '@angular/common/http';
import { fromdatapo } from './fromdatapo';
import { catchError } from 'rxjs/internal/operators/catchError';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  options: members[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'vikas' },
    { id: 7, name: 'somu' },
    { id: 8, name: 'somppa' },
    { id: 9, name: 'vivvek' },
    { id: 10, name: 'veeresh' },
    { id: 11, name: 'naaresh' },
  ];

  selectedOptions: members[] = [];
  groupname: String = "";
  groupobjective: String = "";

  private membersurl = 'https://e1ce3626-d1e1-4bd7-a736-f15ba06b8b81.mock.pstmn.io/posttest';
  handleUpdateResponse: any;
  handleError: any;
  HandleRequiredErrorResponse: any;
  constructor(private http: HttpClient) { }

  onSubmit() {

    let formData = {
      selectedOptions: this.selectedOptions,
      groupname: this.groupname,
      groupobjective: this.groupobjective
    };

     this.http.post<fromdatapo>(this.membersurl, formData).pipe(
      catchError(err => this.HandleRequiredErrorResponse(err))
    );

    this.resetForm();
  }


  resetForm() {
    this.selectedOptions = [];
    this.groupname = "";
    this.groupobjective = "";
  }




}
