const prev_score_list = document.getElementById("prev-score-list");
const prevScores = JSON.parse(localStorage.getItem("prevScores")) || [];

prev_score_list.innerHTML =
prevScores.map( score => {
    return `<li class="prev-scores">${score.name} - ${score.score}</li>`;
})
.join("");
