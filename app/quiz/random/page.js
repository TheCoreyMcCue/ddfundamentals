"use client";
import { useMemo } from "react";
import Quiz from "@/app/components/Quiz";
import { infraFaq, logsFaq, apmFaq } from "@/app/data";

function getRandom3Pillar() {
  const all = [...infraFaq, ...logsFaq, ...apmFaq];
  return all.sort(() => 0.5 - Math.random()).slice(0, 15);
}

export default function RandomQuizPage() {
  const data = useMemo(() => getRandom3Pillar(), []);
  return <Quiz title="Random 3 Pillar Quiz" data={data} />;
}
