/**
 * ===============================================================================
 * Title: role-api.js
 * Author: Professor Krasso
 * Date: 1/28/21
 * Modified By: Rochelle Markham, Becca Buechle, Rhonda Rivas & King Major
 * Description: User roles for BCRS
 * ================================================================================
 */

const express = require('express');
const Role = require('../db-models/role');
const router = express.Router();

/**
 * API: Find All Roles
 * Return: All roles
 */
router.get('/', function(req, res, next){
  //finds all available roles
  Role.find({}, function(err, roles){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(roles);
      res.json(roles);
    }
  })
 })

/**
 * API: Find Role by ID
 * Return: Role details
 */
router.get('/:roleId', function(req, res, next) {
  Role.findOne({'_id': req.params.roleId}, function(err, role){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(role);
      res.json(role);
    }
  })
})

/**
 * API: Create new role API
 * Return: new role
 */
router.post('/', function(req, res, next){
  let addRole = {
    text: req.body.text
  };
  Role.create(addRole, function(err, role){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(role);
      res.status(200).send({
        type: 'success',
        role: role.text,
        time_stamp: new Date()
      })
    }
  })
})

/**
 * API: Update role API
 * Return: Updated Role
 */
router.put('/:roleId', function(req, res, next){
  Role.findOne({'_id': req.params.roleId}, function(err, role){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(role)
      role.set({
        text: req.body.text
      });
      role.save(function(err, role){
        if(err){
          console.log(err);
          return next(err);
        } else {
          console.log(err);
          res.json(role);
        }
      })
    }
  })
})

/**
 * API: Delete Role
 * Returns:
 */
router.delete('/:roleId', function(req, res, next){
  Role.findByIdAndDelete({'_id': req.params.roleId}, function(err, role){
    if(err){
      console.log(err);
      return next(err);
    } else {
      console.log(role + " has been deleted");
      res.json(role + " has been deleted");
    }
  })
})

module.exports = router;
