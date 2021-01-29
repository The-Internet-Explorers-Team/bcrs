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
const bcrypt = require('bcryptjs');

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
  User.find({}).where('isDisabled').equals(false).exec(function(err, users) {
     if(err){
       console.log(err);
       return next(err);
     } else {
       console.log(users);
       res.json(users);
     }
   })
 })


/**
 * CreateUser
 */
router.post('/', function (req, res, next) {
  const saltRounds = 8;
  let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds); // salt/hash the password
  let u = {
    username: req.body.username,
    password: hashedPassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    email: req.body.email
  };
  User.create(u, function (err, newUser) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(newUser);
      res.status(200).send({
        type: 'success',
        auth: true,
        username: newUser.username,
        time_stamp: new Date()
      })
    }
  })
});

/**
 * API: Update User
 * Returns: Updated User File
 */
router.put('/:id', function(req, res, next){
  //finds the specified User
  User.findOne({'_id': req.params.id}, function(err, user){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      //sets the new user information and sets date modified to the current date
      user.set({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email,
        date_modified: new Date(),
        role: req.body.role
      });
      //saves the information and returns the file
      user.save(function(err, savedUser){
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedUser);
          res.json(savedUser);
        }
      })
    }
  })
});

/**
 * API: Delete User
 * Return: Updated User File
*/
router.delete('/:id', function(req, res, next){
  //finds the specified User
  User.findOne({'_id': req.params.id}, function(err, user){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(err);
      //sets the isDisabled flag to true and sets date modified as the current date

      if(user){
        user.set({
          isDisabled: true,
        });
      //saves the information and returns the file
      user.save(function(err, savedUser){
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedUser);
          res.json(savedUser);
        }
      })
    }}
  })
});

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
 * API -Find selected security questions
 * FindSelectedSecurityQuestions
 */
router.get('/:username/security-questions', function (req, res, next) {
  User.findOne({'username': req.params.username}, function (err, User) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(User);
      res.json(User.securityQuestions);
    }
  })
});

/**
 * API: Find User role
 * Returns: Assigned user role
*/
router.get('/:username/role', function (req, res, next){
  User.findOne({'username': req.params.username}, function(err, User){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(User);
      res.json(User.role)
    }
  })
})

//exports the APIs to the router module
module.exports = router;

