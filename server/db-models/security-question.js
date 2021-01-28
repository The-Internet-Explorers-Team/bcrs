/*
============================================
; Title:  security-question.js
; Author: Professor Krasso
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Date:   January 13, 2021
; Description: Model for MongoDB SecurityQuestions collection
===========================================
*/

const mongoose = require('mongoose');
//security questions go here

let securityQuestionSchema = mongoose.Schema({
  text:       {type: String},
  isDisabled: {type: Boolean, default: false}
});

//exports
module.exports = mongoose.model('SecurityQuestion', securityQuestionSchema); 