"use client";
import { useState, useEffect } from "react";
import Question from "./components/Questions";
import { quizData as rawQuizData } from "./data"; // Adjust path as needed

// Shuffle helper
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizData, setQuizData] = useState([]);

  // Shuffle questions and their options on load
  useEffect(() => {
    const randomizedQuestions = shuffleArray(
      rawQuizData.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }))
    );
    setQuizData(randomizedQuestions);
  }, []);

  const handleAnswerSelect = (questionId, option) => {
    if (submitted) return;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < quizData.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const correctCount = quizData.reduce((count, q) => {
    return answers[q.id] === q.answer ? count + 1 : count;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Datadog Fundamentals Practice Exam
      </h1>

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
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Answers
        </button>
      ) : (
        <p className="mt-6 text-xl font-medium text-center text-indigo-700">
          ✅ You got {correctCount} out of {quizData.length} correct!
        </p>
      )}
    </div>
  );
}
