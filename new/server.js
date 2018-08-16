let http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.write('<img src="rss/images/toucan.jpg">');
    res.end();
}).listen(8080);