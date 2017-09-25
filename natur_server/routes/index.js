var express = require('express');
var router = express.Router();
//var main = require('../controllers/main');
var qas = require('../controllers/qas');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var homepageController = function (req, res) {
   res.render('index', {title: 'Welcome to Test!'})  
};
//router.get('/', homepageController);
//router.get('/', main.index);
router.get('/', qas.questionlist);
router.get('/answer', qas.answer);
           
module.exports = router;
