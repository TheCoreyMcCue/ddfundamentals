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

