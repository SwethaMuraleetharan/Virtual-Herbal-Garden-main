const quizData = [
    { question: "1) Which nutrient is most abundant in Moringa?", a: "Vitamin D", b: "Vitamin C", c: "Vitamin B12", d: "Omega-3", correct: "b" },
    { question: "2) What is the primary benefit of tulsi(Holy Basil)?", a: "promotes joint health", b: "Boosts immunity", c: "improves vision", d: "enhances muscle strength", correct: "b" },
    { question: "3) Which herb is known for curcumin content?", a: "Ashwagandha", b: "Turmeric", c: "Fenugreek", d: "Hibiscus", correct: "b" },
    { question: "4) Which of these herbs are traditionally used for better respiratory health?", a: "Neem", b: "Mint", c: "Curry Leaves", d: "Moringa", correct: "b" },
    { question: "5) Fenugreek is especially beneficial for which of the following?", a: "Boosting energy levels", b: "Regulating blood sugar", c: "Enhancing brain function", d: "Reducing stress", correct: "b" },
    { question: "6) Which herb is rich in antioxidants and known to lower blood pressure?", a: "Hibiscus", b: "Ashwagandha", c: "Amla", d: "Basil", correct: "a" },
    { question: "7) Curry leaves are particularly rich in which nutrient?", a: "Omega-3", b: "Vitamin B12", c: "Iron", d: "Protein", correct: "c" },
    { question: "8) Which herb helps balance hormones and reduce stress?", a: "Fenugreek", b: "Turmeric", c: "Ashwagandha", d: "Mint", correct: "c" },
    { question: "9) Which herb is known for its antibacterial and anti-inflammatory properties, benefiting the skin?", a: "Neem", b: "Basil", c: "Hibiscus", d: "Moringa", correct: "a" },
    { question: "10) Which herb is commonly associated with promoting healthy hair growth?", a: "Fenugreek", b: "Curry leaves", c: "Tulsi", d: "Amla", correct: "b" },
    { question: "11) What is a primary health benefit of turmeric?", a: "Reducing pigmentation", b: "Boosting respiratory function", c: "Regulating blood sugar levels", d: "Enhancing vision", correct: "c" },
    { question: "12) Which herb is most effective for aiding digestion and relieving nausea?", a: "Mint", b: "Fenugreek", c: "Neem", d: "Ashwagandha", correct: "a" },
    { question: "13) What does Amla primarily support due to its high vitamin C content?", a: "Heart health", b: "Immune system", c: "Bone density", d: "Vision clarity", correct: "b" },
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const answersEls = document.querySelectorAll('.answer');
const progressBar = document.getElementById('progressBar'); // Progress bar
const backButton = document.getElementById('backButton');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    updateProgressBar(); // Update progress bar
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function updateProgressBar() {
    const progress = ((currentQuiz + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});

function showResult() {
    resultEl.style.display = 'block';
    resultEl.innerText = `You answered ${score}/${quizData.length} questions correctly.`;
    submitBtn.style.display = 'none';
    backButton.style.display = 'block';

    // Add restart button dynamically
    const restartBtn = document.createElement('button');
    restartBtn.innerText = 'Restart Quiz';
    restartBtn.className = 'back-button';
    restartBtn.onclick = restartQuiz;
    resultEl.parentElement.appendChild(restartBtn);
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    submitBtn.style.display = 'block';
    backButton.style.display = 'none';
    resultEl.style.display = 'none';
    document.querySelector('.back-button:last-child').remove(); // Remove restart button
    loadQuiz();
}

function goBack() {
    window.history.back();
}

loadQuiz();
