/*
============================================
; Title:  security-question-api.js
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
router.get('/', function (req, res, next) {
  SecurityQuestion.find({}).where('isDisabled').equals(false).exec(function(err, securityQuestions) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestions);
      res.json(securityQuestions);
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

  SecurityQuestion.create(sq, function (err, securityQuestion) {
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

/**
 * API - Find Security Questions by Id's
 * FindSecurityQuestionsByIds
 */
router.post('/find-by-ids', function (req, res, next) {
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;

  SecurityQuestion.find({
    $or: [
      {'_id': question1},
      {'_id': question2},
      {'_id': question3}
    ]
  }).exec(function (err, securityQuestions) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestions);
      res.json(securityQuestions);
    }
  })
});

//exports
module.exports = router;
