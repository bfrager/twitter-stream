var express = require('express')
    users   = express.Router()
    users.route('/users')
    .get(function(req,res){
      res.send('display all users')
    })
    .post(function(req,res){
      res.send('user added')
    })
    .put(function(req,res){
      res.send('updated user')
    })
    .delete(function(req,res){
      res.send('deleted user')
    })

module.exports = users
