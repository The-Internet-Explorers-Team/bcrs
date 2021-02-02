/**
 * ================================================================================
 * Title: role-delete-dialog.component.ts
 * Author: Professor Krasso
 * Date: 1/29/21
 * Modified by: Rochelle Markham, Rebecca Buechle, Rhonda Rivas, King Major
 * Description: modifies user roles for BCRS
 * ================================================================================
 */

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-role-delete-dialog',
  templateUrl: './role-delete-dialog.component.html',
  styleUrls: ['./role-delete-dialog.component.css']
})
export class RoleDeleteDialogComponent implements OnInit {
  role: String;

  constructor(private dialogRef: MatDialogRef<RoleDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.role = data.role;
   }

  ngOnInit(): void {
  }

}
