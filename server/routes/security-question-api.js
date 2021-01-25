/*
============================================
; Title:  security-questions.js
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Model for MongoDB SecurityQuestions collection
;===========================================
*/

// require statements
const express = require('express');
const SecurityQuestion = require('../db-models/security-question');

// configurations
const router = express.Router();

/**
 * FindAll
 */
router.get('/api/security-questions', function (req, res, next) {
  SecurityQuestion.find({}).where('isDisabled').equals(false).exec(function(err, SecurityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(SecurityQuestion);
      res.json(SecurityQuestion);
    }
  })
});

/**
 * FindById
 */
router.get('/:id', function (req, res, next) {
  SecurityQuestion.findOne({'_id': req.params.id}, function (err, securityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);
      res.json(securityQuestion);
    }
  })
});

/**
 * CreateSecurityQuestion
 */
router.post('/', function (req, res, next) {
  let sq = {
    text: req.body.text
  };

  securityQuestion.create(sq, function (err, securityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);
      res.json(securityQuestion);
    }
  })
});

/**
 * UpdateSecurityQuestion
 */
router.put('/:id', function (req, res, next) {
  SecurityQuestion.findOne({'_id': req.params.id}, function (err, securityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);

      securityQuestion.set({
        text: req.body.text
      });

      securityQuestion.save(function (err, securityQuestion) {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(securityQuestion);
          res.json(securityQuestion);
        }
      })
    }
  })
});

/**
 * DeleteSecurityQuestion
 */
router.delete('/:id', function (req, res, next) {
  SecurityQuestion.findOne({'_id': req.params.id}, function(err, securityQuestion) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);

      if (securityQuestion) {
        securityQuestion.set({
          isDisabled: true
        });

        securityQuestion.save(function(err, savedSecurityQuestion) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(savedSecurityQuestion);
            res.json(savedSecurityQuestion);
          }
        })
      }
    }
  });
});

module.exports = router;
