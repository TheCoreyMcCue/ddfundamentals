export const apmFundamentalsPracticeExam = [
  // ============================================================
  // OFFICIAL PRACTICE EXAM (apmf-1 to apmf-23) — verbatim, keys as recorded
  // ============================================================
  {
    id: "apmf-1",
    question:
      "The Live Search view will display all ingested traces for how long?",
    options: ["15 minutes", "24 hours", "15 days"],
    answer: "15 minutes",
  },
  {
    id: "apmf-2",
    question: "Which tags are NOT available with tracing application metrics?",
    options: ["env, service, version", "custom tags", "second primary tag"],
    answer: "custom tags",
  },
  {
    id: "apmf-3",
    question: "What is the MINIMUM information contained on every span?",
    options: [
      "name, duration, and environment",
      "type, duration, and start time",
      "name, duration, and start time",
    ],
    answer: "name, duration, and start time",
  },
  {
    id: "apmf-4",
    question:
      "What is the PRIMARY challenge to monitoring the performance of typical distributed application environments?",
    options: [
      "Services are written in many languages and run on many platforms.",
      "Services are encrypted by several types of encryption.",
      "Services take a very long time to respond to requests.",
    ],
    answer: "Services are written in many languages and run on many platforms.",
  },
  {
    id: "apmf-5",
    question:
      "Which of the following options BEST describes the percentile distribution metrics that are available for distribution metrics in APM?",
    options: [
      "p50, p75, p90, p95, and p99",
      "p01, p05, p10, and p25",
      "any arbitrary percentile",
    ],
    answer: "p50, p75, p90, p95, and p99",
  },
  {
    id: "apmf-6",
    question:
      "The default APM pricing plan includes 1 million indexed spans per month, retained for how long?",
    options: ["7 days", "15 days", "30 days"],
    answer: "15 days",
  },
  {
    id: "apmf-7",
    question:
      "The Datadog Continuous Profiler can always be enabled with which method?",
    options: [
      "in-code configuration",
      "environment variable",
      "both environment variable and in-code configuration",
    ],
    answer: "in-code configuration",
  },

  // NOTE: apmf-8's stem was missing from the source transcription. The stem
  // below is RECONSTRUCTED from its option set and key. Verify against the
  // practice exam before relying on it.
  {
    id: "apmf-8",
    question: "Which tag is used to track deployments?",
    options: ["service", "env", "version"],
    answer: "version",
  },
  {
    id: "apmf-9",
    question:
      "What are the three span tags that must be present on an error span for Datadog Error Tracking to process it?",
    options: [
      "error.message, error.type, and error.stack",
      "error.msg, error.type, and error.stacktrace",
      "err.msg, err.type, and err.stack",
    ],
    answer: "error.message, error.type, and error.stack",
  },
  {
    id: "apmf-10",
    question:
      "Which filter is always on to retain a subset of important spans?",
    options: [
      "App Analytics Retention Filter",
      "Datadog Intelligent Retention Filter",
      "Custom Retention Filter",
    ],
    answer: "Datadog Intelligent Retention Filter",
  },
  {
    id: "apmf-11",
    question:
      "When configuring the RUM SDK to correlate browser requests with APM traces, what is the origin that allowedTracingOrigins should allow?",
    options: [
      "calls made by the browser application",
      "calls made by the receiving backend web server to a third party application",
      "calls for the endpoints used by the receiving backend web server",
    ],
    answer: "calls made by the browser application",
  },
  {
    id: "apmf-12",
    question:
      "A java application needs to be configured with profiling. Where must `-javaagent` be placed and why?",
    options: [
      "Anywhere after the `java` command; The placement does not matter because the profiler library will be loaded in any order.",
      "After the `-jar` command; To ensure that the profiler is loaded as late as possible for profiling to occur.",
      "Before the `-jar` command; To ensure that the profiler is loaded as early as possible for profiling to occur.",
    ],
    answer:
      "Before the `-jar` command; To ensure that the profiler is loaded as early as possible for profiling to occur.",
  },
  {
    id: "apmf-13",
    question:
      "What is the environment variable that enables profiling for the tracing libraries that support this option?",
    options: [
      "DD_PROFILING_ENABLED",
      "DD_APM_PROFILER_ENABLED",
      "DD_APM_PROFILING_ENABLED",
    ],
    answer: "DD_PROFILING_ENABLED",
  },

  // NOTE: key recorded as "version". Flagged as likely mis-transcribed — the
  // tag that identifies a service is `service`. Verify this slide.
  {
    id: "apmf-14",
    question: "Which tag is used to track services?",
    options: ["env", "service", "version"],
    answer: "version",
  },
  {
    id: "apmf-15",
    question:
      "Which search technique returns certain profiles on the Search Profile page?",
    options: [
      "using facets",
      "using scopes",
      "filtering out profiles on the Datadog Agent",
    ],
    answer: "using facets",
  },
  {
    id: "apmf-16",
    question:
      "What filters allow indexed spans to be available in a Notebook or Dashboard after 15 minutes?",
    options: [
      "spans retained by the Custom Retention Filter only",
      "spans retained by the Datadog Intelligent Retention Filter only",
      "spans retained by the Datadog Intelligent Retention Filter and the Custom Retention Filter",
    ],
    answer:
      "spans retained by the Datadog Intelligent Retention Filter and the Custom Retention Filter",
  },
  {
    id: "apmf-17",
    question:
      "Assume that an increase in errors has been spotted on the Errors graph of the Service Page. After the incident is resolved what data is used in the resulting post mortem notebook?",
    options: ["trace metric", "indexed spans", "screenshot"],
    answer: "trace metric",
  },
  {
    id: "apmf-18",
    question:
      "Monitors will be linked to services in the service map and on dashboards if the query is scoped with which tag?",
    options: ["env", "service", "version"],
    answer: "service",
  },
  {
    id: "apmf-19",
    question:
      "What is the type of instrumentation that would be needed to write custom spans?",
    options: [
      "Manual Instrumentation",
      "Custom Instrumentation",
      "Dynamic Instrumentation",
    ],
    answer: "Custom Instrumentation",
  },
  {
    id: "apmf-20",
    question: "What can be used to create spans for an unsupported language?",
    options: ["Community Tracers", "Datadog Agent", "Datadog Tracer"],
    answer: "Community Tracers",
  },
  {
    id: "apmf-21",
    question:
      "One way to add a service summary page's Latency graph to a dashboard is to",
    options: [
      "right-click on the graph, select Save As, and specify a dashboard name.",
      "hold the mouse pointer over the graph, press Ctrl/cmd+C to copy it, open the clipboard, and select the target dashboard to export it to.",
      "click the Service Config button and specify the dashboard name in the Dashboards list.",
    ],
    answer:
      "hold the mouse pointer over the graph, press Ctrl/cmd+C to copy it, open the clipboard, and select the target dashboard to export it to.",
  },
  {
    id: "apmf-22",
    question:
      "A user is looking at some unusual measurements in a graph of a service's latency metric, and wants to see if there are similar unusual things happening in other metrics that Datadog is collecting at the same time (for example, from integrations). To see this information, they should click on the graph and select:",
    options: [
      "\u201cFind correlated metrics\u201d.",
      "\u201cView related logs\u201d.",
      "\u201cView related profiles\u201d.",
    ],
    answer: "\u201cFind correlated metrics\u201d.",
  },
  {
    id: "apmf-23",
    question: "What does an Apdex score measure?",
    options: [
      "user satisfaction with the performance of a service in terms of ratio of requests that return without error.",
      "the relative performance of a service compared to its past performance.",
      "user satisfaction with the performance of a service, in terms of the ratio of requests that are met within a specified time threshold.",
    ],
    answer:
      "user satisfaction with the performance of a service, in terms of the ratio of requests that are met within a specified time threshold.",
  },
];
