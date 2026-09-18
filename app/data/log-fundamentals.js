export const logFundamentalsPracticeExam = [
  // ============================================================
  // OFFICIAL PRACTICE EXAM (lf-1 to lf-25) — verbatim, keys as given
  // ============================================================
  {
    id: "lf-1",
    question:
      "Which Datadog product should be used to automatically detect security signals from logs?",
    options: ["Datadog SIEM", "Datadog CSPM", "Datadog AppSec"],
    answer: "Datadog SIEM",
  },
  {
    id: "lf-2",
    question:
      "What is the maximum number of facets supported by Timeseries and Table visualizations?",
    options: ["3", "4", "5"],
    answer: "3",
  },
  {
    id: "lf-3",
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
    id: "lf-4",
    question:
      "On Linux systems, which directory should the Agent's 'dd-agent' user own in order to write to log files?",
    options: ["/tmp/log/", "/var/log/datadog/", "/etc/datadog-agent/"],
    answer: "/var/log/datadog/",
  },
  {
    id: "lf-5",
    question:
      "To present data so it is more easily understood, move a column in the Log Explorer by",
    options: [
      "clicking on a column header's dropdown menu and selecting an Insert option.",
      "Move from left to right by dragging and dropping them (6 dots icon).",
      "clicking on a column header's dropdown menu and selecting a Move option.",
    ],
    answer:
      "Move from left to right by dragging and dropping them (6 dots icon).",
  },
  {
    id: "lf-6",
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
    id: "lf-7",
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
    id: "lf-8",
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
    id: "lf-9",
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
    id: "lf-10",
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
    id: "lf-11",
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
    id: "lf-12",
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
    id: "lf-13",
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
    id: "lf-14",
    question: "How are logs collected from JavaScript applications?",
    options: [
      "Datadog SDKs or libraries",
      "filing a support ticket",
      "uploading Gzip files to Datadog",
    ],
    answer: "Datadog SDKs or libraries",
  },
  {
    id: "lf-15",
    question:
      "Which Datadog Agent command allows printing of all configurations loaded in a running Agent?",
    options: ["config", "configload", "configcheck"],
    answer: "configcheck",
  },
  {
    id: "lf-16",
    question:
      "Which of the following is a benefit of leveraging Standard Attributes in logs?",
    options: ["version control", "easy to search", "API access"],
    answer: "easy to search",
  },
  {
    id: "lf-17",
    question: "How long are log-based metrics retained in Datadog?",
    options: ["15 days", "15 weeks", "15 months"],
    answer: "15 months",
  },
  {
    id: "lf-18",
    question: "By default, where are web application browser logs stored?",
    options: [
      "not stored by default",
      "in the browser application's directory on the host machine",
      "on the server that hosts the web application",
    ],
    answer: "not stored by default",
  },
  {
    id: "lf-19",
    question: "The Datadog Agent tails logs from",
    options: ["files on disk.", "TCP/UDP Sockets.", "stdout/stderr"],
    answer: "files on disk.",
  },
  {
    id: "lf-20",
    question: "Which query searches logs coming from both nginx and redis?",
    options: [
      "source:nginx AND redis",
      "source:(-nginx AND redis)",
      "source:nginx AND source:redis",
    ],
    answer: "source:nginx AND source:redis",
  },
  {
    id: "lf-21",
    question: "Why are logs important?",
    options: [
      "They help break down slow requests by time spent in code on CPU, GC, lock contention, and I/O.",
      "They help identify trends over long periods of time.",
      "They help pinpoint the cause of problems and are written records for audit/compliance purpose.",
    ],
    answer:
      "They help pinpoint the cause of problems and are written records for audit/compliance purpose.",
  },
  {
    id: "lf-22",
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
    id: "lf-23",
    question: "Which logging format is automatically parsed by Datadog?",
    options: ["XML", "JSON", "IIS"],
    answer: "JSON",
  },
  {
    id: "lf-24",
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
    id: "lf-25",
    question:
      "By default, which directory contains logs for processes running on a Linux distribution?",
    options: ["/tmp/", "/etc/logrotate/", "/var/log/"],
    answer: "/var/log/",
  },

  // ============================================================
  // ADDITIONAL QUESTIONS (lf-26 onward)
  // Log Collection
  // ============================================================
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
      "In the Agent's conf.yaml for logs, what does the 'type' parameter specify?",
    options: [
      "the log level of the events to collect",
      "the source of the log (file, tcp, udp, journald)",
      "the programming language of the application",
    ],
    answer: "the source of the log (file, tcp, udp, journald)",
  },
  {
    id: "lf-28",
    question:
      "Which of the following should be done to collect logs from a set of files whose names change when they rotate?",
    options: [
      "Use a wildcard in the path, such as /var/log/myapp/*.log.",
      "Add a separate logs entry for each file and restart the Agent when it rotates.",
      "Set the type to directory and point the path at the parent folder.",
    ],
    answer: "Use a wildcard in the path, such as /var/log/myapp/*.log.",
  },
  {
    id: "lf-29",
    question:
      "Where are processing rules defined so that they apply to every log the Agent collects, rather than to a single integration?",
    options: [
      "In the processing_rules parameter of datadog.yaml.",
      "In the log_processing_rules parameter of each conf.d integration file.",
      "In the Datadog Log Configuration UI under Pipelines.",
    ],
    answer: "In the processing_rules parameter of datadog.yaml.",
  },
  {
    id: "lf-30",
    question:
      "Which log processing rule type sends only the logs that match a pattern and drops the rest?",
    options: ["include_at_match", "exclude_at_match", "mask_sequences"],
    answer: "include_at_match",
  },
  {
    id: "lf-31",
    question:
      "Which log processing rule type should be used to aggregate a multi-line stack trace into a single log event?",
    options: ["multi_line", "concat_lines", "stack_trace"],
    answer: "multi_line",
  },
  {
    id: "lf-32",
    question: "What is the default transport the Agent uses to send logs?",
    options: ["HTTPS", "TCP", "UDP"],
    answer: "HTTPS",
  },
  {
    id: "lf-33",
    question:
      "In Kubernetes, how are logs collected from every container without per-container configuration?",
    options: [
      "Set the container collect all option to true.",
      "Add a logs annotation to each individual pod.",
      "Disable the Agent and read /var/log/pods directly.",
    ],
    answer: "Set the container collect all option to true.",
  },
  {
    id: "lf-34",
    question:
      "Which Datadog component ships AWS CloudWatch, S3, SNS, and Kinesis logs to Datadog?",
    options: [
      "the Datadog Forwarder Lambda function",
      "the Datadog Lambda Extension",
      "the Datadog Agent running in Lambda mode",
    ],
    answer: "the Datadog Forwarder Lambda function",
  },
  {
    id: "lf-35",
    question:
      "Which credential is used by the Browser Logs SDK to send logs from a web page?",
    options: ["a client token", "an API key", "an application key"],
    answer: "a client token",
  },
  {
    id: "lf-36",
    question:
      "A log arrives with an official timestamp from three days ago. What happens to it?",
    options: [
      "It is rejected, because timestamps more than 18 hours in the past are not accepted.",
      "It is backfilled into the index at its original timestamp.",
      "Its timestamp is rewritten to the time of ingestion.",
    ],
    answer:
      "It is rejected, because timestamps more than 18 hours in the past are not accepted.",
  },
  {
    id: "lf-37",
    question: "What happens to a single log event larger than 1MB?",
    options: [
      "It is accepted and truncated.",
      "It is rejected outright.",
      "It is split across multiple log events.",
    ],
    answer: "It is accepted and truncated.",
  },
  {
    id: "lf-38",
    question:
      "The Agent is tailing a file, but the most recent line never arrives in Datadog. What is the most likely cause?",
    options: [
      "The line is not terminated with a newline character.",
      "The file is larger than the Agent's tailing limit.",
      "The service tag is missing from the configuration.",
    ],
    answer: "The line is not terminated with a newline character.",
  },
  {
    id: "lf-39",
    question:
      "Which of the following should be done to prevent logs matching a pattern from ever leaving the host?",
    options: [
      "Add an exclude_at_match processing rule in the Agent.",
      "Add an exclusion filter to the index.",
      "Add a Sensitive Data Scanner rule.",
    ],
    answer: "Add an exclude_at_match processing rule in the Agent.",
  },
  {
    id: "lf-40",
    question:
      "Which Datadog capability processes, filters, and redacts logs on your own infrastructure before they are sent for ingestion?",
    options: [
      "Observability Pipelines",
      "Log Rehydration",
      "Logging Without Limits",
    ],
    answer: "Observability Pipelines",
  },

  // ============================================================
  // Log Parsing and Processing
  // ============================================================
  {
    id: "lf-41",
    question:
      "Which processor should be used to define which attribute should be used as the official timestamp of a log?",
    options: ["Date Remapper", "Grok Parser", "Status Remapper"],
    answer: "Date Remapper",
  },
  {
    id: "lf-42",
    question:
      "Which processor should be used to map a custom 'level' or 'severity' field onto the official log status?",
    options: ["Status Remapper", "Category Processor", "Attribute Remapper"],
    answer: "Status Remapper",
  },
  {
    id: "lf-43",
    question:
      "Which processor should be used to extract structured attributes from an unstructured text message?",
    options: ["Grok Parser", "Attribute Remapper", "String Builder Processor"],
    answer: "Grok Parser",
  },
  {
    id: "lf-44",
    question: "What is the correct syntax for a Grok parsing rule?",
    options: [
      "%{MATCHER:extractedFieldName}",
      "${MATCHER=extractedFieldName}",
      "{{MATCHER->extractedFieldName}}",
    ],
    answer: "%{MATCHER:extractedFieldName}",
  },
  {
    id: "lf-45",
    question:
      "Which processor should be used when a single field of an otherwise plain text log contains a JSON object?",
    options: ["JSON Parser", "Grok Parser", "Attribute Remapper"],
    answer: "JSON Parser",
  },
  {
    id: "lf-46",
    question:
      "Which processor should be used to group an HTTP status code range such as 400 to 499 under a single value?",
    options: ["Category Processor", "Arithmetic Processor", "Lookup Processor"],
    answer: "Category Processor",
  },
  {
    id: "lf-47",
    question:
      "Which processor should be used to enrich a log by matching an attribute against a static mapping table?",
    options: ["Lookup Processor", "Category Processor", "GeoIP Parser"],
    answer: "Lookup Processor",
  },
  {
    id: "lf-48",
    question:
      "Which processor should be used to convert a duration attribute from milliseconds to seconds?",
    options: ["Arithmetic Processor", "Measure Processor", "Grok Parser"],
    answer: "Arithmetic Processor",
  },
  {
    id: "lf-49",
    question:
      "Which processor should be used to derive country and city information from an IP address attribute?",
    options: ["GeoIP Parser", "Lookup Processor", "User-Agent Parser"],
    answer: "GeoIP Parser",
  },
  {
    id: "lf-50",
    question:
      "Which processor should be used to extract browser, device, and OS details from a raw user agent string?",
    options: ["User-Agent Parser", "Grok Parser", "Category Processor"],
    answer: "User-Agent Parser",
  },
  {
    id: "lf-51",
    question:
      "If multiple pipelines match a single log, in what order are they applied?",
    options: [
      "in the order they are listed in the Pipelines UI, top to bottom",
      "in alphabetical order by pipeline name",
      "simultaneously, in parallel",
    ],
    answer: "in the order they are listed in the Pipelines UI, top to bottom",
  },
  {
    id: "lf-52",
    question:
      "Two Log Message Remapper processors are configured in the same pipeline. What happens?",
    options: [
      "Only the first one in pipeline order is applied.",
      "Both are applied and their values are concatenated.",
      "The pipeline fails and no processors are applied.",
    ],
    answer: "Only the first one in pipeline order is applied.",
  },
  {
    id: "lf-53",
    question:
      "When does preprocessing for JSON logs run relative to log processing pipelines?",
    options: [
      "before any pipeline",
      "after all pipelines, just before indexing",
      "in parallel with the first matching pipeline",
    ],
    answer: "before any pipeline",
  },
  {
    id: "lf-54",
    question:
      "Which date formats are recognized for the official timestamp of a log?",
    options: [
      "ISO8601, UNIX epoch in milliseconds, and RFC3164",
      "ISO8601 and RFC1123 only",
      "any format, since the timestamp is always inferred",
    ],
    answer: "ISO8601, UNIX epoch in milliseconds, and RFC3164",
  },
  {
    id: "lf-55",
    question: "What does the 'source' attribute of a log control?",
    options: [
      "which out-of-the-box integration pipeline and dashboards are applied",
      "which index the log is written to",
      "the physical location of the host that emitted the log",
    ],
    answer:
      "which out-of-the-box integration pipeline and dashboards are applied",
  },
  {
    id: "lf-56",
    question:
      "Which attribute holds the stack trace so that it renders in Datadog's dedicated error view?",
    options: ["error.stack", "error.message", "logger.name"],
    answer: "error.stack",
  },
  {
    id: "lf-57",
    question:
      "Which attribute holds the type of an error, such as Exception or OSError?",
    options: ["error.kind", "error.type", "status"],
    answer: "error.kind",
  },
  {
    id: "lf-58",
    question:
      "Which standard attribute should a client IP address be remapped to?",
    options: ["network.client.ip", "http.client_ip", "usr.ip"],
    answer: "network.client.ip",
  },
  {
    id: "lf-59",
    question:
      "What must a log contain in order to be correlated with an APM trace?",
    options: [
      "trace_id and span_id attributes",
      "a matching host tag",
      "JSON formatting",
    ],
    answer: "trace_id and span_id attributes",
  },
  {
    id: "lf-60",
    question:
      "Which three tags are used for unified service tagging across logs, metrics, and traces?",
    options: [
      "env, service, version",
      "env, service, host",
      "service, source, status",
    ],
    answer: "env, service, version",
  },

  // ============================================================
  // Searching and Filtering
  // ============================================================
  {
    id: "lf-61",
    question:
      "Which feature should be used to see a live stream of logs as they are ingested, before they are indexed?",
    options: ["Live Tail", "Log Patterns", "Archive Search"],
    answer: "Live Tail",
  },
  {
    id: "lf-62",
    question: "What does the query *:prod search?",
    options: [
      "all log attributes with the value prod",
      "the log message for the term prod",
      "only logs tagged env:prod",
    ],
    answer: "all log attributes with the value prod",
  },
  {
    id: "lf-63",
    question: "What does the query prod* search?",
    options: [
      "log messages containing strings that start with prod",
      "log attributes containing strings that start with prod",
      "logs from the production index only",
    ],
    answer: "log messages containing strings that start with prod",
  },
  {
    id: "lf-64",
    question: 'What does the query "*test*" search?',
    options: [
      "log messages containing the literal string *test*",
      "log messages containing test anywhere in the message",
      "nothing, because wildcards cannot be quoted",
    ],
    answer: "log messages containing the literal string *test*",
  },
  {
    id: "lf-65",
    question: "What does the query service:web -status:error return?",
    options: [
      "logs from the web service that do not have an error status",
      "logs from the web service that have an error status",
      "an error, because the minus sign must precede the whole query",
    ],
    answer: "logs from the web service that do not have an error status",
  },
  {
    id: "lf-66",
    question:
      "Which statement about case sensitivity in log search is correct?",
    options: [
      "Attribute and tag searches are case sensitive, and full text search is not.",
      "All log searches are case insensitive.",
      "All log searches are case sensitive.",
    ],
    answer:
      "Attribute and tag searches are case sensitive, and full text search is not.",
  },
  {
    id: "lf-67",
    question: "How can special characters in a log message be made searchable?",
    options: [
      "Parse them into an attribute with a Grok Parser and search the attribute.",
      "Escape each one with a backslash in the search query.",
      "Search for them in Live Tail instead of the Log Explorer.",
    ],
    answer:
      "Parse them into an attribute with a Grok Parser and search the attribute.",
  },
  {
    id: "lf-68",
    question:
      "What must be done before a numerical attribute can be searched with operators such as greater than or equal to?",
    options: [
      "It must first be added as a facet.",
      "It must be added to the list of reserved attributes.",
      "Nothing, since numerical operators work on any attribute.",
    ],
    answer: "It must first be added as a facet.",
  },
  {
    id: "lf-69",
    question:
      "In the Log Explorer, what is the difference between a facet and a measure?",
    options: [
      "Facets are for categorical string values, and measures are for numerical values that can be aggregated.",
      "Facets are used for searching, and measures are only available on dashboards.",
      "Facets apply to indexed logs, and measures apply to archived logs.",
    ],
    answer:
      "Facets are for categorical string values, and measures are for numerical values that can be aggregated.",
  },
  {
    id: "lf-70",
    question: "Which units are supported for measures?",
    options: ["time and size", "time and count", "size and percentage"],
    answer: "time and size",
  },
  {
    id: "lf-71",
    question:
      "How can a facet be created on an attribute nested inside an array of JSON objects?",
    options: [
      "Extract the attribute with a Grok Parser first, then create the facet.",
      "Create the facet directly from the log side panel.",
      "Arrays cannot be faceted under any circumstances.",
    ],
    answer:
      "Extract the attribute with a Grok Parser first, then create the facet.",
  },
  {
    id: "lf-72",
    question: "When a new facet is created, which logs does it apply to?",
    options: [
      "all new logs going forward",
      "all logs, retroactively",
      "only logs in the index where it was created",
    ],
    answer: "all new logs going forward",
  },
  {
    id: "lf-73",
    question:
      "Which prefix is used to reference a calculated field in a Log Explorer query?",
    options: ["#", "@", "$"],
    answer: "#",
  },
  {
    id: "lf-74",
    question:
      "Which of the following should be done to save a query, its columns, and its time range for reuse by a teammate?",
    options: [
      "Create a Saved View.",
      "Export the query to a notebook.",
      "Create a facet for the query.",
    ],
    answer: "Create a Saved View.",
  },

  // ============================================================
  // Analysis, Indexes, and Archives
  // ============================================================
  {
    id: "lf-75",
    question:
      "Which Log Explorer view helps identify noisy logs by grouping similar messages together?",
    options: ["Patterns", "List", "Transactions"],
    answer: "Patterns",
  },
  {
    id: "lf-76",
    question:
      "Which Log Explorer aggregation groups related log events that share a common identifier, such as a session or request ID?",
    options: ["Transactions", "Patterns", "Fields"],
    answer: "Transactions",
  },
  {
    id: "lf-77",
    question: "How many indexes can a single log event be written to?",
    options: [
      "one, the first index whose filter it matches",
      "all indexes whose filters it matches",
      "one, selected at random from the matching indexes",
    ],
    answer: "one, the first index whose filter it matches",
  },
  {
    id: "lf-78",
    question: "What happens to logs that do not match any index filter?",
    options: [
      "They are ingested and can be archived, but they are not indexed for search.",
      "They are dropped at ingestion and cannot be recovered.",
      "They are written to a default index.",
    ],
    answer:
      "They are ingested and can be archived, but they are not indexed for search.",
  },
  {
    id: "lf-79",
    question:
      "An index has reached its daily quota. What is still available for the logs beyond that quota?",
    options: [
      "Live Tail, archiving, and log-based metric generation",
      "indexed search for the remainder of the day",
      "nothing, since the logs are dropped at ingestion",
    ],
    answer: "Live Tail, archiving, and log-based metric generation",
  },
  {
    id: "lf-80",
    question:
      "Which of the following should be done to reduce indexing costs on a high-volume log source without losing the data?",
    options: [
      "Use an exclusion filter to index a sample of the logs while archiving all of them.",
      "Disable log collection for that source in the Agent.",
      "Reduce the index retention period to one day.",
    ],
    answer:
      "Use an exclusion filter to index a sample of the logs while archiving all of them.",
  },
  {
    id: "lf-81",
    question: "What is the primary purpose of Log Rehydration?",
    options: [
      "to search and analyze logs that were already archived to cloud storage",
      "to move logs from the Log Explorer into a dashboard",
      "to reprocess logs through an updated parsing pipeline",
    ],
    answer:
      "to search and analyze logs that were already archived to cloud storage",
  },
  {
    id: "lf-82",
    question:
      "Which of these is a valid destination for a Datadog log archive?",
    options: [
      "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
      "a Datadog managed disk",
      "local storage on the Agent host",
    ],
    answer: "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
  },
  {
    id: "lf-83",
    question:
      "Which permissions does Datadog require on an S3 bucket used as an archive destination?",
    options: [
      "both GetObject and PutObject",
      "PutObject only",
      "GetObject only",
    ],
    answer: "both GetObject and PutObject",
  },
  {
    id: "lf-84",
    question: "Which naming rule applies to a log index?",
    options: [
      "It must start with a letter and contain only lowercase letters, numbers, and hyphens.",
      "It can contain any character except a space.",
      "It must be uppercase and no longer than eight characters.",
    ],
    answer:
      "It must start with a letter and contain only lowercase letters, numbers, and hyphens.",
  },
  {
    id: "lf-85",
    question: "Which use case is the Flex Tier best suited for?",
    options: [
      "logs that are queried infrequently but must remain searchable for a long retention period",
      "logs that drive real-time monitors and dashboards",
      "logs that must never leave your own cloud account",
    ],
    answer:
      "logs that are queried infrequently but must remain searchable for a long retention period",
  },

  // ============================================================
  // Utilization
  // ============================================================
  {
    id: "lf-86",
    question:
      "Which syntax correctly references a log attribute named error.message in a log monitor notification?",
    options: [
      "{{ log.attributes.[error.message] }}",
      "{{ log.attributes.error.message }}",
      "{{ @error.message }}",
    ],
    answer: "{{ log.attributes.[error.message] }}",
  },
  {
    id: "lf-87",
    question: "At what interval are log-based metric data points generated?",
    options: ["every 10 seconds", "every second", "every 60 seconds"],
    answer: "every 10 seconds",
  },
  {
    id: "lf-88",
    question:
      "By default, which tags does a log-based metric carry from the originating log?",
    options: [
      "none, since dimensions must be added explicitly when the metric is defined",
      "all attributes of the log, converted to tags",
      "only the reserved attributes of the log",
    ],
    answer:
      "none, since dimensions must be added explicitly when the metric is defined",
  },
  {
    id: "lf-89",
    question:
      "A log is excluded from indexing by an exclusion filter. Can it still contribute to a log-based metric?",
    options: [
      "Yes, because log-based metrics are generated from ingested logs before indexing.",
      "No, because only indexed logs can generate metrics.",
      "Only if the metric is defined against an archive.",
    ],
    answer:
      "Yes, because log-based metrics are generated from ingested logs before indexing.",
  },
  {
    id: "lf-90",
    question:
      "How does Sensitive Data Scanner differ from an Agent mask sequence rule?",
    options: [
      "Sensitive Data Scanner redacts inside the Datadog platform after ingestion, while the Agent rule redacts on the host before transmission.",
      "Sensitive Data Scanner only works on JSON logs, while the Agent rule works on any format.",
      "They are the same feature, with Sensitive Data Scanner being the UI for it.",
    ],
    answer:
      "Sensitive Data Scanner redacts inside the Datadog platform after ingestion, while the Agent rule redacts on the host before transmission.",
  },

  // ============================================================
  // Troubleshooting
  // ============================================================
  {
    id: "lf-91",
    question:
      "Logs are no longer being indexed, but they are still visible in Live Tail. Where should you check first?",
    options: [
      "the index daily quota",
      "the Agent's processing rules",
      "the log archive configuration",
    ],
    answer: "the index daily quota",
  },
  {
    id: "lf-92",
    question:
      "Logs do not appear in Live Tail at all. Which of the following is a likely cause?",
    options: [
      "Their timestamp was more than 18 hours in the past, so they were dropped.",
      "An exclusion filter is applied to the index.",
      "No facet has been created for the service attribute.",
    ],
    answer:
      "Their timestamp was more than 18 hours in the past, so they were dropped.",
  },
  {
    id: "lf-93",
    question:
      "Which Agent command shows whether the Logs Agent is running and which files it is tailing?",
    options: ["status", "configcheck", "flare"],
    answer: "status",
  },
  {
    id: "lf-94",
    question:
      "Why do non-error messages from containers sometimes arrive with an error severity?",
    options: [
      "They are written to stderr, which is interpreted as an error stream.",
      "The JSON preprocessing step fails on them.",
      "They are missing an official timestamp.",
    ],
    answer:
      "They are written to stderr, which is interpreted as an error stream.",
  },
  {
    id: "lf-95",
    question:
      "Which tool should be used to find which processor modified or removed a parsed attribute?",
    options: [
      "the Pipeline Scanner",
      "the Log Explorer Patterns view",
      "the Agent flare",
    ],
    answer: "the Pipeline Scanner",
  },
  {
    id: "lf-96",
    question:
      "Which metric helps identify which service and source are emitting logs large enough to be truncated?",
    options: [
      "the estimated usage truncated count metric",
      "the estimated usage ingested events metric",
      "the estimated usage indexed events metric",
    ],
    answer: "the estimated usage truncated count metric",
  },

  // ============================================================
  // Fundamentals
  // ============================================================
  {
    id: "lf-97",
    question: "What are logs?",
    options: [
      "timestamped records of events that occur in software and systems",
      "time-averaged measurements of system health",
      "sampled traces of requests through a distributed system",
    ],
    answer: "timestamped records of events that occur in software and systems",
  },
  {
    id: "lf-98",
    question:
      "Which of the following is a reserved attribute that does not require the @ prefix when searched?",
    options: ["host", "duration", "customer_id"],
    answer: "host",
  },
  {
    id: "lf-99",
    question:
      "Which attribute corresponds to the severity level of a log, such as info, warning, or error?",
    options: ["status", "service", "message"],
    answer: "status",
  },
  {
    id: "lf-100",
    question:
      "In a containerized environment, where should an application write its logs?",
    options: [
      "to stdout and stderr, so the container runtime captures them",
      "to a file inside the container's writable layer",
      "directly to the Datadog intake from application code",
    ],
    answer: "to stdout and stderr, so the container runtime captures them",
  },
  {
    id: "lf-101",
    question:
      "Why is it important to centralize logs from all services in a single log management system?",
    options: [
      "to search and correlate across sources that would otherwise be isolated",
      "to prevent errors from occurring in the applications themselves",
      "to remove the need to collect metrics and traces",
    ],
    answer:
      "to search and correlate across sources that would otherwise be isolated",
  },
];
