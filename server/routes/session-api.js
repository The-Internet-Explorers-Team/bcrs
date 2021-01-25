/*
============================================
; Title:  session-api.js
; Author: Professor Krasso
; Date:   16 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: APIs for managing Session Users
;===========================================
*/

// require statements
const express = require('express');
const User = require('../db-models/user');
const bcrypt = require('bcryptjs');

// configurations
const router = express.Router();

/**
 * User sign-in
 */
router.post('/signin', function (req, res, next) {

  User.findOne({'username': req.body.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      /**
       * IF the user is an existing customer
       */
      if (user) {
        let passwordIsValid = bcrypt.compareSync(req.body.password, req.user.password); // compare the saved hashed password against the signin password

        if (passwordIsValid) {
          /**
           * IF the password is valid
           */
          res.status(200).send({
            type: 'success',
            auth: true,
            username: user.username,
            time_stamp: new Date()
          })
        } else {
          /**
           * If the password is invalid, return a 401 status code/message
           */
          console.log(`The password for username: ${req.body.username} is invalid.`);
          res.status(401).send({
            type: 'error',
            text: `Invalid username and/or password, please try again`,
            auth: false,
            date_time: new Date()
          })
        }
      } else {
        /**
         * Invalid username
         */
        console.log(`Username: ${req.body.username} has not been registered with out system.`);

        res.status(401).send({
          type: 'error',
          text: `Invalid username and/or password, please try again`,
          auth: false,
          time_stamp: new Date()
        })
      }
    }
  })
});

/**
 * API: Register User
 * Returns: Newly Created User file
 */

router.post('/register', function(req, res, next){
  User.findOne({'username': req.body.username}, function(err, user){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      //if the user doesn't already exist, create new user
      if (!user) {
        //sets up hashed passwords using bcrypt
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        //sets up user file fields
        const newUser = new User({
          userId: req.body.userId,
          username: req.body.username,
          password: hashedPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          securityQuestions: req.body.securityQuestions,
          email: req.body.email,
          isDisabled: false,
          role: req.body.role,
          date_created: new Date(),
          date_modified: ""
        });
        //save new User
        newUser.create(function(err, newUser){
          if(err){
            console.log(err);
            return next(err);
          } else {
            console.log(newUser);
            res.json(newUser);
          }
        });
      } else {
        //if the username is already registered, prompt to select a new username and don't authorize
        console.log(`The username ${req.body.username} has already been registered. Please select a new username`);
        res.status(500).send({
          text: `The username ${req.body.username} has already been registered. Please select a new username`,
          auth: false,
        })
      }
    }
})});

/**
 * API: Verify User
 * Return: User file
 */
router.get('/verify/users/:username', function(req, res, next){
  //find user by username
  User.findOne({'username': req.params.username}, function(err, User) {
    if(err){
      console.log(err);
      return next(err);
    } else {
      //return user if verified
      console.log(User);
      res.json(User);
    }
  })
});

module.exports = router;
