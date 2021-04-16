const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question:"What degree is Estefanía currently pursuing?",
        answers: {
            a: "Master by coursework",
            b: "Master of philosophy",
            c: "Doctor of philosophy",
            d: "Doctor of creative industries",
        },
        correctAnswer: "b"
    },
    {
        question:"What is Estefanía's research project about?",
        answers: {
            a: "Film and television",
            b: "Sound recording",
            c: "Subjectivity in sound design assessment",
            d: " Teacher education",
        },
        correctAnswer: "c"
    },
    {
        question: "Estefanía's interpersonal skills include:",
        answers: {
            a: "Responsibility",
            b: "Organization",
            c: "Teamwork",
            d: "All of the above",
        },
        correctAnswer: "d"
    },
    {
        question: "Estefanía graduated from:",
        answers: {
            a: "Pontificia Universidad Javeriana",
            b: "Queensland University of Technology",
            c: "University of Queensland",
            d: "National University of Colombia",
        },
        correctAnswer: "a"
    },
];
function buildQuiz() {
    // variable to store the HTML output
const output = [];
for(i=0; i<quizQuestions.length; i++){
    // variable to store the list of possible answers
    const answers = [];
    // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){
    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
    }
    // add this question and its answers to the output
output.push(
    '<div class="question">' + quizQuestions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    );
}
   // combine our output list into one string of HTML and put it on the page
   quizContainer.innerHTML = output.join('');
}
function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;
    // for each question...
for(i=0; i<quizQuestions.length; i++){
    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    // if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
    // color the answers green
    answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
      else{
      // color the answers red
          answerContainers[i].style.color = 'red';
      }
  }
  if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
        }
if (numCorrect === 1) { 
    resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
          }
if (numCorrect === 2) {     
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
          }
if (numCorrect === 3) {     
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Estefanía pretty well!"; 
          }
if (numCorrect === 4) {     
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Estefanía so well!";
          }      
}
//load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
  }