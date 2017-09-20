/* GET 'home' page */
module.exports.questionlist = function(req, res){
  res.render('index', { title: '100 Questions' });
};

/* GET 'Location info' page */
module.exports.answer = function(req, res){
  res.render('index', { title: 'Answer' });
};