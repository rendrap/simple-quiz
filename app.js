var quiz = new Quiz();

var question1 = new Question("What is the capital of Indonesia", "Jakarta", "Bali");
var question2 = new Question("What is the capital of England", "London", "Washington DC");


quiz.add(question1);
quiz.add(question2);

var quizElement = document.getElementById("question");

question.renderIn(quizElement);

var guess0Button = document.getElementById("guess0");
var guess1Button = document.getElementById("guess1");

playButton.onclick = function() {
  playlist.play();
  playlist.renderIn(playlistElement);
};
