import { notFound } from "next/navigation";
import Quiz from "@/app/components/Quiz";
import { quizData, infraFaq, logsFaq, apmFaq, awsCloudPractitionerPracticeExam, logFundamentalsPracticeExam } from "@/app/data";

const quizConfig = {
  fundamentals: {
    title: "Fundamentals Quiz",
    data: quizData,
  },
  infrastructure: {
    title: "Infrastructure Quiz",
    data: infraFaq,
    resourceDoc:
      "https://docs.google.com/spreadsheets/d/1tSDe73To15RM7sNSrrEKIPCOC0wT1dJkjSI8ulPGQLE/edit?gid=0#gid=0",
  },
  logs: {
    title: "Logs Quiz",
    data: logsFaq,
    resourceDoc:
      "https://docs.google.com/spreadsheets/d/10qkAsgQNg9-egJo_aWUqOSjeV02RepjWdJViub6SguQ/edit?gid=0#gid=0",
  },
  apm: {
    title: "APM Quiz",
    data: apmFaq,
    resourceDoc:
      "https://docs.google.com/spreadsheets/d/1STzv43Ez00jsmvex5tblklSNy7jUCde-VN_oOluEs6M/edit?gid=0#gid=0",
  },
  "aws-ccp": {
    title: "AWS Cloud Practitioner Practice Exam",
    data: awsCloudPractitionerPracticeExam,
  },
  "log-fundamentals": {
    title: "Log Management Fundamentals Practice Exam",
    data: logFundamentalsPracticeExam,
  },
};

export default async function QuizPage({ params }) {
  const { slug } = await params;
  const config = quizConfig[slug];

  if (!config) {
    notFound();
  }

  return <Quiz title={config.title} data={config.data} resourceDoc={config.resourceDoc} />;
}
