var request = require('request');

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

var apiOps = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  //apiOps.server = "https://getting-mean-loc8r.herokuapp.com";
    apiOps.server = "https://glacial-gorge-23966.herokuapp.com";
}

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};

var renderQas = function(req, res, responseBody){
    var msg;
    //shuffle(responseBody);
    
    if (!(responseBody instanceof Array)){
        msg = "api lookup error";
        responseBody = [];
    } else {
        if(!responseBody.length){
            msg = "no question found";
        }
    }
    res.render('qlist', {
        title: '100 Questions',
        section: {
             title:'100 Questions for the Test',
             subsections:[
                 {
                 desc: 'Government AA: Principles of American Democracy 1 - 12'
                 },
                 {
                 desc: 'Government BB: System of Goverment 13 - 47'    
                 }
                ]
                 },
      questions: responseBody,
      message: msg
        /*questions: [
      {
          number: '1',
          question: 'What is the supreme law of the land?'
      },
    {
        number: '2',
        question: 'What does the Constitution do?'
    },
    {
       number: '3',
        question: 'The idea of self-government is in the first three words of the Constitution. What are these words?'
    }   
      ]*/
        
  
    });
}

/* GET 'home' page */
module.exports.questionlist = function(req, res){
    var requestOps, path;
    path = '/api/questionanswers';
    requestOps = {
       url: apiOps.server + path,
       method:"GET",
        json: {},
        qs: {}
        };
    request(requestOps, function(err, response, body){
        renderQas(req, res, body);
    })
    
  
};
 
/***************************************************************************************************/

var renderAnswer = function(req, res, resAns){
    res.render('answer', {
         title: 'Answer',
            pageHeader: { title: resAns.question },
            answers: resAns.answers,
            question: resAns,
            number: resAns.number
            /*answers: [
                {
                  answer: 'first answer'    
                },
                {
                    answer: 'second answer'
                },
                {
                    answer: 'third answer'
                }
            ]*/
            
            
  });
}
/* GET 'Answer' page */
module.exports.answer = function(req, res){
    console.log("start");
    var requestOps, path;
    path = "/api/questionanswers/" + req.params.questionanswerid;
    console.log("path answer " + path);
    requestOps = {
        url: apiOps.server + path,
        method: "GET",
        json: {}
    };
    request(requestOps, 
           function(err, response, body){
            console.log("body "+ body.question);
            if (response.statusCode === 200){
               renderAnswer(req, res, body);   
            } else  {
                var title, content;
                if (response.statusCode === 404){
                    title = "404, page not found";
                    content = "Try with a different id, page not found.";
                } else {
                    title = response.statusCode + ", sorry";
                    content = "something went wrong";
                }
                
           res.status(response.statusCode);
           res.render('generic-text', {
               title: title,
               content: content
           });    
         }//else
        }
           );
    //renderAnswer(req, res);
  /*res.render('answer', {
         title: 'Answer',
            pageHeader: { title: 'First Question' },
            answers: [
                {
                  answer: 'first answer'    
                },
                {
                    answer: 'second answer'
                },
                {
                    answer: 'third answer'
                }
            ]
            
            
  });*/
};

/*************************************************************************************************/

var renderCreateForm = function (req, res) {
  res.render('createquestion', {
    title: 'Create Question',
    pageHeader: { title: 'Create Question'},
    error: req.query.err
  });
};

module.exports.formquestion = function(req, res){
  /*res.render('createquestion', {
        title: '',
        pageHeader: {
            title: 'Create Question'
        }
    });*/
    renderCreateForm(req, res);
}

module.exports.createquestion = function(req, res){
    var requestOps, path, postdata;
  
  path = "/api/questionanswers";
  
    //console.log("answer ", req.body.answer);
    /*var ans = [];
    ans.push(req.body.answers);
    console.log("answers ", ans);*/
    
  postdata = {
    question: req.body.question,
    number: parseInt(req.body.number, 10),
    //answers: new Array(req.body.answer)
  };
    //console.log("********** ", postdata.answers);
    requestOps = {
    url : apiOps.server + path,
    method : "POST",
    json : postdata
  };
  if (!postdata.number || !postdata.question) {
      console.log("empry string");
    res.redirect('/newquestion/');
  } else {
    request(
      requestOps,
      function(err, response, body) {
        if (response.statusCode === 201) {
          res.redirect('/');
        } else if (response.statusCode === 400 && body.question && body.question === "ValidationError" ) {
          res.redirect('/newquestion/');
        } else {
          console.log(body);
          //_showError(req, res, response.statusCode);
        res.status(response.statusCode);
        res.render('generic-text', {
           title : 'You used a wrong number, try again please!',
           content : 'number is unique and positive'
  });
        }
      }
    );
  }  
};

/*****************************************************************************************************************/

/*module.exports.formanswer = function(req, res){
    res.render('updatequestion', {
    title: 'Update Question',
    pageHeader: { title: 'Update Question'},
    error: req.query.err
  });
}*/

var renderCreateFormAnswer = function (req, res) {
  res.render('createanswer', {
    title: 'Create Answer',
    pageHeader: { title: 'Create Answer'},
    error: req.query.err
  });
};

module.exports.formanswer = function(req, res){
  /*res.render('createquestion', {
        title: '',
        pageHeader: {
            title: 'Create Question'
        }
    });*/
    renderCreateFormAnswer(req, res);
}

module.exports.updateanswerlist = function(req, res){
    var requestOps, path, questionid, postdata;
    qasid = req.params.questionanswerid;
    console.log("id :::" + qasid);
    
  path = "/api/questionanswers/" + req.params.questionanswerid;
  
  postdata = {
    //answers: req.body.answer
    //answers: new Array(req.body.answer)
      answers: [{"answer": req.body.answer}]
  };
    console.log("new answer ", postdata.answers);
    requestOps = {
    url : apiOps.server + path,
    method : "PUT",
    json : postdata
  };
   if (!postdata.answers) {
      console.log("empry string");
    res.redirect('/');
  } else {
    request(
      requestOps,
      function(err, response, body) {
        if (response.statusCode === 200) {
          res.redirect('/answer/'+qasid);
        } else if (response.statusCode === 400 && body.ansers && body.answers === "ValidationError" ) {
          res.redirect('/newquestion/');
        } else {
          console.log(body);
          //_showError(req, res, response.statusCode);
        res.status(response.statusCode);
        res.render('generic-text', {
           title : 'error',
           content : 'number is positive'
  });
        }
      }
    );
  } //else 
};


var renderCreateFormAnswer = function (req, res) {
  res.render('createanswer', {
    title: 'Create Answer',
    pageHeader: { title: 'Create Answer'},
    error: req.query.err
  });
};
/*************************************************************************/

module.exports.formanswerreplace = function(req, res){
  /*res.render('createquestion', {
        title: '',
        pageHeader: {
            title: 'Create Question'
        }
    });*/
    renderCreateFormAnswer(req, res);
}

module.exports.replaceanswerlist = function(req, res){
    var requestOps, path, questionid, postdata;
    qasid = req.params.questionanswerid;
    console.log("id :::" + qasid);
    
  path = "/api/questionanswers/" + req.params.questionanswerid;
  
  postdata = {
    //answers: req.body.answer
    //answers: new Array(req.body.answer)
      answers: [{"answer": req.body.answer}]
  };
    console.log("replace answer ", postdata.answers);
    requestOps = {
    url : apiOps.server + path,
    method : "PATCH",
    json : postdata
  };
   if (!postdata.answers) {
      console.log("empry string");
    res.redirect('/');
  } else {
    request(
      requestOps,
      function(err, response, body) {
        if (response.statusCode === 200) {
          res.redirect('/answer/'+qasid);
        } else if (response.statusCode === 400 && body.ansers && body.answers === "ValidationError" ) {
          res.redirect('/newquestion/');
        } else {
          console.log(body);
          //_showError(req, res, response.statusCode);
        res.status(response.statusCode);
        res.render('generic-text', {
           title : 'error',
           content : 'number is positive'
  });
        }
      }
    );
  } //else 
};

/*******************************************************************************************************************/


var deleteqas = function(req, res){
    console.log("delete question");
    var requestOps, path;
    path = "/api/questionanswers/" + req.params.questionanswerid;
    console.log("path in delete " + path);
    requestOps = {
        url: apiOps.server + path,
        method: "DELETE",
        json: {}
    };
    request(requestOps, 
           function(err, response, body){
            //console.log("number " + req.body.number);
            if (response.statusCode === 204){
                res.redirect('/');
            } else  {
                var title, content;
                if (response.statusCode === 404){
                    title = "404, page not found";
                    content = "Try with a different id, page not found.";
                } else {
                    title = response.statusCode + ", sorry";
                    content = "something went wrong";
                }
                
           res.status(response.statusCode);
           res.render('generic-text', {
               title: title,
               content: content
           });    
         }//else
        }
           );
    
};

module.exports.deletequestion = function(req, res){
    console.log("delete");
    deleteqas(req, res );
    //res.redirect('/');
    
};