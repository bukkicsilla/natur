var express = require('express');
var router = express.Router();
var questionanswers = require('../controllers/questionanswers');

//questions and answers
router.get('/questionanswers', questionanswers.questionsAll);
router.post('/questionanswers', questionanswers.questionanswersCreate);
router.get('/questionanswers/:questionanswerid', questionanswers.showAnswer);
router.put('/questionanswers/:questionanswerid', questionanswers.questionanswersUpdate);
router.delete('/questionanswers/:questionanswerid', questionanswers.questionanswersDelete);

module.exports = router;
