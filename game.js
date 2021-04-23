const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
const time=document.getElementById("count")
let score = 0;
let questionCounter = 0;
let avalableQuestions =[];
let questions=[
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "script",
        choice2: "javascript",
        choice3: "js",
        choice4: "scripting",
        answer: 1
      },
      {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "script href='xxx.js",
        choice2: "script name='xxx.js",
        choice3: "script src='xxx.js",
        choice4: "script file='xxx.js",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
      }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () =>{     
     questionCounter = 0;
     score = 0;
     avalableQuestions = [...questions];
     getNewQuestion();
     
};
getNewQuestion = () =>{
  if (avalableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    //go to the end page
    return window.location.assign('/end.html');
}
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
   
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    const questionIndex = Math.floor(Math.random()* avalableQuestions.length);
    currentQuestion = avalableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach((choice) => {
      const number = choice.dataset['number'];
      choice.innerHTML = currentQuestion['choice' + number];
  });

  avalableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};


choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers ) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct' ) {
            incrementScore(CORRECT_BONUS);
            counter=11
        }
        else{
          counter=11
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});


incrementScore = (num) => {
    
    score += num;
    scoreText.innerText = score;
};
startGame();

var counter = 10;
setInterval(function(){
  counter--;
  if (counter>=0){
    
    time.innerHTML=counter;
  }
},1000);

setInterval(function() {
if(counter==0){
  counter=11;
  getNewQuestion();
}
},1000);

