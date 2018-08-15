let http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<button type="button">Click Me!</button>');
    res.end();
}).listen(8080);