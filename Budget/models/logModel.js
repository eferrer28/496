var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var logModel = new Schema({
	foodName: {
		type: String
	},
	price: {type: Number},
	budgetFriendly: {type: Boolean},
    paleo: {type: Boolean},
    recipe: [{type :  mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
	
});
//tells mongoose we have new Schema named Book 
module.exports=mongoose.model('Log', logModel);