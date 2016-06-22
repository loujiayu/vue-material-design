var express = require('express')
var app = express()

app.listen(8000, function() {
  console.log('Server listen at http://localhost:8000')
})

app.use(express.static(__dirname))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
