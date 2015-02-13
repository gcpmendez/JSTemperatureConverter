var static = require('node-static');

var fileserver = new static.Server('./');

console.log("visit http:/localhost:9090/test.html")
require('http').createserver(function (request, response)) {
  request.addListener('end', function() {
    fileServer.serve(requst, response);
  }).resume();
}).listen(8080);
