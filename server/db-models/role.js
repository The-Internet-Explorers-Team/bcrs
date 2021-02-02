/*
============================================
; Title:  role.js
; Author: Professor Krasso
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Date:   January 28, 2021
; Description: Model for MongoDB Role collection
;===========================================
*/

//requires use of mongoose
const mongoose = require('mongoose');

//sets up role Schema
let roleSchema = mongoose.Schema({
  text: {type: String, unique: true, dropDups: true}
})

//exports the schema for use in the application
module.exports = mongoose.model('Role', roleSchema);

