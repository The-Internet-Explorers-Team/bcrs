/*
============================================
; Title:  invoice-api.js
; Author: Professor Krasso
; Date:   January 30, 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: APIs for Invoices
;===========================================
*/

const express = require('express');
const Invoice = require('../db-models/invoice');

const router = express.Router();

/**
 * CreateInvoice
 */
router.post('/:username', function (req, res, next) {
  // get the username
  const username = req.params.username;

  // create an invoice object literal for saving to MongoDB
  let invoice = {
    lineItems: req.body.lineItems,
    partsAmount: req.body.partsAmount,
    laborAmount: req.body.laborAmount,
    lineItemTotal: req.body.lineItemTotal,
    total: req.body.total,
    username: username,
    orderDate: req.body.orderDate
  };

  console.log(invoice);

  // create a new invoice document
  Invoice.create(invoice, function (err, newInvoice) {
    // if error, return the message
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(newInvoice);

      // return the results to the client
      res.json(newInvoice);
    }
  })
});

/**
 * FindPurchasesByService
 */
router.get('/purchases-graph', function (req, res, next) {
  // query to return a count of purchases by service
  Invoice.aggregate([
    // unwind the array of line items
    {"$unwind": "$lineItems"},

    // group on _id, title, and price
    {
      "$group": {
        "_id": {
          "title": "$lineItems.title",
          "price": "$lineItems.price"
        },
        // get a count of the group items
        "count": {"$sum": 1},
      }
    },
    {"$sort": {"_id.title": 1}},
  ], function (err, purchasesGraph) {
    // if error, return the error message
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log('--PurchaseGraph data structure--');
      console.log(purchasesGraph);

      // return the purchases graph to the client
      res.json(purchasesGraph);
    }
  });
});

module.exports = router;
