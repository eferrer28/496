var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var objectId = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});
var app = express();
app.set('view engine', 'ejs')




//database connect
app.set('port', 80);

var db;
MongoClient.connect('mongodb://127.0.0.1:27017/dynamic', function (err, database) {
    if (err) {
        throw err;
    }
    db = database;
    console.log("successfully connected to the database");
    var server = app.listen(app.get('port'), function () {
        console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
    });

});



/*The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
  db.collection('dynamic').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index', {dynamic: result})
  })
})
/*
app.get('/edit/:id', (req, res) => {
  var id = req.body.id;  
    
    var item = {
    name: req.body.name,
    quote: req.body.quote
    
};

  db.collection('dynamic').findOne({req.param('_id'), function(err, result) {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('edit', {dynamic: result})
  })
})
*/
app.post('/edit/:id', (req, res) => {
    db.collection('dynamic').findOne({id: req.params.id}, function(err, result) {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('edit', {dynamic: result})
  });
});
    
    
app.post('/update', (req, res) => {
  var id = req.body.id;  
    
    var item = {
    name: req.body.name,
    quote: req.body.quote
    
};

  db.collection('dynamic').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
    if (err) return console.log(err)
    // renders index.ejs
    res.redirect('/')
  })
})

app.post('/dynamic', (req, res) => {
    console.log("fuk");
    db.collection('dynamic').save(req.body, function (err, result) {
        if (err) {
            console.log("FUCKING ERROR IS THIS");
            return console.log(err)
        } else {
            console.log('saved to dyn database')
            res.redirect('/')
        }

    })
})
