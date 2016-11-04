var express = require('express');
var router = express.Router();

//route for app feedback page
router.get('/feedback', function(req, res) {


  res.render('feedback', {
    pageTitle: 'Feedback',    
    pageID: 'feedback'
  });

});

module.exports = router;
