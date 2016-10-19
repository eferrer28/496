var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/recipeApi');

var Recipe = require('./models/recipeModel');


var app = express();

var port = process.env.PORT || 3000;

var recipeRouter = express.Router();

recipeRouter.route('/recipe')
	.get(function(req, res){
		Recipe.find(function(err, recipes){
			if(err)
				cconsole.log(err)
			else
				res.json(recipes);
		}
		
		res.json(responseJson);
		});

app.use('/api', recipeRouter);



app.get ('/', function(req, res){
		res.send("welcome to recipes, bitch");
		
});

app.listen(port, function(){
	console.log('gulp eek Running on PORT: ' + port);
});