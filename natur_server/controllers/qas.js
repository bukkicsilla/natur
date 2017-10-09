var request = require('request');

var apiOps = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  //apiOps.server = "https://getting-mean-loc8r.herokuapp.com";
    apiOps.server = "https://glacial-gorge-23966.herokuapp.com";
}

var renderQas = function(req, res, responseBody){
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
      questions: responseBody
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

/* GET 'Location info' page */
module.exports.answer = function(req, res){
  res.render('answer', {
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
            
            
  });
};