/*
============================================
; Title:  security-question-create.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Angular component for creating new security questions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-security-question-create',
  templateUrl: './security-question-create.component.html',
  styleUrls: ['./security-question-create.component.css']
})
export class SecurityQuestionCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])],
    });
  }

  create() {
    this.http.post('/api/security-questions', {
      text: this.form.controls.text.value,
    }).subscribe(res => {
      this.router.navigate(['/security-questions']);
    });
  }

  cancel() {
    this.router.navigate(['/security-questions']);
  }
}
