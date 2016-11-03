var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var userModel = new Schema({
	name: {
		type: String
	},
	email: {type: String},
	budget: {type: Number},
    logs: [{type :  mongoose.Schema.Types.ObjectId, ref: 'Log'}]

	
});
//tells mongoose we have new Schema named Book 
module.exports=mongoose.model('User', userModel);