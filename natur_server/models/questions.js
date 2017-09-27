var mongoose = require( 'mongoose' );

var answerSchema = new mongoose.Schema({
  answer: {type: String, required: true}
});

var questionSchema = new mongoose.Schema({
    number: {type: Number, min: 1, max: 100},
    question: { type: String, required: true},
    answers: [answerSchema]
});

mongoose.model('QuestionAnswer', questionSchema);