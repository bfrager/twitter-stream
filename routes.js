var express = require('express')
    users   = express.Router()
    users.route('/users')
    .get(function(req,res){
      res.send('display all users')
    })

module.exports = users
