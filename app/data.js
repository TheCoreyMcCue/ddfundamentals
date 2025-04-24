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
  {
    id: 27,
    question: "What is the definition of a saturation metric?",
    options: [
      "Measures the speed of resource processing",
      "Represents the idle time of a resource",
      "Is a measure of the amount of requested work that the resource cannot yet service, often queued",
      "Indicates the total capacity of a resource",
    ],
    answer:
      "Is a measure of the amount of requested work that the resource cannot yet service, often queued",
  },
  {
    id: 28,
    question: "What is the default number of check_runners?",
    options: [
      "6 - https://github.com/datadog/datadog-agent/blob/main/pkg/config/config_template.yaml#l583",
      "10 - https://github.com/datadog/datadog-agent/blob/main/pkg/config/config_template.yaml#l583",
      "2 - https://github.com/datadog/datadog-agent/blob/main/pkg/config/config_template.yaml#l583",
      "4 - https://github.com/DataDog/datadog-agent/blob/main/pkg/config/config_template.yaml#L583",
    ],
    answer:
      "4 - https://github.com/DataDog/datadog-agent/blob/main/pkg/config/config_template.yaml#L583",
  },
  {
    id: 29,
    question:
      'What is the outcome of the following curl command?\n\ncurl -X POST "https://api.datadoghq.eu/api/v2/series" \\\n  -H "DD-API-KEY: ${DD_API_KEY}" \\\n  -d @- << EOF\n  {"series": [{"points": [{"value": 1}], "resources": [{"name": "host1", "type": "host"}]}]\n  }\nEOF',
    options: [
      "DD_CHECKS_TAG_CARDINALITY",
      "~300 https://docs.datadoghq.com/dashboards/guide/query-to-the-graph/",
      "4 - https://github.com/DataDog/datadog-agent/blob/main/pkg/config/config_template.yaml#L583",
      '{"errors":["Payload validation failed: metric name is empty"]}',
    ],
    answer: '{"errors":["Payload validation failed: metric name is empty"]}',
  },
  {
    id: 30,
    question:
      "Add the Agent user to the Docker group: usermod -a -G docker dd-agent Create a docker_daemon.yaml file by copying the example file in the Agent conf.d directory. If you have a standard install of Docker on your host, there shouldn't be anything you need to change to get the integration to work.",
    options: [
      "On an agent host installation, what needs to happen for the agent to access the docker daemon?",
      "What are the names no accepted as canonical names for host (by default)?",
      "On ddtrace for Python, what is the parameter to add to tracer.config(...) to send traces through UDS?",
      "What are the aggregation rules per metric type with DogStatsD (at the agent level)?",
    ],
    answer:
      "On an agent host installation, what needs to happen for the agent to access the docker daemon?",
  },
  {
    id: 31,
    question:
      "What port is used to submit custom metrics to the Datadog Agent via DogStatsD?",
    options: ["8080", "3000", "8125", "9090"],
    answer: "8125",
  },
  {
    id: 32,
    question:
      "On ddtrace for Python, what is the parameter to add to tracer.config(...) to send traces through UDS?",
    options: [
      "g",
      "localhost, 8126, false - https://ddtrace.readthedocs.io/en/stable/advanced_usage.html#agent-configuration",
      'uds_path -- tracer.configure(uds_path="/path/to/socket") https://ddtrace.readthedocs.io/en/stable/advanced_usage.html',
      "dd_checks_tag_cardinality",
    ],
    answer:
      'uds_path -- tracer.configure(uds_path="/path/to/socket") https://ddtrace.readthedocs.io/en/stable/advanced_usage.html',
  },
  {
    id: 33,
    question: "In which category of metrics does `utilization` belong to?",
    options: [
      "Service metrics",
      "Resource metrics",
      "Custom metrics",
      "Log metrics",
    ],
    answer: "Resource metrics",
  },
  {
    id: 34,
    question:
      "What is the default metric type when submitting metric through API?",
    options: ["Depends on the data type", "walking", "Not assigned", "Average"],
    answer: "Not assigned",
  },
  {
    id: 35,
    question:
      "How many containers in the daemonset pod deployment and what are their purpose?",
    options: [
      "There are 21 monitors - Host, Metric, Anomaly, APM, Audit Logs, CI, Composite, Custom Check, Error Tracking, Event, Forecast, Integration, Live Process, Logs, Network, Outlier, Process Check, Real User Monitoring, SLO Alerts, Synthetic Monitoring, Watchdog",
      "datadog-agent flare <CASE_ID> kubectl exec -it <AGENT_POD_NAME> -c agent -- agent flare <CASE_ID>",
      "One container with the Agent process (Agent + Log Agent), One container with the process-agent process, One container with the trace-agent process, One container with the system-probe process",
      "If a user's account is disabled, any application keys that the user created are revoked. Any API keys that were created by the disabled account are not deleted, and are still valid.",
    ],
    answer:
      "One container with the Agent process (Agent + Log Agent), One container with the process-agent process, One container with the trace-agent process, One container with the system-probe process",
  },
  {
    id: 36,
    question:
      "What is the parameter to configure the default tags attached to metrics emitted by containers on Kubernetes?",
    options: [
      "The amount of disk space in use",
      "It ensures that data is not missed if a destination becomes unavailable",
      "trace.agent.datadoghq.com",
      "DD_CHECKS_TAG_CARDINALITY",
    ],
    answer: "DD_CHECKS_TAG_CARDINALITY",
  },
  {
    id: 37,
    question:
      "The correct way to instantiate the above Dog class is:\n\nclass Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
    options: [
      "localhost, 8126, False - https://ddtrace.readthedocs.io/en/stable/advanced_usage.html#agent-configuration",
      "Most of the functions are applied at the last step. https://docs.datadoghq.com/dashboards/guide/query-to-the-graph/",
      '__init__(self, name, age): self.name = name self.age = age  Dog("Rufus", 3)',
      "Anything starting with ip- or domu https://github.com/DataDog/datadog-agent/blob/main/docs/agent/hostname_force_config_as_canonical.md Note: This can be overridden for agent 6.16+ or 7.16+ with hostname_force_config_as_canonical:true",
    ],
    answer:
      '__init__(self, name, age): self.name = name self.age = age  Dog("Rufus", 3)',
  },
  {
    id: 38,
    question:
      "How to filter for my_metric where the tag team starts with `tps` and finishes with `is_the_best`?",
    options: [
      "average",
      "<aggr>:my_metric{team:tps,team:is_the_best}",
      "g",
      "port: 10250",
    ],
    answer: "<aggr>:my_metric{team:tps,team:is_the_best}",
  },
  {
    id: 39,
    question: "What is the default port to receive spans?",
    options: ["8126", "port: 7070", "port: 9090", "port: 4040"],
    answer: "8126",
  },
  {
    id: 40,
    question: "How often is the host map updated?",
    options: [
      "Once an hour",
      "Every 5 minutes",
      "Once every 1 minute",
      "Every 30 seconds",
    ],
    answer: "Once every 1 minute",
  },
];

export const infraFaq = [
  {
    id: "i1",
    question: "How long do you store metrics?",
    options: ["6 months", "15 months", "3 months", "12 months"],
    answer: "15 months",
  },
  {
    id: "i2",
    question: "Can I automate the build of dashboards and monitors?",
    options: [
      "No, dashboards and monitors must be created manually",
      "Only dashboards can be automated, not monitors",
      "Yes, you can use our API and tools like Terraform to automate builds",
      "Only via the UI wizard, not programmatically",
    ],
    answer:
      "Yes, you can use our API and tools like Terraform to automate builds",
  },
  {
    id: "i3",
    question: "Do you deploy the agent as a sidecar for my Kubernetes Cluster?",
    options: [
      "Yes, one agent per pod using a sidecar",
      "No, we deploy the agent as a daemonset, so one agent per host",
      "Only for stateful workloads",
      "Yes, it's required to run as a sidecar for observability",
    ],
    answer: "No, we deploy the agent as a daemonset, so one agent per host",
  },
  {
    id: "i4",
    question: "How often do we receive metrics from our API crawlers?",
    options: [
      "Every 5 minutes by default",
      "Once per hour for external APIs",
      "Mostly for cloud integrations it's around 10 minutes. This is the same as cloud-native tools.",
      "Only during scheduled sync windows (every 24h)",
    ],
    answer:
      "Mostly for cloud integrations it's around 10 minutes. This is the same as cloud-native tools.",
  },
  {
    id: "i5",
    question:
      "Do I need the agent if I already have <cloud provider integration> installed?",
    options: [
      "Yes, the agent is mandatory for all integrations",
      "No, but we strongly advise it to leverage additional metrics, granularity of data, and more unified data like logs/APM",
      "Only if you're collecting custom metrics or using containers",
      "No, cloud integrations alone provide full observability",
    ],
    answer:
      "No, but we strongly advise it to leverage additional metrics, granularity of data, and more unified data like logs/APM",
  },
  {
    id: "i6",
    question: "Where is my data stored?",
    options: [
      "Data is stored exclusively in your local region to comply with all data residency laws",
      "We are a fully cloud-hosted SaaS platform with instances across AWS, Azure, and GCP — including regions in the EU. Most data is stored in the US. We do not offer an on-premise version of Datadog.",
      "All data is stored on customer-managed infrastructure",
      "We store data only on AWS servers located in North America",
    ],
    answer:
      "We are a fully cloud-hosted SaaS platform with instances across AWS, Azure, and GCP — including regions in the EU. Most data is stored in the US. We do not offer an on-premise version of Datadog.",
  },
  {
    id: "i7",
    question: "How do I get more advanced metrics for RDS?",
    options: [
      "Enable enhanced monitoring in the AWS console",
      "Deploy the agent on an EC2 instance in the same security group as the RDS database — this allows the agent to collect additional DB-level metrics",
      "Use a Lambda function to query metrics and forward them to Datadog",
      "Install the agent directly on the RDS instance",
    ],
    answer:
      "Deploy the agent on an EC2 instance in the same security group as the RDS database — this allows the agent to collect additional DB-level metrics",
  },
  {
    id: "i8",
    question: "Do you have any community dashboards I can use?",
    options: [
      "No, but it's a great opportunity to ask what kind of dashboards they're looking for and show how easy it is to build one in Datadog — plus we offer many out-of-the-box templates",
      "Yes, all dashboards in Datadog are shared by the community",
      "No, dashboards must be imported manually from GitHub",
      "Only custom dashboards are available — no templates or examples are provided",
    ],
    answer:
      "No, but it's a great opportunity to ask what kind of dashboards they're looking for and show how easy it is to build one in Datadog — plus we offer many out-of-the-box templates",
  },
];

export const logsFaq = [
  {
    id: "l1",
    question: "Can I enrich logs with additional attributes during parsing?",
    options: [
      "Yes, through enrichment tables. You can upload a CSV and Datadog will perform vlookups to add attributes to your logs",
      "No, enrichment can only happen after logs are indexed",
      "Only metrics can be enriched with lookup tables, not logs",
      "Yes, but only by modifying the original source log before ingestion",
    ],
    answer:
      "Yes, through enrichment tables. You can upload a CSV and Datadog will perform vlookups to add attributes to your logs",
  },
];

export const apmFaq = [
  {
    id: "a1",
    question: "What is a trace in APM?",
    options: [
      "In APM, a trace is a record of how a request flows through your system, made up of one or more spans",
      "A trace is a single metric collected over time from your application",
      "Traces are log entries that include stack traces for errors",
      "It is a static diagram showing service dependencies",
    ],
    answer:
      "In APM, a trace is a record of how a request flows through your system, made up of one or more spans",
  },
];
