/*
============================================
; Title:  security-question-list.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: This is the signin component view for the application!
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])]
    });
  }

  signin() {
    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;

    this.http.post('/api/session/signin', {
      username,
      password
    }).subscribe(res => {
      if (res['auth']) {
        /**
         * User is authenticated and we can grant them access
         */
        this.cookieService.set('sessionuser', username, 1);
        this.router.navigate(['/']);
      } else {
        /**
         * User is not authenticated and we should return the error message
         */
        this.errorMessage = res['text'];
      }
    });
  }

}
