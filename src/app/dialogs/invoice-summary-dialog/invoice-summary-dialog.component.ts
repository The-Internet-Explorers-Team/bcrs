/*
============================================
; Title:  invoice-summary-dialog.component.ts
; Author: Professor Krasso
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Date:   20 January 2021
; Description: Material dialog for the Invoice Summary dialog
;===========================================
*/

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-summary-dialog',
  templateUrl: './invoice-summary-dialog.component.html',
  styleUrls: ['./invoice-summary-dialog.component.css']
})
export class InvoiceSummaryDialogComponent implements OnInit {
  invoice: any;

  constructor(private dialogRef: MatDialogRef<InvoiceSummaryDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;
  }

  ngOnInit() {
  }

}
