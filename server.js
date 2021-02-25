require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
/**Request Header Parser Microservice**/
app.get('/api/whoami', function(req,res){
    var ip = req.ip;
    var language =  req.headers["accept-language"];
    var software = req.headers["user-agent"];
    console.log(req.method + " " + req.path + " - " + req.ip);
    res.json({
        ipaddress : ip,
        language : language,
        software: software
    });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});