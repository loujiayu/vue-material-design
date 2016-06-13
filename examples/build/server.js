var express = require('express')
var app = express()

app.listen(8000, function() {
<<<<<<< HEAD
  console.log('Server listen at port 8000')
=======
  console.log('Server listen at http://localhost:8000')
>>>>>>> gh-pages
})

app.use(express.static(__dirname))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
