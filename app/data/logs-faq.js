export const logsFaq = [
  {
    id: "l1",
    question:
      "Can you modify log pipelines or indexes without logging into the UI?",
    options: [
      "Yes, you can use our API to make modifications and adjustments",
      "No, all log pipeline changes must be done in the UI",
      "Only pipeline filters can be changed via API",
      "Yes, but only if you're using Terraform",
    ],
    answer: "Yes, you can use our API to make modifications and adjustments",
  },
  {
    id: "l2",
    question: "Do I need the Datadog Agent to collect logs?",
    options: [
      "No, there are other ways to collect logs, though the Agent helps with tagging",
      "Yes, logs cannot be collected without the Agent",
      "Only if you're using containerized environments",
      "The Agent is required for log processing, not collection",
    ],
    answer:
      "No, there are other ways to collect logs, though the Agent helps with tagging",
  },
  {
    id: "l3",
    question: "Can I archive logs on-prem?",
    options: [
      "No, but you can use cloud storage like S3 or an HTTP endpoint",
      "Yes, logs can be stored on your local network drive",
      "Only for logs older than 30 days",
      "Yes, with a Datadog Enterprise license",
    ],
    answer: "No, but you can use cloud storage like S3 or an HTTP endpoint",
  },
  {
    id: "l4",
    question: "How long does rehydration take?",
    options: [
      "It depends on archive size and depth — usually minutes to hours, not days",
      "Up to 48 hours for most workloads",
      "Instant, if using a supported cloud provider",
      "Only possible if using a cold storage plan",
    ],
    answer:
      "It depends on archive size and depth — usually minutes to hours, not days",
  },
  {
    id: "l5",
    question: "How can I exclude logs at ingestion?",
    options: [
      "Use the Agent config file to define exclusion patterns",
      "Delete logs using a filter in the UI",
      "Only archived logs can be excluded",
      "Use a webhook to reject log entries",
    ],
    answer: "Use the Agent config file to define exclusion patterns",
  },
  {
    id: "l6",
    question: "How can I scrub sensitive data from logs?",
    options: [
      "Use a log processing rule in the Agent to mask values via pattern matching",
      "Delete the logs in the UI",
      "Encrypt logs using an API key",
      "Scrubbing is only available in archived logs",
    ],
    answer:
      "Use a log processing rule in the Agent to mask values via pattern matching",
  },
  {
    id: "l7",
    question: "Can I delete a log index myself?",
    options: [
      "No, only administrators can delete indexes",
      "Yes, any user with write access can delete indexes",
      "Only if you are using Terraform",
      "Indexes cannot be deleted once created",
    ],
    answer: "No, only administrators can delete indexes",
  },
  {
    id: "l8",
    question: "Can I delete logs I already sent to Datadog?",
    options: [
      "No, this is something we generally push back on — log deletion is a complex process",
      "Yes, logs can be deleted from the UI at any time",
      "Only archived logs can be deleted",
      "Yes, but only after a manual review by Datadog Support",
    ],
    answer:
      "No, this is something we generally push back on — log deletion is a complex process",
  },
  {
    id: "l9",
    question: "What happens if I send PII in my logs?",
    options: [
      "You can request removal, but we recommend scrubbing PII at the agent level or using the Sensitive Data Scanner",
      "Datadog automatically removes all detected PII",
      "The logs are rejected at ingestion time",
      "PII must be encrypted using a secure log token",
    ],
    answer:
      "You can request removal, but we recommend scrubbing PII at the agent level or using the Sensitive Data Scanner",
  },
  {
    id: "l10",
    question: "Can I save a query to share with my team?",
    options: [
      "Yes, there is a save button in Log Explorer, and shared queries appear under Views",
      "No, saved queries are only available to the original author",
      "Only team leads can save queries",
      "Yes, but only using the API",
    ],
    answer:
      "Yes, there is a save button in Log Explorer, and shared queries appear under Views",
  },
  {
    id: "l11",
    question:
      "Can I add additional event attributes to my logs during parsing?",
    options: [
      "Yes, using enrichment tables with CSV upload for value lookups",
      "No, attributes must be present in the raw log data",
      "Only custom attributes from the UI are supported",
      "You can only enrich logs after they have been indexed",
    ],
    answer: "Yes, using enrichment tables with CSV upload for value lookups",
  },
  {
    id: "l12",
    question: "Can I rehydrate logs straight from Amazon Glacier?",
    options: [
      "Yes, we support rehydration from Glacier",
      "No, Glacier is not supported",
      "Only if archived less than 30 days ago",
      "Only with a manual API process",
    ],
    answer: "Yes, we support rehydration from Glacier",
  },
  {
    id: "l13",
    question: "How am I getting unexpected metadata in my logs?",
    options: [
      "This might come from JSON parsing and out-of-the-box pipelines — bring this up when discussing parsing strategy",
      "It's injected by the Agent randomly",
      "This means someone edited your logs after they were collected",
      "This is only seen in logs from containerized environments",
    ],
    answer:
      "This might come from JSON parsing and out-of-the-box pipelines — bring this up when discussing parsing strategy",
  },
  {
    id: "l14",
    question:
      "Can I filter log attributes without turning them into permanent facets?",
    options: [
      "Yes, click the gear next to an attribute to search or facet without making it permanent",
      "No, attributes must be promoted to facets first",
      "Only admins can use temporary filters",
      "Filtering without facets is only supported in Trace Explorer",
    ],
    answer:
      "Yes, click the gear next to an attribute to search or facet without making it permanent",
  },
  {
    id: "l15",
    question: "How is the context for 'View in Context' determined?",
    options: [
      "Datadog uses configurable defaults, which you can change by editing the View in Context settings",
      "Context is based only on the host and timestamp",
      "It's determined by the retention policy",
      "This is calculated automatically and cannot be changed",
    ],
    answer:
      "Datadog uses configurable defaults, which you can change by editing the View in Context settings",
  },
  {
    id: "l16",
    question:
      "Is there a way to retroactively obfuscate PII after it has already been ingested?",
    options: [
      "No, once fully ingested, data must be deleted or handled with Datadog support if it did not trigger the Sensitive Data Scanner",
      "Yes, logs can be rewritten post-ingestion using a regex obfuscation tool",
      "Only logs sent from the Agent can be modified afterward",
      "Yes, if using Datadog Enterprise",
    ],
    answer:
      "No, once fully ingested, data must be deleted or handled with Datadog support if it did not trigger the Sensitive Data Scanner",
  },
  {
    id: "l17",
    question:
      "Can I only form patterns based on log message content in the Patterned View?",
    options: [
      "No, patterns are grouped using attributes to the right of the patterns button",
      "Yes, only message content is used for pattern detection",
      "Only logs using JSON formatting can be patterned",
      "Patterned view is only available on error-level logs",
    ],
    answer:
      "No, patterns are grouped using attributes to the right of the patterns button",
  },
  {
    id: "l18",
    question: "Do I need to use pipelines to ingest log data?",
    options: [
      "No, pipelines are for customization — JSON logs will still be parsed without them",
      "Yes, pipelines are mandatory for ingestion",
      "Only archived logs skip pipelines",
      "Only for container logs",
    ],
    answer:
      "No, pipelines are for customization — JSON logs will still be parsed without them",
  },
  {
    id: "l19",
    question: "What happens when my log indexes expire?",
    options: [
      "The data is removed, but you can archive it via Log Forwarding and rehydrate it later",
      "Logs are kept in cold storage for 90 days",
      "They automatically transition to trace summaries",
      "They are retained indefinitely unless manually deleted",
    ],
    answer:
      "The data is removed, but you can archive it via Log Forwarding and rehydrate it later",
  },
  {
    id: "l20",
    question:
      "Does Datadog wait until log indexes expire before archiving logs?",
    options: [
      "No, archival is done independently of index expiration",
      "Yes, logs are archived only after indexes expire",
      "Logs cannot be archived if indexes are still active",
      "Only expired logs are eligible for Glacier storage",
    ],
    answer: "No, archival is done independently of index expiration",
  },
  {
    id: "l21",
    question: "How long does log rehydration take?",
    options: [
      "It varies based on size and volume — usually minutes to hours, not days",
      "It takes 24 hours to rehydrate logs",
      "Instant for logs stored under 30 days",
      "Only possible once per day per archive",
    ],
    answer:
      "It varies based on size and volume — usually minutes to hours, not days",
  },
  {
    id: "l22",
    question: "When I rehydrate logs, are they linked to their original index?",
    options: [
      "No, rehydrated logs are stored separately and do not retain index association",
      "Yes, they are restored exactly as originally indexed",
      "Only in S3-based archives",
      "They must be reindexed manually afterward",
    ],
    answer:
      "No, rehydrated logs are stored separately and do not retain index association",
  },
  {
    id: "l23",
    question:
      "How does log exclusion sampling work when I choose to ingest only a percentage?",
    options: [
      "It uses round-robin style selection to ingest a random sample of the logs",
      "Logs are sorted by priority and only the top tier is ingested",
      "Only logs from specific hosts are selected",
      "The system uses a hash-based selection tied to timestamps",
    ],
    answer:
      "It uses round-robin style selection to ingest a random sample of the logs",
  },
  {
    id: "l24",
    question: "If I exclude logs, do they still enter the platform at all?",
    options: [
      "If excluded at the agent level, they never enter the platform. If excluded at indexing, they still appear in tools like Live Tail",
      "Excluded logs are always completely blocked from all views",
      "No, exclusion removes logs after 24 hours",
      "Yes, but only for metrics extraction",
    ],
    answer:
      "If excluded at the agent level, they never enter the platform. If excluded at indexing, they still appear in tools like Live Tail",
  },
  {
    id: "l25",
    question:
      "Does Logging Without Limits mean I am only charged for indexed logs?",
    options: [
      "No, there are costs associated with ingestion as well, not just indexing",
      "Yes, only indexed logs are billable",
      "Costs are based only on the volume of archived logs",
      "Only retained logs count toward your billing",
    ],
    answer:
      "No, there are costs associated with ingestion as well, not just indexing",
  },
  {
    id: "l26",
    question: "What are Standard Attributes in the Logging workflow?",
    options: [
      "They define naming conventions in the platform — there's a default set, but it's customizable",
      "They are required keys for storing logs in Datadog",
      "They are tags applied only to container logs",
      "Only Enterprise customers can define standard attributes",
    ],
    answer:
      "They define naming conventions in the platform — there's a default set, but it's customizable",
  },
];

