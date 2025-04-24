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
