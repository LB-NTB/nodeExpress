var express = require('express');

// Routes
var index = require('../routes/index');
var posts = require('../routes/posts');

var app = express();
app.set('port', process.env.PORT || 3000);

// View engine
app.set('views', './views');
app.set('view engine', 'jade');


// Middlewre
app.use(express.static('./public'));

// Routen
app.use('/', index);
app.use('/posts', posts);




// Error handling
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err,req,res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal error');
});

// start Server
exports.start = function(){
    app.listen(app.get('port'), function(){
        console.log('Express ready on http://127.0.0.1:'+app.get('port'));
    });
};

