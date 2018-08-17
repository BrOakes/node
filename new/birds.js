let express = require('express')
let app = express();
let router = express.Router()

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now())
    next()
})
router.get('/birds', function(req, res){
    res.send('Birds home page')
})

router.get('/is', function(req, res){
    res.send('About birds')
})

// app.use('/', router);

// app.listen(8080,function(){
//     console.log(`Running on Port 8080`);
// });



module.exports = router