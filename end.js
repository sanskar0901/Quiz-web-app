const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;


var firebaseConfig = {
    apiKey: "AIzaSyAhwVvivJOzbVqK9_7knwMXVPZ3qHWVirI",
    authDomain: "quiz-webapp-20ee6.firebaseapp.com",
    projectId: "quiz-webapp-20ee6",
    storageBucket: "quiz-webapp-20ee6.appspot.com",
    messagingSenderId: "911758030461",
    appId: "1:911758030461:web:b7ac0a78b96ed9ce386314",
    measurementId: "G-PELQ41BQ2S"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log(username.value);
  console.log(finalScore.innerHTML);



  

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
//     console.log(username.value)
// });

function saveHighScore() {
    userId=Math.round(Math.random()*1000);
    firebase.database().ref('users/' + userId).set({
      username1: username.value,
      score: finalScore.innerHTML,
      
    });
  }
// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value,
//     };
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(5);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// };