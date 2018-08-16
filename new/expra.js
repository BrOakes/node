let express = require('express');
let app = express();
let path = require('path');

app.use('/rss', express.static(__dirname + "/rss"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/rss/index.html'));
});

app.listen(8081);

//I fuckin did it!!!

