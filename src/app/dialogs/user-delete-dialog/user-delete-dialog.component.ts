/*
============================================
; Title:  user-delete-dialog.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Material dialog for deleting users!
;===========================================
*/

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.css']
})
export class UserDeleteDialogComponent implements OnInit {
  username: string;

  constructor(private dialogRef: MatDialogRef<UserDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.username = data.username;
  }

  ngOnInit() {
  }

}
