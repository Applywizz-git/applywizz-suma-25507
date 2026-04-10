export const personalInfo = {
  name: "SUMA KEERTHANA NEDUNURI",
  title: "Business Analyst",
  location: "Memphis, TN",
  phone: "+1(901) 857-7677",
  email: "nkirthana99@gmail.com",
  linkedin: "https://www.linkedin.com/in/suma-keerthana-6a5468181/",
  tagline: "Bridging Data and Strategy with Scalable Analytical Solutions",
  rotatingKeywords: ["Data Analysis", "SQL", "Power BI", "Python", "AWS/Azure", "BPMN", "Agile"],
  summary: "Business Analyst with 4+ years of experience specializing in data analysis, business process optimization, and decision support across banking and healthcare domains. Proficient in translating complex business requirements into scalable data solutions through requirements elicitation, process analysis, and stakeholder collaboration. Expert in SQL, Python, Power BI, and Cloud platforms (AWS/Azure), with a proven track record of improving operational efficiency and enabling data-driven decision-making.",
};

export const stats = [
  { label: "Years Experience", value: "4+", suffix: "" },
  { label: "Efficiency Gain", value: "45", suffix: "%" },
  { label: "Data Quality", value: "30", suffix: "%" },
  { label: "Manual Error Reduction", value: "35", suffix: "%" },
];

export const experience = [
  {
    id: 1,
    company: "Advanced Dental Implant and TMJ Center",
    position: "Business Analyst",
    location: "Memphis, TN",
    duration: "Sep 2024 - Present",
    description: "Spearheading operational redesign and data-driven decision support using BPMN modeling and AWS cloud analytics.",
    highlights: [
      "Redesigned scheduling and billing workflows using BPMN (Lucidchart), resulting in a 35% reduction in manual errors",
      "Delivered real-time KPI visibility through AWS QuickSight dashboards, improving leadership decision turnaround by 25%",
      "Streamlined patient intake using REST API integrations, cutting wait times by 15 minutes while improving data accuracy",
      "Managed Agile delivery tracking in JIRA/Confluence, reducing requirement rework across sprint cycles by 40%",
      "Defined cloud data mapping rules and data dictionaries using SQL and AWS Glue to support compliant migrations"
    ],
    technologies: ["AWS QuickSight", "Redshift", "AWS Glue", "SQL", "BPMN", "JIRA", "REST APIs"]
  },
  {
    id: 2,
    company: "Bank of America",
    position: "Business Process Analyst",
    location: "USA",
    duration: "Jun 2023 - Aug 2024",
    description: "Optimized risk reporting and automated data pipelines within a complex financial services environment.",
    highlights: [
      "Cut risk reporting turnaround time by 45% through BPMN-based process restructuring and SLA adherence improvements",
      "Implemented automated reporting pipelines in Azure Data Factory, reducing processing effort by 60% and improving auditability",
      "Improved transaction reconciliation accuracy by 20% through custom SQL-based validation checks and ETL testing",
      "Maintained RTMs in Confluence to ensure 100% requirement traceability between business needs and testing outcomes",
      "Led sprint planning and retrospectives to facilitate seamless Agile delivery of process and reporting enhancements"
    ],
    technologies: ["Azure Data Factory", "Azure Synapse", "SQL", "BPMN", "Agile", "Azure DevOps"]
  },
  {
    id: 3,
    company: "Tata Consultancy Services (TCS)",
    position: "Data Analyst",
    location: "India",
    duration: "Jun 2020 - Jun 2022",
    description: "Leveraged SQL, Python, and Tableau to deliver data insights and maintain enterprise data governance standards.",
    highlights: [
      "Reduced invalid onboarding records by 25% through SQL-based profiling and rigorous data validation techniques",
      "Automated monthly reporting using SQL and Advanced Excel, saving 15+ hours per month while ensuring audit readiness",
      "Developed Tableau dashboards for monitoring quality KPIs, enabling early anomaly detection and remediation",
      "Investigated and resolved ETL failures through root cause analysis, significantly improving pipeline stability",
      "Automated validation checks using Python and SQL scripts, increasing testing efficiency for reliable ETL releases"
    ],
    technologies: ["SQL", "Python", "Tableau", "AWS S3", "Pandas", "Excel", "Data Governance"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Sales Performance & Revenue Analytics Dashboard",
    description: "Consolidated sales data from multiple sources using SQL and Power Query, structuring datasets in a star schema for consistent KPI reporting.",
    longDescription: "An end-to-end analytics solution that integrates disparate sales data into a centralized data warehouse. It utilizes DAX for complex calculations and provides interactive visualizations for revenue trends, product performance, and regional metrics.",
    technologies: ["Power BI", "SQL", "Power Query", "DAX", "Data Modeling", "Star Schema"],
    category: "Business Intelligence",
    featured: true,
    image: "project-sales-dash.png",
    metrics: {
      "Decision Support": "Enhanced",
      "Reporting Speed": "Improved",
      "Strategy Impact": "Significant"
    }
  },
  {
    id: 2,
    title: "Enterprise KPI & Decision Intelligence Platform",
    description: "Consolidated multi-source datasets into Snowflake, delivering executive dashboards and improving forecasting accuracy.",
    longDescription: "A robust enterprise-scale platform that streamlines reporting workflows by integrating SQL transformations with Power BI and Snowflake. It provides visibility into business performance metrics across various functions and reduces reporting delays by 35%.",
    technologies: ["Snowflake", "Power BI", "DAX", "SQL", "Data Warehousing", "Cloud Analytics"],
    category: "Enterprise Analytics",
    featured: true,
    image: "project-enterprise-kpi.png",
    metrics: {
      "Turnaround Time": "35% Faster",
      "Forecast Accuracy": "Increased",
      "Self-Service": "Enabled"
    }
  },
  {
    id: 3,
    title: "Cloud-Based Data Governance & Quality Framework",
    description: "Established a governance framework using AWS Glue and Snowflake, defining metadata standards and automated data validation rules.",
    longDescription: "A comprehensive framework designed to ensure data compliance and quality across enterprise reporting systems. It features automated validation scripts and compliance-focused dashboards for audit transparency.",
    technologies: ["AWS Glue", "Snowflake", "SQL", "Python", "Data Governance", "Compliance"],
    category: "Data Engineering",
    featured: true,
    image: "project-risk-monitoring.png",
    metrics: {
      "Data Errors": "30% Reduction",
      "Compliance": "100% Audit-Ready",
      "Lineage": "Full Transparency"
    }
  }
];

export const skills = {
  "Data Analysis & BI": [
    { name: "SQL", level: 95, category: "Querying" },
    { name: "Power BI (DAX)", level: 92, category: "BI" },
    { name: "Tableau", level: 88, category: "BI" },
    { name: "Python (Pandas/NumPy)", level: 85, category: "Analysis" },
    { name: "Advanced Excel", level: 95, category: "Analysis" },
    { name: "Power Query", level: 90, category: "ETL" }
  ],
  "Business & Process Analysis": [
    { name: "Requirements Elicitation", level: 95, category: "BA" },
    { name: "BPMN / Process Mapping", level: 92, category: "Process" },
    { name: "Stakeholder Management", level: 90, category: "BA" },
    { name: "User Stories / Agile", level: 95, category: "Methodology" },
    { name: "Gap / Impact Analysis", level: 88, category: "BA" },
    { name: "Root Cause Analysis", level: 90, category: "Process" }
  ],
  "Cloud & Data Platforms": [
    { name: "AWS (S3, Redshift, Glue)", level: 90, category: "Cloud" },
    { name: "Azure (ADF, Synapse)", level: 85, category: "Cloud" },
    { name: "Snowflake", level: 88, category: "Data Warehouse" },
    { name: "Data Warehousing", level: 90, category: "Engineering" },
    { name: "ETL/ELT Pipelines", level: 92, category: "Engineering" },
    { name: "Data Modeling", level: 90, category: "Engineering" }
  ],
  "Governance & Quality": [
    { name: "Data Governance", level: 92, category: "Compliance" },
    { name: "Data Quality / Profiling", level: 95, category: "Compliance" },
    { name: "Data Lineage", level: 90, category: "Compliance" },
    { name: "UAT Coordination", level: 95, category: "Testing" },
    { name: "REST APIs", level: 85, category: "Integration" },
    { name: "Audit Reporting", level: 90, category: "Compliance" }
  ]
};

export const certifications = [
  {
    id: 1,
    name: "Google Data Analytics Professional",
    issuer: "Google",
    date: "2023",
    icon: "📊"
  },
  {
    id: 2,
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2023",
    icon: "📈"
  },
  {
    id: 3,
    name: "Business Analysis & Process Management",
    issuer: "Coursera",
    date: "2023",
    icon: "⚙️"
  },
  {
    id: 4,
    name: "AWS Data Analytics Fundamentals",
    issuer: "AWS",
    date: "2024",
    icon: "☁️"
  },
  {
    id: 5,
    name: "Agile Business Analysis",
    issuer: "LinkedIn Learning",
    date: "2023",
    icon: "🔄"
  },
  {
    id: 6,
    name: "Data Analyst in Python",
    issuer: "Data Camp",
    date: "2022",
    icon: "🐍"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Management Information Systems",
    school: "University of Memphis",
    location: "Memphis, TN",
    year: "2024",
    gpa: "3.8/4.0",
    coursework: ["Business Process Management", "Decision Support Systems", "Database Management", "Data Analytics"]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Andhra University",
    location: "India",
    year: "2020",
    gpa: "8.2/10",
    coursework: ["Signals & Systems", "Digital Signal Processing", "Computer Networks", "Microprocessors"]
  }
];