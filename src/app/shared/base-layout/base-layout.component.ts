/*
============================================
; Title:  base-layout component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: base-layout component 
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();
  
  constructor(private cookieService: CookieService, private router: Router) {  }

  ngOnInit(): void {
  }

  signout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}