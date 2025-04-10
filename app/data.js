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
      "it is very reliable given it guarantees the delivery of applications metric data to DogstatsD.",
      "it is a connection-oriented protocol so the application will wait to transmit data incase DogStatsD isn’t available.",
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
      "are stored in milliseconds to account for the fraction.",
      "are rejected by the metrics endpoint upon submission.",
    ],
    answer: "are rounded to the nearest whole second.",
  },
  {
    id: 7,
    question:
      "Which of the following commands will display the distribution and version of a Linux host?",
    options: ["cat /etc/os*", "uname -n", "hostname"],
    answer: "cat /etc/os*",
  },
  {
    id: 8,
    question:
      "When wanting to install the Datadog Agent on 10 hosts by using a new Ansible server, what step should be taken NEXT?",
    options: [
      "Run the Datadog Agent installation command.",
      "Install the Datadog role from Ansible Galaxy.",
      "In the ansible.cfg file, set the host_key_checking variable to False.",
    ],
    answer: "Install the Datadog role from Ansible Galaxy.",
  },
  {
    id: 9,
    question:
      "When a user wants to instrument an application to send custom metrics to Datadog, how should they edit the Agent configuration file?",
    options: [
      "Un-comment the use_dogstatsd and dogstatsd_port parameters.",
      "Un-comment the use_dogstatsd parameter and set it to true.",
      "Un-comment the dogstatsd_port parameter and set it to 8125.",
    ],
    answer: "Un-comment the use_dogstatsd and dogstatsd_port parameters.",
  },
  {
    id: 10,
    question:
      "Which feature allows the ability to submit custom metrics programmatically to Datadog?",
    options: ["Datadog Agent", "DogStatsD", "Datadog API"],
    answer: "Datadog API",
  },
  {
    id: 11,
    question: "What is the main difference between Linux OS and Windows?",
    options: [
      "Linux is a free open source OS while Windows is a proprietary OS.",
      "Linux is a free OS while Windows is a paying OS.",
      "Linux is more secure than Windows.",
    ],
    answer: "Linux is a free open source OS while Windows is a proprietary OS.",
  },
  {
    id: 12,
    question:
      "Unified service tagging ties Datadog telemetry together using which three standard tags?",
    options: [
      "env, service, and version",
      "host, service, and source",
      "service, device, and version",
    ],
    answer: "env, service, and version",
  },
  {
    id: 13,
    question:
      "Which subcommand should be used to get all configurations loaded and resolved?",
    options: ["diagnose", "configcheck", "check"],
    answer: "configcheck",
  },
  {
    id: 14,
    question:
      "Once an integration is enabled/configured, the out of box dashboards are",
    options: [
      "to be cloned and used as templates.",
      "the source of truth for all metrics collected for the integration.",
      "empty until new widgets are created.",
    ],
    answer: "to be cloned and used as templates.",
  },
  {
    id: 15,
    question:
      "For a host running in AWS, how does the Datadog agent determine the hostname?",
    options: [
      "The hostname must be configured in the agent’s datadog.yaml file.",
      "The agent automatically discovers the EC2 instance id.",
      "The agent uses the IP address.",
    ],
    answer: "The agent automatically discovers the EC2 instance id.",
  },
  {
    id: 16,
    question:
      "To collect only critical, error, and warn logs, how should datadog.yaml be modified?",
    options: [
      "Replace # log_level: INFO with log_level: CRITICAL.",
      "Replace # log_level: INFO with log_level: ERROR.",
      "Replace # log_level: INFO with log_level: WARN.",
    ],
    answer: "Replace # log_level: INFO with log_level: WARN.",
  },
  {
    id: 17,
    question:
      "What happens to API and app keys when a Datadog user account is disabled?",
    options: [
      "API keys remain valid. Application keys are revoked.",
      "API keys remain valid. Application keys are transferred to the admin account.",
      "API and application keys created by the disabled account are revoked.",
    ],
    answer: "API keys remain valid. Application keys are revoked.",
  },
  {
    id: 18,
    question:
      "When a user is making configuration changes in a datadog.yaml file, what is true?",
    options: [
      "The Datadog Agent must be restarted to apply changes made to datadog.yaml.",
      "The Datadog Agent must be stopped before making any changes to datadog.yaml.",
      "Changes can be made dynamically in datadog.yaml.",
    ],
    answer:
      "The Datadog Agent must be restarted to apply changes made to datadog.yaml.",
  },
  {
    id: 19,
    question: "Which BEST describes custom metrics in Datadog?",
    options: [
      "All non-Agent metrics are considered custom metrics.",
      "Any metric submitted using DogStatsD or a custom Agent Check is a considered a custom metric.",
      "All metrics that are submitted by a community integration are considered custom metric.",
    ],
    answer:
      "Any metric submitted using DogStatsD or a custom Agent Check is a considered a custom metric.",
  },
  {
    id: 20,
    question: "Which of the following is a deployment tool?",
    options: ["Ansible", "Kubernetes", "Red Hat Enterprise Linux"],
    answer: "Ansible",
  },
  {
    id: 21,
    question:
      "Looking at the graph of the system.load.1 metric scoped to a host, is the host running Linux or Windows?",
    options: [
      "The host could be running either OS.",
      "The host is running Linux.",
      "The host is running Windows.",
    ],
    answer: "The host is running Linux.",
  },
  {
    id: 22,
    question:
      "After making configuration changes to datadog.yaml while the Agent is running, when are changes applied?",
    options: [
      "The next time it starts.",
      "During the next check cycle.",
      "When it receives the reload command.",
    ],
    answer: "The next time it starts.",
  },
  {
    id: 23,
    question:
      "What is the purpose of the auto_conf.yaml file in an integration’s conf.d directory?",
    options: [
      "It is an example configuration template for the integration.",
      "It allows the agent to autodiscover services and monitor them using the integration.",
      "It configures the integration to run automatically.",
    ],
    answer:
      "It allows the agent to autodiscover services and monitor them using the integration.",
  },
  {
    id: 24,
    question:
      "An application is instrumented to send custom metrics via StatsD. What needs to be done in order to send histogram metrics?",
    options: [
      "Use StatsD to send histogram metric types.",
      "Add DogstatsD instrumentation to send histogram metric types.",
      "Calculate histogram values in the application and use StatsD to send them as metrics.",
    ],
    answer: "Add DogstatsD instrumentation to send histogram metric types.",
  },
  {
    id: 25,
    question:
      "The agent on an Ubuntu host has been temporarily stopped in order to edit a configuration file. What command will start it again?",
    options: [
      "sudo datadog-agent restart",
      "sudo service datadog-agent start",
      "sudo service datadog-agent restart",
    ],
    answer: "sudo service datadog-agent restart",
  },
  {
    id: 26,
    question:
      "What is the definitive method for determining default config values of a running Agent?",
    options: [
      "Examine its original datadog.yaml file.",
      "Read the Agent documentation on docs.datadoghq.com.",
      "Run the command datadog-agent configcheck.",
    ],
    answer: "Examine its original datadog.yaml file.",
  },
];
