export const apmFaq = [
  {
    id: "a1",
    question: "What is a trace in APM?",
    options: [
      "A trace represents the steps your application took to handle a request, made up of one or more spans",
      "A trace is a single metric measuring server uptime",
      "A trace is the process of encrypting application logs",
      "A trace is a list of error codes returned by your API",
    ],
    answer:
      "A trace represents the steps your application took to handle a request, made up of one or more spans",
  },
  {
    id: "a2",
    question: "What is a span in APM?",
    options: [
      "A span generally represents an HTTP request or database query and measures how long it took",
      "A span is the memory footprint of a container",
      "A span is the time between two deployments",
      "Spans are only available for serverless environments",
    ],
    answer:
      "A span generally represents an HTTP request or database query and measures how long it took",
  },
  {
    id: "a3",
    question: "What is the difference between traces and distributed traces?",
    options: [
      "Distributed traces span multiple services and components, while regular traces might be limited to a single process",
      "Distributed traces include logs by default, traces do not",
      "Only distributed traces require the Agent",
      "Traces are cloud-based, distributed traces are on-prem only",
    ],
    answer:
      "Distributed traces span multiple services and components, while regular traces might be limited to a single process",
  },
  {
    id: "a4",
    question: "What do I need to install to trace my applications?",
    options: [
      "You need a Datadog Agent and a tracing library (one per language) installed on each host or container",
      "Only the tracing library is required — no Agent is needed",
      "Just the Agent, it automatically traces every application",
      "You must set up custom dashboards before tracing works",
    ],
    answer:
      "You need a Datadog Agent and a tracing library (one per language) installed on each host or container",
  },
  {
    id: "a5",
    question: "Do I need to make code changes to instrument my application?",
    options: [
      "It depends on the language — most do not, but some like Go require manual instrumentation",
      "Yes, all applications require manual tracing",
      "Only containerized apps require code changes",
      "Only for frontend applications using RUM",
    ],
    answer:
      "It depends on the language — most do not, but some like Go require manual instrumentation",
  },
  {
    id: "a6",
    question: "Do I need to change my container images to instrument them?",
    options: [
      "Only for some environments. Kubernetes can inject the tracing library at runtime, but others like ECS require it to be baked into the image",
      "No, container images are instrumented automatically in all environments",
      "Yes, for every image regardless of environment",
      "Only if you're using serverless architecture",
    ],
    answer:
      "Only for some environments. Kubernetes can inject the tracing library at runtime, but others like ECS require it to be baked into the image",
  },
  {
    id: "a7",
    question: "Is infrastructure monitoring required for APM?",
    options: [
      "Yes",
      "No, APM is a standalone feature",
      "Only for AWS-based environments",
      "Only when using traces with logs",
    ],
    answer: "Yes",
  },
  {
    id: "a8",
    question:
      "Can I run a single agent and have all apps across hosts send traces to it?",
    options: [
      "No, APM requires an agent with infrastructure monitoring on every host or node",
      "Yes, a single agent can collect traces from any number of hosts",
      "Only containerized environments require per-host agents",
      "You only need one agent per application, not per host",
    ],
    answer:
      "No, APM requires an agent with infrastructure monitoring on every host or node",
  },
  {
    id: "a9",
    question:
      "Can I use APM on managed services like Vercel where I cannot install an agent?",
    options: [
      "Only if the managed service supports OTEL instrumentation — otherwise, APM cannot be used",
      "Yes, all managed services support native Datadog integration",
      "Only if the container runs as root",
      "Datadog injects agents automatically in managed environments",
    ],
    answer:
      "Only if the managed service supports OTEL instrumentation — otherwise, APM cannot be used",
  },
  {
    id: "a10",
    question:
      "How can I instrument libraries or frameworks not supported by auto-instrumentation?",
    options: [
      "Use our SDKs for manual spans or dynamic instrumentation in supported languages",
      "Install an agent patch that instruments everything automatically",
      "Wrap your services in a proxy container with tracing enabled",
      "There is no workaround; only supported libraries can be traced",
    ],
    answer:
      "Use our SDKs for manual spans or dynamic instrumentation in supported languages",
  },
  {
    id: "a11",
    question: "Where do span tags come from?",
    options: [
      "Some are out-of-the-box (e.g., span duration), others can be added via the tracing client",
      "They are autogenerated from your source code comments",
      "Span tags are only applied to errors",
      "Only logs generate tags, not spans",
    ],
    answer:
      "Some are out-of-the-box (e.g., span duration), others can be added via the tracing client",
  },
  {
    id: "a12",
    question:
      "Can I trace serverless applications like AWS Lambda or Azure App Services?",
    options: [
      "Yes — you can use the extension for AWS Lambda and Azure App Services, with additional setup for Google Cloud Run",
      "No, serverless environments are not compatible with APM",
      "Only for synchronous Lambda functions",
      "Only with Enterprise-tier tracing enabled",
    ],
    answer:
      "Yes — you can use the extension for AWS Lambda and Azure App Services, with additional setup for Google Cloud Run",
  },
  {
    id: "a13",
    question: "What is Universal Service Monitoring (USM)?",
    options: [
      "USM is a lightweight version of APM that monitors HTTP requests, their durations, and error rates without needing code changes",
      "USM is a Kubernetes-only tracing feature",
      "USM is used to trace mobile SDK requests",
      "USM sends metrics from the Agent to OpenTelemetry only",
    ],
    answer:
      "USM is a lightweight version of APM that monitors HTTP requests, their durations, and error rates without needing code changes",
  },
  {
    id: "a14",
    question: "What is the performance overhead of tracing with APM?",
    options: [
      "Tracing has very low overhead and uses official runtime APIs to collect metadata during requests",
      "Tracing consumes at least 10% of CPU on each host",
      "Tracing can only be enabled in staging environments due to performance impact",
      "It varies by cloud provider and can't be measured",
    ],
    answer:
      "Tracing has very low overhead and uses official runtime APIs to collect metadata during requests",
  },
  {
    id: "a15",
    question: "What is the performance overhead of profiling?",
    options: [
      "Profiling overhead can be significant, but Datadog's profilers are designed to run in production environments continuously",
      "Profiling must be paused in production environments",
      "Profiling only runs once per day to reduce overhead",
      "Profiling uses 50% of memory in most environments",
    ],
    answer:
      "Profiling overhead can be significant, but Datadog's profilers are designed to run in production environments continuously",
  },
  {
    id: "a16",
    question: "How does trace sampling work?",
    options: [
      "Sampling happens both at ingestion (agent-level) and retention, and can be customized to meet business needs",
      "Sampling is random and not configurable",
      "Sampling is based only on request size",
      "Sampling only happens once per day after traces are stored",
    ],
    answer:
      "Sampling happens both at ingestion (agent-level) and retention, and can be customized to meet business needs",
  },
  {
    id: "a17",
    question: "How do ingestion controls work in APM?",
    options: [
      "The agent defaults to 10 traces per second and samples automatically to maintain this rate, but you can override it",
      "Traces are ingested only during business hours",
      "You can’t control ingestion — it’s all automatic",
      "The agent uses memory thresholds, not trace count",
    ],
    answer:
      "The agent defaults to 10 traces per second and samples automatically to maintain this rate, but you can override it",
  },
  {
    id: "a18",
    question: "How do APM retention controls work?",
    options: [
      "All traces are kept for at least 15 minutes, with intelligent filters retaining key traces for up to 30 days — and you can define custom retention filters",
      "Traces are retained for one week unless manually deleted",
      "Only error traces are retained past ingestion",
      "Traces are retained indefinitely unless archived",
    ],
    answer:
      "All traces are kept for at least 15 minutes, with intelligent filters retaining key traces for up to 30 days — and you can define custom retention filters",
  },
  {
    id: "a19",
    question: "Does APM trace asynchronous calls?",
    options: [
      "Yes, they are visualized with a stem connecting them to the calling span",
      "No, APM only traces synchronous calls",
      "Only if running Node.js or Python",
      "Asynchronous calls are excluded to reduce noise",
    ],
    answer:
      "Yes, they are visualized with a stem connecting them to the calling span",
  },
  {
    id: "a20",
    question: "Does APM trace database queries?",
    options: [
      "Yes, database queries are visualized as spans and enriched with attributes — SQL queries appear in the flame graph",
      "No, database queries require DBM and are not visible in APM",
      "Only slow queries are traced",
      "Only write operations are captured, not reads",
    ],
    answer:
      "Yes, database queries are visualized as spans and enriched with attributes — SQL queries appear in the flame graph",
  },
  {
    id: "a21",
    question: "Can I correlate logs to traces in APM?",
    options: [
      "Yes, by injecting a trace ID into logs — this ID is extracted at ingestion and visualized in the logs tab of the flame graph",
      "Only logs from frontend apps can be correlated to traces",
      "No, logs and traces are stored in different platforms",
      "You must create a custom span to link logs to traces",
    ],
    answer:
      "Yes, by injecting a trace ID into logs — this ID is extracted at ingestion and visualized in the logs tab of the flame graph",
  },
  {
    id: "a22",
    question: "Can I correlate frontend sessions to backend traces?",
    options: [
      "Yes, RUM can generate a trace ID which APM uses to link frontend and backend if you whitelist the endpoints",
      "Only if frontend apps are built in React or Angular",
      "No, correlation is only supported through logs",
      "You must deploy your frontend on the same host as your backend",
    ],
    answer:
      "Yes, RUM can generate a trace ID which APM uses to link frontend and backend if you whitelist the endpoints",
  },
  {
    id: "a23",
    question: "Do I need to build the service map myself?",
    options: [
      "No, the service map is generated automatically as services interact — it can also detect inferred services like third-party APIs",
      "Yes, you must manually configure the map via the UI",
      "Only services with logs are included in the map",
      "The service map is only available in custom dashboards",
    ],
    answer:
      "No, the service map is generated automatically as services interact — it can also detect inferred services like third-party APIs",
  },
  {
    id: "a24",
    question: "Can I send my OpenTelemetry traces to Datadog?",
    options: [
      "Yes, you can use a collector/exporter or send them to the Datadog agent which will forward them",
      "Only if the traces are from Python or Go",
      "Only backend traces are supported from OTEL",
      "No, Datadog only supports proprietary formats",
    ],
    answer:
      "Yes, you can use a collector/exporter or send them to the Datadog agent which will forward them",
  },
  {
    id: "a25",
    question:
      "Can I use the OpenTelemetry SDK alongside ddtrace to access features like profiling and app security?",
    options: [
      "Yes",
      "No, you must fully migrate to ddtrace",
      "Only in containerized applications",
      "Only in staging environments",
    ],
    answer: "Yes",
  },
];

