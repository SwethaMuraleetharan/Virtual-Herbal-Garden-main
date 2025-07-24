import { useState, useEffect } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Award, Leaf } from 'lucide-react';

const allQuizData = [
  { question: "Which nutrient is most abundant in Moringa?", a: "Vitamin D", b: "Vitamin C", c: "Vitamin B12", d: "Omega-3", correct: "b" },
  { question: "What is the primary benefit of Tulsi (Holy Basil)?", a: "Promotes joint health", b: "Boosts immunity", c: "Improves vision", d: "Enhances muscle strength", correct: "b" },
  { question: "Which herb is known for curcumin content?", a: "Ashwagandha", b: "Turmeric", c: "Fenugreek", d: "Hibiscus", correct: "b" },
  { question: "Which herb is traditionally used for better respiratory health?", a: "Neem", b: "Mint", c: "Curry Leaves", d: "Moringa", correct: "b" },
  { question: "Fenugreek is especially beneficial for which of the following?", a: "Boosting energy levels", b: "Regulating blood sugar", c: "Enhancing brain function", d: "Reducing stress", correct: "b" },
  { question: "Which herb is rich in antioxidants and known to lower blood pressure?", a: "Hibiscus", b: "Ashwagandha", c: "Amla", d: "Basil", correct: "a" },
  { question: "Curry leaves are particularly rich in which nutrient?", a: "Omega-3", b: "Vitamin B12", c: "Iron", d: "Protein", correct: "c" },
  { question: "Which herb helps balance hormones and reduce stress?", a: "Fenugreek", b: "Turmeric", c: "Ashwagandha", d: "Mint", correct: "c" },
  { question: "Which herb is known for its antibacterial properties, benefiting skin?", a: "Neem", b: "Basil", c: "Hibiscus", d: "Moringa", correct: "a" },
  { question: "Which herb is commonly associated with promoting healthy hair growth?", a: "Fenugreek", b: "Curry leaves", c: "Tulsi", d: "Amla", correct: "b" },
  { question: "What is a primary health benefit of turmeric?", a: "Reducing pigmentation", b: "Boosting respiratory function", c: "Anti-inflammatory properties", d: "Enhancing vision", correct: "c" },
  { question: "Which herb is most effective for aiding digestion and relieving nausea?", a: "Mint", b: "Fenugreek", c: "Neem", d: "Ashwagandha", correct: "a" },
  { question: "What does Amla primarily support due to its high vitamin C content?", a: "Heart health", b: "Immune system", c: "Bone density", d: "Vision clarity", correct: "b" },
  { question: "Which part of the neem tree is most commonly used medicinally?", a: "Roots", b: "Bark", c: "Leaves", d: "Flowers", correct: "c" },
  { question: "Ashwagandha is classified as which type of herb?", a: "Stimulant", b: "Adaptogen", c: "Sedative", d: "Diuretic", correct: "b" },
  { question: "Which herb is known as the 'Queen of Herbs' in Ayurveda?", a: "Turmeric", b: "Tulsi", c: "Ashwagandha", d: "Brahmi", correct: "b" },
  { question: "Ginger is most effective for treating which condition?", a: "Insomnia", b: "Motion sickness", c: "Hair loss", d: "Skin allergies", correct: "b" },
  { question: "Which herb is traditionally used to improve memory and brain function?", a: "Brahmi", b: "Fenugreek", c: "Hibiscus", d: "Curry leaves", correct: "a" },
  { question: "Aloe vera is primarily known for its benefits to which organ system?", a: "Nervous system", b: "Digestive system", c: "Skin and hair", d: "Respiratory system", correct: "c" },
  { question: "Which herb is known to help regulate cholesterol levels?", a: "Mint", b: "Garlic", c: "Basil", d: "Coriander", correct: "b" },
  { question: "Triphala is a combination of how many fruits?", a: "Two", b: "Three", c: "Four", d: "Five", correct: "b" },
  { question: "Which herb is most commonly used for treating anxiety naturally?", a: "Chamomile", b: "Oregano", c: "Thyme", d: "Rosemary", correct: "a" },
  { question: "Cinnamon is particularly beneficial for managing which condition?", a: "Blood pressure", b: "Blood sugar", c: "Kidney stones", d: "Arthritis", correct: "b" },
  { question: "Which herb is known as a natural antibiotic?", a: "Parsley", b: "Oregano", c: "Sage", d: "Dill", correct: "b" },
  { question: "Licorice root is traditionally used to treat which system?", a: "Cardiovascular", b: "Digestive", c: "Endocrine", d: "Muscular", correct: "b" }
];

export default function HerbalQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizLength, setQuizLength] = useState(10);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start quiz with random questions
  const startQuiz = () => {
    const shuffledQuestions = shuffleArray(allQuizData);
    setQuizQuestions(shuffledQuestions.slice(0, quizLength));
    setCurrentQuiz(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
    setIsQuizStarted(true);
    setAnsweredQuestions([]);
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const currentQuestion = quizQuestions[currentQuiz];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    setAnsweredQuestions(prev => [...prev, {
      question: currentQuestion.question,
      selected: selectedAnswer,
      correct: currentQuestion.correct,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuiz + 1 < quizQuestions.length) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  // Get score message and color
  const getScoreInfo = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { message: "Excellent! You're a herbal medicine expert! 🌟", color: "text-green-600", bgColor: "bg-green-100" };
    if (percentage >= 70) return { message: "Great job! You have good knowledge of herbs! 🌿", color: "text-blue-600", bgColor: "bg-blue-100" };
    if (percentage >= 50) return { message: "Not bad! Keep learning about herbal medicine! 📚", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    return { message: "Keep studying! There's so much to learn about herbs! 💪", color: "text-red-600", bgColor: "bg-red-100" };
  };

  if (!isQuizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-3000"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-md w-full text-center border border-white/20 relative z-10 animate-float">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <Leaf className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Herbal Knowledge Quiz
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Test your knowledge about medicinal herbs and their amazing properties! 
            Each quiz features randomly selected questions for a unique experience.
          </p>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose number of questions:
            </label>
            <div className="flex gap-2 justify-center">
              {[5, 10, 15, 20].map(num => (
                <button
                  key={num}
                  onClick={() => setQuizLength(num)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    quizLength === num
                      ? 'bg-green-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
          >
            <Brain className="w-6 h-6 mr-2" />
            Start Quiz
          </button>

          <div className="mt-6 text-sm text-gray-500">
            Available questions: {allQuizData.length}
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const scoreInfo = getScoreInfo();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-2xl w-full text-center border border-white/20 relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          
          <div className={`${scoreInfo.bgColor} ${scoreInfo.color} p-6 rounded-2xl mb-6`}>
            <div className="text-6xl font-bold mb-2">{score}/{quizQuestions.length}</div>
            <div className="text-xl font-semibold mb-2">
              {Math.round((score / quizQuestions.length) * 100)}% Correct
            </div>
            <div className="text-lg">{scoreInfo.message}</div>
          </div>

          {/* Answer Review */}
          <div className="max-h-60 overflow-y-auto mb-6 text-left">
            <h3 className="text-lg font-semibold mb-3 text-center">Review Your Answers:</h3>
            {answeredQuestions.map((q, index) => (
              <div key={index} className={`p-3 mb-2 rounded-lg ${q.isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
                <div className="flex items-start">
                  {q.isCorrect ? 
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> : 
                    <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  }
                  <div className="text-sm">
                    <div className="font-medium mb-1">{q.question}</div>
                    {!q.isCorrect && (
                      <div className="text-gray-600">
                        Your answer: {q.selected} | Correct: {q.correct}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={startQuiz}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            
            <button
              onClick={() => setIsQuizStarted(false)}
              className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-2xl hover:bg-gray-600 transition-all duration-300 font-semibold"
            >
              New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuiz];
  const progress = ((currentQuiz + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-2xl w-full border border-white/20 relative z-10 animate-float">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">Progress</span>
            <span className="text-sm font-semibold text-green-600">
              {currentQuiz + 1} / {quizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {['a', 'b', 'c', 'd'].map((option) => (
              <label
                key={option}
                className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-lg ${
                  selectedAnswer === option
                    ? 'border-green-500 bg-green-100 shadow-lg scale-102'
                    : 'border-gray-200 bg-white/50 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswer === option
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedAnswer === option && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    {currentQuestion[option]}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          {currentQuiz + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}