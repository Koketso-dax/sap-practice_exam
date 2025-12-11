export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: string | string[]
}

export interface ExamData {
  title: string
  description: string
  questions: QuizQuestion[]
}

const sapIntegrationExam: QuizQuestion[] = [
  {
    question: "WHAT ARE SOME ADVANTAGES OF CREATING AN ODATA INTERFACE THROUGH AN API PROVIDER?",
    options: [
      "AUTOMATIC CREATION OF AN OPENAPI SPECIFICATION",
      "AUTOMATIC CREATION OF A RAML SPECIFICATION",
      "AUTOMATIC CREATION OF A SWAGGER UI",
      "AUTOMATIC CREATION OF A WSDL SPECIFICATION",
    ],
    correctAnswer: ["AUTOMATIC CREATION OF AN OPENAPI SPECIFICATION", "AUTOMATIC CREATION OF A SWAGGER UI"],
  },
  {
    question:
      "WHAT AUTHENTICATION METHOD DOES THE SERVICE KEY USE TO GRANT ACCESS WHEN YOU GENERATE A SERVICE KEY FOR AN SAP INTEGRATION SUITE EVENT MESSAGE CLIENT?",
    options: [
      "X.509 CLIENT CERTIFICATES",
      "API KEY AUTHENTICATION",
      "BASIC AUTHENTICATION",
      "OAUTH 2.0 CLIENT AUTHENTICATION",
    ],
    correctAnswer: "OAUTH 2.0 CLIENT AUTHENTICATION",
  },
  {
    question:
      "HOW DOES THE INCREASED NUMBER OF API CALLS IN A MICROSERVICES ARCHITECTURE IMPACT API MANAGEMENT AND MONITORING WITHIN AN SAP INTEGRATION SUITE LANDSCAPE?",
    options: [
      "INCREASED API CALLS NECESSITATE LESS ROBUST API MANAGEMENT TOOLS AND SIMPLIFIED MONITORING CAPABILITIES",
      "INCREASED API CALLS NECESSITATE MORE ROBUST API MANAGEMENT TOOLS AND COMPREHENSIVE MONITORING CAPABILITIES",
      "REDUCED API CALLS SIMPLIFY API MANAGEMENT AND MINIMIZE MONITORING NEEDS",
      "INCREASED API CALLS IMPROVE API MANAGEMENT EFFICIENCY AND REDUCE THE NEED FOR EXTENSIVE MONITORING",
    ],
    correctAnswer:
      "INCREASED API CALLS NECESSITATE MORE ROBUST API MANAGEMENT TOOLS AND COMPREHENSIVE MONITORING CAPABILITIES",
  },
  {
    question: "WHICH EXPRESSION LANGUAGE CAN YOU USE TO ACCESS THE CONTENT OF A MESSAGE IN AN INTEGRATION FLOW?",
    options: [
      "SIMPLE EXPRESSION LANGUAGE",
      "XML EXPRESSION LANGUAGE",
      "SPRING EXPRESSION LANGUAGE",
      "JAVASCRIPT EXPRESSION LANGUAGE",
    ],
    correctAnswer: "SIMPLE EXPRESSION LANGUAGE",
  },
  {
    question: "WHICH SAP OFFERING MANAGES INTEGRATIONS ACROSS HYBRID AND MULTICLOUD ENVIRONMENTS?",
    options: [
      "SAP PROCESS ORCHESTRATION",
      "SAP CLOUD PLATFORM INTEGRATION",
      "SAP INTEGRATION SUITE",
      "SAP BUSINESS TECHNOLOGY PLATFORM",
    ],
    correctAnswer: "SAP INTEGRATION SUITE",
  },
  {
    question: "WHAT DOES THE MESSAGING MODEL OF THE APACHE CAMEL DATA MODEL CONSIST OF?",
    options: [
      "HEADER, BODY, ATTACHMENT",
      "HEADER, BODY, PROPERTIES",
      "HEADER, EXCHANGE ID, IN-MESSAGE",
      "HEADER, PROPERTIES, ATTACHMENT",
    ],
    correctAnswer: "HEADER, BODY, ATTACHMENT",
  },
  {
    question:
      "IN A DATA STORE WRITE OPERATION, YOU WANT TO SET AN ENTRY ID BY READING A HEADER VALUE FROM AN INCOMING MESSAGE. WHICH NOTATION DO YOU USE TO IMPLEMENT THIS?",
    options: ["$(RECEIVERHEADER}", "$HEADER.RECEIVER}", "${HEADERRECEIVER}", "${RECEIVERHEADER}"],
    correctAnswer: "${HEADERRECEIVER}",
  },
  {
    question: "WHAT IS REPRESENTATIONAL STATE TRANSFER (REST)?",
    options: [
      "AN APPLICATION PROTOCOL",
      "A DESCRIPTION LANGUAGE FOR APIS",
      "AN ARCHITECTURAL STYLE",
      "A MESSAGE PROTOCOL",
    ],
    correctAnswer: "AN ARCHITECTURAL STYLE",
  },
  {
    question: "WHAT MUST YOU DO TO FIND OUT WHICH ENTITY SETS ARE AVAILABLE IN THE ODATA V2.0 INTERFACE?",
    options: [
      "SEARCH IN THE GLOBAL DIRECTORY OF ALL AVAILABLE ODATA INTERFACES",
      "CONTACT THE ODATA INTERFACE MANUFACTURER",
      "RETRIEVE THE SERVICE DOCUMENT FROM THE INTERFACE",
      "RETRIEVE THE METADATA DOCUMENT FROM THE INTERFACE",
    ],
    correctAnswer: "RETRIEVE THE METADATA DOCUMENT FROM THE INTERFACE",
  },
  {
    question:
      "YOU HAVE CREATED A PRODUCT BASED ON AN API PROXY, BUT YOU HAVE NOT PUBLISHED THE PRODUCT YET. WHAT IS A CONSEQUENCE?",
    options: [
      "THE PRODUCT IS NOT DISPLAYED IN THE API BUSINESS HUB ENTERPRISE",
      "THE PRODUCT IS DISPLAYED BUT GRAYED OUT",
      'THE PRODUCT IS DISPLAYED WITH NOTE "NOT PUBLISHED"',
      "THE PRODUCT IS DISPLAYED AS ACTIVE",
    ],
    correctAnswer: "THE PRODUCT IS NOT DISPLAYED IN THE API BUSINESS HUB ENTERPRISE",
  },
  {
    question: 'WHAT DOES THE "OPEN INTEGRATION" PRINCIPLE OF THE SAP INTEGRATION SUITE MEAN?',
    options: [
      "SUPPORTS SAP SOFTWARE INTEGRATIONS BY DEFAULT",
      "SUPPORTS THIRD-PARTY SOFTWARE INTEGRATION BY DEFAULT",
      "ALLOWS SAP-TO-SAP INTEGRATIONS",
      "ONLY SUPPORTS SAP PROPRIETARY SOFTWARE",
    ],
    correctAnswer: "SUPPORTS THIRD-PARTY SOFTWARE INTEGRATION BY DEFAULT",
  },
  {
    question:
      "TO RECEIVE THE SAP/S4/BEH/BUSINESSPARTNER/VA/BUSINESSPARTNER/CHANGED/V1 BUSINESS EVENT FROM SAP S/4HANA CLOUD IN SAP EVENT MESH, WHICH COMPONENTS CONSTRUCT THE TOPIC SUBSCRIPTION STRING?",
    options: ["BUSINESS PARTNER ID", "CHANGE TYPE", "EVENT TIMESTAMP", "NAMESPACE, TOPIC NAME, SEPARATOR"],
    correctAnswer: "NAMESPACE, TOPIC NAME, SEPARATOR",
  },
  {
    question: "WHAT ARE SOME ADVANTAGES OF THE CLOUD INTEGRATION CAPABILITY WITHIN SAP INTEGRATION SUITE?",
    options: [
      "CUSTOMER-TO-CUSTOMER (C2C) INTEGRATIONS CAN BE DEVELOPED",
      "INTEGRATION PROCESSES CAN BE DEVELOPED OFFLINE",
      "PREDEFINED SCENARIOS CAN BE USED OUT-OF-THE-BOX",
      "A LOCAL INSTALLATION IS NOT REQUIRED",
    ],
    correctAnswer: ["PREDEFINED SCENARIOS CAN BE USED OUT-OF-THE-BOX", "A LOCAL INSTALLATION IS NOT REQUIRED"],
  },
  {
    question: "WHAT DO YOU USE IN AN INTEGRATION FLOW TO HANDLE UNEXPECTED ERRORS?",
    options: [
      "STATUS CODE CHECKS",
      "EXCEPTION HANDLER INTEGRATION FLOW ELEMENTS",
      "TRY-CATCH SUBPROCESSES",
      "EXCEPTION-HANDLING SUBPROCESSES",
    ],
    correctAnswer: "EXCEPTION-HANDLING SUBPROCESSES",
  },
  {
    question: "WHICH DATA STORE OPERATION CAN YOU USE TO SAVE A CUSTOMER ID?",
    options: ["POST", "SELECT", "WRITE", "GET"],
    correctAnswer: "WRITE",
  },
  {
    question:
      "YOU ARE USING A DATA STORE OPERATION OF THE TYPE WRITE. WHICH PARAMETER MUST YOU SELECT TO AVOID DUPLICATE ENTRIES?",
    options: [
      "INCLUDE MESSAGE HEADERS",
      "ENCRYPTED STORED MESSAGE",
      "RETENTION THRESHOLD FOR ALERTING",
      "OVERWRITE EXISTING MESSAGE",
    ],
    correctAnswer: "OVERWRITE EXISTING MESSAGE",
  },
  {
    question:
      'WHICH SAP INTEGRATION SUITE COMPONENT DELIVERS THE CLOUD EVENT TO THE "EMIS-S4HANA-UC123" MESSAGE QUEUE?',
    options: ["OPEN CONNECTOR", "EVENT MESH", "API MANAGEMENT", "PROCESS INTEGRATION"],
    correctAnswer: "EVENT MESH",
  },
  {
    question:
      "IN AN EVENT-DRIVEN ARCHITECTURE (EDA), WHICH ARCHITECTURAL CHARACTERISTIC BEST LIMITS THE PROPAGATION OF FAILURE FROM ONE SERVICE TO ANOTHER?",
    options: [
      "CENTRALIZED LOGGING",
      "ROBUST ERROR HANDLING",
      "LOOSE COUPLING BETWEEN SERVICES",
      "ASYNCHRONOUS COMMUNICATION",
    ],
    correctAnswer: "LOOSE COUPLING BETWEEN SERVICES",
  },
  {
    question:
      "YOU CALL THE FOLLOWING URL: HTTPS://SAPES5.SAPDEVCENTER.COM/SAP/OPU/ODATA/WBEP/GWSAMPLE_BASIC/PRODUCTSET(HTEMS). WHAT FILE TYPE IS DISPLAYED?",
    options: ["XML", "HTML", "PHP", "JAVA"],
    correctAnswer: "XML",
  },
  {
    question: "WHAT IS A CHARACTERISTIC OF A PRODUCT IN THE API MANAGEMENT CAPABILITY WITHIN SAP INTEGRATION SUITE?",
    options: [
      "SEPARATE ARTIFACT REQUIRED FOR BASIC AUTH",
      "DEPLOYED AS SEPARATE ARTIFACT ON API BUSINESS HUB ENTERPRISE",
      "ENCAPSULATES THE API PROVIDER",
      "USED ONLY FOR MONITORING",
    ],
    correctAnswer: "DEPLOYED AS SEPARATE ARTIFACT ON API BUSINESS HUB ENTERPRISE",
  },
  {
    question:
      "WHICH ARCHITECTURAL PATTERN IN AN EVENT-DRIVEN ARCHITECTURE ALLOWS DIRECT COMMUNICATION BETWEEN TWO PARTIES WITHOUT AN INTERMEDIARY?",
    options: ["POINT-TO-POINT", "EVENT SOURCING", "MESSAGE QUEUE", "PUBLISH-SUBSCRIBE"],
    correctAnswer: "POINT-TO-POINT",
  },
  {
    question: "WHICH SAP PLATFORM SERVES AS THE FOUNDATION FOR SAP'S INTEGRATION STRATEGY?",
    options: ["SAP CPI", "SAP S/4HANA", "SAP BUSINESS TECHNOLOGY PLATFORM (SAP BTP)", "SAP NETWEAVER PI"],
    correctAnswer: "SAP BUSINESS TECHNOLOGY PLATFORM (SAP BTP)",
  },
  {
    question: "YOU HAVE CREATED AN API PROVIDER OF THE TYPE INTERNET. WHAT HTTP RESPONSE CODE INDICATES SUCCESS?",
    options: ["200", "502", "401", "403"],
    correctAnswer: "200",
  },
  {
    question:
      "YOU WANT TO IMPLEMENT A SYNCHRONOUS CALL TO A REMOTE HTTP API AS AN INTEGRATION FLOW COMPONENT. WHICH ADAPTER CAN YOU USE?",
    options: ["MAIL", "ODATA", "SFTP", "AMQP"],
    correctAnswer: "ODATA",
  },
  {
    question: "WHICH OF THE FOLLOWING DOES SAP GRAPH PROVIDE?",
    options: [
      "UNIFIED CACHE OF SAP-MANAGED BUSINESS DATA",
      "ABSTRACTION OF BUSINESS DATA FOR END USERS",
      "UNIFIED VIEW OF SAP-MANAGED BUSINESS DATA",
      "DATA TRANSFORMATION",
    ],
    correctAnswer: "UNIFIED VIEW OF SAP-MANAGED BUSINESS DATA",
  },
  {
    question: "DURING DEVELOPMENT, IN WHICH INTEGRATION FLOW COMPONENT CAN YOU CONFIGURE A SIMULATED PAYLOAD?",
    options: ["SOAP ADAPTER", "DATA STORE OPERATIONS", "GENERAL SPLITTER", "CONTENT MODIFIER"],
    correctAnswer: "CONTENT MODIFIER",
  },
  {
    question:
      "TO ACTIVATE THE EVENT MESH (EMIS) CAPABILITY IN THE SAP INTEGRATION SUITE, WHICH ROLE COLLECTIONS MUST BE ASSIGNED TO THE USER PERFORMING THE ACTIVATION?",
    options: [
      "INTEGRATION PROVISIONER AND SUBACCOUNT ADMINISTRATOR",
      "API MANAGER AND MONITORING VIEWER",
      "INTEGRATION ADMINISTRATOR AND SECURITY AUDITOR",
      "PROCESS ORCHESTRATOR AND SUBACCOUNT VIEWER",
    ],
    correctAnswer: "INTEGRATION PROVISIONER AND SUBACCOUNT ADMINISTRATOR",
  },
  {
    question:
      "WHICH SAP OFFERING PROVIDES A HIGHLY SCALABLE, DISTRIBUTED EVENT STREAMING PLATFORM THAT SUPPORTS MQTT, AMQP, AND JMS PROTOCOLS?",
    options: [
      "SAP PROCESS ORCHESTRATION",
      "SAP CLOUD PLATFORM INTEGRATION",
      "SAP INTEGRATION SUITE, ADVANCED EVENT MESH",
      "SAP BUSINESS TECHNOLOGY PLATFORM",
    ],
    correctAnswer: "SAP INTEGRATION SUITE, ADVANCED EVENT MESH",
  },
  {
    question: "WHAT KIND OF EDITOR CAN YOU USE TO MANIPULATE INTEGRATION FLOWS?",
    options: ["GRAPHICAL EDITOR", "CODE EDITOR", "COMMAND-LINE EDITOR", "TEXT EDITOR"],
    correctAnswer: "GRAPHICAL EDITOR",
  },
  {
    question: "HOW DO YOU CONFIGURE A SOAP ADAPTER FOR ASYNCHRONOUS PROCESSING?",
    options: [
      "MESSAGE EXCHANGE PATTERN: REQUEST-REPLY, PROCESS SETTINGS: ROBUST",
      "MESSAGE EXCHANGE PATTERN: REQUEST-REPLY, PROCESS SETTINGS: WS STANDARD",
      "MESSAGE EXCHANGE PATTERN: ONE-WAY, PROCESS SETTINGS: ROBUST",
      "MESSAGE EXCHANGE PATTERN: ONE-WAY, PROCESS SETTINGS: WS STANDARD",
    ],
    correctAnswer: "MESSAGE EXCHANGE PATTERN: ONE-WAY, PROCESS SETTINGS: WS STANDARD",
  },
  {
    question:
      "WHICH COMBINATION OF SAP BTP ROLE COLLECTIONS ALLOWS A USER TO MANAGE QUEUES AND TOPIC SUBSCRIPTIONS IN SAP EVENT MESH?",
    options: [
      "APPLICATIONADMIN AND APPLICATION DEVELOPER",
      "EVENTMESH ADMIN AND EVENTMESH DEVELOPER",
      "INTEGRATION ADMIN AND INTEGRATION DEVELOPER",
      "SECURITY ADMIN AND SECURITY DEVELOPER",
    ],
    correctAnswer: "EVENTMESH ADMIN AND EVENTMESH DEVELOPER",
  },
  {
    question: "YOU WANT TO PUBLISH A NEW API PRODUCT TO THE API BUSINESS HUB ENTERPRISE. WHAT IS A REQUIREMENT?",
    options: [
      "AT LEAST TWO DEPLOYED API PROVIDERS",
      "AT LEAST ONE DEPLOYED API PROVIDER",
      "AT LEAST ONE DEPLOYED API PROXY",
      "AT LEAST TWO DEPLOYED API PROXIES",
    ],
    correctAnswer: "AT LEAST ONE DEPLOYED API PROXY",
  },
  {
    question: "WHICH OF THE FOLLOWING CAN YOU USE FOR AN XSLT MAPPING IN AN INTEGRATION FLOW?",
    options: ["JSON", "PHP", "HTML", "XML"],
    correctAnswer: "XML",
  },
  {
    question: "YOU WANT TO SEND MESSAGES OVER A SOAP ADAPTER TO AN INTEGRATION FLOW. WHICH METHOD DO YOU USE?",
    options: ["POST", "UPDATE", "PATCH", "GET"],
    correctAnswer: "POST",
  },
  {
    question: "WHICH COMBINATION OF EVENT-DRIVEN ARCHITECTURE (EDA) PATTERNS IS SUPPORTED BY SAP EVENT MESH?",
    options: [
      "CHOREOGRAPHY AND ORCHESTRATION",
      "PUBLISH/SUBSCRIBE AND EVENT SOURCING",
      "REQUEST/REPLY AND MESSAGE QUEUING",
      "PUBLISH/SUBSCRIBE AND POINT-TO-POINT",
    ],
    correctAnswer: "PUBLISH/SUBSCRIBE AND POINT-TO-POINT",
  },
  {
    question: "YOU ARE CREATING AN API PROXY. WHICH OF THE FOLLOWING IS A VALID PATH PREFIX?",
    options: ["/SAP/ODU/ODATA", "/SAP/OPU/ODATA", "/SOAP/OPU/ODATA", "/SAP/OPO/ODATA"],
    correctAnswer: "/SAP/OPU/ODATA",
  },
  {
    question:
      "WHICH CLEAN CORE APPROACH PRINCIPLE PROMOTES THE ISOLATION OF CUSTOM CODE FROM STANDARD SAP FUNCTIONALITY?",
    options: [
      "PROMOTE MODULAR DESIGN",
      "MAINTAIN SEPARATION OF CONCERNS",
      "ENFORCE CONSISTENT CODING STANDARDS",
      "PRIORITIZE CODE REUSABILITY",
    ],
    correctAnswer: "MAINTAIN SEPARATION OF CONCERNS",
  },
  {
    question:
      "YOU HAVE SET UP A BASIC AUTHENTICATION POLICY, BUT THE API PROXY RETURNS AN HTTP STATUS OF 401. WHAT COULD BE A REASON?",
    options: [
      'IN THE ASSIGN MESSAGE POLICY, THE ASSIGN TO TAG HAS THE TYPE "REQUEST"',
      'IN THE ASSIGN MESSAGE POLICY, THE ASSIGN TO TAG HAS THE TYPE "PREFLOW"',
      'IN THE ASSIGN MESSAGE POLICY, THE ASSIGN TO TAG HAS THE TYPE "RESPONSE"',
      'IN THE ASSIGN MESSAGE POLICY, THE ASSIGN TO TAG HAS THE TYPE "POSTFLOW"',
    ],
    correctAnswer: 'IN THE ASSIGN MESSAGE POLICY, THE ASSIGN TO TAG HAS THE TYPE "RESPONSE"',
  },
  {
    question: "FROM WHICH OF THE FOLLOWING CAN YOU CREATE AN API PROXY DIRECTLY? (SELECT TWO)",
    options: ["OPEN CONNECTORS", "S/4HANA API", "SOURCE URL", "API PROVIDER"],
    correctAnswer: ["SOURCE URL", "API PROVIDER"],
  },
  {
    question:
      "YOU WANT TO BUILD AN INTEGRATION ARCHITECTURE THAT IS LARGELY ASYNCHRONOUS. WHICH DESIGN DO YOU USE TO EXCHANGE NOTIFICATIONS?",
    options: ["REQUEST-DRIVEN DESIGN", "EVENT-DRIVEN DESIGN", "HEXAGONAL DESIGN", "SERVERLESS DESIGN"],
    correctAnswer: "EVENT-DRIVEN DESIGN",
  },
  {
    question: "WHAT ARE API MANAGEMENT COMPONENTS?",
    options: ["API DESIGNER", "API ENTITY", "AUTHORIZATION SERVER", "PRODUCT"],
    correctAnswer: ["API DESIGNER", "PRODUCT"],
  },
  {
    question:
      "WHAT IS THE MOST CRUCIAL FACTOR FOR ENSURING ROBUST SECURITY IN THE SAP INTEGRATION LANDSCAPE WHILE MAINTAINING OPTIMAL PERFORMANCE?",
    options: [
      "EMPLOYING A HIGHLY SKILLED SECURITY TEAM",
      "PRIORITIZING LATEST SAP SECURITY PATCHES",
      "IMPLEMENTING A WELL-DEFINED SECURITY ARCHITECTURE (AUTHENTICATION, AUTHORIZATION, ENCRYPTION)",
      "CENTRALIZING SAP ADMINISTRATION",
    ],
    correctAnswer: "IMPLEMENTING A WELL-DEFINED SECURITY ARCHITECTURE (AUTHENTICATION, AUTHORIZATION, ENCRYPTION)",
  },
  {
    question: "YOU CONFIGURE AN EXCEPTION SUBPROCESS. WHICH EVENT STARTS THE EXCEPTION SUBPROCESS?",
    options: ["ERROR START EVENT", "START ESCALATION", "START EVENT", "START MESSAGE EVENT"],
    correctAnswer: "ERROR START EVENT",
  },
  {
    question:
      "YOU DOWNLOAD THE PERFORMANCE-TRACEABILITY POLICY AND IMPLEMENT IT IN AN API PROXY. WHERE CAN YOU VIEW THE DATA COVERED BY THE POLICY?",
    options: [
      "SAP CLOUD ALM",
      "SAP ANALYTICS CLOUD",
      "THE API MONITOR UNDER MONITOR INTEGRATION APIS",
      "THIRD-PARTY MONITORING TOOL",
    ],
    correctAnswer: "THIRD-PARTY MONITORING TOOL",
  },
  {
    question: "WHICH OF THE FOLLOWING XSLT STATEMENTS SELECTS EACH NODE IN THE SOURCE XML?",
    options: [
      "<XSL:TEMPLATE MATCH=>",
      '<XSL:TEMPLATE MATCH="TEXT()">',
      '<XSL:TEMPLATE MATCH="@|">',
      '<XSL:TEMPLATE MATCH="/">',
    ],
    correctAnswer: '<XSL:TEMPLATE MATCH="@|">',
  },
  {
    question:
      "YOU USE AN APIKEY FOR AUTHENTICATION IN AN HTTPS API CALL. IN WHICH PART OF THE CONTENT MODIFIER IS THE APIKEY INCLUDED?",
    options: ["MESSAGE BODY", "EXCHANGE PROPERTY", "MESSAGE HEADER", "ATTACHMENT"],
    correctAnswer: "MESSAGE HEADER",
  },
  {
    question: "WHAT MINIMUM USER PERMISSION IS REQUIRED TO CREATE A QUEUE WITHIN THE EMIS-S4HANA MESSAGE CLIENT?",
    options: [
      "SUFFICIENT AUTHORIZATION WITHIN THE EMIS-S4HANA MESSAGE CLIENT",
      "ROLE COLLECTIONS FOR EVENT MESH",
      "EMIS-S4HANA MESSAGE CLIENT ADMINISTRATORS GROUP MEMBERSHIP",
      "ADMINISTRATOR PRIVILEGES ON THE EVENT MESH",
    ],
    correctAnswer: "ROLE COLLECTIONS FOR EVENT MESH",
  },
  {
    question:
      "WHICH INTEGRATION FLOW ELEMENT IS BEST SUITED FOR EXECUTING CUSTOM LOGIC ON THE RECEIVED CLOUD EVENT DATA IN SAP EVENT MESH?",
    options: [
      "RUN A GROOVY SCRIPT",
      "USE A JAVA CONNECTOR",
      "USE AN EXTERNAL REST API",
      "EMPLOY A MULE EXPRESSION COMPONENT",
    ],
    correctAnswer: "RUN A GROOVY SCRIPT",
  },
  {
    question: "WHICH MESSAGE PROTOCOLS ARE SUPPORTED BY THE API MANAGEMENT CAPABILITY WITHIN SAP INTEGRATION SUITE?",
    options: ["IDOC", "RFC", "SOAP", "ODATA"],
    correctAnswer: ["SOAP", "ODATA"],
  },
  {
    question: "HOW DO EVENT-DRIVEN ARCHITECTURES ENABLE ORGANIZATIONS TO RESPOND TO UNFORESEEN ISSUES?",
    options: [
      "PRIORITIZE BATCH PROCESSING THAT HINDERS RAPID RESPONSE",
      "RELY ON TIGHTLY COUPLED COMPONENTS LIMITING SCALABILITY",
      "REQUIRE EXTENSIVE MANUAL INTERVENTION",
      "ENABLE REAL-TIME PROCESSING, DECOUPLING COMPONENTS FOR FLEXIBILITY AND FAULT TOLERANCE",
    ],
    correctAnswer: "ENABLE REAL-TIME PROCESSING, DECOUPLING COMPONENTS FOR FLEXIBILITY AND FAULT TOLERANCE",
  },
  {
    question: "ON WHICH STANDARDS IS ODATA BASED?",
    options: ["TCP, ATOMPUB, AND JSON", "HTTP, ATOMPUB, AND JSON", "SOAP, ATOMPUB, AND JSON", "HTTP, XML, AND JSON"],
    correctAnswer: "HTTP, ATOMPUB, AND JSON",
  },
  {
    question: "FOR WHICH SCENARIOS CAN YOU USE SCRIPTING IN AN INTEGRATION FLOW?",
    options: [
      "CREATE XSLT MAPPING ARTIFACTS",
      "CONFIGURE AN ODATA ADAPTER",
      "ADD INFORMATION TO THE MESSAGE LOG",
      "MANAGE ADAPTER CONFIGURATIONS",
    ],
    correctAnswer: "ADD INFORMATION TO THE MESSAGE LOG",
  },
  {
    question:
      "WHICH LOG LEVEL MUST YOU USE TO EXAMINE THE PAYLOAD AT SPECIFIC PROCESSING STEPS IN AN INTEGRATION FLOW?",
    options: ["DEBUG", "INFO", "TRACE", "ERROR"],
    correctAnswer: "TRACE",
  },
  {
    question: "WHY DOES THE API MANAGEMENT CAPABILITY OF THE SAP INTEGRATION SUITE REQUIRE API PROVIDERS?",
    options: [
      "TO IMPLEMENT SECURITY POLICIES",
      "TO INCORPORATE APIS FROM SOURCE SYSTEMS",
      "TO MONITOR APIS",
      "TO TRANSFORM API PAYLOADS",
    ],
    correctAnswer: "TO INCORPORATE APIS FROM SOURCE SYSTEMS",
  },
  {
    question: "WHICH MESSAGING PATTERNS SUPPORT ASYNCHRONOUS COMMUNICATION?",
    options: ["REQUEST/REPLY", "PUBLISH/SUBSCRIBE", "POINT-TO-POINT", "BATCH PROCESSING"],
    correctAnswer: ["PUBLISH/SUBSCRIBE", "POINT-TO-POINT"],
  },
]

const sapDbAdminExam: QuizQuestion[] =[
  {
    "question": "Which SAP HANA Cloud tools would you use to diagnose and analyze errors in database trace files? Note: There are 2 correct answers to this question.",
    "options": [
      "SAP HANA database explorer",
      "SAP HANA Cloud Central",
      "SQL trace analyzer",
      "Full system information dump"
    ],
    "correctAnswer": ["SAP HANA database explorer", "Full system information dump"]
  },
  {
    "question": "Which SAP HANA cockpit application can you use to investigate a system offline situation?",
    "options": [
      "Alert Monitor",
      "Full System Information Dumps",
      "Troubleshoot Unresponsive System",
      "Performance Monitor"
    ],
    "correctAnswer": "Troubleshoot Unresponsive System"
  },
  {
    "question": "Which SAP HANA trace must you activate to analyze performance issues with systems where third-party software cannot be installed?",
    "options": [
      "End-to-end",
      "Kernel profiler",
      "SQL",
      "Performance trace"
    ],
    "correctAnswer": "Kernel profiler"
  },
  {
    "question": "You want to compare and analyze session-specific data. In what format can you save data sets from the SAP HANA cockpit sessions app? Note: There are 3 correct answers to this question.",
    "options": [
      "HTML file",
      "XML file",
      "TXT file",
      "JSON file",
      "CSV file"
    ],
    "correctAnswer": ["HTML file", "TXT file", "CSV file"]
  },
  {
    "question": "What can you store in the statement library? Note: There are 2 correct answers to this question.",
    "options": [
      "The executed statements trace",
      "Your personal stored procedures",
      "Your personal SQL scripts",
      "The SAP SQL statement collection"
    ],
    "correctAnswer": ["Your personal SQL scripts", "The SAP SQL statement collection"]
  },
  {
    "question": "From which system views can you export content when using the Performance Monitor app? Note: There are 3 correct answers to this question.",
    "options": [
      "SYS.M_WORKLOAD",
      "SYS.M_SERVICE_STATISTICS",
      "SYS.M_LOAD_HISTORY_HOST",
      "SYS.M_SERVICES",
      "SYS.M_DATABASE"
    ],
    "correctAnswer": ["SYS.M_LOAD_HISTORY_HOST", "SYS.M_SERVICES", "SYS.M_DATABASE"]
  },
  {
    "question": "What is the purpose of the statement library in the SAP HANA database explorer? Note: There are 2 correct answers to this question.",
    "options": [
      "To execute scripts from the SQL statement collection for SAP HANA",
      "To collect all the executed SQL statements and generate a searchable library list",
      "To share custom SQL scripts with the whole administration team",
      "To determine special database information not available in the SAP HANA cockpit"
    ],
    "correctAnswer": ["To execute scripts from the SQL statement collection for SAP HANA", "To determine special database information not available in the SAP HANA cockpit"]
  },
  {
    "question": "Which properties can you change in the Alert Definitions app? Note: There are 3 correct answers to this question.",
    "options": [
      "The interval settings",
      "The proposed solution",
      "The category",
      "The schedule",
      "The thresholds"
    ],
    "correctAnswer": ["The interval settings", "The schedule", "The thresholds"]
  },
  {
    "question": "Which output channels can the SAP Alert Notification service for SAP BTP use for notification actions? Note: There are 2 correct answers to this question.",
    "options": [
      "Slack",
      "Microsoft Teams",
      "WhatsApp",
      "Signal"
    ],
    "correctAnswer": ["Slack", "Microsoft Teams"]
  },
  {
    "question": "What tools can you use to view the expensive statement trace file? Note: There are 2 correct answers to this question.",
    "options": [
      "SAP HANA Cloud Central",
      "SAP BTP cockpit",
      "SAP HANA cockpit",
      "SAP HANA database explorer"
    ],
    "correctAnswer": ["SAP HANA cockpit", "SAP HANA database explorer"]
  },
  {
    "question": "Which services are shared in the Manage Services app in the SAP HANA Cloud database? Note: There are 2 correct answers to this question.",
    "options": [
      "Compile server",
      "Name server",
      "DP server",
      "DI server"
    ],
    "correctAnswer": ["DP server", "DI server"]
  },
  {
    "question": "What can you check with the SAP HANA hardware and cloud measurement tool (HCMT)? Note: There are 2 correct answers to this question.",
    "options": [
      "Linux kernel information",
      "Cloud connector status",
      "CPU states",
      "NUMA memory bandwidth test"
    ],
    "correctAnswer": ["CPU states", "NUMA memory bandwidth test"]
  },
  {
    "question": "Which tools are available in SAP HANA Cloud Central? Note: There are 2 correct answers to this question.",
    "options": [
      "Service Plan Assignment editor",
      "Start Recovery wizard",
      "Manage Configuration editor",
      "Cloud Foundry CLI"
    ],
    "correctAnswer": ["Start Recovery wizard", "Manage Configuration editor"]
  },
  {
    "question": "Which feature do you use to dynamically control SAP HANA database workloads per client session?",
    "options": [
      "Workload classes",
      "Workload analysis",
      "Admission control",
      "Load unit configuration"
    ],
    "correctAnswer": "Workload classes"
  },
  {
    "question": "What is the maximum number of replicas you can configure for SAP HANA Cloud?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What do you need in a multitenant database container (MDC) system to run queries across tenant databases? Note: There are 2 correct answers to this question.",
    "options": [
      "The user in the source system must have sufficient privileges in the target database.",
      "The cross-tenant database communication must be explicitly activated.",
      "The user in the source system must be associated with a user in the target database.",
      "The bidirectional communication channel must be allowed."
    ],
    "correctAnswer": ["The user in the source system must have sufficient privileges in the target database.", "The cross-tenant database communication must be explicitly activated."]
  },
  {
    "question": "How can you view the audit trail in the SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    "options": [
      "Using the expensive statements trace in the SAP HANA cockpit",
      "Using the Auditing card in the SAP HANA cockpit",
      "Using the SQL Console in the SAP HANA database explorer",
      "Using the kernel profiler trace in the SAP HANA database explorer"
    ],
    "correctAnswer": ["Using the Auditing card in the SAP HANA cockpit", "Using the SQL Console in the SAP HANA database explorer"]
  },
  {
    "question": "Which options for Audited Action Status are available in the SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    "options": [
      "Critical",
      "Enabled",
      "All",
      "Unsuccessful"
    ],
    "correctAnswer": ["All", "Unsuccessful"]
  },
  {
    "question": "Which audit trail target is used by default in the SAP HANA Cloud, SAP HANA database?",
    "options": [
      "Database table",
      "Kernel trace",
      "Linux syslog",
      "CSV text file"
    ],
    "correctAnswer": "Database table"
  },
  {
    "question": "What is the default single sign-on method when using hdbsql?",
    "options": [
      "Token based",
      "SAML based",
      "Kerberos based",
      "Certificate based"
    ],
    "correctAnswer": "SAML based"
  },
  {
    "question": "Which container types are available in SAP HANA Deployment Infrastructure (HDI)? Note: There are 2 correct answers to this question.",
    "options": [
      "Docker",
      "Kubernetes",
      "Runtime",
      "Design time"
    ],
    "correctAnswer": ["Runtime", "Design time"]
  },
  {
    "question": "Which SAP HANA security tasks can be performed in combination with a Lightweight Directory Access Protocol (LDAP) server? Note: There are 2 correct answers to this question.",
    "options": [
      "User group assignment",
      "User creation",
      "Password policy configuration",
      "Role assignment"
    ],
    "correctAnswer": ["User group assignment", "Role assignment"]
  },
  {
    "question": "Who owns all database objects deployed using the SAP HANA Deployment Infrastructure (HDI)?",
    "options": [
      "The user who created the role",
      "The DBADMIN user of the tenant database",
      "The_SYS_REPO technical user",
      "The container-specific technical user"
    ],
    "correctAnswer": "The container-specific technical user"
  },
  {
    "question": "What cryptographic libraries are supported in SAP HANA? Note: There are 2 correct answers to this question.",
    "options": [
      "CommonCryptoLib",
      "Libgcrypt",
      "OpenSSL",
      "LibreSSL"
    ],
    "correctAnswer": ["CommonCryptoLib", "OpenSSL"]
  },
  {
    "question": "How are savepoints triggered? Note: There are 2 correct answers to this question.",
    "options": [
      "By performing a delta merge",
      "By issuing a transactional commit",
      "By a database soft shutdown",
      "By performing a database backup"
    ],
    "correctAnswer": ["By a database soft shutdown", "By performing a database backup"]
  },
  {
    "question": "Which hardware KPIs do you need to size before performing a tailored data center integration (TDI) installation for a productive SAP HANA database system? Note: There are 2 correct answers to this question.",
    "options": [
      "DRAM required for the static data memory area",
      "Total disk space required for the log volume",
      "Persistent memory (PMEM) required for backups",
      "Network bandwidth for the storage zone"
    ],
    "correctAnswer": ["DRAM required for the static data memory area", "Total disk space required for the log volume"]
  },
  {
    "question": "In which scenario do you need SAP expert sizing? Note: There are 2 correct answers to this question.",
    "options": [
      "Migrating existing SAP ERP systems from AnyDB to run on SAP HANA",
      "Customer is new to SAP ERP applications and the SAP HANA database system",
      "Consolidating multiple SAP ERP source systems into one SAP ERP system on SAP HANA",
      "Carving out SAP ERP functionality from the source system to the SAP ERP system on SAP HANA"
    ],
    "correctAnswer": ["Consolidating multiple SAP ERP source systems into one SAP ERP system on SAP HANA", "Carving out SAP ERP functionality from the source system to the SAP ERP system on SAP HANA"]
  },
  {
    "question": "Which database storage technology does native storage extension utilize in SAP HANA Cloud?",
    "options": [
      "Dynamic tiering",
      "Disk-based",
      "In-memory",
      "Extension node"
    ],
    "correctAnswer": "Disk-based"
  },
  {
    "question": "What possibilities do you have when upgrading an SAP HANA Cloud, SAP HANA database instance? Note: There are 2 correct answers to this question.",
    "options": [
      "Upgrade the replica first",
      "Select the version to install",
      "Upgrade without restart",
      "Revert to a previous version"
    ],
    "correctAnswer": ["Select the version to install", "Upgrade without restart"]
  },
  {
    "question": "Where does the SAP HANA Cloud, SAP HANA database run in SAP BTP?",
    "options": [
      "Kubernetes container",
      "SAP HANA Cloud Central",
      "Cloud Foundry runtime",
      "Kyma runtime"
    ],
    "correctAnswer": "Kubernetes container"
  },
  {
    "question": "Which object types are stored in an SAP HANA catalog? Note: There are 3 correct answers to this question.",
    "options": [
      "Cubes",
      "HDI containers",
      "Agents",
      "Cockpit roles",
      "JSON collections"
    ],
    "correctAnswer": ["Cubes", "Agents", "JSON collections"]
  },
  {
    "question": "In SAP HANA Cloud, which tasks are handled by the cloud provider? Note: There are 3 correct answers to this question.",
    "options": [
      "Tuning the database to run optimally on the underlying operating system and hardware",
      "Backing up the operating system and the database software",
      "Installing, configuring, and upgrading the operating system",
      "Sizing, provisioning, and monitoring the database",
      "Managing users, roles, and permissions in the database"
    ],
    "correctAnswer": ["Tuning the database to run optimally on the underlying operating system and hardware", "Backing up the operating system and the database software", "Installing, configuring, and upgrading the operating system"]
  },
  {
    "question": "Which services can you stop in the SAP HANA cockpit from the SYSTEMDB Manage Services app? Note: There are 2 correct answers to this question.",
    "options": [
      "Web dispatcher",
      "Index server",
      "XS engine",
      "Compile server"
    ],
    "correctAnswer": ["Web dispatcher", "Compile server"]
  },
  {
    "question": "A new version of SAP HANA Cloud, SAP HANA database is available as of today. If you do NOT perform the upgrade manually, how much time do you have before your database will be automatically upgraded to the next version?",
    "options": [
      "2 weeks",
      "3 months",
      "1 year",
      "7 months"
    ],
    "correctAnswer": "7 months"
  },
  {
    "question": "Which file systems are supported for the data and log volumes of the SAP HANA 2.0 database system? Note: There are 2 correct answers to this question.",
    "options": [
      "XFS",
      "Btrfs",
      "GPFS",
      "EXT4"
    ],
    "correctAnswer": ["XFS", "GPFS"]
  },
  {
    "question": "Which storage tier is used to manage rarely changing, persistent data?",
    "options": [
      "Replica",
      "Data lake",
      "Native storage extension",
      "WORM device"
    ],
    "correctAnswer": "Native storage extension"
  },
  {
    "question": "What is the only assignable privilege for the Privileges on Users type?",
    "options": [
      "ATTACH DEBUGGER",
      "STRUCTURED PRIVILEGE ADMIN",
      "CATALOG READ",
      "AUDIT OPERATOR"
    ],
    "correctAnswer": "ATTACH DEBUGGER"
  },
  {
    "question": "Which system privileges are required for administering tenant databases when connected to the system database? Note: There are 2 correct answers to this question.",
    "options": [
      "BACKUP ADMIN",
      "DATABASE ADMIN",
      "DATA ADMIN",
      "MONITOR ADMIN"
    ],
    "correctAnswer": ["BACKUP ADMIN", "DATABASE ADMIN"]
  },
  {
    "question": "You want to change a standard user account into a restricted user account. Which attributes do you need to adjust? Note: There are 3 correct answers to this question.",
    "options": [
      "Disable ODBC/JDBC Access must be set to \"Yes\".",
      "Authorization method must be set to \"LDAP\".",
      "Creation of Objects in Own Schema must be set to \"No\".",
      "User Group must be set to \"Restricted\".",
      "PUBLIC role must be set to \"No\"."
    ],
    "correctAnswer": ["Creation of Objects in Own Schema must be set to \"No\".", "User Group must be set to \"Restricted\".", "PUBLIC role must be set to \"No\"."]
  },
  {
    "question": "Which options can you use when creating a role in the SAP HANA Cloud, SAP HANA database? Note: There are 3 correct answers to this question.",
    "options": [
      "Assign User Groups",
      "Create Role in Schema",
      "Assign to Role Group",
      "Assign LDAP Groups",
      "Create Group Admin"
    ],
    "correctAnswer": ["Create Role in Schema", "Assign to Role Group", "Create Group Admin"]
  },
  {
    "question": "Which privilege types are available in SAP HANA Cloud? Note: There are 3 correct answers to this question.",
    "options": [
      "Analytic",
      "System",
      "Object",
      "Application",
      "Package"
    ],
    "correctAnswer": ["Analytic", "System", "Object"]
  },
  {
    "question": "Which database objects can you manipulate if you have the object privilege activity ALL PRIVILEGES? Note: There are 2 correct answers to this question.",
    "options": [
      "Functions",
      "Views",
      "Procedures",
      "Schemas"
    ],
    "correctAnswer": ["Views", "Schemas"]
  },
  {
    "question": "What can you assign to a user with the User Management app in the SAP HANA cockpit? Note: There are 2 correct answers to this question.",
    "options": [
      "LDAP identity provider",
      "Scopes",
      "LDAP authorization modes",
      "User group"
    ],
    "correctAnswer": ["LDAP authorization modes", "User group"]
  },
  {
    "question": "What can you assign to a user group in the SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    "options": [
      "Password policies",
      "Users",
      "Permissions",
      "Roles"
    ],
    "correctAnswer": ["Password policies", "Users"]
  },
  {
    "question": "Which privileges are required to create the COCKPIT MONITOR technical user? Note: There are 2 correct answers to this question.",
    "options": [
      "MONITOR ADMIN",
      "SELECT on the _SYS_TELEMETRY schema",
      "CATALOG READ",
      "SELECT on the_SYS_STATISTICS schema"
    ],
    "correctAnswer": ["CATALOG READ", "SELECT on the_SYS_STATISTICS schema"]
  },
  {
    "question": "Which user is assigned by default when you provision a data lake in SAP HANA Cloud?",
    "options": [
      "SYSTEM",
      "DBADMIN",
      "COCKPIT MONITOR",
      "HDLADMIN"
    ],
    "correctAnswer": "HDLADMIN"
  },
  {
    "question": "You want to prevent changes to system properties in tenant databases. Which configuration file stores the blocklisted properties?",
    "options": [
      "multidb.ini",
      "attributes.ini",
      "global.ini",
      "indexserver.ini"
    ],
    "correctAnswer": "multidb.ini"
  },
  {
    "question": "Which actions can you perform on an SAP HANA Cloud, SAP HANA database using the Cloud Foundry CLI? Note: There are 2 correct answers to this question.",
    "options": [
      "Recover instance",
      "Change instance backup schedule",
      "Decrease data volume size",
      "Create instance"
    ],
    "correctAnswer": ["Recover instance", "Create instance"]
  },
  {
    "question": "You want to use the multi-environment database administration tools to administer an SAP HANA Cloud, SAP HANA database instance. Which SAP BTP entitlement service plans do you need? Note: There are 2 correct answers to this question.",
    "options": [
      "hana",
      "relational data lake",
      "multi-environment tools",
      "tools"
    ],
    "correctAnswer": ["hana", "tools"]
  },
  {
    "question": "Which tool do you use to execute SQL queries on the SAP HANA Cloud database?",
    "options": [
      "SQLScript",
      "SQL Console",
      "HDBSQL",
      "SQL Editor"
    ],
    "correctAnswer": "SQL Console"
  },
  {
    "question": "How can you start an SAP HANA Cloud database instance using the command line?",
    "options": [
      "alter system start database <DATABASE_NAME>",
      "cf update-service <SERVICE_INSTANCE> -c \"{ \"data\": {\"service Stopped\": false}}\"",
      "sapcontrol -nr <INSTANCE_NUMBER>-function StartSystem",
      "of start <APPLICATION_NAME>"
    ],
    "correctAnswer": "cf update-service <SERVICE_INSTANCE> -c \"{ \"data\": {\"service Stopped\": false}}\""
  },
  {
    "question": "Which tools can you use to disable tenant database functionalities? Note: There are 2 correct answers to this question.",
    "options": [
      "resident hdblcm",
      "Manage Database Configuration",
      "hdbuserstore",
      "Manage Restricted Features"
    ],
    "correctAnswer": ["Manage Database Configuration", "Manage Restricted Features"]
  },
  {
    "question": "Which system privilege must you have to restrict features for tenant databases in the SAP HANA cockpit?",
    "options": [
      "INIFILE ADMIN",
      "RESOURCE ADMIN",
      "SERVICE ADMIN",
      "DATABASE ADMIN"
    ],
    "correctAnswer": "INIFILE ADMIN"
  },
  {
    "question": "Which services can you stop in the SAP HANA cockpit from the SYSTEMDB Manage Services app? Note: There are 2 correct answers to this question.",
    "options": [
      "Web dispatcher",
      "Index server",
      "XS engine",
      "Compile server"
    ],
    "correctAnswer": ["Web dispatcher", "Compile server"]
  },
  {
    "question": "When using the SAP HANA cockpit, which user credentials do you need to stop the SAP HANA database system? Note: There are 3 correct answers to this question.",
    "options": [
      "Cockpit User",
      "sap<sid>",
      "Database User",
      "Root",
      "<sid>adm"
    ],
    "correctAnswer": ["Cockpit User", "Database User", "<sid>adm"]
  },
  {
    "question": "Where can you start/stop an SAP HANA Cloud, SAP HANA database?",
    "options": [
      "SAP HANA HDBSQL",
      "SAP BTP cockpit",
      "SAP HANA Cloud Central",
      "SAP HANA cockpit"
    ],
    "correctAnswer": "SAP HANA Cloud Central"
  },
  {
    "question": "From which sources can you import catalog objects when using the SAP HANA database explorer? Note: There are 3 correct answers to this question.",
    "options": [
      "Data lake files",
      "Local computer",
      "Google Cloud Storage",
      "HPE GreenLake",
      "IBM public cloud"
    ],
    "correctAnswer": ["Data lake files", "Local computer", "Google Cloud Storage"]
  },
  {
    "question": "What happens when you rename a tenant database in the SAP HANA cockpit? Note: There are 2 correct answers to this question.",
    "options": [
      "The tenant database is stopped.",
      "The tenant database backups are renamed.",
      "The tenant database trace directory is renamed.",
      "The tenant database is unloaded from memory."
    ],
    "correctAnswer": ["The tenant database is stopped.", "The tenant database trace directory is renamed."]
  },
  {
    "question": "Which role do you need in order to assign users to groups in the SAP HANA cockpit?",
    "options": [
      "Cockpit Administrator role",
      "Cockpit Database Administrator role",
      "Cockpit User Administrator role",
      "Cockpit User role"
    ],
    "correctAnswer": "Cockpit User Administrator role"
  },
  {
    "question": "Which user is automatically created when you add a data lake to an SAP HANA Cloud, SAP HANA database?",
    "options": [
      "HDLADMIN",
      "SAPSA",
      "DBA",
      "DBADMIN"
    ],
    "correctAnswer": "HDLADMIN"
  },
  {
    "question": "Which actions can you only choose when using the resident HDBLCM tool as root user? Note: There are 2 correct answers to this question.",
    "options": [
      "rename_system",
      "unregister_system",
      "update_host",
      "configure_internal_network"
    ],
    "correctAnswer": ["rename_system", "unregister_system"]
  },
  {
    "question": "You are using the SAP HANA database lifecycle manager (HDBLCM) from the SAP HANA installation media. Which tasks can you perform from the command line? Note: There are 2 correct answers to this question.",
    "options": [
      "Update the SAP HANA database system and its components.",
      "Rename the SAP HANA database system.",
      "Uninstall the SAP HANA database system and its components.",
      "Extract the SAP HANA database system components."
    ],
    "correctAnswer": ["Update the SAP HANA database system and its components.", "Extract the SAP HANA database system components."]
  },
  {
    "question": "Which types of SAP HANA Cloud instance can you provision in an SAP BTP account? Note: There are 2 correct answers to this question.",
    "options": [
      "SAP HANA database",
      "SAP SQL Anywhere",
      "SAP IQ",
      "Data lake"
    ],
    "correctAnswer": ["SAP HANA database", "Data lake"]
  },
  {
    "question": "Which parameters are mandatory when using the HDBLCM tool in batch mode, to install the SAP HANA database system? Note: There are 2 correct answers to this question.",
    "options": [
      "SAP HANA system ID (SID)",
      "Password of user sapadm",
      "Data and log path",
      "Installation path"
    ],
    "correctAnswer": ["SAP HANA system ID (SID)", "Password of user sapadm"]
  },
  {
    "question": "Which data stores are activated by default when you provision an SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    "options": [
      "Native storage extension",
      "In-memory",
      "Data lake",
      "Hadoop distributed file system"
    ],
    "correctAnswer": ["Native storage extension", "In-memory"]
  },
  {
    "question": "What attributes can you control when creating an SAP HANA Cloud, data lake instance? Note: There are 3 correct answers to this question.",
    "options": [
      "Automatic backup creation",
      "Availability zone",
      "Number of coordinators",
      "Compatibility with SAP IQ",
      "Compatibility with Apache Hadoop"
    ],
    "correctAnswer": ["Availability zone", "Number of coordinators", "Compatibility with SAP IQ"]
  },
  {
    "question": "Which resources will be changed when you scale down an SAP HANA Cloud, SAP HANA database instance? Note: There are 2 correct answers to this question.",
    "options": [
      "Replicas",
      "vCPUs",
      "Storage",
      "Memory"
    ],
    "correctAnswer": ["vCPUs", "Memory"]
  },
  {
    "question": "What options do you have when deploying an SAP HANA Cloud, SAP HANA database with an integrated data lake? Note: There are 2 correct answers to this question.",
    "options": [
      "Create an SAP HANA Cloud database with a separate data lake.",
      "Create an SAP HANA Cloud database with the data lake on premise.",
      "Create an SAP HANA Cloud database and later add a data lake.",
      "Create an SAP HANA Cloud database and include a data lake in one step."
    ],
    "correctAnswer": ["Create an SAP HANA Cloud database and later add a data lake.", "Create an SAP HANA Cloud database and include a data lake in one step."]
  },
  {
    "question": "When performing a standard SAP HANA database system installation, which users will be created or validated by default during that installation? Note: There are 3 correct answers to this question.",
    "options": [
      "SYSTEM",
      "syb<sid>",
      "SAP<SID>",
      "sapadm",
      "<sid>crypt"
    ],
    "correctAnswer": ["SYSTEM", "sapadm", "<sid>crypt"]
  },
  {
    "question": "You want to implement a 28-day backup cycle. Which scenario uses the least storage?",
    "options": [
      "Full back up, differential backup, log backup",
      "Incremental backup, log backup",
      "Full back up, log backup",
      "Full back up, incremental backup, log backup"
    ],
    "correctAnswer": "Full back up, incremental backup, log backup"
  },
  {
    "question": "What is one of the backup options provided by the SAP HANA database?",
    "options": [
      "Time travel",
      "Single table backup",
      "Fallback snapshots",
      "Data snapshots"
    ],
    "correctAnswer": "Data snapshots"
  },
  {
    "question": "How can you ensure that a consistent database status is saved using data snapshots?",
    "options": [
      "Execute the hdbbackupdiag tool.",
      "Create a fallback snapshot.",
      "Create an internal database snapshot.",
      "Trigger a savepoint."
    ],
    "correctAnswer": "Create an internal database snapshot."
  },
  {
    "question": "How long are SAP HANA Cloud, SAP HANA database backups retained by default?",
    "options": [
      "3 weeks",
      "2 weeks",
      "1 week",
      "4 weeks"
    ],
    "correctAnswer": "2 weeks"
  },
  {
    "question": "What can you check with the SAP HANA hardware and cloud measurement tool (HCMT)? Note: There are 2 correct answers to this question.",
    "options": [
      "Linux kernel information",
      "Cloud connector status",
      "CPU states",
      "NUMA memory bandwidth test"
    ],
    "correctAnswer": [
      "CPU states",
      "NUMA memory bandwidth test"
    ]
  },
  {
    "question": "Which tool do you use to reinitialize a non-recoverable system database?",
    "options": [
      "hdbrecovercheck",
      "recoverSys.py",
      "hdbmdcutil",
      "RecoverUtil.py"
    ],
    "correctAnswer": "hdbmdcutil"
  },
  {
    "question": "How do you initiate a recovery of your SAP HANA Cloud, SAP HANA database instance?",
    "options": [
      "In an SQL Console, execute the RECOVER DATABASE statement with the timestamp.",
      "In SAP HANA Cloud Central, select the Start Recovery option and set the timestamp.",
      "In an SAP BTP CLI, execute the RECOVER DATABASE command with the timestamp.",
      "In the SAP HANA cockpit, select the Start Recovery option and set the timestamp."
    ],
    "correctAnswer": "In SAP HANA Cloud Central, select the Start Recovery option and set the timestamp."
  },
  {
    "question": "Which backup types can you schedule using the backup scheduler in the SAP HANA cockpit? Note: There are 3 correct answers to this question.",
    "options": [
      "Data snapshot",
      "Incremental backup",
      "Complete backup",
      "Log backup",
      "Differential backup"
    ],
    "correctAnswer": [
      "Incremental backup",
      "Complete backup",
      "Differential backup"]
  },
  {
    "question": "In which situations can you resume the failed recovery of your productive SAP HANA tenant database? Note: There are 2 correct answers to this question.",
    "options": [
      "An aborted recovery of a delta data backup",
      "An aborted recovery of a log backup",
      "An aborted recovery of a complete data backup",
      "An aborted recovery of the catalog backup"
    ],
    "correctAnswer": [
      "An aborted recovery of a delta data backup",
      "An aborted recovery of a log backup"]
  },
  {
    "question": "Which scenarios are supported for a database copy using backup and recovery from a source machine to a target machine? Note: There are 2 correct answers to this question.",
    "options": [
      "The source system has more nodes than the target system.",
      "The source system and target system have different SIDS.",
      "The source system and target system have different CPU architecture.",
      "The source system release version is higher than the target system."
    ],
    "correctAnswer": [
      "The source system and target system have different SIDS.",
      "The source system and target system have different CPU architecture."
    ]
  },
  {
    "question": "Which prerequisites must be fulfilled when recovering a tenant database? Note: There are 2 correct answers to this question.",
    "options": [
      "The tenant database must be stopped before the recovery starts.",
      "The logon credentials of the system database user must be available.",
      "The logon credentials of the <sid>adm user must be available.",
      "The whole system must be shut down before the recovery starts."
    ],
    "correctAnswer": [
      "The tenant database must be stopped before the recovery starts.",
      "The logon credentials of the <sid>adm user must be available."
    ]
  }
]

export const availableExams: ExamData[] = [
  {
    title: "SAP Integration Exam",
    description: "Test your knowledge on SAP Integration Suite",
    questions: sapIntegrationExam,
  },
  {
    title: "SAP Database Administrator Exam",
    description: "Test your knowledge on SAP Database Administration",
    questions: sapDbAdminExam,
  },
]
