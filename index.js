const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const correct_bonus = 5;
const total_questions = 20;
const progress_text = document.getElementById("progress-text");
const scoreText = document.getElementById("score");
const progress_Bar_content = document.getElementById("progress-Bar-content");
const label = document.getElementById("label");


let currentQuestion = {};
let answered = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];

const Questions = [
    {
        Question: "In Nigeria, democracy day is now celebrated on --",
        Option1: "May 27",
        Option2: "May 29",
        Option3: "June 12",
        Option4: "October 1",
        Answer: 3
    },

    {
        Question: "Who is Nigeria's current speaker of house of representatives?",
        Option1: "Ahmed Lawal",
        Option2: "Omo Agege",
        Option3: "Adamu Adamu",
        Option4: "Femi Gbajabiamila",
        Answer: 4
    },

    {
        Question: "Who was the first president of Nigeria?",
        Option1: "Dr. Nnamdi Azikiwe",
        Option2: "Fredrick Lord Lugard",
        Option3: "Herbert Macauley",
        Option4: "Alhaji Shehu Shagari",
        Answer: 1
    },
    {
        Question: "Who is the current governor of central bank of Nigeria?",
        Option1: "Godwin Obaseki",
        Option2: "Mahmood Yakubu",
        Option3: "Godwin Emefiele",
        Option4: "Muhamedu Buhari",
        Answer: 3
    },
    {
        Question: "What country does Nigeria shares border with, in the west?",
        Option1: "Republic of Niger",
        Option2: "Rebublic of Benin",
        Option3: "Republic of Cameroun",
        Option4: "Chad Republic",
        Answer: 2
    },
    {
        Question: "Who was the first governor-general of colonial Nigeria?",
        Option1: "Lugard",
        Option2: "Clifford",
        Option3: "Richard",
        Option4: "Macpherson",
        Answer: 1
    },
    {
        Question: "How many local government areas are in Nigeria?",
        Option1: "724",
        Option2: "360",
        Option3: "36",
        Option4: "774",
        Answer: 4
    },
    {
        Question: "Which state has the highest number of local government in Nigeria?",
        Option1: "Kaduna",
        Option2: "Katsina",
        Option3: "Kano",
        Option4: "Lagos",
        Answer: 3
    },
    {
        Question: "How many states where created by general Yakubu Gowon in 1967?",
        Option1: "9",
        Option2: "12",
        Option3: "7",
        Option4: "19",
        Answer: 2
    },
    {
        Question: "Who was the first executive president of Nigeria?",
        Option1: "Alhaji Shehu Shagari",
        Option2: "Olusegun Obasanjo",
        Option3: "Herbert Macauley",
        Option4: "Ahmadu Bello",
        Answer: 1
    },
    {
        Question: "When did the Nigerian Civil War begin?",
        Option1: "July 6, 1965",
        Option2: "July 6, 1966",
        Option3: "July 6, 1967",
        Option4: "July 6, 1968",
        Answer: 3
    },
    {
        Question: "How many continents are there in the world?",
        Option1: "4",
        Option2: "3",
        Option3: "6",
        Option4: "7",
        Answer: 4
    },
    {
        Question: "What state is the Kainji Dam located in Nigeria?",
        Option1: "Niger State",
        Option2: "Kwara State",
        Option3: "Sokoto State",
        Option4: "Kaduna State",
        Answer: 1
    },
    {
        Question: "Which of Nigeria's past president is also known as ambassador for peace?",
        Option1: "Olusegun Obasanjo",
        Option2: "Shehu Shagari",
        Option3: "Goodluck Jonathan",
        Option4: "Ibrahim Babangida",
        Answer: 3
    },
    {
        Question: "What was the first capital city of Nigeria?",
        Option1: "Lagos",
        Option2: "Calabar",
        Option3: "Kano",
        Option4: "Enugu",
        Answer: 2
    },
    {
        Question: "How many geo-political zones are there in Nigeria?",
        Option1: "3",
        Option2: "6",
        Option3: "36",
        Option4: "4",
        Answer: 2
    },
    {
        Question: "What does the white color in the Nigeria flag stand for?",
        Option1: "Peace",
        Option2: "Strength",
        Option3: "Dignity",
        Option4: "Unity",
        Answer: 1
    },
    {
        Question: "What is the premier university in Nigeria?",
        Option1: "University Of Nigeria",
        Option2: "University of Ibadan",
        Option3: "University of Lagos",
        Option4: "Ahmadu Bello University",
        Answer: 2
    },
    {
        Question: "The largest continent in the world is --",
        Option1: "Asia",
        Option2: "Africa",
        Option3: "North America",
        Option4: "Europe",
        Answer: 1
    },
    {
        Question: "What is centenary?",
        Option1: "10 years",
        Option2: "100 years",
        Option3: "1000 years",
        Option4: "10000 years",
        Answer: 2
    }
];

// start the quiz

startQuiz = () => {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...Questions];
    nextQuestion();
};

nextQuestion = () => {
    if(availableQuestions.length === 0 || questionNumber > total_questions) {
        localStorage.setItem("recentScore", score);
        //go to end page
        return window.location.assign("end.html");
    }
    questionNumber++;
    //for the progress text
    progress_text.innerText = `Question ${questionNumber} of ${total_questions}`;
    //for the progress bar
    progress_Bar_content.style.width = `${(questionNumber/total_questions) * 100}%`;
    label.innerText = parseInt(`${(questionNumber/total_questions) * 100}`) + '%';
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.Question;
    //manipulate to get the options
    options.forEach( option =>{
        const number = option.dataset['number'];
        option.innerText = currentQuestion['Option' + number];

    });
    //remove the answered question
    availableQuestions.splice(questionIndex, 1);
    answered = true;
};
options.forEach( option => {
    option.addEventListener('click', b => {
        if(!answered) return;
        answered = false;
        const optionSelected = b.target;
        const optionAnswered = optionSelected.dataset['number'];
        /* const doSomething = "incorrect";
        if(optionAnswered==correctQuestion.Answer) {
            doSomething = "correct";
        }  but i used ternary operator below*/
        const doSomething = optionAnswered == currentQuestion.Answer? "correct": "incorrect";
        if(doSomething === "correct") {
            scoreIncreases(correct_bonus);
            clapForMe();
        }
        if(doSomething !== "correct") {
            makeNoise();
        }
        //apply the class of selecetedOption
        optionSelected.parentElement.classList.add(doSomething);
        setTimeout( () => {
            optionSelected.parentElement.classList.remove(doSomething);
            nextQuestion();

        }, 1000);
    });
});
 scoreIncreases = val => {
     score += val;
     scoreText.innerText = score
 }
 clapForMe = () => {
    let myClap = new Audio('soundsys/correct.mp3');
    myClap.play();
}
makeNoise = () => {
    let myClap = new Audio('soundsys/badclick.mp3');
    myClap.play();
}
startQuiz();
