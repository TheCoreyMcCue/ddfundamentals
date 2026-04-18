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
];
