const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

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

function addItem(name,score){
    
   
    var table =document.getElementById('table')
    var a = document.createElement('tr');
    var  b = document.createElement('td');
    var  c = document.createElement('td');
    a.appendChild(b)
    a.appendChild(c)
    
    b.innerHTML=name;
    c.innerHTML=score

    table.appendChild(a);
}
 
    
function goData(){
    firebase.database().ref('users').once("value",function(snapshot){
        snapshot.forEach(
        function(childsnapshot){
            let name = childsnapshot.val().username;
            let score = childsnapshot.val().score;
            
            addItem(name,score)
        }
        );
        
    });
    }
        
    


// highScoresList.innerHTML = highScores
//   .map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join("");
  goData();