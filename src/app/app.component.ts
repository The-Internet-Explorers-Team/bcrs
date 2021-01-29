/*
============================================
; Title:  app.component 
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: app.component 
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``]
})
export class AppComponent {
  title = "Bob's Computer Repair Shop"
}
