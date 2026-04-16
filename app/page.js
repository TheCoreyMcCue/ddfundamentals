"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6 relative">
      {/* Cookie Banner */}
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
          <Link
            href="/quiz/fundamentals"
            className="block w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Fundamentals Quiz
          </Link>
          <Link
            href="/quiz/infrastructure"
            className="block w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Infrastructure Customer FAQ
          </Link>
          <Link
            href="/quiz/logs"
            className="block w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Logs Customer FAQ
          </Link>
          <Link
            href="/quiz/apm"
            className="block w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            APM FAQ
          </Link>
          <Link
            href="/quiz/random"
            className="block w-full bg-gray-200 text-purple-700 py-3 rounded-xl font-semibold hover:bg-gray-300"
          >
            🔀 Random FAQs
          </Link>
        </div>
      </div>
    </main>
  );
}
