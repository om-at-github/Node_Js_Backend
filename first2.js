let http = require('http');
http.createServer(function(req ,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log("url",req.url)
    if(req.url=="/login"){
        res.end("user logged in");
    }
    else if (req.url =="/logout"){
        res.end("user logout");
    }
    else{
        res.end("Helloo User")
    }

}).listen(8000)

console.log("server started on port 8000")
