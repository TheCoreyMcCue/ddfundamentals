"use client";

import { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export default function EmailGate({ children }) {
  const [email, setEmail] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("userEmail");
    if (!stored) {
      setLoading(false);
      return;
    }
    // Verify the email exists in the DB before trusting localStorage
    fetch(`/api/users?email=${encodeURIComponent(stored)}`)
      .then((r) => r.json())
      .then(({ exists }) => {
        if (exists) {
          setEmail(stored);
        } else {
          localStorage.removeItem("userEmail");
        }
      })
      .catch(() => {
        // On network error, fall back to trusting localStorage
        setEmail(stored);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed.endsWith("@datadoghq.com")) {
      setError("Access is restricted to @datadoghq.com email addresses.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      localStorage.setItem("userEmail", trimmed);
      setEmail(trimmed);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a10] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-[#632CA6] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!email) {
    return (
      <div className="min-h-screen bg-[#0a0a10] flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#9b6dda]">
            SE Learning Track
          </p>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome</h1>
          <p className="text-slate-400 text-sm mb-8">
            Enter your email to get started and track your progress.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(""); }}
              placeholder="you@datadoghq.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#632CA6]/60 focus:ring-1 focus:ring-[#632CA6]/40 transition-all"
              autoFocus
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#632CA6] px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              {submitting ? "Saving..." : "Get Started"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={email}>
      {children}
    </UserContext.Provider>
  );
}
