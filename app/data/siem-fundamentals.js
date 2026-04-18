export const siemFundamentalsPracticeExam = [
  {
    id: "siem-1",
    question:
      "After creating a custom log detection rule for identifying privilege escalation attempts, the rule does not appear on the MITRE ATT&CK Map despite being enabled. What is the most likely cause?",
    options: [
      "The rule uses a log detection type, which is incompatible with the MITRE ATT&CK Map visualization",
      "The rule is missing the required `tactic:` and `technique:` tags paired with the `security:attack` tag",
      "The rule must be converted from a custom rule to an out-of-the-box rule to appear on the map",
    ],
    answer:
      "The rule is missing the required `tactic:` and `technique:` tags paired with the `security:attack` tag",
  },
  {
    id: "siem-2",
    question:
      "Which format is supported for uploading custom Indicators of Compromise imported into Cloud SIEM for log enrichment?",
    options: [
      "STIX 2.0 bundles uploaded through a TAXII server integration",
      "CSV files uploaded to or imported into Datadog Reference Tables",
      "JSON objects submitted directly through the Threat Intelligence API",
    ],
    answer: "CSV files uploaded to or imported into Datadog Reference Tables",
  },
  {
    id: "siem-3",
    question:
      "Which statement accurately describes how SOAR workflow blueprints function in Datadog?",
    options: [
      "Blueprints provide customizable starting templates that can be modified to match team-specific processes.",
      "Blueprints automatically adapt their configuration based on the security signals that trigger them.",
      "Blueprints generate fully configured workflows that are immediately ready for production deployment.",
    ],
    answer:
      "Blueprints provide customizable starting templates that can be modified to match team-specific processes.",
  },
  {
    id: "siem-4",
    question:
      "After launching the Datadog CloudFormation StackSet to onboard AWS accounts under an Organization, the deployment fails before creating IAM roles in any target account. The Organization has trusted access enabled and service-managed permissions configured. Which configuration error causes this failure?",
    options: [
      "The Execution configuration option was set to Active for parallel operations",
      "The Deployment targets were set to the full Organization instead of an OU",
      "Multiple AWS regions were selected under the Specify regions setting",
    ],
    answer: "Multiple AWS regions were selected under the Specify regions setting",
  },
  {
    id: "siem-5",
    question:
      "During investigation of a credential stuffing security signal, an analyst needs to identify other signals that originated from the same source IP address or involved the same user identity. Which capability within the signal's investigation panel surfaces these connections?",
    options: [
      "The What Happened section, which displays matched log entries and query configuration details",
      "The Related Signals tab, which reveals signals sharing common fields and attribute values",
      "The Workflows tab, which shows triggered and suggested automated investigation workflows",
    ],
    answer:
      "The Related Signals tab, which reveals signals sharing common fields and attribute values",
  },
];
