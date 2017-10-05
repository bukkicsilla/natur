var express = require('express');
var router = express.Router();
var questionanswers = require('../controllers/questionanswers');

//questions and answers
router.get('/questionanswers', questionanswers.questionsAll);
//router.post('/questionanswers', questionanswers.questionanswerCreate);
router.get('/questionanswers/:questionanswerid', questionanswers.showAnswer);
//router.put('/questionanswers/:questionanswerid', questionanswers.changeQuestionAnswer);
//router.delete('/questionanswers/:questionanswerid', questionanswers.removeQuestionAnswer);

module.exports = router;
