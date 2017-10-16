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
router.get('/answer/:questionanswerid', qas.answer);
router.get('/newquestion', qas.formquestion);
router.post('/newquestion', qas.createquestion);
//router.put('update/:questionanswerid', qas.updateAnswerlist);
//router.delete('delete/:questionanswerid', qas.deleteQuestion);
           
module.exports = router;
