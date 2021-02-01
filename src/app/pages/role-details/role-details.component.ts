/*
============================================
; Title:  role-details.component.ts
; Author: Professor Krasso
; Date:   3 December 2019
; Description: Edit roles page
;===========================================
*/

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  form: FormGroup;
  role: any;
  roleId: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.roleId = this.route.snapshot.paramMap.get('roleId');

    this.http.get('/api/roles/' + this.roleId).subscribe(res => {
      this.role = res;
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['text'].setValue(this.role.text);
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    });
  }

  save() {
    const role = this.form.controls['text'].value;

    this.http.put('/api/roles/' + this.roleId, {
      text: role
    }).subscribe(res => {
      this.router.navigate(['/roles']);
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/roles']);
  }
}

