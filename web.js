var express = require('express');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";
//var buf = require('buffer');

app.use(express.logger());

app.get('/', function(request, response) {
  //response.send(buf.toString(fs.readFileSync("index.html")));
  //response.send(fs.readFileSync("index.html","utf8"));
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
