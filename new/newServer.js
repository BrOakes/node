let http = require('http');
let fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("rss/index.html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}).listen(8080);

//hey marcus if you can figure out why this doesnt display the image i will buy you a shoe
//i tried different paths and shiz just cant get the image to show
//gonna fuck with express