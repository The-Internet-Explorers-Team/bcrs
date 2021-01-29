/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Date:   January 13, 2021
; Description: Model for MongoDB Users collection
;===========================================
*/

//this section is the requirements for mongoose
const mongoose = require('mongoose');

//security questions Schema
let securityQuestions = mongoose.Schema({
  questionId:   {type: String},
  answer:       {type: String}
});

//set up user schema
let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true, dropDups: true},
  password: {type: String, required: true},
  firstname: {type: String},
  lastname: {type: String},
  phoneNumber: {type: String},
  address: {type: String},
  email: {type: String},
  isDisabled: {type: Boolean, default: false},
  role: {type: String, default: 'standard'},
  securityQuestions: [securityQuestions],
  date_created: {type: Date, default: new Date()},
  date_modified: {type: Date}
})

//exports schema to MongoDB
module.exports = mongoose.model('User', userSchema);
