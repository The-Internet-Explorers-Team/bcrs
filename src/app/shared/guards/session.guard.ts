/*
============================================
; Title:  auth guard.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Using Angular auth guard to restrict application access
;===========================================
*/

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class SessionGuard implements CanActivate {



  constructor(private router: Router, private cookieService: CookieService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const isAuthenticated = this.cookieService.get('sessionuser');

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/session/signin']);
      return false;
    }
  }
}