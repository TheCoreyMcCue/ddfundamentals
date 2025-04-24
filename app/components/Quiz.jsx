"use client";
import { useState, useEffect } from "react";
import Question from "./Questions";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Quiz({ data, title, onReset }) {
  const [answers, setAnswers] = useState({});
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [quizData, setQuizData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const randomized = shuffleArray(
      data.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }))
    );
    setQuizData(randomized);
    setAnswers({});
    setCheckedAnswers({});
    setVisibleCount(10);
  }, [data]);

  const handleAnswerSelect = (id, selectedOption, correctAnswer) => {
    setAnswers((prev) => ({ ...prev, [id]: selectedOption }));
    setCheckedAnswers((prev) => ({
      ...prev,
      [id]: selectedOption === correctAnswer ? "correct" : "incorrect",
    }));
  };

  const correctCount = quizData.reduce(
    (count, q) => (answers[q.id] === q.answer ? count + 1 : count),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header with Back Button and Title */}
        <div className="bg-white rounded-xl shadow p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onReset}
            className="text-[#632CA6] font-medium hover:underline text-sm sm:text-base"
          >
            ← Back to Quiz Menu
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center flex-1">
            {title}
          </h1>
        </div>

        {/* Quiz Questions */}
        {quizData.slice(0, visibleCount).map((q) => (
          <Question
            key={q.id}
            question={q.question}
            options={q.options}
            selectedAnswer={answers[q.id]}
            onAnswerSelect={(option) =>
              handleAnswerSelect(q.id, option, q.answer)
            }
            correctAnswer={q.answer}
            checkedStatus={checkedAnswers[q.id]}
          />
        ))}

        {/* Show More Button */}
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

        {/* Final Score & Reset Button */}
        {Object.keys(checkedAnswers).length === quizData.length && (
          <div className="mt-10 text-center space-y-4">
            <p className="text-2xl font-semibold text-[#632CA6]">
              ✅ You got {correctCount} out of {quizData.length} correct!
            </p>
            <button
              onClick={onReset}
              className="bg-white text-[#632CA6] hover:bg-purple-50 border border-[#632CA6] px-6 py-2 rounded-lg font-medium transition"
            >
              Back to Quiz Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
