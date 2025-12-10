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

const sapDbAdminExam: QuizQuestion[] = [
  {
    "question": "By default, from where reads an SAP ABAP application server the database connection information?",
    "options": [
      "The hdbuserstore on the SAP HANA server.",
      "The Local Secure Store on the SAP ABAP application server.",
      "The Secure Storage in File System on the SAP HANA server.",
      "The hdbuserstore on the SAP ABAP application server."
    ],
    "correctAnswer": "The hdbuserstore on the SAP ABAP application server."
  },
  {
    "question": "Which components of an SAP HANA appliance do you need to consider for sizing?",
    "options": [
      "Storage",
      "Memory",
      "CPU"
    ],
    "correctAnswer": "Memory"
  },
  {
    "question": "Which system view allows you to review the authentication method assigned to your user account?",
    "options": [
      "M_REMOTE_SOURCES",
      "M_SERVICES",
      "M_SECURESTORE",
      "M_CONNECTIONS"
    ],
    "correctAnswer": "M_CONNECTIONS"
  },
  {
    "question": "The index server runs in the system database and contains the actual data stores and the engines for processing the data.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "When configuring SAP HANA alerts, you can only enter one email recipient per alert.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "From which Web site can you securely download the full SAP HANA documentation as a .zip file?",
    "options": [
      "https://community.sap.com/topics/hana",
      "https://help.sap.com/docs/SAP_HANA_PLATFORM",
      "https://launchpad.support.sap.com/#/softwarecenter"
    ],
    "correctAnswer": "https://help.sap.com/docs/SAP_HANA_PLATFORM"
  },
  {
    "question": "Which backup types are available when you schedule a data backup?",
    "options": [
      "Interval",
      "Differential",
      "Complete",
      "Snapshot"
    ],
    "correctAnswer": [
      "Differential",
      "Complete"
    ]
  },
  {
    "question": "From which backup types can SAP HANA resume a recovery?",
    "options": [
      "Log",
      "Incremental",
      "Complete",
      "Fallback snapshot"
    ],
    "correctAnswer": [
      "Log",
      "Incremental"
    ]
  },
  {
    "question": "Which operating systems are supported when installing SAP HANA cockpit on IBM Power hardware?",
    "options": [
      "SUSE Linux Enterprise Server (SLES)",
      "Ubuntu Server (UBSE)",
      "Slackware Linux (SLLI)",
      "Red Hat Enterprise Linux (RHEL)"
    ],
    "correctAnswer": [
      "SUSE Linux Enterprise Server (SLES)",
      "Red Hat Enterprise Linux (RHEL)"
    ]
  },
  {
    "question": "What are the advantages of using the delta merge in the memory management of the column store?",
    "options": [
      "Partial loading is possible in the delta storage",
      "Highly compressed data in the main storage to realize read optimization",
      "High write performance by implementing a delta storage mechanism, which uses only basic compression",
      "Write operations only affect the delta storage but not the main storage"
    ],
    "correctAnswer": [
      "Highly compressed data in the main storage to realize read optimization",
      "High write performance by implementing a delta storage mechanism, which uses only basic compression",
      "Write operations only affect the delta storage but not the main storage"
    ]
  },
  {
    "question": "Which of the following actions can be audited by SAP HANA?",
    "options": [
      "Changes to system configuration",
      "Create or drop user, and create or drop role"
    ],
    "correctAnswer": [
      "Changes to system configuration",
      "Create or drop user, and create or drop role"
    ]
  },
  {
    "question": "What is the best location to use when importing data when the file size is larger than 1GB?",
    "options": [
      "SAP HANA host.",
      "A Samba share.",
      "Local computer.",
      "SAP HANA cloud."
    ],
    "correctAnswer": "SAP HANA host."
  },
  {
    "question": "Which of the following recovery types is not supported for delta backups?",
    "options": [
      "Recover the database to its most recent state.",
      "Recover the database to a specific data backup.",
      "Recover the database to a specific point in time."
    ],
    "correctAnswer": "Recover the database to a specific data backup."
  },
  {
    "question": "Which certified hardware components are listed on the SAP HANA hardware directory?",
    "options": [
      "Enterprise storage systems",
      "Network switches",
      "Enterprise backup solutions",
      "Appliances"
    ],
    "correctAnswer": [
      "Enterprise storage systems",
      "Appliances"
    ]
  },
  {
    "question": "Which resource can you dynamically influence using workload classes?",
    "options": [
      "Statement commit rate limit",
      "Statement thread limit",
      "statement IO throughput limit",
      "Statement memory limit"
    ],
    "correctAnswer": [
      "Statement thread limit",
      "Statement memory limit"
    ]
  },
  {
    "question": "To diagnose backup errors, you can use the backup.log and backint.log files.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "True"
  },
  {
    "question": "Which schema stores the historical performance data of SAP HANA?",
    "options": [
      "_SYS_TELEMETRY",
      "_SYS_EPM_DATA",
      "_SYS_BI",
      "_SYS_STATISTICS"
    ],
    "correctAnswer": "_SYS_STATISTICS"
  },
  {
    "question": "The creation of storage snapshots has a big impact on the system, and recovery from storage snapshots takes longer.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "Which tools can you use to update SAP HANA cockpit?",
    "options": [
      "hdblcm",
      "SUM",
      "SWPM",
      "hdblcmgui"
    ],
    "correctAnswer": [
      "hdblcm",
      "hdblcmgui"
    ]
  },
  {
    "question": "Under which user runs the local secure store (LSS) on the SAP HANA server?",
    "options": [
      "SYSTEM",
      "<sid>crypt",
      "<sid>adm",
      "sapadm"
    ],
    "correctAnswer": "<sid>crypt"
  },
  {
    "question": "During an SAP HANA installation, which operating system user account is assigned to the trusted local secure store (LSS)?",
    "options": [
      "<sid>adm",
      "sapadm",
      "sapssl",
      "<sid>crypt"
    ],
    "correctAnswer": "<sid>crypt"
  },
  {
    "question": "How does the SAP HANA database organize the storage of column store data on the disk volume?",
    "options": [
      "Pages with a fixed size of 64 MB",
      "Pages with sizes from 4 KB to 16 MB",
      "Pages with a fixed size of 16 KB, which are arranged in superblocks of 64 MB",
      "Pages with sizes from 4 KB to 16 MB, which are arranged in superblocks of 64 MB"
    ],
    "correctAnswer": "Pages with sizes from 4 KB to 16 MB, which are arranged in superblocks of 64 MB"
  },
  {
    "question": "Which SAP HANA lifecycle management tools can be used to install the SAP HANA database system?",
    "options": [
      "hdblcm",
      "Resident hdblcm",
      "hdblcmweb",
      "hdbupd"
    ],
    "correctAnswer": "hdblcm"
  },
  {
    "question": "Which of the following tools can be used for user administration?",
    "options": [
      "Resident hdblcm",
      "SAP Identity Management",
      "SAP HANA cockpit",
      "hdbsql"
    ],
    "correctAnswer": [
      "SAP Identity Management",
      "SAP HANA cockpit",
      "hdbsql"
    ]
  },
  {
    "question": "Which users are able to start and stop a distributed SAP HANA database system?",
    "options": [
      "sapadm",
      "<sid>adm",
      "root",
      "SYSTEM"
    ],
    "correctAnswer": [
      "<sid>adm",
      "root"
    ]
  },
  {
    "question": "Which of the following SAP HANA license key types locks down the system when the current memory consumption of SAP HANA exceeds the licensed amount of memory?",
    "options": [
      "Unenforced license key",
      "Temporary license key",
      "Enforced license key"
    ],
    "correctAnswer": "Enforced license key"
  },
  {
    "question": "Which protocol is used by the statistics service to collects statistical and performance information?",
    "options": [
      "MDX",
      "JSON",
      "SQL",
      "SNMP"
    ],
    "correctAnswer": "SQL"
  },
  {
    "question": "Which of the following administration tools provide the ability for central landscape management?",
    "options": [
      "DBA Cockpit",
      "SAP HANA hdbsql",
      "SAP HANA studio",
      "SAP Landscape Management"
    ],
    "correctAnswer": [
      "DBA Cockpit",
      "SAP Landscape Management"
    ]
  },
  {
    "question": "When a registered SAP HANA resource is offline, the version number 0.00.000.00.0 (UNKNOWN) is displayed on the Database Directory page of SAP HANA cockpit to indicate an improper shutdown.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "You can only generate the full system information dump file using the SAP HANA cockpit.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "Which inter-service communication properties binds the processes to entered address only, and to all local host interfaces?",
    "options": [
      "Local",
      "Global",
      "Internal"
    ],
    "correctAnswer": "Internal"
  },
  {
    "question": "In your backup cycle, you can use daily fallback snapshots.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "In SAP HANA, the database administrator can't manually unload table data.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "In which SAP HANA server processes does the statistics scheduler thread run?",
    "options": [
      "Index server",
      "Name server",
      "SAP start service",
      "Compile server"
    ],
    "correctAnswer": "Name server"
  },
  {
    "question": "Which of the following system views provides violation information about unsupported values for configuration parameters in your SAP HANA database system?",
    "options": [
      "M_LANDSCAPE_HOST_CONFIGURATION",
      "M_CONFIGURATION_PARAMETER_VALUES",
      "M_BACKUP_CONFIGURATION",
      "CONFIGURATION_PARAMETER_PROPERTIES"
    ],
    "correctAnswer": "M_CONFIGURATION_PARAMETER_VALUES"
  },
  {
    "question": "What parts of the SAP HANA database system can be backed up and restored separately?",
    "options": [
      "Schemas",
      "Tenants",
      "Virtual tables",
      "Configuration files"
    ],
    "correctAnswer": [
      "Tenants",
      "Configuration files"
    ]
  },
  {
    "question": "In SAP HANA databases, user groups are mandatory and have to be used by customers.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "In which circumstances do you create a column store table?",
    "options": [
      "When aggregations or fast search are required",
      "When the table has a large number of columns",
      "When accessing complete records",
      "When the calculations are based on a small number of columns"
    ],
    "correctAnswer": [
      "When aggregations or fast search are required",
      "When the table has a large number of columns",
      "When the calculations are based on a small number of columns"
    ]
  },
  {
    "question": "The database migration option (DMO) is part of which tool?",
    "options": [
      "Software Update Manager (SUM)",
      "Support Package Manager (SPAM)",
      "Software Provisioning Manager (SWPM)",
      "SAP Add-On Installation Tool (SAINT)"
    ],
    "correctAnswer": "Software Update Manager (SUM)"
  },
  {
    "question": "What is the minimum space requirement for the Data Volume?",
    "options": [
      "3 * RAM (Appliance)",
      "Min. 0.5 * RAM",
      "1.2 * RAM (TDI)",
      "Min. 1 * RAM"
    ],
    "correctAnswer": [
      "3 * RAM (Appliance)",
      "1.2 * RAM (TDI)"
    ]
  },
  {
    "question": "For which system landscape types can you use the SAP HANA Hardware and Cloud Measurement tools to determine if your hardware meets the minimum performance criteria required to run SAP HANA in production use?",
    "options": [
      "A single host setup.",
      "A scale-out setup.",
      "A system replication setup.",
      "A standby host setup."
    ],
    "correctAnswer": [
      "A single host setup.",
      "A scale-out setup."
    ]
  },
  {
    "question": "Which backup types are delta backups in SAP HANA?",
    "options": [
      "Differential",
      "Full",
      "Incremental",
      "Mirror"
    ],
    "correctAnswer": [
      "Differential",
      "Incremental"
    ]
  },
  {
    "question": "Which of the following traces has the default configuration status \"Active\"?",
    "options": [
      "Plan trace",
      "Database trace",
      "Performance trace",
      "SQL trace"
    ],
    "correctAnswer": "Database trace"
  },
  {
    "question": "Assume the following scenario: An SAP HANA system is configured for the parameter savepoint_interval_s with the value 300s on the DEFAULT layer, but the SYSTEM layer value is 450s, and as a third parameter value, the included tenant is configured on the DATABASE layer with the value 600s. Which value will be taken into account during runtime for the tenant database?",
    "options": [
      "The SYSTEM layer value 450s, because a tenant-specific savepoint parameters are not allowed.",
      "The DATABASE layer value 600s, because it overrides SYSTEM and DEFAULT layer values.",
      "The DEFAULT layer value 300s, because it is recommended by SAP and ignores all other values."
    ],
    "correctAnswer": "The DATABASE layer value 600s, because it overrides SYSTEM and DEFAULT layer values"
  },
  {
    "question": "When connected to the SAP HANA database, which HDBSQL command displays general information about the database?",
    "options": [
      "\\di",
      "\\s",
      "\\a",
      "\\c"
    ],
    "correctAnswer": "\\s"
  },
  {
    "question": "SAP HANA cockpit can only be installed on dedicated hardware. Choose the correct answer.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "In the SAP HANA database explorer, as the user SYSTEM, you can access the table data in every database schema. Choose the correct answer.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  },
  {
    "question": "Which is the default external SQL port number of the tenant database that is automatically created when you install a single-tenant system? Choose the correct answer.",
    "options": [
      "3<instance>15",
      "3<instance>41",
      "3<instance>13",
      "3<instance>03"
    ],
    "correctAnswer": "3<instance>15"
  },
  {
    "question": "Which user account is used when a tenant database connection is automatically added to the database explorer?",
    "options": [
      "The tenant SYSTEM user",
      "The tenant COCKPIT_MONITOR user",
      "Your personal SAP HANA cockpit user",
      "Your personal SAP HANA database user"
    ],
    "correctAnswer": "Your personal SAP HANA database user"
  },
  {
    "question": "The password policy parameters for the system database of a multiple-container system are maintained in the indexserver.ini file. Choose the correct answer.",
    "options": [
      "False",
      "True"
    ],
    "correctAnswer": "False"
  }
]

export const availableExams: ExamData[] = [
  {
    title: "SAP Integration Exam",
    description: "Test your knowledge on SAP Integration Suite",
    questions: sapIntegrationExam,
  },
  {
    title: "SAP DB Admin Exam",
    description: "Test your knowledge on SAP Database Administration",
    questions: sapDbAdminExam,
  },
]
