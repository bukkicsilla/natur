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

router.get('/newanswer/:questionanswerid', qas.formanswer);
//router.put('/answer/:questionanswerid/new', qas.updateanswerlist);

router.get('/deletequestion/:questionanswerid', qas.deletequestion);
//router.delete('/questiondelete/:questionanswerid/', qas.deleteqas);

module.exports = router;
