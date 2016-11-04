var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');

//route for app feedback page
router.get('/api', function(req, res) {
res.json(feedbackData);

});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res){
  feedbackData.unshift(req.body);
  res.json(feedbackData);
});

module.exports = router;
