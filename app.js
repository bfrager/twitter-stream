var express = require('express'),
    fs      = require('fs'),
    logger  = require('morgan'),
    app     = express(),
    port    = process.env.PORT || 3000,
    router  = express.Router()

var accessLogStream = fs.createWriteStream(__dirname + '/access.log')

app.use(logger('combined', {stream: accessLogStream}))

router.get('/', function(req,res){
  res.send('this is the home page')
})

app.use('/', router)
app.listen(port)
console.log('Server started on ' + port)
