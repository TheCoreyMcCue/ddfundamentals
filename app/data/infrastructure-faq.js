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
    question: "How long does Watchdog need to learn your environment before its alerts can be fully trusted?",
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

