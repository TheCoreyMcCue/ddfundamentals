"use client";
import { useState, useEffect } from "react";
import Question from "./components/Questions";
import { quizData as rawQuizData } from "./data";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizData, setQuizData] = useState([]);

  const initializeQuiz = () => {
    const randomizedQuestions = shuffleArray(
      rawQuizData.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }))
    );
    setQuizData(randomizedQuestions);
    setAnswers({});
    setSubmitted(false);
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleAnswerSelect = (questionId, option) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    // if (Object.keys(answers).length < quizData.length) {
    //   alert("Please answer all questions before submitting.");
    //   return;
    // }
    setSubmitted(true);
  };

  const correctCount = quizData.reduce(
    (count, q) => (answers[q.id] === q.answer ? count + 1 : count),
    0
  );

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🐶 Datadog Fundamentals Practice Exam 🐶
          </h1>
          {/* <p className="text-gray-600 text-lg">
            Test your knowledge and get your score instantly.
          </p> */}
        </div>

        {quizData.map(({ id, question, options, answer }) => (
          <Question
            key={id}
            question={question}
            options={options}
            selectedAnswer={answers[id]}
            onAnswerSelect={(option) => handleAnswerSelect(id, option)}
            correctAnswer={answer}
            submitted={submitted}
          />
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-[#632CA6] hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-lg"
          >
            Submit Answers
          </button>
        ) : (
          <div className="mt-6 text-center space-y-4">
            <p className="text-2xl font-semibold text-[#632CA6]">
              ✅ You got {correctCount} out of {quizData.length} correct!
            </p>
            <button
              onClick={initializeQuiz}
              className="bg-white text-[#632CA6] hover:bg-purple-50 border border-[#632CA6] px-6 py-2 rounded-lg font-medium transition"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
