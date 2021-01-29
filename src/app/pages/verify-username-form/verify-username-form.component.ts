/*
============================================
; Title:  verify-username-form.component.ts
; Author: Professor Krasso
<<<<<<< HEAD
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
=======
; Date:   3 December 2019
>>>>>>> origin
; Description: Verify username form
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify-username-form',
  templateUrl: './verify-username-form.component.html',
  styleUrls: ['./verify-username-form.component.css']
})
export class VerifyUsernameFormComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])]
    });
  }

  validateUsername() {
    const username = this.form.controls['username'].value;

    this.http.get('/api/session/verify/users/' + username).subscribe(res => {
      if (res) {
        this.router.navigate(['/session/verify-security-questions'], {queryParams: {username: username}, skipLocationChange: true});
      }
    }, err => {
      console.log(err);
    });
  }
}


