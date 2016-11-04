var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CountrySchema   = new Schema({
	name: String,
	captial : String,
	national_lang : String,
	national_sport : String
});

module.exports = mongoose.model('Country', CountrySchema);