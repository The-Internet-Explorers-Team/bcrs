/*
============================================
; Title:  user-list.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: user-list component 
;===========================================
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;


  constructor(private http: HttpClient) {
    this.http.get('/api/users').subscribe(res => {
      this.users = res;
      console.log(this.users);
    }, err => {
      console.log(err);
    }
    )
   }

  ngOnInit(): void {
  }

}