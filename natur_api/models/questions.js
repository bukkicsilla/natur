var mongoose = require( 'mongoose' );

var answerSchema = new mongoose.Schema({
  answer: {type: String, required: true}
});

var questionSchema = new mongoose.Schema({
    number: {type: Number, min: 1, max: 1000000, required: true},
    question: { type: String, required: true},
    answers: [answerSchema]
});

mongoose.model('Questionanswer', questionSchema);

//put in consol mongo shell 
/*
db.questionanswers.save({
    number: 1,
    question: 'What is the supreme law of the land?'
})

db.questionanswers.update({
    number: 1
}, {
    $push: {
        answers: {
        answer: '* the Constitution'
        }
    }
})

**********************************************************

db.questionanswers.save({
    number: 2,
    question: 'What does the Constitution do?'
})

db.questionanswers.update({
    number: 2
}, {
    $push: {
        answers: {
            $each: [{
                asnwer: '* sets up the government'
            },
               {
               answer: '* defines the government'
               },
               {
               answer: '* protects basic rights of Americans'
               }
            ]
        }
    }
})
db.questionanswers.save({
    number: 3,
    question: 'The idea of self-government is in the first three words of the Constitution. What are these words?'
})

db.questionanswers.update({
    number: 3
}, {
    $push: {
        answers: {
        answer: '* We the People'
        }
    }
})

*/