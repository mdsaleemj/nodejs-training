var express    = require('express');
var Country     = require('../models/country');
var controller = require('../controllers/country');

var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'welcome to our country api!' });	
});

router.post('/country',controller.createCountry);
router.get('/country',controller.getCountries);
router.put('/country/:country_id',controller.updateCountry);
router.delete('/country/:country_id',controller.deleteCountry);

	
module.exports = router;