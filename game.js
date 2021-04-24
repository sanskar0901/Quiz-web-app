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
  },
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    choice1: "largest railway station",
    choice2: "highest railway station",
    choice3: "longest railway station",
    choice4: "None",
    answer: 1
  },
  {
    question: "Entomology is the science that studies",
    choice1: "Behavior of human beings",
    choice2: "Insects",
    choice3: "The origin and history of technical and scientific terms",
    choice4: "The formation of rocks",
    answer: 2
  },

  {
   question : "Which car manufacturer was the first to win 100 F1 races?",
   choice1 : "Ferrari",
   choice2 : "Nissan",
   choice3 : "Ford",
   choice4 : "None",
   answer : 1
  },
    {
      question : "In the professional era which woman has won the most titles at Wimbledon [singles, doubles and mixed] ?",
      choice1 : "Venus",
      choice2 : "Hingis",
      choice3 : "Martina Navratilova",
      choice4 : "Waynetta",
      answer : 3
      },
      {
        question : "How many times have Liverpool been relegated from the top flight of English football?",
        choice1 : "Four",
        choice2 : "Three",
        choice3 : "Two",
        choice4 : "Five",
        answer : 2
      },
      {
        question: " Which one is correct team name in NBA?",
        choice1: "New York Bulls",
        choice2: "Los Angeles Kings",
        choice3: "Golden State Warriros",
        choice4: "Huston Rocket",
        answer: 4
      },
      {
        question: "5 + 7 = ?",
        choice1: "10",
        choice2: "11",
        choice3: "12",
        choice4: "13",
        answer: 3
      },
      {
        question: "12 * 8 = ?",
        choice1: "96",
        choice2: "90",
        choice3: "72",
        choice4: "86",
        answer: 1
      },
      {
        question: "120 * 80 = ?",
        choice1: "9600",
        choice2: "2000",
        choice3: "1900",
        choice4: "4800",
        answer: 1
      }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

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
        var choices = 'choice' 
        document.getElementById(choices+currentQuestion.answer).parentElement.classList.add('correct');
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            document.getElementById(choices+currentQuestion.answer).parentElement.classList.remove('correct');
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

