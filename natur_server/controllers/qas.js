/* GET 'home' page */
module.exports.questionlist = function(req, res){
  res.render('qlist', { 
      title: '100 Questions' ,
      section: {
             title:'American Government',
             subsection: 'A: Principles of American Democracy'
             },
      questions: [
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
    },
      {
          number: '4',
          question: 'What is an amendment?'
      },
    {
        number: '5',
        question: 'What do we call the first ten amendments to the Constitution?'
    },
    {
       number: '6',
        question: 'What is one right or freedom from the First Amendment?'
    },
    {
        number:'7',
        question: 'How many amendments does the Constitution have?'
    },
    {
        number:'8',
        question: 'What did the Declaration of Independence do?'
    },
    {
        number:'9',
        question: 'What are two rights in the Declaration of Independence?'
    },
    {
        number:'10',
        question: 'What is freedom of religion?'
    },
    {
        number:'11',
        question: 'What is the economic system in the United States?'
    },
    {
        number:'12',
        question: 'What is the “rule of law”?'
    }      
      ]
  });
};

/* GET 'Location info' page */
module.exports.answer = function(req, res){
  res.render('answer', { title: 'Answer' });
};