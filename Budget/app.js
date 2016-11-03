var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/recipeAPI');

var Recipe = require('./models/recipeModel');
var User = require('./models/userModel');
var Log = require('./models/logModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//executes recipeRouter function, pass in Recipe model
recipeRouter = require('./routes/recipeRoutes')(Recipe);
userRouter = require('./routes/userRoutes')(User);
logRouter = require('./routes/logRoutes')(Log);

app.use('/api/users', userRouter);
app.use('/api/logs', logRouter);
app.use('/api/recipes', recipeRouter);


app.get ('/', function(req, res){
		res.send("welcome to this api of mine");
		
});

app.listen(port, function(){
	console.log(' eek Running on PORT: ' + port);
});