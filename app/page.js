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
  const [showBanner, setShowBanner] = useState(true); // 🍪 Cookie banner toggle

  if (selectedQuiz) {
    const { title, data, resourceDoc } = selectedQuiz;
    return (
      <Quiz
        title={title}
        data={data}
        resourceDoc={resourceDoc}
        onReset={() => setSelectedQuiz(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6 relative">
      {/* 🍪 Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md p-4 z-50 flex flex-col sm:flex-row items-center justify-between text-sm">
          <span className="text-gray-800 mb-2 sm:mb-0">
            We use cookies to enhance the user experience. By continuing, you
            accept our use of cookies.
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setShowBanner(false)}
              className="bg-[#632CA6] text-white px-4 py-1 rounded hover:bg-purple-700"
            >
              Accept
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="border border-gray-400 px-4 py-1 rounded text-gray-700 hover:bg-gray-100"
            >
              Decline
            </button>
          </div>
        </div>
      )}

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
            className="w-full bg-purple-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Fundamentals Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({
                title: "Infrastructure Quiz",
                data: infraFaq,
                resourceDoc:
                  "https://docs.google.com/spreadsheets/d/1tSDe73To15RM7sNSrrEKIPCOC0wT1dJkjSI8ulPGQLE/edit?gid=0#gid=0",
              })
            }
            className="w-full bg-purple-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Infrastructure Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({
                title: "Logs Quiz",
                data: logsFaq,
                resourceDoc:
                  "https://docs.google.com/spreadsheets/d/10qkAsgQNg9-egJo_aWUqOSjeV02RepjWdJViub6SguQ/edit?gid=0#gid=0",
              })
            }
            className="w-full bg-purple-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Logs Quiz
          </button>
          <button
            onClick={() =>
              setSelectedQuiz({
                title: "APM Quiz",
                data: apmFaq,
                resourceDoc:
                  "https://docs.google.com/spreadsheets/d/1STzv43Ez00jsmvex5tblklSNy7jUCde-VN_oOluEs6M/edit?gid=0#gid=0",
              })
            }
            className="w-full bg-purple-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
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
            className="w-full bg-gray-200 cursor-pointer text-purple-700 py-3 rounded-xl font-semibold hover:bg-gray-300"
          >
            🔀 Random 3 Pillar Quiz
          </button>
        </div>
      </div>
    </main>
  );
}
