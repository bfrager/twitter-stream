var express = require('express'),
    fs      = require('fs'),
    logger  = require('morgan'),
    app     = express(),
    port    = process.env.PORT || 3000,
    users   = require('./routes.js')

var accessLogStream = fs.createWriteStream(__dirname + '/access.log')

app.use(logger('combined', {stream: accessLogStream}))

app.use('/', users)
app.listen(port)
console.log('Server started on ' + port)
