export const logFundamentalsPracticeExam = [
  {
    id: "lf-1",
    question:
      "How would a URL be generated that dynamically links to the appropriate dashboard in an alert's message?",
    options: [
      "Create an advanced alert condition.",
      "Add a priority to the alert.",
      "Use a template variable.",
    ],
    answer: "Use a template variable.",
  },
  {
    id: "lf-2",
    question:
      "On Linux systems, which directory should the Agent's 'dd-agent' user own in order to write to log files?",
    options: ["/tmp/log/", "/var/log/datadog/", "/etc/datadog-agent/"],
    answer: "/var/log/datadog/",
  },
  {
    id: "lf-3",
    question: "Why are logs important?",
    options: [
      "They help pinpoint the cause of problems and are written records for audit/compliance purpose.",
      "They are the cheapest data type.",
      "They replace metrics.",
      "They are only for security.",
    ],
    answer:
      "They help pinpoint the cause of problems and are written records for audit/compliance purpose.",
  },
  {
    id: "lf-4",
    question:
      "Which log search query should be used to find logs with an error status that contain the indication of their info severity in their log message?",
    options: [
      "status:error and info",
      "error and severity:info",
      "status:error and severity:info",
    ],
    answer: "status:error and info",
  },
  {
    id: "lf-5",
    question: "Which logging format is automatically parsed by Datadog?",
    options: ["XML", "JSON", "IIS"],
    answer: "JSON",
  },
  {
    id: "lf-6",
    question:
      "Which of the following is a key benefit of using Logging Without Limits?",
    options: [
      "generating metrics",
      "archiving all logs",
      "detecting anomalies",
    ],
    answer: "archiving all logs",
  },
  {
    id: "lf-7",
    question:
      "By default, which directory contains logs for processes running on a Linux distribution?",
    options: ["/tmp/", "/etc/logrotate/", "/var/log/"],
    answer: "/var/log/",
  },
  {
    id: "lf-8",
    question:
      "Which Datadog product should be used to automatically detect security signals from logs?",
    options: ["Datadog SIEM", "Datadog CSPM", "Datadog AppSec"],
    answer: "Datadog SIEM",
  },
  {
    id: "lf-9",
    question:
      "What is the maximum number of facets supported by Timeseries and Table visualizations?",
    options: ["3", "4", "5"],
    answer: "3",
  },
  {
    id: "lf-10",
    question:
      "To present data so it is more easily understood, move a column in the Log Explorer by",
    options: [
      "clicking on a column header's dropdown menu and selecting an Insert option.",
      "dragging and dropping columns to the left or right.",
      "clicking on a column header's dropdown menu and selecting a Move option.",
    ],
    answer:
      "clicking on a column header's dropdown menu and selecting a Move option.",
  },
  {
    id: "lf-11",
    question:
      "Which of the following should be done to visualize log counts by facet in the Log Explorer?",
    options: [
      "Click the Group into Fields button, and group by a facet in the dropdown list.",
      "Click the Group into Patterns button, and group by status and service.",
      "Click the Group into Patterns button, and group by status.",
    ],
    answer:
      "Click the Group into Fields button, and group by a facet in the dropdown list.",
  },
  {
    id: "lf-12",
    question:
      "Which of the following should be done to aggregate logs into long-term key performance indicators (KPIs)?",
    options: [
      "Click the Export button and select Generate New Metric.",
      "Click the Export button and select Export to Dashboard.",
      "Click the Export button and select Export to Monitor.",
    ],
    answer: "Click the Export button and select Generate New Metric.",
  },
  {
    id: "lf-13",
    question:
      "Logs provide insight into an application by helping users understand",
    options: [
      "why the application failed.",
      "how the application performed.",
      "the application queue size.",
    ],
    answer: "why the application failed.",
  },
  {
    id: "lf-14",
    question:
      "How can specific logs be filtered from processing based on value?",
    options: [
      "Set the exclude type with a pattern to test log data against in the Datadog Agent.",
      "Set the exclude_at_match type with a pattern to test log data against in the Datadog Agent.",
      "Create a list of filter patterns in the Datadog application.",
    ],
    answer:
      "Set the exclude_at_match type with a pattern to test log data against in the Datadog Agent.",
  },
  {
    id: "lf-15",
    question:
      "If log data is important but contains sensitive material, how can that log be processed with the sensitive data hidden?",
    options: [
      "Add a log processing rule with a 'mask sequence' type to match sensitive data patterns and mask it.",
      "Add a log parsing pipeline to match sensitive data patterns and mask it.",
      "Mask the log data at the application-level before emitting it.",
    ],
    answer:
      "Add a log processing rule with a 'mask sequence' type to match sensitive data patterns and mask it.",
  },
  {
    id: "lf-16",
    question:
      "How can string data in a JSON object from a source that does not have an integration be parsed?",
    options: [
      "Parse the data at the application-level prior to emitting the log from the source.",
      "Use the generic JSON processing pipeline to parse the data.",
      "Create a custom processing pipeline to parse the data based on the tagged source.",
    ],
    answer:
      "Create a custom processing pipeline to parse the data based on the tagged source.",
  },
  {
    id: "lf-17",
    question:
      "How can a sortable column based on a log's attribute be added to the List View of the Log Explorer?",
    options: [
      'from both the List View "Options" dropdown menu and from the facets panel on the left side of the Explorer',
      'from only the List View "Options" dropdown menu',
      "from the Configuration submenu item under Logs in the main navigation",
    ],
    answer:
      'from both the List View "Options" dropdown menu and from the facets panel on the left side of the Explorer',
  },
  {
    id: "lf-18",
    question:
      "From the Log Explorer, how can product stakeholders be notified of business-critical data based on a search query?",
    options: [
      "Export the search query to a new dashboard.",
      "Export the search query to a new notebook.",
      "Export the search query to a new monitor.",
    ],
    answer: "Export the search query to a new monitor.",
  },
  {
    id: "lf-19",
    question: "How are logs collected from JavaScript applications?",
    options: [
      "Datadog SDKs or libraries",
      "filing a support ticket",
      "uploading Gzip files to Datadog",
    ],
    answer: "Datadog SDKs or libraries",
  },
  {
    id: "lf-20",
    question:
      "Which Datadog Agent command allows printing of all configurations loaded in a running Agent?",
    options: ["config", "configload", "configcheck"],
    answer: "configcheck",
  },
  {
    id: "lf-21",
    question:
      "Which of the following is a benefit of leveraging Standard Attributes in logs?",
    options: ["version control", "easy to search", "API access"],
    answer: "easy to search",
  },
  {
    id: "lf-22",
    question: "How long are log-based metrics retained in Datadog?",
    options: ["15 days", "15 weeks", "15 months"],
    answer: "15 months",
  },
  {
    id: "lf-23",
    question: "By default, where are web application browser logs stored?",
    options: [
      "not stored by default",
      "in the browser application's directory on the host machine",
      "on the server that hosts the web application",
    ],
    answer: "not stored by default",
  },
  {
    id: "lf-24",
    question: "The Datadog Agent tails logs from",
    options: ["files on disk.", "TCP/UDP Sockets.", "stdout/stderr"],
    answer: "files on disk.",
  },
  {
    id: "lf-25",
    question: "Which query searches logs coming from both nginx and redis?",
    options: [
      "source:nginx AND redis",
      "source:(-nginx AND redis)",
      "source:nginx AND source:redis",
    ],
    answer: "source:nginx AND source:redis",
  },
  {
    id: "lf-26",
    question:
      "What must be enabled in the datadog.yaml file for the Agent to begin collecting logs?",
    options: [
      "logs_enabled: true",
      "collect_logs: true",
      "enable_logging: true",
    ],
    answer: "logs_enabled: true",
  },
  {
    id: "lf-27",
    question:
      "Which processor should be used to define which attribute should be used as the official timestamp of a log?",
    options: ["Grok Parser", "Date Remapper", "Status Remapper"],
    answer: "Date Remapper",
  },
  {
    id: "lf-28",
    question: "What is the primary purpose of Log Rehydration?",
    options: [
      "To move logs from the Log Explorer to a Dashboard.",
      "To search and analyze logs that have already been archived to cold storage (S3/GCS/Azure).",
      "To automatically fix parsing errors in old logs.",
    ],
    answer:
      "To search and analyze logs that have already been archived to cold storage (S3/GCS/Azure).",
  },
  {
    id: "lf-29",
    question:
      "In the Log Explorer, what is the difference between a Facet and a Measure?",
    options: [
      "Facets are for strings (categorical); Measures are for numerical values (aggregatable).",
      "Facets are for searching; Measures are only for Dashboards.",
      "Facets are free; Measures cost extra per month.",
    ],
    answer:
      "Facets are for strings (categorical); Measures are for numerical values (aggregatable).",
  },
  {
    id: "lf-30",
    question: "What is the 'Golden Rule' for correlating Logs with APM traces?",
    options: [
      "The log must be in JSON format.",
      "The log must contain dd.trace_id and dd.span_id attributes.",
      "The log must be sent from the same host as the trace.",
    ],
    answer: "The log must contain dd.trace_id and dd.span_id attributes.",
  },
  {
    id: "lf-31",
    question:
      "Which feature allows you to see a live stream of all logs being ingested by Datadog before they are indexed?",
    options: ["Live Tail", "Log Analytics", "Log Patterns"],
    answer: "Live Tail",
  },
  {
    id: "lf-32",
    question:
      "If multiple pipelines match a single log, in what order are they executed?",
    options: [
      "In the order they are listed in the Pipeline UI (Top to Bottom).",
      "In alphabetical order based on the pipeline name.",
      "Simultaneously in parallel.",
    ],
    answer: "In the order they are listed in the Pipeline UI (Top to Bottom).",
  },
  {
    id: "lf-33",
    question:
      "Which attribute is used to group logs into 'log streams' in the Log Explorer?",
    options: ["Message", "Service", "Source"],
    answer: "Service",
  },
  {
    id: "lf-34",
    question: "What does the 'Source' attribute primarily control in Datadog?",
    options: [
      "The billing category for the log.",
      "Which out-of-the-box (OOTB) integration pipeline and dashboard are applied.",
      "The physical location of the server.",
    ],
    answer:
      "Which out-of-the-box (OOTB) integration pipeline and dashboard are applied.",
  },
  {
    id: "lf-35",
    question: "Which of these is a valid destination for Datadog Log Archives?",
    options: [
      "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
      "Datadog Managed Disk",
      "Local host storage only",
    ],
    answer: "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
  },
  {
    id: "lf-36",
    question: "What is a 'Grok Rule' primarily used for?",
    options: [
      "Setting alerting thresholds.",
      "Extracting structured attributes from unstructured text messages.",
      "Masking sensitive data in the Agent.",
    ],
    answer: "Extracting structured attributes from unstructured text messages.",
  },
  {
    id: "lf-37",
    question:
      "How can you reduce costs without losing visibility into your high-volume log sources?",
    options: [
      "Turn off log collection entirely.",
      "Use Exclusion Filters to index only a percentage (sampling) of logs while archiving 100%.",
      "Compress the logs manually before sending to Datadog.",
    ],
    answer:
      "Use Exclusion Filters to index only a percentage (sampling) of logs while archiving 100%.",
  },
  {
    id: "lf-38",
    question:
      "In the Agent's conf.yaml for logs, what does the 'type' parameter specify?",
    options: [
      "The log level (INFO, WARN, ERROR).",
      "The source of the log (file, tcp, udp, journald).",
      "The programming language of the application.",
    ],
    answer: "The source of the log (file, tcp, udp, journald).",
  },
  {
    id: "lf-39",
    question: "What happens to logs that do not match any Index filters?",
    options: [
      "They are deleted immediately.",
      "They are ingested and archived, but not indexed for search (Logging Without Limits).",
      "They are sent to the 'General' index by default.",
    ],
    answer:
      "They are ingested and archived, but not indexed for search (Logging Without Limits).",
  },
  {
    id: "lf-40",
    question:
      "Which Log Explorer view helps identify 'noisy' logs by grouping similar messages together?",
    options: ["List View", "Patterns View", "Analytics View"],
    answer: "Patterns View",
  },
];

