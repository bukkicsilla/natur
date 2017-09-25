/* GET 'home' page */
module.exports.questionlist = function(req, res){
  res.render('qlist', { 
      title: '100 Questions' ,
      section: {
             title:'100 Questions for the Test',
             subsections:[
                 {
                 desc: 'Government A: Principles of American Democracy 1 - 12'
                 },
                 {
                 desc: 'Government B: System of Goverment 13 - 47'    
                 },
                 {
                 desc: 'Government C: Right and Responsibilities 48 - 57'     
                 },
                 {
                 desc: 'History A: Colonial Period and Independence 58 - 70'
                 },
                 {
                 desc: 'History B: 1800s 71 - 77'
                 },
                 {
                 desc: 'History C: Recent American History 78 - 87'
                 },
                 {
                 desc: 'Civics A: Geography 88 - 95'
                 },
                 {
                 desc: 'Civics B: Symbols 96 - 98'
                 },
                 {
                 desc: 'Civics C: 99 - 100'
                 },
                     ]
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
    },
    {      
        number: '13',
        question: 'Name one branch or part of the government.'
    },
    {
        number: '14',
        question: 'What stops one branch of government from becoming too powerful?'
    },
    {
        number: '15',
        question: 'Who is in charge of the executive branch?'
    },
    {
        number: '16',
        question: 'Who makes federal laws?'
    },
    {
        number: '17',
        question: 'What are the two parts of the U.S. Congress?'
    },
    {
        number: '18',
        question: 'How many U.S. Senators are there?'
    },
    {
        number: '19',
        question: 'We elect a U.S. Senator for how many years?'
    },
    {
        number: '20',
        question: 'Who is one of your state’s U.S. Senators now?'
    },
    {
        number:'21',
        question: 'The House of Representatives has how many voting members?'
    },
    {
        number:'22',
        question: 'We elect a U.S. Representative for how many years?'
    },
    {      
        number: '23',
        question: 'Name your U.S. Representative.'
    },
    {
        number: '24',
        question: 'Who does a U.S. Senator represent?'
    },
    {
        number: '25',
        question: 'Why do some states have more Representatives than other states?'
    },
    {
        number: '26',
        question: 'We elect a President for how many years?'
    },
    {
        number: '27',
        question: 'In what month do we vote for President?'
    },
    {
        number: '28',
        question: 'What is the name of the President of the United States now?'
    },
    {
        number: '29',
        question: 'What is the name of the Vice President of the United States now?'
    },
    {
        number: '30',
        question: 'If the President can no longer serve, who becomes President?'
    }      
      ]
  });
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