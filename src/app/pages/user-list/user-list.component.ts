/*
============================================
; Title:  user-list.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Angular component for viewing all users
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {UserDeleteDialogComponent} from '../../dialogs/user-delete-dialog/user-delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.http.get('/api/users').subscribe(res => {
      this.users = res;
      console.log(this.users);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  delete(userId, username) {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      data: {
        username
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.http.delete('/api/users/' + userId).subscribe(res => {
          console.log('User deleted');
          this.users = this.users.filter(u => u._id !== userId);
        });
      }
    });
  }
}
