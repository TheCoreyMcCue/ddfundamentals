"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Question from "./Questions";
import { datadogLogs } from "@/utils/datadog";
import { useUser } from "./EmailGate";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function isAnswerCorrect(selected, correct) {
  if (Array.isArray(correct)) {
    if (!Array.isArray(selected) || selected.length !== correct.length) return false;
    return selected.every((o) => correct.includes(o));
  }
  return selected === correct;
}

export default function Quiz({ data, title, resourceDoc, quizId }) {
  const userEmail = useUser();
  const [answers, setAnswers] = useState({});
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [quizData, setQuizData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const randomized = shuffleArray(
      data.map((q) => ({ ...q, options: shuffleArray(q.options) }))
    ).slice(0, 25);
    setQuizData(randomized);
    setAnswers({});
    setCheckedAnswers({});
    setVisibleCount(10);
  }, [data]);

  const handleAnswerSelect = (id, selectedOption, correctAnswer, multiSelect) => {
    if (checkedAnswers[id]) return;

    if (multiSelect) {
      const current = answers[id] || [];
      const alreadySelected = current.includes(selectedOption);
      const newSelection = alreadySelected
        ? current.filter((o) => o !== selectedOption)
        : [...current, selectedOption];

      setAnswers((prev) => ({ ...prev, [id]: newSelection }));

      // Auto-check once the required number of options are selected
      const requiredCount = Array.isArray(correctAnswer) ? correctAnswer.length : 1;
      if (newSelection.length === requiredCount) {
        const isCorrect = isAnswerCorrect(newSelection, correctAnswer);
        setCheckedAnswers((prev) => ({
          ...prev,
          [id]: isCorrect ? "correct" : "incorrect",
        }));
        datadogLogs.logger.info("User selected quiz answer", {
          questionId: id,
          selectedOptions: newSelection,
          correctAnswer,
          isCorrect,
        });
      }
    } else {
      const isCorrect = selectedOption === correctAnswer;
      setAnswers((prev) => ({ ...prev, [id]: selectedOption }));
      setCheckedAnswers((prev) => ({
        ...prev,
        [id]: isCorrect ? "correct" : "incorrect",
      }));
      datadogLogs.logger.info("User selected quiz answer", {
        questionId: id,
        selectedOption,
        correctAnswer,
        isCorrect,
      });
    }
  };

  const answeredCount = Object.keys(checkedAnswers).length;
  const correctCount = quizData.reduce(
    (count, q) => (isAnswerCorrect(answers[q.id], q.answer) ? count + 1 : count),
    0
  );
  const progressPct =
    quizData.length > 0 ? Math.round((answeredCount / quizData.length) * 100) : 0;
  const isFinished = answeredCount === quizData.length && quizData.length > 0;
  const scorePct =
    quizData.length > 0 ? Math.round((correctCount / quizData.length) * 100) : 0;

  useEffect(() => {
    if (!isFinished || !quizId) return;
    fetch("/api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userEmail ?? "anonymous",
        quizId,
        score: scorePct,
        correctCount,
        totalQuestions: quizData.length,
      }),
    }).catch(() => {});
  }, [isFinished]);

  if (isFinished) {
    return (
      <div className="min-h-screen bg-[#0a0a10] flex flex-col items-center justify-center px-6 py-16">
        <div className={`w-full text-center ${showReview ? "max-w-3xl" : "max-w-lg"}`}>
          {/* Score ring */}
          <div className="relative mx-auto mb-8 w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#1e1b2e" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50"
                fill="none" stroke="#632CA6" strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - scorePct / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{scorePct}%</span>
              <span className="text-xs text-slate-500 mt-0.5">score</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-1">Quiz Complete</h2>
          <p className="text-slate-400 mb-2">
            You got{" "}
            <span className="text-white font-semibold">{correctCount}</span> out of{" "}
            <span className="text-white font-semibold">{quizData.length}</span> correct
          </p>
          <p className="text-sm text-slate-500 mb-8">{title}</p>

          {resourceDoc && (
            <a
              href={resourceDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-sm text-purple-400 hover:text-purple-300 hover:underline"
            >
              ℹ️ Review the study material
            </a>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setShowReview((v) => !v)}
              className="rounded-xl border border-[#632CA6]/50 bg-[#632CA6]/10 px-6 py-2.5 text-sm font-medium text-purple-300 hover:bg-[#632CA6]/20 hover:text-white transition-colors"
            >
              {showReview ? "Hide Review" : "Review Answers"}
            </button>
            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>

          {showReview && (
            <div className="mt-10 w-full text-left">
              <div className="mb-4 border-t border-white/8 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Answer Review</h3>
              </div>
              {quizData.map((q, idx) => (
                <Question
                  key={q.id}
                  questionNumber={idx + 1}
                  question={q.question}
                  options={q.options}
                  selectedAnswer={answers[q.id]}
                  onAnswerSelect={() => {}}
                  correctAnswer={q.answer}
                  checkedStatus={checkedAnswers[q.id] || "incorrect"}
                  multiSelect={q.multiSelect ?? false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a10] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-sm text-slate-400 hover:border-white/15 hover:text-white transition-all"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Header card */}
        <div className="rounded-2xl border border-white/8 bg-slate-900/50 p-6 mb-6 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {resourceDoc && (
            <a
              href={resourceDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-purple-400 hover:text-purple-300 hover:underline"
            >
              ℹ️ Study material
            </a>
          )}

          {/* Progress bar */}
          <div className="mt-5">
            <div className="mb-1.5 flex justify-between text-xs text-slate-500">
              <span>{answeredCount} / {quizData.length} answered</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/8">
              <div
                className="h-1.5 rounded-full bg-[#632CA6] transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        {quizData.slice(0, visibleCount).map((q, idx) => (
          <Question
            key={q.id}
            questionNumber={idx + 1}
            question={q.question}
            options={q.options}
            selectedAnswer={answers[q.id]}
            onAnswerSelect={(option) =>
              handleAnswerSelect(q.id, option, q.answer, q.multiSelect)
            }
            correctAnswer={q.answer}
            checkedStatus={checkedAnswers[q.id]}
            multiSelect={q.multiSelect ?? false}
          />
        ))}

        {/* Load more */}
        {visibleCount < quizData.length && (
          <div className="mt-2 mb-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="rounded-xl border border-white/8 bg-white/4 px-6 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/8 hover:text-white transition-all"
            >
              Load more questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
