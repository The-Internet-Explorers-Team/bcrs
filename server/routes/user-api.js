/*
============================================
; Title:  user-api.js
; Author: Professor Krasso
; Date:  1-22-21
; Modified by: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: CRUD APIs for Users
;===========================================
*/

const express = require('express');
const User = require('../db-models/user');
const router = express.Router();
const bcrypt = require('bcrypt');

/*
 API: FindUserById API
 Returns: User File
*/

router.get('/:id', function (req, res, next) {
  User.findOne({'_id': req.params.id}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});

/**
 * API: FindAllUsers API
 * Returns: Array of users
 */

router.get('/', function(req, res, next){
  //finds users and adds them to a returned array
  User.find({}, function(err, Users){
     if(err){
       console.log(err);
       return next(err);
     } else {
       console.log(Users);
       res.json(Users);
     }
   })
 })

/**
 * API: Update User
 * Returns: Updated User File
 */
router.put('/api/users/:userId', function(req, res, next){
  //finds the specified User
  User.findOne({'userId': req.params.userId}, function(err, User){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(User);
      //sets the new user information and sets date modified to the current date
      User.set({
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        securityQuestions: req.body.securityQuestions,
        email: req.body.email,
        isDisabled: req.body.isDisabled,
        role: req.body.role,
        date_modified: new Date()
      });
      //saves the information and returns the file
      User.save(function(err, User){
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(User);
          res.json(User);
        }
      })
    }
  })
});

/**
 * API: Delete User
 * Return: Updated User File
*/
router.put('/api/users/:userId', function(req, res, next){
  //finds the specified User
  User.findOne({'userId': req.params.userId}, function(err, User){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(User);
      //sets the isDisabled flag to true and sets date modified as the current date
      User.set({
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        securityQuestions: req.body.securityQuestions,
        email: req.body.email,
        isDisabled: true,
        role: req.body.role,
        date_modified: new Date()
      });
      //saves the information and returns the file
      User.save(function(err, User){
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(User);
          res.json(User);
        }
      })
    }
  })
});

/**
 * FindSelectedSecurityQuestions
 */
router.get('/:username/security-questions', function (req, res, next) {
  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user.securityQuestions);
    }
  })
});

//exports the APIs to the router module!
module.exports = router;
