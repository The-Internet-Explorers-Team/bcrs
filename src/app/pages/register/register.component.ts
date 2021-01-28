/*
;===========================================
; Title:  register.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Register page!!
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { registerLocaleData } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  securityQuestions: any;
  form: FormGroup;
  registrationForm: FormGroup;
  errorMessage: String;


  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, private cookieService: CookieService ) {
    this.http.get('api/security-questions').subscribe(res => {
      this.securityQuestions = res;
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      contactInfo: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        phoneNumber: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
      }),
      securityQuestions: new FormGroup({
        securityQuestion1: new FormControl(null, Validators.required),
        securityQuestion2: new FormControl(null, Validators.required),
        securityQuestion3: new FormControl(null, Validators.required),
        sq1Answer: new FormControl(null, Validators.required),
        sq2Answer: new FormControl(null, Validators.required),
        sq3Answer: new FormControl(null, Validators.required),
      }),
      credentials: new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      })
    })
  }

  register(form) {
    const contactInfo = form.contactInfo;
    const securityQuestions = form. securityQuestions;
    const credentials = form.credentials;

    const selectedSQ = [
      {
        questionId: securityQuestions.securityQuestion1,
        answer: securityQuestions.sq1Answer
      },
      {
        questionId: securityQuestions.securityQuestion2,
        answer: securityQuestions.sq2Answer
      },
      {
        questionId: securityQuestions.securityQuestion3,
        answer: securityQuestions.sq3Answer
      }
    ];

    this.http.post('/api/session/register', {
      username: credentials.username,
      password: credentials.password,
      firstname: contactInfo.firstname,
      lastname: contactInfo.lastname,
      phoneNumber: contactInfo.phoneNumber,
      address: contactInfo.address,
      email: contactInfo.email,
      securityQuestions: selectedSQ
    }).subscribe(res => {
      if(res['auth']) {
        this.cookieService.set('isAuthenticated','true', 1);
        this.cookieService.set('username', credentials.username, 1);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = res['text'];
      }
    }, err => {
      console.log(err);
      this.errorMessage = err;
    })
  }
}
