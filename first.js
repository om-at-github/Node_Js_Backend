let http = require('http');
http.createServer(function(req ,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("hello world");
}).listen(8000)

console.log("server started on port 8000")