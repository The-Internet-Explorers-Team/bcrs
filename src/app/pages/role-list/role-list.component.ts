/**
 * ================================================================================
 * Title: role-list.component.ts
 * Author: Professor Krasso
 * Date: 1/29/21
 * Modified by: Rochelle Markham, Rebecca Buechle, Rhonda Rivas, King Major
 * Description: modifies user roles for BCRS
 * ================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { RoleDeleteDialogComponent } from '../../dialogs/role-delete-dialog/role-delete-dialog.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any;
  displayedColumns = ['role', 'edit', 'delete'];

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.http.get('/api/roles').subscribe(res => {
      this.roles = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  delete(roleId, text){
    const dialogRef  = this.dialog.open(RoleDeleteDialogComponent, {
      data: {
        role: text
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.http.delete('api/roles/' + roleId).subscribe(res => {
          console.log('Role deleted');
          this.roles = this.roles.filter(r => r._id !== roleId);
        })
      }
    })
  }
}
