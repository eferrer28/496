var mongoose = require('mongoose'),
	Schema = mongoose.Schema();
	
var recipeModel = new Schema({
	name: {
		type: String
	},
	ingredients: {type: String},
	url: {type: String}
	
});
//tells mongoose we have new Schema named Book 
module.exports=mongoose.model('Recipe', recipeModel);