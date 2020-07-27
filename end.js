const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
const recentScore = localStorage.getItem("recentScore");
const yourScore = document.getElementById("yourScore");
//to get the previous scores
const prevScores = JSON.parse(localStorage.getItem("prevScores")) || [];



yourScore.innerText = "Your score is: " + recentScore + "/100";
username.addEventListener('keyup', () =>{
  
    saveScore.disabled = !username.value;
});

saveYourScore = (e) => {
  
    e.preventDefault();
const score = {
    score: recentScore,
    name: username.value
   
};
prevScores.push(score);
localStorage.setItem("prevScores", JSON.stringify(prevScores));
window.location.assign("index.html");
};


