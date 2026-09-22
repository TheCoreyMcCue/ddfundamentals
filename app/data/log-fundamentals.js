export const logFundamentalsPracticeExam = [
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
      "the type of log input source, such as tcp, udp, file, windows_event, docker, or journald",
      "the severity level of the logs to collect",
      "the programming language of the application emitting the logs",
    ],
    answer:
      "the type of log input source, such as tcp, udp, file, windows_event, docker, or journald",
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
    question:
      "Since Agent v6.19 and v7.19, what is the default transport used to send logs?",
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
      "the log message, for any term beginning with prod",
      "every attribute on the log, for any value beginning with prod",
      "the source attribute only, for any value beginning with prod",
    ],
    answer: "the log message, for any term beginning with prod",
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
    question: "Which of the following requires a facet to be created first?",
    options: [
      "grouping logs by an attribute in a dashboard widget or log monitor",
      "searching logs by that attribute in the Log Explorer",
      "generating a metric from logs using that attribute",
    ],
    answer:
      "grouping logs by an attribute in a dashboard widget or log monitor",
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
  {
    id: "lf-102",
    question:
      "An attribute has been extracted by a pipeline but no facet has been created for it. What can still be done with it?",
    options: [
      "Logs can be searched by that attribute in the Log Explorer.",
      "Nothing, since attributes are only queryable once a facet exists.",
      "It can be used as a group-by dimension in a dashboard widget.",
    ],
    answer: "Logs can be searched by that attribute in the Log Explorer.",
  },
  {
    id: "lf-103",
    question: "Which tag format does Datadog recommend?",
    options: ["<key>:<value>", "<value> on its own", "<key>=<value>"],
    answer: "<key>:<value>",
  },
  {
    id: "lf-104",
    question:
      "Which reserved tag key enables span filtering and automated pipeline creation for Log Management?",
    options: ["source", "service", "device"],
    answer: "source",
  },
  {
    id: "lf-105",
    question:
      "Which reserved tag key is used to assign ownership of a resource?",
    options: ["team", "service", "env"],
    answer: "team",
  },
  {
    id: "lf-106",
    question:
      "Which reserved tag key allows correlation between metrics, traces, processes, and logs?",
    options: ["host", "version", "source"],
    answer: "host",
  },
  {
    id: "lf-107",
    question: "What must a tag string start with?",
    options: ["a letter", "a number", "either a letter or an underscore"],
    answer: "a letter",
  },
  {
    id: "lf-108",
    question:
      "What is the maximum length of a tag string, including the key and the colon?",
    options: ["200 characters", "100 characters", "500 characters"],
    answer: "200 characters",
  },
  {
    id: "lf-109",
    question:
      "In the tag env:staging:east, what is the key and what is the value?",
    options: [
      "the key is env and the value is staging:east",
      "the key is env:staging and the value is east",
      "the tag is invalid because it contains two colons",
    ],
    answer: "the key is env and the value is staging:east",
  },
  {
    id: "lf-110",
    question: "What happens to a space or comma inside a tag string?",
    options: [
      "It is converted to an underscore.",
      "It is removed entirely.",
      "The tag is rejected.",
    ],
    answer: "It is converted to an underscore.",
  },
  {
    id: "lf-111",
    question:
      "How does the Agent resolve a tag key that is set to different values by different sources?",
    options: [
      "It does not enforce precedence, and emits every unique value for that key.",
      "The value set in datadog.yaml always wins.",
      "The most recently configured source always wins.",
    ],
    answer:
      "It does not enforce precedence, and emits every unique value for that key.",
  },
  {
    id: "lf-112",
    question:
      "How does case handling differ between metric tags and log attributes?",
    options: [
      "Metric tags are normalized to lowercase, while log attributes are case-sensitive and not normalized.",
      "Both are normalized to lowercase.",
      "Both are case-sensitive and left unchanged.",
    ],
    answer:
      "Metric tags are normalized to lowercase, while log attributes are case-sensitive and not normalized.",
  },
  {
    id: "lf-113",
    question:
      "Why should tags not be derived from values such as timestamps or request IDs?",
    options: [
      "They are unbounded sources and cause uncontrolled growth in the number of metrics.",
      "They are rejected by the tag validation rules.",
      "They cannot be used in the Log Explorer.",
    ],
    answer:
      "They are unbounded sources and cause uncontrolled growth in the number of metrics.",
  },
  {
    id: "lf-114",
    question:
      "Which is the minimum Datadog Agent version that supports log collection?",
    options: ["v6.0", "v5.0", "v7.0"],
    answer: "v6.0",
  },
  {
    id: "lf-115",
    question: "Where should a custom log collection configuration be created?",
    options: [
      "in a <CUSTOM_LOG_SOURCE>.d/conf.yaml file under the conf.d directory",
      "in a new section of datadog.yaml",
      "in the Log Configuration page of the Datadog UI",
    ],
    answer:
      "in a <CUSTOM_LOG_SOURCE>.d/conf.yaml file under the conf.d directory",
  },
  {
    id: "lf-116",
    question:
      "After adding a custom log collection configuration and restarting the Agent, where should the new source appear?",
    options: [
      "under the Checks section of the Agent status output",
      "under the Forwarder section of the Agent status output",
      "in the datadog.yaml file",
    ],
    answer: "under the Checks section of the Agent status output",
  },
  {
    id: "lf-117",
    question:
      "Which parameters are required for every log collection configuration entry?",
    options: [
      "type, service, and source",
      "path, port, and tags",
      "service, env, and version",
    ],
    answer: "type, service, and source",
  },
  {
    id: "lf-118",
    question:
      "What is the default value of the start_position parameter for a file tailer?",
    options: ["end", "beginning", "forceBeginning"],
    answer: "end",
  },
  {
    id: "lf-119",
    question:
      "Which start_position value is always used when tailing a container?",
    options: ["beginning", "end", "forceEnd"],
    answer: "beginning",
  },
  {
    id: "lf-120",
    question:
      "A file tailer has a stored offset, but start_position is set to beginning. What does the Agent do?",
    options: [
      "It uses the stored offset, because the offset takes precedence.",
      "It reads from the beginning of the file, because the setting takes precedence.",
      "It fails to start and logs a configuration error.",
    ],
    answer: "It uses the stored offset, because the offset takes precedence.",
  },
  {
    id: "lf-121",
    question:
      "Which start_position value forces the Agent to ignore a stored offset?",
    options: ["forceBeginning", "beginning", "start"],
    answer: "forceBeginning",
  },
  {
    id: "lf-122",
    question:
      "Which start_position value is not supported when the path contains a wildcard?",
    options: ["beginning", "end", "forceEnd"],
    answer: "beginning",
  },
  {
    id: "lf-123",
    question:
      "Which parameter excludes specific files when the log path contains a wildcard?",
    options: ["exclude_paths", "exclude_units", "exclude_at_match"],
    answer: "exclude_paths",
  },
  {
    id: "lf-124",
    question:
      "Which parameter should be set for the Agent to read a log file encoded as UTF-16 little-endian?",
    options: ["encoding", "charset", "format"],
    answer: "encoding",
  },
  {
    id: "lf-125",
    question: "What is the purpose of the sourcecategory parameter?",
    options: [
      "to define the category that a source attribute belongs to, such as source:postgres with sourcecategory:database",
      "to select which index the logs are written to",
      "to set the severity of the collected logs",
    ],
    answer:
      "to define the category that a source attribute belongs to, such as source:postgres with sourcecategory:database",
  },
  {
    id: "lf-126",
    question:
      "Which logs_config option captures the sender IP address and includes it in the log payload for TCP and UDP sources?",
    options: ["use_sourcehost_tag", "use_client_ip", "capture_source_ip"],
    answer: "use_sourcehost_tag",
  },
  {
    id: "lf-127",
    question:
      "Which user must have read access to a log file for the Agent to tail it on Windows?",
    options: ["ddagentuser", "dd-agent", "LocalSystem"],
    answer: "ddagentuser",
  },
  {
    id: "lf-128",
    question:
      "Which log formats does the Agent support over a TCP or UDP socket?",
    options: ["raw string, JSON, and Syslog", "JSON only", "JSON and XML"],
    answer: "raw string, JSON, and Syslog",
  },
  {
    id: "lf-129",
    question: "On Linux, where is the Agent's main configuration file located?",
    options: [
      "/etc/datadog-agent/datadog.yaml",
      "/opt/datadog-agent/etc/datadog.yaml",
      "/var/log/datadog/datadog.yaml",
    ],
    answer: "/etc/datadog-agent/datadog.yaml",
  },
  {
    id: "lf-130",
    question: "On macOS, where is the Agent's main configuration file located?",
    options: [
      "/opt/datadog-agent/etc/datadog.yaml",
      "/etc/datadog-agent/datadog.yaml",
      "/usr/local/datadog/datadog.yaml",
    ],
    answer: "/opt/datadog-agent/etc/datadog.yaml",
  },
  {
    id: "lf-131",
    question:
      "How is an Agent check enabled from the example file shipped in its configuration folder?",
    options: [
      "Rename conf.yaml.example to conf.yaml.",
      "Rename conf.yaml.example to auto_conf.yaml.",
      "Move conf.yaml.example into datadog.yaml.",
    ],
    answer: "Rename conf.yaml.example to conf.yaml.",
  },
  {
    id: "lf-132",
    question:
      "Two YAML files in conf.d point to the same log source. What does the Agent do?",
    options: [
      "It considers the files in alphabetical order and uses the first one, to avoid duplicate logs.",
      "It merges both configurations and collects the source twice.",
      "It refuses to start until the conflict is resolved.",
    ],
    answer:
      "It considers the files in alphabetical order and uses the first one, to avoid duplicate logs.",
  },
  {
    id: "lf-133",
    question:
      "Which file in a check's configuration folder holds its Autodiscovery template?",
    options: ["auto_conf.yaml", "conf.yaml.default", "metrics.yaml"],
    answer: "auto_conf.yaml",
  },
  {
    id: "lf-134",
    question:
      "What does the Agent do with a zero-length file in the conf.d directory?",
    options: [
      "It ignores the file.",
      "It fails to start.",
      "It treats it as a disabled check and logs a warning.",
    ],
    answer: "It ignores the file.",
  },
  {
    id: "lf-135",
    question:
      "What does Datadog Log Management do to remove the trade-off between coverage and cost?",
    options: [
      "It decouples log ingestion from log indexing.",
      "It compresses logs before they are indexed.",
      "It limits ingestion to a fixed daily volume.",
    ],
    answer: "It decouples log ingestion from log indexing.",
  },
  {
    id: "lf-136",
    question:
      "Which Datadog product detects security threats without requiring logs to be indexed?",
    options: [
      "Cloud SIEM",
      "Application Security Management",
      "Cloud Security Posture Management",
    ],
    answer: "Cloud SIEM",
  },
  {
    id: "lf-137",
    question:
      "Which Log Explorer visualization should be used to show log counts over time?",
    options: ["Timeseries", "Top List", "Table"],
    answer: "Timeseries",
  },
  {
    id: "lf-138",
    question:
      "Which Log Explorer visualization ranks the highest values of a facet by an aggregate?",
    options: ["Top List", "Distribution", "Scatter Plot"],
    answer: "Top List",
  },
  {
    id: "lf-139",
    question:
      "Which Log Explorer visualization shows the relative share of each value as nested rectangles?",
    options: ["Tree Map", "Bar Chart", "Timeseries"],
    answer: "Tree Map",
  },
  {
    id: "lf-140",
    question:
      "Which Log Explorer visualization plots two measures against each other?",
    options: ["Scatter Plot", "Distribution", "Pie Chart"],
    answer: "Scatter Plot",
  },
  {
    id: "lf-141",
    question:
      "Which Log Explorer visualization shows how the values of a measure are spread across buckets?",
    options: ["Distribution", "Top List", "Tree Map"],
    answer: "Distribution",
  },
  {
    id: "lf-142",
    question:
      "Which Log Explorer visualization is the default when browsing raw log events?",
    options: ["List", "Timeseries", "Table"],
    answer: "List",
  },
  {
    id: "lf-143",
    question:
      "Which Group into option clusters similar log messages together to reveal noisy sources?",
    options: ["Patterns", "Fields", "Transactions"],
    answer: "Patterns",
  },
  {
    id: "lf-144",
    question:
      "Which Group into option collects log events that share a common identifier, such as a request ID?",
    options: ["Transactions", "Patterns", "Fields"],
    answer: "Transactions",
  },
  {
    id: "lf-145",
    question:
      "Which Group into option aggregates logs by the values of a facet?",
    options: ["Fields", "Patterns", "Transactions"],
    answer: "Fields",
  },
  {
    id: "lf-146",
    question:
      "What is the default aggregation applied when logs are grouped by a facet?",
    options: [
      "a count of log events",
      "a sum of the selected measure",
      "a unique count of the facet",
    ],
    answer: "a count of log events",
  },
  {
    id: "lf-147",
    question:
      "What is required in order to aggregate logs by the average of a numeric attribute?",
    options: [
      "The attribute must be defined as a measure.",
      "The attribute must be a reserved attribute.",
      "The attribute must be added to an index filter.",
    ],
    answer: "The attribute must be defined as a measure.",
  },
  {
    id: "lf-148",
    question: "What does a Saved View in the Log Explorer preserve?",
    options: [
      "the search query, the selected columns, the facets, and the time range",
      "only the search query",
      "only the visualization type and its group-by",
    ],
    answer:
      "the search query, the selected columns, the facets, and the time range",
  },
  {
    id: "lf-149",
    question:
      "Which panel of the Log Explorer is used to browse and filter on available facets?",
    options: [
      "the facets panel on the left side of the Explorer",
      "the log side panel that opens when a log is selected",
      "the Log Configuration page",
    ],
    answer: "the facets panel on the left side of the Explorer",
  },
  {
    id: "lf-150",
    question:
      "What is shown when an individual log event is selected in the Log Explorer?",
    options: [
      "a side panel with the log's attributes and links to related telemetry",
      "a new browser tab containing the raw log file",
      "the pipeline that processed the log",
    ],
    answer:
      "a side panel with the log's attributes and links to related telemetry",
  },
  {
    id: "lf-151",
    question:
      "Which toggle in the Log Explorer includes logs stored in the Flex Tier in the current query?",
    options: ["Include Flex Logs", "Include Archives", "Include Live Tail"],
    answer: "Include Flex Logs",
  },
  {
    id: "lf-152",
    question:
      "Which of the following is the recommended way for an application to emit logs so the Agent can collect them?",
    options: [
      "write them to a file or to stdout in a structured format such as JSON",
      "send them directly to the Datadog intake from application code",
      "store them in a database table for later upload",
    ],
    answer:
      "write them to a file or to stdout in a structured format such as JSON",
  },
  {
    id: "lf-153",
    question:
      "Why is a structured format preferred over plain text when emitting logs?",
    options: [
      "Its fields can be searched and aggregated without writing parsing rules.",
      "It uses less storage than plain text.",
      "It is the only format the Agent can transmit.",
    ],
    answer:
      "Its fields can be searched and aggregated without writing parsing rules.",
  },
  {
    id: "lf-154",
    question:
      "Which log source requires no Agent, because logs are sent from the client side?",
    options: [
      "browser logs collected by the Browser Logs SDK",
      "logs tailed from a file on a Linux host",
      "logs collected from journald",
    ],
    answer: "browser logs collected by the Browser Logs SDK",
  },
  {
    id: "lf-155",
    question: "What is the definition of a log?",
    options: [
      "a measure of the amount of work performed by an application and its associated metadata",
      "a text file which holds any value to highlight some form of activity on a system",
      "an event that contains the complete processing of a request",
      "none of the above",
    ],
    answer:
      "a text file which holds any value to highlight some form of activity on a system",
  },
  {
    id: "lf-156",
    question:
      "Which pair of environment variables collects logs from all Docker containers?",
    options: [
      "DD_LOGS_ENABLED=true and DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true",
      "DD_LOGS_ENABLED=true and DD_CONTAINER_COLLECT_ALL_LOGS=true",
      "DD_LOG_ENABLED=true and DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true",
      "DD_LOGS_ENABLED=true and DD_LOG_CONFIG_CONTAINER_COLLECT_ALL=true",
    ],
    answer:
      "DD_LOGS_ENABLED=true and DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true",
  },
  {
    id: "lf-157",
    question: "Which port are logs typically submitted over when using HTTPS?",
    options: ["443", "8125", "80", "10516"],
    answer: "443",
  },
  {
    id: "lf-158",
    question:
      "Which port are logs typically submitted over when using TCP only?",
    options: ["10516", "10514", "443", "80"],
    answer: "10516",
  },
  {
    id: "lf-159",
    question: "Which parameter is used to enforce TCP log submission?",
    options: [
      "use_tcp: true",
      "use_http: false",
      "use_udp: false",
      "none of the above",
    ],
    answer: "use_tcp: true",
  },
  {
    id: "lf-160",
    question: "Which environment variable excludes container logs?",
    options: [
      "DD_CONTAINER_EXCLUDE_LOGS",
      "DD_CONTAINER_EXCLUDE_LOG",
      "AC_EXCLUDE",
    ],
    answer: "DD_CONTAINER_EXCLUDE_LOGS",
  },
  {
    id: "lf-161",
    question:
      "For syslog status codes, which log status does the value 6 represent once the log is ingested by Datadog?",
    options: ["Informational", "Critical", "Debug", "OK"],
    answer: "Informational",
  },
  {
    id: "lf-162",
    question:
      "A log status string beginning with 'e' is matched to which status?",
    options: ["Error", "Emergency", "Alert", "Debug"],
    answer: "Error",
  },
  {
    id: "lf-163",
    question:
      "Which processor adds a new attribute, whose name contains no spaces or special characters, to logs matching a provided search query?",
    options: [
      "Category Processor",
      "Attribute Remapper",
      "Status Remapper",
      "Service Remapper",
    ],
    answer: "Category Processor",
  },
  {
    id: "lf-164",
    question:
      "Which query correctly returns all logs with an HTTP status code in the 200 to 299 range?",
    options: [
      "@http.status_code:[200 TO 299]",
      "@http.status_code:[200-299]",
      "http.status_code:[200-299]",
      '"http.statuscode:200 - 299"',
    ],
    answer: "@http.status_code:[200 TO 299]",
  },
  {
    id: "lf-165",
    question:
      "Which Grok rule parses the date in the log message 2007-08-31 19:22:22.427 ADT?",
    options: [
      '%{date("yyyy-MM-dd HH:mm:ss.SSS z"):date}',
      '%{date("yyyy-MM-dd HH:mm:ss.SSS Z"):date}',
      '%{date("yyyy-MM-dd HH:mm:ss.SSSZ"):date}',
      '%{date("yyyy-MM-dd HH:mm:ss"):date}',
    ],
    answer: '%{date("yyyy-MM-dd HH:mm:ss.SSS z"):date}',
  },
  {
    id: "lf-166",
    question:
      "Which rule parses the array in the log message Users [John, Oliver, Marc, Tom] have been added to the database into individual elements?",
    options: [
      '%{data:users:array("[]",",")}',
      '%{data:users:array("[]","-")}',
      '%{data:users:array("[]","")}',
      "none of the above",
    ],
    answer: '%{data:users:array("[]",",")}',
  },
  {
    id: "lf-167",
    question:
      "Which tag can be used to find logs that have not passed through a pipeline?",
    options: [
      "datadog.pipelines:false",
      "datadog.pipelines:true",
      "dd_pipelines:false",
      "index:main",
    ],
    answer: "datadog.pipelines:false",
  },
  {
    id: "lf-168",
    question: "Which tag key is used to search logs from a specific index?",
    options: ["index", "dd_index", "user_index", "bucket"],
    answer: "index",
  },
  {
    id: "lf-169",
    question:
      "If multiple Service Remappers are contained in a pipeline, which one is used?",
    options: ["the first one", "the last one", "none of them"],
    answer: "the first one",
  },
  {
    id: "lf-170",
    question:
      "Which tag is added to all logs by default once they are indexed?",
    options: ["index", "team", "datadog.pipelines"],
    answer: "index",
  },
  {
    id: "lf-171",
    question:
      "Logs shown in Live Tail have already been processed by any matching pipelines.",
    options: ["true", "false"],
    answer: "true",
  },
  {
    id: "lf-172",
    question:
      "In what ways can a user download a CSV of their logs from Datadog?",
    options: [
      "UI only",
      "UI and API",
      "UI, API, and via the Log Stream dashboard widget",
    ],
    answer: "UI only",
  },
  {
    id: "lf-173",
    question: "Which of the following are standard attributes by default?",
    options: [
      "network.client.ip, http.method, http.useragent_details.os.family",
      "network.database.client.ip, http.status_code, error.stack",
      "db.table, syslog.hostname, usr.name",
    ],
    answer: "network.client.ip, http.method, http.useragent_details.os.family",
  },
];
