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
  {
    id: "gcpf-31",
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
];

