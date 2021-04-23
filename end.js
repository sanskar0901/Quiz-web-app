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



  



function saveHighScore() {
    userId=Math.round(Math.random()*1000);
    firebase.database().ref('users/' + userId).set({
      username: username.value,
      score: finalScore.innerHTML,
      
    });
  };
  function goData(){
    firebase.database().ref('users/').once("value",function(snapshot){
      snapshot.forEach(
        function(childsnapshot){
          let name = childsnapshot.val().username;
          let score = childsnapshot.val().score;
          console.log(name , score)
        }
      );
       
    });
    }
    goData();