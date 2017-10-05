var mongoose = require('mongoose');
var Qas = mongoose.model('Questionanswer');

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.questionsAll = function (req, res) {
    Qas.find({}, function(err, docs){
        if (!err){
            //console.log(docs[0].answer);
            sendJsonResponse(res, 200, docs);
            //process.exit();
        } else {throw err;}
        
    });
    //sendJsonResponse(res, 200, {"status" : "success"});
}



module.exports.showAnswer = function (req, res) {
    if (req.params && req.params.questionanswerid){
      Qas.findById(req.params.questionanswerid)
         .exec(function(err, questionanswer){
          if (!questionanswer){
              sendJsonResponse(res, 404, {
                  "message": "id not found"
              });
              return;
          } else if(err){
              sendJsonResponse(res, 404, err);
              return;
          }
          
          sendJsonResponse(res, 200, questionanswer);
      });
    } else {
        sendJsonResponse(res, 404, {
            "message": "no id in request"
        });
    }
    //sendJsonResponse(res, 200, {"status" : "success"});
};
//test http://localhost:3000/api/questionanswers/59cd4ffad9642e736bcb93c9