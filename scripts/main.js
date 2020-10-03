//All questions
const quizData = [
    {
        question: "Which year the Internet was created ?",
        a: "2000",
        b: "1955",
        c: "1969",
        d: "1990",
        correct: "c"
    },
    {
        question: "What is the most used programming language in 2019",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "Who is the stronggest?",
        a: "Madara",
        b: "Otsutsuki",
        c: "Sasuke",
        d: "Naruto",
        correct: "b"
    }, 
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation" ,
        d: "Application Programming Interface",
        correct: "a"
    }
];

//Id of the current question
let currentQuiz = 0;
let answer = undefined;
let score = 0;


//All the elements
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
//Radio Button
const answersEls = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");

loadQuiz();

//Load the questions
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};

//Refresh the selected answers
function deselectAnswers() {
    answersEls.forEach((answersEl) => {
        answersEl.checked = false;
    });
}

//Check if the answer was selected, score and winning
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if(answer) {
        //Check if the answer is correct   
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        //Go to next question
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
                      
        }else {
            quiz.innerHTML = ` <h2> You answeres correcttly at ${score}/${quizData.length} questions. </h2> <br> <button onClick="location.reload()">Reload</button>`;
        }
    }
});

//Check if selected answer is checked
function getSelected() {

    let answer = undefined;

    answersEls.forEach((answersEl) => {
        // id="a,b,c,d"
        if(answersEl.checked) {
            answer = answersEl.id;
        }
    });

    return answer;
}

