var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/recipeAPI');

var Recipe = require('./models/recipeModel');


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//executes recipeRouter function, pass in Recipe model
recipeRouter = require('./routes/recipeRoutes')(Recipe);


app.use('/api/recipes', recipeRouter);


app.get ('/', function(req, res){
		res.send("welcome to recipes, bitch");
		
});

app.listen(port, function(){
	console.log('gulp eek Running on PORT: ' + port);
});