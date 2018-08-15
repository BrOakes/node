let fs = require('fs');

// let text = fs.readFileSync('rss/text.txt', 'utf8');

// fs.writeFileSync('rss/textcopy.txt', text);

fs.readFile('rss/text.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('rss/textCopy.txt', data, function(err){
        if(err){
            console.log('data failed to be copied');
        }else{
            console.log('data copied');
        }
    });
});

console.log('test');