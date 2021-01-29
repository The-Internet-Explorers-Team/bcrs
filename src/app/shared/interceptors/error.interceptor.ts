/*
============================================
; Title:  error.interceptor.ts
; Author: Professor Krasso
; Date:   3 December 2019
; Description: Error interceptor
;===========================================
*/

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {

      if ([404].indexOf(err.status) !== -1) {
        this.router.navigate(['/session/404']);
      }

      if ([500].indexOf(err.status) !== -1) {
        this.router.navigate(['/session/500']);
      }

      // Otherwise, catch the error and throw
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}