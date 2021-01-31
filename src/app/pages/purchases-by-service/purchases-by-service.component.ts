/*
============================================
; Title:  purchases-by-service.component.ts
; Author: Professor Krasso
; Date:   3 December 2019
; Description: Purchases by service page
;===========================================
*/

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-purchases-by-service',
  templateUrl: './purchases-by-service.component.html',
  styleUrls: ['./purchases-by-service.component.css']
})
export class PurchasesByServiceComponent implements OnInit {
  purchases: any;
  data: any;
  itemCount = [];
  labels = [];

  constructor(private http: HttpClient) {
    // call the purchases-graph API
    this.http.get('/api/invoices/purchases-graph').subscribe(res => {
      // map the response data to the purchases variable
      this.purchases = res;

      // loop over the purchases to split out the services and item count
      for (const item of this.purchases) {
        this.labels.push(item._id.title);
        this.itemCount.push(item.count);
      }

      // build the object literal for the primeNG bar graph
      this.data = {
        labels: this.labels, // label for services
        datasets: [
          // graph object
          {
            backgroundColor: [
              '#ED0A3F',
              '#FF8833',
              '#5FA777',
              '#0066CC',
              '#6B3FA0',
              '#AF593E',
              '#6CDAE7'
            ],
            hoverBackgroundColor: [
              '#ED0A3F',
              '#FF8833',
              '#5FA777',
              '#0066CC',
              '#6B3FA0',
              '#AF593E',
              '#6CDAE7'
            ],
            data: this.itemCount
          },
        ]
      };

      // verify the data objects structure matches primeNG's expected format
      console.log('Data object');
      console.log(this.data);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
}
