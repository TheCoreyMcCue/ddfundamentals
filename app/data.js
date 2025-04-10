export const quizData = [
  {
    id: 1,
    question:
      "Can the Datadog agent be installed and run on any operating system?",
    options: [
      "No, it only supports running on Linux based operating systems.",
      "No, you need to check the version of your operating system to ensure its compatibility.",
      "Yes, it can run on any version of an operating system without issue.",
    ],
    answer:
      "No, you need to check the version of your operating system to ensure its compatibility.",
  },
  {
    id: 2,
    question: "Which of the following is a correct statement?",
    options: [
      "No one is billed twice if they are running the Agent on an AWS EC2 instance that is also picked up by the Datadog AWS integration.",
      "Host level metrics can be obtained with almost no delay by relying on those provided by cloud services for a cloud based host.",
      "Host level metrics can be obtained with a higher resolution by using those provided by cloud services instead of the Datadog Agent.",
    ],
    answer:
      "No one is billed twice if they are running the Agent on an AWS EC2 instance that is also picked up by the Datadog AWS integration.",
  },
  {
    id: 3,
    question:
      "Which of the following is a valid data source to populate an integration template when using the Datadog Agent’s Autodiscovery feature in a Docker environment?",
    options: ["Key-value stores", "Helm Chart", "ConfigMap"],
    answer: "Key-value stores",
  },
  {
    id: 4,
    question: "Dogstatsd uses UDP instead of TCP because",
    options: [
      "Key-value it is very reliable given it guarantees the delivery of applications metric data to DogstatsD.",
      "Helm it is a connection-oriented protocol so the application will wait to transmit data incase DogStatsD isn’t available.",
      "it allows the application to send metrics to DogStatsD and resume its work without waiting for a response.",
    ],
    answer:
      "it allows the application to send metrics to DogStatsD and resume its work without waiting for a response.",
  },
  {
    id: 5,
    question: "Datadog Authentication (crawler) based integrations",
    options: [
      "are set up in Datadog where you provide credentials for obtaining metrics with the API.",
      "are installed with the Datadog Agent and use a Python class method called check to define the metrics to collect.",
      "use the Datadog API to allow monitoring of applications based on the language they are written in.",
    ],
    answer:
      "are set up in Datadog where you provide credentials for obtaining metrics with the API.",
  },
  {
    id: 6,
    question:
      "In Datadog, metrics submitted with a fractions of a second timestamp",
    options: [
      "are rounded to the nearest whole second.",
      "are stored in milliseconds to account for the fraction",
      "are rejected by the metrics endpoint upon submission.",
    ],
    answer: "are rounded to the nearest whole second.",
  },
];
