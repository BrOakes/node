let express = require('express');
let app = express();
let path = require('path');

let port = 8080;

app.use('/rss', express.static(__dirname + "/rss"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/rss/html/index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+'/rss/html/about.html'))
})

app.get('/other', function(req,res){
    res.sendFile(path.join(__dirname+'/rss/html/other.html'))
})

app.listen(port);

console.log(`Running on Port ${port}`);

//I fuckin did it!!!

