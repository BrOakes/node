let fs = require('fs');

fs.unlink('rss/textCopy.txt', function(error){
    if(error){
        console.log('file NOT deleated');
    }else{
        console.log('file deleated');
    }
});