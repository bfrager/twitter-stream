var express = require('express'),
    fs      = require('fs'),
    logger  = require('morgan'),
    app     = express(),
    port    = process.env.PORT || 3000

var accessLogStream = fs.createWriteStream(__dirname + '/access.log')

app.use(logger('combined', {stream: accessLogStream}))

app.get('/', function(req,res){
  res.json({user: 'tony'})
})

app.get('/:id', function(req,res){
  // res.json({req.params.id})
  var users = [{user: 1}, {user: 2}, {user: 3}]
  if (req.params.id < users.length) {
    res.json(users[req.params.id - 1].user)
  }
  else {
    res.json({'message': 'user does not exist'})
  }
})

app.listen(port)
console.log('Server started on ' + port)
