var Country     = require('../models/country');

module.exports = {
  createCountry : createCountry,
  getCountries : getCountries,
  updateCountry : updateCountry,
  deleteCountry :deleteCountry
}

function createCountry(req,res,next){
	  console.log("###### POST : COUNTRIES");  
		console.log(req.body);
		// create a new instance of the country model
		var country = new Country();		

		country.name = req.body.name;
		country.capital = req.body.captial
		country.national_lang =req.body.national_lang;
		country.national_sport = req.body.national_sport;
     
		// country.save(function(err,doc) {
		// 	if (err)
		// 	res.send(err);
            
		// 	res.json({ message: 'Country Saved!' });
		// });
        country
        .save()
        .then(function(country){
          res.json({ message: 'Country Saved!' });
        }).catch(function(err){
		   res.send(err);
        })

}

function getCountries(req,res,next){
	console.log("###### GET : COUNTRIES");
	// Country.find(function(err, countries) {
	// 		if (err)
	// 			res.send(err);

	// 		res.json(countries);
	// 	});
      //promise version of code
     Country
     .find()
     .exec()
     .then(function(countries){
     	res.json(countries)
     }).catch(function(err){
     	res.send(err);
     })
     

}

function updateCountry(req,res,next){
	Country.findById(req.params.country_id, function(err, country) {
		if (err){
			return res.send(err);
		}
		country.name = req.body.name;
		country.capital = req.body.captial
		country.national_lang =req.body.national_lang;
		country.national_sport = req.body.national_sport;
		country.save(function(err) { 
			if (err)
				res.send(err);

			  res.json({ message: 'Country updated!' });
		});

	});

}

function deleteCountry(req,res,next){
	console.log("###### DELETE : COUNTRIES");
	Country.remove({
			_id: req.params.country_id
		}, function(err, country) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});

}