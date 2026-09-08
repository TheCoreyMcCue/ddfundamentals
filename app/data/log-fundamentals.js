export const logFundamentalsPracticeExam = [
  {
    id: "lf-1",
    question: "What are logs?",
    options: [
      "timestamped records of events that occur in software and systems",
      "time-averaged measurements of service health",
      "snapshots of dashboard state",
    ],
    answer: "timestamped records of events that occur in software and systems",
  },
  {
    id: "lf-2",
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
    id: "lf-3",
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
    id: "lf-4",
    question:
      "Why is it important to centralize and aggregate logs from all your services in a single log management system?",
    options: [
      "To automatically prevent all errors in your applications",
      "To aggregate logs from many sources and enable quick search and analysis across them",
      "To enforce that developers write fewer log statements",
      "To replace the need for metrics and tracing entirely",
    ],
    answer:
      "To aggregate logs from many sources and enable quick search and analysis across them",
  },
  {
    id: "lf-5",
    question: "Which of the following is NOT a typical use of logs?",
    options: [
      "Troubleshooting errors in an application",
      "Monitoring security incidents",
      "Keeping a real-time count of active users without any historical record",
      "Auditing changes to system configurations",
    ],
    answer:
      "Keeping a real-time count of active users without any historical record",
  },
  {
    id: "lf-6",
    question: "Which logging format is automatically parsed by Datadog?",
    options: ["XML", "JSON", "IIS"],
    answer: "JSON",
  },
  {
    id: "lf-7",
    question: "What happens when you send a JSON-formatted log to Datadog?",
    options: [
      "The log is stored as a single text string and you must parse it later.",
      "Datadog automatically parses the JSON and extracts its fields as log attributes.",
      "Datadog rejects JSON logs unless you enable JSON mode.",
      "Only the message field is kept and other fields are dropped.",
    ],
    answer:
      "Datadog automatically parses the JSON and extracts its fields as log attributes.",
  },
  {
    id: "lf-8",
    question:
      "Which attribute corresponds to the severity level of a log, such as info, warning or error?",
    options: ["service", "host", "status", "message"],
    answer: "status",
  },
  {
    id: "lf-9",
    question: "Which of the following log attributes is a reserved attribute?",
    options: ["environment", "message", "duration", "customer_id"],
    answer: "message",
  },
  {
    id: "lf-10",
    question:
      "Which three tags make up unified service tagging for correlating logs, metrics and traces?",
    options: [
      "service, env, version",
      "service, host, source",
      "env, host, status",
    ],
    answer: "service, env, version",
  },
  {
    id: "lf-11",
    question: "What does Logging Without Limits allow you to do?",
    options: [
      "Ingest and archive 100 percent of logs while choosing only a subset to index for search and analytics",
      "Index all ingested logs by default with no option to drop any",
      "Reject logs above a certain volume",
      "Automatically delete older logs even if you wanted to search them",
    ],
    answer:
      "Ingest and archive 100 percent of logs while choosing only a subset to index for search and analytics",
  },
  {
    id: "lf-12",
    question: "By default, where are web application browser logs stored?",
    options: [
      "not stored by default",
      "in the browser application's directory on the host machine",
      "on the server that hosts the web application",
    ],
    answer: "not stored by default",
  },
  {
    id: "lf-13",
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
    id: "lf-14",
    question: "The Datadog Agent tails logs from",
    options: ["files on disk.", "TCP/UDP Sockets.", "stdout/stderr"],
    answer: "files on disk.",
  },
  {
    id: "lf-15",
    question:
      "By default, which directory contains logs for processes running on a Linux distribution?",
    options: ["/tmp/", "/etc/logrotate/", "/var/log/"],
    answer: "/var/log/",
  },
  {
    id: "lf-16",
    question:
      "On Linux systems, which directory should the Agent's 'dd-agent' user own in order to write to log files?",
    options: ["/tmp/log/", "/var/log/datadog/", "/etc/datadog-agent/"],
    answer: "/var/log/datadog/",
  },
  {
    id: "lf-17",
    question: "How are logs collected from JavaScript applications?",
    options: [
      "Datadog SDKs or libraries",
      "filing a support ticket",
      "uploading Gzip files to Datadog",
    ],
    answer: "Datadog SDKs or libraries",
  },
  {
    id: "lf-18",
    question:
      "Which credential does the Datadog Browser Logs SDK use to send logs from a web page?",
    options: ["an API key", "a client token", "an application key"],
    answer: "a client token",
  },
  {
    id: "lf-19",
    question:
      "What is the default transport used by the Agent to send logs to Datadog?",
    options: ["HTTPS", "TCP over port 10516", "UDP syslog"],
    answer: "HTTPS",
  },
  {
    id: "lf-20",
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
    id: "lf-21",
    question:
      "How do you tail a set of log files whose names change on rotation, for example app-2026-01-01.log?",
    options: [
      "Use a wildcard in the path, for example /var/log/myapp/app-*.log.",
      "Add a separate logs entry for each file and restart the Agent nightly.",
      "Point the path at the directory and set type to directory.",
    ],
    answer: "Use a wildcard in the path, for example /var/log/myapp/app-*.log.",
  },
  {
    id: "lf-22",
    question:
      "In Kubernetes, how do you collect logs from every container without adding per-container configuration?",
    options: [
      "Set DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL to true.",
      "Add a com.datadoghq.ad.logs annotation to each pod.",
      "Mount /var/log/pods into the Agent and set logs_enabled to false.",
    ],
    answer: "Set DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL to true.",
  },
  {
    id: "lf-23",
    question:
      "Which AWS Lambda function ships CloudWatch, S3, SNS and Kinesis logs to Datadog?",
    options: [
      "the Datadog Forwarder",
      "the Datadog Lambda Extension",
      "the Datadog Agent in Lambda mode",
    ],
    answer: "the Datadog Forwarder",
  },
  {
    id: "lf-24",
    question: "What happens to a single log event larger than 1MB?",
    options: [
      "It is rejected outright.",
      "It is accepted and truncated.",
      "It is split into multiple log events.",
    ],
    answer: "It is accepted and truncated.",
  },
  {
    id: "lf-25",
    question:
      "Which limits apply to a single request to the Datadog logs HTTP intake?",
    options: [
      "5MB uncompressed payload, 1MB per log, 1000 logs per array",
      "1MB uncompressed payload, 256KB per log, 500 logs per array",
      "10MB uncompressed payload, 5MB per log, 10000 logs per array",
    ],
    answer: "5MB uncompressed payload, 1MB per log, 1000 logs per array",
  },
  {
    id: "lf-26",
    question:
      "A log arrives with an official date of three days ago. What happens to it?",
    options: [
      "It is backfilled into the index at the correct timestamp.",
      "It is rejected, because Datadog does not accept logs with a timestamp more than 18 hours in the past.",
      "Its timestamp is silently rewritten to the ingestion time.",
    ],
    answer:
      "It is rejected, because Datadog does not accept logs with a timestamp more than 18 hours in the past.",
  },
  {
    id: "lf-27",
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
    id: "lf-28",
    question:
      "Which log_processing_rules type sends only the logs that match a given pattern and drops the rest?",
    options: ["include_at_match", "exclude_at_match", "mask_sequences"],
    answer: "include_at_match",
  },
  {
    id: "lf-29",
    question:
      "Which log_processing_rules type is used to aggregate a Java stack trace into a single log event?",
    options: ["multi_line", "concat_lines", "stack_trace"],
    answer: "multi_line",
  },
  {
    id: "lf-30",
    question:
      "If log data is important but contains sensitive material, how can that log be processed with the sensitive data hidden before it leaves the host?",
    options: [
      "Add a log processing rule of type mask_sequences to match sensitive data patterns and mask them.",
      "Add a log parsing pipeline to match sensitive data patterns and mask it.",
      "Mask the log data at the application level before emitting it.",
    ],
    answer:
      "Add a log processing rule of type mask_sequences to match sensitive data patterns and mask them.",
  },
  {
    id: "lf-31",
    question:
      "You want logs matching a pattern never to leave your host. Which mechanism do you use?",
    options: [
      "an Agent exclude_at_match rule",
      "an index exclusion filter",
      "a Sensitive Data Scanner rule",
    ],
    answer: "an Agent exclude_at_match rule",
  },
  {
    id: "lf-32",
    question:
      "How does Sensitive Data Scanner differ from Agent-side mask_sequences?",
    options: [
      "It scans and redacts inside the Datadog platform after ingestion.",
      "It runs on the host before logs are transmitted.",
      "It is the UI configuration surface for mask_sequences.",
    ],
    answer: "It scans and redacts inside the Datadog platform after ingestion.",
  },
  {
    id: "lf-33",
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
    id: "lf-34",
    question:
      "Which Datadog capability lets you process, filter and redact logs on your own infrastructure before they are sent for ingestion?",
    options: [
      "Observability Pipelines",
      "Log Rehydration",
      "Logging Without Limits",
    ],
    answer: "Observability Pipelines",
  },
  {
    id: "lf-35",
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
    id: "lf-36",
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
    id: "lf-37",
    question: "What is a 'Grok Rule' primarily used for?",
    options: [
      "Setting alerting thresholds.",
      "Extracting structured attributes from unstructured text messages.",
      "Masking sensitive data in the Agent.",
    ],
    answer: "Extracting structured attributes from unstructured text messages.",
  },
  {
    id: "lf-38",
    question: "What is the correct syntax for a Grok parsing rule?",
    options: [
      "%{MATCHER:extractedFieldName}",
      "${MATCHER=extractedFieldName}",
      "{{MATCHER->extractedFieldName}}",
    ],
    answer: "%{MATCHER:extractedFieldName}",
  },
  {
    id: "lf-39",
    question:
      "Which processor should be used to define which attribute should be used as the official timestamp of a log?",
    options: ["Grok Parser", "Date Remapper", "Status Remapper"],
    answer: "Date Remapper",
  },
  {
    id: "lf-40",
    question:
      "Which processor maps a custom field such as 'level' or 'severity' onto Datadog's status attribute?",
    options: ["Status Remapper", "Category Processor", "Attribute Remapper"],
    answer: "Status Remapper",
  },
  {
    id: "lf-41",
    question:
      "Which processor enriches a log by matching an attribute value against a static mapping table you provide?",
    options: ["Lookup Processor", "String Builder Processor", "Trace Remapper"],
    answer: "Lookup Processor",
  },
  {
    id: "lf-42",
    question:
      "Which processor performs basic math on numeric fields, for example converting milliseconds to seconds?",
    options: ["Arithmetic Processor", "Measure Processor", "Grok Parser"],
    answer: "Arithmetic Processor",
  },
  {
    id: "lf-43",
    question:
      "Which processor should be used when a single field of an otherwise plain log contains a JSON blob?",
    options: ["JSON Parser", "Grok Parser", "String Builder Processor"],
    answer: "JSON Parser",
  },
  {
    id: "lf-44",
    question:
      "When does preprocessing for JSON logs run relative to log processing pipelines?",
    options: [
      "Before any pipeline, using the reserved attribute mapping list.",
      "After all pipelines, immediately before indexing.",
      "In parallel with the first matching pipeline.",
    ],
    answer: "Before any pipeline, using the reserved attribute mapping list.",
  },
  {
    id: "lf-45",
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
    id: "lf-46",
    question:
      "Two Log Message Remapper processors are configured in the same pipeline. What happens?",
    options: [
      "Only the first one in pipeline order is applied.",
      "Both are applied and the values are concatenated.",
      "The pipeline fails validation and no processors run.",
    ],
    answer: "Only the first one in pipeline order is applied.",
  },
  {
    id: "lf-47",
    question:
      "Which date formats does Datadog recognize for the official log timestamp?",
    options: [
      "ISO8601, UNIX epoch in milliseconds, and RFC3164",
      "ISO8601 and RFC1123 only",
      "Any format, as it is inferred automatically",
    ],
    answer: "ISO8601, UNIX epoch in milliseconds, and RFC3164",
  },
  {
    id: "lf-48",
    question:
      "Which of the following is a benefit of leveraging Standard Attributes in logs?",
    options: ["version control", "easy to search", "API access"],
    answer: "easy to search",
  },
  {
    id: "lf-49",
    question:
      "Which Datadog standard attribute should a client IP address be remapped to?",
    options: ["network.client.ip", "http.client_ip", "usr.ip"],
    answer: "network.client.ip",
  },
  {
    id: "lf-50",
    question:
      "Which attribute holds the actual stack trace so it renders in Datadog's dedicated error UI?",
    options: ["error.stack", "error.message", "logger.thread_name"],
    answer: "error.stack",
  },
  {
    id: "lf-51",
    question:
      "Which attribute holds the type of an error, for example Exception or OSError?",
    options: ["error.kind", "error.type", "status"],
    answer: "error.kind",
  },
  {
    id: "lf-52",
    question:
      "What do integration pipelines attempt to do with stack traces by default?",
    options: [
      "Remap default logging library parameters and extract error.message and error.kind automatically.",
      "Discard them to reduce indexed volume.",
      "Convert them into log-based metrics.",
    ],
    answer:
      "Remap default logging library parameters and extract error.message and error.kind automatically.",
  },
  {
    id: "lf-53",
    question: "What is the 'Golden Rule' for correlating Logs with APM traces?",
    options: [
      "The log must be in JSON format.",
      "The log must contain dd.trace_id and dd.span_id attributes.",
      "The log must be sent from the same host as the trace.",
    ],
    answer: "The log must contain dd.trace_id and dd.span_id attributes.",
  },
  {
    id: "lf-54",
    question:
      "Which feature allows you to see a live stream of all logs being ingested by Datadog before they are indexed?",
    options: ["Live Tail", "Log Analytics", "Log Patterns"],
    answer: "Live Tail",
  },
  {
    id: "lf-55",
    question:
      "What is the key difference between Live Tail and the Log Explorer?",
    options: [
      "Live Tail streams all ingested logs in near real time, including logs that are never indexed.",
      "Live Tail searches archived logs, while the Explorer searches indexed logs.",
      "Live Tail is limited to a single service at a time.",
    ],
    answer:
      "Live Tail streams all ingested logs in near real time, including logs that are never indexed.",
  },
  {
    id: "lf-56",
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
    id: "lf-57",
    question:
      "Which query returns logs coming from either the nginx source or the redis source?",
    options: [
      "source:nginx AND source:redis",
      "source:(nginx OR redis)",
      "source:nginx source:redis",
    ],
    answer: "source:(nginx OR redis)",
  },
  {
    id: "lf-58",
    question: "What does the query *:prod match?",
    options: [
      "all log attributes with the value prod",
      "the log message containing the term prod",
      "all logs from the prod environment only",
    ],
    answer: "all log attributes with the value prod",
  },
  {
    id: "lf-59",
    question: "What does the query prod* match?",
    options: [
      "log messages containing strings that start with prod",
      "log attributes containing strings that start with prod",
      "logs tagged env:prod exclusively",
    ],
    answer: "log messages containing strings that start with prod",
  },
  {
    id: "lf-60",
    question: 'What does the query "*test*" with double quotes match?',
    options: [
      "logs whose message contains the literal string *test*",
      "logs whose message contains test anywhere",
      "nothing; quoted wildcards are invalid",
    ],
    answer: "logs whose message contains the literal string *test*",
  },
  {
    id: "lf-61",
    question: "What does the query 'service:web -status:error' return?",
    options: [
      "logs from the web service that do not have an error status",
      "logs from the web service that have an error status",
      "an invalid query, because the minus sign must precede the whole query",
    ],
    answer: "logs from the web service that do not have an error status",
  },
  {
    id: "lf-62",
    question:
      "Which statement about case sensitivity in log search is correct?",
    options: [
      "Attribute and tag searches are case sensitive; full-text search is case insensitive.",
      "All log searches are case insensitive.",
      "All log searches are case sensitive.",
    ],
    answer:
      "Attribute and tag searches are case sensitive; full-text search is case insensitive.",
  },
  {
    id: "lf-63",
    question:
      "Which wildcard matches a single special character or space inside an attribute value?",
    options: ["?", "*", "."],
    answer: "?",
  },
  {
    id: "lf-64",
    question:
      "Can you search for special characters directly in a log message?",
    options: [
      "No. Parse them into an attribute with a Grok Parser and search the attribute.",
      "Yes, by escaping each one with a backslash.",
      "Yes, but only in Live Tail.",
    ],
    answer:
      "No. Parse them into an attribute with a Grok Parser and search the attribute.",
  },
  {
    id: "lf-65",
    question:
      "What must you do before you can search a numerical attribute with operators such as >=?",
    options: [
      "First add it as a facet.",
      "Add it to the reserved attribute list.",
      "Nothing; numerical operators work on any attribute.",
    ],
    answer: "First add it as a facet.",
  },
  {
    id: "lf-66",
    question:
      "Which prefix references a calculated field in a Log Explorer query?",
    options: ["#", "@", "$"],
    answer: "#",
  },
  {
    id: "lf-67",
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
    id: "lf-68",
    question: "Which units are supported for measures?",
    options: ["time and size", "time and count", "size and percentage"],
    answer: "time and size",
  },
  {
    id: "lf-69",
    question:
      "How do you create a facet on an attribute inside an array of JSON objects?",
    options: [
      "Use a Grok Parser to extract the attribute first, then create the facet.",
      "Create the facet directly from the log side panel.",
      "Arrays cannot be faceted.",
    ],
    answer:
      "Use a Grok Parser to extract the attribute first, then create the facet.",
  },
  {
    id: "lf-70",
    question: "When a new facet is created, which logs does it populate for?",
    options: [
      "all new logs going forward",
      "all logs, retroactively",
      "only logs in the index where it was defined",
    ],
    answer: "all new logs going forward",
  },
  {
    id: "lf-71",
    question:
      "Roughly how many facets does Datadog recommend keeping for optimal usage?",
    options: ["at most 1000", "at most 50", "at most 10000"],
    answer: "at most 1000",
  },
  {
    id: "lf-72",
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
    id: "lf-73",
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
    id: "lf-74",
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
    id: "lf-75",
    question:
      "What is the maximum number of facets supported by Timeseries and Table visualizations?",
    options: ["3", "4", "5"],
    answer: "4",
  },
  {
    id: "lf-76",
    question:
      "Which Log Explorer view helps identify 'noisy' logs by grouping similar messages together?",
    options: ["List View", "Patterns View", "Analytics View"],
    answer: "Patterns View",
  },
  {
    id: "lf-77",
    question:
      "Which Log Explorer aggregation groups related log events that share a common identifier, such as a session or request id?",
    options: ["Transactions", "Patterns", "Fields"],
    answer: "Transactions",
  },
  {
    id: "lf-78",
    question: "How many indexes can a single log event be written to?",
    options: [
      "one, the first index whose filter it matches",
      "all indexes whose filters it matches",
      "one, chosen at random among matching indexes",
    ],
    answer: "one, the first index whose filter it matches",
  },
  {
    id: "lf-79",
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
    id: "lf-80",
    question:
      "An index reaches its daily quota. What still works for the logs beyond the quota?",
    options: [
      "Live Tail, archiving, and log-based metric generation",
      "nothing; the logs are dropped at ingestion",
      "indexed search, but only for the remainder of the day",
    ],
    answer: "Live Tail, archiving, and log-based metric generation",
  },
  {
    id: "lf-81",
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
    id: "lf-82",
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
    id: "lf-83",
    question: "Which of these is a valid destination for Datadog Log Archives?",
    options: [
      "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
      "Datadog Managed Disk",
      "Local host storage only",
    ],
    answer: "Amazon S3, Google Cloud Storage, or Azure Blob Storage",
  },
  {
    id: "lf-84",
    question:
      "Which S3 permissions does Datadog need on a bucket used as a log archive destination?",
    options: [
      "s3:PutObject only",
      "s3:GetObject only",
      "both s3:GetObject and s3:PutObject",
    ],
    answer: "both s3:GetObject and s3:PutObject",
  },
  {
    id: "lf-85",
    question: "What is the Flex Tier best suited for?",
    options: [
      "logs that are queried infrequently but must stay searchable for a long retention period",
      "logs that drive real-time monitors and dashboards",
      "logs that must never leave your own cloud account",
    ],
    answer:
      "logs that are queried infrequently but must stay searchable for a long retention period",
  },
  {
    id: "lf-86",
    question: "Which naming rule applies to a log index?",
    options: [
      "It must start with a letter and may contain only lowercase letters, numbers and hyphens.",
      "It may contain any characters except spaces.",
      "It must be uppercase and cannot exceed eight characters.",
    ],
    answer:
      "It must start with a letter and may contain only lowercase letters, numbers and hyphens.",
  },
  {
    id: "lf-87",
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
    id: "lf-88",
    question:
      "Which syntax correctly references a log attribute named error.message in a log monitor notification?",
    options: [
      "{{ log.attributes.error.message }}",
      "{{ log.attributes.[error.message] }}",
      "{{ @error.message }}",
    ],
    answer: "{{ log.attributes.[error.message] }}",
  },
  {
    id: "lf-89",
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
    id: "lf-90",
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
    id: "lf-91",
    question:
      "After how many seconds are log-generated metric data points created in Datadog?",
    options: ["5 seconds", "10 seconds", "15 seconds", "30 seconds"],
    answer: "10 seconds",
  },
  {
    id: "lf-92",
    question: "How long are log-based metrics retained in Datadog?",
    options: ["15 days", "15 weeks", "15 months"],
    answer: "15 months",
  },
  {
    id: "lf-93",
    question:
      "By default, do log-based metrics carry any tags from the originating log?",
    options: [
      "No, dimensions must be explicitly added when the metric is defined.",
      "Yes, all log attributes are converted to tags automatically.",
      "Yes, but only the reserved attributes are carried over.",
    ],
    answer:
      "No, dimensions must be explicitly added when the metric is defined.",
  },
  {
    id: "lf-94",
    question:
      "A log is excluded from indexing by an exclusion filter. Can it still contribute to a log-based metric?",
    options: [
      "Yes, log-based metrics are generated from ingested logs before indexing.",
      "No, only indexed logs can generate metrics.",
      "Only if the metric is defined on an archived index.",
    ],
    answer:
      "Yes, log-based metrics are generated from ingested logs before indexing.",
  },
  {
    id: "lf-95",
    question: "In what ways can a user download a CSV of their logs?",
    options: [
      "from the UI only",
      "from the UI, and via the Logs API with client-side conversion to CSV",
      "from the UI, the API, and directly from the Log Stream dashboard widget",
    ],
    answer:
      "from the UI, and via the Logs API with client-side conversion to CSV",
  },
  {
    id: "lf-96",
    question:
      "Which Datadog product should be used to automatically detect security signals from logs?",
    options: ["Datadog Cloud SIEM", "Datadog CSPM", "Datadog AppSec"],
    answer: "Datadog Cloud SIEM",
  },
  {
    id: "lf-97",
    question:
      "Logs are not being stored (indexed) in the platform. Where should you check first?",
    options: [
      "the index daily quota",
      "the Agent's exclude_at_match rules",
      "Live Tail",
    ],
    answer: "the index daily quota",
  },
  {
    id: "lf-98",
    question:
      "Logs do not appear in Live Tail at all. Which of these is a likely cause?",
    options: [
      "Their timestamp is more than 18 hours in the past, so they were dropped.",
      "An exclusion filter is applied to the index.",
      "No facet has been created for the service attribute.",
    ],
    answer:
      "Their timestamp is more than 18 hours in the past, so they were dropped.",
  },
  {
    id: "lf-99",
    question:
      "The Agent is tailing a file but the last line is never sent. What is the likely cause?",
    options: [
      "The log line is not terminated with a newline character.",
      "The file exceeds 1MB.",
      "The service tag is missing.",
    ],
    answer: "The log line is not terminated with a newline character.",
  },
  {
    id: "lf-100",
    question:
      "Why do non-error messages from containers sometimes arrive in Datadog with an error-like severity?",
    options: [
      "They are written to stderr, which is interpreted as an error stream.",
      "The JSON pipeline mis-parses them.",
      "They are missing a timestamp.",
    ],
    answer:
      "They are written to stderr, which is interpreted as an error stream.",
  },
  {
    id: "lf-101",
    question:
      "Which Datadog Agent command allows printing of all configurations loaded in a running Agent?",
    options: ["config", "configload", "configcheck"],
    answer: "configcheck",
  },
  {
    id: "lf-102",
    question:
      "Which Agent command shows whether the Logs Agent is running and which files it is tailing?",
    options: [
      "datadog-agent status",
      "datadog-agent configcheck",
      "datadog-agent diagnose",
    ],
    answer: "datadog-agent status",
  },
  {
    id: "lf-103",
    question:
      "Which metric helps identify which service and source are emitting logs large enough to be truncated?",
    options: [
      "datadog.estimated_usage.logs.truncated_count",
      "datadog.estimated_usage.logs.drop_count",
      "datadog.estimated_usage.logs.ingested_events",
    ],
    answer: "datadog.estimated_usage.logs.truncated_count",
  },
  {
    id: "lf-104",
    question:
      "A parsed attribute is missing and you need to find which processor removed or overwrote it. Which tool should you use?",
    options: [
      "the Pipeline Scanner",
      "the Log Explorer patterns view",
      "the Agent flare",
    ],
    answer: "the Pipeline Scanner",
  },
];
