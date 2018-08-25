let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

let port = 8080;

let birds = require('./birds');

app.use('/brids', birds);

app.use('/rss', express.static(__dirname + "/rss"));
// app.use('/rss/images', express.static(__dirname + "/rss/images"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/rss/html/index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+'/rss/html/about.html'))
})

app.get('/other', function(req,res){
    res.sendFile(path.join(__dirname+'/rss/html/other.html'))
})

// POST method route
app.post('/other', function (req, res) {
    res.end('POST request to the homepage')
})

app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
  })
app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
res.send('Hello from B!')
})

let cb0 = function(req, res, next){
    console.log('CB0');
    next();
}
let cb1 = function(req, res, next){
    console.log('CB1');
    next();
}
let cb2 = function(req, res, next){
    res.send('Hello from C!')
}

app.get('/example/c',[cb0,cb1,cb2]);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/rss/html/broken.html'))
    // console.log("dissss");
});

//GET method route
app.get('/t', function (req, res, next) {
    res.send('GET request to the homepage')
})

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.listen(port,function(){
    console.log(`Running on Port ${port}`);
});

//I fuckin did it!!!