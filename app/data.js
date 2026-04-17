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
    answer: "sudo service datadog-agent start",
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
  {
    id: 41,
    question:
      "What is an environment variable in the context of an operating system?",
    options: [
      "A system setting defined by kernel modules.",
      "A configuration file only available to GUI applications.",
      "A variable defined in files like /etc/environment and generally made available to services.",
    ],
    answer:
      "A variable defined in files like /etc/environment and generally made available to services.",
  },
  {
    id: 42,
    question:
      "Which is the right syntax to update ‘debug’ log_level in datadog.yaml?",
    options: ["log_level: ‘debug’", "log_level: DEBUG", "log_level: 'DEBUG'"],
    answer: "log_level: 'DEBUG'",
  },
  {
    id: 43,
    question: "Difference between integration crawler vs agent?",
    options: [
      "Crawler integrations use Datadog Agent, agent-based do not.",
      "Agent-based are installed with the Datadog Agent and use Python checks, crawler integrations use API credentials in the Datadog UI.",
      "Crawler integrations are faster than agent-based integrations.",
    ],
    answer:
      "Agent-based are installed with the Datadog Agent and use Python checks, crawler integrations use API credentials in the Datadog UI.",
  },
  {
    id: 44,
    question: "What is the definition of API key?",
    options: [
      "A password used to authenticate users in the Datadog UI.",
      "A key unique to your organization required by the Agent to submit metrics and events.",
      "A token required to log into Datadog mobile app.",
    ],
    answer:
      "A key unique to your organization required by the Agent to submit metrics and events.",
  },
  {
    id: 45,
    question:
      "What is the default collection interval for Datadog standard integrations?",
    options: ["10 seconds", "15 seconds", "30 seconds"],
    answer: "15 seconds",
  },
  {
    id: 46,
    question:
      "What is the expected API metric submission response for the wrong metric value?",
    options: ["200 OK", "202 Accepted", "400 Bad request"],
    answer: "400 Bad request",
  },
  {
    id: 47,
    question: "What is state swap?",
    options: [
      "Moving applications between servers.",
      "Switching between CPU cores.",
      "Moving memory pages between RAM and disk to manage memory efficiently.",
    ],
    answer:
      "Moving memory pages between RAM and disk to manage memory efficiently.",
  },
  {
    id: 48,
    question: "What does the system.cpu.system metric show?",
    options: [
      "Percent of time CPU spent in user space.",
      "Percent of time CPU was idle.",
      "Percent of time the CPU spent running the kernel.",
    ],
    answer: "Percent of time the CPU spent running the kernel.",
  },
  {
    id: 49,
    question: "What kind of IP range is 172.3.?",
    options: ["Public", "Private", "Loopback"],
    answer: "Private",
  },
  {
    id: 50,
    question:
      "Where is the Datadog Agent main configuration file located on Linux?",
    options: [
      "/etc/datadog-agent/config.yaml",
      "/usr/local/etc/datadog-agent.yaml",
      "/etc/datadog-agent/datadog.yaml",
    ],
    answer: "/etc/datadog-agent/datadog.yaml",
  },
  {
    id: 51,
    question: "Where are integration configuration files stored?",
    options: ["conf.d folder", "integrations.d", "/var/log/datadog"],
    answer: "conf.d folder",
  },
  {
    id: 52,
    question:
      "What command can you use to verify the successful installation of the Agent?",
    options: [
      "datadog-agent verify",
      "sudo datadog-agent status",
      "agent --status",
    ],
    answer: "sudo datadog-agent status",
  },
  {
    id: 53,
    question: "If the Log Level is set to INFO, which logs will be visible?",
    options: ["ERROR, WARN, INFO", "DEBUG, INFO", "INFO only"],
    answer: "ERROR, WARN, INFO",
  },
  {
    id: 54,
    question: "How does Datadog determine the Agent hostname?",
    options: [
      "It is fetched from AWS directly.",
      "It is defined in the agent configuration file.",
      "It is hardcoded in the agent binary.",
    ],
    answer: "It is defined in the agent configuration file.",
  },
  {
    id: 55,
    question: "What protocol and port does DogStatsD use?",
    options: ["TCP 8125", "UDP 8125", "UDP 8080"],
    answer: "UDP 8125",
  },
  {
    id: 56,
    question: "What does an Agent flare do?",
    options: [
      "Reboots the Agent and collects debug logs.",
      "Collects configuration and log files, removing sensitive data, for support.",
      "Encrypts and stores logs locally for analysis.",
    ],
    answer:
      "Collects configuration and log files, removing sensitive data, for support.",
  },
  {
    id: 57,
    question: "What must be allowed in your firewall for Agent flare to work?",
    options: [
      "outbound to *.agent.datadoghq.com",
      "port 8125 open",
      "inbound from all Datadog IPs",
    ],
    answer: "outbound to *.agent.datadoghq.com",
  },
  {
    id: 58,
    question: "How do you test an Agent check?",
    options: [
      "datadog-agent check run",
      "sudo -u dd-agent datadog-agent check <CHECK_NAME>",
      "check-agent <CHECK_NAME>",
    ],
    answer: "sudo -u dd-agent datadog-agent check <CHECK_NAME>",
  },
  {
    id: 59,
    question: "What does the metric Datadog.agent.running show?",
    options: [
      "Agent installation status",
      "Whether the agent has been restarted recently",
      "Uptime of an AIX Agent",
    ],
    answer: "Uptime of an AIX Agent",
  },
  {
    id: 60,
    question:
      "What happens to API and App keys when a user's account is disabled?",
    options: [
      "Both are revoked.",
      "App keys are revoked; API keys remain valid.",
      "API keys are revoked; App keys remain valid.",
    ],
    answer: "App keys are revoked; API keys remain valid.",
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
  {
    id: "i9",
    question: "Can I migrate my Grafana dashboards into Datadog?",
    options: [
      "No, there's no direct tool for this — but it's a great opportunity to ask what dashboards they need and show how easy it is to build them in Datadog, including out-of-the-box templates",
      "Yes, Datadog provides a one-click Grafana import feature",
      "Only metrics can be imported, not dashboards",
      "Yes, but only with a Datadog Enterprise subscription",
    ],
    answer:
      "No, there's no direct tool for this — but it's a great opportunity to ask what dashboards they need and show how easy it is to build them in Datadog, including out-of-the-box templates",
  },
  {
    id: "i10",
    question:
      "Can I trigger changes on my infrastructure when an alert goes off?",
    options: [
      "No, Datadog won't directly change your environment, but you can trigger a webhook to run a custom script",
      "Yes, Datadog automatically modifies infrastructure when alerts trigger",
      "Only if you're using AWS Auto Scaling groups",
      "Changes are only triggered through CI/CD tools like Terraform",
    ],
    answer:
      "No, Datadog won't directly change your environment, but you can trigger a webhook to run a custom script",
  },
  {
    id: "i11",
    question: "How quickly can I see Watchdog alerts?",
    options: [
      "2 to 6 weeks",
      "Watchdog alerts are generated in real time",
      "Only after enabling advanced analytics",
      "They appear after every weekly sync",
    ],
    answer: "2 to 6 weeks",
  },
  {
    id: "i12",
    question: "Can I silence alerts during maintenance?",
    options: [
      "Yes, we can manage downtime in monitors easily",
      "No, you must delete and recreate alerts manually",
      "Only with an Enterprise plan",
      "Only for infrastructure alerts, not APM",
    ],
    answer: "Yes, we can manage downtime in monitors easily",
  },
  {
    id: "i13",
    question: "Can I hook into my communications tools like Slack?",
    options: [
      "Yes, we support Slack and others, and can trigger a webhook if needed",
      "Only email and Microsoft Teams are supported",
      "No, Datadog does not support real-time communication tools",
      "Only via third-party automation platforms like Zapier",
    ],
    answer:
      "Yes, we support Slack and others, and can trigger a webhook if needed",
  },
  {
    id: "i14",
    question: "How long does it take to set up Datadog?",
    options: [
      "It depends, but setup is fast and works well with supported integrations",
      "6–8 weeks with professional services",
      "You need to write custom code to get started",
      "Only available after speaking with support",
    ],
    answer:
      "It depends, but setup is fast and works well with supported integrations",
  },
  {
    id: "i15",
    question:
      "What if I have to completely separate my data from multiple teams?",
    options: [
      "We can spin up multi-org environments or separate Datadog instances",
      "Each team must tag their data manually for isolation",
      "Data separation is only supported in single-tenant cloud",
      "You will need to create a separate AWS account for each team",
    ],
    answer:
      "We can spin up multi-org environments or separate Datadog instances",
  },
  {
    id: "i16",
    question: "Do you support RBAC (Role-Based Access Control)?",
    options: [
      "Yes, to a degree — we support RBAC for logs and dashboards",
      "No, Datadog only supports user-level permissions",
      "Only SSO users can access dashboards",
      "RBAC is only available in the Enterprise plan",
    ],
    answer: "Yes, to a degree — we support RBAC for logs and dashboards",
  },
  {
    id: "i17",
    question: "Do you monitor NetFlow?",
    options: [
      "Yes, in public beta — NetFlow monitors flow between devices like routers and firewalls",
      "No, we only monitor DNS and HTTP traffic",
      "Yes, but only in the Enterprise plan",
      "Only for AWS traffic via VPC Flow Logs",
    ],
    answer:
      "Yes, in public beta — NetFlow monitors flow between devices like routers and firewalls",
  },
  {
    id: "i18",
    question: "Can you support my hybrid environment?",
    options: [
      "Yes, we support on-prem, hybrid, and cloud environments",
      "Only cloud-native architectures are supported",
      "Hybrid requires a third-party integration layer",
      "Only Azure and GCP hybrid environments are supported",
    ],
    answer: "Yes, we support on-prem, hybrid, and cloud environments",
  },
  {
    id: "i19",
    question: "Do you support serverless?",
    options: [
      "Yes, we have a serverless page under Infrastructure that supports AWS Lambda and Azure Functions",
      "No, serverless monitoring is not supported",
      "Only GCP Cloud Functions are supported",
      "Only via third-party wrappers",
    ],
    answer:
      "Yes, we have a serverless page under Infrastructure that supports AWS Lambda and Azure Functions",
  },
  {
    id: "i20",
    question: "How often does the Live Containers view update?",
    options: [
      "There is a 2-second buffer for updates",
      "Once every minute",
      "Only on page refresh",
      "Every 5 seconds if Kubernetes metrics are enabled",
    ],
    answer: "There is a 2-second buffer for updates",
  },
  {
    id: "i21",
    question: "What is the overhead of the Datadog Agent?",
    options: [
      "It starts as low as 0.08% CPU usage and can go up to around 3% depending on enabled features",
      "The Agent always uses 10% of available CPU",
      "The Agent runs in a paused state until metrics are pulled",
      "CPU usage depends on your cloud provider, not Datadog settings",
    ],
    answer:
      "It starts as low as 0.08% CPU usage and can go up to around 3% depending on enabled features",
  },
  {
    id: "i22",
    question: "Do I deploy the Agent as a sidecar in AWS ECS Fargate?",
    options: [
      "Yes, each Fargate task requires the Agent deployed as a sidecar",
      "No, the Agent is automatically injected by the Fargate scheduler",
      "Only if you're using custom task definitions",
      "Sidecar agents are only needed in Kubernetes, not Fargate",
    ],
    answer: "Yes, each Fargate task requires the Agent deployed as a sidecar",
  },
  {
    id: "i23",
    question: "Do I have to use Helm to deploy the Agent in Kubernetes?",
    options: [
      "No, you can also use YAML manifests provided by Datadog",
      "Yes, Helm is required for all Agent deployments",
      "Only in EKS and AKS clusters",
      "You must build and push a custom Docker image",
    ],
    answer: "No, you can also use YAML manifests provided by Datadog",
  },
  {
    id: "i24",
    question:
      "Can I see container health info beyond 36 hours in Live Containers?",
    options: [
      "Yes, integrations like Docker and Kubernetes checks retain container data for 15 months",
      "No, 36 hours is the maximum available",
      "Only for on-prem environments",
      "Yes, but only if you're using Datadog Enterprise",
    ],
    answer:
      "Yes, integrations like Docker and Kubernetes checks retain container data for 15 months",
  },
  {
    id: "i25",
    question: "How does Datadog support ephemeral Kubernetes workloads?",
    options: [
      "Datadog provides visibility into pod lifecycle events and real-time resource usage",
      "You must manually tag and track pod termination times",
      "We don't support dynamic environments like ephemeral K8s",
      "Only persistent pods are supported by the Agent",
    ],
    answer:
      "Datadog provides visibility into pod lifecycle events and real-time resource usage",
  },
  {
    id: "i26",
    question: "How can I monitor uptime for ephemeral servers?",
    options: [
      "Use a metric monitor on system.uptime and the diff() function to detect reboots or new hosts",
      "Datadog automatically stores historical uptime snapshots for each host",
      "Only logs can track uptime in ephemeral environments",
      "Datadog creates a persistent ID for each server to track its lifecycle",
    ],
    answer:
      "Use a metric monitor on system.uptime and the diff() function to detect reboots or new hosts",
  },
  {
    id: "i27",
    question: "How much CPU does the Datadog Agent use?",
    options: [
      "Lightweight, typically 0.8 to 3% of CPU usage",
      "Roughly 10% on average across workloads",
      "It runs at full CPU capacity during peak times",
      "Agent CPU usage depends entirely on your cloud provider",
    ],
    answer: "Lightweight, typically 0.8 to 3% of CPU usage",
  },
];

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

export const apmFundamentalsPracticeExam = [
  {
    id: "apmf-1",
    question:
      "The Live Search view will display all ingested traces for how long?",
    options: ["15 minutes", "24 hours", "15 days"],
    answer: "15 minutes",
  },
  {
    id: "apmf-2",
    question: "Which tags are NOT available with tracing application metrics?",
    options: ["env, service, version", "custom tags", "second primary tag"],
    answer: "custom tags",
  },
  {
    id: "apmf-3",
    question: "What is the MINIMUM information contained on every span?",
    options: [
      "name, duration, and environment",
      "type, duration, and start time",
      "name, duration, and start time",
    ],
    answer: "name, duration, and start time",
  },
  {
    id: "apmf-4",
    question:
      "What is the PRIMARY challenge to monitoring the performance of typical distributed application environments?",
    options: [
      "Services are written in many languages and run on many platforms.",
      "Services are encrypted by several types of encryption.",
      "Services take a very long time to respond to requests.",
    ],
    answer: "Services are written in many languages and run on many platforms.",
  },
  {
    id: "apmf-5",
    question:
      "Which of the following options BEST describes the percentile distribution metrics that are available for distribution metrics in APM?",
    options: [
      "p50, p75, p90, p95, and p99",
      "p01, p05, p10, and p25",
      "any arbitrary percentile",
    ],
    answer: "p50, p75, p90, p95, and p99",
  },
  {
    id: "apmf-6",
    question:
      "The default APM pricing plan includes 1 million indexed spans per month, retained for how long?",
    options: ["7 days", "15 days", "30 days"],
    answer: "15 days",
  },
  {
    id: "apmf-7",
    question:
      "The Datadog Continuous Profiler can always be enabled with which method?",
    options: [
      "in-code configuration",
      "environment variable",
      "both environment variable and in-code configuration",
    ],
    answer: "in-code configuration",
  },
];

export const awsCloudPractitionerPracticeExam = [
  {
    id: "acp-1",
    question:
      "Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?",
    options: [
      "AWS Trusted Advisor",
      "AWS Key Management Service (AWS KMS)",
      "AWS CloudHSM",
      "AWS Secrets Manager",
    ],
    answer: "AWS CloudHSM",
  },
  {
    id: "acp-2",
    question:
      "The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
    options: [
      "AWS Trusted Advisor",
      "AWS CloudFormation",
      "Amazon Pinpoint",
      "AWS X-Ray",
    ],
    answer: "AWS X-Ray",
  },
  {
    id: "acp-3",
    question:
      "Which of the following AWS services are always free to use? (Select two)",
    options: [
      "AWS Identity and Access Management (AWS IAM)",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Auto Scaling",
    ],
    answer: [
      "AWS Identity and Access Management (AWS IAM)",
      "AWS Auto Scaling",
    ],
    multiSelect: true,
  },
  {
    id: "acp-4",
    question:
      "A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations. Which AWS technology/service will provide the necessary low-latency access to the end-users?",
    options: [
      "AWS Direct Connect",
      "AWS Edge Locations",
      "AWS Wavelength",
      "AWS Local Zones",
    ],
    answer: "AWS Local Zones",
  },
  {
    id: "acp-5",
    question:
      "A data analytics company is running a proprietary batch analytics application on AWS and wants to use a storage service which would be accessed by hundreds of EC2 instances simultaneously to append data to existing files. As a Cloud Practitioner, which AWS service would you suggest for this use-case?",
    options: [
      "Instance Store",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Simple Storage Service (Amazon S3)",
    ],
    answer: "Amazon Elastic File System (Amazon EFS)",
  },
  {
    id: "acp-6",
    question:
      "AWS Marketplace facilitates which of the following use-cases? (Select two)",
    options: [
      "AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers",
      "Purchase compliance documents from third-party vendors",
      "Buy Amazon EC2 Standard Reserved Instances (RI)",
      "Sell Software as a Service (SaaS) solutions to AWS customers",
      "Raise request for purchasing AWS Direct Connect connection",
    ],
    answer: [
      "AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers",
      "Sell Software as a Service (SaaS) solutions to AWS customers",
    ],
    multiSelect: true,
  },
  {
    id: "acp-7",
    question:
      "An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)",
    options: [
      "AWS Step Function",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Lambda",
      "AWS Systems Manager",
      "Amazon Eventbridge",
    ],
    answer: ["AWS Lambda", "Amazon Eventbridge"],
    multiSelect: true,
  },
  {
    id: "acp-8",
    question:
      "Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?",
    options: [
      "Simple routing",
      "Latency-based routing",
      "Failover routing",
      "Weighted routing",
    ],
    answer: "Weighted routing",
  },
  {
    id: "acp-9",
    question:
      "A Cloud Practitioner would like to get operational insights of its resources to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?",
    options: [
      "AWS Health Dashboard - Your Account Health",
      "AWS Systems Manager",
      "Amazon Inspector",
      "AWS Trusted Advisor",
    ],
    answer: "AWS Systems Manager",
  },
  {
    id: "acp-10",
    question:
      "An IT company is on a cost-optimization spree and wants to identify all Amazon EC2 instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)",
    options: [
      "AWS Cost & Usage Report (AWS CUR)",
      "Amazon CloudWatch",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
    ],
    answer: ["AWS Cost Explorer", "AWS Trusted Advisor"],
    multiSelect: true,
  },
  {
    id: "acp-11",
    question:
      "Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?",
    options: [
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon S3 Standard",
      "Amazon S3 Intelligent-Tiering",
      "Amazon S3 Glacier Deep Archive",
    ],
    answer: "Amazon S3 Glacier Deep Archive",
  },
  {
    id: "acp-12",
    question:
      "An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?",
    options: ["300 seconds", "600 seconds", "60 seconds", "30 seconds"],
    answer: "60 seconds",
  },
  {
    id: "acp-13",
    question:
      "An AWS user is trying to launch an Amazon EC2 instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this EC2 instance?",
    options: [
      "You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance",
      "You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance",
      "An Amazon Machine Image (AMI) is a global entity, so the region is not applicable",
      "You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance",
    ],
    answer:
      "You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance",
  },
  {
    id: "acp-14",
    question:
      "A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?",
    options: [
      "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Translate to convey the text results via speech",
      "Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech",
      "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech",
      "Use Amazon Translate to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech",
    ],
    answer:
      "Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech",
  },
  {
    id: "acp-15",
    question:
      "A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?",
    options: [
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda",
      "AWS Fargate",
      "Amazon Elastic Container Registry (Amazon ECR)",
    ],
    answer: "Amazon Elastic Container Service (Amazon ECS)",
  },
  {
    id: "acp-16",
    question:
      "Which of the following are the serverless computing services offered by AWS? (Select two)",
    options: [
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Fargate",
      "AWS Lambda",
    ],
    answer: ["AWS Fargate", "AWS Lambda"],
    multiSelect: true,
  },
  {
    id: "acp-17",
    question:
      "An organization maintains a separate Virtual Private Cloud (VPC) for each of its business units. Two units need to privately share data. Which is the most optimal way of privately sharing data between the two VPCs?",
    options: [
      "VPC Endpoint",
      "VPC peering connection",
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
    ],
    answer: "VPC peering connection",
  },
  {
    id: "acp-18",
    question:
      "Which of the following options is NOT a feature of Amazon Inspector?",
    options: [
      "Inspect running operating systems (OS) against known vulnerabilities",
      "Track configuration changes",
      "Analyze against unintended network accessibility",
      "Automate security assessments",
    ],
    answer: "Track configuration changes",
  },
  {
    id: "acp-19",
    question:
      "Which of the following statements is the MOST accurate when describing AWS Elastic Beanstalk?",
    options: [
      "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services",
      "It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application",
      "It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application",
      "It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services",
    ],
    answer:
      "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services",
  },
  {
    id: "acp-20",
    question:
      "A company uses reserved EC2 instances across multiple units with each unit having its own AWS account. However, some of the units under-utilize their reserved instances while other units need more reserved instances. As a Cloud Practitioner, which of the following would you recommend as the most cost-optimal solution?",
    options: [
      "Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
      "Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
      "Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
      "Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
    ],
    answer:
      "Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
  },
  {
    id: "acp-21",
    question:
      "A Cloud Practitioner would like to deploy identical resources across all AWS regions and accounts using templates while estimating costs. Which AWS service can assist with this task?",
    options: [
      "AWS CloudFormation",
      "Amazon LightSail",
      "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)",
      "AWS CodeDeploy",
    ],
    answer: "AWS CloudFormation",
  },
  {
    id: "acp-22",
    question:
      "Which AWS service can be used to automate code deployment to Amazon EC2 instances as well as on-premises instances?",
    options: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "AWS CodeCommit",
    ],
    answer: "AWS CodeDeploy",
  },
  {
    id: "acp-23",
    question:
      "Which benefit of Cloud Computing allows AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud?",
    options: [
      "Increased speed and agility",
      "Go global in minutes",
      "Trade capital expense for variable expense",
      "Massive economies of scale",
    ],
    answer: "Massive economies of scale",
  },
  {
    id: "acp-24",
    question:
      "Which of the following are the best practices when using AWS Organizations? (Select two)",
    options: [
      "Restrict account privileges using Service Control Policies (SCP)",
      "Do not use AWS Organizations to automate AWS account creation",
      "Disable AWS CloudTrail on several accounts",
      "Never use tags for billing",
      "Create AWS accounts per department",
    ],
    answer: [
      "Restrict account privileges using Service Control Policies (SCP)",
      "Create AWS accounts per department",
    ],
    multiSelect: true,
  },
  {
    id: "acp-25",
    question:
      "Which of the following are the advantages of using the AWS Cloud? (Select two)",
    options: [
      "Limited scaling",
      "Increase speed and agility",
      "Stop guessing about capacity",
      "AWS is responsible for security in the cloud",
      "Trade operational expense for capital expense",
    ],
    answer: ["Increase speed and agility", "Stop guessing about capacity"],
    multiSelect: true,
  },
  {
    id: "acp-26",
    question:
      "Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)",
    options: [
      "For a service like Amazon EC2, that falls under IaaS, AWS is responsible for maintaining the guest operating system",
      "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms",
      "Configuration Management is the responsibility of the customer",
      "AWS is responsible for training AWS and customer employees on AWS products and services",
      "AWS is responsible for Security 'of' the Cloud",
    ],
    answer: [
      "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms",
      "AWS is responsible for Security 'of' the Cloud",
    ],
    multiSelect: true,
  },
  {
    id: "acp-27",
    question:
      "AWS Organizations provides which of the following benefits? (Select two)",
    options: [
      "Share the reserved Amazon EC2 instances amongst the member AWS accounts",
      "Deploy patches on Amazon EC2 instances across the member AWS accounts",
      "Provision Amazon EC2 Spot instances across the member AWS accounts",
      "Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts",
      "Check vulnerabilities on Amazon EC2 instances across the member AWS accounts",
    ],
    answer: [
      "Share the reserved Amazon EC2 instances amongst the member AWS accounts",
      "Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts",
    ],
    multiSelect: true,
  },
  {
    id: "acp-28",
    question:
      "Which policy describes prohibited uses of the web services offered by Amazon Web Services?",
    options: [
      "AWS Acceptable Use Policy",
      "AWS Applicable Use Policy",
      "AWS Trusted Advisor",
      "AWS Fair Use Policy",
    ],
    answer: "AWS Acceptable Use Policy",
  },
  {
    id: "acp-29",
    question:
      "Which AWS service would you choose for a data processing project that needs a schemaless database?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon RedShift",
    ],
    answer: "Amazon DynamoDB",
  },
  {
    id: "acp-30",
    question:
      "A company would like to optimize Amazon EC2 costs. Which of the following actions can help with this task? (Select two)",
    options: [
      "Set up Auto Scaling groups to align the number of instances with the demand",
      "Build its own servers",
      "Opt for a higher AWS Support plan",
      "Vertically scale the EC2 instances",
      "Purchase Amazon EC2 Reserved instances (RIs)",
    ],
    answer: [
      "Set up Auto Scaling groups to align the number of instances with the demand",
      "Purchase Amazon EC2 Reserved instances (RIs)",
    ],
    multiSelect: true,
  },
  {
    id: "acp-31",
    question:
      "A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
    options: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Config",
    ],
    answer: "AWS CloudTrail",
  },
  {
    id: "acp-32",
    question:
      "A start-up would like to quickly deploy a popular technology on AWS. As a Cloud Practitioner, which AWS tool would you use for this task?",
    options: [
      "AWS Partner Solutions (formerly Quick Starts)",
      "AWS Whitepapers",
      "AWS Forums",
      "AWS CodeDeploy",
    ],
    answer: "AWS Partner Solutions (formerly Quick Starts)",
  },
  {
    id: "acp-33",
    question:
      "Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?",
    options: [
      "AWS Health - Your Account Health Dashboard",
      "Amazon CloudWatch",
      "Amazon Inspector",
      "AWS Health - Service Health Dashboard",
    ],
    answer: "AWS Health - Your Account Health Dashboard",
  },
  {
    id: "acp-34",
    question:
      "Which of the following AWS services have data encryption automatically enabled? (Select two)",
    options: [
      "AWS Storage Gateway",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Redshift",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Simple Storage Service (Amazon S3)",
    ],
    answer: [
      "AWS Storage Gateway",
      "Amazon Simple Storage Service (Amazon S3)",
    ],
    multiSelect: true,
  },
  {
    id: "acp-35",
    question:
      "A multi-national corporation wants to get expert professional advice on migrating to AWS and managing their applications on AWS Cloud. Which of the following entities would you recommend for this engagement?",
    options: [
      "AWS Trusted Advisor",
      "APN Consulting Partner",
      "Concierge Support Team",
      "APN Technology Partner",
    ],
    answer: "APN Consulting Partner",
  },
  {
    id: "acp-36",
    question:
      "A company wants to improve the resiliency of its flagship application so it wants to move from its traditional database system to a managed AWS NoSQL database service to support active-active configuration in both the East and West US AWS regions. Which AWS database service is the right fit for this requirement?",
    options: [
      "Amazon DynamoDB with global tables",
      "Amazon Relational Database Service (Amazon RDS) for MYSQL",
      "Amazon DynamoDB with DynamoDB Accelerator",
      "Amazon Aurora with multi-master clusters",
    ],
    answer: "Amazon DynamoDB with global tables",
  },
  {
    id: "acp-37",
    question:
      "A company's flagship application runs on a fleet of Amazon EC2 instances. The system administrators are looking for the best way to provide secure shell access to Amazon EC2 instances without opening new ports or using public IP addresses. Which tool/service will help you achieve this requirement?",
    options: [
      "Amazon Inspector",
      "Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect",
      "AWS Systems Manager Session Manager",
      "Amazon Route 53",
    ],
    answer: "AWS Systems Manager Session Manager",
  },
  {
    id: "acp-38",
    question: "What is the primary use case for Amazon GuardDuty?",
    options: [
      "Detecting malicious activity and threats in your AWS accounts and workloads",
      "Encrypting data in transit between AWS services using TLS certificates",
      "Enforcing secure communication between VPCs using network traffic filtering",
      "Protecting web applications from common exploits and vulnerabilities such as SQL injection",
    ],
    answer:
      "Detecting malicious activity and threats in your AWS accounts and workloads",
  },
  {
    id: "acp-39",
    question:
      "A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon S3. The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon S3?",
    options: [
      "Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails",
      "Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails",
      "Use Amazon S3 Standard to store the thumbnails",
      "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails",
    ],
    answer:
      "Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails",
  },
  {
    id: "acp-40",
    question: "Which of the following is a container service of AWS?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon SageMaker",
      "AWS Elastic Beanstalk",
      "AWS Fargate",
    ],
    answer: "AWS Fargate",
  },
  {
    id: "acp-41",
    question:
      "Which AWS service will you use to provision the same AWS infrastructure across multiple AWS accounts and regions?",
    options: [
      "AWS CloudFormation",
      "AWS Config",
      "AWS CodeDeploy",
      "AWS Systems Manager",
    ],
    answer: "AWS CloudFormation",
  },
  {
    id: "acp-42",
    question:
      "An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practitioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?",
    options: [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon Relational Database Service (Amazon RDS)",
    ],
    answer: "Amazon DynamoDB",
  },
  {
    id: "acp-43",
    question:
      "A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?",
    options: [
      "Network Stress Testing",
      "Amazon Inspector",
      "Penetration Testing",
      "AWS Secrets Manager",
    ],
    answer: "Penetration Testing",
  },
  {
    id: "acp-44",
    question:
      "Which of the following AWS services offer block-level storage? (Select two)",
    options: [
      "Instance Store",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
    ],
    answer: ["Instance Store", "Amazon Elastic Block Store (Amazon EBS)"],
    multiSelect: true,
  },
  {
    id: "acp-45",
    question:
      "What is the primary benefit of deploying an Amazon RDS Multi-AZ database with one standby?",
    options: [
      "Amazon RDS Multi-AZ reduces database usage costs",
      "Amazon RDS Multi-AZ improves database performance for read-heavy workloads",
      "Amazon RDS Multi-AZ enhances database availability",
      "Amazon RDS Multi-AZ protects the database from a regional failure",
    ],
    answer: "Amazon RDS Multi-AZ enhances database availability",
  },
  {
    id: "acp-46",
    question:
      "An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?",
    options: [
      "Private deployment",
      "Mixed deployment",
      "Hybrid deployment",
      "Cloud deployment",
    ],
    answer: "Hybrid deployment",
  },
  {
    id: "acp-47",
    question:
      "A company would like to separate cost for AWS services by the department for cost allocation. Which of the following is the simplest way to achieve this task?",
    options: [
      "Create different virtual private cloud (VPCs) for different departments",
      "Create different accounts for different departments",
      "Create tags for each department",
      "Create one account for all departments and share this account",
    ],
    answer: "Create tags for each department",
  },
  {
    id: "acp-48",
    question:
      "A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?",
    options: [
      "Amazon S3 Glacier Deep Archive",
      "Amazon S3 Glacier Flexible Retrieval",
      "AWS Storage Gateway",
      "Amazon Elastic File System (Amazon EFS)",
    ],
    answer: "Amazon S3 Glacier Deep Archive",
  },
  {
    id: "acp-49",
    question:
      "Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?",
    options: [
      "Operational Excellence",
      "Cost Optimization",
      "Security",
      "Performance Efficiency",
    ],
    answer: "Operational Excellence",
  },
  {
    id: "acp-50",
    question:
      "Which is a common stakeholder role for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Select two)",
    options: [
      "Engineer",
      "Chief Information Officer (CIO)",
      "Chief Data Officer (CDO)",
      "Chief Technology Officer (CTO)",
      "Chief Product Officer (CPO)",
    ],
    answer: ["Engineer", "Chief Technology Officer (CTO)"],
    multiSelect: true,
  },
  {
    id: "acp-51",
    question:
      "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
    options: [
      "Read Replica reduces database usage costs",
      "Read Replica protects the database from a regional failure",
      "Read Replica enhances database availability",
      "Read Replica improves database scalability",
    ],
    answer: "Read Replica improves database scalability",
  },
  {
    id: "acp-52",
    question:
      "A financial services company wants to migrate from its on-premises data center to AWS Cloud. As a Cloud Practitioner, which AWS service would you recommend so that the company can compare the cost of running their IT infrastructure on-premises vs AWS Cloud?",
    options: [
      "AWS Pricing Calculator",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets",
    ],
    answer: "AWS Pricing Calculator",
  },
  {
    id: "acp-53",
    question:
      "Which AWS service can be used to subscribe to an RSS feed to be notified of the status of all AWS service interruptions?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS Health Dashboard - Service Health",
      "AWS Lambda",
      "AWS Health Dashboard - Your Account Health",
    ],
    answer: "AWS Health Dashboard - Service Health",
  },
  {
    id: "acp-54",
    question:
      "A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?",
    options: [
      "EC2 Reserved Instance (RI)",
      "EC2 Dedicated Host",
      "EC2 On-Demand Instance",
      "EC2 Spot Instance",
    ],
    answer: "EC2 Reserved Instance (RI)",
  },
  {
    id: "acp-55",
    question:
      "Which of the following AWS services can be used to forecast your AWS account usage and costs?",
    options: [
      "AWS Cost & Usage Report (AWS CUR)",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost Explorer",
    ],
    answer: "AWS Cost Explorer",
  },
  {
    id: "acp-56",
    question:
      "A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?",
    options: [
      "AWS Command Line Interface (CLI)",
      "AWS Identity and Access Management (AWS IAM)",
      "AWS IAM Identity Center",
      "AWS Cognito",
    ],
    answer: "AWS IAM Identity Center",
  },
  {
    id: "acp-57",
    question:
      "Which AWS service can help you analyze your infrastructure to identify unattached or underutilized Amazon EBS Elastic Volumes?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Config",
    ],
    answer: "AWS Trusted Advisor",
  },
  {
    id: "acp-58",
    question:
      "Which of the following AWS authentication mechanisms supports an AWS Multi-Factor Authentication (AWS MFA) device that you can plug into a USB port on your computer?",
    options: [
      "U2F security key",
      "SMS text message-based Multi-Factor Authentication (AWS MFA)",
      "Hardware Multi-Factor Authentication (AWS MFA) device",
      "Virtual Multi-Factor Authentication (AWS MFA) device",
    ],
    answer: "U2F security key",
  },
  {
    id: "acp-59",
    question:
      "A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement MFA. Which of the below options is best suited for this use case?",
    options: [
      "Soft Token Multi-Factor Authentication (MFA) device",
      "U2F security key",
      "Virtual Multi-Factor Authentication (MFA) device",
      "Hardware Multi-Factor Authentication (MFA) device",
    ],
    answer: "Virtual Multi-Factor Authentication (MFA) device",
  },
  {
    id: "acp-60",
    question:
      "Which of the following options are the benefits of using AWS Elastic Load Balancing (ELB)? (Select two)",
    options: [
      "Storage",
      "High availability",
      "Fault tolerance",
      "Agility",
      "Less costly",
    ],
    answer: ["High availability", "Fault tolerance"],
    multiSelect: true,
  },
  {
    id: "acp-61",
    question: "Multi-AZ deployment is an example of which of the following?",
    options: [
      "High Availability",
      "Scale out",
      "Performance Efficiency",
      "Scale up",
    ],
    answer: "High Availability",
  },
  {
    id: "acp-62",
    question:
      "AWS Compute Optimizer delivers recommendations for which of the following AWS resources? (Select two)",
    options: [
      "Amazon Elastic File System (Amazon EFS), AWS Lambda functions",
      "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon Elastic File System (Amazon EFS)",
      "AWS Lambda functions, Amazon Simple Storage Service (Amazon S3)",
      "Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions",
      "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups",
    ],
    answer: [
      "Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions",
      "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups",
    ],
    multiSelect: true,
  },
  {
    id: "acp-63",
    question:
      "Which entity ensures that your application on Amazon EC2 always has the right amount of capacity to handle the current traffic demand?",
    options: [
      "Multi-AZ deployment",
      "Application Load Balancer",
      "Network Load Balancer",
      "Amazon EC2 Auto Scaling",
    ],
    answer: "Amazon EC2 Auto Scaling",
  },
  {
    id: "acp-64",
    question:
      "An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon EC2 instances and on-premises servers. Which of the following is the MOST effective for this use-case?",
    options: [
      "Use AWS Lambda to send log data from Amazon EC2 instances as well as on-premises servers to Amazon CloudWatch Logs",
      "Use AWS CloudTrail for the Amazon EC2 instance and Amazon CloudWatch Logs for the on-premises servers",
      "Use Amazon CloudWatch Logs for the Amazon EC2 instance and AWS CloudTrail for the on-premises servers",
      "Use Amazon CloudWatch Logs for both the Amazon EC2 instance and the on-premises servers",
    ],
    answer:
      "Use Amazon CloudWatch Logs for both the Amazon EC2 instance and the on-premises servers",
  },
  {
    id: "acp-65",
    question:
      "A silicon valley based healthcare startup stores anonymized patient health data on Amazon S3. The CTO further wants to ensure that any sensitive data on S3 is discovered and identified to prevent any sensitive data leaks. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
    options: [
      "Amazon Polly",
      "AWS Secrets Manager",
      "Amazon Macie",
      "AWS Glue",
    ],
    answer: "Amazon Macie",
  },
  {
    id: "acp-66",
    question:
      "A Cloud Practitioner would like to centrally view, manage, and operate nodes to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?",
    options: [
      "Amazon Inspector",
      "AWS Systems Manager",
      "AWS Health Dashboard - Your Account Health",
      "AWS Trusted Advisor",
    ],
    answer: "AWS Systems Manager",
  },
  {
    id: "acp-67",
    question:
      "Which Amazon Elastic Compute Cloud (Amazon EC2) Auto Scaling feature can help with fault tolerance?",
    options: [
      "Having the right amount of computing capacity",
      "Replacing unhealthy Amazon EC2 instances",
      "Distributing load to Amazon EC2 instances",
      "Lower cost by adjusting the number of Amazon EC2 instances",
    ],
    answer: "Replacing unhealthy Amazon EC2 instances",
  },
  {
    id: "acp-68",
    question:
      "According to the AWS Well-Architected Framework, which of the following action is recommended in the Security pillar?",
    options: [
      "Use AWS Key Management Service (AWS KMS) to encrypt data",
      "Use Amazon CloudWatch to measure overall efficiency",
      "Use AWS CloudFormation to automate security best practices",
      "Use AWS Cost Explorer to view and track your usage in detail",
    ],
    answer: "Use AWS Key Management Service (AWS KMS) to encrypt data",
  },
  {
    id: "acp-69",
    question:
      "Which AWS serverless service allows you to prepare data for analytics?",
    options: ["Amazon Athena", "AWS Glue", "Amazon EMR", "Amazon Redshift"],
    answer: "AWS Glue",
  },
  {
    id: "acp-70",
    question:
      "An e-commerce company would like to build a chatbot for its customer service using Natural Language Understanding (NLU). As a Cloud Practitioner, which AWS service would you use?",
    options: [
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Rekognition",
      "Amazon Comprehend",
    ],
    answer: "Amazon Lex",
  },
  {
    id: "acp-71",
    question:
      "Which of the following AWS services is used to provide low-latency access to data by caching it in memory?",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon DynamoDB",
    ],
    answer: "Amazon ElastiCache",
  },
  {
    id: "acp-72",
    question:
      "A company has a static website hosted on Amazon S3 and wants to deliver it globally with low latency. Which AWS service should they use?",
    options: [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53",
    ],
    answer: "Amazon CloudFront",
  },
  {
    id: "acp-73",
    question: "Which AWS service provides a managed NoSQL database?",
    options: [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    answer: "Amazon DynamoDB",
  },
  {
    id: "acp-74",
    question:
      "Adding more CPU/RAM to an Amazon Elastic Compute Cloud (Amazon EC2) instance represents which of the following?",
    options: [
      "Managing increasing volumes of data",
      "Horizontal scaling",
      "Vertical scaling",
      "Loose coupling",
    ],
    answer: "Vertical scaling",
  },
  {
    id: "acp-75",
    question:
      "Which AWS service helps you to centrally manage compliance requirements and security policies across multiple AWS accounts?",
    options: [
      "Amazon Inspector",
      "AWS Security Hub",
      "AWS Shield",
      "Amazon Macie",
    ],
    answer: "AWS Security Hub",
  },
  {
    id: "acp-76",
    question:
      "Which AWS tool/service will help you define your cloud infrastructure using popular programming languages such as Python and JavaScript?",
    options: [
      "AWS CloudFormation",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS Elastic Beanstalk",
      "AWS CodeBuild",
    ],
    answer: "AWS Cloud Development Kit (AWS CDK)",
  },
  {
    id: "acp-77",
    question: "What is Amazon Lightsail?",
    options: [
      "A service to monitor your AWS resources",
      "An easy-to-use virtual private server (VPS) service",
      "A managed relational database service",
      "A container orchestration service",
    ],
    answer: "An easy-to-use virtual private server (VPS) service",
  },
  {
    id: "acp-78",
    question:
      "Which AWS service allows you to run code without provisioning or managing servers?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Batch"],
    answer: "AWS Lambda",
  },
  {
    id: "acp-79",
    question:
      "According to the AWS Shared Responsibility Model, which of the following is the responsibility of the customer?",
    options: [
      "Managing Amazon DynamoDB",
      "Edge locations security",
      "Firewall & networking configuration of Amazon Elastic Compute Cloud (Amazon EC2)",
      "Protecting hardware infrastructure",
    ],
    answer:
      "Firewall & networking configuration of Amazon Elastic Compute Cloud (Amazon EC2)",
  },
  {
    id: "acp-80",
    question:
      "Which AWS service provides a fully managed message queuing service?",
    options: ["Amazon SNS", "Amazon SQS", "AWS Step Functions", "Amazon MQ"],
    answer: "Amazon SQS",
  },
  {
    id: "acp-81",
    question:
      "Which AWS Identity and Access Management (AWS IAM) Security Tools allows you to review permissions granted to an IAM user?",
    options: [
      "IAM credentials report",
      "AWS Identity and Access Management (IAM) access advisor",
      "Multi-Factor Authentication (MFA)",
      "IAM policy",
    ],
    answer: "AWS Identity and Access Management (IAM) access advisor",
  },
  {
    id: "acp-82",
    question:
      "Which AWS service is used to send notifications via SMS, email, or other protocols?",
    options: [
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon SNS",
      "Amazon Pinpoint",
    ],
    answer: "Amazon SNS",
  },
  {
    id: "acp-83",
    question: "What does the term 'elasticity' mean in AWS Cloud?",
    options: [
      "The ability to run applications in multiple regions",
      "The ability to automatically scale resources up or down based on demand",
      "The ability to achieve lower latency through caching",
      "The ability to secure your applications using encryption",
    ],
    answer:
      "The ability to automatically scale resources up or down based on demand",
  },
  {
    id: "acp-84",
    question:
      "Which AWS service allows you to analyze and visualize data using standard SQL queries on data stored in Amazon S3?",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon Athena",
    ],
    answer: "Amazon Athena",
  },
  {
    id: "acp-85",
    question:
      "A startup needs to quickly launch a new web application with minimum configuration and no infrastructure management. Which AWS service would be most appropriate?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "Amazon ECS",
      "AWS Lambda",
    ],
    answer: "AWS Elastic Beanstalk",
  },
  {
    id: "acp-86",
    question:
      "Which of the following criteria are used to calculate the charge for Amazon EBS Volumes? (Select TWO)",
    options: [
      "Data transfer IN",
      "Volume type",
      "The Amazon EC2 instance type the Amazon EBS Elastic volume is attached to",
      "Provisioned IOPS",
      "Data type",
    ],
    answer: ["Volume type", "Provisioned IOPS"],
    multiSelect: true,
  },
  {
    id: "acp-87",
    question:
      "Which AWS service would you use to transfer large amounts of data from on-premises to AWS in a secure and fast way?",
    options: [
      "AWS Direct Connect",
      "AWS Snowball",
      "Amazon S3 Transfer Acceleration",
      "AWS DataSync",
    ],
    answer: "AWS Snowball",
  },
  {
    id: "acp-88",
    question:
      "According to the AWS Well-Architected Framework, which of the following statements are recommendations of the Operational Excellence pillar? (Select TWO)",
    options: [
      "Use serverless architectures",
      "Anticipate failure",
      "Automatically recover from failure",
      "Make frequent, small, reversible changes",
      "Enable traceability",
    ],
    answer: ["Anticipate failure", "Make frequent, small, reversible changes"],
    multiSelect: true,
  },
  {
    id: "acp-89",
    question:
      "Which AWS service provides DDoS protection for your applications?",
    options: ["AWS WAF", "Amazon Inspector", "AWS Shield", "Amazon GuardDuty"],
    answer: "AWS Shield",
  },
  {
    id: "acp-90",
    question:
      "Which service provides a virtual network dedicated to your AWS account?",
    options: [
      "AWS Direct Connect",
      "Amazon VPC",
      "AWS PrivateLink",
      "Amazon Route 53",
    ],
    answer: "Amazon VPC",
  },
  {
    id: "acp-91",
    question:
      "According to the AWS Shared Responsibility Model, which of the following is both the responsibility of AWS and the customer? (Select TWO)",
    options: [
      "Operating system (OS) configuration",
      "Configuration management",
      "Disposal of disk drives",
      "Data center security",
      "Customer data",
    ],
    answer: ["Operating system (OS) configuration", "Configuration management"],
    multiSelect: true,
  },
  {
    id: "acp-92",
    question:
      "Which of the following services are provided by Amazon Route 53? (Select Two)",
    options: [
      "Health checks and monitoring",
      "Load balancing",
      "Transfer acceleration",
      "Domain registration",
      "IP routing",
    ],
    answer: ["Health checks and monitoring", "Domain registration"],
    multiSelect: true,
  },
  {
    id: "acp-93",
    question: "Which AWS service provides a managed Kubernetes service?",
    options: ["Amazon ECS", "AWS Fargate", "Amazon EKS", "AWS Batch"],
    answer: "Amazon EKS",
  },
  {
    id: "acp-94",
    question:
      "An engineering team would like to cost-effectively run hundreds of thousands of batch computing workloads on AWS. As a Cloud Practitioner, which AWS service would you use for this task?",
    options: ["AWS Batch", "Amazon Lightsail", "AWS Fargate", "AWS Lambda"],
    answer: "AWS Batch",
  },
  {
    id: "acp-95",
    question:
      "Which AWS service offers a petabyte-scale data warehousing solution?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift",
    ],
    answer: "Amazon Redshift",
  },
  {
    id: "acp-96",
    question:
      "Which AWS service helps you manage spending across your AWS accounts?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost & Usage Report",
    ],
    answer: "AWS Budgets",
  },
  {
    id: "acp-97",
    question:
      "Which AWS service allows you to quickly and easily add user sign-up, sign-in, and access control to web and mobile applications?",
    options: [
      "AWS Organizations",
      "AWS Identity and Access Management (AWS IAM)",
      "Amazon Cognito",
      "AWS IAM Identity Center",
    ],
    answer: "Amazon Cognito",
  },
  {
    id: "acp-98",
    question:
      "Which types of monitoring can be provided by Amazon CloudWatch? (Select TWO)",
    options: [
      "Application performance",
      "Resource utilization",
      "API access",
      "Account management",
      "Performance and availability of AWS services",
    ],
    answer: ["Application performance", "Resource utilization"],
    multiSelect: true,
  },
  {
    id: "acp-99",
    question:
      "Which AWS service provides a fully managed container orchestration service using Docker containers?",
    options: ["AWS Lambda", "Amazon EKS", "Amazon ECS", "AWS Fargate"],
    answer: "Amazon ECS",
  },
  {
    id: "acp-100",
    question:
      "Which AWS service would you use to migrate databases to AWS quickly and securely?",
    options: [
      "AWS Schema Conversion Tool",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon RDS",
      "AWS DataSync",
    ],
    answer: "AWS Database Migration Service (AWS DMS)",
  },
  {
    id: "acp-101",
    question:
      "A production company with predictable usage would like to reduce the cost of its Amazon Elastic Compute Cloud (Amazon EC2) instances by choosing the right pricing plan. Which pricing plans should they consider? (Select TWO)",
    options: ["3 years", "1 year", "5 years", "2 years", "6 months"],
    answer: ["3 years", "1 year"],
    multiSelect: true,
  },
  {
    id: "acp-102",
    question:
      "Which AWS service provides automated recommendations to help you follow AWS best practices and improve your environment?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Health Dashboard",
    ],
    answer: "AWS Trusted Advisor",
  },
  {
    id: "acp-103",
    question:
      "According to the AWS Shared Responsibility Model, which of the following are the responsibilities of AWS? (Select TWO)",
    options: [
      "Configuring IAM Roles",
      "Network operability",
      "Installing security patches of the guest operating system (OS)",
      "Encrypting application data",
      "Data center security",
    ],
    answer: ["Network operability", "Data center security"],
    multiSelect: true,
  },
  {
    id: "acp-104",
    question:
      "Which AWS service provides a managed workflow service to build applications using visual workflows?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon EventBridge",
    ],
    answer: "AWS Step Functions",
  },
  {
    id: "acp-105",
    question:
      "Which AWS service provides a content delivery network (CDN) for distributing data globally?",
    options: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Direct Connect",
    ],
    answer: "Amazon CloudFront",
  },
  {
    id: "acp-106",
    question:
      "Which AWS service should you use to monitor AWS resources and applications in real time?",
    options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS X-Ray"],
    answer: "Amazon CloudWatch",
  },
  {
    id: "acp-107",
    question: "Which AWS service provides a managed graph database?",
    options: [
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon Aurora",
    ],
    answer: "Amazon Neptune",
  },
  {
    id: "acp-108",
    question:
      "Which AWS tool can provide best practice recommendations for performance, service limits, and cost optimization?",
    options: [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS Health Dashboard - Service health",
    ],
    answer: "AWS Trusted Advisor",
  },
  {
    id: "acp-109",
    question:
      "An enterprise is planning to move one of its older applications from its local data center to AWS. The IT team wants the fastest migration path and has decided not to update the application code or make any architectural changes. Which migration strategy is the most appropriate for this scenario?",
    options: ["Refactor", "Repurchase", "Rehost", "Replatform"],
    answer: "Rehost",
  },
  {
    id: "acp-110",
    question:
      "A company would like to move its infrastructure to AWS Cloud. Which of the following should be included in the Total Cost of Ownership (TCO) estimate? (Select TWO)",
    options: [
      "Number of end-users",
      "Server administration",
      "Electronic equipment at office",
      "Application advertising",
      "Power/Cooling",
    ],
    answer: ["Server administration", "Power/Cooling"],
    multiSelect: true,
  },
  {
    id: "acp-111",
    question:
      "The development team at a company manages 300 microservices and it is now trying to automate the code reviews to improve the code quality. Which tool/service is the right fit for this requirement?",
    options: [
      "AWS X-Ray",
      "AWS Trusted Advisor",
      "Amazon CodeGuru",
      "AWS CodeBuild",
    ],
    answer: "Amazon CodeGuru",
  },
  {
    id: "acp-112",
    question:
      "A company based in Sydney hosts its application on an Amazon Elastic Compute Cloud (Amazon EC2) instance in ap-southeast-2. They would like to deploy the same Amazon EC2 instances in eu-south-1. Which of the following AWS entities can address this use case?",
    options: [
      "AWS Lambda",
      "Amazon Machine Image (AMI)",
      "Amazon EBS Elastic Volume snapshots",
      "Elastic Load Balancing (ELB)",
    ],
    answer: "Amazon Machine Image (AMI)",
  },
  {
    id: "acp-113",
    question:
      "A start-up would like to monitor its cost on the AWS Cloud and would like to choose an optimal Savings Plan. As a Cloud Practitioner, which AWS service would you use?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Cost & Usage Report (AWS CUR)",
      "AWS Budgets",
    ],
    answer: "AWS Cost Explorer",
  },
  {
    id: "acp-114",
    question:
      "Which AWS service allows you to run containerized applications without managing servers or clusters?",
    options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "AWS Lambda"],
    answer: "AWS Fargate",
  },
  {
    id: "acp-115",
    question:
      "Which AWS service is specifically designed for machine learning practitioners to build, train, and deploy ML models?",
    options: [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon SageMaker",
      "AWS DeepLens",
    ],
    answer: "Amazon SageMaker",
  },
  {
    id: "acp-116",
    question:
      "A company is planning to implement Chaos Engineering to expose any blind spots that can disrupt the resiliency of the application. Which AWS service will help implement this requirement with the least effort?",
    options: [
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "AWS Fault Injection Simulator (AWS FIS)",
    ],
    answer: "AWS Fault Injection Simulator (AWS FIS)",
  },
];

export const gcpFundamentalsPracticeExam = [
  {
    id: "gcpf-1",
    question: "What is the data warehouse service in GCP?",
    options: ["BigQuery", "Cloud Spanner", "Bigtable", "Cloud Storage"],
    answer: "BigQuery",
  },
  {
    id: "gcpf-2",
    question:
      "Which GCP service is a fully managed, serverless platform for developing and hosting web applications at scale?",
    options: ["App Engine", "Compute Engine", "Cloud Functions", "Cloud Run"],
    answer: "App Engine",
  },
  {
    id: "gcpf-3",
    question:
      "What is the global, high-performance, NoSQL database service designed for large analytical and operational workloads?",
    options: ["Cloud Bigtable", "Cloud SQL", "Cloud Spanner", "Firestore"],
    answer: "Cloud Bigtable",
  },
  {
    id: "gcpf-4",
    question:
      "Which storage class is best for data that you plan to access at most once a year, such as for regulatory archiving?",
    options: [
      "Archive Storage",
      "Coldline Storage",
      "Nearline Storage",
      "Standard Storage",
    ],
    answer: "Archive Storage",
  },
  {
    id: "gcpf-5",
    question: "What is the hierarchy of resources in GCP from top to bottom?",
    options: [
      "Organization > Folder > Project > Resource",
      "Project > Folder > Organization > Resource",
      "Folder > Organization > Project > Resource",
    ],
    answer: "Organization > Folder > Project > Resource",
  },
  {
    id: "gcpf-6",
    question:
      "Which GCP service allows you to run containerized applications without having to manage the underlying infrastructure?",
    options: ["Cloud Run", "Google Kubernetes Engine (GKE)", "Compute Engine"],
    answer: "Cloud Run",
  },
  {
    id: "gcpf-7",
    question:
      "In GCP IAM, what is the term for a specific identity (like an email address) that is granted access to a resource?",
    options: ["Member", "Policy", "Role", "Binding"],
    answer: "Member",
  },
  {
    id: "gcpf-8",
    question:
      "Which tool provides a command-line interface to interact with Google Cloud resources?",
    options: ["gcloud CLI", "Cloud Console", "Cloud Shell Editor", "Cloud SDK"],
    answer: "gcloud CLI",
  },
  {
    id: "gcpf-9",
    question:
      "What is the main advantage of using Google Cloud Interconnect over a standard VPN?",
    options: [
      "Consistent, higher bandwidth and lower latency",
      "Easier setup process",
      "Lower cost for small data transfers",
    ],
    answer: "Consistent, higher bandwidth and lower latency",
  },
  {
    id: "gcpf-10",
    question:
      "Which service provides real-time messaging between independent applications?",
    options: ["Pub/Sub", "Cloud Tasks", "Cloud Endpoints", "Dataflow"],
    answer: "Pub/Sub",
  },
  {
    id: "gcpf-11",
    question:
      "A pharma company wants to ensure that its users are notified in real time when its packages are delivered to pharmacies. Which Google Cloud service would you recommend for this?",
    options: [
      "Cloud IoT",
      "Cloud Firestore",
      "Cloud Pub/Sub",
      "Cloud DataFlow",
    ],
    answer: "Cloud Pub/Sub",
  },
  {
    id: "gcpf-12",
    question:
      "What factors must be considered when choosing a region? (Select all that apply)",
    options: [
      "Time to deploy changes to your application",
      "Latency requirements of your app",
      "Region-specific restrictions",
      "Where will the developer team work from?",
    ],
    answer: [
      "Latency requirements of your app",
      "Region-specific restrictions",
    ],
    multiSelect: true,
  },
  {
    id: "gcpf-13",
    question:
      "You have a billing application that runs only during the month end. This application has a very high SLA, and a failure will delay the commission paid out to sales employees. Which deployment setup would be best for such a use case?",
    options: [
      "Reserve a compute engine for 3 years and use it to run the billing application",
      "Deploy the application on compute engine and choose preemptible instances",
      "Develop the application on compute engine with default settings",
      "Run this application on-premises",
    ],
    answer:
      "Deploy the application on compute engine and choose preemptible instances",
  },
  {
    id: "gcpf-14",
    question:
      "What is the biggest factor to consider when building an application for business continuity?",
    options: [
      "Latency of the application for end users",
      "Cost of the region/zone",
      "Meantime for recovery in case of disaster recovery",
      "Business revenue generated from application",
    ],
    answer: "Meantime for recovery in case of disaster recovery",
  },
  [
    {
      id: "gcpf-15",
      question: "What is a managed instance group?",
      options: [
        "Managed instance groups are expensive compared to unmanaged instance groups",
        "Managed Instance group can be created using an instance template to create identical instances",
        "Managed instance group is a set of computing engines that can be easily managed",
        "Managed instance group is a GKE concept that autopilots the nodes",
      ],
      answer:
        "Managed instance group is a set of computing engines that can be easily managed",
    },
    {
      id: "gcpf-16",
      question:
        "When granting permissions to GCP, what principle should we follow?",
      options: [
        "Least access privilege; provide only the required access",
        "Share Editor access",
        "Basic view access to all resources and content",
        "Replicate team member access directly",
      ],
      answer: "Least access privilege; provide only the required access",
    },
    {
      id: "gcpf-17",
      question:
        "Your organization decides to move to GCP cloud. How should they start adopting the transformation steps?",
      options: [
        "Adopt changes programmatically",
        "Adopt changes for applications when problems arise",
        "Adopt changes manually with automation",
      ],
      answer: "Adopt changes programmatically",
    },
    {
      id: "gcpf-18",
      question: "GKE is suitable for ___.",
      options: ["Microservice design", "Monolith service"],
      answer: "Microservice design",
    },
  ],
  [
    {
      id: "gcpf-19",
      question:
        "What would be the best way to connect to a GCP compute instance?",
      options: [
        "Connect via your service account",
        "Set up a bastion host; then use this to log in to compute instance",
        "Connect via serial console",
        "Connect via NAT Gateway",
      ],
      answer: "Connect via serial console",
    },
    {
      id: "gcpf-23",
      question:
        "In Cloud Storage, which storage class is ideal for files you access rarely, say, once every five years?",
      options: ["Coldline", "Standard", "Nearline", "Archive"],
      answer: "Archive",
    },
    {
      id: "gcpf-21",
      question: "How many zones are present in a GCP?",
      options: ["4", "2", "3", "1"],
      answer: "3",
    },
    {
      id: "gcpf-22",
      question:
        "Which of the following statements is true for 'application load testing'?",
      options: [
        "Load testing is to verify if your application and DB connections are working.",
        "Load testing should be done to sustain 5x the expected traffic to the application.",
        "Load testing can’t really help you determine the scalability of your system.",
      ],
      answer:
        "Load testing should be done to sustain 5x the expected traffic to the application.",
    },
  ],
  [
    {
      id: "gcpf-23",
      question:
        "What would the DevOps philosophy recommend to measure first in the modern cloud design?",
      options: [
        "Disaster recovery setup",
        "Reliability and health of our production systems",
        "Customer satisfaction",
        "Speed of cloud adoption",
      ],
      answer: "Reliability and health of our production systems",
    },
    {
      id: "gcpf-24",
      question:
        "Which GCP services can be used for flat-structured object storage?",
      options: ["Cloud SQL", "Cloud Firestore", "Cloud Storage"],
      answer: "Cloud Storage",
    },
    {
      id: "gcpf-25",
      question:
        "Your organization is estimating the GCP expenditure for the upcoming quarter. What should they do to control costs?",
      options: [
        "Assess and audit organic growth in cloud cost, compare it with expected cloud utilization based on an upcoming project, and share the estimate.",
        "Review cloud resource costs frequently because costs depend on usage.",
        "Cloud cost can be a capital expenditure; hence, assign 2x the budget used for the data center.",
        "Audit the cost for the previous year and set that as an estimate.",
      ],
      answer:
        "Assess and audit organic growth in cloud cost, compare it with expected cloud utilization based on an upcoming project, and share the estimate.",
    },
    {
      id: "gcpf-26",
      question:
        "We need a NoSQL database to be used for client-side web and mobile apps. Which DB would best suit the use case?",
      options: [
        "Cloud Bigtable",
        "Firebase Realtime Database",
        "Cloud Memorystore",
        "Cloud Firestore",
      ],
      answer: "Cloud Firestore",
    },
  ],
  [
    {
      id: "gcpf-27",
      question:
        "Our pharmaceutical company wants to observe the behavior of users placing orders and design its application to make it more user-friendly. What might have prompted the company to consider this change?",
      options: [
        "Users/Customers expecting discounts and waiting for orders to be placed",
        "Company wants to deploy changes immediately",
        "Customers expecting a more personalized experience when using the app",
        "Company wants insights on its spending",
      ],
      answer:
        "Customers expecting a more personalized experience when using the app",
    },
    {
      id: "gcpf-28",
      question:
        "Which of the following GCP services can be used to securely connect compute instance in GCP to on-premise database service?",
      options: [
        "Cloud Interconnect",
        "VPC Network Peering",
        "Cloud VPN",
        "Cloud VPC",
      ],
      answer: "Cloud Interconnect",
    },
    {
      id: "gcpf-29",
      question:
        "What type of firewall rule(s) does Google Cloud's networking support?",
      options: [
        "allow",
        "allow and deny",
        "deny",
        "allow, deny, and logical route",
      ],
      answer: "allow and deny",
    },
    {
      id: "gcpf-30",
      question: "Which databases does Cloud SQL currently support?",
      options: [
        "MySQL, MongoDB, SQL Server",
        "OracleDB, PostgreSQL, MySQL",
        "MySQL, PostgreSQL, SQL Server",
        "MariaDB, SQL Server, MySQL",
      ],
      answer: "MySQL, PostgreSQL, SQL Server",
    },
  ],
];
