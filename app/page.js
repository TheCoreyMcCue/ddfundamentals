"use client";
import { useState } from "react";
import Quiz from "./components/Quiz";
import { quizData, infraFaq, logsFaq, apmFaq } from "./data";

const getRandom3Pillar = () => {
  const all = [...infraFaq, ...logsFaq, ...apmFaq];
  return all.sort(() => 0.5 - Math.random()).slice(0, 15);
};

export default function Home() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  if (selectedQuiz) {
    const { title, data } = selectedQuiz;
    return (
      <Quiz title={title} data={data} onReset={() => setSelectedQuiz(null)} />
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          🐶 Datadog Quiz Hub 🐶
        </h1>
        <p className="text-lg text-gray-600">Choose a quiz to get started:</p>

        <div className="space-y-4">
          <button
            onClick={() =>
              setSelectedQuiz({
                title: "Fundamentals Quiz",
                data: quizData,
              })
            }
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Fundamentals Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({ title: "Infrastructure Quiz", data: infraFaq })
            }
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Infrastructure Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({ title: "Logs Quiz", data: logsFaq })
            }
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Logs Quiz
          </button>
          <button
            onClick={() => setSelectedQuiz({ title: "APM Quiz", data: apmFaq })}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            APM Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({
                title: "Random 3 Pillar Quiz",
                data: getRandom3Pillar(),
              })
            }
            className="w-full bg-gray-200 text-purple-700 py-3 rounded-xl font-semibold hover:bg-gray-300"
          >
            🔀 Random 3 Pillar Quiz
          </button>
        </div>
      </div>
    </main>
  );
}
