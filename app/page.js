"use client";
import { useState, useEffect } from "react";
import Question from "./components/Questions";
import { quizData as rawQuizData } from "./data";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [quizData, setQuizData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // paginate 10 questions at a time

  const initializeQuiz = () => {
    const randomizedQuestions = shuffleArray(
      rawQuizData.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }))
    );
    setQuizData(randomizedQuestions);
    setAnswers({});
    setCheckedAnswers({});
    setVisibleCount(10);
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleAnswerSelect = (questionId, selectedOption, correctAnswer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
    setCheckedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption === correctAnswer ? "correct" : "incorrect",
    }));
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
        </div>

        {quizData
          .slice(0, visibleCount)
          .map(({ id, question, options, answer }) => (
            <Question
              key={id}
              question={question}
              options={options}
              selectedAnswer={answers[id]}
              onAnswerSelect={(option) =>
                handleAnswerSelect(id, option, answer)
              }
              correctAnswer={answer}
              checkedStatus={checkedAnswers[id]}
            />
          ))}

        {visibleCount < quizData.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="text-[#632CA6] font-semibold hover:underline"
            >
              Show More Questions
            </button>
          </div>
        )}

        {Object.keys(checkedAnswers).length === quizData.length && (
          <div className="mt-10 text-center space-y-4">
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
