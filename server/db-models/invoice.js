/*
============================================
; Title:  invoice.js
; Author: Professor Krasso
; Date:   January 30, 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Model for MongoDB Invoice collection
;===========================================
*/

const mongoose = require('mongoose');

let lineItemSchema = mongoose.Schema({
  title: {type: String},
  price: {type: Number}
});

let invoiceSchema = mongoose.Schema({
  lineItems: [lineItemSchema],
  partsAmount: {type: Number},
  laborAmount: {type: Number},
  lineItemTotal: {type: Number},
  total: {type: Number},
  username: {type: String},
  orderDate: {type: Date}
});

module.exports = mongoose.model('Invoice', invoiceSchema);
