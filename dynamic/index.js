var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

//database connect
MongoClient.connect('mongodb://127.0.0.1:27017/dynamic', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});

var app = express();
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});

/*The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(express.static('public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 80);

/*
app.get('/',function(req,res){
  //ar context = {};
  
  res.send("HIGH");
});
*/

app.get('/', function (req, res, next) {
    var context = {};

    res.render('home', context);
});

app.post('/quotes', (req, res) => {
    db.collection('dynamic').save(req.body, (err, result) => {
        if (err)
            return console.log(err)
        console.log('saved to dyn database')
        res.redirect('/')
    })
})

var server = app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
