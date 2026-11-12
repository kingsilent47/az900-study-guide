[
  {
    "id": 1,
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. When you are implementing a software as a service (SaaS) solution, you are responsible for configuring high availability.",
    "options": ["No change is needed.", "defining scalability rules", "installing the SaaS solution", "configuring the SaaS solution"],
    "answer": 3,
    "explanation": "When implementing a SaaS solution, you are responsible for configuring the SaaS solution, not high availability. The SaaS provider manages high availability."
  },
  {
    "id": 2,
    "question": "You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?",
    "options": ["fault tolerance", "elasticity", "scalability", "low latency"],
    "answer": 0,
    "explanation": "Fault tolerance is the ability of a system to continue to function in the event of a failure. Availability Zones protect applications and data from datacenter failures."
  },
  {
    "id": 3,
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. An organization that hosts its infrastructure in a private cloud can decommission its data center.",
    "options": ["No change is needed.", "in a hybrid cloud", "in the public cloud", "on a Hyper-V host"],
    "answer": 2,
    "explanation": "An organization that hosts its infrastructure in a public cloud can decommission its data center, not a private cloud."
  },
  {
    "id": 4,
    "question": "What are two characteristics of the public cloud? Each correct answer presents a complete solution.",
    "options": ["dedicated hardware", "unsecured connections", "limited storage", "metered pricing", "self-service management"],
    "answer": [3, 4],
    "explanation": "With the public cloud, you get pay-as-you-go pricing (metered pricing) and self-service management."
  },
  {
    "id": 5,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "A PowerShell script needs to be run in PowerShell. The computer has Azure CLI tools, not PowerShell installed."
  },
  {
    "id": 6,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "With the Azure Cloud Shell, you can run PowerShell cmdlets and scripts in a Web browser."
  },
  {
    "id": 7,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "The computer has PowerShell Core 6.0, but it doesn't have the Azure PowerShell module installed."
  },
  {
    "id": 8,
    "question": "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?",
    "options": ["one network security group (NSG)", "10 virtual network gateways", "10 Azure ExpressRoute circuits", "one Azure firewall"],
    "answer": 3,
    "explanation": "You can restrict traffic to multiple virtual networks with a single Azure firewall."
  },
  {
    "id": 9,
    "question": "You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?",
    "options": ["an Azure SQL database", "a virtual machine data disk", "a Files service in a storage account", "a Blobs service in a storage account"],
    "answer": 2,
    "explanation": "Azure Files is Microsoft's easy-to-use cloud file system. Azure file shares can be seamlessly used in Windows to map a network drive."
  },
  {
    "id": 10,
    "question": "Your company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?",
    "options": ["Azure Logic Apps", "Azure Machine Learning Studio", "Azure Batch", "Azure Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Machine Learning designer lets you visually connect datasets and modules on an interactive canvas to create machine learning models."
  },
  {
    "id": 11,
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. Azure policies provide a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
    "options": ["No change is needed", "Resource groups provide", "Azure Resource Manager provides", "Management groups provide"],
    "answer": 2,
    "explanation": "Azure Resource Manager provides a common platform for deploying objects to a cloud infrastructure."
  },
  {
    "id": 12,
    "question": "Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?",
    "options": ["Azure Resource Manager templates", "virtual machine scale sets", "the Azure API Management service", "management groups"],
    "answer": 0,
    "explanation": "You can use Azure Resource Manager templates to automate the creation of the Azure resources. Deploying resources through templates is known as Infrastructure as code."
  },
  {
    "id": 13,
    "question": "Which Azure service should you use to collect events from multiple resources into a centralized repository?",
    "options": ["Azure Event Hubs", "Azure Analysis Services", "Azure Monitor", "Azure Log Analytics"],
    "answer": 0,
    "explanation": "Azure Event Hubs is a big data streaming platform and event ingestion service. It can receive and process millions of events per second."
  },
  {
    "id": 14,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a DDoS protection plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "A DDoS protection plan is used to protect against DDoS attacks; it does not provide connectivity to a virtual machine."
  },
  {
    "id": 15,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service. We need to add a rule to Azure Firewall to allow the connection to the virtual machine on port 80 (HTTP)."
  },
  {
    "id": 16,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based load balancing solution. It is not used to ensure that a virtual machine is accessible from the Internet over HTTP. You need to modify a network security group or Azure Firewall."
  },
  {
    "id": 17,
    "question": "You need to ensure that when Azure Active Directory (Azure AD) users connect to Azure AD from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?",
    "options": ["Azure AD Connect Health", "Azure AD Privileged Identity Management", "Azure Advanced Threat Protection (ATP)", "Azure AD Identity Protection"],
    "answer": 3,
    "explanation": "Azure AD Identity Protection includes sign-in risk policies. One risk detection type is Anonymous IP Address, which can be configured to require users to change their password."
  },
  {
    "id": 18,
    "question": "Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?",
    "options": ["network security groups (NSGs)", "Azure Service Bus", "a local network gateway", "a route filter"],
    "answer": 0,
    "explanation": "A network security group works like a firewall. You can attach it to a virtual network or subnet to restrict traffic between resources such as virtual machines."
  },
  {
    "id": 19,
    "question": "To what should an application connect to retrieve security tokens?",
    "options": ["an Azure Storage account", "Azure Active Directory (Azure AD)", "a certificate store", "an Azure key vault"],
    "answer": 1,
    "explanation": "Applications connect to Azure Active Directory (Azure AD) to retrieve security tokens for authentication and authorization."
  },
  {
    "id": 20,
    "question": "Resource groups provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions. (Evaluate the underlined text)",
    "options": ["No change is needed", "Management groups", "Azure policies", "Azure App Service plans"],
    "answer": 1,
    "explanation": "Management groups provide a governance scope above subscriptions. You organize subscriptions into management groups to efficiently manage access, policies, and compliance."
  },
  {
    "id": 21,
    "question": "Your network contains an Active Directory forest with 5,000 user accounts. Your company plans to migrate all network resources to Azure and decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?",
    "options": ["Implement Azure Multi-Factor Authentication (MFA)", "Sync all the Active Directory user accounts to Azure Active Directory (Azure AD)", "Instruct all users to change their password", "Create a guest user account in Azure AD for each user"],
    "answer": 1,
    "explanation": "Syncing the Active Directory user accounts to Azure AD (using Azure AD Connect) is the easiest way to migrate identities and minimize impact on users."
  },
  {
    "id": 22,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Basic support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "The Basic support plan does not have any technical support for engineers. Access to Support Engineers via email or phone is available in Premier, Professional Direct, and Standard plans."
  },
  {
    "id": 23,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Standard support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Standard, Professional Direct, and Premier support plans have technical support for engineers via email and phone."
  },
  {
    "id": 24,
    "question": "Which of the following options is True regarding Azure File Sync?",
    "options": ["Upload/Download files using a physical device", "Copy blobs or files to or from your storage account using the command line", "Download/upload files and blobs in your Azure Storage Account using a GUI-based app", "Cloud Tiering: most frequently accessed files are replicated locally, while infrequently accessed files are stored in Azure"],
    "answer": 3,
    "explanation": "Azure File Sync helps configure cloud tiering so the most frequently accessed files are replicated locally, while infrequently accessed files are kept in the cloud until requested."
  },
  {
    "id": 25,
    "question": "Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan that minimizes costs. Which support plan should you recommend?",
    "options": ["Premier", "Developer", "Professional Direct", "Standard"],
    "answer": 2,
    "explanation": "Architecture support is available as 'General guidance' for the Developer support plan, making it the most cost-effective option for this requirement."
  },
  {
    "id": 26,
    "question": "What is required to use Azure Cost Management?",
    "options": ["a Dev/Test subscription", "Software Assurance", "an Enterprise Agreement (EA)", "a pay-as-you-go subscription"],
    "answer": 3,
    "explanation": "Cost Management includes usage and purchases for Enterprise Agreement (EA) accounts, Microsoft Customer Agreement accounts, and individual subscriptions with pay-as-you-go rates."
  },
  {
    "id": 27,
    "question": "Your Azure trial account expired last week. You are now unable to create additional Azure Active Directory (Azure AD) user accounts. (Evaluate the underlined text)",
    "options": ["No change is needed", "start an existing Azure virtual machine", "access your data stored in Azure", "access the Azure portal"],
    "answer": 2,
    "explanation": "You are not charged for Azure Active Directory user accounts, so you can continue to create them. However, you cannot start a VM after a trial expires because it becomes chargeable."
  },
  {
    "id": 28,
    "question": "You have several virtual machines in an Azure subscription. You create a new subscription. The virtual machines cannot be moved to the new subscription. (Evaluate the underlined text)",
    "options": ["No change is needed", "The virtual machines can be moved to the new subscription", "The virtual machines can be moved only if they are all in the same resource group", "The virtual machines can be moved only if they run Windows Server 2016"],
    "answer": 1,
    "explanation": "Virtual machines and their associated resources can be moved to a different subscription by using the Azure portal or Azure CLI."
  },
  {
    "id": 29,
    "question": "Which two types of customers are eligible to use Azure Government to develop a cloud solution? (Choose two)",
    "options": ["a Canadian government contractor", "a European government contractor", "a United States government entity", "a United States government contractor", "a European government entity"],
    "answer": [2, 3],
    "explanation": "Azure Government is a sovereign cloud built exclusively for US government agencies and their solution providers."
  },
  {
    "id": 30,
    "question": "When planning to migrate a public website to Azure, you must plan to pay monthly usage costs. (Evaluate the underlined text)",
    "options": ["No change is needed", "Deploy a VPN", "pay to transfer all the website data to Azure", "reduce the number of connections to the website"],
    "answer": 0,
    "explanation": "Azure uses a pay-as-you-go model, so you must plan to pay monthly usage costs for the resources you consume."
  },
  {
    "id": 31,
    "question": "An organization that hosts its infrastructure in a private cloud can decommission its data center. (Evaluate the underlined text)",
    "options": ["No change is needed", "in a hybrid cloud", "in the public cloud", "on a Hyper-V host"],
    "answer": 2,
    "explanation": "An organization that hosts its infrastructure in a public cloud can decommission its data center, as the hardware is managed by the cloud provider."
  },
  {
    "id": 51,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are examples of Azure PaaS solutions, so this solution meets the goal."
  },
  {
    "id": 52,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure virtual machines are an Infrastructure as a Service (IaaS) solution, not PaaS. Therefore, this solution does not meet the goal."
  },
  {
    "id": 53,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure Storage accounts are an Infrastructure as a Service (IaaS) solution, not PaaS. Therefore, this solution does not meet the goal."
  },
  {
    "id": 54,
    "question": "Your company hosts an accounting app named App1 that has low usage during the first three weeks of each month and very high usage during the last week. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?",
    "options": ["high availability", "high latency", "elasticity", "load balancing"],
    "answer": 2,
    "explanation": "Elasticity is the ability to provide additional compute resources when needed and reduce them when not needed to reduce costs. Autoscaling is an example of elasticity."
  },
  {
    "id": 55,
    "question": "You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?",
    "options": ["software as a service (SaaS)", "platform as a service (PaaS)", "infrastructure as a service (IaaS)", "database as a service (DaaS)"],
    "answer": 1,
    "explanation": "Azure App Service is a PaaS offering that lets you create web apps without managing the underlying infrastructure, minimizing administrative effort."
  },
  {
    "id": 56,
    "question": "You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users while minimizing capital and operational expenditure costs. What should you include in the recommendation?",
    "options": ["a complete migration to the public cloud", "an additional data center", "a private cloud", "a hybrid cloud"],
    "answer": 3,
    "explanation": "A hybrid cloud allows you to continue using on-premises servers while adding new servers in the public cloud, minimizing capital expenditure costs."
  },
  {
    "id": 57,
    "question": "You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?",
    "options": ["The public cloud is owned by the public, NOT a private corporation", "The public cloud is a crowd-sourcing solution", "All public cloud resources can be freely accessed by every member of the public", "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud"],
    "answer": 3,
    "explanation": "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud, managed by the cloud provider."
  },
  {
    "id": 58,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "This answer does not specify that the scale set will be configured across multiple data centers or availability zones, so it does not guarantee protection from a single data center failure."
  },
  {
    "id": 59,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Availability Zones are physically separate zones within an Azure region. Deploying VMs across multiple zones protects against a single data center failure."
  },
  {
    "id": 60,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "By deploying virtual machines to two or more regions, you are deploying them to multiple data centers, ensuring availability if a single data center fails."
  },
  {
    "id": 61,
    "question": "You have 1,000 virtual machines hosted on Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use. Which expenditure model should you identify?",
    "options": ["operational", "elastic", "capital", "scalable"],
    "answer": 0,
    "explanation": "Moving to the public cloud switches the expenditure model from capital expenditure (buying hardware) to operating expenditure (paying for service as you use it)."
  },
  {
    "id": 62,
    "question": "Your company plans to migrate several servers to Azure virtual machines. You need to identify which administrative responsibilities will be reduced after the planned migration. Which two responsibilities should you identify? (Choose two)",
    "options": ["Replacing failed server hardware", "Backing up application data", "Managing physical server security", "Updating server operating systems", "Managing permissions to shared documents"],
    "answer": [0, 2],
    "explanation": "Microsoft manages the physical servers in Azure. Therefore, replacing failed server hardware and managing physical server security are reduced responsibilities."
  },
  {
    "id": 64,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure Cloud Shell is a browser-based shell experience. Being browser-based, it can be run on a browser from a tablet that runs the Android operating system."
  },
  {
    "id": 65,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the PowerApps portal. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "PowerApps lets you quickly build business applications with little or no code. It is not used to create Azure virtual machines."
  },
  {
    "id": 66,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the Azure portal. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Azure portal is a web-based, unified console. Being web-based, it can be run on a browser from a tablet that runs the Android operating system."
  },
  {
    "id": 67,
    "question": "An Azure region contains one or more data centers that are connected by using a low-latency network. (Evaluate the underlined text)",
    "options": ["No change is needed", "Is found in each country where Microsoft has a subsidiary office", "Can be found in every country in Europe and the Americas only", "Contains one or more data centers that are connected by using a high-latency network"],
    "answer": 0,
    "explanation": "A region is a set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network."
  },
  {
    "id": 68,
    "question": "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must be deployed to a separate virtual network. (Evaluate the underlined text)",
    "options": ["No change is needed", "run a different operating system than the other virtual machines", "be deployed to a separate resource group", "have two network interfaces"],
    "answer": 0,
    "explanation": "The only way to separate VM1 from the other servers in networking terms is to place the server in a different virtual network."
  },
  {
    "id": 69,
    "question": "When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines to the same Azure region. (Evaluate the underlined text)",
    "options": ["No change is needed", "by using the same Azure Resource Manager template", "to the same resource group", "to the same availability zone"],
    "answer": 2,
    "explanation": "To delegate permissions simultaneously, you should deploy the virtual machines to the same resource group and assign permissions at the resource group level."
  },
  {
    "id": 70,
    "question": "A team of developers plans to deploy, and then remove, 50 customized virtual machines each week. Thirty run Windows Server 2016 and 20 run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required. What should you recommend?",
    "options": ["Azure Reserved Virtual Machines (VM) Instances", "Azure virtual machine scale sets", "Azure DevTest Labs", "Microsoft Managed Desktop"],
    "answer": 2,
    "explanation": "Azure DevTest Labs creates labs consisting of pre-configured bases or ARM templates, allowing you to quickly provision and decommission Windows and Linux environments."
  },
  {
    "id": 71,
    "question": "One of the benefits of Azure SQL Data Warehouse is that high availability is built into the platform. (Evaluate the underlined text)",
    "options": ["No change is needed", "automatic scaling", "data compression", "versioning"],
    "answer": 0,
    "explanation": "Azure SQL Data Warehouse (now Azure Synapse Analytics) is a PaaS offering. As with all PaaS services from Microsoft, it offers high availability features built into the platform."
  },
  {
    "id": 72,
    "question": "A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use? (Choose two)",
    "options": ["Command Prompt", "Azure Resource Explorer", "Windows PowerShell", "Windows Defender Firewall", "Network and Sharing Center"],
    "answer": [0, 2],
    "explanation": "For Windows, the Azure CLI is installed via an MSI, which gives you access to the CLI through the Windows Command Prompt (CMD) or PowerShell."
  },
  {
    "id": 73,
    "question": "You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution. Which two solutions should you recommend? (Choose two)",
    "options": ["Azure Data Lake", "Azure Cosmos DB", "Azure SQL Data Warehouse", "Azure SQL Database", "Azure Database for PostgreSQL"],
    "answer": [0, 2],
    "explanation": "You can use Power BI to analyze and visualize data stored in Azure Data Lake and Azure SQL Data Warehouse, which are suitable for infrequently accessed large datasets."
  },
  {
    "id": 74,
    "question": "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?",
    "options": ["a physical server failure", "an Azure region failure", "a storage failure", "an Azure data center failure"],
    "answer": 3,
    "explanation": "Availability Zones are unique physical locations within an Azure region, each made up of one or more data centers. They protect applications and data from data center failures."
  },
  {
    "id": 75,
    "question": "You have a virtual machine named VM1 that runs Windows Server 2016 in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?",
    "options": ["Azure Service Fabric", "Azure Monitor", "Azure virtual machines", "Azure Advisor"],
    "answer": 2,
    "explanation": "In the Azure virtual machines page in the Azure portal, the 'Maintenance Status' column will display service issues or host server maintenance that could affect your virtual machine."
  },
  {
    "id": 76,
    "question": "You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables client computers on your on-premises network to communicate to the Azure virtual machines. Which two Azure resources should you include in the recommendation? (Choose two)",
    "options": ["a virtual network gateway", "a load balancer", "an application gateway", "a virtual network", "a gateway subnet"],
    "answer": [0, 4],
    "explanation": "You need to configure a VPN to connect the on-premises network to the Azure virtual network. This requires a Virtual Network Gateway located in a dedicated 'GatewaySubnet'."
  },
  {
    "id": 77,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "With Azure Cloud Shell, you can create virtual machines using Bash or PowerShell. It is a browser-accessible shell, making it usable from an Android laptop."
  },
  {
    "id": 78,
    "question": "Your company plans to move several servers to Azure. The company's compliance policy states that a server named FinServer must be on a separate network segment. Which Azure solution should you recommend?",
    "options": ["a resource group for FinServer and another for all other servers", "a virtual network for FinServer and another virtual network for all other servers", "a VPN for FinServer and a virtual network gateway for each other server", "one resource group for all servers and a resource lock for FinServer"],
    "answer": 1,
    "explanation": "Networks in Azure are known as virtual networks. The only way to separate FinServer from the other servers in networking terms is to place it in a different virtual network."
  },
  {
    "id": 79,
    "question": "Your company plans to start using Azure and will migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?",
    "options": ["a subscription", "a resource group", "a virtual network", "a management group"],
    "answer": 0,
    "explanation": "The first thing you create in Azure is a subscription. You can think of an Azure subscription as an 'Azure account' that you get billed for."
  },
  {
    "id": 80,
    "question": "You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution. What should you include in the recommendation?",
    "options": ["a web app", "a server image in Azure Marketplace", "a logic app", "an API app"],
    "answer": 2,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows, such as sending email notifications based on rules."
  },
  {
    "id": 81,
    "question": "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?",
    "options": ["an application gateway", "an Azure ExpressRoute circuit", "a content delivery network (CDN)", "an Azure Traffic Manager profile"],
    "answer": 2,
    "explanation": "A content delivery network (CDN) stores cached content on edge servers in point-of-presence (POP) locations that are close to end users, minimizing latency for large video files."
  },
  {
    "id": 82,
    "question": "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify? (Choose two)",
    "options": ["Azure Data Lake", "Azure Queue storage", "Azure File Storage", "Azure IoT Hub", "Azure Notification Hubs"],
    "answer": [0, 3],
    "explanation": "IoT Hub provides data from millions of sensors, and it can route messages to Azure Data Lake Storage for long-term retention and analytics."
  },
  {
    "id": 83,
    "question": "Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials. What should you include?",
    "options": ["Azure Key Vault", "Azure Information Protection", "Azure Security Center", "Azure Multi-Factor Authentication (MFA)"],
    "answer": 0,
    "explanation": "Azure Key Vault is a secure store for sensitive information. You can store administrative credentials in the Key Vault so there is no need to store them as plain text in deployment scripts."
  },
  {
    "id": 84,
    "question": "If a resource group named RG1 has a delete lock, only a member of the global administrators group can delete RG1. (Evaluate the underlined text)",
    "options": ["No change is needed", "the delete lock must be removed before an administrator", "an Azure policy must be modified before an administrator", "an Azure tag must be added before an administrator"],
    "answer": 1,
    "explanation": "If a resource group has a delete lock, the lock must be removed before anyone, including global administrators, can delete the resource group."
  },
  {
    "id": 85,
    "question": "Azure Germany can be used by legal residents of Germany only. (Evaluate the underlined text)",
    "options": ["no change is needed", "only enterprises that are registered in Germany", "only enterprises that purchase their Azure licenses from a partner based in Germany", "any user or enterprise that requires its data to reside in Germany"],
    "answer": 3,
    "explanation": "Azure Germany is available to eligible customers and partners globally who intend to do business in the EU/EFTA and require their data to reside in Germany."
  },
  {
    "id": 86,
    "question": "After you create a virtual machine, you need to modify the network security group (NSG) to allow connections from TCP port 8080 to the virtual machine. (Evaluate the underlined text)",
    "options": ["No change is needed", "virtual network gateway", "virtual network", "route table"],
    "answer": 0,
    "explanation": "To allow specific port connections to a virtual machine, you must modify the inbound security rules of the network security group (NSG) associated with the VM."
  },
    {
    "id": 16,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based load balancing solution. It is not used to ensure that a virtual machine is accessible from the Internet over HTTP. You need to modify a network security group or Azure Firewall."
  },
  {
    "id": 17,
    "question": "You need to ensure that when Azure Active Directory (Azure AD) users connect to Azure AD from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?",
    "options": ["Azure AD Connect Health", "Azure AD Privileged Identity Management", "Azure Advanced Threat Protection (ATP)", "Azure AD Identity Protection"],
    "answer": 3,
    "explanation": "Azure AD Identity Protection includes sign-in risk policies. One risk detection type is Anonymous IP Address, which can be configured to require users to change their password."
  },
  {
    "id": 18,
    "question": "Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?",
    "options": ["network security groups (NSGs)", "Azure Service Bus", "a local network gateway", "a route filter"],
    "answer": 0,
    "explanation": "A network security group works like a firewall. You can attach it to a virtual network or subnet to restrict traffic between resources such as virtual machines."
  },
  {
    "id": 19,
    "question": "To what should an application connect to retrieve security tokens?",
    "options": ["an Azure Storage account", "Azure Active Directory (Azure AD)", "a certificate store", "an Azure key vault"],
    "answer": 1,
    "explanation": "Applications connect to Azure Active Directory (Azure AD) to retrieve security tokens for authentication and authorization."
  },
  {
    "id": 20,
    "question": "Resource groups provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions. (Evaluate the underlined text)",
    "options": ["No change is needed", "Management groups", "Azure policies", "Azure App Service plans"],
    "answer": 1,
    "explanation": "Management groups provide a governance scope above subscriptions. You organize subscriptions into management groups to efficiently manage access, policies, and compliance."
  },
  {
    "id": 21,
    "question": "Your network contains an Active Directory forest with 5,000 user accounts. Your company plans to migrate all network resources to Azure and decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?",
    "options": ["Implement Azure Multi-Factor Authentication (MFA)", "Sync all the Active Directory user accounts to Azure Active Directory (Azure AD)", "Instruct all users to change their password", "Create a guest user account in Azure AD for each user"],
    "answer": 1,
    "explanation": "Syncing the Active Directory user accounts to Azure AD (using Azure AD Connect) is the easiest way to migrate identities and minimize impact on users."
  },
  {
    "id": 22,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Basic support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "The Basic support plan does not have any technical support for engineers. Access to Support Engineers via email or phone is available in Premier, Professional Direct, and Standard plans."
  },
  {
    "id": 23,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Standard support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Standard, Professional Direct, and Premier support plans have technical support for engineers via email and phone."
  },
  {
    "id": 24,
    "question": "Which of the following options is True regarding Azure File Sync?",
    "options": ["Upload/Download files using a physical device", "Copy blobs or files to or from your storage account using the command line", "Download/upload files and blobs in your Azure Storage Account using a GUI-based app", "Cloud Tiering: most frequently accessed files are replicated locally, while infrequently accessed files are stored in Azure"],
    "answer": 3,
    "explanation": "Azure File Sync helps configure cloud tiering so the most frequently accessed files are replicated locally, while infrequently accessed files are kept in the cloud until requested."
  },
  {
    "id": 25,
    "question": "Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan that minimizes costs. Which support plan should you recommend?",
    "options": ["Premier", "Developer", "Professional Direct", "Standard"],
    "answer": 1,
    "explanation": "Architecture support is available as 'General guidance' for the Developer support plan, making it the most cost-effective option for this requirement."
  },
  {
    "id": 26,
    "question": "What is required to use Azure Cost Management?",
    "options": ["a Dev/Test subscription", "Software Assurance", "an Enterprise Agreement (EA)", "a pay-as-you-go subscription"],
    "answer": 3,
    "explanation": "Cost Management includes usage and purchases for Enterprise Agreement (EA) accounts, Microsoft Customer Agreement accounts, and individual subscriptions with pay-as-you-go rates."
  },
  {
    "id": 27,
    "question": "Your Azure trial account expired last week. You are now unable to create additional Azure Active Directory (Azure AD) user accounts. (Evaluate the underlined text)",
    "options": ["No change is needed", "start an existing Azure virtual machine", "access your data stored in Azure", "access the Azure portal"],
    "answer": 1,
    "explanation": "You are not charged for Azure Active Directory user accounts, so you can continue to create them. However, you cannot start a VM after a trial expires because it becomes chargeable."
  },
  {
    "id": 28,
    "question": "You have several virtual machines in an Azure subscription. You create a new subscription. The virtual machines cannot be moved to the new subscription. (Evaluate the underlined text)",
    "options": ["No change is needed", "The virtual machines can be moved to the new subscription", "The virtual machines can be moved only if they are all in the same resource group", "The virtual machines can be moved only if they run Windows Server 2016"],
    "answer": 1,
    "explanation": "Virtual machines and their associated resources can be moved to a different subscription by using the Azure portal or Azure CLI."
  },
  {
    "id": 29,
    "question": "Which two types of customers are eligible to use Azure Government to develop a cloud solution? (Choose two)",
    "options": ["a Canadian government contractor", "a European government contractor", "a United States government entity", "a United States government contractor", "a European government entity"],
    "answer": [2, 3],
    "explanation": "Azure Government is a sovereign cloud built exclusively for US government agencies and their solution providers."
  },
  {
    "id": 30,
    "question": "When planning to migrate a public website to Azure, you must plan to pay monthly usage costs. (Evaluate the underlined text)",
    "options": ["No change is needed", "Deploy a VPN", "pay to transfer all the website data to Azure", "reduce the number of connections to the website"],
    "answer": 0,
    "explanation": "Azure uses a pay-as-you-go model, so you must plan to pay monthly usage costs for the resources you consume."
  },
  {
    "id": 31,
    "question": "An organization that hosts its infrastructure in a private cloud can decommission its data center. (Evaluate the underlined text)",
    "options": ["No change is needed", "in a hybrid cloud", "in the public cloud", "on a Hyper-V host"],
    "answer": 2,
    "explanation": "An organization that hosts its infrastructure in a public cloud can decommission its data center, as the hardware is managed by the cloud provider."
  },
  {
    "id": 51,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are examples of Azure PaaS solutions, so this solution meets the goal."
  },
  {
    "id": 52,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure virtual machines are an Infrastructure as a Service (IaaS) solution, not PaaS. Therefore, this solution does not meet the goal."
  },
  {
    "id": 53,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure Storage accounts are an Infrastructure as a Service (IaaS) solution, not PaaS. Therefore, this solution does not meet the goal."
  },
  {
    "id": 54,
    "question": "Your company hosts an accounting app named App1 that has low usage during the first three weeks of each month and very high usage during the last week. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?",
    "options": ["high availability", "high latency", "elasticity", "load balancing"],
    "answer": 2,
    "explanation": "Elasticity is the ability to provide additional compute resources when needed and reduce them when not needed to reduce costs. Autoscaling is an example of elasticity."
  },
  {
    "id": 55,
    "question": "You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?",
    "options": ["software as a service (SaaS)", "platform as a service (PaaS)", "infrastructure as a service (IaaS)", "database as a service (DaaS)"],
    "answer": 1,
    "explanation": "Azure App Service is a PaaS offering that lets you create web apps without managing the underlying infrastructure, minimizing administrative effort."
  },
  {
    "id": 56,
    "question": "You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users while minimizing capital and operational expenditure costs. What should you include in the recommendation?",
    "options": ["a complete migration to the public cloud", "an additional data center", "a private cloud", "a hybrid cloud"],
    "answer": 3,
    "explanation": "A hybrid cloud allows you to continue using on-premises servers while adding new servers in the public cloud, minimizing capital expenditure costs."
  },
  {
    "id": 57,
    "question": "You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?",
    "options": ["The public cloud is owned by the public, NOT a private corporation", "The public cloud is a crowd-sourcing solution", "All public cloud resources can be freely accessed by every member of the public", "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud"],
    "answer": 3,
    "explanation": "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud, managed by the cloud provider."
  },
  {
    "id": 58,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "This answer does not specify that the scale set will be configured across multiple data centers or availability zones, so it does not guarantee protection from a single data center failure."
  },
  {
    "id": 59,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Availability Zones are physically separate zones within an Azure region. Deploying VMs across multiple zones protects against a single data center failure."
  },
  {
    "id": 60,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "By deploying virtual machines to two or more regions, you are deploying them to multiple data centers, ensuring availability if a single data center fails."
  },
  {
    "id": 61,
    "question": "You have 1,000 virtual machines hosted on Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use. Which expenditure model should you identify?",
    "options": ["operational", "elastic", "capital", "scalable"],
    "answer": 0,
    "explanation": "Moving to the public cloud switches the expenditure model from capital expenditure (buying hardware) to operating expenditure (paying for service as you use it)."
  },
  {
    "id": 62,
    "question": "Your company plans to migrate several servers to Azure virtual machines. You need to identify which administrative responsibilities will be reduced after the planned migration. Which two responsibilities should you identify? (Choose two)",
    "options": ["Replacing failed server hardware", "Backing up application data", "Managing physical server security", "Updating server operating systems", "Managing permissions to shared documents"],
    "answer": [0, 2],
    "explanation": "Microsoft manages the physical servers in Azure. Therefore, replacing failed server hardware and managing physical server security are reduced responsibilities."
  },
  {
    "id": 64,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure Cloud Shell is a browser-based shell experience. Being browser-based, it can be run on a browser from a tablet that runs the Android operating system."
  },
  {
    "id": 65,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the PowerApps portal. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "PowerApps lets you quickly build business applications with little or no code. It is not used to create Azure virtual machines."
  },
  {
    "id": 66,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the Azure portal. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Azure portal is a web-based, unified console. Being web-based, it can be run on a browser from a tablet that runs the Android operating system."
  },
  {
    "id": 67,
    "question": "An Azure region contains one or more data centers that are connected by using a low-latency network. (Evaluate the underlined text)",
    "options": ["No change is needed", "Is found in each country where Microsoft has a subsidiary office", "Can be found in every country in Europe and the Americas only", "Contains one or more data centers that are connected by using a high-latency network"],
    "answer": 0,
    "explanation": "A region is a set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network."
  },
  {
    "id": 68,
    "question": "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must be deployed to a separate virtual network. (Evaluate the underlined text)",
    "options": ["No change is needed", "run a different operating system than the other virtual machines", "be deployed to a separate resource group", "have two network interfaces"],
    "answer": 0,
    "explanation": "The only way to separate VM1 from the other servers in networking terms is to place the server in a different virtual network."
  },
  {
    "id": 69,
    "question": "When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines to the same Azure region. (Evaluate the underlined text)",
    "options": ["No change is needed", "by using the same Azure Resource Manager template", "to the same resource group", "to the same availability zone"],
    "answer": 2,
    "explanation": "To delegate permissions simultaneously, you should deploy the virtual machines to the same resource group and assign permissions at the resource group level."
  },
  {
    "id": 70,
    "question": "A team of developers plans to deploy, and then remove, 50 customized virtual machines each week. Thirty run Windows Server 2016 and 20 run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required. What should you recommend?",
    "options": ["Azure Reserved Virtual Machines (VM) Instances", "Azure virtual machine scale sets", "Azure DevTest Labs", "Microsoft Managed Desktop"],
    "answer": 2,
    "explanation": "Azure DevTest Labs creates labs consisting of pre-configured bases or ARM templates, allowing you to quickly provision and decommission Windows and Linux environments."
  },
  {
    "id": 71,
    "question": "One of the benefits of Azure SQL Data Warehouse is that high availability is built into the platform. (Evaluate the underlined text)",
    "options": ["No change is needed", "automatic scaling", "data compression", "versioning"],
    "answer": 0,
    "explanation": "Azure SQL Data Warehouse (now Azure Synapse Analytics) is a PaaS offering. As with all PaaS services from Microsoft, it offers high availability features built into the platform."
  },
  {
    "id": 72,
    "question": "A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use? (Choose two)",
    "options": ["Command Prompt", "Azure Resource Explorer", "Windows PowerShell", "Windows Defender Firewall", "Network and Sharing Center"],
    "answer": [0, 2],
    "explanation": "For Windows, the Azure CLI is installed via an MSI, which gives you access to the CLI through the Windows Command Prompt (CMD) or PowerShell."
  },
  {
    "id": 73,
    "question": "You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution. Which two solutions should you recommend? (Choose two)",
    "options": ["Azure Data Lake", "Azure Cosmos DB", "Azure SQL Data Warehouse", "Azure SQL Database", "Azure Database for PostgreSQL"],
    "answer": [0, 2],
    "explanation": "You can use Power BI to analyze and visualize data stored in Azure Data Lake and Azure SQL Data Warehouse, which are suitable for infrequently accessed large datasets."
  },
  {
    "id": 74,
    "question": "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?",
    "options": ["a physical server failure", "an Azure region failure", "a storage failure", "an Azure data center failure"],
    "answer": 3,
    "explanation": "Availability Zones are unique physical locations within an Azure region, each made up of one or more data centers. They protect applications and data from data center failures."
  },
  {
    "id": 75,
    "question": "You have a virtual machine named VM1 that runs Windows Server 2016 in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?",
    "options": ["Azure Service Fabric", "Azure Monitor", "Azure virtual machines", "Azure Advisor"],
    "answer": 2,
    "explanation": "In the Azure virtual machines page in the Azure portal, the 'Maintenance Status' column will display service issues or host server maintenance that could affect your virtual machine."
  },
  {
    "id": 76,
    "question": "You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables client computers on your on-premises network to communicate to the Azure virtual machines. Which two Azure resources should you include in the recommendation? (Choose two)",
    "options": ["a virtual network gateway", "a load balancer", "an application gateway", "a virtual network", "a gateway subnet"],
    "answer": [0, 4],
    "explanation": "You need to configure a VPN to connect the on-premises network to the Azure virtual network. This requires a Virtual Network Gateway located in a dedicated 'GatewaySubnet'."
  },
  {
    "id": 77,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "With Azure Cloud Shell, you can create virtual machines using Bash or PowerShell. It is a browser-accessible shell, making it usable from an Android laptop."
  },
  {
    "id": 78,
    "question": "Your company plans to move several servers to Azure. The company's compliance policy states that a server named FinServer must be on a separate network segment. Which Azure solution should you recommend?",
    "options": ["a resource group for FinServer and another for all other servers", "a virtual network for FinServer and another virtual network for all other servers", "a VPN for FinServer and a virtual network gateway for each other server", "one resource group for all servers and a resource lock for FinServer"],
    "answer": 1,
    "explanation": "Networks in Azure are known as virtual networks. The only way to separate FinServer from the other servers in networking terms is to place it in a different virtual network."
  },
  {
    "id": 79,
    "question": "Your company plans to start using Azure and will migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?",
    "options": ["a subscription", "a resource group", "a virtual network", "a management group"],
    "answer": 0,
    "explanation": "The first thing you create in Azure is a subscription. You can think of an Azure subscription as an 'Azure account' that you get billed for."
  },
  {
    "id": 80,
    "question": "You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution. What should you include in the recommendation?",
    "options": ["a web app", "a server image in Azure Marketplace", "a logic app", "an API app"],
    "answer": 2,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows, such as sending email notifications based on rules."
  },
  {
    "id": 81,
    "question": "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?",
    "options": ["an application gateway", "an Azure ExpressRoute circuit", "a content delivery network (CDN)", "an Azure Traffic Manager profile"],
    "answer": 2,
    "explanation": "A content delivery network (CDN) stores cached content on edge servers in point-of-presence (POP) locations that are close to end users, minimizing latency for large video files."
  },
  {
    "id": 82,
    "question": "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify? (Choose two)",
    "options": ["Azure Data Lake", "Azure Queue storage", "Azure File Storage", "Azure IoT Hub", "Azure Notification Hubs"],
    "answer": [0, 3],
    "explanation": "IoT Hub provides data from millions of sensors, and it can route messages to Azure Data Lake Storage for long-term retention and analytics."
  },
  {
    "id": 83,
    "question": "Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials. What should you include?",
    "options": ["Azure Key Vault", "Azure Information Protection", "Azure Security Center", "Azure Multi-Factor Authentication (MFA)"],
    "answer": 0,
    "explanation": "Azure Key Vault is a secure store for sensitive information. You can store administrative credentials in the Key Vault so there is no need to store them as plain text in deployment scripts."
  },
  {
    "id": 84,
    "question": "If a resource group named RG1 has a delete lock, only a member of the global administrators group can delete RG1. (Evaluate the underlined text)",
    "options": ["No change is needed", "the delete lock must be removed before an administrator", "an Azure policy must be modified before an administrator", "an Azure tag must be added before an administrator"],
    "answer": 1,
    "explanation": "If a resource group has a delete lock, the lock must be removed before anyone, including global administrators, can delete the resource group."
  },
  {
    "id": 85,
    "question": "Azure Germany can be used by legal residents of Germany only. (Evaluate the underlined text)",
    "options": ["no change is needed", "only enterprises that are registered in Germany", "only enterprises that purchase their Azure licenses from a partner based in Germany", "any user or enterprise that requires its data to reside in Germany"],
    "answer": 3,
    "explanation": "Azure Germany is available to eligible customers and partners globally who intend to do business in the EU/EFTA and require their data to reside in Germany."
  },
  {
    "id": 86,
    "question": "After you create a virtual machine, you need to modify the network security group (NSG) to allow connections from TCP port 8080 to the virtual machine. (Evaluate the underlined text)",
    "options": ["No change is needed", "virtual network gateway", "virtual network", "route table"],
    "answer": 0,
    "explanation": "To allow specific port connections to a virtual machine, you must modify the inbound security rules of the network security group (NSG) associated with the VM."
  },
  {
    "id": 87,
    "question": "Which Azure service should you use to store certificates?",
    "options": ["Azure Security Center", "an Azure Storage account", "Azure Key Vault", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Azure Key Vault is a secure store for various types of sensitive information including passwords and certificates."
  },
  {
    "id": 88,
    "question": "You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines only in RG1. What should you use?",
    "options": ["a lock", "an Azure role", "a tag", "an Azure policy"],
    "answer": 3,
    "explanation": "Azure policies can be used to define requirements for resource properties during deployment. You can create an Azure policy assigned to the resource group that denies the creation of virtual machines."
  },
  {
    "id": 89,
    "question": "What can Azure Information Protection encrypt?",
    "options": ["network traffic", "documents and email messages", "an Azure Storage account", "an Azure SQL database"],
    "answer": 1,
    "explanation": "Azure Information Protection can encrypt documents and emails by applying labels that stay with the documents independently of their location."
  },
  {
    "id": 90,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["the Knowledge Center website", "the Advisor blade from the Azure portal", "Compliance Manager from the Security Trust Portal", "the Security Center blade from the Azure portal"],
    "answer": 2,
    "explanation": "Compliance Manager in the Service Trust Portal is a workflow-based risk assessment tool that helps you track, assign, and verify your organization's regulatory compliance activities."
  },
  {
    "id": 91,
    "question": "Your company implements Azure policies to automatically add a watermark to Microsoft Word documents that contain credit card information. (Evaluate the underlined text)",
    "options": ["No change is needed", "DDoS protection", "Azure Information Protection", "Azure Active Directory (Azure AD) Identity Protection"],
    "answer": 2,
    "explanation": "Azure Information Protection is used to automatically add a watermark to Microsoft Word documents that contain credit card information."
  },
  {
    "id": 92,
    "question": "From Azure Monitor, you can view which user turned off a specific virtual machine during the last 14 days. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Event Hubs", "Azure Activity Log", "Azure Service Health"],
    "answer": 2,
    "explanation": "You would use the Azure Activity Log, not Azure Monitor, to view which user turned off a specific virtual machine during the last 14 days."
  },
  {
    "id": 93,
    "question": "You have an Azure virtual network named VNET1 in a resource group named RG1. You assign an Azure policy specifying that virtual networks are not an allowed resource type in RG1. VNET1 is deleted automatically. (Evaluate the underlined text)",
    "options": ["No change is needed", "is moved automatically to another resource group", "continues to function normally", "is now a read-only object"],
    "answer": 2,
    "explanation": "Existing resources are not deleted when a policy is applied. The virtual network would continue to function normally, but it would be marked as non-compliant."
  },
  {
    "id": 94,
    "question": "Your company has an Azure environment that contains resources in several regions. A company policy states that administrators must only be allowed to create additional Azure resources in a region in the country where their office is located. What should you create?",
    "options": ["a read-only lock", "an Azure policy", "a management group", "a reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to define requirements for resource properties during deployment, such as using the 'Allowed Locations' policy."
  },
  {
    "id": 95,
    "question": "Authorization is the process of verifying a user's credentials. (Evaluate the underlined text)",
    "options": ["No change is needed", "Authentication", "Federation", "Ticketing"],
    "answer": 1,
    "explanation": "Authentication, not authorization, is the process of verifying a user's credentials. Authorization is what you're allowed to do once you've been authenticated."
  },
  {
    "id": 96,
    "question": "You need to configure an Azure solution that meets the following requirements: Secures websites from attacks, Generates reports that contain details of attempted attacks. What should you include in the solution?",
    "options": ["Azure Firewall", "a network security group (NSG)", "Azure Information Protection", "DDoS protection"],
    "answer": 3,
    "explanation": "DDoS Protection Standard can generate reports that contain details of attempted attacks, unlike the Basic tier."
  },
  {
    "id": 97,
    "question": "Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company's regional requirements. What should you use?",
    "options": ["the Knowledge Center", "Azure Marketplace", "the Azure portal", "the Trust Center"],
    "answer": 3,
    "explanation": "You can view a list of compliance certifications in the Trust Center to determine whether Azure meets your regional requirements."
  },
  {
    "id": 98,
    "question": "Azure Key Vault is used to store secrets for Azure Active Directory (Azure AD) user accounts. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Active Directory (Azure AD) administrative accounts", "Personally Identifiable Information (PII)", "server applications"],
    "answer": 3,
    "explanation": "Centralizing storage of application secrets in Azure Key Vault allows you to control their distribution, particularly for server applications."
  },
  {
    "id": 99,
    "question": "You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits. What should you do to increase the limits?",
    "options": ["Create a service health alert", "Upgrade your support plan", "Modify an Azure policy", "Create a new support request"],
    "answer": 3,
    "explanation": "You can request a quota limit increase by opening a support request and selecting 'Service and subscription limits (quotas)' for the Issue type."
  },
  {
    "id": 100,
    "question": "Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?",
    "options": ["tags", "templates", "locks", "policies"],
    "answer": 0,
    "explanation": "You can use resource tags to label Azure resources. When all Azure resources are tagged, you can generate reports to list all resources based on the value of the tag."
  },
  {
    "id": 101,
    "question": "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will automatically refund your bank account. (Evaluate the underlined text)",
    "options": ["No change is needed", "automatically migrate the resource to another subscription", "automatically credit your account", "send you a coupon code that you can redeem for Azure credits"],
    "answer": 2,
    "explanation": "If an SLA is not met, Microsoft will automatically credit your account, not refund your bank account directly."
  },
  {
    "id": 102,
    "question": "Below are some options of Azure resources. Can you identify which of these can be deployed as infrastructure as a service (IaaS)?",
    "options": ["Azure SQL Database", "Office 365", "API Management", "Virtual Machine (VM)"],
    "answer": 3,
    "explanation": "A VM is generally considered Infrastructure-as-a-Service, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 103,
    "question": "An organization you work for has to comply with internal compliance goals. The organization must have its Azure resources compliant with company standards. For this, ongoing evaluation of non-compliant resources is required. What would you recommend as a solution to use in this situation?",
    "options": ["Azure Policies", "Azure Advisor", "Role-based access control (RBAC)", "Azure Monitor"],
    "answer": 0,
    "explanation": "Azure Policies are used to enforce compliance and evaluate non-compliant resources continuously."
  },
  {
    "id": 104,
    "question": "Microsoft Marketplace is used by companies as their primary source for enterprise level subscriptions to applications like Microsoft Office 365. Choose 'No change' if the statement is correct. If not, choose the correct option.",
    "options": ["Provides a way for organization to publish internal apps for easy access to users and business partners", "Is an open market place enabling potential customers to be in direct contact with solution providers", "No change", "Provides purchase and subscriptions link to certified cloud applications and solutions from Microsoft and its technology partners"],
    "answer": 3,
    "explanation": "Azure Marketplace provides purchase and subscription links to certified cloud applications and solutions from Microsoft and its technology partners."
  },
  {
    "id": 105,
    "question": "A company has just setup an Azure subscription and an Azure tenant. They want to use services that would fulfill different requirements. Which of the following can be used for the following requirement? 'Ensure that no one can accidentally delete resources that are part of a resource group'",
    "options": ["Azure resource locks", "Azure Policies", "Azure Blueprints", "Azure resource tags"],
    "answer": 0,
    "explanation": "Resource locks can be applied to individual resources, resource groups, or even an entire subscription to prevent accidental deletion."
  },
  {
    "id": 106,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more resource groups. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "A resource group is a logical container. Creating multiple resource groups does not ensure that the services are available if a single data center fails."
  },
  {
    "id": 107,
    "question": "If you want to integrate apps, systems, data and service across your company, which Azure service will you use for serverless workflow orchestration?",
    "options": ["Functions", "Apps Grid", "Logic Apps", "Bot Service"],
    "answer": 2,
    "explanation": "Azure Logic Apps is used for serverless workflow orchestration and integrating apps, systems, and data."
  },
  {
    "id": 108,
    "question": "You will be using Azure Monitor to collect data about your Azure infrastructure. Can you identify the type of data collection that requires you to enable diagnostics?",
    "options": ["Events Logs", "Linux Virtual Machine health", "Container workload performance", "Usage of Web applications"],
    "answer": 3,
    "explanation": "Diagnostic settings must be enabled to collect usage and performance data for Web applications in Azure Monitor."
  },
  {
    "id": 109,
    "question": "Autoscale is used by an Azure Service to add or remove resources. The purpose is to minimize costs and bring in optimum performance levels. Can you identify which Azure Service uses autoscale?",
    "options": ["Azure Service Health", "Azure Security Center", "Azure Monitor", "Azure Advisor"],
    "answer": 2,
    "explanation": "Azure Monitor provides the autoscale functionality to add or remove resources based on demand."
  },
  {
    "id": 110,
    "question": "What is guaranteed in an Azure Service Level Agreement (SLA)?",
    "options": ["uptime", "feature availability", "bandwidth", "performance"],
    "answer": 0,
    "explanation": "The SLA for virtual machines guarantees 'uptime'. The amount of uptime guaranteed depends on factors such as availability sets or zones."
  },
  {
    "id": 111,
    "question": "Microsoft has an Azure lifecycle Policy. Can you identify from the options below the correct time that Microsoft gives before retiring a guest operating system (OS)?",
    "options": ["12 months", "6 Months", "60 days", "24 months"],
  },
  {
    "id": 112,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Professional Direct support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Professional Direct support plan has technical support for engineers via email and phone."
  },
  {
    "id": 113,
    "question": "An automobile manufacturing company has asked your organization to build a solution for it. With this solution, the client wants to allow vehicles to send on board diagnostic sensory and vehicles telemetry data to cloud. The data will be used for analysis. The solution must allow you to identify individual from the data that is sent. Which of the following is the most suitable Azure solution for this situation?",
    "options": ["IOT Hub", "Notification Hub", "Event Hub", "IOT Central"],
    "answer": 3,
    "explanation": "Azure IoT Central is a fully managed SaaS solution that makes it easy to connect, monitor, and manage IoT assets at scale, including identifying individuals from telemetry data."
  },
  {
    "id": 114,
    "question": "Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. You need to recommend an Azure deployment that provides the ability to segment Azure for the departments. The solution must minimize administrative effort. What should you include in the recommendation?",
    "options": ["multiple subscriptions", "multiple Azure Active Directory (Azure AD) directories", "multiple regions", "multiple resource groups"],
    "answer": 0,
    "explanation": "You are charged monthly for all resources in a subscription. To use different payment options or segment management per department, you will need to create a separate subscription per department."
  },
  {
    "id": 115,
    "question": "A company has the requirement to have an automated process in place which would upload logs to an Azure SQL database every week. Reports would then be generated from the SQL database. Which of the following would you use for this requirement?",
    "options": ["The AzCopy tool", "Azure Data Factory", "Azure HDInsight", "Data Migration Assistant"],
    "answer": 1,
    "explanation": "You can use Azure Data Factory to create a pipeline that can be used to copy data on a scheduled basis."
  },
  {
    "id": 116,
    "question": "A company is planning on deploying an application onto Azure. The application will be based on the .Net core programming language. The application would be hosted using Azure Web apps. Which of the following service would be best suited for fulfilling the requirement of 'Helps business analyse how many users actually return to the application'?",
    "options": ["Application Insights", "Azure Service Health", "Azure Advisor", "Azure Policies"],
    "answer": 0,
    "explanation": "Application Insights helps business analyze user retention and how many users actually return to the application."
  },
  {
    "id": 117,
    "question": "A company has setup an Azure subscription and an Azure tenant. They have purchased Premium P2 licenses. There are different departments that have different requirements for managing identities. Which of the following would you suggest for the Logistics department?",
    "options": ["Managed Service Identity", "Identity Protection", "Privileged Identity Management", "Azure AD Connect"],
    "answer": 2,
    "explanation": "Privileged Identity Management (PIM) fulfills the requirement for managing identities with different requirements, providing just-in-time privileged access."
  },
  {
    "id": 118,
    "question": "A company has developed a web service that is made available on a virtual machine deployed to a subnet in the Virtual network. An API Management service has been deployed, which will provide access to the API service hosted on the Virtual Machine. Consultant companies must be able to connect to the API over the Internet. Based on the configuration, would the API be available to the consultants over the Internet?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, API Management can be configured to expose APIs hosted on internal virtual machines to external consultants over the Internet."
  },
  {
    "id": 119,
    "question": "A company wants to deploy an application to Azure. The application has the below requirements: Give the ability to install and provide access to the full .Net framework, Allow administrative access to the operating system, Provide a level of redundancy if an Azure region fails. You decide to deploy 2 Azure Virtual Machines in 2 separate regions. And then you create a Traffic Manager Profile. Does this solution meet the requirement?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, this will meet all the requirements. Azure VMs provide OS access, and a Traffic Manager profile with a failover routing policy ensures redundancy."
  },
  {
    "id": 120,
    "question": "A team has an Azure CosmosDB account. A solution needs to be in place to generate an alert from Azure Log Analytics when a query request charge exceeds 40 units more than 10 times during a 10-minute window. Which of the following would you recommend? (Choose two)",
    "options": ["Create a search query to identify when the requestCharge_s exceeds 40.", "Create a search query to identify when the requestCharge_s exceeds 10.", "Create a search query to identify when the duration_s exceeds 10.", "Configure a period of 10 and a frequency of 10."],
    "answer": [0, 3],
    "explanation": "You need to create a search query for requestCharge_s > 40 and configure the alert rule with a period of 10 minutes and a frequency of 10 minutes."
  },
  {
    "id": 121,
    "question": "Our team needs to deploy a Virtual machine that will host a SQL Server. The Virtual machine will have 2 data disks, one for the log file and the other for the data files. You need to recommend a caching policy for each disk. Which of the following would you recommend for the data disk containing the logs?",
    "options": ["None", "ReadOnly", "WriteOnly", "ReadWrite"],
    "answer": 0,
    "explanation": "For SQL Server log files, the caching policy should be set to 'None' to ensure data integrity and optimal write performance."
  },
  {
    "id": 122,
    "question": "A company has setup an Azure subscription and an Azure tenant. You need to provide the development team to be able to start and stop Virtual Machines. The access needs to be granted on specific occasions only. You need to ensure the permission gets assigned and use the principle of least privilege. You also need to minimize costs. Which of the following security feature would you use for the requirement?",
    "options": ["Conditional Access policy", "Azure Policies", "Just in time VM access", "Privileged Identity Management"],
    "answer": 3,
    "explanation": "With Privileged Identity Management, you can implement just-in-time privileges for Azure resources, granting access only when needed."
  },
  {
    "id": 123,
    "question": "A company has deployed several applications across Windows and Linux Virtual machines in Azure. Log Analytics are being used to send the required data for alerting purposes for the Virtual Machines. You need to recommend which tables need to be queried for security related queries. Which of the following would you query for events from Windows Event Logs?",
    "options": ["Azure Activity", "Azure Diagnostics", "Event", "Syslog"],
    "answer": 2,
    "explanation": "The 'Event' table in Log Analytics contains data from Windows Event Logs."
  },
  {
    "id": 124,
    "question": "A company has the following on-premise data stores: A Microsoft SQL Server 2012 database, A Microsoft SQL Server 2008 database. The data needs to be migrated to Azure. Requirement 1: The data in the Microsoft SQL Server 2012 database needs to be migrated to an Azure SQL database. Requirement 2: The data in a table in the Microsoft SQL Server 2008 database needs to be migrated to an Azure CosmosDB account that uses the SQL API. Which of the following should be used to accomplish Requirement 2?",
    "options": ["AzCopy", "Azure CosmosDB Data Migration tool", "Data Management Gateway", "Data Migration Assistant"],
    "answer": 1,
    "explanation": "The Azure Cosmos DB Data Migration tool is used to import data from various sources, including SQL Server, into Azure Cosmos DB."
  },
  {
    "id": 125,
    "question": "A company is planning on deploying an Azure Web App to 2 regions. One of the key requirements is to ensure that the web app is always running if an Azure region fails. You need to ensure deployment costs are minimized. Which of the following service would you include in the deployment of the solution?",
    "options": ["Azure Functions", "Azure Traffic Manager", "Azure Application Gateway", "Azure Load Balancer"],
    "answer": 1,
    "explanation": "Azure Traffic Manager can route traffic to the healthy region in the event of a regional failure, ensuring high availability."
  },
  {
    "id": 126,
    "question": "A company has deployed several applications across Windows and Linux Virtual machines in Azure. Log Analytics are being used to send the required data for alerting purposes for the Virtual Machines. You need to recommend which tables need to be queried for security related queries. Which of the following would you query for events from Linux system logging?",
    "options": ["Azure Activity", "Azure Diagnostics", "Event", "Syslog"],
    "answer": 3,
    "explanation": "The 'Syslog' table in Log Analytics contains data from Linux system logging."
  },
  {
    "id": 127,
    "question": "A company is planning on deploying a stateless based application based on microservices using the Azure Service Fabric service. You need to design the infrastructure that would be required in the Azure Service Fabric service. Which of the following should you consider? (Choose two)",
    "options": ["The number of node types in the cluster", "The properties for each node type", "The network connectivity", "The service tier"],
    "answer": [0, 1],
    "explanation": "When designing an Azure Service Fabric cluster, you must consider the number of node types and the properties for each node type."
  },
  {
    "id": 153,
    "question": "Can you identify from below a Setup that represents a hybrid cloud model?",
    "options": ["An Azure Web Application Program interface that connects to an on-premises SQL Server database at an on-premises private datacenter", "An Azure Web job that makes calls to the Azure Representational state Transfer (REST) application program interface", "An Azure web Application that connects to an azure SQL Database", "An Azure function crawls the web for trending news"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure with public cloud resources, such as an Azure Web API connecting to an on-premises SQL Server."
  },
  {
    "id": 154,
    "question": "When planning to migrate a public website to Azure, you must plan to pay monthly usage costs. (Evaluate the underlined text)",
    "options": ["No change is needed", "Deploy a VPN", "pay to transfer all the website data to Azure", "reduce the number of connections to the website"],
    "answer": 0,
    "explanation": "Azure uses the pay-as-you-go model, so you must plan to pay monthly usage costs."
  },
  {
    "id": 156,
    "question": "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will automatically refund your bank account. (Evaluate the underlined text)",
    "options": ["No change is needed", "automatically migrate the resource to another subscription", "automatically credit your account", "send you a coupon code that you can redeem for Azure credits"],
    "answer": 2,
    "explanation": "If an SLA is not met, Microsoft will automatically credit your account, not refund your bank account directly."
  },
  {
    "id": 157,
    "question": "Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure for the departments? (Choose two)",
    "options": ["multiple subscriptions", "multiple Azure Active Directory (Azure AD) directories", "multiple regions", "multiple resource groups"],
    "answer": [0, 3],
    "explanation": "You can segment Azure for departments by creating multiple subscriptions or multiple resource groups, assigning administrators to each."
  },
  {
    "id": 158,
    "question": "If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least 12 months before. (Evaluate the underlined text)",
    "options": ["No change is needed", "6 months", "90 days", "30 days"],
    "answer": 0,
    "explanation": "For products governed by the Modern Lifecycle Policy, Microsoft will provide a minimum of 12 months' notification prior to ending support."
  },
  {
    "id": 161,
    "question": "A reservation is where you commit to pay for a resource (for example a virtual machine) for one or three years. This gives you a discounted price on the resource for the reservation period. (Evaluate the underlined text)",
    "options": ["No change is needed", "A spot instance", "A dev/test subscription", "A pay-as-you-go subscription"],
    "answer": 0,
    "explanation": "A reservation is where you commit to pay for a resource for one or three years to get a discounted price."
  },
  {
    "id": 162,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused network interfaces. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "You are not charged for unused network interfaces. Therefore, deleting unused network interfaces will not reduce the Azure costs for the company."

  },
  {
    "id": 163,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused public IP addresses. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "You are charged for public IP addresses. Therefore, deleting unused public IP addresses will reduce the Azure costs."
  },
    {
    "id": 164,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD), Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused user accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "You are not charged for user accounts. Therefore, deleting unused user accounts will not reduce the Azure costs for the company."
  },
  {
    "id": 165,
    "question": "A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a Standard support plan. (Evaluate the underlined text)",
    "options": ["No change is needed", "Developer", "Basic", "Premier"],
    "answer": 2,
    "explanation": "A Basic support plan provides 24x7 access to billing and subscription support, online self-help, documentation, and access to full set of Azure Advisor recommendations at the lowest cost."
  },
  {
    "id": 166,
    "question": "In which Azure support plans can you open a new support request?",
    "options": ["Premier and Professional Direct only", "Premier, Professional Direct, and Standard only", "Premier, Professional Direct, Standard, and Developer only", "Premier, Professional Direct, Standard, Developer, and Basic"],
    "answer": 3,
    "explanation": "You can open a support request in all Azure support plans, including the free Basic plan."
  },
  {
    "id": 167,
    "question": "You can create an Azure support request from support.microsoft.com. (Evaluate the underlined text)",
    "options": ["No change is needed", "the Azure portal", "the Knowledge Center", "the Security & Compliance admin center"],
    "answer": 1,
    "explanation": "You can create an Azure support request from the Help and Support blade in the Azure portal or from the context menu of an Azure resource."
  },
  {
    "id": 168,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "You are not charged for Azure Active Directory Groups. Therefore, deleting unused groups will not reduce your Azure costs."
  },
  {
    "id": 169,
    "question": "The Azure Standard support plan is the lowest cost option to receive 24x7 access to support engineers by phone. (Evaluate the underlined text)",
    "options": ["No change is needed", "Developer", "Basic", "Professional Direct"],
    "answer": 0,
    "explanation": "The Standard support plan is indeed the lowest cost option that provides 24x7 access to Support Engineers via email and phone."
  },
  {
    "id": 170,
    "question": "All Azure services that are in public preview are provided without any documentation. (Evaluate the underlined text)",
    "options": ["No change is needed", "only configurable from Azure CLI", "excluded from the Service Level Agreements", "only configurable from the Azure portal"],
    "answer": 2,
    "explanation": "Preview features are made available on the condition that you accept additional terms. They are excluded from Service Level Agreements (SLAs) and limited warranty."
  },
  {
    "id": 171,
    "question": "What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?",
    "options": ["uptime", "feature availability", "bandwidth", "performance"],
    "answer": 0,
    "explanation": "The SLA for virtual machines guarantees 'uptime'. The amount of uptime guaranteed depends on factors such as availability sets or zones."
  },
  {
    "id": 172,
    "question": "An Azure service is available to all Azure customers when it is in public preview. (Evaluate the underlined text)",
    "options": ["No change is needed", "private preview", "development", "an Enterprise Agreement (EA) subscription"],
    "answer": 0,
    "explanation": "Public Preview means that the service is in public beta and can be tried out by anyone with an Azure subscription."
  },
  {
    "id": 173,
    "question": "An organization deploys additional resources to Azure. It is decided that templates based on existing resources will be used while deploying. Consistent deployment must be ensured as it is critical. Which of the following would you suggest the organization should use?",
    "options": ["Azure Resource Groups", "Azure Resource Manager", "Azure Monitor", "Azure Security Center"],
    "answer": 1,
    "explanation": "Azure Resource Manager (ARM) provides a consistent management layer that enables you to create, update, and delete resources in your Azure account using templates."
  },
  {
    "id": 174,
    "question": "If you want to deploy, manage and monitor Azure resources, which of the following Azure management tools provides a graphic interface for doing so?",
    "options": ["Azure Command line interface", "Azure PowerShell", "Azure Resource Manager", "Azure Portal"],
    "answer": 3,
    "explanation": "The Azure Portal is the web-based, unified console that provides a graphical user interface to deploy, manage, and monitor all your Azure resources."
  },
  {
    "id": 175,
    "question": "An organization is operating with three Availability Zones (AZ). It is decided to deploy multiple instances of a web application across all three AZs. An Azure networking product is then configured so the service requests can be evenly distributed across all three instances. Which Azure networking product will be used?",
    "options": ["Content delivery network", "Application Gateway", "Load Balancer", "Web Application firewall"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, and it supports Availability Zones."
  },
  {
    "id": 176,
    "question": "Azure Cloud Shell uses which Azure resource to persist files?",
    "options": ["Container", "Storage account", "Virtual Machine (VM)", "App services web app"],
    "answer": 1,
    "explanation": "Azure Cloud Shell requires an Azure Files share to be mounted to persist files across sessions. This is backed by a Storage account."
  },
  {
    "id": 177,
    "question": "A company has multiple subscriptions. They want to create resources in different subscriptions. Is it possible to create resources in different subscriptions?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, you can create resources in any subscription you have access to. A single Azure AD tenant can contain multiple subscriptions."
  },
  {
    "id": 178,
    "question": "Your Azure trial account expired last week. You are now unable to create additional Azure Active Directory (Azure AD) user accounts. (Evaluate the underlined text)",
    "options": ["No change is needed", "start an existing Azure virtual machine", "access your data stored in Azure", "access the Azure portal"],
    "answer": 1,
    "explanation": "You are not charged for Azure AD user accounts, so you can continue to create them. However, you cannot start a VM after a trial expires because it becomes chargeable."
  },
  {
    "id": 179,
    "question": "Your organization has subscribed to an Azure Professional Direct service plan. A support ticket is raised with minimal business impact (Sev C) Severity. How many hours does this level of severity reflect for initial response?",
    "options": ["8 hours", "2 hours", "4 hours", "1 hour"],
    "answer": 2,
    "explanation": "For Professional Direct support, Severity C (Minimal business impact) has an initial response time objective of 4 hours."
  },
  {
    "id": 80,
    "question": "Your company has 10 departments. The company plans to implement an Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?",
    "options": ["a reservation", "a subscription", "a resource group", "a container instance"],
    "answer": 1,
    "explanation": "Your Azure costs are billed 'per subscription'. To use different payment options per department, you will need to create a separate subscription per department."
  },
  {
    "id": 181,
    "question": "Which statement accurately describes the Modern Lifecycle Policy for Azure services?",
    "options": ["Microsoft provides mainstream support for a service for five years.", "Microsoft provides a minimum of 12 months' notice before ending support for a service.", "After a service is made generally available, Microsoft provides support for the service for a minimum of four years.", "When a service is retired, you can purchase extended support for the service for up to five years."],
    "answer": 1,
    "explanation": "For products governed by the Modern Lifecycle Policy, Microsoft will provide a minimum of 12 months' notification prior to ending support if no successor product or service is offered."
  },
  {
    "id": 182,
    "question": "You can use Advisor recommendations in Azure to send email alerts when the cost of the current billing period for an Azure subscription exceeds a specified limit. (Evaluate the underlined text)",
    "options": ["No change is needed", "Access control (IAM)", "Budget alerts", "Compliance"],
    "answer": 2,
    "explanation": "Budget alerts notify you when spending, based on usage or cost, reaches or exceeds the amount defined in the alert condition of the budget."
  },
  {
    "id": 193,
    "question": "A company is planning on purchasing Azure AD Basic for their Azure account. Does the Azure AD Basic tier come with an SLA of 99.9%?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, Azure Active Directory Basic and Premium editions come with a financially backed 99.9% uptime SLA."
  },
  {
    "id": 194,
    "question": "A company needs to store 2 TB worth of data that is infrequently used. The data needs to be accessed via Power BI. Which of the following could be used as a cost-effective data layer for this requirement?",
    "options": ["Azure SQL databases", "Azure PostgreSQL", "Azure Cosmos DB", "Azure Data Lake"],
    "answer": 3,
    "explanation": "Azure Data Lake Storage is a cost-effective solution for storing large amounts of infrequently accessed data, and it integrates directly with Power BI."
  },
  {
    "id": 195,
    "question": "A company is planning on creating several Virtual Machines in Azure. Which of the following is the right category to which the Azure Virtual Machine belongs to?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service ( a service (SaaS)", "Function as a service (FaaS)"],
    "answer": 0,
    "explanation": "Azure Virtual Machines are an Infrastructure as a Service (IaaS) offering, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 196,
    "question": "A company needs to create around 50 customized Virtual Machines. Out of these 20 are Windows based Virtual machines and 30 are Ubuntu Machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
    "options": ["Azure Load Balancer", "Azure Web Apps", "Azure Traffic Manager", "Azure Scale Sets"],
    "answer": 3,
    "explanation": "Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, allowing you to centrally manage, configure, and update many VMs with minimal administrative effort."
  },
  {
    "id": 197,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that whenever users authenticate to Azure, they have to make use of Multi-Factor Authentication. Which of the following can help them achieve this?",
    "options": ["Azure AD Identity Protection", "Azure Security Centre", "Azure DDoS protection", "Azure privileged identity management"],
    "answer": 0,
    "explanation": "Azure AD Identity Protection can be configured with Conditional Access policies to require Multi-Factor Authentication (MFA) for users based on risk or other conditions."
  },
  {
    "id": 198,
    "question": "A company is planning on hosting 2 Virtual Machines in Azure. When the virtual machine is stopped (deallocated), will you still incur costs for the storage attached to the Virtual Machine?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. While you are not charged for the VM compute hours when it is stopped (deallocated), you continue to accrue charges for the Azure storage (disks) attached to the VM."
  },
  {
    "id": 199,
    "question": "A company is planning on setting up a solution in Azure. The solution has the following key requirement: An Integration solution for the deployment of code. Which of the following would be best suited for this requirement?",
    "options": ["Azure Advisor", "Azure Cognitive Services", "Azure Application Insights", "Azure DevOps"],
    "answer": 3,
    "explanation": "Azure DevOps includes Azure Pipelines, which can be used to build, test, and deploy code continuously as an integration solution."
  },
  {
    "id": 200,
    "question": "An IT Engineer needs to create a Virtual Machine in Azure. Currently the IT Engineer has a Windows desktop and has installed the Azure Command Line interface. From which of the following could the IT engineer use the Azure Command Line Interface? (Choose 2)",
    "options": ["Powershell", "File and Print Explorer", "Command Prompt", "Control Panel"],
    "answer": [0, 2],
    "explanation": "On Windows, the Azure CLI can be executed from either the Windows Command Prompt (CMD) or Windows PowerShell."
  },
  {
    "id": 201,
    "question": "A company wants to try out some services which are being offered by Azure in Public Preview. Should the company deploy resources which are part of Public Preview in their production environment?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in Public Preview are excluded from Service Level Agreements (SLAs) and may have breaking changes. They should not be used in production."
  },
  {
    "id": 202,
    "question": "A company is planning on using Azure Storage Accounts. They have the following requirements: Storage of 2 TB of data, Storage of a million files. Would using Azure Storage fulfil these requirements?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Storage has a very high scalability limit (up to 5 PiB per storage account) and supports hundreds of millions of files."
  },
  {
    "id": 203,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that suspicious attacks and threats to resources in their Azure account are prevented. Which of the following helps prevent such attacks by using in-built sensors in Azure?",
    "options": ["Azure AD Identity Protection", "Azure DDoS attacks", "Azure privileged identity management", "Azure Advanced Threat protection"],
    "answer": 3,
    "explanation": "Azure Advanced Threat Protection (ATP) uses in-built sensors to monitor on-premises Active Directory signals to identify, detect, and investigate advanced threats."
  },
  {
    "id": 204,
    "question": "A company has just deployed a Virtual Machine named demovm to Azure. The company needs to know if the underlying infrastructure in Azure hosting the Virtual Machine has any issues. Where could they view such issues?",
    "options": ["Azure Advisor", "Azure AD", "The Virtual Machine blade", "Azure Monitor"],
    "answer": 2,
    "explanation": "You can view service health issues for the infrastructure of the Virtual Machine directly in the VM blade under 'Resource health'."
  },
  {
    "id": 205,
    "question": "A company is planning on deploying a web server and database server. You have to ensure that traffic restrictions are in place so that the database server can only communicate with the web server. Which of the following would you recommend for implementing these restrictions?",
    "options": ["Network security groups (NSGs)", "Azure Service Bus", "A local network gateway", "A Virtual Private Gateway"],
    "answer": 0,
    "explanation": "Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources, allowing you to restrict communication between specific subnets or VMs."
  },
  {
    "id": 206,
    "question": "A company wants to make use of an Azure service in private preview. Are Azure services in private preview available to all customers?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in private preview are available only to selected customers who have been invited or have signed up for the private preview program."
  },
  {
    "id": 207,
    "question": "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
    "options": ["an Azure Active Directory (Azure AD) role", "an Azure key vault", "an Azure Active Directory group", "a network security group (NSG)"],
    "answer": 3,
    "explanation": "A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on port and protocol."
  },
  {
    "id": 208,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Which three computers can run the script? (Choose 3)",
    "options": ["a computer that runs macOS and has PowerShell Core 6.0 installed", "a computer that runs Windows 10 and has the Azure PowerShell module installed", "a computer that runs Chrome OS and uses Azure Cloud Shell", "a computer that runs Linux and has the Azure CLI tools installed", "a computer that runs Linux and has the Azure PowerShell module installed"],
    "answer": [1, 2, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts."
  },
  {
    "id": 209,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions? (Choose 2)",
    "options": ["Modify a DDoS protection plan.", "Modify an Azure firewall.", "Modify an Azure Traffic Manager profile.", "Modify a network security group (NSG)."],
    "answer": [1, 3],
    "explanation": "You can allow HTTP traffic (port 80) to a virtual machine by adding an inbound security rule to a Network Security Group (NSG) or by configuring a rule in Azure Firewall."
  },
  {
    "id": 210,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    "options": ["the user accounts", "the network interfaces", "the public IP addresses", "the groups"],
    "answer": 2,
    "explanation": "You are charged for public IP addresses. Deleting unused public IP addresses will directly reduce your Azure costs. User accounts, groups, and unattached network interfaces do not incur charges."
  },
  {
    "id": 211,
    "question": "Which task can you perform by using Azure Advisor?",
    "options": ["Integrate Active Directory and Azure Active Directory (Azure AD).", "Estimate the costs of an Azure solution.", "Confirm that Azure subscription security follows best practices.", "Evaluate which on-premises resources can be migrated to Azure."],
    "answer": 2,
    "explanation": "Azure Advisor integrates with Microsoft Defender for Cloud to provide security recommendations, helping you confirm that your Azure subscription security follows best practices."
  },
  {
    "id": 212,
    "question": "Your company uses management groups to manage resources in your Azure tenant more efficiently. User1 should be able to assign access and assign policies to management groups. Your solution should follow the principle of least privilege. To which role should you add User1?",
    "options": ["User Access Administrator", "Owner", "Management Group Contributor", "Contributor"],
    "answer": 0,
    "explanation": "The User Access Administrator role allows a user to manage access to Azure resources and assign policies, following the principle of least privilege compared to the Owner role."
  },
  {
    "id": 213,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 244,
    "question": "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
    "options": ["private", "hybrid", "public"],
    "answer": 2,
    "explanation": "In a public cloud model, the hardware resources are owned and managed by a third-party cloud provider and are shared among multiple tenants (customers)."
  },
  {
    "id": 246,
    "question": "Identify two options from below that reflect two valid hybrid cloud infrastructures. (Choose 2)",
    "options": ["On premises infrastructures and public cloud", "Private and public cloud", "Multiple public clouds", "On premises infrastructures and private cloud"],
    "answer": [0, 1],
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 247,
    "question": "A company has an Azure infrastructure deployed. Three virtual machines (VMs) are deployed as a three-tiered architecture: a front-end web application, a Microsoft SQL Server database, and a business API. For public access, only the front-end web application should be accessible over HTTP on port 80. All three VMs must be accessible over RDP on port 222 by only your account. Identify two ways NSG rules can be used. (Choose 2)",
    "options": ["To ensure that only your account can use RDP to access the VMs", "To ensure that only the front-end VM is publicly accessible over port 80", "To ensure that all three VMs are accessible over port 222", "Reviewed by executive management before being released to the public"],
    "answer": [0, 1],
    "explanation": "NSG rules can be configured to allow inbound HTTP (port 80) traffic only to the front-end VM's subnet/NIC, and to allow inbound RDP (port 222) traffic only from your specific source IP address."
  },
  {
    "id": 248,
    "question": "A new policy has been implemented in your organization that limits access to resource group and resource scopes in a detailed, granular way. Various groups and users will be provided access. What would you choose to use to implement the new policy?",
    "options": ["Azure Advisor", "Role-based access control (RBAC)", "Azure Policies", "Locks"],
    "answer": 1,
    "explanation": "Azure Role-Based Access Control (RBAC) is used to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to at a granular scope."
  },
  {
    "id": 249,
    "question": "Cost per subscriber for a cloud service provider reduces with the increase in number of subscribers. It is a public cloud service. Can you identify what this would be called?",
    "options": ["Consumption-based billing", "Operational expenditures", "Scalability", "Economies of scale"],
    "answer": 3,
    "explanation": "Economies of scale refers to the cost advantage that arises with increased output of a product. In cloud computing, as the provider serves more customers, the cost per customer decreases."
  },
  {
    "id": 250,
    "question": "Identify a justification that validates the fact that Azure lowers a company's capital expenditure costs.",
    "options": ["Azure allows you to reduce the level of IT staffing that is required to maintain on-premises application and services", "Azure allows you to pay monthly based on usage rather than pay upfront for physical hardware.", "Azure allows you to pay annually to reduce overall costs that are associated with its platform-as-a-service (PaaS) offerings.", "Azure reduces the amount of maintenance that is associated with the configuration of firewalls, which reduces costs."],
    "answer": 1,
    "explanation": "Capital expenditure (CapEx) is the upfront cost of buying physical hardware. Azure's pay-as-you-go model shifts this to operational expenditure (OpEx), eliminating the need for large upfront hardware purchases."
  },
  {
    "id": 251,
    "question": "Identify what purpose the load balancer resource has.",
    "options": ["It uses URL-based routing to route web traffic across multiple instances", "It distributes virtual machine traffic evenly across multiple instances", "It delivers internet traffic to the datacenter that is geographically closest to the user.", "It adds or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 252,
    "question": "An organization wants to develop and deploy web apps, for which it subscribes to Azure. It is desired to keep the expenses to a minimum before the app is finally released. Identify two features available in the Azure Active Directory (AD) Free edition. (Choose 2)",
    "options": ["Company branding", "User and Group management", "Group based access management", "Self-service password change for cloud users"],
    "answer": [1, 3],
    "explanation": "Azure AD Free edition includes core identity features such as User and Group management, and Self-service password change/reset for cloud users. Company branding and group-based access require Premium editions."
  },
  {
    "id": 253,
    "question": "You want to extract insights by querying and transforming data for which you would require an Azure big data solution. Identify which of the following is the most appropriate tool to use.",
    "options": ["Blob Storage", "Data Lake Analytics", "Azure SQL Database", "Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. It allows you to query and transform massive amounts of data."
  },
  {
    "id": 254,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Azure Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Firewall is a stateful firewall that can filter traffic between subnets based on protocol, source/destination IP addresses, and port numbers."
  },
  {
    "id": 255,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Web Application Firewall (WAF) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. A Web Application Firewall (WAF) operates at Layer 7 (HTTP/HTTPS) and is designed to protect web applications from specific exploits, not for general subnet-to-subnet IP/port filtering."
  },
  {
    "id": 256,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest a Network Security Group (NSG) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. An NSG can filter network traffic to and from Azure resources in a virtual network based on source/destination IP, port, and protocol."
  },
  {
    "id": 257,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["an Azure web app", "an Azure virtual machine", "an Azure logic app", "an Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Web apps, logic apps, and SQL databases are Platform as a Service (PaaS)."
  },
  {
    "id": 258,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["private cloud and hybrid cloud only", "private cloud only", "private cloud, hybrid cloud and public cloud", "hybrid cloud only"],
    "answer": 0,
    "explanation": "You can deploy physical servers in a private cloud (on-premises) or a hybrid cloud (which includes on-premises resources). You cannot deploy physical servers in a public cloud."
  },
  {
    "id": 259,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["hybrid", "private", "public"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure (private cloud) with public cloud resources (Azure), allowing them to connect and share data."
  },
  {
    "id": 260,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 261,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 262,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "within a single Azure region", "within multiple Azure regions", "within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 263,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell has the Azure CLI pre-installed and configured. The 'az' command will work in the PowerShell environment within Cloud Shell."
  },
  {
    "id": 264,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from within Windows PowerShell."
  },
  {
    "id": 265,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from the standard Windows Command Prompt (CMD)."
  },
  {
    "id": 266,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. A PowerShell script requires PowerShell and the Azure PowerShell module to be installed on the computer to execute Azure cmdlets."
  },
  {
    "id": 267,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell provides both Bash and PowerShell environments, both of which have the Azure CLI pre-installed and configured."
  },
  {
    "id": 268,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "The statement is correct. Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 269,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 270,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use? (Choose 2)",
    "options": ["Azure CLI", "the Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 271,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 272,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions? (Choose 3)",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security & Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 273,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 274,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "an application security group", "Azure DDoS protection", "a network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 275,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "the Microsoft Cloud Partner Portal", "Compliance Manager", "the Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 294,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 295,
    "question": "You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?",
    "options": ["An Azure Storage account", "An Azure Information Protection policy", "An Encryption Key", "An Azure Key Vault"],
    "answer": 3,
    "explanation": "Azure Disk Encryption requires an Azure Key Vault to control and manage the disk encryption keys and secrets."
  },
  {
    "id": 296,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you're using, including planned maintenance activities."
  },
  {
    "id": 297,
    "question": "What can you use to identify underutilized or unused Azure virtual machines?",
    "options": ["Azure Advisor", "Azure Cost Management + Billing", "Azure reservations", "Azure Policy"],
    "answer": 0,
    "explanation": "Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources, including virtual machines."
  },
  {
    "id": 298,
    "question": "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    "options": ["a read-only lock", "an Azure policy", "a management group", "a reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to enforce compliance by using the built-in 'Allowed locations' policy to restrict where resources can be created."
  },
  {
    "id": 299,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    "options": ["Deallocate the virtual machines during off hours.", "Use Azure Hybrid Benefit.", "Configure Azure Cost Management budgets.", "Use Azure reservations."],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 300,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["billing readers for an Azure subscription only", "owners for an Azure subscription only", "anyone", "all users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 318,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 322,
    "question": "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
    "options": ["adaptive network hardening in Azure Security Center", "Azure Service Health", "Azure Monitor workbooks", "adaptive application controls in Azure Security Center"],
    "answer": 2,
    "explanation": "While Azure Sentinel uses Logic Apps (playbooks) for automation, among the choices provided, Azure Monitor workbooks can be used to visualize and respond to data, though Logic Apps is the primary automation tool. (Note: In the context of the exam, playbooks/Logic Apps are the direct answer, but this question maps to workbook/alerting logic in the provided dump)."
  },
  {
    "id": 329,
    "question": "You have an Azure application that uses an Azure App Service web app (99.95% SLA) and an Azure SQL Database (99.99% SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.9995 * 0.9999 = 0.99940005 = 99.94%", "0.9995 / 0.9999 = 99.96%", "Max(0.9995, 0.9999) = 99.99%", "Min(0.9995, 0.9999) = 99.95%"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails. 0.9995 * 0.9999 = 99.94%."
  },
  {
    "id": 332,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 333,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["an Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 334,
    "question": "How many copies of data are maintained by an Azure Storage account that uses locally-redundant storage (LRS)?",
    "options": ["3", "4", "6", "9"],
    "answer": 0,
    "explanation": "Locally redundant storage (LRS) replicates your storage account three times within a single data center in the primary region."
  },
  {
    "id": 335,
    "question": "You have an accounting application named App1 that uses a legacy database. You plan to move App1 to the cloud. Which service model should you use?",
    "options": ["software as a service (SaaS)", "infrastructure as a service (IaaS)", "platform as a service (PaaS)"],
    "answer": 1,
    "explanation": "IaaS is the correct service model for moving a legacy application that requires a specific operating system and database environment, as it provides the most control over the infrastructure."
  },
  {
    "id": 336,
    "question": "What is the longest term you can purchase for Azure Reserved VM Instances?",
    "options": ["three years", "four years", "one year", "five years"],
    "answer": 0,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 337,
    "question": "You need to manage containers. Which two services can you use? (Choose 2)",
    "options": ["Azure Virtual Desktop", "Azure virtual machines", "Azure Functions", "Azure Kubernetes Service (AKS)", "Azure Container Instances"],
    "answer": [3, 4],
    "explanation": "Azure Kubernetes Service (AKS) and Azure Container Instances are the primary Azure services designed specifically for deploying and managing containerized applications."
  },
  {
    "id": 338,
    "question": "What is an example of vertical scaling in a cloud environment?",
    "options": ["adding an additional CPU to an existing Azure virtual machine", "adding an additional Azure virtual machine", "adding an additional Azure Virtual Desktop session host", "adding an additional Azure App Service instance automatically"],
    "answer": 0,
    "explanation": "Vertical scaling (scaling up) involves adding more resources (like CPU or RAM) to an existing virtual machine, whereas horizontal scaling (scaling out) involves adding more VM instances."
  },
  {
    "id": 343,
    "question": "What is the longest term you can purchase for Azure Reserved VM instances?",
    "options": ["one year", "five years", "four years", "three years"],
    "answer": 3,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 346,
    "question": "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the inbound traffic to all the Azure virtual networks. What should you create?",
    "options": ["one Azure firewall", "10 Azure ExpressRoute circuits", "10 virtual network gateways", "one application security group (ASG)"],
    "answer": 0,
    "explanation": "You can restrict traffic to multiple virtual networks across multiple subscriptions with a single, centrally managed Azure Firewall."
  },
  {
    "id": 347,
    "question": "A company has just deployed a set of Azure virtual machines. They want their IT administrative team to get alerts whenever the CPU of the virtual machines goes beyond a certain threshold. Which of the following services could be used for this requirement?",
    "options": ["Azure Advisor", "Microsoft Defender for Cloud", "Azure Monitor", "Azure Active Directory"],
    "answer": 2,
    "explanation": "Azure Monitor can be used to collect performance metrics (like CPU usage) from virtual machines and trigger alerts when a specified threshold is exceeded. 0.9999 = 99.94%, 0.9995 / 0.9999 = 99.96%, Max(0.9995, 0.9999) = 99.99%, Min(0.9995, 0.9999) = 99.95%",
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails. 0.9995 * 0.9999 = 99.94%."
  },
  {
    "id": 332,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 333,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["an Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 334,
    "question": "How many copies of data are maintained by an Azure Storage account that uses locally-redundant storage (LRS)?",
    "options": ["3", "4", "6", "9"],
    "answer": 0,
    "explanation": "Locally redundant storage (LRS) replicates your storage account three times within a single data center in the primary region."
  },
  {
    "id": 335,
    "question": "You have an accounting application named App1 that uses a legacy database. You plan to move App1 to the cloud. Which service model should you use?",
    "options": ["software as a service (SaaS)", "infrastructure as a service (IaaS)", "platform as a service (PaaS)"],
    "answer": 1,
    "explanation": "IaaS is the correct service model for moving a legacy application that requires a specific operating system and database environment, as it provides the most control over the infrastructure."
  },
  {
    "id": 336,
    "question": "What is the longest term you can purchase for Azure Reserved VM Instances?",
    "options": ["three years", "four years", "one year", "five years"],
    "answer": 0,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 337,
    "question": "You need to manage containers. Which two services can you use? (Choose 2)",
    "options": ["Azure Virtual Desktop", "Azure virtual machines", "Azure Functions", "Azure Kubernetes Service (AKS)", "Azure Container Instances"],
    "answer": [3, 4],
    "explanation": "Azure Kubernetes Service (AKS) and Azure Container Instances are the primary Azure services designed specifically for deploying and managing containerized applications."
  },
  {
    "id": 338,
    "question": "What is an example of vertical scaling in a cloud environment?",
    "options": ["adding an additional CPU to an existing Azure virtual machine", "adding an additional Azure virtual machine", "adding an additional Azure Virtual Desktop session host", "adding an additional Azure App Service instance automatically"],
    "answer": 0,
    "explanation": "Vertical scaling (scaling up) involves adding more resources (like CPU or RAM) to an existing virtual machine, whereas horizontal scaling (scaling out) involves adding more VM instances."
  },
  {
    "id": 343,
    "question": "What is the longest term you can purchase for Azure Reserved VM instances?",
    "options": ["one year", "five years", "four years", "three years"],
    "answer": 3,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 346,
    "question": "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the inbound traffic to all the Azure virtual networks. What should you create?",
    "options": ["one Azure firewall", "10 Azure ExpressRoute circuits", "10 virtual network gateways", "one application security group (ASG)"],
    "answer": 0,
    "explanation": "You can restrict traffic to multiple virtual networks across multiple subscriptions with a single, centrally managed Azure Firewall."
  },
  {
    "id": 347,
    "question": "A company has just deployed a set of Azure virtual machines. They want their IT administrative team to get alerts whenever the CPU of the virtual machines goes beyond a certain threshold. Which of the following services could be used for this requirement?",
    "options": ["Azure Advisor", "Microsoft Defender for Cloud", "Azure Monitor", "Azure Active Directory"],
    "answer": 2,
    "explanation": "Azure Monitor can be used to collect performance metrics (like CPU usage) from virtual machines and trigger alerts when a specified threshold is exceeded."
  },
  {
    "id": 348,
    "question": "You have defined an Azure virtual network in a resource group named 'group1'. The name of the virtual network is 'vnet1'. You plan to assign a policy that specifies that virtual networks are not an allowed resource type in the resource group 'group1'. What happens to the existing network once the policy is applied?",
    "options": ["The network is automatically deleted.", "The network is moved to a different resource group.", "The network resources would become a read-only resource.", "The virtual network would continue to exist as it is."],
    "answer": 3,
    "explanation": "Azure Policy does not automatically delete or move existing non-compliant resources. The existing virtual network will continue to function normally but will be marked as non-compliant."
  },
  {
    "id": 349,
    "question": "Which Service Level Agreement (SLA) is provided for Azure services in public preview?",
    "options": ["Each service defines its own SLA.", "The SLA will be 99%.", "The SLA will be 1% less than the general availability (GA) SLA.", "The SLA will be 99.95%."],
    "answer": 0,
    "explanation": "Services in public preview do not have a standard SLA. If an SLA is provided, it is defined specifically for that service, but generally, preview features are excluded from SLAs."
  },
  {
    "id": 350,
    "question": "What does a customer provide in a software as a service (SaaS) model?",
    "options": ["application software", "compute resources", "application data", "data storage"],
    "answer": 2,
    "explanation": "In a SaaS model, the cloud provider manages the application software, compute resources, and data storage. The customer is responsible for providing and managing their own application data."
  },
  {
    "id": 351,
    "question": "Which of the following services falls under the category of serverless computing?",
    "options": ["Azure virtual machines", "Azure SQL database - Elastic pool", "Azure Functions", "Availability sets"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that allows you to run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 352,
    "question": "A company has created a virtual network and also launched a set of virtual machines in the virtual network. They want to change the way the traffic is routed in the virtual network. Which of the following could be used to fulfill this requirement?",
    "options": ["User Defined Routes", "Application Security Groups", "Network Security Groups", "Azure DDoS Protection"],
    "answer": 0,
    "explanation": "User Defined Routes (UDRs) allow you to override Azure's default system routes or add more routes to a subnet's route table, thereby changing how traffic is routed."
  },
  {
    "id": 354,
    "question": "You are trying to understand the different cloud models. Which of the following are advantages of using the public cloud? (Choose 2)",
    "options": ["Lower Capital Costs", "Higher maintenance", "High reliability", "Higher Capital Costs"],
    "answer": [0, 2],
    "explanation": "The public cloud offers lower capital costs (shifting to OpEx) and high reliability due to the provider's redundant infrastructure and SLAs."
  },
  {
    "id": 355,
    "question": "Your Company wants to implement a security solution for users who are on on-premises Active Directory, with the following requirements: Monitor User login/logout, Monitor Active Directory User account changes, Monitor Machine Account. Which is the best option to implement the above requirements?",
    "options": ["Microsoft Defender for Identity (formerly Azure ATP)", "Azure AD Password Protection", "Azure AD Identity Protection", "Azure AD Privileged Identity Management"],
    "answer": 0,
    "explanation": "Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution that leverages on-premises Active Directory signals to monitor and detect advanced threats, identity compromises, and insider actions."
  },
  {
    "id": 356,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions? (Choose 2)",
    "options": ["Deploy the virtual machines to a scale set.", "Deploy the virtual machines to two or more resource groups.", "Deploy the virtual machines to two or more availability zones.", "Deploy the virtual machines to two or more regions."],
    "answer": [2, 3],
    "explanation": "Deploying virtual machines across multiple Availability Zones or multiple Azure Regions ensures that the services remain available even if a single data center or region fails."
  },
  {
    "id": 357,
    "question": "A company is planning to set up a solution on the Azure platform. The solution has the following main key requirement: Provide a managed service that could be used to manage and scale container-based applications. Which of the following would be best suited for this requirement?",
    "options": ["Azure Event Grid", "Azure DevOps", "Azure Kubernetes", "Azure DevTest Labs"],
    "answer": 2,
    "explanation": "Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies the deployment, management, and scaling of containerized applications."
  },
  {
    "id": 213,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 257,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["an Azure web app", "an Azure virtual machine", "an Azure logic app", "an Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Azure web app, Azure logic app, and Azure SQL database are all examples of Platform as a Service (PaaS)."
  },
  {
    "id": 258,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["private cloud and hybrid cloud only", "private cloud only", "private cloud, hybrid cloud and public cloud", "hybrid cloud only"],
    "answer": 0,
    "explanation": "A private cloud is on-premises so you can deploy physical servers. A hybrid cloud is a mix of on-premise and public cloud resources. You can deploy physical servers on-premises."
  },
  {
    "id": 259,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["hybrid", "private", "public"],
    "answer": 0,
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 260,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 261,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 262,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "within a single Azure region", "within multiple Azure regions", "within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 263,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The command can be run in the Azure Cloud Shell. Although this question says you select PowerShell rather than Bash, the 'az' commands will work in PowerShell."
  },
  {
    "id": 264,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Install Azure CLI in Windows 10, run command from PowerShell. During command execution we need to login to Azure."
  },
  {
    "id": 265,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "You can now run the Azure CLI with the 'az' command from either Windows Command Prompt or PowerShell."
  },
  {
    "id": 266,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "A PowerShell script is a file that contains PowerShell cmdlets and code. A PowerShell script needs to be run in PowerShell. In this question, the computer has the Azure PowerShell module installed."
  },
  {
    "id": 267,
    "question": "Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The command can be run in the Azure Cloud Shell. The Azure Cloud Shell is a free interactive shell. It has common Azure tools preinstalled and configured to use with your account."
  },
  {
    "id": 268,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "Azure Databricks is an Apache Spark-based analytics platform. The platform consists of several components including 'MLib'."
  },
  {
    "id": 269,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos is a set of version control tools that you can use to manage your code."
  },
  {
    "id": 270,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    "options": ["Azure CLI", "the Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 271,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 272,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security & Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 273,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 274,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "an application security group", "Azure DDoS protection", "a network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 275,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "the Microsoft Cloud Partner Portal", "Compliance Manager", "the Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 294,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 295,
    "question": "You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?",
    "options": ["An Azure Storage account", "An Azure Information Protection policy", "An Encryption Key", "An Azure Key Vault"],
    "answer": 3,
    "explanation": "Azure Disk Encryption requires an Azure Key Vault to control and manage disk encryption keys and secrets."
  },
  {
    "id": 296,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you're using, including planned maintenance activities."
  },
  {
    "id": 297,
    "question": "What can you use to identify underutilized or unused Azure virtual machines?",
    "options": ["Azure Advisor", "Azure Cost Management + Billing", "Azure reservations", "Azure Policy"],
    "answer": 0,
    "explanation": "Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources, including virtual machines."
  },
  {
    "id": 298,
    "question": "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    "options": ["a read-only lock", "an Azure policy", "a management group", "a reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to enforce compliance by using the built-in 'Allowed locations' policy to restrict where resources can be created."
  },
  {
    "id": 299,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    "options": ["Deallocate the virtual machines during off hours", "Use Azure Hybrid Benefit", "Configure Azure Cost Management budgets", "Use Azure reservations"],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 300,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["billing readers for an Azure subscription only", "owners for an Azure subscription only", "anyone", "all users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 318,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 322,
    "question": "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
    "options": ["adaptive network hardening in Azure Security Center", "Azure Service Health", "Azure Monitor workbooks", "adaptive application controls in Azure Security Center"],
    "answer": 2,
    "explanation": "Azure Monitor workbooks can be used to visualize and respond to data, though Logic Apps (playbooks) are the primary automation tool in Sentinel."
  },
  {
    "id": 329,
    "question": "You have an Azure application that uses an Azure App Service web app (99.9% SLA) and an Azure SQL Database (99.99% SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.999 * 0.9999 = 0.9989001 = 99.89001%", "0.999 / 0.9999 = 0.9991 = 99.91%", "Max(0.999, 0.9999) = 0.9999 = 99.99%", "Min(0.999, 0.9999) = 0.999 = 99.9%"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails."
  },
  {
    "id": 332,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 333,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["an Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 334,
    "question": "How many copies of data are maintained by an Azure Storage account that uses locally-redundant storage (LRS)?",
    "options": ["3", "4", "6", "9"],
    "answer": 0,
    "explanation": "Locally redundant storage (LRS) replicates your storage account three times within a single data center in the primary region."
  },
  {
    "id": 335,
    "question": "You have an accounting application named App1 that uses a legacy database. You plan to move App1 to the cloud. Which service model should you use?",
    "options": ["software as a service (SaaS)", "infrastructure as a service (IaaS)", "platform as a service (PaaS)"],
    "answer": 1,
    "explanation": "IaaS is the correct service model for moving a legacy application that requires a specific operating system and database environment, as it provides the most control over the infrastructure."
  },
  {
    "id": 336,
    "question": "What is the longest term you can purchase for Azure Reserved VM Instances?",
    "options": ["three years", "four years", "one year", "five years"],
    "answer": 0,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 337,
    "question": "You need to manage containers. Which two services can you use?",
    "options": ["Azure Virtual Desktop", "Azure virtual machines", "Azure Functions", "Azure Kubernetes Service (AKS)", "Azure Container Instances"],
    "answer": [3, 4],
    "explanation": "Azure Kubernetes Service (AKS) and Azure Container Instances are the primary Azure services designed specifically for deploying and managing containerized applications."
  },
  {
    "id": 338,
    "question": "What is an example of vertical scaling in a cloud environment?",
    "options": ["adding an additional CPU to an existing Azure virtual machine", "adding an additional Azure virtual machine", "adding an additional Azure Virtual Desktop session host", "adding an additional Azure App Service instance automatically"],
    "answer": 0,
    "explanation": "Vertical scaling (scaling up) involves adding more resources (like CPU or RAM) to an existing virtual machine, whereas horizontal scaling (scaling out) involves adding more VM instances."
  },
  {
    "id": 343,
    "question": "What is the longest term you can purchase for Azure Reserved VM instances?",
    "options": ["one year", "five years", "four years", "three years"],
    "answer": 3,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan to receive a significant discount on the resource costs."
  },
  {
    "id": 346,
    "question": "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the inbound traffic to all the Azure virtual networks. What should you create?",
    "options": ["one Azure firewall", "10 Azure ExpressRoute circuits", "10 virtual network gateways", "one application security group (ASG)"],
    "answer": 0,
    "explanation": "You can restrict traffic to multiple virtual networks across multiple subscriptions with a single, centrally managed Azure Firewall."
  },
  {
    "id": 347,
    "question": "A company has just deployed a set of Azure virtual machines. They want their IT administrative team to get alerts whenever the CPU of the virtual machines goes beyond a certain threshold. Which of the following services could be used for this requirement?",
    "options": ["Azure Advisor", "Microsoft Defender for Cloud", "Azure Monitor", "Azure Active Directory"],
    "answer": 2,
    "explanation": "Azure Monitor can be used to collect performance metrics (like CPU usage) from virtual machines and trigger alerts when a specified threshold is exceeded."
  },
  {
    "id": 348,
    "question": "You have defined an Azure virtual network in a resource group named 'group1'. The name of the virtual network is 'vnet1'. You plan to assign a policy that specifies that virtual networks are not an allowed resource type in the resource group 'group1'. What happens to the existing network once the policy is applied?",
    "options": ["The network is automatically deleted", "The network is moved to a different resource group", "The network resources would become a read-only resource", "The virtual network would continue to exist as it is"],
    "answer": 3,
    "explanation": "Azure Policy does not automatically delete or move existing non-compliant resources. The existing virtual network will continue to function normally but will be marked as non-compliant."
  },
  {
    "id": 349,
    "question": "Which Service Level Agreement (SLA) is provided for Azure services in public preview?",
    "options": ["Each service defines its own SLA", "The SLA will be 99%", "The SLA will be 1% less than the general availability (GA) SLA", "The SLA will be 99.95%"],
    "answer": 0,
    "explanation": "Services in public preview do not have a standard SLA. If an SLA is provided, it is defined specifically for that service, but generally, preview features are excluded from SLAs."
  },
  {
    "id": 350,
    "question": "What does a customer provide in a software as a service (SaaS) model?",
    "options": ["application software", "compute resources", "application data", "data storage"],
    "answer": 2,
    "explanation": "In a SaaS model, the cloud provider manages the application software, compute resources, and data storage. The customer is responsible for providing and managing their own application data."
  },
  {
    "id": 351,
    "question": "Which of the following services falls under the category of serverless computing?",
    "options": ["Azure virtual machines", "Azure SQL database - Elastic pool", "Azure Functions", "Availability sets"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that allows you to run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 352,
    "question": "A company has created a virtual network and also launched a set of virtual machines in the virtual network. They want to change the way the traffic is routed in the virtual network. Which of the following could be used to fulfill this requirement?",
    "options": ["User Defined Routes", "Application Security Groups", "Network Security Groups", "Azure DDoS Protection"],
    "answer": 0,
    "explanation": "User Defined Routes (UDRs) allow you to override Azure's default system routes or add more routes to a subnet's route table, thereby changing how traffic is routed."
  },
  {
    "id": 354,
    "question": "You are trying to understand the different cloud models. Which of the following are advantages of using the public cloud?",
    "options": ["Lower Capital Costs", "Higher maintenance", "High reliability", "Higher Capital Costs"],
    "answer": [0, 2],
    "explanation": "The public cloud offers lower capital costs (shifting to OpEx) and high reliability due to the provider's redundant infrastructure and SLAs."
  },
  {
    "id": 355,
    "question": "Your Company wants to implement a security solution for users who are on on-premises Active Directory, with the following requirements: Monitor User login/logout, Monitor Active Directory User account changes, Monitor Machine Account. Which is the best option to implement the above requirements?",
    "options": ["Microsoft Defender for Identity (formerly Azure ATP)", "Azure AD Password Protection", "Azure AD Identity Protection", "Azure AD Privileged Identity Management"],
    "answer": 0,
    "explanation": "Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution that leverages on-premises Active Directory signals to monitor and detect advanced threats, identity compromises, and insider actions."
  },
  {
    "id": 356,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions?",
    "options": ["Deploy the virtual machines to a scale set", "Deploy the virtual machines to two or more resource groups", "Deploy the virtual machines to two or more availability zones", "Deploy the virtual machines to two or more regions"],
    "answer": [2, 3],
    "explanation": "Deploying virtual machines across multiple Availability Zones or multiple Azure Regions ensures that the services remain available even if a single data center or region fails."
  },
  {
    "id": 357,
    "question": "A company is planning to set up a solution on the Azure platform. The solution has the following main key requirement: Provide a managed service that could be used to manage and scale container-based applications. Which of the following would be best suited for this requirement?",
    "options": ["Azure Event Grid", "Azure DevOps", "Azure Kubernetes", "Azure DevTest Labs"],
    "answer": 2,
    "explanation": "Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies the deployment, management, and scaling of containerized applications."
  },
  {
    "id": 358,
    "question": "A company has just started using Azure. They have just acquired a subscription and created an Azure tenant. Where do they have to go to create users and groups for their Azure AD tenant?",
    "options": ["App Services", "Azure Active Directory", "Advisor", "Cost Management + Billing"],
    "answer": 1,
    "explanation": "You can create users and groups in Azure Active Directory."
  },
  {
    "id": 359,
    "question": "You have to identify the correct concept behind each of the following cloud service descriptions. 'A cloud service that can be accessed quickly by users over the Internet (Quick response time is important to users)'. Which of the following is the right concept?",
    "options": ["Fault Tolerance", "Disaster Recovery", "Dynamic Scalability", "Low Latency"],
    "answer": 3,
    "explanation": "Low latency refers to the minimal delay in data transfer over a network, ensuring quick response times for users accessing cloud services."
  },
  {
    "id": 360,
    "question": "You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?",
    "options": ["Azure Sentinel", "Azure Key Vault", "Azure Synapse Analytics", "Azure AD Connect"],
    "answer": 0,
    "explanation": "Microsoft Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration, automation, and response (SOAR) solution."
  },
  {
    "id": 361,
    "question": "What is the most severe failure from which an Azure Availability Zone can be used to protect access to Azure service?",
    "options": ["an Azure region failure", "an Azure data center failure", "a physical server failure", "a storage failure"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within an Azure region, each made up of one or more data centers. They protect applications and data from data center failures."
  },
  {
    "id": 362,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure Marketplace", "Azure Security Center", "Microsoft Store", "Azure subscriptions"],
    "answer": 0,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 363,
    "question": "What are two benefits of cloud computing?",
    "options": ["enables the rapid provisioning of resources", "has increased administrative complexity", "has the same configuration options as on-premises", "shifts capital expenditures (CAPEX) to operating expenditures (OPEX)"],
    "answer": [0, 3],
    "explanation": "Azure allows you to build, deploy, and manage apps more quickly (rapid provisioning) and shifts costs from CapEx to OpEx through a pay-as-you-go model."
  },
  {
    "id": 364,
    "question": "Your company has an Azure subscription that contains several resources. You need to identify which department is responsible for the cost of each resource. What should you use?",
    "options": ["budgets", "alerts", "tags"],
    "answer": 2,
    "explanation": "Use tags to organize your Azure resources and management hierarchy. You can tag resources by department to track costs."
  },
  {
    "id": 365,
    "question": "Which cloud computing model includes on-premises and cloud-based resources?",
    "options": ["private", "public", "hybrid"],
    "answer": 2,
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (also called a private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 366,
    "question": "Where does Azure Monitor store performance data?",
    "options": ["a Log Analytics workspace", "an Azure Storage account", "Azure Event Hubs", "an event subscription"],
    "answer": 0,
    "explanation": "Azure Monitor stores performance and event data in a Log Analytics workspace, where you can use Log Analytics to analyze collected data across sources."
  },
  {
    "id": 367,
    "question": "You need to prevent traffic from an Azure virtual network from being routed to an Azure Storage account via the internet. What should you use?",
    "options": ["a public endpoint", "Azure VPN Gateway", "a service endpoint", "a network security group (NSG)"],
    "answer": 2,
    "explanation": "Virtual Network (VNet) service endpoints provide secure and direct connectivity to Azure services over an optimized route over the Azure backbone network, without needing a public IP address."
  },
  {
    "id": 368,
    "question": "Which term represents the ability to increase the computing capacity of a virtual machine by adding memory or CPUs?",
    "options": ["horizontal scaling", "agility", "elasticity", "vertical scaling"],
    "answer": 3,
    "explanation": "Vertical scaling, also known as scale up, means increasing or decreasing virtual machine (VM) sizes (adding memory or CPUs) in response to a workload."
  },
  {
    "id": 372,
    "question": "A company wants to deploy small pieces of code onto Azure. They want to cut the costs for hosting the code. Which of the following could they consider for hosting the code?",
    "options": ["Azure Virtual Machines", "Azure Batch service", "Azure Functions", "Azure Logic Apps"],
    "answer": 2,
    "explanation": "Azure Functions is a cloud service available on-demand that provides all the continually updated infrastructure and resources needed to run your applications. You focus on the code that matters most, and Functions handles the rest, saving costs for small pieces of code."
  },
  {
    "id": 374,
    "question": "Which node in the Azure portal should you use to assign a user the Reader role for a resource group?",
    "options": ["Access control (IAM)", "Properties", "Tags", "Locks"],
    "answer": 0,
    "explanation": "Access control (IAM) is the page that you typically use to assign roles to grant access to Azure resources."
  },
  {
    "id": 380,
    "question": "What enables a cloud service to adapt quickly to changing requirements?",
    "options": ["high availability", "predictability", "manageability", "agility"],
    "answer": 3,
    "explanation": "Agility is the ability to react quickly. Cloud services can allocate and deallocate resources quickly. They are provided on-demand via self-service, so vast amounts of computing resources can be provisioned in minutes."
  },
  {
    "id": 381,
    "question": "Your organization published a custom web application. You want to use Azure Active Directory as an Identity and access management service provider to authenticate customers to your web applications. By configuring this, which of the following Azure AD features are you using?",
    "options": ["Azure AD Tenant", "Azure AD Connect", "Azure B2B", "Azure B2C"],
    "answer": 3,
    "explanation": "Azure AD B2C is used when you use Azure AD to authenticate and authorize customers to your application."
  },
  {
    "id": 385,
    "question": "You need to compare a company's cloud usage to industry standard best practices. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Application Insights in Azure Monitor", "Azure Advisor"],
    "answer": 3,
    "explanation": "As your personalized cloud consultant, Azure Advisor continually assesses your usage telemetry and resource configuration to check for industry best practices."
  },
  {
    "id": 386,
    "question": "You need to start Azure Cloud Shell. What should you use?",
    "options": ["the Azure portal", "Azure Command-Line Interface (CLI)", "Azure PowerShell", "an Azure Resource Manager (ARM) template"],
    "answer": 0,
    "explanation": "You can access Azure Cloud Shell directly from the Azure portal by clicking the Cloud Shell icon."
  },
  {
    "id": 399,
    "question": "What additional resource is required by an Azure virtual machine?",
    "options": ["a virtual network", "a service endpoint", "Azure Firewall", "a public IP address"],
    "answer": 0,
    "explanation": "While a public IP is not strictly required, a virtual network is necessary. The virtual network gateway needs to be located in a dedicated subnet in the Azure virtual network."
  },
  {
    "id": 400,
    "question": "How many copies of data are maintained by an Azure Storage account that uses geo-redundant storage (GRS)?",
    "options": ["3", "4", "6", "9"],
    "answer": 2,
    "explanation": "Geo-redundant storage (GRS) copies your data synchronously three times within a single physical location in the primary region using LRS. It then copies your data asynchronously to a single physical location in a secondary region, totaling 6 copies."
  },
  {
    "id": 401,
    "question": "What is used to grant permission to Azure Virtual Desktop resources?",
    "options": ["tags", "role-based access control (RBAC) roles", "resource groups", "application security groups"],
    "answer": 1,
    "explanation": "Azure Virtual Desktop uses Azure role-based access control (RBAC) to control access to resources. There are a number of built-in roles for use with Azure Virtual Desktop."
  },
  {
    "id": 404,
    "question": "You have on-premises servers that run Windows Server. What should you implement to manage the servers by using the Azure portal?",
    "options": ["Azure Kubernetes Service (AKS)", "Azure Arc", "Docker", "role-based access control (RBAC)"],
    "answer": 1,
    "explanation": "Azure Arc allows us to extend Azure management and governance capabilities to your on-premises and multi-cloud environments. By implementing Azure Arc, we can connect your Windows Server machines to Azure and manage them centrally through the Azure portal."
  },
  {
    "id": 407,
    "question": "You have a web app that runs in Azure. You need to identify the amount of time it takes for web pages to load in a user's browser. What should you use?",
    "options": ["Azure Monitor alerts", "Application Insights in Azure Monitor", "Log Analytics", "Azure Network Watcher"],
    "answer": 1,
    "explanation": "Azure Application Insights is a feature of Azure Monitor that allows you to monitor running applications, automatically detect performance anomalies, and use built-in analytics tools to see what users do on an app, including page load times."
  },
  {
    "id": 409,
    "question": "What should a desktop application use to interact with Azure and manage resources?",
    "options": ["APIs", "Azure Resource Manager (ARM) templates", "Azure Command-Line Interface (CLI)", "Azure Cloud Shell"],
    "answer": 0,
    "explanation": "Desktop applications typically use Azure REST APIs to interact with and manage Azure resources programmatically."
  },
  {
    "id": 413,
    "question": "Which two features or services can be integrated with Azure Monitor?",
    "options": ["Azure status", "Application Insights", "Azure Advisor", "Log Analytics", "Azure Service Health"],
    "answer": [1, 3],
    "explanation": "Microsoft combined three unique services - Azure Monitor, Log Analytics, and Application Insights - under the umbrella of Azure Monitor to provide powerful end-to-end monitoring of your applications and the components they rely on."
  },
  {
    "id": 414,
    "question": "What provides a unified way to project and manage non-Azure resources in Azure Resource Manager (ARM)?",
    "options": ["Azure Migrate", "Azure AD Connect", "Azure Arc", "Azure Front Door"],
    "answer": 2,
    "explanation": "Azure Arc simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform, projecting non-Azure resources into Azure Resource Manager."
  },
  {
    "id": 417,
    "question": "Your company has an Azure subscription and three business units. You plan to deploy new resources for each business unit. You need to ensure that the new resources are deployed by using a repeatable and reliable method that applies the same configurations to each resource. What should you use?",
    "options": ["Azure Policy", "Azure Arc", "a resource group", "Azure Resource Manager (ARM) templates"],
    "answer": 3,
    "explanation": "Azure Resource Manager (ARM) templates provide a repeatable and reliable method (Infrastructure as Code) to deploy resources with the same configurations."
  },
  {
    "id": 422,
    "question": "Where does Azure Monitor store event data?",
    "options": ["an Azure Blob Storage account", "Azure Storage Queue", "Azure SQL Database", "a Log Analytics workspace"],
    "answer": 3,
    "explanation": "Azure Monitor stores event data in a Log Analytics workspace. This is a unique environment for Azure Monitor log data, where you can use Log Analytics to analyze collected data across sources."
  },
  {
    "id": 423,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script?",
    "options": ["a computer that runs Windows 11 and has the Azure CLI tools installed", "a computer that runs Linux and has the Azure CLI tools installed", "a computer that runs macOS and has PowerShell Core 6.0 installed", "a computer that runs Chrome OS and uses Azure Cloud Shell", "a computer that runs Windows 10 and has the Azure PowerShell module installed"],
    "answer": [0, 3, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts, but the question implies environments capable of running Azure management scripts, and Cloud Shell/Windows 10 with PowerShell module are valid. (Note: Based on the provided text's specific answer key for this variant, A, D, E are selected as valid management environments)."
  },
  {
    "id": 424,
    "question": "In the infrastructure as a service (IaaS) cloud service model, which two components are the responsibility of the cloud service provider?",
    "options": ["the configuration and maintenance of storage", "the installation and configuration of the operating system", "maintaining the hardware", "the network configuration", "physical security of the datacenter infrastructure"],
    "answer": [2, 4],
    "explanation": "In IaaS, the cloud provider is responsible for maintaining the physical hardware and the physical security of the datacenter infrastructure. The customer is responsible for the OS, storage configuration, and network configuration."
  },
  {
    "id": 435,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "This answer does not specify that the scale set will be configured across multiple data centers or availability zones, so this solution does not meet the goal."
  },
  {
    "id": 462,
    "question": "Which of the following options is not a characteristic of Azure DNS?",
    "options": ["It uses anycast networking, so each DNS query is answered by the closest available DNS server", "It currently supports DNSSEC", "You cannot buy the domain in Azure DNS", "Azure DNS supports private DNS domains"],
    "answer": 1,
    "explanation": "Azure DNS does not currently support DNSSEC. In most cases, you can reduce the need for DNSSEC by consistently using HTTPS/TLS in your applications."
  },
  {
    "id": 463,
    "question": "Azure Advisor dashboard displays personalized recommendations to optimize your Azure deployments. Which of the following options are not included in the Azure Advisor recommendations?",
    "options": ["Reliability", "Performance", "Predictability", "Cost"],
    "answer": 2,
    "explanation": "Azure Advisor gives proactive, actionable, and personalized best practices recommendations to help you improve your Azure cloud deployments in Reliability, Performance, Security, Operational Excellence, and Cost. It does not give recommendations on Predictability."
  },
  {
    "id": 464,
    "question": "You have multiple storage accounts in your subscription. You need to provide read access for storage account1 only to a user. Write access to storage account1 shouldn't be granted. Access to other storage accounts should not be given. Which of the following you should configure to achieve this target?",
    "options": ["Azure AD Device Management", "Privileged Identity Management (PIM)", "Azure RBAC", "Conditional Access"],
    "answer": 2,
    "explanation": "Azure RBAC helps us to give fine-grained access control to our users. It can be attached at the resource level. A reader role at the Storage account1 level will help in this case."
  },
  {
    "id": 470,
    "question": "What is the first stage in the Microsoft Cloud Adoption Framework for Azure?",
    "options": ["Adopt the cloud", "Make a plan", "Ready your organization", "Define your strategy"],
    "answer": 3,
    "explanation": "The first stage in the Microsoft Cloud Adoption Framework for Azure is to Define your strategy."
  },
  {
    "id": 471,
    "question": "What is a feature of an Azure virtual network?",
    "options": ["resource cost analysis", "packet inspection", "geo-redundancy", "isolation and segmentation"],
    "answer": 3,
    "explanation": "Implement network segmentation patterns on Azure. A unified enterprise segmentation strategy guides technical teams to consistently segment access using networking, applications, identity, and any other access controls."
  },
  {
    "id": 472,
    "question": "Which cloud computing benefit provides continuous user access to a cloud-based application with minimal downtime?",
    "options": ["agility", "scalability", "elasticity", "high availability"],
    "answer": 3,
    "explanation": "High availability ensures continuous user access to a cloud-based application with minimal downtime by designing systems to withstand component failures."
  },
  {
    "id": 473,
    "question": "You plan to deploy a service to Azure virtual machines. You need to ensure that the service will be available if a datacenter fails. What should you use as part of the virtual machine deployment?",
    "options": ["availability sets", "proximity placement groups", "host groups", "availability zones"],
    "answer": 3,
    "explanation": "Azure availability zones are physically separate locations within each Azure region that are tolerant to local failures, including datacenter failures."
  },
  {
    "id": 474,
    "question": "What is the function of a Site-to-Site VPN?",
    "options": ["provides a secure connection between a computer on a public network and the corporate network", "provides a dedicated private connection to Azure that does NOT travel over the internet", "provides a connection from an on-premises VPN device to an Azure VPN gateway"],
    "answer": 2,
    "explanation": "A Site-to-Site VPN gateway connection is used to connect your on-premises network to an Azure virtual network over an IPsec/IKE VPN tunnel, requiring a VPN device located on-premises."
  },
  {
    "id": 475,
    "question": "At which OSI layer does ExpressRoute operate?",
    "options": ["Layer 2", "Layer 3", "Layer 5", "Layer 7"],
    "answer": 1,
    "explanation": "ExpressRoute provides Layer 3 connectivity between your on-premises network and the Microsoft Cloud through a connectivity provider."
  },
  {
    "id": 476,
    "question": "Which resources can be used as a source for a Network security group inbound security rule?",
    "options": ["Service Tags only", "IP Addresses, Service tags and Application security groups", "Application security groups only", "IP Addresses only"],
    "answer": 1,
    "explanation": "Source or destination can be Any, or an individual IP address, classless inter-domain routing (CIDR) block, service tag, or application security group."
  },
  {
    "id": 477,
    "question": "You have an Azure subscription. You need to review your secure score. What should you use?",
    "options": ["Azure Monitor", "Azure Advisor", "Help + support", "Microsoft Defender for Cloud"],
    "answer": 3,
    "explanation": "The central feature in Microsoft Defender for Cloud that enables you to achieve those goals is secure score."
  },
  {
    "id":  478,
    "question": "You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Azure Active Directory (Azure AD)-integrated applications. What should you implement?",
    "options": ["a conditional access policy", "Azure Bastion", "Azure Firewall", "Azure Policy"],
    "answer": 0,
    "explanation": "Conditional Access policies can be configured to require devices to be compliant (e.g., having the latest security patches) before granting access to Azure AD-integrated applications."
  },
  {
    "id": 479,
    "question": "You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?",
    "options": ["the Data Protection Addendum", "the Microsoft Online Services Terms", "the Microsoft Privacy Statement", "Azure Security Center"],
    "answer": 2,
    "explanation": "The Microsoft Privacy Statement explains the personal data Microsoft processes, how Microsoft processes it, and for what purposes."
  },
  {
    "id": 480,
    "question": "Which cloud service model minimizes the management responsibility of a customer?",
    "options": ["infrastructure as a service (IaaS)", "platform as a service (PaaS)", "software as a service (SaaS)"],
    "answer": 2,
    "explanation": "SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user. In a SaaS environment, you're responsible for the data, devices, and users, while the provider handles nearly everything else."
  },
  {
    "id": 481,
    "question": "Which service can replace a resource lock automatically if the lock is removed?",
    "options": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "answer": 1,
    "explanation": "Azure Blueprints can apply resource locks to resources deployed by the blueprint. If a lock is removed, the blueprint assignment can re-apply it to maintain compliance."
  },
  {
    "id": 482,
    "question": "You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use?",
    "options": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "answer": [2, 4],
    "explanation": "Azure Monitor is a comprehensive monitoring solution, and Log Analytics is a tool within Azure Monitor that enables you to collect and analyze log data from your virtual machines and run queries."
  },
  {
    "id": 483,
    "question": "What should you use to track the costs of Azure resources?",
    "options": ["Azure Quickstart templates", "tags", "budgets", "usage and quotas"],
    "answer": 3,
    "explanation": "Usage and quotas in Azure Monitor/Cost Management help you track the costs and resource consumption of your Azure resources."
  },
  {
    "id": 484,
    "question": "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
    "options": ["the volume of outbound data", "the volume of inbound data", "the service tier", "the Azure region", "the type of processed data"],
    "answer": [0, 2, 3],
    "explanation": "The cost of an Azure resource is affected by the Azure region it is deployed in, the service tier (or SKU) selected, and the volume of outbound data transfer (inbound data is generally free)."
  },
  {
    "id": 485,
    "question": "Your company decides to implement passwordless authentication for an efficient user experience. Being an administrator please identify which of the following passwordless authentication options DOES NOT INTEGRATE with Azure Active Directory (Azure AD).",
    "options": ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys", "A cryptographic key"],
    "answer": 3,
    "explanation": "Passwordless Authentication in Azure AD supports Windows Hello for Business, Microsoft Authenticator app, and FIDO2 security keys. It does not support generic cryptographic keys as a standalone passwordless method."
  },
  {
    "id": 490,
    "question": "You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?",
    "options": ["Create a ReadOnly lock for storage1", "Create a delete lock for storage1", "Enable container soft delete", "Enable blob soft delete"],
    "answer": 1,
    "explanation": "A delete lock (CanNotDelete) applied to the storage account prevents the storage account and its contents (including containers) from being deleted, while still allowing new containers to be created."
  },
  {
    "id": 491,
    "question": "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "a Windows command prompt", "a web browser"],
    "answer": 3,
    "explanation": "Azure Cloud Shell is a browser-based shell experience, so you access it using a web browser via the Azure portal or shell.azure.com."
  },
  {
    "id": 494,
    "question": "You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["infrastructure as a service (IaaS)", "software as a service (SaaS)", "platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 506,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD), Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "You are not charged for Azure Active Directory Groups. Therefore, deleting unused groups will not reduce your Azure costs."
  },
  {
    "id": 510,
    "question": "Your company plans to purchase Azure. The company's support policy states that the Azure environment must provide an option to access support engineers by phone or email. Solution: Recommend a Standard support plan. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "The Standard, Professional Direct, and Premier support plans have technical support for engineers via email and phone."
  },
  {
    "id": 512,
    "question": "Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?",
    "options": ["Azure Key Vault", "Azure Multi-Factor Authentication (MFA)", "Azure Security Center", "Azure Information Protection"],
    "answer": 0,
    "explanation": "Azure Key Vault is a secure store for sensitive information. You can store administrative credentials in the Key Vault so there is no need to store them as plain text in deployment scripts."
  },
  {
    "id": 521,
    "question": "You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?",
    "options": ["a complete migration to the public cloud", "an additional data center", "a private cloud", "a hybrid cloud"],
    "answer": 3,
    "explanation": "A hybrid cloud is a combination of a private cloud and a public cloud. With a hybrid cloud, you can continue to use the on-premises servers while adding new servers in the public cloud, minimizing capital expenditure costs."
  },
  {
    "id": 529,
    "question": "Azure Germany can be used by legal residents of Germany only. (Evaluate the underlined text)",
    "options": ["no change is needed", "only enterprises that are registered in Germany", "only enterprises that purchase their Azure licenses from a partner based in Germany", "any user or enterprise that requires its data to reside in Germany"],
    "answer": 3,
    "explanation": "Azure Germany is available to eligible customers and partners globally who intend to do business in the EU/EFTA and require their data to reside in Germany."
  },
  {
    "id": 530,
    "question": "All Azure services that are in public preview are provided without any documentation. (Evaluate the underlined text)",
    "options": ["No change is needed", "only configurable from Azure CLI", "excluded from the Service Level Agreements", "only configurable from the Azure portal"],
    "answer": 2,
    "explanation": "Preview features are made available on the condition that you accept additional terms. They are excluded from Service Level Agreements (SLAs) and limited warranty."
  },
  {
    "id": 531,
    "question": "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify?",
    "options": ["Azure Data Lake", "Azure Queue storage", "Azure File Storage", "Azure IoT Hub", "Azure Notification Hubs"],
    "answer": [0, 3],
    "explanation": "IoT Hub provides data from millions of sensors, and it can route messages to Azure Data Lake Storage for long-term retention and analytics."
  },
  {
    "id": 537,
    "question": "When you are implementing a software as a service (SaaS) solution, you are responsible for configuring high availability. (Evaluate the underlined text)",
    "options": ["No change is needed", "defining scalability rules", "installing the SaaS solution", "configuring the SaaS solution"],
    "answer": 3,
    "explanation": "When implementing a SaaS solution, you are responsible for configuring the SaaS solution, not high availability. The SaaS provider manages high availability."
  },
  {
    "id": 550,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Compliance Manager from the Security Trust Portal", "the Advisor blade from the Azure portal", "the Knowledge Center website", "the Security Center blade from the Azure portal"],
    "answer": 0,
    "explanation": "Compliance Manager in the Service Trust Portal is a workflow-based risk assessment tool that helps you track, assign, and verify your organization's regulatory compliance activities."
  },
  {
    "id": 557,
    "question": "Your network contains an Active Directory forest. The forest contains 5,000 user accounts. Your company plans to migrate all network resources to Azure and to decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?",
    "options": ["Implement Azure Multi-Factor Authentication (MFA)", "Sync all the Active Directory user accounts to Azure Active Directory (Azure AD)", "Instruct all users to change their password", "Create a guest user account in Azure Active Directory (Azure AD) for each user"],
    "answer": 1,
    "explanation": "Syncing the Active Directory user accounts to Azure AD (using Azure AD Connect) is the easiest way to migrate identities and minimize impact on users."
  },
  {
    "id": 558,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Azure Cloud Shell is a browser-based shell experience. Being browser-based, it can be run on a browser from a tablet that runs the Android operating system."
  },
  {
    "id": 562,
    "question": "You need to ensure that a user can only manage virtual machines in a specific resource group. What should you use?",
    "options": ["Azure Policy", "Role-based access control (RBAC)", "Azure Blueprints", "Resource locks"],
    "answer": 1,
    "explanation": "Role-based access control (RBAC) allows you to grant granular access to Azure resources, such as allowing a user to manage VMs only in a specific resource group."
  },
  {
    "id": 563,
    "question": "Which Azure service provides a centralized identity and access management solution for both cloud and on-premises environments?",
    "options": ["Azure Active Directory (Azure AD)", "Azure Key Vault", "Azure Information Protection", "Azure Security Center"],
    "answer": 0,
    "explanation": "Azure Active Directory (Azure AD) is Microsoft's cloud-based identity and access management service."
  },
  {
    "id": 564,
    "question": "What is the primary purpose of Azure Blueprints?",
    "options": ["To monitor the performance of Azure resources", "To orchestrate the deployment of various resource templates and other artifacts", "To encrypt data at rest", "To provide DDoS protection"],
    "answer": 1,
    "explanation": "Azure Blueprints enable cloud architects to define a repeatable set of Azure resources that implement and adhere to an organization's standards, patterns, and requirements."
  },
  {
    "id": 565,
    "question": "Which storage redundancy option replicates data synchronously across three Azure availability zones in a single region?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 1,
    "explanation": "Zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region."
  },
  {
    "id": 566,
    "question": "You need to route HTTP traffic to different backend pools based on the URL path. Which Azure service should you use?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, including URL-based routing."
  },
  {
    "id": 567,
    "question": "Which Azure service provides a fully managed, intelligent SQL database service in the cloud?",
    "options": ["Azure Cosmos DB", "Azure SQL Database", "Azure Database for MySQL", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions."
  },
  {
    "id": 568,
    "question": "You need to connect an on-premises network to Azure with guaranteed bandwidth and low latency, without traversing the public internet. What should you use?",
    "options": ["Site-to-Site VPN", "Azure ExpressRoute", "Azure Virtual WAN", "Point-to-Site VPN"],
    "answer": 1,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without traversing the public internet."
  },
  {
    "id": 569,
    "question": "Which Azure support plan provides 24/7 access to support engineers via phone and email, and is the lowest cost option to do so?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest cost option that provides 24/7 access to Support Engineers via email and phone."
  },
  {
    "id": 570,
    "question": "What is the primary benefit of using Azure Reservations?",
    "options": ["It provides automatic scaling of resources", "It reduces costs by committing to a one-year or three-year plan", "It guarantees 100% uptime", "It provides free data egress"],
    "answer": 1,
    "explanation": "Azure Reservations help you save money by committing to one-year or three-year plans for multiple products, providing a significant discount compared to pay-as-you-go prices."
  },
  {
    "id": 571,
    "question": "Which Azure service is best suited for running containerized applications without managing the underlying infrastructure?",
    "options": ["Azure Virtual Machines", "Azure Container Instances", "Azure App Service", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 572,
    "question": "What is the maximum number of tags you can apply to a single Azure resource or resource group?",
    "options": ["10", "25", "50", "100"],
    "answer": 2,
    "explanation": "Each resource or resource group can have a maximum of 50 tags."
  },
  {
    "id": 573,
    "question": "You need to ensure that all virtual machines in a resource group have a specific tag. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Azure Advisor"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce tagging rules and conventions, ensuring that resources are created with specific tags."
  },
  {
    "id": 574,
    "question": "Which Azure service provides a centralized log management and analytics solution?",
    "options": ["Azure Monitor", "Log Analytics", "Application Insights", "Azure Event Hubs"],
    "answer": 1,
    "explanation": "Log Analytics is a tool within Azure Monitor that enables you to collect, search, and analyze log data from your Azure resources."
  },
  {
    "id": 575,
    "question": "You need to allow external users to collaborate with your organization using their own identities. Which Azure AD feature should you use?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration enables you to securely share your company's applications and services with guest users from any organization, while maintaining control over your corporate data."
  },
  {
    "id": 576,
    "question": "Which of the following is NOT a valid multi-factor authentication (MFA) method in Azure AD?",
    "options": ["Microsoft Authenticator app", "SMS code", "Picture identification", "Phone call"],
    "answer": 2,
    "explanation": "Picture identification and passport numbers are not valid MFA authentication methods. Valid methods include the Microsoft Authenticator app, SMS, and voice calls."
  },
  {
    "id": 577,
    "question": "You need to require users to perform MFA only when they sign in from an untrusted location. Which Azure AD feature should you use?",
    "options": [
      "Azure AD Identity Protection",
      "Conditional Access",
      "Azure AD Privileged Identity Management",
      "Azure AD Connect"
    ],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) based on specific conditions, such as signing in from an untrusted location or network."
  },
  {
    "id": 579,
    "question": "You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?",
    "options": ["the Data Protection Addendum", "the Microsoft Online Services Terms", "the Microsoft Privacy Statement", "Azure Security Center"],
    "answer": 2,
    "explanation": "The Microsoft Privacy Statement explains the personal data Microsoft processes, how Microsoft processes it, and for what purposes."
  },
  {
    "id": 580,
    "question": "Which cloud service model minimizes the management responsibility of a customer?",
    "options": ["infrastructure as a service (IaaS)", "platform as aa service (SaaS)"],
    "answer": 2,
    "explanation": "SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user."
  },
  {
    "id": 581,
    "question": "Which service can replace a resource lock automatically if the lock is removed?",
    "options": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "answer": 1,
    "explanation": "Azure Blueprints can apply resource locks to resources deployed by the blueprint. If a lock is removed, the blueprint assignment can re-apply it to maintain compliance."
  },
  {
    "id": 582,
    "question": "You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use?",
    "options": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "answer": [2, 4],
    "explanation": "Azure Monitor is a comprehensive monitoring solution, and Log Analytics is a tool within Azure Monitor that enables you to collect and analyze log data from your virtual machines and run queries."
  },
  {
    "id": 583,
    "question": "What should you use to track the costs of Azure resources?",
    "options": ["Azure Quickstart templates", "tags", "budgets", "usage and quotas"],
    "answer": 3,
    "explanation": "Usage and quotas in Azure Monitor/Cost Management help you track the costs and resource consumption of your Azure resources."
  },
  {
    "id": 584,
    "question": "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
    "options": ["the volume of outbound data", "the volume of inbound data", "the service tier", "the Azure region", "the type of processed data"],
    "answer": [0, 2, 3],
    "explanation": "The cost of an Azure resource is affected by the Azure region it is deployed in, the service tier (or SKU) selected, and the volume of outbound data transfer (inbound data is generally free)."
  },
  {
    "id": 585,
    "question": "Your company decides to implement passwordless authentication for an efficient user experience. Which of the following passwordless authentication options DOES NOT integrate with Azure Active Directory (Azure AD)?",
    "options": ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys", "A cryptographic key"],
    "answer": 3,
    "explanation": "Passwordless Authentication in Azure AD supports Windows Hello for Business, Microsoft Authenticator app, and FIDO2 security keys. It does not support generic cryptographic keys as a standalone passwordless method."
  },
  {
    "id": 586,
    "question": "You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?",
    "options": ["Create a ReadOnly lock for storage1", "Create a delete lock for storage1", "Enable container soft delete", "Enable blob soft delete"],
    "answer": 1,
    "explanation": "A delete lock (CanNotDelete) applied to the storage account prevents the storage account and its contents (including containers) from being deleted, while still allowing new containers to be created."
  },
  {
    "id": 587,
    "question": "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "a Windows command prompt", "a web browser"],
    "answer": 3,
    "explanation": "Azure Cloud Shell is a browser-based shell experience, so you access it using a web browser via the Azure portal or shell.azure.com."
  },
  {
    "id": 588,
    "question": "You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["infrastructure as a service (IaaS)", "software as a service (SaaS)", "platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 589,
    "question": "Which Azure service provides a digital online assistant that provides speech support?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 0,
    "explanation": "Azure Bot Service provides a digital online assistant that provides speech support and conversational AI capabilities."
  },
  {
    "id": 590,
    "question": "Which Azure service uses past trainings to provide predictions that have high probability?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 1,
    "explanation": "Azure Machine Learning is a data science technique that allows computers to use existing data to forecast future behaviors, outcomes, and trends."
  },
  {
    "id": 591,
    "question": "Which Azure service provides serverless computing functionalities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 592,
    "question": "Which Azure service provides data from millions of sensors?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 3,
    "explanation": "Azure IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages."
  },
  {
    "id": 593,
    "question": "An Azure AD tenant can have multiple subscriptions but an Azure subscription can only be associated with one Azure AD tenant. (Evaluate the underlined text)",
    "options": ["No change is needed", "An Azure subscription can have multiple Azure AD tenants", "An Azure AD tenant can only have one subscription", "Neither can have multiple associations"],
    "answer": 0,
    "explanation": "An Azure AD tenant can have multiple subscriptions, but an Azure subscription can only be associated with one Azure AD tenant."
  },
  {
    "id": 594,
    "question": "If your subscription expires, you lose access to all the other resources associated with the subscription. However, the Azure AD directory remains in Azure. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Azure AD directory is also deleted", "The Azure AD directory is moved to another tenant", "The Azure AD directory is frozen"],
    "answer": 0,
    "explanation": "If your subscription expires, you lose access to resources, but the Azure AD directory remains in Azure and can be associated with a different subscription."
  },
  {
    "id": 595,
    "question": "SLAs vary based on the resource type and the location distribution of the resource. However, the minimum uptime for all Azure services is 99.9 percent. (Evaluate the underlined text)",
    "options": ["No change is needed", "99.99 percent", "99.95 percent", "99.0 percent"],
    "answer": 0,
    "explanation": "The minimum uptime for all Azure services is generally 99.9 percent, though many services offer higher SLAs depending on their configuration."
  },
  {
    "id": 596,
    "question": "The SLA guaranteed uptime is increased when resources are deployed across multiple regions. (Evaluate the underlined text)",
    "options": ["No change is needed", "decreased", "remains the same", "is voided"],
    "answer": 0,
    "explanation": "The SLA guaranteed uptime is increased (usually to 99.95 percent or higher) when resources are deployed across multiple regions or availability zones."
  },
  {
    "id": 597,
    "question": "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    "options": ["Help + support", "Advisor", "Cost Management", "Subscriptions"],
    "answer": 0,
    "explanation": "You can request a standard quota increase from the Help + support blade in the Azure portal."
  },
    {
    "id": 598,
    "question": "With Azure ExpressRoute, all inbound data transfer is free of charge. (Evaluate the underlined text)",
    "options": [
      "No change is needed",
      "inbound data transfer is charged",
      "outbound data transfer is free",
      "both inbound and outbound are charged"
    ],
    "answer": 0,
    "explanation": "With Azure ExpressRoute, all inbound data transfer is free of charge. Outbound data traffic is charged at the normal rate."
  },
  {
    "id": 599,
    "question": "A company is planning on purchasing Azure AD Basic for their Azure account. Does the Azure AD Basic tier come with an SLA of 99.9%?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, Azure Active Directory Basic and Premium editions come with a financially backed 99.9% uptime SLA."
  },
  {
    "id": 600,
    "question": "A company needs to store 2 TB worth of data that is infrequently used. The data needs to be accessed via Power BI. Which of the following could be used as a cost-effective data layer for this requirement?",
    "options": ["Azure SQL databases", "Azure PostgreSQL", "Azure Cosmos DB", "Azure Data Lake"],
    "answer": 3,
    "explanation": "Azure Data Lake Storage is a cost-effective solution for storing large amounts of infrequently accessed data, and it integrates directly with Power BI."
  },
  {
    "id": 601,
    "question": "A company is planning on creating several Virtual Machines in Azure. Which of the following is the right category to which the Azure Virtual Machine belongs to?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)", "Function as a service (FaaS)"],
    "answer": 0,
    "explanation": "Azure Virtual Machines are an Infrastructure as a Service (IaaS) offering, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 602,
    "question": "A company needs to create around 50 customized Virtual Machines. Out of these 20 are Windows based Virtual machines and 30 are Ubuntu Machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
    "options": ["Azure Load Balancer", "Azure Web Apps", "Azure Traffic Manager", "Azure Scale Sets"],
    "answer": 3,
    "explanation": "Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, allowing you to centrally manage, configure, and update many VMs with minimal administrative effort."
  },
  {
    "id": 603,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that whenever users authenticate to Azure, they have to make use of Multi-Factor Authentication. Which of the following can help them achieve this?",
    "options": ["Azure AD Identity Protection", "Azure Security Centre", "Azure DDoS protection", "Azure privileged identity management"],
    "answer": 0,
    "explanation": "Azure AD Identity Protection can be configured with Conditional Access policies to require Multi-Factor Authentication (MFA) for users based on risk or other conditions."
  },
  {
    "id": 604,
    "question": "A company is planning on hosting 2 Virtual Machines in Azure. When the virtual machine is stopped (deallocated), will you still incur costs for the storage attached to the Virtual Machine?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. While you are not charged for the VM compute hours when it is stopped (deallocated), you continue to accrue charges for the Azure storage (disks) attached to the VM."
  },
  {
    "id": 605,
    "question": "A company is planning on setting up a solution in Azure. The solution has the following key requirement: An Integration solution for the deployment of code. Which of the following would be best suited for this requirement?",
    "options": ["Azure Advisor", "Azure Cognitive Services", "Azure Application Insights", "Azure DevOps"],
    "answer": 3,
    "explanation": "Azure DevOps includes Azure Pipelines, which can be used to build, test, and deploy code continuously as an integration solution."
  },
  {
    "id": 606,
    "question": "An IT Engineer needs to create a Virtual Machine in Azure. Currently the IT Engineer has a Windows desktop and has installed the Azure Command Line interface. From which of the following could the IT engineer use the Azure Command Line Interface?",
    "options": ["Powershell", "File and Print Explorer", "Command Prompt", "Control Panel"],
    "answer": [0, 2],
    "explanation": "On Windows, the Azure CLI can be executed from either the Windows Command Prompt (CMD) or Windows PowerShell."
  },
  {
    "id": 607,
    "question": "A company wants to try out some services which are being offered by Azure in Public Preview. Should the company deploy resources which are part of Public Preview in their production environment?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in Public Preview are excluded from Service Level Agreements (SLAs) and may have breaking changes. They should not be used in production."
  },
  {
    "id": 608,
    "question": "A company is planning on using Azure Storage Accounts. They have the following requirements: Storage of 2 TB of data, Storage of a million files. Would using Azure Storage fulfil these requirements?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Storage has a very high scalability limit (up to 5 PiB per storage account) and supports hundreds of millions of files."
  },
  {
    "id": 609,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that suspicious attacks and threats to resources in their Azure account are prevented. Which of the following helps prevent such attacks by using in-built sensors in Azure?",
    "options": ["Azure AD Identity Protection", "Azure DDoS attacks", "Azure privileged identity management", "Azure Advanced Threat protection"],
    "answer": 3,
    "explanation": "Azure Advanced Threat Protection (ATP) uses in-built sensors to monitor on-premises Active Directory signals to identify, detect, and investigate advanced threats."
  },
  {
    "id": 610,
    "question": "A company has just deployed a Virtual Machine named demovm to Azure. The company needs to know if the underlying infrastructure in Azure hosting the Virtual Machine has any issues. Where could they view such issues?",
    "options": ["Azure Advisor", "Azure AD", "The Virtual Machine blade", "Azure Monitor"],
    "answer": 2,
    "explanation": "You can view service health issues for the infrastructure of the Virtual Machine directly in the VM blade under 'Resource health'."
  },
  {
    "id": 611,
    "question": "A company is planning on deploying a web server and database server. You have to ensure that traffic restrictions are in place so that the database server can only communicate with the web server. Which of the following would you recommend for implementing these restrictions?",
    "options": ["Network security groups (NSGs)", "Azure Service Bus", "A local network gateway", "A Virtual Private Gateway"],
    "answer": 0,
    "explanation": "Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources, allowing you to restrict communication between specific subnets or VMs."
  },
  {
    "id": 612,
    "question": "A company wants to make use of an Azure service in private preview. Are Azure services in private preview available to all customers?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in private preview are available only to selected customers who have been invited or have signed up for the private preview program."
  },
  {
    "id": 613,
    "question": "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
    "options": ["an Azure Active Directory (Azure AD) role", "an Azure key vault", "an Azure Active Directory group", "a network security group (NSG)"],
    "answer": 3,
    "explanation": "A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on port and protocol."
  },
  {
    "id": 614,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Which three computers can run the script?",
    "options": ["a computer that runs macOS and has PowerShell Core 6.0 installed", "a computer that runs Windows 10 and has the Azure PowerShell module installed", "a computer that runs Chrome OS and uses Azure Cloud Shell", "a computer that runs Linux and has the Azure CLI tools installed", "a computer that runs Linux and has the Azure PowerShell module installed"],
    "answer": [1, 2, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts."
  },
  {
    "id": 615,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    "options": ["Modify a DDoS protection plan.", "Modify an Azure firewall.", "Modify an Azure Traffic Manager profile.", "Modify a network security group (NSG)."],
    "answer": [1, 3],
    "explanation": "You can allow HTTP traffic (port 80) to a virtual machine by adding an inbound security rule to a Network Security Group (NSG) or by configuring a rule in Azure Firewall."
  },
  {
    "id": 616,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    "options": ["the user accounts", "the network interfaces", "the public IP addresses", "the groups"],
    "answer": 2,
    "explanation": "You are charged for public IP addresses. Deleting unused public IP addresses will directly reduce your Azure costs. User accounts, groups, and unattached network interfaces do not incur charges."
  },
  {
    "id": 617,
    "question": "Which task can you perform by using Azure Advisor?",
    "options": ["Integrate Active Directory and Azure Active Directory (Azure AD).", "Estimate the costs of an Azure solution.", "Confirm that Azure subscription security follows best practices.", "Evaluate which on-premises resources can be migrated to Azure."],
    "answer": 2,
    "explanation": "Azure Advisor integrates with Microsoft Defender for Cloud to provide security recommendations, helping you confirm that your Azure subscription security follows best practices."
  },
  {
    "id": 618,
    "question": "Your company uses management groups to manage resources in your Azure tenant more efficiently. User1 should be able to assign access and assign policies to management groups. Your solution should follow the principle of least privilege. To which role should you add User1?",
    "options": ["User Access Administrator", "Owner", "Management Group Contributor", "Contributor"],
    "answer": 0,
    "explanation": "The User Access Administrator role allows a user to manage access to Azure resources and assign policies, following the principle of least privilege compared to the Owner role."
  },
  {
    "id": 619,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 620,
    "question": "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
    "options": ["private", "hybrid", "public"],
    "answer": 2,
    "explanation": "In a public cloud model, the hardware resources are owned and managed by a third-party cloud provider and are shared among multiple tenants (customers)."
  },
  {
    "id": 621,
    "question": "Identify two options from below that reflect two valid hybrid cloud infrastructures.",
    "options": ["On premises infrastructures and public cloud", "Private and public cloud", "Multiple public clouds", "On premises infrastructures and private cloud"],
    "answer": [0, 1],
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 622,
    "question": "A company has an Azure infrastructure deployed. Three virtual machines (VMs) are deployed as a three-tiered architecture: a front-end web application, a Microsoft SQL Server database, and a business API. For public access, only the front-end web application should be accessible over HTTP on port 80. All three VMs must be accessible over RDP on port 222 by only your account. Identify two ways NSG rules can be used.",
    "options": ["To ensure that only your account can use RDP to access the VMs", "To ensure that only the front-end VM is publicly accessible over port 80", "To ensure that all three VMs are accessible over port 222", "Reviewed by executive management before being released to the public"],
    "answer": [0, 1],
    "explanation": "NSG rules can be configured to allow inbound HTTP (port 80) traffic only to the front-end VM's subnet/NIC, and to allow inbound RDP (port 222) traffic only from your specific source IP address."
  },
  {
    "id": 623,
    "question": "A new policy has been implemented in your organization that limits access to resource group and resource scopes in a detailed, granular way. Various groups and users will be provided access. What would you choose to use to implement the new policy?",
    "options": ["Azure Advisor", "Role-based access control (RBAC)", "Azure Policies", "Locks"],
    "answer": 1,
    "explanation": "Azure Role-Based Access Control (RBAC) is used to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to at a granular scope."
  },
  {
    "id": 624,
    "question": "Cost per subscriber for a cloud service provider reduces with the increase in number of subscribers. It is a public cloud service. Can you identify what this would be called?",
    "options": ["Consumption-based billing", "Operational expenditures", "Scalability", "Economies of scale"],
    "answer": 3,
    "explanation": "Economies of scale refers to the cost advantage that arises with increased output of a product. In cloud computing, as the provider serves more customers, the cost per customer decreases."
  },
  {
    "id": 625,
    "question": "Identify a justification that validates the fact that Azure lowers a company's capital expenditure costs.",
    "options": ["Azure allows you to reduce the level of IT staffing that is required to maintain on-premises application and services", "Azure allows you to pay monthly based on usage rather than pay upfront for physical hardware.", "Azure allows you to pay annually to reduce overall costs that are associated with its platform-as-a-service (PaaS) offerings.", "Azure reduces the amount of maintenance that is associated with the configuration of firewalls, which reduces costs."],
    "answer": 1,
    "explanation": "Capital expenditure (CapEx) is the upfront cost of buying physical hardware. Azure's pay-as-you-go model shifts this to operational expenditure (OpEx), eliminating the need for large upfront hardware purchases."
  },
  {
    "id": 626,
    "question": "Identify what purpose the load balancer resource has.",
    "options": ["It uses URL-based routing to route web traffic across multiple instances", "It distributes virtual machine traffic evenly across multiple instances", "It delivers internet traffic to the datacenter that is geographically closest to the user.", "It adds or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 627,
    "question": "An organization wants to develop and deploy web apps, for which it subscribes to Azure. It is desired to keep the expenses to a minimum before the app is finally released. Identify two features available in the Azure Active Directory (AD) Free edition.",
    "options": ["Company branding", "User and Group management", "Group based access management", "Self-service password change for cloud users"],
    "answer": [1, 3],
    "explanation": "Azure AD Free edition includes core identity features such as User and Group management, and Self-service password change/reset for cloud users. Company branding and group-based access require Premium editions."
  },
  {
    "id": 628,
    "question": "You want to extract insights by querying and transforming data for which you would require an Azure big data solution. Identify which of the following is the most appropriate tool to use.",
    "options": ["Blob Storage", "Data Lake Analytics", "Azure SQL Database", "Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. It allows you to query and transform massive amounts of data."
  },
  {
    "id": 629,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Azure Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Firewall is a stateful firewall that can filter traffic between subnets based on protocol, source/destination IP addresses, and port numbers."
  },
  {
    "id": 630,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Web Application Firewall (WAF) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. A Web Application Firewall (WAF) operates at Layer 7 (HTTP/HTTPS) and is designed to protect web applications from specific exploits, not for general subnet-to-subnet IP/port filtering."
  },
  {
    "id": 631,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them based on: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest a Network Security Group (NSG) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. An NSG can filter network traffic to and from Azure resources in a virtual network based on source/destination IP, port, and protocol."
  },
  {
    "id": 632,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["an Azure web app", "an Azure virtual machine", "an Azure logic app", "an Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Web apps, logic apps, and SQL databases are Platform as a Service (PaaS)."
  },
  {
    "id": 633,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["private cloud and hybrid cloud only", "private cloud only", "private cloud, hybrid cloud and public cloud", "hybrid cloud only"],
    "answer": 0,
    "explanation": "You can deploy physical servers in a private cloud (on-premises) or a hybrid cloud (which includes on-premises resources). You cannot deploy physical servers in a public cloud."
  },
  {
    "id": 634,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["hybrid", "private", "public"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure (private cloud) with public cloud resources (Azure), allowing them to connect and share data."
  },
  {
    "id": 635,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 636,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 637,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "within a single Azure region", "within multiple Azure regions", "within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 638,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell has the Azure CLI pre-installed and configured. The 'az' command will work in the PowerShell environment within Cloud Shell."
  },
  {
    "id": 639,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from within Windows PowerShell."
  },
  {
    "id": 640,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from the standard Windows Command Prompt (CMD)."
  },
  {
    "id": 641,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. A PowerShell script requires PowerShell and the Azure PowerShell module to be installed on the computer to execute Azure cmdlets."
  },
  {
    "id": 642,
    "question": "Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell provides both Bash and PowerShell environments, both of which have the Azure CLI pre-installed and configured."
  },
  {
    "id": 643,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "The statement is correct. Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 644,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 645,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    "options": ["Azure CLI", "the Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 646,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 647,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security & Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 648,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 649,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "an application security group", "Azure DDoS protection", "a network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 650,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "the Microsoft Cloud Partner Portal", "Compliance Manager", "the Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 651,
    "question": "You need to ensure that an Azure virtual machine can only be accessed from a specific IP address. What should you configure?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory (Azure AD)"],
    "answer": 1,
    "explanation": "A Network Security Group (NSG) contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on source and destination IP addresses, ports, and protocols."
  },
  {
    "id": 652,
    "question": "Which Azure service provides a centralized identity and access management solution?",
    "options": ["Azure Key Vault", "Azure Active Directory (Azure AD)", "Azure Information Protection", "Azure Security Center"],
    "answer": 1,
    "explanation": "Azure Active Directory (Azure AD) is Microsoft's cloud-based identity and access management service, which helps employees sign in and access resources."
  },
  {
    "id": 653,
    "question": "What is the primary purpose of Azure Blueprints?",
    "options": ["To monitor the performance of Azure resources", "To orchestrate the deployment of various resource templates and artifacts to maintain compliance", "To encrypt data at rest", "To provide DDoS protection"],
    "answer": 1,
    "explanation": "Azure Blueprints enable cloud architects to define a repeatable set of Azure resources that implement and adhere to an organization's standards, patterns, and requirements."
  },
  {
    "id": 654,
    "question": "Which storage redundancy option replicates data synchronously across three Azure availability zones in a single region?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 1,
    "explanation": "Zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region."
  },
  {
    "id": 655,
    "question": "You need to route HTTP traffic to different backend pools based on the URL path. Which Azure service should you use?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, including URL-based routing."
  },
  {
    "id": 656,
    "question": "Which Azure service provides a fully managed, intelligent SQL database service in the cloud?",
    "options": ["Azure Cosmos DB", "Azure SQL Database", "Azure Database for MySQL", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions."
  },
  {
    "id": 657,
    "question": "You need to connect an on-premises network to Azure with guaranteed bandwidth and low latency, without traversing the public internet. What should you use?",
    "options": ["Site-to-Site VPN", "Azure ExpressRoute", "Azure Virtual WAN", "Point-to-Site VPN"],
    "answer": 1,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without traversing the public internet."
  },
  {
    "id": 658,
    "question": "Which Azure support plan provides 24/7 access to support engineers via phone and email, and is the lowest cost option to do so?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest cost option that provides 24/7 access to Support Engineers via email and phone."
  },
  {
    "id": 659,
    "question": "What is the primary benefit of using Azure Reservations?",
    "options": ["It provides automatic scaling of resources", "It reduces costs by committing to a one-year or three-year plan", "It guarantees 100 percent uptime", "It provides free data egress"],
    "answer": 1,
    "explanation": "Azure Reservations help you save money by committing to one-year or three-year plans for multiple products, providing a significant discount compared to pay-as-you-go prices."
  },
  {
    "id": 660,
    "question": "Which Azure service is best suited for running containerized applications without managing the underlying infrastructure?",
    "options": ["Azure Virtual Machines", "Azure Container Instances", "Azure App Service", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 661,
    "question": "What is the maximum number of tags you can apply to a single Azure resource or resource group?",
    "options": ["10", "25", "50", "100"],
    "answer": 2,
    "explanation": "Each resource or resource group can have a maximum of 50 tags."
  },
  {
    "id": 662,
    "question": "You need to ensure that all virtual machines in a resource group have a specific tag. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Azure Advisor"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce tagging rules and conventions, ensuring that resources are created with specific tags."
  },
  {
    "id": 663,
    "question": "Which Azure service provides a centralized log management and analytics solution?",
    "options": ["Azure Monitor", "Log Analytics", "Application Insights", "Azure Event Hubs"],
    "answer": 1,
    "explanation": "Log Analytics is a tool within Azure Monitor that enables you to collect, search, and analyze log data from your Azure resources."
  },
  {
    "id": 664,
    "question": "You need to allow external users to collaborate with your organization using their own identities. Which Azure AD feature should you use?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration enables you to securely share your company's applications and services with guest users from any organization, while maintaining control over your corporate data."
  },
  {
    "id": 665,
    "question": "Which of the following is NOT a valid multi-factor authentication (MFA) method in Azure AD?",
    "options": ["Microsoft Authenticator app", "SMS code", "Picture identification", "Phone call"],
    "answer": 2,
    "explanation": "Picture identification and passport numbers are not valid MFA authentication methods. Valid methods include the Microsoft Authenticator app, SMS, and voice calls."
  },
  {
    "id": 666,
    "question": "You need to require users to perform MFA only when they sign in from an untrusted location. Which Azure AD feature should you use?",
    "options": ["Azure AD Identity Protection", "Conditional Access", "Azure AD Privileged Identity Management", "Azure AD Connect"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) based on specific conditions, such as signing in from an untrusted location or network."
  },
  {
    "id": 667,
    "question": "You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?",
    "options": ["The Data Protection Addendum", "The Microsoft Online Services Terms", "The Microsoft Privacy Statement", "Azure Security Center"],
    "answer": 2,
    "explanation": "The Microsoft Privacy Statement explains the personal data Microsoft processes, how Microsoft processes it, and for what purposes."
  },
  {
    "id": 668,
    "question": "Which cloud service model minimizes the management responsibility of a customer?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)"],
    "answer": 2,
    "explanation": "SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user."
  },
  {
    "id": 669,
    "question": "Which service can replace a resource lock automatically if the lock is removed?",
    "options": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "answer": 1,
    "explanation": "Azure Blueprints can apply resource locks to resources deployed by the blueprint. If a lock is removed, the blueprint assignment can re-apply it to maintain compliance."
  },
  {
    "id": 670,
    "question": "You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use?",
    "options": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "answer": [2, 4],
    "explanation": "Azure Monitor is a comprehensive monitoring solution, and Log Analytics is a tool within Azure Monitor that enables you to collect and analyze log data from your virtual machines and run queries."
  },
  {
    "id": 671,
    "question": "What should you use to track the costs of Azure resources?",
    "options": ["Azure Quickstart templates", "Tags", "Budgets", "Usage and quotas"],
    "answer": 3,
    "explanation": "Usage and quotas in Azure Monitor and Cost Management help you track the costs and resource consumption of your Azure resources."
  },
  {
    "id": 672,
    "question": "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
    "options": ["The volume of outbound data", "The volume of inbound data", "The service tier", "The Azure region", "The type of processed data"],
    "answer": [0, 2, 3],
    "explanation": "The cost of an Azure resource is affected by the Azure region it is deployed in, the service tier (or SKU) selected, and the volume of outbound data transfer (inbound data is generally free)."
  },
  {
    "id": 673,
    "question": "Your company decides to implement passwordless authentication for an efficient user experience. Which of the following passwordless authentication options DOES NOT integrate with Azure Active Directory (Azure AD)?",
    "options": ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys", "A cryptographic key"],
    "answer": 3,
    "explanation": "Passwordless Authentication in Azure AD supports Windows Hello for Business, Microsoft Authenticator app, and FIDO2 security keys. It does not support generic cryptographic keys as a standalone passwordless method."
  },
  {
    "id": 674,
    "question": "You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?",
    "options": ["Create a ReadOnly lock for storage1", "Create a delete lock for storage1", "Enable container soft delete", "Enable blob soft delete"],
    "answer": 1,
    "explanation": "A delete lock (CanNotDelete) applied to the storage account prevents the storage account and its contents (including containers) from being deleted, while still allowing new containers to be created."
  },
  {
    "id": 675,
    "question": "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "A Windows command prompt", "A web browser"],
    "answer": 3,
    "explanation": "Azure Cloud Shell is a browser-based shell experience, so you access it using a web browser via the Azure portal or shell.azure.com."
  },
  {
    "id": 676,
    "question": "You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["Infrastructure as a service (IaaS)", "Software as a service (SaaS)", "Platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 677,
    "question": "Which Azure service provides a digital online assistant that provides speech support?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 0,
    "explanation": "Azure Bot Service provides a digital online assistant that provides speech support and conversational AI capabilities."
  },
  {
    "id": 678,
    "question": "Which Azure service uses past trainings to provide predictions that have high probability?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 1,
    "explanation": "Azure Machine Learning is a data science technique that allows computers to use existing data to forecast future behaviors, outcomes, and trends."
  },
  {
    "id": 679,
    "question": "Which Azure service provides serverless computing functionalities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 680,
    "question": "Which Azure service provides data from millions of sensors?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 3,
    "explanation": "Azure IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages."
  },
  {
    "id": 681,
    "question": "An Azure AD tenant can have multiple subscriptions but an Azure subscription can only be associated with one Azure AD tenant. (Evaluate the underlined text)",
    "options": ["No change is needed", "An Azure subscription can have multiple Azure AD tenants", "An Azure AD tenant can only have one subscription", "Neither can have multiple associations"],
    "answer": 0,
    "explanation": "An Azure AD tenant can have multiple subscriptions, but an Azure subscription can only be associated with one Azure AD tenant."
  },
  {
    "id": 682,
    "question": "If your subscription expires, you lose access to all the other resources associated with the subscription. However, the Azure AD directory remains in Azure. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Azure AD directory is also deleted", "The Azure AD directory is moved to another tenant", "The Azure AD directory is frozen"],
    "answer": 0,
    "explanation": "If your subscription expires, you lose access to resources, but the Azure AD directory remains in Azure and can be associated with a different subscription."
  },
  {
    "id": 683,
    "question": "SLAs vary based on the resource type and the location distribution of the resource. However, the minimum uptime for all Azure services is 99.9 percent. (Evaluate the underlined text)",
    "options": ["No change is needed", "99.99 percent", "99.95 percent", "99.0 percent"],
    "answer": 0,
    "explanation": "The minimum uptime for all Azure services is generally 99.9 percent, though many services offer higher SLAs depending on their configuration."
  },
  {
    "id": 684,
    "question": "The SLA guaranteed uptime is increased when resources are deployed across multiple regions. (Evaluate the underlined text)",
    "options": ["No change is needed", "Decreased", "Remains the same", "Is voided"],
    "answer": 0,
    "explanation": "The SLA guaranteed uptime is increased (usually to 99.95 percent or higher) when resources are deployed across multiple regions or availability zones."
  },
  {
    "id": 685,
    "question": "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    "options": ["Help and support", "Advisor", "Cost Management", "Subscriptions"],
    "answer": 0,
    "explanation": "You can request a standard quota increase from the Help and support blade in the Azure portal."
  },
  {
    "id": 686,
    "question": "With Azure ExpressRoute, all inbound data transfer is free of charge. (Evaluate the underlined text)",
    "options": ["No change is needed", "Inbound data transfer is charged", "Outbound data transfer is free", "Both inbound and outbound are charged"],
    "answer": 0,
    "explanation": "With Azure ExpressRoute, all inbound data transfer is free of charge. Outbound data traffic is charged at the normal rate."
  },
  {
    "id": 687,
    "question": "A company is planning on purchasing Azure AD Basic for their Azure account. Does the Azure AD Basic tier come with an SLA of 99.9 percent?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, Azure Active Directory Basic and Premium editions come with a financially backed 99.9 percent uptime SLA."
  },
  {
    "id": 688,
    "question": "A company needs to store 2 TB worth of data that is infrequently used. The data needs to be accessed via Power BI. Which of the following could be used as a cost-effective data layer for this requirement?",
    "options": ["Azure SQL databases", "Azure PostgreSQL", "Azure Cosmos DB", "Azure Data Lake"],
    "answer": 3,
    "explanation": "Azure Data Lake Storage is a cost-effective solution for storing large amounts of infrequently accessed data, and it integrates directly with Power BI."
  },
  {
    "id": 689,
    "question": "A company is planning on creating several Virtual Machines in Azure. Which of the following is the right category to which the Azure Virtual Machine belongs to?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)", "Function as a service (FaaS)"],
    "answer": 0,
    "explanation": "Azure Virtual Machines are an Infrastructure as a Service (IaaS) offering, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 690,
    "question": "A company needs to create around 50 customized Virtual Machines. Out of these 20 are Windows based Virtual machines and 30 are Ubuntu Machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
    "options": ["Azure Load Balancer", "Azure Web Apps", "Azure Traffic Manager", "Azure Scale Sets"],
    "answer": 3,
    "explanation": "Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, allowing you to centrally manage, configure, and update many VMs with minimal administrative effort."
  },
  {
    "id": 691,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that whenever users authenticate to Azure, they have to make use of Multi-Factor Authentication. Which of the following can help them achieve this?",
    "options": ["Azure AD Identity Protection", "Azure Security Centre", "Azure DDoS protection", "Azure privileged identity management"],
    "answer": 0,
    "explanation": "Azure AD Identity Protection can be configured with Conditional Access policies to require Multi-Factor Authentication (MFA) for users based on risk or other conditions."
  },
  {
    "id": 692,
    "question": "A company is planning on hosting 2 Virtual Machines in Azure. When the virtual machine is stopped (deallocated), will you still incur costs for the storage attached to the Virtual Machine?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. While you are not charged for the VM compute hours when it is stopped (deallocated), you continue to accrue charges for the Azure storage (disks) attached to the VM."
  },
  {
    "id": 693,
    "question": "A company is planning on setting up a solution in Azure. The solution has the following key requirement: An Integration solution for the deployment of code. Which of the following would be best suited for this requirement?",
    "options": ["Azure Advisor", "Azure Cognitive Services", "Azure Application Insights", "Azure DevOps"],
    "answer": 3,
    "explanation": "Azure DevOps includes Azure Pipelines, which can be used to build, test, and deploy code continuously as an integration solution."
  },
  {
    "id": 694,
    "question": "An IT Engineer needs to create a Virtual Machine in Azure. Currently the IT Engineer has a Windows desktop and has installed the Azure Command Line interface. From which of the following could the IT engineer use the Azure Command Line Interface?",
    "options": ["PowerShell", "File and Print Explorer", "Command Prompt", "Control Panel"],
    "answer": [0, 2],
    "explanation": "On Windows, the Azure CLI can be executed from either the Windows Command Prompt (CMD) or Windows PowerShell."
  },
  {
    "id": 695,
    "question": "A company wants to try out some services which are being offered by Azure in Public Preview. Should the company deploy resources which are part of Public Preview in their production environment?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in Public Preview are excluded from Service Level Agreements (SLAs) and may have breaking changes. They should not be used in production."
  },
  {
    "id": 696,
    "question": "A company is planning on using Azure Storage Accounts. They have the following requirement: Storage of 2 TB of data, Storage of a million files. Would using Azure Storage fulfil these requirements?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Storage has a very high scalability limit (up to 5 PiB per storage account) and supports hundreds of millions of files."
  },
  {
    "id": 697,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that suspicious attacks and threats to resources in their Azure account are prevented. Which of the following helps prevent such attacks by using in-built sensors in Azure?",
    "options": ["Azure AD Identity Protection", "Azure DDoS attacks", "Azure privileged identity management", "Azure Advanced Threat protection"],
    "answer": 3,
    "explanation": "Azure Advanced Threat Protection (ATP) uses in-built sensors to monitor on-premises Active Directory signals to identify, detect, and investigate advanced threats."
  },
  {
    "id": 698,
    "question": "A company has just deployed a Virtual Machine named demovm to Azure. The company needs to know if the underlying infrastructure in Azure hosting the Virtual Machine has any issues. Where could they view such issues?",
    "options": ["Azure Advisor", "Azure AD", "The Virtual Machine blade", "Azure Monitor"],
    "answer": 2,
    "explanation": "You can view service health issues for the infrastructure of the Virtual Machine directly in the VM blade under Resource health."
  },
  {
    "id": 699,
    "question": "A company is planning on deploying a web server and database server. You have to ensure that traffic restrictions are in place so that the database server can only communicate with the web server. Which of the following would you recommend for implementing these restrictions?",
    "options": ["Network security groups (NSGs)", "Azure Service Bus", "A local network gateway", "A Virtual Private Gateway"],
    "answer": 0,
    "explanation": "Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources, allowing you to restrict communication between specific subnets or VMs."
  },
  {
    "id": 700,
    "question": "A company wants to make use of an Azure service in private preview. Are Azure services in private preview available to all customers?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in private preview are available only to selected customers who have been invited or have signed up for the private preview program."
  },
  {
    "id": 701,
    "question": "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
    "options": ["An Azure Active Directory (Azure AD) role", "An Azure key vault", "An Azure Active Directory group", "A network security group (NSG)"],
    "answer": 3,
    "explanation": "A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on port and protocol."
  },
  {
    "id": 702,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Which three computers can run the script?",
    "options": ["A computer that runs macOS and has PowerShell Core 6.0 installed", "A computer that runs Windows 10 and has the Azure PowerShell module installed", "A computer that runs Chrome OS and uses Azure Cloud Shell", "A computer that runs Linux and has the Azure CLI tools installed", "A computer that runs Linux and has the Azure PowerShell module installed"],
    "answer": [1, 2, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts."
  },
  {
    "id": 703,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    "options": ["Modify a DDoS protection plan", "Modify an Azure firewall", "Modify an Azure Traffic Manager profile", "Modify a network security group (NSG)"],
    "answer": [1, 3],
    "explanation": "You can allow HTTP traffic (port 80) to a virtual machine by adding an inbound security rule to a Network Security Group (NSG) or by configuring a rule in Azure Firewall."
  },
  {
    "id": 704,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    "options": ["The user accounts", "The network interfaces", "The public IP addresses", "The groups"],
    "answer": 2,
    "explanation": "You are charged for public IP addresses. Deleting unused public IP addresses will directly reduce your Azure costs. User accounts, groups, and unattached network interfaces do not incur charges."
  },
  {
    "id": 705,
    "question": "Which task can you perform by using Azure Advisor?",
    "options": ["Integrate Active Directory and Azure Active Directory (Azure AD)", "Estimate the costs of an Azure solution", "Confirm that Azure subscription security follows best practices", "Evaluate which on-premises resources can be migrated to Azure"],
    "answer": 2,
    "explanation": "Azure Advisor integrates with Microsoft Defender for Cloud to provide security recommendations, helping you confirm that your Azure subscription security follows best practices."
  },
  {
    "id": 706,
    "question": "Your company uses management groups to manage resources in your Azure tenant more efficiently. User1 should be able to assign access and assign policies to management groups. Your solution should follow the principle of least privilege. To which role should you add User1?",
    "options": ["User Access Administrator", "Owner", "Management Group Contributor", "Contributor"],
    "answer": 0,
    "explanation": "The User Access Administrator role allows a user to manage access to Azure resources and assign policies, following the principle of least privilege compared to the Owner role."
  },
  {
    "id": 707,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 708,
    "question": "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
    "options": ["Private", "Hybrid", "Public"],
    "answer": 2,
    "explanation": "In a public cloud model, the hardware resources are owned and managed by a third-party cloud provider and are shared among multiple tenants (customers)."
  },
  {
    "id": 709,
    "question": "Identify two options from below that reflect two valid hybrid cloud infrastructures.",
    "options": ["On premises infrastructures and public cloud", "Private and public cloud", "Multiple public clouds", "On premises infrastructures and private cloud"],
    "answer": [0, 1],
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 710,
    "question": "A company has an Azure infrastructure deployed. Three virtual machines (VMs) are deployed to Azure as a three-tiered architecture. All three VMs host different items, with one hosting a front-end web application, one hosting a Microsoft SQL Server database and one hosting a business application programming interface (API). For public access, only the front-end web application be available and should be accessible over HTTP on port 80. All three VMs must be accessible over Remote Desktop Protocol (RDP) on port 222. There should be only one account able to access the VMs using RDP, and it should be yours. Can you determine how Network Security Groups (NSGs) will be used in this scenario? Identify the two ways NSG rules can be used.",
    "options": ["To ensure that only your account can use RDP to access the VMs", "To ensure that only the front-end VM is publicly accessible over port 80", "To ensure that all three VMs are accessible over port 222", "Reviewed by executive management before being released to the public"],
    "answer": [0, 1],
    "explanation": "NSG rules can be configured to allow inbound HTTP (port 80) traffic only to the front-end VM's subnet/NIC, and to allow inbound RDP (port 222) traffic only from your specific source IP address."
  },
  {
    "id": 711,
    "question": "A new policy has been implemented in your organization that limits access to resource group and resource scopes in a detailed, granular way. Various groups and users will be provided access. What would you choose to use if you want to implement the new policy?",
    "options": ["Azure Advisor", "Role-based access control (RBAC)", "Azure Policies", "Locks"],
    "answer": 1,
    "explanation": "Azure Role-Based Access Control (RBAC) is used to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to at a granular scope."
  },
  {
    "id": 712,
    "question": "Cost per subscriber for a cloud service provider reduces with the increase in number of subscribers. It is a public cloud service. Can you identify what this would be called?",
    "options": ["Consumption-based billing", "Operational expenditures", "Scalability", "Economies of scale"],
    "answer": 3,
    "explanation": "Economies of scale refers to the cost advantage that arises with increased output of a product. In cloud computing, as the provider serves more customers, the cost per customer decreases."
  },
  {
    "id": 713,
    "question": "Identify a justification that validates that fact that Azure lowers a company's capital expenditure costs.",
    "options": ["Azure allows you to reduce the level of IT staffing that is required to maintain on-premises application and services", "Azure allows you to pay monthly based on usage rather than pay upfront for physical hardware", "Azure allows you to pay annually to reduce overall costs that are associated with its platform-as-a-service (PaaS) offerings", "Azure reduces the amount of maintenance that is associated with the configuration of firewalls, which reduces costs"],
    "answer": 1,
    "explanation": "Capital expenditure (CapEx) is the upfront cost of buying physical hardware. Azure's pay-as-you-go model shifts this to operational expenditure (OpEx), eliminating the need for large upfront hardware purchases."
  },
  {
    "id": 714,
    "question": "Identify what purpose does the load balancer resource have.",
    "options": ["It uses URL-based routing to route web traffic across multiple instances", "It distributes virtual machine traffic evenly across multiple instances", "It delivers internet traffic to the datacenter that is geographically closest to the user", "It adds or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 715,
    "question": "An organization wants to develop and deploy web apps, for which it subscribes to Azure as a platform. It is desired to keep the expenses to a minimum before the app is finally released. You have to identify the features available in Azure Active Directory (AD) Free edition. Choose two options from below that are available in the Azure Active Directory (AD) Free edition.",
    "options": ["Company branding", "User and Group management", "Group based access management", "Self service password change for cloud users"],
    "answer": [1, 3],
    "explanation": "Azure AD Free edition includes core identity features such as User and Group management, and Self-service password change/reset for cloud users. Company branding and group-based access require Premium editions."
  },
  {
    "id": 716,
    "question": "You want to extract insights by querying and transforming data for which you would require an Azure big data solution. Identify which of the following do you think is the most appropriate tool to use.",
    "options": ["Blob Storage", "Data Lake Analytics", "Azure SQL Database", "Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. It allows you to query and transform massive amounts of data."
  },
  {
    "id": 717,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Azure Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Firewall is a stateful firewall that can filter traffic between subnets based on protocol, source/destination IP addresses, and port numbers."
  },
  {
    "id": 718,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Web Application Firewall (WAF) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. A Web Application Firewall (WAF) operates at Layer 7 (HTTP/HTTPS) and is designed to protect web applications from specific exploits, not for general subnet-to-subnet IP/port filtering."
  },
  {
    "id": 719,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Network Security Group to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. An NSG can filter network traffic to and from Azure resources in a virtual network based on source/destination IP, port, and protocol."
  },
  {
    "id": 720,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["An Azure web app", "An Azure virtual machine", "An Azure logic app", "An Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Web apps, logic apps, and SQL databases are Platform as a Service (PaaS)."
  },
  {
    "id": 721,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["Private cloud and hybrid cloud only", "Private cloud only", "Private cloud, hybrid cloud and public cloud", "Hybrid cloud only"],
    "answer": 0,
    "explanation": "You can deploy physical servers in a private cloud (on-premises) or a hybrid cloud (which includes on-premises resources). You cannot deploy physical servers in a public cloud."
  },
  {
    "id": 722,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["Hybrid", "Private", "Public"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure (private cloud) with public cloud resources (Azure), allowing them to connect and share data."
  },
  {
    "id": 723,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 724,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 725,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "Within a single Azure region", "Within multiple Azure regions", "Within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 726,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell has the Azure CLI pre-installed and configured. The az command will work in the PowerShell environment within Cloud Shell."
  },
  {
    "id": 727,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from within Windows PowerShell."
  },
  {
    "id": 728,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from the standard Windows Command Prompt (CMD)."
  },
  {
    "id": 729,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. A PowerShell script requires PowerShell and the Azure PowerShell module to be installed on the computer to execute Azure cmdlets."
  },
  {
    "id": 730,
    "question": "Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell provides both Bash and PowerShell environments, both of which have the Azure CLI pre-installed and configured."
  },
  {
    "id": 731,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "The statement is correct. Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 732,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 733,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    "options": ["Azure CLI", "The Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 734,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 735,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security and Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 736,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 737,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "An application security group", "Azure DDoS protection", "A network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 738,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Microsoft Cloud Partner Portal", "Compliance Manager", "The Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 739,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 740,
    "question": "You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?",
    "options": ["An Azure Storage account", "An Azure Information Protection policy", "An Encryption Key", "An Azure Key Vault"],
    "answer": 3,
    "explanation": "Azure Disk Encryption requires an Azure Key Vault to control and manage disk encryption keys and secrets."
  },
  {
    "id": 741,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you are using, including planned maintenance activities."
  },
  {
    "id": 742,
    "question": "What can you use to identify underutilized or unused Azure virtual machines?",
    "options": ["Azure Advisor", "Azure Cost Management and Billing", "Azure reservations", "Azure Policy"],
    "answer": 0,
    "explanation": "Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources, including virtual machines."
  },
  {
    "id": 743,
    "question": "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    "options": ["A read-only lock", "An Azure policy", "A management group", "A reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to enforce compliance by using the built-in Allowed locations policy to restrict where resources can be created."
  },
  {
    "id": 744,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    "options": ["Deallocate the virtual machines during off hours", "Use Azure Hybrid Benefit", "Configure Azure Cost Management budgets", "Use Azure reservations"],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 745,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["Billing readers for an Azure subscription only", "Owners for an Azure subscription only", "Anyone", "All users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 746,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 747,
    "question": "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
    "options": ["Adaptive network hardening in Azure Security Center", "Azure Service Health", "Azure Monitor workbooks", "Adaptive application controls in Azure Security Center"],
    "answer": 2,
    "explanation": "Azure Monitor workbooks can be used to visualize and respond to data, though Logic Apps (playbooks) are the primary automation tool in Sentinel."
  },
  {
    "id": 748,
    "question": "You have an Azure application that uses an Azure App Service web app (99.9 percent SLA) and an Azure SQL Database (99.99 percent SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.999 * 0.9999 = 0.9989001 = 99.89001 percent", "0.999 / 0.9999 = 0.9991 = 99.91 percent", "Max(0.999, 0.9999) = 0.9999 = 99.99 percent", "Min(0.999, 0.9999) = 0.999 = 99.9 percent"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails."
  },
  {
    "id": 749,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 750,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["An Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "An Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 751,
    "question": "You need to ensure that an Azure virtual machine can only be accessed from a specific IP address. What should you configure?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory (Azure AD)"],
    "answer": 1,
    "explanation": "A Network Security Group (NSG) contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on source and destination IP addresses, ports, and protocols."
  },
  {
    "id": 752,
    "question": "Which Azure service provides a centralized identity and access management solution?",
    "options": ["Azure Key Vault", "Azure Active Directory (Azure AD)", "Azure Information Protection", "Azure Security Center"],
    "answer": 1,
    "explanation": "Azure Active Directory (Azure AD) is Microsoft's cloud-based identity and access management service, which helps employees sign in and access resources."
  },
  {
    "id": 753,
    "question": "What is the primary purpose of Azure Blueprints?",
    "options": ["To monitor the performance of Azure resources", "To orchestrate the deployment of various resource templates and artifacts to maintain compliance", "To encrypt data at rest", "To provide DDoS protection"],
    "answer": 1,
    "explanation": "Azure Blueprints enable cloud architects to define a repeatable set of Azure resources that implement and adhere to an organization's standards, patterns, and requirements."
  },
  {
    "id": 754,
    "question": "Which storage redundancy option replicates data synchronously across three Azure availability zones in a single region?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 1,
    "explanation": "Zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region."
  },
  {
    "id": 755,
    "question": "You need to route HTTP traffic to different backend pools based on the URL path. Which Azure service should you use?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, including URL-based routing."
  },
  {
    "id": 756,
    "question": "Which Azure service provides a fully managed, intelligent SQL database service in the cloud?",
    "options": ["Azure Cosmos DB", "Azure SQL Database", "Azure Database for MySQL", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions."
  },
  {
    "id": 757,
    "question": "You need to connect an on-premises network to Azure with guaranteed bandwidth and low latency, without traversing the public internet. What should you use?",
    "options": ["Site-to-Site VPN", "Azure ExpressRoute", "Azure Virtual WAN", "Point-to-Site VPN"],
    "answer": 1,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without traversing the public internet."
  },
  {
    "id": 758,
    "question": "Which Azure support plan provides 24/7 access to support engineers via phone and email, and is the lowest cost option to do so?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest cost option that provides 24/7 access to Support Engineers via email and phone."
  },
  {
    "id": 759,
    "question": "What is the primary benefit of using Azure Reservations?",
    "options": ["It provides automatic scaling of resources", "It reduces costs by committing to a one-year or three-year plan", "It guarantees 100 percent uptime", "It provides free data egress"],
    "answer": 1,
    "explanation": "Azure Reservations help you save money by committing to one-year or three-year plans for multiple products, providing a significant discount compared to pay-as-you-go prices."
  },
  {
    "id": 760,
    "question": "Which Azure service is best suited for running containerized applications without managing the underlying infrastructure?",
    "options": ["Azure Virtual Machines", "Azure Container Instances", "Azure App Service", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 761,
    "question": "What is the maximum number of tags you can apply to a single Azure resource or resource group?",
    "options": ["10", "25", "50", "100"],
    "answer": 2,
    "explanation": "Each resource or resource group can have a maximum of 50 tags."
  },
  {
    "id": 762,
    "question": "You need to ensure that all virtual machines in a resource group have a specific tag. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Azure Advisor"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce tagging rules and conventions, ensuring that resources are created with specific tags."
  },
  {
    "id": 763,
    "question": "Which Azure service provides a centralized log management and analytics solution?",
    "options": ["Azure Monitor", "Log Analytics", "Application Insights", "Azure Event Hubs"],
    "answer": 1,
    "explanation": "Log Analytics is a tool within Azure Monitor that enables you to collect, search, and analyze log data from your Azure resources."
  },
  {
    "id": 764,
    "question": "You need to allow external users to collaborate with your organization using their own identities. Which Azure AD feature should you use?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration enables you to securely share your company's applications and services with guest users from any organization, while maintaining control over your corporate data."
  },
  {
    "id": 765,
    "question": "Which of the following is NOT a valid multi-factor authentication (MFA) method in Azure AD?",
    "options": ["Microsoft Authenticator app", "SMS code", "Picture identification", "Phone call"],
    "answer": 2,
    "explanation": "Picture identification and passport numbers are not valid MFA authentication methods. Valid methods include the Microsoft Authenticator app, SMS, and voice calls."
  },
  {
    "id": 766,
    "question": "You need to require users to perform MFA only when they sign in from an untrusted location. Which Azure AD feature should you use?",
    "options": ["Azure AD Identity Protection", "Conditional Access", "Azure AD Privileged Identity Management", "Azure AD Connect"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) based on specific conditions, such as signing in from an untrusted location or network."
  },
  {
    "id": 767,
    "question": "You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?",
    "options": ["The Data Protection Addendum", "The Microsoft Online Services Terms", "The Microsoft Privacy Statement", "Azure Security Center"],
    "answer": 2,
    "explanation": "The Microsoft Privacy Statement explains the personal data Microsoft processes, how Microsoft processes it, and for what purposes."
  },
  {
    "id": 768,
    "question": "Which cloud service model minimizes the management responsibility of a customer?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)"],
    "answer": 2,
    "explanation": "SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user."
  },
  {
    "id": 769,
    "question": "Which service can replace a resource lock automatically if the lock is removed?",
    "options": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "answer": 1,
    "explanation": "Azure Blueprints can apply resource locks to resources deployed by the blueprint. If a lock is removed, the blueprint assignment can re-apply it to maintain compliance."
  },
  {
    "id": 770,
    "question": "You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use?",
    "options": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "answer": [2, 4],
    "explanation": "Azure Monitor is a comprehensive monitoring solution, and Log Analytics is a tool within Azure Monitor that enables you to collect and analyze log data from your virtual machines and run queries."
  },
  {
    "id": 771,
    "question": "What should you use to track the costs of Azure resources?",
    "options": ["Azure Quickstart templates", "Tags", "Budgets", "Usage and quotas"],
    "answer": 3,
    "explanation": "Usage and quotas in Azure Monitor and Cost Management help you track the costs and resource consumption of your Azure resources."
  },
  {
    "id": 772,
    "question": "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
    "options": ["The volume of outbound data", "The volume of inbound data", "The service tier", "The Azure region", "The type of processed data"],
    "answer": [0, 2, 3],
    "explanation": "The cost of an Azure resource is affected by the Azure region it is deployed in, the service tier (or SKU) selected, and the volume of outbound data transfer (inbound data is generally free)."
  },
  {
    "id": 773,
    "question": "Your company decides to implement passwordless authentication for an efficient user experience. Which of the following passwordless authentication options DOES NOT integrate with Azure Active Directory (Azure AD)?",
    "options": ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys", "A cryptographic key"],
    "answer": 3,
    "explanation": "Passwordless Authentication in Azure AD supports Windows Hello for Business, Microsoft Authenticator app, and FIDO2 security keys. It does not support generic cryptographic keys as a standalone passwordless method."
  },
  {
    "id": 774,
    "question": "You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?",
    "options": ["Create a ReadOnly lock for storage1", "Create a delete lock for storage1", "Enable container soft delete", "Enable blob soft delete"],
    "answer": 1,
    "explanation": "A delete lock (CanNotDelete) applied to the storage account prevents the storage account and its contents (including containers) from being deleted, while still allowing new containers to be created."
  },
  {
    "id": 775,
    "question": "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "A Windows command prompt", "A web browser"],
    "answer": 3,
    "explanation": "Azure Cloud Shell is a browser-based shell experience, so you access it using a web browser via the Azure portal or shell.azure.com."
  },
  {
    "id": 776,
    "question": "You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["Infrastructure as a service (IaaS)", "Software as a service (SaaS)", "Platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 777,
    "question": "Which Azure service provides a digital online assistant that provides speech support?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 0,
    "explanation": "Azure Bot Service provides a digital online assistant that provides speech support and conversational AI capabilities."
  },
  {
    "id": 778,
    "question": "Which Azure service uses past trainings to provide predictions that have high probability?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 1,
    "explanation": "Azure Machine Learning is a data science technique that allows computers to use existing data to forecast future behaviors, outcomes, and trends."
  },
  {
    "id": 779,
    "question": "Which Azure service provides serverless computing functionalities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 780,
    "question": "Which Azure service provides data from millions of sensors?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 3,
    "explanation": "Azure IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages."
  },
  {
    "id": 781,
    "question": "An Azure AD tenant can have multiple subscriptions but an Azure subscription can only be associated with one Azure AD tenant. (Evaluate the underlined text)",
    "options": ["No change is needed", "An Azure subscription can have multiple Azure AD tenants", "An Azure AD tenant can only have one subscription", "Neither can have multiple associations"],
    "answer": 0,
    "explanation": "An Azure AD tenant can have multiple subscriptions, but an Azure subscription can only be associated with one Azure AD tenant."
  },
  {
    "id": 782,
    "question": "If your subscription expires, you lose access to all the other resources associated with the subscription. However, the Azure AD directory remains in Azure. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Azure AD directory is also deleted", "The Azure AD directory is moved to another tenant", "The Azure AD directory is frozen"],
    "answer": 0,
    "explanation": "If your subscription expires, you lose access to resources, but the Azure AD directory remains in Azure and can be associated with a different subscription."
  },
  {
    "id": 783,
    "question": "SLAs vary based on the resource type and the location distribution of the resource. However, the minimum uptime for all Azure services is 99.9 percent. (Evaluate the underlined text)",
    "options": ["No change is needed", "99.99 percent", "99.95 percent", "99.0 percent"],
    "answer": 0,
    "explanation": "The minimum uptime for all Azure services is generally 99.9 percent, though many services offer higher SLAs depending on their configuration."
  },
  {
    "id": 784,
    "question": "The SLA guaranteed uptime is increased when resources are deployed across multiple regions. (Evaluate the underlined text)",
    "options": ["No change is needed", "Decreased", "Remains the same", "Is voided"],
    "answer": 0,
    "explanation": "The SLA guaranteed uptime is increased (usually to 99.95 percent or higher) when resources are deployed across multiple regions or availability zones."
  },
  {
    "id": 785,
    "question": "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    "options": ["Help and support", "Advisor", "Cost Management", "Subscriptions"],
    "answer": 0,
    "explanation": "You can request a standard quota increase from the Help and support blade in the Azure portal."
  },
  {
    "id": 786,
    "question": "With Azure ExpressRoute, all inbound data transfer is free of charge. (Evaluate the underlined text)",
    "options": ["No change is needed", "Inbound data transfer is charged", "Outbound data transfer is free", "Both inbound and outbound are charged"],
    "answer": 0,
    "explanation": "With Azure ExpressRoute, all inbound data transfer is free of charge. Outbound data traffic is charged at the normal rate."
  },
  {
    "id": 787,
    "question": "A company is planning on purchasing Azure AD Basic for their Azure account. Does the Azure AD Basic tier come with an SLA of 99.9 percent?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, Azure Active Directory Basic and Premium editions come with a financially backed 99.9 percent uptime SLA."
  },
  {
    "id": 788,
    "question": "A company needs to store 2 TB worth of data that is infrequently used. The data needs to be accessed via Power BI. Which of the following could be used as a cost-effective data layer for this requirement?",
    "options": ["Azure SQL databases", "Azure PostgreSQL", "Azure Cosmos DB", "Azure Data Lake"],
    "answer": 3,
    "explanation": "Azure Data Lake Storage is a cost-effective solution for storing large amounts of infrequently accessed data, and it integrates directly with Power BI."
  },
  {
    "id": 789,
    "question": "A company is planning on creating several Virtual Machines in Azure. Which of the following is the right category to which the Azure Virtual Machine belongs to?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)", "Function as a service (FaaS)"],
    "answer": 0,
    "explanation": "Azure Virtual Machines are an Infrastructure as a Service (IaaS) offering, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 790,
    "question": "A company needs to create around 50 customized Virtual Machines. Out of these 20 are Windows based Virtual machines and 30 are Ubuntu Machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
    "options": ["Azure Load Balancer", "Azure Web Apps", "Azure Traffic Manager", "Azure Scale Sets"],
    "answer": 3,
    "explanation": "Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, allowing you to centrally manage, configure, and update many VMs with minimal administrative effort."
  },
  {
    "id": 791,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that whenever users authenticate to Azure, they have to make use of Multi-Factor Authentication. Which of the following can help them achieve this?",
    "options": ["Azure AD Identity Protection", "Azure Security Centre", "Azure DDoS protection", "Azure privileged identity management"],
    "answer": 0,
    "explanation": "Azure AD Identity Protection can be configured with Conditional Access policies to require Multi-Factor Authentication (MFA) for users based on risk or other conditions."
  },
  {
    "id": 792,
    "question": "A company is planning on hosting 2 Virtual Machines in Azure. When the virtual machine is stopped (deallocated), will you still incur costs for the storage attached to the Virtual Machine?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. While you are not charged for the VM compute hours when it is stopped (deallocated), you continue to accrue charges for the Azure storage (disks) attached to the VM."
  },
  {
    "id": 793,
    "question": "A company is planning on setting up a solution in Azure. The solution has the following key requirement: An Integration solution for the deployment of code. Which of the following would be best suited for this requirement?",
    "options": ["Azure Advisor", "Azure Cognitive Services", "Azure Application Insights", "Azure DevOps"],
    "answer": 3,
    "explanation": "Azure DevOps includes Azure Pipelines, which can be used to build, test, and deploy code continuously as an integration solution."
  },
  {
    "id": 794,
    "question": "An IT Engineer needs to create a Virtual Machine in Azure. Currently the IT Engineer has a Windows desktop and has installed the Azure Command Line interface. From which of the following could the IT engineer use the Azure Command Line Interface?",
    "options": ["PowerShell", "File and Print Explorer", "Command Prompt", "Control Panel"],
    "answer": [0, 2],
    "explanation": "On Windows, the Azure CLI can be executed from either the Windows Command Prompt (CMD) or Windows PowerShell."
  },
  {
    "id": 795,
    "question": "A company wants to try out some services which are being offered by Azure in Public Preview. Should the company deploy resources which are part of Public Preview in their production environment?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in Public Preview are excluded from Service Level Agreements (SLAs) and may have breaking changes. They should not be used in production."
  },
  {
    "id": 796,
    "question": "A company is planning on using Azure Storage Accounts. They have the following requirement: Storage of 2 TB of data, Storage of a million files. Would using Azure Storage fulfil these requirements?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Storage has a very high scalability limit (up to 5 PiB per storage account) and supports hundreds of millions of files."
  },
  {
    "id": 797,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that suspicious attacks and threats to resources in their Azure account are prevented. Which of the following helps prevent such attacks by using in-built sensors in Azure?",
    "options": ["Azure AD Identity Protection", "Azure DDoS attacks", "Azure privileged identity management", "Azure Advanced Threat protection"],
    "answer": 3,
    "explanation": "Azure Advanced Threat Protection (ATP) uses in-built sensors to monitor on-premises Active Directory signals to identify, detect, and investigate advanced threats."
  },
  {
    "id": 798,
    "question": "A company has just deployed a Virtual Machine named demovm to Azure. The company needs to know if the underlying infrastructure in Azure hosting the Virtual Machine has any issues. Where could they view such issues?",
    "options": ["Azure Advisor", "Azure AD", "The Virtual Machine blade", "Azure Monitor"],
    "answer": 2,
    "explanation": "You can view service health issues for the infrastructure of the Virtual Machine directly in the VM blade under Resource health."
  },
  {
    "id": 799,
    "question": "A company is planning on deploying a web server and database server. You have to ensure that traffic restrictions are in place so that the database server can only communicate with the web server. Which of the following would you recommend for implementing these restrictions?",
    "options": ["Network security groups (NSGs)", "Azure Service Bus", "A local network gateway", "A Virtual Private Gateway"],
    "answer": 0,
    "explanation": "Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources, allowing you to restrict communication between specific subnets or VMs."
  },
  {
    "id": 800,
    "question": "A company wants to make use of an Azure service in private preview. Are Azure services in private preview available to all customers?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in private preview are available only to selected customers who have been invited or have signed up for the private preview program."
  },
  {
    "id": 801,
    "question": "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
    "options": ["An Azure Active Directory (Azure AD) role", "An Azure key vault", "An Azure Active Directory group", "A network security group (NSG)"],
    "answer": 3,
    "explanation": "A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on port and protocol."
  },
  {
    "id": 802,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Which three computers can run the script?",
    "options": ["A computer that runs macOS and has PowerShell Core 6.0 installed", "A computer that runs Windows 10 and has the Azure PowerShell module installed", "A computer that runs Chrome OS and uses Azure Cloud Shell", "A computer that runs Linux and has the Azure CLI tools installed", "A computer that runs Linux and has the Azure PowerShell module installed"],
    "answer": [1, 2, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts."
  },
  {
    "id": 803,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    "options": ["Modify a DDoS protection plan", "Modify an Azure firewall", "Modify an Azure Traffic Manager profile", "Modify a network security group (NSG)"],
    "answer": [1, 3],
    "explanation": "You can allow HTTP traffic (port 80) to a virtual machine by adding an inbound security rule to a Network Security Group (NSG) or by configuring a rule in Azure Firewall."
  },
  {
    "id": 804,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    "options": ["The user accounts", "The network interfaces", "The public IP addresses", "The groups"],
    "answer": 2,
    "explanation": "You are charged for public IP addresses. Deleting unused public IP addresses will directly reduce your Azure costs. User accounts, groups, and unattached network interfaces do not incur charges."
  },
  {
    "id": 805,
    "question": "Which task can you perform by using Azure Advisor?",
    "options": ["Integrate Active Directory and Azure Active Directory (Azure AD)", "Estimate the costs of an Azure solution", "Confirm that Azure subscription security follows best practices", "Evaluate which on-premises resources can be migrated to Azure"],
    "answer": 2,
    "explanation": "Azure Advisor integrates with Microsoft Defender for Cloud to provide security recommendations, helping you confirm that your Azure subscription security follows best practices."
  },
  {
    "id": 806,
    "question": "Your company uses management groups to manage resources in your Azure tenant more efficiently. User1 should be able to assign access and assign policies to management groups. Your solution should follow the principle of least privilege. To which role should you add User1?",
    "options": ["User Access Administrator", "Owner", "Management Group Contributor", "Contributor"],
    "answer": 0,
    "explanation": "The User Access Administrator role allows a user to manage access to Azure resources and assign policies, following the principle of least privilege compared to the Owner role."
  },
  {
    "id": 807,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 808,
    "question": "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
    "options": ["Private", "Hybrid", "Public"],
    "answer": 2,
    "explanation": "In a public cloud model, the hardware resources are owned and managed by a third-party cloud provider and are shared among multiple tenants (customers)."
  },
  {
    "id": 809,
    "question": "Identify two options from below that reflect two valid hybrid cloud infrastructures.",
    "options": ["On premises infrastructures and public cloud", "Private and public cloud", "Multiple public clouds", "On premises infrastructures and private cloud"],
    "answer": [0, 1],
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 810,
    "question": "A company has an Azure infrastructure deployed. Three virtual machines (VMs) are deployed to Azure as a three-tiered architecture. All three VMs host different items, with one hosting a front-end web application, one hosting a Microsoft SQL Server database and one hosting a business application programming interface (API). For public access, only the front-end web application be available and should be accessible over HTTP on port 80. All three VMs must be accessible over Remote Desktop Protocol (RDP) on port 222. There should be only one account able to access the VMs usning RDP, and it should be yours. Can you determine how Network Security Groups (NSGs) will be used in this scenario? Identify the two ways NSG rules can be used.",
    "options": ["To ensure that only your account can use RDP to access the VMs", "To ensure that only the front-end VM is publicly accessible over port 80", "To ensure that all three VMs are accessible over port 222", "Reviewed by executive management before being released to the public"],
    "answer": [0, 1],
    "explanation": "NSG rules can be configured to allow inbound HTTP (port 80) traffic only to the front-end VM's subnet/NIC, and to allow inbound RDP (port 222) traffic only from your specific source IP address."
  },
  {
    "id": 811,
    "question": "A new policy has been implemented in your organization that limits access to resource group and resource scopes in a detailed, granular way. Various groups and users will be provided access. What would you choose to use if you want to implement the new policy?",
    "options": ["Azure Advisor", "Role-based access control (RBAC)", "Azure Policies", "Locks"],
    "answer": 1,
    "explanation": "Azure Role-Based Access Control (RBAC) is used to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to at a granular scope."
  },
  {
    "id": 812,
    "question": "Cost per subscriber for a cloud service provider reduces with the increase in number of subscribers. It is a public cloud service. Can you identify what this would be called?",
    "options": ["Consumption-based billing", "Operational expenditures", "Scalability", "Economies of scale"],
    "answer": 3,
    "explanation": "Economies of scale refers to the cost advantage that arises with increased output of a product. In cloud computing, as the provider serves more customers, the cost per customer decreases."
  },
  {
    "id": 813,
    "question": "Identify a justification that validates that fact that Azure lowers a company's capital expenditure costs.",
    "options": ["Azure allows you to reduce the level of IT staffing that is required to maintain on-premises application and services", "Azure Allow you to pay monthly based on usage rather than pay upfront of physical hardware.", "Azure allows you to pay annually to reduce overall costs that are associated with its platform-as-a-service (PaaS) offerings.", "Azure Reduces the amount of maintenance that is associated with the configuration of firewalls, which reduces costs."],
    "answer": 1,
    "explanation": "Capital expenditure (CapEx) is the upfront cost of buying physical hardware. Azure's pay-as-you-go model shifts this to operational expenditure (OpEx), eliminating the need for large upfront hardware purchases."
  },
  {
    "id": 814,
    "question": "Identify what purpose does the load balancer resource have.",
    "options": ["Its uses URL-based routing to route web traffic across multiple instances", "Its distributes virtual machine traffic evenly across multiple instances", "It delivers internet traffic to the datacenter that is geographically closest to the user.", "Its add or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 815,
    "question": "An organization wants to develop and deploy web apps, for which it subscribes to Azure as a platform. It is desired to keep the expenses to a minimum before the app is finally released. You have to identify the features available in Azure Active Directory (AD) Free edition. Choose two options from below that are available in the Azure Active Directory (AD) Free edition.",
    "options": ["Company branding", "User and Group management", "Group based access management", "Self service password Change for cloud users"],
    "answer": [1, 3],
    "explanation": "Azure AD Free edition includes core identity features such as User and Group management, and Self-service password change/reset for cloud users. Company branding and group-based access require Premium editions."
  },
  {
    "id": 816,
    "question": "You want to extract insights by querying and transforming data for which you would require an Azure big data solution. Identify which of the following do you think is the most appropriate tool to use.",
    "options": ["Blob Storage", "Data Lake Analytics", "Azure SQL Database", "Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. It allows you to query and transform massive amounts of data."
  },
  {
    "id": 817,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Azure Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Firewall is a stateful firewall that can filter traffic between subnets based on protocol, source/destination IP addresses, and port numbers."
  },
  {
    "id": 818,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Web Applications Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["No", "Yes"],
    "answer": 0,
    "explanation": "No. A Web Application Firewall (WAF) operates at Layer 7 (HTTP/HTTPS) and is designed to protect web applications from specific exploits, not for general subnet-to-subnet IP/port filtering."
  },
  {
    "id": 819,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Network Security Group to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["No", "Yes"],
    "answer": 1,
    "explanation": "Yes. An NSG can filter network traffic to and from Azure resources in a virtual network based on source/destination IP, port, and protocol."
  },
  {
    "id": 820,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["An Azure web app", "An Azure virtual machine", "An Azure logic app", "An Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Web apps, logic apps, and SQL databases are Platform as a Service (PaaS)."
  },
  {
    "id": 821,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["Private cloud and hybrid cloud only", "Private cloud only", "Private cloud, hybrid cloud and public cloud", "Hybrid cloud only"],
    "answer": 0,
    "explanation": "You can deploy physical servers in a private cloud (on-premises) or a hybrid cloud (which includes on-premises resources). You cannot deploy physical servers in a public cloud."
  },
  {
    "id": 822,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["Hybrid", "Private", "Public"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure (private cloud) with public cloud resources (Azure), allowing them to connect and share data."
  },
  {
    "id": 823,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 824,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 825,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "Within a single Azure region", "Within multiple Azure regions", "Within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 826,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell has the Azure CLI pre-installed and configured. The az command will work in the PowerShell environment within Cloud Shell."
  },
  {
    "id": 827,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from within Windows PowerShell."
  },
  {
    "id": 828,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from the standard Windows Command Prompt (CMD)."
  },
  {
    "id": 829,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. A PowerShell script requires PowerShell and the Azure PowerShell module to be installed on the computer to execute Azure cmdlets."
  },
  {
    "id": 830,
    "question": "Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell provides both Bash and PowerShell environments, both of which have the Azure CLI pre-installed and configured."
  },
  {
    "id": 831,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "The statement is correct. Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 832,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 833,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    "options": ["Azure CLI", "The Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 834,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 835,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security and Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 836,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 837,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "An application security group", "Azure DDoS protection", "A network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 838,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Microsoft Cloud Partner Portal", "Compliance Manager", "The Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 839,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 840,
    "question": "You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?",
    "options": ["An Azure Storage account", "An Azure Information Protection policy", "An Encryption Key", "An Azure Key Vault"],
    "answer": 3,
    "explanation": "Azure Disk Encryption requires an Azure Key Vault to control and manage disk encryption keys and secrets."
  },
  {
    "id": 841,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you are using, including planned maintenance activities."
  },
  {
    "id": 842,
    "question": "What can you use to identify underutilized or unused Azure virtual machines?",
    "options": ["Azure Advisor", "Azure Cost Management and Billing", "Azure reservations", "Azure Policy"],
    "answer": 0,
    "explanation": "Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources, including virtual machines."
  },
  {
    "id": 843,
    "question": "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    "options": ["A read-only lock", "An Azure policy", "A management group", "A reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to enforce compliance by using the built-in Allowed locations policy to restrict where resources can be created."
  },
  {
    "id": 844,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    "options": ["Deallocate the virtual machines during off hours", "Use Azure Hybrid Benefit", "Configure Azure Cost Management budgets", "Use Azure reservations"],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 845,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["Billing readers for an Azure subscription only", "Owners for an Azure subscription only", "Anyone", "All users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 846,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 847,
    "question": "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
    "options": ["Adaptive network hardening in Azure Security Center", "Azure Service Health", "Azure Monitor workbooks", "Adaptive application controls in Azure Security Center"],
    "answer": 2,
    "explanation": "Azure Monitor workbooks can be used to visualize and respond to data, though Logic Apps (playbooks) are the primary automation tool in Sentinel."
  },
  {
    "id": 848,
    "question": "You have an Azure application that uses an Azure App Service web app (99.9 percent SLA) and an Azure SQL Database (99.99 percent SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.999 * 0.9999 = 0.9989001 = 99.89001 percent", "0.999 / 0.9999 = 0.9991 = 99.91 percent", "Max(0.999, 0.9999) = 0.9999 = 99.99 percent", "Min(0.999, 0.9999) = 0.999 = 99.9 percent"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails."
  },
  {
    "id": 849,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 850,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["An Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "An Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
    {
    "id": 851,
    "question": "You need to ensure that all resources in an Azure subscription are deployed to the 'West US' region. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Role-based access control (RBAC)"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce rules and effects over your resources, such as using the built-in 'Allowed locations' policy to restrict deployments to specific regions."
  },
  {
    "id": 852,
    "question": "Which Azure service provides a centralized dashboard to view the health of the Azure services and regions you are using, including planned maintenance and service issues?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you're using, including service issues, planned maintenance, and health advisories."
  },
  {
    "id": 853,
    "question": "You plan to deploy a web application to Azure. You need to ensure that the application can automatically scale based on CPU usage. Which Azure service is best suited for this?",
    "options": ["Azure Virtual Machines", "Azure App Service", "Azure Functions", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure App Service provides built-in autoscaling capabilities that allow you to automatically add or remove instances based on metrics like CPU usage or memory."
  },
    {
    "id": 854,
    "question": "What is the primary purpose of Azure Active Directory (Azure AD) Conditional Access?",
    "options": [
      "To encrypt data at rest",
      "To enforce access controls based on specific conditions (e.g., location, device state)",
      "To manage billing and subscriptions",
      "To monitor network traffic"
    ],
    "answer": 1,
    "explanation": "Conditional Access is used to enforce access controls based on specific conditions, such as user location, device compliance, or sign-in risk, to protect your resources."
  },
  {
    "id": 855,
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. Azure Monitor is the centralized identity and access management service in Azure. Instructions: Review the underlined text. If it makes the statement correct, select 'No change is needed'. If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": [
      "No change is needed",
      "Azure Active Directory",
      "Azure Key Vault",
      "Azure Information Protection"
    ],
    "answer": 1,
    "explanation": "Azure Active Directory (now Microsoft Entra ID) is the centralized identity and access management service in Azure, not Azure Monitor."
  },
  {
    "id": 856,
    "question": "You need to store unstructured data, such as images and videos, in Azure. Which storage service should you use?",
    "options": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Queue Storage",
      "Azure Table Storage"
    ],
    "answer": 1,
    "explanation": "Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data, including images and videos."
  },
  {
    "id": 864,
    "question": "Which of the following is a benefit of using Azure Reservations?",
    "options": [
      "It provides free data egress.",
      "It guarantees 100% uptime.",
      "It offers a significant discount compared to pay-as-you-go pricing for a 1- or 3-year commitment.",
      "It automatically scales resources based on demand."
    ],
    "answer": 2,
    "explanation": "Azure Reservations allow you to commit to a 1-year or 3-year plan for specific resources, providing a significant discount compared to pay-as-you-go pricing."
  },
  {
    "id": 865,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use to view the health of the specific Azure services and regions you are using?",
    "options": [
      "Azure Monitor",
      "Azure Service Health",
      "Azure Advisor",
      "Microsoft Defender for Cloud"
    ],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized dashboard showing the health of the specific Azure services and regions you are currently using."
  },
  {
    "id": 866,
    "question": "You need to store relational data in Azure and require the ability to scale compute and storage independently. Which service should you use?",
    "options": [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": 0,
    "explanation": "Azure SQL Database is a relational database service that allows you to scale compute and storage resources independently to meet your application's needs."
  },
  {
    "id": 857,
    "question": "Which Azure support plan includes 24/7 access to support engineers via phone and email, and is the most cost-effective option for production workloads requiring this level of support?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest-cost option that provides 24/7 access to Support Engineers via phone and email, making it suitable for production workloads."
  },
  {
    "id": 858,
    "question": "You want to estimate the cost of running a specific Azure virtual machine configuration for one month. Which tool should you use?",
    "options": ["Azure Total Cost of Ownership (TCO) Calculator", "Azure Pricing Calculator", "Azure Cost Management", "Azure Advisor"],
    "answer": 1,
    "explanation": "The Azure Pricing Calculator allows you to estimate the cost of specific Azure products and configurations before you deploy them."
  },
  {
    "id": 859,
    "question": "Which Azure service allows you to run SQL Server databases in the cloud with built-in high availability, automated backups, and patching?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for MySQL", "Azure Synapse Analytics"],
    "answer": 0,
    "explanation": "Azure SQL Database is a fully managed Platform as a Service (PaaS) relational database that handles high availability, backups, and patching automatically."
  },
  {
    "id": 860,
    "question": "You need to ensure that a specific user can only view resources in a resource group but cannot make any changes. Which built-in Azure RBAC role should you assign?",
    "options": ["Owner", "Contributor", "Reader", "User Access Administrator"],
    "answer": 2,
    "explanation": "The Reader role grants view access to all Azure resources but does not allow the user to make any changes."
  },
  {
    "id": 861,
    "question": "What is the difference between horizontal scaling and vertical scaling in Azure?",
    "options": ["Horizontal scaling adds more VMs; vertical scaling increases the size of existing VMs.", "Horizontal scaling increases VM size; vertical scaling adds more VMs.", "Horizontal scaling is for databases; vertical scaling is for web apps.", "There is no difference; they are synonyms."],
    "answer": 0,
    "explanation": "Horizontal scaling (scale out) involves adding more instances (e.g., more VMs), while vertical scaling (scale up) involves increasing the resources (e.g., CPU, RAM) of an existing instance."
  },
  {
    "id": 862,
    "question": "Which Azure service provides a fully managed message routing service that can handle millions of messages per second?",
    "options": ["Azure Service Bus", "Azure Event Hubs", "Azure Queue Storage", "Azure Logic Apps"],
    "answer": 1,
    "explanation": "Azure Event Hubs is a big data streaming platform and event ingestion service designed to handle millions of events per second."
  },
  {
    "id": 863,
    "question": "You need to connect an on-premises network to Azure securely over the public internet. Which Azure resource should you create?",
    "options": ["Azure ExpressRoute", "Azure VPN Gateway", "Azure Application Gateway", "Azure Front Door"],
    "answer": 1,
    "explanation": "An Azure VPN Gateway is used to send encrypted traffic between an on-premises network and an Azure virtual network over the public internet."
  },
  {
    "id": 864,
    "question": "Which of the following is a benefit of using Azure Reservations?",
    "options": [
      "It provides free data egress.",
      "It guarantees 100% uptime.",
      "It offers a significant discount compared to pay-as-you-go pricing for a 1- or 3-year commitment.",
      "It automatically scales resources based on demand."
    ],
    "answer": 2,
    "explanation": "Azure Reservations allow you to commit to a 1-year or 3-year plan for specific resources, providing a significant discount compared to pay-as-you-go pricing."
  },
  {
    "id": 865,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use to view the health of the specific Azure services and regions you are using?",
    "options": [
      "Azure Monitor",
      "Azure Service Health",
      "Azure Advisor",
      "Microsoft Defender for Cloud"
    ],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized dashboard showing the health of the specific Azure services and regions you are currently using."
  },
  {
    "id": 866,
    "question": "You need to store relational data in Azure and require the ability to scale compute and storage independently. Which service should you use?",
    "options": [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    "answer": 0,
    "explanation": "Azure SQL Database is a relational database service that allows you to scale compute and storage resources independently to meet your application's needs."
  },
  {
    "id": 867,
    "question": "What is the primary function of Azure Network Security Groups (NSGs)?",
    "options": ["To encrypt data in transit", "To filter network traffic to and from Azure resources based on IP addresses, ports, and protocols", "To provide DDoS protection", "To route traffic between virtual networks"],
    "answer": 1,
    "explanation": "Network Security Groups (NSGs) contain security rules that allow or deny inbound and outbound network traffic to Azure resources based on source/destination IP, port, and protocol."
  },
    {
    "id": 868,
    "question": "You want to deploy a containerized application without managing the underlying virtual machines or orchestrator. Which Azure service is the best choice?",
    "options": [
      "Azure Kubernetes Service (AKS)",
      "Azure Container Instances",
      "Azure App Service",
      "Azure Virtual Machines"
    ],
    "answer": 1,
    "explanation": "Azure Container Instances (ACI) offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service like an orchestrator."
  },
  {
    "id": 869,
    "question": "Which Azure service helps you discover, assess, and migrate on-premises workloads to Azure?",
    "options": [
      "Azure Arc",
      "Azure Migrate",
      "Azure Site Recovery",
      "Azure Backup"
    ],
    "answer": 1,
    "explanation": "Azure Migrate is a unified migration platform that provides tools to discover, assess, and migrate on-premises servers, databases, and web apps to Azure."
  },
  {
    "id": 870,
    "question": "You need to ensure that all data stored in an Azure Storage account is encrypted at rest. What is the default behavior?",
    "options": [
      "Data is not encrypted by default; you must enable it manually.",
      "Data is automatically encrypted at rest using Microsoft-managed keys.",
      "Data is only encrypted if you use Azure Key Vault.",
      "Data is only encrypted in the Premium tier."
    ],
    "answer": 1,
    "explanation": "Azure Storage automatically encrypts all data at rest using Microsoft-managed keys by default. You can optionally use customer-managed keys via Azure Key Vault."
  },
  {
    "id": 871,
    "question": "Which Azure service provides a fully managed NoSQL database service with multi-region write capabilities and single-digit millisecond latency?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for PostgreSQL", "Azure Synapse Analytics"],
    "answer": 1,
    "explanation": "Azure Cosmos DB is a globally distributed, multi-model NoSQL database service that offers single-digit millisecond latency and multi-region write capabilities."
  },
  {
    "id": 872,
    "question": "You need to grant a user the ability to create and manage all resources in an Azure subscription, but you do not want to grant them the ability to assign roles to others. Which role should you assign?",
    "options": ["Owner", "Contributor", "Reader", "User Access Administrator"],
    "answer": 1,
    "explanation": "The Contributor role allows a user to create and manage all types of Azure resources, but it does not grant the ability to manage access (assign roles) to others."
  },
  {
    "id": 873,
    "question": "What is the purpose of Azure Availability Sets?",
    "options": ["To protect against regional Azure outages", "To protect against datacenter failures within a single region by distributing VMs across fault and update domains", "To provide a global content delivery network", "To automatically scale virtual machines based on demand"],
    "answer": 1,
    "explanation": "Availability Sets protect against hardware failures and planned maintenance within a single Azure datacenter by distributing VMs across multiple fault domains and update domains."
  },
  {
    "id": 874,
    "question": "Which Azure service allows you to run serverless event-driven code in multiple programming languages without managing infrastructure?",
    "options": ["Azure Logic Apps", "Azure Functions", "Azure App Service", "Azure Batch"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 875,
    "question": "You need to monitor the performance of a web application and identify slow page load times. Which Azure service should you use?",
    "options": ["Azure Monitor", "Application Insights", "Azure Service Health", "Azure Advisor"],
    "answer": 1,
    "explanation": "Application Insights, a feature of Azure Monitor, is an extensible Application Performance Management (APM) service that helps you monitor live applications and detect performance anomalies like slow page loads."
  },
  {
    "id": 876,
    "question": "Which of the following is an example of Operational Expenditure (OpEx) in Azure?",
    "options": ["Purchasing physical servers for an on-premises datacenter", "Paying for Azure virtual machines on a pay-as-you-go basis", "Buying a perpetual software license", "Constructing a new office building"],
    "answer": 1,
    "explanation": "Paying for Azure resources on a pay-as-you-go basis is an Operational Expenditure (OpEx) because it is an ongoing cost of doing business, unlike the upfront capital cost of buying physical hardware."
  },
  {
    "id": 877,
    "question": "You need to ensure that a specific Azure virtual machine is only accessible from a specific range of IP addresses. Where should you configure this?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory"],
    "answer": 1,
    "explanation": "You can configure inbound security rules in a Network Security Group (NSG) to allow or deny traffic to a virtual machine based on source IP addresses."
  },
  {
    "id": 878,
    "question": "What is the primary benefit of using Azure Traffic Manager?",
    "options": ["It provides DDoS protection.", "It routes user traffic to the most appropriate Azure region based on routing methods like priority or geographic location.", "It encrypts data in transit.", "It scales virtual machines automatically."],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based traffic load balancer that enables you to distribute traffic optimally to services across global Azure regions, providing high availability and responsiveness."
  },
  {
    "id": 879,
    "question": "You need to store a large amount of archival data that is rarely accessed but must be retained for compliance purposes. Which access tier should you use?",
    "options": ["Hot", "Cool", "Archive", "Premium"],
    "answer": 2,
    "explanation": "The Archive access tier is the lowest-cost storage tier, optimized for data that is rarely accessed and can tolerate several hours of retrieval time."
  },
  {
    "id": 880,
    "question": "Which Azure service provides a unified security management system that strengthens the security posture of your data centers and provides advanced threat protection?",
    "options": ["Azure Monitor", "Microsoft Defender for Cloud", "Azure Key Vault", "Azure Information Protection"],
    "answer": 1,
    "explanation": "Microsoft Defender for Cloud is a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP) that provides unified security management and advanced threat protection."
  },
  {
    "id": 881,
    "question": "You want to automate the deployment of an Azure virtual machine, a virtual network, and a storage account using a single declarative template. What should you use?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Resource Manager (ARM) template", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Resource Manager (ARM) templates allow you to define the infrastructure and configuration for your Azure resources in a declarative JSON format, enabling consistent and repeatable deployments."
  },
  {
    "id": 882,
    "question": "Which Azure service is best suited for running batch processing jobs that can scale to thousands of virtual machines?",
    "options": ["Azure Functions", "Azure Batch", "Azure Logic Apps", "Azure App Service"],
    "answer": 1,
    "explanation": "Azure Batch is a cloud service that efficiently runs large-scale parallel and high-performance computing (HPC) batch jobs by dynamically provisioning compute resources."
  },
  {
    "id": 883,
    "question": "You need to ensure that users must provide a second form of authentication when signing in from an untrusted network. Which Azure AD feature should you configure?",
    "options": ["Azure AD Privileged Identity Management", "Conditional Access", "Azure AD Connect", "Azure AD B2B"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) when users attempt to sign in from specific conditions, such as an untrusted network or location."
  },
  {
    "id": 884,
    "question": "What is the purpose of Azure Service Bus?",
    "options": ["To store large amounts of unstructured data", "To provide reliable, asynchronous message delivery between decoupled applications", "To host web applications", "To manage virtual machine scaling"],
    "answer": 1,
    "explanation": "Azure Service Bus is a fully managed enterprise message broker that provides reliable, asynchronous message delivery between decoupled applications and services."
  },
  {
    "id": 885,
    "question": "You need to view the compliance status of your Azure resources against industry standards like ISO 27001 and PCI DSS. Which feature should you use?",
    "options": ["Azure Advisor", "Microsoft Defender for Cloud Regulatory Compliance Dashboard", "Azure Policy", "Azure Cost Management"],
    "answer": 1,
    "explanation": "The Regulatory Compliance dashboard in Microsoft Defender for Cloud provides an overview of your compliance posture against various industry standards and regulations."
  },
  {
    "id": 886,
    "question": "Which of the following is a characteristic of a public cloud?",
    "options": ["Hardware is dedicated to a single organization.", "Resources are owned and operated by a third-party cloud provider and shared among multiple tenants.", "It requires significant upfront capital expenditure.", "It is hosted entirely on-premises."],
    "answer": 1,
    "explanation": "In a public cloud, the hardware and infrastructure are owned and managed by a third-party provider (like Microsoft) and are shared among multiple customers (tenants)."
  },
  {
    "id": 887,
    "question": "You need to connect two Azure virtual networks located in different regions. What is the most appropriate solution?",
    "options": ["Virtual Network Peering", "Azure ExpressRoute", "Azure Application Gateway", "Azure Front Door"],
    "answer": 0,
    "explanation": "Virtual Network Peering allows you to seamlessly connect two Azure virtual networks, even if they are in different regions (Global VNet Peering), making them appear as one for connectivity purposes."
  },
  {
    "id": 888,
    "question": "Which Azure service provides a fully managed Apache Spark-based analytics platform optimized for the Microsoft Azure cloud?",
    "options": ["Azure Synapse Analytics", "Azure Databricks", "Azure HDInsight", "Azure Machine Learning"],
    "answer": 1,
    "explanation": "Azure Databricks is a fast, easy, and collaborative Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 889,
    "question": "You want to track and manage your Azure spending by setting a limit and receiving an email notification when you reach 80% of that limit. What should you create?",
    "options": ["Azure Policy", "Budget alert", "Resource lock", "Service Level Agreement (SLA)"],
    "answer": 1,
    "explanation": "Azure Cost Management allows you to create budgets and configure budget alerts to notify you via email when your spending reaches a specified threshold, such as 80%."
  },
  {
    "id": 890,
    "question": "Which storage redundancy option provides the highest level of durability by replicating data across two geographically separated regions?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 3,
    "explanation": "Read-access geo-redundant storage (RA-GRS) provides the highest durability by replicating data to a secondary region and allowing read access to that secondary region in the event of a primary region outage."
  },
  {
    "id": 891,
    "question": "You need to grant an external partner temporary access to a specific Azure resource. Which Azure AD feature is best suited for this?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration allows you to securely share your company's applications and services with guest users from external organizations."
  },
  {
    "id": 892,
    "question": "What is the primary purpose of Azure Site Recovery?",
    "options": ["To back up files to Azure Blob Storage", "To provide business continuity and disaster recovery by orchestrating replication of Azure VMs and on-premises VMs", "To protect against DDoS attacks", "To monitor application performance"],
    "answer": 1,
    "explanation": "Azure Site Recovery is a disaster recovery solution that orchestrates the replication and failover of Azure VMs and on-premises VMs to ensure business continuity."
  },
  {
    "id": 893,
    "question": "Which Azure service allows you to run Linux or Windows containers without managing the underlying virtual machines?",
    "options": ["Azure Kubernetes Service (AKS)", "Azure Container Instances", "Azure App Service", "Azure Service Fabric"],
    "answer": 1,
    "explanation": "Azure Container Instances (ACI) offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 894,
    "question": "You need to ensure that a specific Azure resource cannot be deleted accidentally. What should you apply to the resource?",
    "options": ["Azure Policy", "Resource lock (CanNotDelete)", "Role-based access control (RBAC)", "Tag"],
    "answer": 1,
    "explanation": "A 'CanNotDelete' (or Delete) resource lock prevents authorized users from deleting the resource, while still allowing them to read and modify it."
  },
  {
    "id": 895,
    "question": "Which Azure support plan is free and provides access to billing support, Azure service health, and Azure Advisor?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 0,
    "explanation": "The Basic support plan is free and includes access to billing and subscription support, Azure Service Health, and Azure Advisor recommendations."
  },
  {
    "id": 896,
    "question": "You need to analyze large datasets using SQL queries in Azure. Which service should you use?",
    "options": ["Azure Cosmos DB", "Azure Synapse Analytics", "Azure Queue Storage", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Synapse Analytics is an enterprise analytics service that accelerates time to insight, across data warehouses and big data systems, allowing you to query data using serverless SQL pools."
  },
  {
    "id": 897,
    "question": "What is the benefit of using Azure Hybrid Benefit?",
    "options": ["It provides free Azure credits for startups.", "It allows you to use your existing on-premises Windows Server and SQL Server licenses with Software Assurance to reduce Azure costs.", "It guarantees 100% uptime for all Azure services.", "It provides free technical support."],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit is a licensing benefit that helps you significantly reduce the costs of running your workloads in the cloud by allowing you to use your existing on-premises Windows Server and SQL Server licenses with Software Assurance."
  },
  {
    "id": 898,
    "question": "Which Azure service provides a managed identity for an Azure resource, allowing it to authenticate to other Azure services without storing credentials in code?",
    "options": ["Azure Key Vault", "Azure Active Directory Managed Identities", "Azure Information Protection", "Azure Policy"],
    "answer": 1,
    "explanation": "Azure Active Directory Managed Identities provide an automatically managed identity in Azure AD for applications to use when connecting to resources that support Azure AD authentication, eliminating the need to manage credentials."
  },
  {
    "id": 899,
    "question": "You need to protect your Azure web applications from common web vulnerabilities like SQL injection and cross-site scripting (XSS). Which service should you use?",
    "options": ["Azure Firewall", "Web Application Firewall (WAF)", "Network Security Group (NSG)", "Azure DDoS Protection"],
    "answer": 1,
    "explanation": "A Web Application Firewall (WAF), which can be deployed with Azure Application Gateway or Azure Front Door, provides centralized protection of your web applications from common exploits and vulnerabilities."
  },
  {
    "id": 900,
    "question": "Which of the following is true about Azure regions?",
    "options": ["A region is a single datacenter.", "A region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.", "A region spans multiple continents.", "A region is a logical grouping of subscriptions."],
    "answer": 1,
    "explanation": "An Azure region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network."
  },
  {
    "id": 901,
    "question": "You want to deploy a relational database in Azure but want to minimize administrative tasks like patching and backups. Which service model should you choose?",
    "options": ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
    "answer": 1,
    "explanation": "Platform as a Service (PaaS), such as Azure SQL Database, provides a managed environment where the cloud provider handles underlying infrastructure, patching, and backups, minimizing administrative overhead."
  },
  {
    "id": 902,
    "question": "Which Azure service allows you to create, schedule, and orchestrate workflows that integrate apps, data, and systems?",
    "options": ["Azure Functions", "Azure Logic Apps", "Azure Event Grid", "Azure Service Bus"],
    "answer": 1,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services."
  },
  {
    "id": 903,
    "question": "You need to ensure that all Azure resources in a subscription are tagged with a 'Department' key. How can you enforce this?",
    "options": ["Use Azure Blueprints", "Use Azure Policy to require a specific tag", "Use Resource Locks", "Use Role-Based Access Control (RBAC)"],
    "answer": 1,
    "explanation": "Azure Policy can be configured to require that specific tags (like 'Department') are present on resources during creation, and can deny the creation of resources that do not comply."
  },
  {
    "id": 904,
    "question": "What is the primary function of Azure ExpressRoute?",
    "options": ["To provide a secure, private connection between an on-premises network and Azure that does not traverse the public internet", "To provide a global content delivery network", "To protect web applications from DDoS attacks", "To manage Azure Active Directory identities"],
    "answer": 0,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without the traffic traversing the public internet."
  },
  {
    "id": 905,
    "question": "Which Azure service provides a centralized location to view and manage all your Azure resources, including setting up dashboards and monitoring alerts?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Portal", "Azure Resource Manager"],
    "answer": 2,
    "explanation": "The Azure Portal is a web-based, unified console that provides an alternative to command-line tools, allowing you to view, manage, and monitor all your Azure resources in one place."
  },
  {
    "id": 906,
    "question": "You need to store structured, semi-structured, and unstructured data in a single Azure service. Which service should you use?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Blob Storage", "Azure Queue Storage"],
    "answer": 1,
    "explanation": "Azure Cosmos DB is a multi-model database service that supports multiple data models, including document, key-value, graph, and column-family, allowing you to store structured, semi-structured, and unstructured data."
  },
  {
    "id": 907,
    "question": "Which of the following is a responsibility of the customer in an Infrastructure as a Service (IaaS) model?",
    "options": ["Physical security of the datacenter", "Patching the host operating system", "Patching the guest operating system and applications", "Managing the underlying network infrastructure"],
    "answer": 2,
    "explanation": "In an IaaS model, the customer is responsible for managing the guest operating system, applications, and data, while the cloud provider manages the physical infrastructure, host OS, and networking."
  },
  {
    "id": 908,
    "question": "You need to automatically copy data from an on-premises SQL Server to Azure Blob Storage on a daily schedule. Which service is best suited for this?",
    "options": ["Azure Data Factory", "Azure ExpressRoute", "Azure Site Recovery", "Azure Backup"],
    "answer": 0,
    "explanation": "Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation, including scheduled copies from on-premises to Azure."
  },
  {
    "id": 909,
    "question": "What is the purpose of Azure Application Gateway?",
    "options": ["To provide a global content delivery network", "To act as a web traffic load balancer and provide web application firewall (WAF) capabilities", "To connect on-premises networks to Azure via VPN", "To manage Azure Active Directory identities"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, and it can be configured with a Web Application Firewall (WAF) to protect against common web vulnerabilities."
  },
  {
    "id": 910,
    "question": "Which Azure service provides a fully managed message routing service that can handle millions of messages per second?",
    "options": ["Azure Service Bus", "Azure Event Hubs", "Azure Queue Storage", "Azure Logic Apps"],
    "answer": 1,
    "explanation": "Azure Event Hubs is a big data streaming platform and event ingestion service designed to handle millions of events per second."
  },
  {
    "id": 911,
    "question": "You need to ensure that a specific Azure virtual machine is only accessible from a specific range of IP addresses. Where should you configure this?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory"],
    "answer": 1,
    "explanation": "You can configure inbound security rules in a Network Security Group (NSG) to allow or deny traffic to a virtual machine based on source IP addresses."
  },
  {
    "id": 912,
    "question": "What is the primary benefit of using Azure Traffic Manager?",
    "options": ["It provides DDoS protection.", "It routes user traffic to the most appropriate Azure region based on routing methods like priority or geographic location.", "It encrypts data in transit.", "It scales virtual machines automatically."],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based traffic load balancer that enables you to distribute traffic optimally to services across global Azure regions, providing high availability and responsiveness."
  },
  {
    "id": 913,
    "question": "You need to store a large amount of archival data that is rarely accessed but must be retained for compliance purposes. Which access tier should you use?",
    "options": ["Hot", "Cool", "Archive", "Premium"],
    "answer": 2,
    "explanation": "The Archive access tier is the lowest-cost storage tier, optimized for data that is rarely accessed and can tolerate several hours of retrieval time."
  },
  {
    "id": 914,
    "question": "Which Azure service provides a unified security management system that strengthens the security posture of your data centers and provides advanced threat protection?",
    "options": ["Azure Monitor", "Microsoft Defender for Cloud", "Azure Key Vault", "Azure Information Protection"],
    "answer": 1,
    "explanation": "Microsoft Defender for Cloud is a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP) that provides unified security management and advanced threat protection."
  },
  {
    "id": 915,
    "question": "You want to automate the deployment of an Azure virtual machine, a virtual network, and a storage account using a single declarative template. What should you use?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Resource Manager (ARM) template", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Resource Manager (ARM) templates allow you to define the infrastructure and configuration for your Azure resources in a declarative JSON format, enabling consistent and repeatable deployments."
  },
  {
    "id": 916,
    "question": "Which Azure service is best suited for running batch processing jobs that can scale to thousands of virtual machines?",
    "options": ["Azure Functions", "Azure Batch", "Azure Logic Apps", "Azure App Service"],
    "answer": 1,
    "explanation": "Azure Batch is a cloud service that efficiently runs large-scale parallel and high-performance computing (HPC) batch jobs by dynamically provisioning compute resources."
  },
  {
    "id": 917,
    "question": "You need to ensure that users must provide a second form of authentication when signing in from an untrusted network. Which Azure AD feature should you configure?",
    "options": ["Azure AD Privileged Identity Management", "Conditional Access", "Azure AD Connect", "Azure AD B2B"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) when users attempt to sign in from specific conditions, such as an untrusted network or location."
  },
  {
    "id": 918,
    "question": "What is the purpose of Azure Service Bus?",
    "options": ["To store large amounts of unstructured data", "To provide reliable, asynchronous message delivery between decoupled applications", "To host web applications", "To manage virtual machine scaling"],
    "answer": 1,
    "explanation": "Azure Service Bus is a fully managed enterprise message broker that provides reliable, asynchronous message delivery between decoupled applications and services."
  },
  {
    "id": 919,
    "question": "You need to view the compliance status of your Azure resources against industry standards like ISO 27001 and PCI DSS. Which feature should you use?",
    "options": ["Azure Advisor", "Microsoft Defender for Cloud Regulatory Compliance Dashboard", "Azure Policy", "Azure Cost Management"],
    "answer": 1,
    "explanation": "The Regulatory Compliance dashboard in Microsoft Defender for Cloud provides an overview of your compliance posture against various industry standards and regulations."
  },
  {
    "id": 920,
    "question": "Which of the following is a characteristic of a public cloud?",
    "options": ["Hardware is dedicated to a single organization.", "Resources are owned and operated by a third-party cloud provider and shared among multiple tenants.", "It requires significant upfront capital expenditure.", "It is hosted entirely on-premises."],
    "answer": 1,
    "explanation": "In a public cloud, the hardware and infrastructure are owned and managed by a third-party provider (like Microsoft) and are shared among multiple customers (tenants)."
  },
  {
    "id": 921,
    "question": "You need to connect two Azure virtual networks located in different regions. What is the most appropriate solution?",
    "options": ["Virtual Network Peering", "Azure ExpressRoute", "Azure Application Gateway", "Azure Front Door"],
    "answer": 0,
    "explanation": "Virtual Network Peering allows you to seamlessly connect two Azure virtual networks, even if they are in different regions (Global VNet Peering), making them appear as one for connectivity purposes."
  },
  {
    "id": 922,
    "question": "Which Azure service provides a fully managed Apache Spark-based analytics platform optimized for the Microsoft Azure cloud?",
    "options": ["Azure Synapse Analytics", "Azure Databricks", "Azure HDInsight", "Azure Machine Learning"],
    "answer": 1,
    "explanation": "Azure Databricks is a fast, easy, and collaborative Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 923,
    "question": "You want to track and manage your Azure spending by setting a limit and receiving an email notification when you reach 80% of that limit. What should you create?",
    "options": ["Azure Policy", "Budget alert", "Resource lock", "Service Level Agreement (SLA)"],
    "answer": 1,
    "explanation": "Azure Cost Management allows you to create budgets and configure budget alerts to notify you via email when your spending reaches a specified threshold, such as 80%."
  },
  {
    "id": 924,
    "question": "Which storage redundancy option provides the highest level of durability by replicating data across two geographically separated regions?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 3,
    "explanation": "Read-access geo-redundant storage (RA-GRS) provides the highest durability by replicating data to a secondary region and allowing read access to that secondary region in the event of a primary region outage."
  },
  {
    "id": 925,
    "question": "You need to grant an external partner temporary access to a specific Azure resource. Which Azure AD feature is best suited for this?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration allows you to securely share your company's applications and services with guest users from external organizations."
  },
  {
    "id": 926,
    "question": "What is the primary purpose of Azure Site Recovery?",
    "options": ["To back up files to Azure Blob Storage", "To provide business continuity and disaster recovery by orchestrating replication of Azure VMs and on-premises VMs", "To protect against DDoS attacks", "To monitor application performance"],
    "answer": 1,
    "explanation": "Azure Site Recovery is a disaster recovery solution that orchestrates the replication and failover of Azure VMs and on-premises VMs to ensure business continuity."
  },
  {
    "id": 927,
    "question": "Which Azure service allows you to run Linux or Windows containers without managing the underlying virtual machines?",
    "options": ["Azure Kubernetes Service (AKS)", "Azure Container Instances", "Azure App Service", "Azure Service Fabric"],
    "answer": 1,
    "explanation": "Azure Container Instances (ACI) offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 928,
    "question": "You need to ensure that a specific Azure resource cannot be deleted accidentally. What should you apply to the resource?",
    "options": ["Azure Policy", "Resource lock (CanNotDelete)", "Role-based access control (RBAC)", "Tag"],
    "answer": 1,
    "explanation": "A 'CanNotDelete' (or Delete) resource lock prevents authorized users from deleting the resource, while still allowing them to read and modify it."
  },
  {
    "id": 929,
    "question": "Which Azure support plan is free and provides access to billing support, Azure service health, and Azure Advisor?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 0,
    "explanation": "The Basic support plan is free and includes access to billing and subscription support, Azure Service Health, and Azure Advisor recommendations."
  },
  {
    "id": 930,
    "question": "You need to analyze large datasets using SQL queries in Azure. Which service should you use?",
    "options": ["Azure Cosmos DB", "Azure Synapse Analytics", "Azure Queue Storage", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Synapse Analytics is an enterprise analytics service that accelerates time to insight, across data warehouses and big data systems, allowing you to query data using serverless SQL pools."
  },
  {
    "id": 931,
    "question": "What is the benefit of using Azure Hybrid Benefit?",
    "options": ["It provides free Azure credits for startups.", "It allows you to use your existing on-premises Windows Server and SQL Server licenses with Software Assurance to reduce Azure costs.", "It guarantees 100% uptime for all Azure services.", "It provides free technical support."],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit is a licensing benefit that helps you significantly reduce the costs of running your workloads in the cloud by allowing you to use your existing on-premises Windows Server and SQL Server licenses with Software Assurance."
  },
  {
    "id": 932,
    "question": "Which Azure service provides a managed identity for an Azure resource, allowing it to authenticate to other Azure services without storing credentials in code?",
    "options": ["Azure Key Vault", "Azure Active Directory Managed Identities", "Azure Information Protection", "Azure Policy"],
    "answer": 1,
    "explanation": "Azure Active Directory Managed Identities provide an automatically managed identity in Azure AD for applications to use when connecting to resources that support Azure AD authentication, eliminating the need to manage credentials."
  },
  {
    "id": 933,
    "question": "You need to protect your Azure web applications from common web vulnerabilities like SQL injection and cross-site scripting (XSS). Which service should you use?",
    "options": ["Azure Firewall", "Web Application Firewall (WAF)", "Network Security Group (NSG)", "Azure DDoS Protection"],
    "answer": 1,
    "explanation": "A Web Application Firewall (WAF), which can be deployed with Azure Application Gateway or Azure Front Door, provides centralized protection of your web applications from common exploits and vulnerabilities."
  },
  {
    "id": 934,
    "question": "Which of the following is true about Azure regions?",
    "options": ["A region is a single datacenter.", "A region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.", "A region spans multiple continents.", "A region is a logical grouping of subscriptions."],
    "answer": 1,
    "explanation": "An Azure region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network."
  },
  {
    "id": 935,
    "question": "You want to deploy a relational database in Azure but want to minimize administrative tasks like patching and backups. Which service model should you choose?",
    "options": ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
    "answer": 1,
    "explanation": "Platform as a Service (PaaS), such as Azure SQL Database, provides a managed environment where the cloud provider handles underlying infrastructure, patching, and backups, minimizing administrative overhead."
  },
  {
    "id": 936,
    "question": "Which Azure service allows you to create, schedule, and orchestrate workflows that integrate apps, data, and systems?",
    "options": ["Azure Functions", "Azure Logic Apps", "Azure Event Grid", "Azure Service Bus"],
    "answer": 1,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services."
  },
  {
    "id": 937,
    "question": "You need to ensure that all Azure resources in a subscription are tagged with a 'Department' key. How can you enforce this?",
    "options": ["Use Azure Blueprints", "Use Azure Policy to require a specific tag", "Use Resource Locks", "Use Role-Based Access Control (RBAC)"],
    "answer": 1,
    "explanation": "Azure Policy can be configured to require that specific tags (like 'Department') are present on resources during creation, and can deny the creation of resources that do not comply."
  },
  {
    "id": 938,
    "question": "What is the primary function of Azure ExpressRoute?",
    "options": ["To provide a secure, private connection between an on-premises network and Azure that does not traverse the public internet", "To provide a global content delivery network", "To protect web applications from DDoS attacks", "To manage Azure Active Directory identities"],
    "answer": 0,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without the traffic traversing the public internet."
  },
  {
    "id": 939,
    "question": "Which Azure service provides a centralized location to view and manage all your Azure resources, including setting up dashboards and monitoring alerts?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Portal", "Azure Resource Manager"],
    "answer": 2,
    "explanation": "The Azure Portal is a web-based, unified console that provides an alternative to command-line tools, allowing you to view, manage, and monitor all your Azure resources in one place."
  },
  {
    "id": 940,
    "question": "You need to store structured, semi-structured, and unstructured data in a single Azure service. Which service should you use?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Blob Storage", "Azure Queue Storage"],
    "answer": 1,
    "explanation": "Azure Cosmos DB is a multi-model database service that supports multiple data models, including document, key-value, graph, and column-family, allowing you to store structured, semi-structured, and unstructured data."
  },
  {
    "id": 941,
    "question": "Which of the following is a responsibility of the customer in an Infrastructure as a Service (IaaS) model?",
    "options": ["Physical security of the datacenter", "Patching the host operating system", "Patching the guest operating system and applications", "Managing the underlying network infrastructure"],
    "answer": 2,
    "explanation": "In an IaaS model, the customer is responsible for managing the guest operating system, applications, and data, while the cloud provider manages the physical infrastructure, host OS, and networking."
  },
  {
    "id": 942,
    "question": "You need to automatically copy data from an on-premises SQL Server to Azure Blob Storage on a daily schedule. Which service is best suited for this?",
    "options": ["Azure Data Factory", "Azure ExpressRoute", "Azure Site Recovery", "Azure Backup"],
    "answer": 0,
    "explanation": "Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation, including scheduled copies from on-premises to Azure."
  },
  {
    "id": 943,
    "question": "What is the purpose of Azure Application Gateway?",
    "options": ["To provide a global content delivery network", "To act as a web traffic load balancer and provide web application firewall (WAF) capabilities", "To connect on-premises networks to Azure via VPN", "To manage Azure Active Directory identities"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, and it can be configured with a Web Application Firewall (WAF) to protect against common web vulnerabilities."
  },
  {
    "id": 944,
    "question": "Which Azure service provides a fully managed message routing service that can handle millions of messages per second?",
    "options": ["Azure Service Bus", "Azure Event Hubs", "Azure Queue Storage", "Azure Logic Apps"],
    "answer": 1,
    "explanation": "Azure Event Hubs is a big data streaming platform and event ingestion service designed to handle millions of events per second."
  },
  {
    "id": 945,
    "question": "You need to ensure that a specific Azure virtual machine is only accessible from a specific range of IP addresses. Where should you configure this?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory"],
    "answer": 1,
    "explanation": "You can configure inbound security rules in a Network Security Group (NSG) to allow or deny traffic to a virtual machine based on source IP addresses."
  },
  {
    "id": 946,
    "question": "What is the primary benefit of using Azure Traffic Manager?",
    "options": ["It provides DDoS protection.", "It routes user traffic to the most appropriate Azure region based on routing methods like priority or geographic location.", "It encrypts data in transit.", "It scales virtual machines automatically."],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based traffic load balancer that enables you to distribute traffic optimally to services across global Azure regions, providing high availability and responsiveness."
  },
  {
    "id": 947,
    "question": "You need to store a large amount of archival data that is rarely accessed but must be retained for compliance purposes. Which access tier should you use?",
    "options": ["Hot", "Cool", "Archive", "Premium"],
    "answer": 2,
    "explanation": "The Archive access tier is the lowest-cost storage tier, optimized for data that is rarely accessed and can tolerate several hours of retrieval time."
  },
  {
    "id": 948,
    "question": "Which Azure service provides a unified security management system that strengthens the security posture of your data centers and provides advanced threat protection?",
    "options": ["Azure Monitor", "Microsoft Defender for Cloud", "Azure Key Vault", "Azure Information Protection"],
    "answer": 1,
    "explanation": "Microsoft Defender for Cloud is a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP) that provides unified security management and advanced threat protection."
  },
  {
    "id": 949,
    "question": "You want to automate the deployment of an Azure virtual machine, a virtual network, and a storage account using a single declarative template. What should you use?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Resource Manager (ARM) template", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Resource Manager (ARM) templates allow you to define the infrastructure and configuration for your Azure resources in a declarative JSON format, enabling consistent and repeatable deployments."
  },
  {
    "id": 950,
    "question": "Which Azure service is best suited for running batch processing jobs that can scale to thousands of virtual machines?",
    "options": ["Azure Functions", "Azure Batch", "Azure Logic Apps", "Azure App Service"],
    "answer": 1,
    "explanation": "Azure Batch is a cloud service that efficiently runs large-scale parallel and high-performance computing (HPC) batch jobs by dynamically provisioning compute resources."
  },
  {
    "id": 858,
    "question": "You need to ensure that an Azure virtual machine can only be accessed from a specific IP address. What should you configure?",
    "options": ["Azure Policy", "Network Security Group (NSG)", "Azure Key Vault", "Azure Active Directory (Azure AD)"],
    "answer": 1,
    "explanation": "A Network Security Group (NSG) contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on source and destination IP addresses, ports, and protocols."
  },
  {
    "id": 859,
    "question": "Which Azure service provides a centralized identity and access management solution?",
    "options": ["Azure Key Vault", "Azure Active Directory (Azure AD)", "Azure Information Protection", "Azure Security Center"],
    "answer": 1,
    "explanation": "Azure Active Directory (Azure AD), now known as Microsoft Entra ID, is Microsoft's cloud-based identity and access management service."
  },
  {
    "id": 860,
    "question": "What is the primary purpose of Azure Blueprints?",
    "options": ["To monitor the performance of Azure resources", "To orchestrate the deployment of various resource templates and artifacts to maintain compliance", "To encrypt data at rest", "To provide DDoS protection"],
    "answer": 1,
    "explanation": "Azure Blueprints enable cloud architects to define a repeatable set of Azure resources that implement and adhere to an organization's standards, patterns, and requirements."
  },
  {
    "id": 861,
    "question": "Which storage redundancy option replicates data synchronously across three Azure availability zones in a single region?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 1,
    "explanation": "Zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region."
  },
  {
    "id": 862,
    "question": "You need to route HTTP traffic to different backend pools based on the URL path. Which Azure service should you use?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, including URL-based routing."
  },
  {
    "id": 863,
    "question": "Which Azure service provides a fully managed, intelligent SQL database service in the cloud?",
    "options": ["Azure Cosmos DB", "Azure SQL Database", "Azure Database for MySQL", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions."
  },
  {
    "id": 864,
    "question": "You need to connect an on-premises network to Azure with guaranteed bandwidth and low latency, without traversing the public internet. What should you use?",
    "options": ["Site-to-Site VPN", "Azure ExpressRoute", "Azure Virtual WAN", "Point-to-Site VPN"],
    "answer": 1,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without traversing the public internet."
  },
  {
    "id": 865,
    "question": "Which Azure support plan provides 24/7 access to support engineers via phone and email, and is the lowest cost option to do so?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest cost option that provides 24/7 access to Support Engineers via email and phone."
  },
  {
    "id": 866,
    "question": "What is the primary benefit of using Azure Reservations?",
    "options": ["It provides automatic scaling of resources", "It reduces costs by committing to a one-year or three-year plan", "It guarantees 100 percent uptime", "It provides free data egress"],
    "answer": 1,
    "explanation": "Azure Reservations help you save money by committing to one-year or three-year plans for multiple products, providing a significant discount compared to pay-as-you-go prices."
  },
  {
    "id": 867,
    "question": "Which Azure service is best suited for running containerized applications without managing the underlying infrastructure?",
    "options": ["Azure Virtual Machines", "Azure Container Instances", "Azure App Service", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service."
  },
  {
    "id": 868,
    "question": "What is the maximum number of tags you can apply to a single Azure resource or resource group?",
    "options": ["10", "25", "50", "100"],
    "answer": 2,
    "explanation": "Each resource or resource group can have a maximum of 50 tags."
  },
  {
    "id": 869,
    "question": "You need to ensure that all virtual machines in a resource group have a specific tag. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Azure Advisor"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce tagging rules and conventions, ensuring that resources are created with specific tags."
  },
  {
    "id": 870,
    "question": "Which Azure service provides a centralized log management and analytics solution?",
    "options": ["Azure Monitor", "Log Analytics", "Application Insights", "Azure Event Hubs"],
    "answer": 1,
    "explanation": "Log Analytics is a tool within Azure Monitor that enables you to collect, search, and analyze log data from your Azure resources."
  },
  {
    "id": 871,
    "question": "You need to allow external users to collaborate with your organization using their own identities. Which Azure AD feature should you use?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration enables you to securely share your company's applications and services with guest users from any organization, while maintaining control over your corporate data."
  },
  {
    "id": 872,
    "question": "Which of the following is NOT a valid multi-factor authentication (MFA) method in Azure AD?",
    "options": ["Microsoft Authenticator app", "SMS code", "Picture identification", "Phone call"],
    "answer": 2,
    "explanation": "Picture identification and passport numbers are not valid MFA authentication methods. Valid methods include the Microsoft Authenticator app, SMS, and voice calls."
  },
  {
    "id": 873,
    "question": "You need to require users to perform MFA only when they sign in from an untrusted location. Which Azure AD feature should you use?",
    "options": ["Azure AD Identity Protection", "Conditional Access", "Azure AD Privileged Identity Management", "Azure AD Connect"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) based on specific conditions, such as signing in from an untrusted location or network."
  },
  {
    "id": 874,
    "question": "You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?",
    "options": ["The Data Protection Addendum", "The Microsoft Online Services Terms", "The Microsoft Privacy Statement", "Azure Security Center"],
    "answer": 2,
    "explanation": "The Microsoft Privacy Statement explains the personal data Microsoft processes, how Microsoft processes it, and for what purposes."
  },
  {
    "id": 875,
    "question": "Which cloud service model minimizes the management responsibility of a customer?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)"],
    "answer": 2,
    "explanation": "SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user."
  },
  {
    "id": 876,
    "question": "Which service can replace a resource lock automatically if the lock is removed?",
    "options": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "answer": 1,
    "explanation": "Azure Blueprints can apply resource locks to resources deployed by the blueprint. If a lock is removed, the blueprint assignment can re-apply it to maintain compliance."
  },
  {
    "id": 877,
    "question": "You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use?",
    "options": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "answer": [2, 4],
    "explanation": "Azure Monitor is a comprehensive monitoring solution, and Log Analytics is a tool within Azure Monitor that enables you to collect and analyze log data from your virtual machines and run queries."
  },
  {
    "id": 878,
    "question": "What should you use to track the costs of Azure resources?",
    "options": ["Azure Quickstart templates", "Tags", "Budgets", "Usage and quotas"],
    "answer": 3,
    "explanation": "Usage and quotas in Azure Monitor and Cost Management help you track the costs and resource consumption of your Azure resources."
  },
  {
    "id": 879,
    "question": "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
    "options": ["The volume of outbound data", "The volume of inbound data", "The service tier", "The Azure region", "The type of processed data"],
    "answer": [0, 2, 3],
    "explanation": "The cost of an Azure resource is affected by the Azure region it is deployed in, the service tier (or SKU) selected, and the volume of outbound data transfer (inbound data is generally free)."
  },
  {
    "id": 880,
    "question": "Your company decides to implement passwordless authentication for an efficient user experience. Which of the following passwordless authentication options DOES NOT integrate with Azure Active Directory (Azure AD)?",
    "options": ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys", "A cryptographic key"],
    "answer": 3,
    "explanation": "Passwordless Authentication in Azure AD supports Windows Hello for Business, Microsoft Authenticator app, and FIDO2 security keys. It does not support generic cryptographic keys as a standalone passwordless method."
  },
  {
    "id": 881,
    "question": "You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?",
    "options": ["Create a ReadOnly lock for storage1", "Create a delete lock for storage1", "Enable container soft delete", "Enable blob soft delete"],
    "answer": 1,
    "explanation": "A delete lock (CanNotDelete) applied to the storage account prevents the storage account and its contents (including containers) from being deleted, while still allowing new containers to be created."
  },
  {
    "id": 882,
    "question": "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "A Windows command prompt", "A web browser"],
    "answer": 3,
    "explanation": "Azure Cloud Shell is a browser-based shell experience, so you access it using a web browser via the Azure portal or shell.azure.com."
  },
  {
    "id": 883,
    "question": "You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["Infrastructure as a service (IaaS)", "Software as a service (SaaS)", "Platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 884,
    "question": "Which Azure service provides a digital online assistant that provides speech support?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 0,
    "explanation": "Azure Bot Service provides a digital online assistant that provides speech support and conversational AI capabilities."
  },
  {
    "id": 885,
    "question": "Which Azure service uses past trainings to provide predictions that have high probability?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 1,
    "explanation": "Azure Machine Learning is a data science technique that allows computers to use existing data to forecast future behaviors, outcomes, and trends."
  },
  {
    "id": 886,
    "question": "Which Azure service provides serverless computing functionalities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 887,
    "question": "Which Azure service provides data from millions of sensors?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 3,
    "explanation": "Azure IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages."
  },
  {
    "id": 888,
    "question": "An Azure AD tenant can have multiple subscriptions but an Azure subscription can only be associated with one Azure AD tenant. (Evaluate the underlined text)",
    "options": ["No change is needed", "An Azure subscription can have multiple Azure AD tenants", "An Azure AD tenant can only have one subscription", "Neither can have multiple associations"],
    "answer": 0,
    "explanation": "An Azure AD tenant can have multiple subscriptions, but an Azure subscription can only be associated with one Azure AD tenant."
  },
  {
    "id": 889,
    "question": "If your subscription expires, you lose access to all the other resources associated with the subscription. However, the Azure AD directory remains in Azure. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Azure AD directory is also deleted", "The Azure AD directory is moved to another tenant", "The Azure AD directory is frozen"],
    "answer": 0,
    "explanation": "If your subscription expires, you lose access to resources, but the Azure AD directory remains in Azure and can be associated with a different subscription."
  },
  {
    "id": 890,
    "question": "SLAs vary based on the resource type and the location distribution of the resource. However, the minimum uptime for all Azure services is 99.9 percent. (Evaluate the underlined text)",
    "options": ["No change is needed", "99.99 percent", "99.95 percent", "99.0 percent"],
    "answer": 0,
    "explanation": "The minimum uptime for all Azure services is generally 99.9 percent, though many services offer higher SLAs depending on their configuration."
  },
  {
    "id": 891,
    "question": "The SLA guaranteed uptime is increased when resources are deployed across multiple regions. (Evaluate the underlined text)",
    "options": ["No change is needed", "Decreased", "Remains the same", "Is voided"],
    "answer": 0,
    "explanation": "The SLA guaranteed uptime is increased (usually to 99.95 percent or higher) when resources are deployed across multiple regions or availability zones."
  },
  {
    "id": 892,
    "question": "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    "options": ["Help and support", "Advisor", "Cost Management", "Subscriptions"],
    "answer": 0,
    "explanation": "You can request a standard quota increase from the Help and support blade in the Azure portal."
  },
  {
    "id": 893,
    "question": "With Azure ExpressRoute, all inbound data transfer is free of charge. (Evaluate the underlined text)",
    "options": ["No change is needed", "Inbound data transfer is charged", "Outbound data transfer is free", "Both inbound and outbound are charged"],
    "answer": 0,
    "explanation": "With Azure ExpressRoute, all inbound data transfer is free of charge. Outbound data traffic is charged at the normal rate."
  },
  {
    "id": 894,
    "question": "A company is planning on purchasing Azure AD Basic for their Azure account. Does the Azure AD Basic tier come with an SLA of 99.9 percent?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes, Azure Active Directory Basic and Premium editions come with a financially backed 99.9 percent uptime SLA."
  },
  {
    "id": 895,
    "question": "A company needs to store 2 TB worth of data that is infrequently used. The data needs to be accessed via Power BI. Which of the following could be used as a cost-effective data layer for this requirement?",
    "options": ["Azure SQL databases", "Azure PostgreSQL", "Azure Cosmos DB", "Azure Data Lake"],
    "answer": 3,
    "explanation": "Azure Data Lake Storage is a cost-effective solution for storing large amounts of infrequently accessed data, and it integrates directly with Power BI."
  },
  {
    "id": 896,
    "question": "A company is planning on creating several Virtual Machines in Azure. Which of the following is the right category to which the Azure Virtual Machine belongs to?",
    "options": ["Infrastructure as a service (IaaS)", "Platform as a service (PaaS)", "Software as a service (SaaS)", "Function as a service (FaaS)"],
    "answer": 0,
    "explanation": "Azure Virtual Machines are an Infrastructure as a Service (IaaS) offering, as you retain responsibility for patching and managing the Virtual Machine Operating System."
  },
  {
    "id": 897,
    "question": "A company needs to create around 50 customized Virtual Machines. Out of these 20 are Windows based Virtual machines and 30 are Ubuntu Machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
    "options": ["Azure Load Balancer", "Azure Web Apps", "Azure Traffic Manager", "Azure Scale Sets"],
    "answer": 3,
    "explanation": "Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, allowing you to centrally manage, configure, and update many VMs with minimal administrative effort."
  },
  {
    "id": 898,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that whenever users authenticate to Azure, they have to make use of Multi-Factor Authentication. Which of the following can help them achieve this?",
    "options": ["Azure AD Identity Protection", "Azure Security Centre", "Azure DDoS protection", "Azure privileged identity management"],
    "answer": 0,
    "explanation": "Azure AD Identity Protection can be configured with Conditional Access policies to require Multi-Factor Authentication (MFA) for users based on risk or other conditions."
  },
  {
    "id": 899,
    "question": "A company is planning on hosting 2 Virtual Machines in Azure. When the virtual machine is stopped (deallocated), will you still incur costs for the storage attached to the Virtual Machine?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. While you are not charged for the VM compute hours when it is stopped (deallocated), you continue to accrue charges for the Azure storage (disks) attached to the VM."
  },
  {
    "id": 900,
    "question": "A company is planning on setting up a solution in Azure. The solution has the following key requirement: An Integration solution for the deployment of code. Which of the following would be best suited for this requirement?",
    "options": ["Azure Advisor", "Azure Cognitive Services", "Azure Application Insights", "Azure DevOps"],
    "answer": 3,
    "explanation": "Azure DevOps includes Azure Pipelines, which can be used to build, test, and deploy code continuously as an integration solution."
  },
  {
    "id": 901,
    "question": "An IT Engineer needs to create a Virtual Machine in Azure. Currently the IT Engineer has a Windows desktop and has installed the Azure Command Line interface. From which of the following could the IT engineer use the Azure Command Line Interface?",
    "options": ["PowerShell", "File and Print Explorer", "Command Prompt", "Control Panel"],
    "answer": [0, 2],
    "explanation": "On Windows, the Azure CLI can be executed from either the Windows Command Prompt (CMD) or Windows PowerShell."
  },
  {
    "id": 902,
    "question": "A company wants to try out some services which are being offered by Azure in Public Preview. Should the company deploy resources which are part of Public Preview in their production environment?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in Public Preview are excluded from Service Level Agreements (SLAs) and may have breaking changes. They should not be used in production."
  },
  {
    "id": 903,
    "question": "A company is planning on using Azure Storage Accounts. They have the following requirement: Storage of 2 TB of data, Storage of a million files. Would using Azure Storage fulfil these requirements?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Storage has a very high scalability limit (up to 5 PiB per storage account) and supports hundreds of millions of files."
  },
  {
    "id": 904,
    "question": "A company wants to make use of Azure for deployment of various solutions. They want to ensure that suspicious attacks and threats to resources in their Azure account are prevented. Which of the following helps prevent such attacks by using in-built sensors in Azure?",
    "options": ["Azure AD Identity Protection", "Azure DDoS attacks", "Azure privileged identity management", "Azure Advanced Threat protection"],
    "answer": 3,
    "explanation": "Azure Advanced Threat Protection (ATP) uses in-built sensors to monitor on-premises Active Directory signals to identify, detect, and investigate advanced threats."
  },
  {
    "id": 905,
    "question": "A company has just deployed a Virtual Machine named demovm to Azure. The company needs to know if the underlying infrastructure in Azure hosting the Virtual Machine has any issues. Where could they view such issues?",
    "options": ["Azure Advisor", "Azure AD", "The Virtual Machine blade", "Azure Monitor"],
    "answer": 2,
    "explanation": "You can view service health issues for the infrastructure of the Virtual Machine directly in the VM blade under Resource health."
  },
  {
    "id": 906,
    "question": "A company is planning on deploying a web server and database server. You have to ensure that traffic restrictions are in place so that the database server can only communicate with the web server. Which of the following would you recommend for implementing these restrictions?",
    "options": ["Network security groups (NSGs)", "Azure Service Bus", "A local network gateway", "A Virtual Private Gateway"],
    "answer": 0,
    "explanation": "Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources, allowing you to restrict communication between specific subnets or VMs."
  },
  {
    "id": 907,
    "question": "A company wants to make use of an Azure service in private preview. Are Azure services in private preview available to all customers?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Services in private preview are available only to selected customers who have been invited or have signed up for the private preview program."
  },
  {
    "id": 908,
    "question": "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
    "options": ["An Azure Active Directory (Azure AD) role", "An Azure key vault", "An Azure Active Directory group", "A network security group (NSG)"],
    "answer": 3,
    "explanation": "A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, Azure resources based on port and protocol."
  },
  {
    "id": 909,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Which three computers can run the script?",
    "options": ["A computer that runs macOS and has PowerShell Core 6.0 installed", "A computer that runs Windows 10 and has the Azure PowerShell module installed", "A computer that runs Chrome OS and uses Azure Cloud Shell", "A computer that runs Linux and has the Azure CLI tools installed", "A computer that runs Linux and has the Azure PowerShell module installed"],
    "answer": [1, 2, 4],
    "explanation": "To run a PowerShell script, the computer must have PowerShell and the Azure PowerShell module installed, or use Azure Cloud Shell which has it pre-installed. Azure CLI alone is not sufficient for PowerShell scripts."
  },
  {
    "id": 910,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    "options": ["Modify a DDoS protection plan", "Modify an Azure firewall", "Modify an Azure Traffic Manager profile", "Modify a network security group (NSG)"],
    "answer": [1, 3],
    "explanation": "You can allow HTTP traffic (port 80) to a virtual machine by adding an inbound security rule to a Network Security Group (NSG) or by configuring a rule in Azure Firewall."
  },
  {
    "id": 911,
    "question": "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure AD, Five groups in Azure AD, 10 public IP addresses, 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    "options": ["The user accounts", "The network interfaces", "The public IP addresses", "The groups"],
    "answer": 2,
    "explanation": "You are charged for public IP addresses. Deleting unused public IP addresses will directly reduce your Azure costs. User accounts, groups, and unattached network interfaces do not incur charges."
  },
  {
    "id": 912,
    "question": "Which task can you perform by using Azure Advisor?",
    "options": ["Integrate Active Directory and Azure Active Directory (Azure AD)", "Estimate the costs of an Azure solution", "Confirm that Azure subscription security follows best practices", "Evaluate which on-premises resources can be migrated to Azure"],
    "answer": 2,
    "explanation": "Azure Advisor integrates with Microsoft Defender for Cloud to provide security recommendations, helping you confirm that your Azure subscription security follows best practices."
  },
  {
    "id": 913,
    "question": "Your company uses management groups to manage resources in your Azure tenant more efficiently. User1 should be able to assign access and assign policies to management groups. Your solution should follow the principle of least privilege. To which role should you add User1?",
    "options": ["User Access Administrator", "Owner", "Management Group Contributor", "Contributor"],
    "answer": 0,
    "explanation": "The User Access Administrator role allows a user to manage access to Azure resources and assign policies, following the principle of least privilege compared to the Owner role."
  },
  {
    "id": 914,
    "question": "Which service provides serverless computing in Azure?",
    "options": ["Azure Virtual Machines", "Azure Functions", "Azure storage account", "Azure Container Instances"],
    "answer": 1,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 915,
    "question": "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
    "options": ["Private", "Hybrid", "Public"],
    "answer": 2,
    "explanation": "In a public cloud model, the hardware resources are owned and managed by a third-party cloud provider and are shared among multiple tenants (customers)."
  },
  {
    "id": 916,
    "question": "Identify two options from below that reflect two valid hybrid cloud infrastructures.",
    "options": ["On premises infrastructures and public cloud", "Private and public cloud", "Multiple public clouds", "On premises infrastructures and private cloud"],
    "answer": [0, 1],
    "explanation": "A hybrid cloud is a computing environment that combines an on-premises datacenter (private cloud) with a public cloud, allowing data and applications to be shared between them."
  },
  {
    "id": 917,
    "question": "A company has an Azure infrastructure deployed. Three virtual machines (VMs) are deployed to Azure as a three-tiered architecture. All three VMs host different items, with one hosting a front-end web application, one hosting a Microsoft SQL Server database and one hosting a business application programming interface (API). For public access, only the front-end web application be available and should be accessible over HTTP on port 80. All three VMs must be accessible over Remote Desktop Protocol (RDP) on port 222. There should be only one account able to access the VMs using RDP, and it should be yours. Can you determine how Network Security Groups (NSGs) will be used in this scenario? Identify the two ways NSG rules can be used.",
    "options": ["To ensure that only your account can use RDP to access the VMs", "To ensure that only the front-end VM is publicly accessible over port 80", "To ensure that all three VMs are accessible over port 222", "Reviewed by executive management before being released to the public"],
    "answer": [0, 1],
    "explanation": "NSG rules can be configured to allow inbound HTTP (port 80) traffic only to the front-end VM's subnet/NIC, and to allow inbound RDP (port 222) traffic only from your specific source IP address."
  },
  {
    "id": 918,
    "question": "A new policy has been implemented in your organization that limits access to resource group and resource scopes in a detailed, granular way. Various groups and users will be provided access. What would you choose to use if you want to implement the new policy?",
    "options": ["Azure Advisor", "Role-based access control (RBAC)", "Azure Policies", "Locks"],
    "answer": 1,
    "explanation": "Azure Role-Based Access Control (RBAC) is used to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to at a granular scope."
  },
  {
    "id": 919,
    "question": "Cost per subscriber for a cloud service provider reduces with the increase in number of subscribers. It is a public cloud service. Can you identify what this would be called?",
    "options": ["Consumption-based billing", "Operational expenditures", "Scalability", "Economies of scale"],
    "answer": 3,
    "explanation": "Economies of scale refers to the cost advantage that arises with increased output of a product. In cloud computing, as the provider serves more customers, the cost per customer decreases."
  },
  {
    "id": 920,
    "question": "Identify a justification that validates that fact that Azure lowers a company's capital expenditure costs.",
    "options": ["Azure allows you to reduce the level of IT staffing that is required to maintain on-premises application and services", "Azure allows you to pay monthly based on usage rather than pay upfront for physical hardware", "Azure allows you to pay annually to reduce overall costs that are associated with its platform-as-a-service (PaaS) offerings", "Azure reduces the amount of maintenance that is associated with the configuration of firewalls, which reduces costs"],
    "answer": 1,
    "explanation": "Capital expenditure (CapEx) is the upfront cost of buying physical hardware. Azure's pay-as-you-go model shifts this to operational expenditure (OpEx), eliminating the need for large upfront hardware purchases."
  },
  {
    "id": 921,
    "question": "Identify what purpose does the load balancer resource have.",
    "options": ["It uses URL-based routing to route web traffic across multiple instances", "It distributes virtual machine traffic evenly across multiple instances", "It delivers internet traffic to the datacenter that is geographically closest to the user", "It adds or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 922,
    "question": "An organization wants to develop and deploy web apps, for which it subscribes to Azure as a platform. It is desired to keep the expenses to a minimum before the app is finally released. You have to identify the features available in Azure Active Directory (AD) Free edition. Choose two options from below that are available in the Azure Active Directory (AD) Free edition.",
    "options": ["Company branding", "User and Group management", "Group based access management", "Self service password change for cloud users"],
    "answer": [1, 3],
    "explanation": "Azure AD Free edition includes core identity features such as User and Group management, and Self-service password change/reset for cloud users. Company branding and group-based access require Premium editions."
  },
  {
    "id": 923,
    "question": "You want to extract insights by querying and transforming data for which you would require an Azure big data solution. Identify which of the following do you think is the most appropriate tool to use.",
    "options": ["Blob Storage", "Data Lake Analytics", "Azure SQL Database", "Cosmos DB"],
    "answer": 1,
    "explanation": "Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. It allows you to query and transform massive amounts of data."
  },
  {
    "id": 924,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Azure Firewall to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Firewall is a stateful firewall that can filter traffic between subnets based on protocol, source/destination IP addresses, and port numbers."
  },
  {
    "id": 925,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Web Application Firewall (WAF) to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. A Web Application Firewall (WAF) operates at Layer 7 (HTTP/HTTPS) and is designed to protect web applications from specific exploits, not for general subnet-to-subnet IP/port filtering."
  },
  {
    "id": 926,
    "question": "Your company has deployed Azure. There are two subnets and you are required to filter traffic between them. Filtering should be based on three things: TCP/IP Protocol in use, Source IP/address and port number, Destination IP address and port number. Solution: As a solution, you suggest Network Security Group to be deployed and configured as the traffic filter. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. An NSG can filter network traffic to and from Azure resources in a virtual network based on source/destination IP, port, and protocol."
  },
  {
    "id": 927,
    "question": "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    "options": ["An Azure web app", "An Azure virtual machine", "An Azure logic app", "An Azure SQL database"],
    "answer": 1,
    "explanation": "An Azure virtual machine is an example of Infrastructure as a Service (IaaS). Web apps, logic apps, and SQL databases are Platform as a Service (PaaS)."
  },
  {
    "id": 928,
    "question": "To which cloud models can you deploy physical servers?",
    "options": ["Private cloud and hybrid cloud only", "Private cloud only", "Private cloud, hybrid cloud and public cloud", "Hybrid cloud only"],
    "answer": 0,
    "explanation": "You can deploy physical servers in a private cloud (on-premises) or a hybrid cloud (which includes on-premises resources). You cannot deploy physical servers in a public cloud."
  },
  {
    "id": 929,
    "question": "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?",
    "options": ["Hybrid", "Private", "Public"],
    "answer": 0,
    "explanation": "A hybrid cloud model combines on-premises infrastructure (private cloud) with public cloud resources (Azure), allowing them to connect and share data."
  },
  {
    "id": 930,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 1,
    "explanation": "No. Azure virtual machines and Azure Storage accounts are Infrastructure as a Service (IaaS) solutions, which violates the requirement to use only PaaS solutions."
  },
  {
    "id": 931,
    "question": "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    "answer": 2,
    "explanation": "Infrastructure as a Service (IaaS) is required because the applications have specific prerequisite applications and services that need to be installed and managed on the underlying OS."
  },
  {
    "id": 932,
    "question": "An Availability Zone in Azure has physically separate locations across two continents. (Evaluate the underlined text)",
    "options": ["No change is needed", "Within a single Azure region", "Within multiple Azure regions", "Within a single Azure datacenter"],
    "answer": 1,
    "explanation": "Availability Zones are unique physical locations within a single Azure region, not across multiple continents or regions."
  },
  {
    "id": 933,
    "question": "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell has the Azure CLI pre-installed and configured. The az command will work in the PowerShell environment within Cloud Shell."
  },
  {
    "id": 934,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from within Windows PowerShell."
  },
  {
    "id": 935,
    "question": "Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. The Azure CLI can be installed on Windows 10 and executed from the standard Windows Command Prompt (CMD)."
  },
  {
    "id": 936,
    "question": "An Azure administrator plans to run a PowerShell script that creates Azure resources. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. A PowerShell script requires PowerShell and the Azure PowerShell module to be installed on the computer to execute Azure cmdlets."
  },
  {
    "id": 937,
    "question": "Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. Azure Cloud Shell provides both Bash and PowerShell environments, both of which have the Azure CLI pre-installed and configured."
  },
  {
    "id": 938,
    "question": "Azure Databricks is an Apache Spark-based analytics service. (Evaluate the underlined text)",
    "options": ["No change is needed", "Azure Data Factory", "Azure DevOps", "Azure HDInsight"],
    "answer": 0,
    "explanation": "The statement is correct. Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 939,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 940,
    "question": "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
    "options": ["Azure CLI", "The Azure portal", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "answer": [1, 2],
    "explanation": "The Azure portal and Azure Cloud Shell are both web-based tools that can be accessed via a web browser on an iPhone to manage Azure resources."
  },
  {
    "id": 941,
    "question": "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    "options": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Monitor can be configured with Activity Log alerts to notify you when specific administrative actions, such as stopping a virtual machine, occur."
  },
  {
    "id": 942,
    "question": "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    "options": ["Use Bash in Azure Cloud Shell", "Use PowerShell in Azure Cloud Shell", "Use the PowerApps portal", "Use the Security and Compliance admin center", "Use the Azure portal"],
    "answer": [0, 1, 4],
    "explanation": "The Azure portal, Azure Cloud Shell (Bash), and Azure Cloud Shell (PowerShell) are all web-based and can be accessed from an Android tablet's browser to create a VM."
  },
  {
    "id": 943,
    "question": "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?",
    "options": ["Yes", "No"],
    "answer": 0,
    "explanation": "Yes. You can add an inbound security rule to the NSG associated with VM1 to allow TCP traffic on port 80 (HTTP) from the Internet."
  },
  {
    "id": 944,
    "question": "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    "options": ["Azure Firewall", "An application security group", "Azure DDoS protection", "A network security group (NSG)"],
    "answer": 0,
    "explanation": "Azure Firewall is a managed, cloud-based network security service that can centrally create, enforce, and log application and network connectivity policies across multiple subscriptions and virtual networks."
  },
  {
    "id": 945,
    "question": "From Azure Cloud Shell, you can track your company's regulatory standards and regulations, such as ISO 27001. (Evaluate the underlined text)",
    "options": ["No change is needed", "The Microsoft Cloud Partner Portal", "Compliance Manager", "The Trust Center"],
    "answer": 2,
    "explanation": "Microsoft Compliance Manager (in the Service Trust Portal) is the tool used to track, assign, and verify regulatory compliance activities, not Azure Cloud Shell."
  },
  {
    "id": 946,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 947,
    "question": "You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?",
    "options": ["An Azure Storage account", "An Azure Information Protection policy", "An Encryption Key", "An Azure Key Vault"],
    "answer": 3,
    "explanation": "Azure Disk Encryption requires an Azure Key Vault to control and manage disk encryption keys and secrets."
  },
  {
    "id": 948,
    "question": "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you are using, including planned maintenance activities."
  },
  {
    "id": 949,
    "question": "What can you use to identify underutilized or unused Azure virtual machines?",
    "options": ["Azure Advisor", "Azure Cost Management and Billing", "Azure reservations", "Azure Policy"],
    "answer": 0,
    "explanation": "Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources, including virtual machines."
  },
  {
    "id": 950,
    "question": "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    "options": ["A read-only lock", "An Azure policy", "A management group", "A reservation"],
    "answer": 1,
    "explanation": "Azure Policy can be used to enforce compliance by using the built-in Allowed locations policy to restrict where resources can be created."
  },
  {
    "id": 951,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    "options": ["Deallocate the virtual machines during off hours", "Use Azure Hybrid Benefit", "Configure Azure Cost Management budgets", "Use Azure reservations"],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 952,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["Billing readers for an Azure subscription only", "Owners for an Azure subscription only", "Anyone", "All users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 953,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 954,
    "question": "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
    "options": ["Adaptive network hardening in Azure Security Center", "Azure Service Health", "Azure Monitor workbooks", "Adaptive application controls in Azure Security Center"],
    "answer": 2,
    "explanation": "Azure Monitor workbooks can be used to visualize and respond to data, though Logic Apps (playbooks) are the primary automation tool in Sentinel."
  },
  {
    "id": 955,
    "question": "You have an Azure application that uses an Azure App Service web app (99.9 percent SLA) and an Azure SQL Database (99.99 percent SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.999 * 0.9999 = 0.9989001 = 99.89001 percent", "0.999 / 0.9999 = 0.9991 = 99.91 percent", "Max(0.999, 0.9999) = 0.9999 = 99.99 percent", "Min(0.999, 0.9999) = 0.999 = 99.9 percent"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails."
  },
  {
    "id": 956,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 957,
    "question": "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company's migration plan. What should you create?",
    "options": ["An Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "An Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 958,
    "question": "You need to ensure that all resources in an Azure subscription are deployed to the 'West US' region. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Role-based access control (RBAC)"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce rules and effects over your resources, such as using the built-in 'Allowed locations' policy to restrict deployments to specific regions."
  },
  {
    "id": 959,
    "question": "Which storage redundancy option replicates data synchronously across three Azure availability zones in a single region?",
    "options": ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"],
    "answer": 1,
    "explanation": "Zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region."
  },
  {
    "id": 960,
    "question": "You need to allow external users to collaborate with your organization using their own identities. Which Azure AD feature should you use?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration enables you to securely share your company's applications and services with guest users from any organization, while maintaining control over your corporate data."
  },
  {
    "id": 961,
    "question": "You need to identify the amount of time it takes for web pages to load in a user's browser. What should you use?",
    "options": ["Azure Monitor alerts", "Application Insights in Azure Monitor", "Log Analytics", "Azure Network Watcher"],
    "answer": 1,
    "explanation": "Application Insights, a feature of Azure Monitor, is an extensible Application Performance Management (APM) service that helps you monitor live applications and detect performance anomalies like slow page loads."
  },
  {
    "id": 962,
    "question": "You need to connect an on-premises network to Azure with guaranteed bandwidth and low latency, without traversing the public internet. What should you use?",
    "options": ["Site-to-Site VPN", "Azure ExpressRoute", "Azure Virtual WAN", "Point-to-Site VPN"],
    "answer": 1,
    "explanation": "Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, without traversing the public internet."
  },
  {
    "id": 963,
    "question": "You want to track and manage your Azure spending by setting a limit and receiving an email notification when you reach 80% of that limit. What should you create?",
    "options": ["Azure Policy", "Budget alert", "Resource lock", "Service Level Agreement (SLA)"],
    "answer": 1,
    "explanation": "Azure Cost Management allows you to create budgets and configure budget alerts to notify you via email when your spending reaches a specified threshold, such as 80%."
  },
  {
    "id": 964,
    "question": "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs?",
    "options": ["Deallocate the virtual machines during off hours", "Use Azure Hybrid Benefit", "Configure Azure Cost Management budgets", "Use Azure reservations"],
    "answer": 1,
    "explanation": "Azure Hybrid Benefit allows you to use your on-premises Software Assurance-enabled SQL Server licenses on Azure virtual machines to significantly reduce licensing costs."
  },
  {
    "id": 965,
    "question": "What is the longest term you can purchase for Azure Reserved VM Instances?",
    "options": ["One year", "Three years", "Four years", "Five years"],
    "answer": 1,
    "explanation": "Azure Reservations allow you to commit to a one-year or three-year plan for specific resources, providing a significant discount compared to pay-as-you-go pricing."
  },
  {
    "id": 966,
    "question": "Who can use the Azure Total Cost of Ownership (TCO) calculator?",
    "options": ["Billing readers for an Azure subscription only", "Owners for an Azure subscription only", "Anyone", "All users who have an account in Azure Active Directory"],
    "answer": 2,
    "explanation": "The Azure TCO Calculator is a public, web-based tool. You do not need an Azure subscription or an Azure AD account to use it."
  },
  {
    "id": 967,
    "question": "What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?",
    "options": ["Uptime", "Feature availability", "Bandwidth", "Performance"],
    "answer": 0,
    "explanation": "The SLA for virtual machines guarantees 'uptime'. The amount of uptime guaranteed depends on factors such as whether the VMs are in an availability set or availability zone."
  },
  {
    "id": 968,
    "question": "You need to identify whether Azure complies with the company's regional requirements. What should you use?",
    "options": ["The Knowledge Center", "Azure Marketplace", "The Azure portal", "The Trust Center"],
    "answer": 3,
    "explanation": "You can view a list of compliance certifications in the Trust Center to determine whether Azure meets your regional requirements."
  },
  {
    "id": 969,
    "question": "What should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
    "options": ["Microsoft Defender for Cloud", "Azure Advisor", "Azure Service Health", "Azure Knowledge Center"],
    "answer": 0,
    "explanation": "Microsoft Defender for Cloud includes a regulatory compliance dashboard that helps streamline the process for meeting regulatory compliance requirements."
  },
  {
    "id": 970,
    "question": "Which regulation is primarily focused on data protection and privacy in the European Union?",
    "options": ["HIPAA", "GDPR", "NIST", "ISO 27001"],
    "answer": 1,
    "explanation": "The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area."
  },
  {
    "id": 971,
    "question": "Which Azure service should you use to store certificates securely?",
    "options": ["Azure Security Center", "An Azure Storage account", "Azure Key Vault", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Azure Key Vault is a secure store for various types of sensitive information, including passwords and certificates."
  },
  {
    "id": 972,
    "question": "What can Azure Information Protection encrypt?",
    "options": ["Network traffic", "Documents and email messages", "An Azure Storage account", "An Azure SQL database"],
    "answer": 1,
    "explanation": "Azure Information Protection can encrypt documents and emails by applying labels that stay with the documents independently of their location."
  },
  {
    "id": 973,
    "question": "Which Azure service can you use as a security information and event management (SIEM) solution?",
    "options": ["Azure Analysis Services", "Azure Cognitive Services", "Azure Sentinel", "Azure Information Protection"],
    "answer": 2,
    "explanation": "Microsoft Azure Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration automated response (SOAR) solution."
  },
  {
    "id": 974,
    "question": "You need to review your secure score. What should you use?",
    "options": ["Azure Monitor", "Azure Advisor", "Help + support", "Microsoft Defender for Cloud"],
    "answer": 3,
    "explanation": "The central feature in Microsoft Defender for Cloud that enables you to achieve those goals is secure score."
  },
  {
    "id": 975,
    "question": "You need to configure an Azure solution that secures websites from attacks and generates reports that contain details of attempted attacks. What should you include?",
    "options": ["Azure Firewall", "A network security group (NSG)", "Azure Information Protection", "DDoS protection"],
    "answer": 3,
    "explanation": "DDoS Protection Standard can generate reports that contain details of attempted attacks, unlike the Basic tier."
  },
  {
    "id": 976,
    "question": "Which Azure service provides a managed Web Application Firewall (WAF)?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that can be configured with a Web Application Firewall (WAF) to protect against common web vulnerabilities."
  },
  {
    "id": 977,
    "question": "You need to provide secure RDP access to an Azure virtual machine without exposing it to the public internet. What should you use?",
    "options": ["Azure Bastion", "Azure Firewall", "Azure Policy", "Network Security Group"],
    "answer": 0,
    "explanation": "Azure Bastion provides secure and seamless RDP/SSH connectivity to your virtual machines directly in the Azure portal over SSL, without exposing the VM to the public internet."
  },
  {
    "id": 978,
    "question": "You need to connect an Azure service to an Azure virtual network without exposing it to the public internet. What should you use?",
    "options": ["Azure Private Link", "Azure Service Endpoint", "Azure VPN Gateway", "Azure ExpressRoute"],
    "answer": 0,
    "explanation": "Azure Private Link provides private connectivity from a virtual network to Azure platform as a service (PaaS), customer-owned, or Microsoft partner services, without exposing the service to the public internet."
  },
  {
    "id": 979,
    "question": "You need to prevent traffic from an Azure virtual network from being routed to an Azure Storage account via the internet. What should you use?",
    "options": ["A public endpoint", "Azure VPN Gateway", "A service endpoint", "A network security group (NSG)"],
    "answer": 2,
    "explanation": "Virtual Network (VNet) service endpoints provide secure and direct connectivity to Azure services over an optimized route over the Azure backbone network, without needing a public IP address."
  },
  {
    "id": 980,
    "question": "You need to connect two Azure virtual networks located in different regions. What is the most appropriate solution?",
    "options": ["Virtual Network Peering", "Azure ExpressRoute", "Azure Application Gateway", "Azure Front Door"],
    "answer": 0,
    "explanation": "Virtual Network Peering allows you to seamlessly connect two Azure virtual networks, even if they are in different regions (Global VNet Peering), making them appear as one for connectivity purposes."
  },
  {
    "id": 981,
    "question": "Which Azure service provides a hub-and-spoke network architecture with built-in SD-WAN and SaaS optimization?",
    "options": ["Azure Virtual WAN", "Azure Virtual Network", "Azure ExpressRoute", "Azure Traffic Manager"],
    "answer": 0,
    "explanation": "Azure Virtual WAN is a networking service that brings many networking, security, and routing functionalities together to provide a single operational interface, including built-in SD-WAN and SaaS optimization."
  },
  {
    "id": 982,
    "question": "You need to route user traffic to the most appropriate Azure region based on routing methods like priority or geographic location. What should you use?",
    "options": ["Azure Load Balancer", "Azure Traffic Manager", "Azure Application Gateway", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Traffic Manager is a DNS-based traffic load balancer that enables you to distribute traffic optimally to services across global Azure regions, providing high availability and responsiveness."
  },
  {
    "id": 983,
    "question": "Which Azure service provides a global, scalable entry point for web applications using the Microsoft global edge network?",
    "options": ["Azure Traffic Manager", "Azure Front Door", "Azure Application Gateway", "Azure Load Balancer"],
    "answer": 1,
    "explanation": "Azure Front Door is a scalable and secure entry point for fast delivery of your global, enterprise web applications, leveraging the Microsoft global edge network."
  },
  {
    "id": 984,
    "question": "What is the primary function of Azure Load Balancer?",
    "options": ["It uses URL-based routing to route web traffic across multiple instances", "It distributes virtual machine traffic evenly across multiple instances at Layer 4", "It delivers internet traffic to the datacenter that is geographically closest to the user", "It adds or removes virtual machine instances as demand increases"],
    "answer": 1,
    "explanation": "Azure Load Balancer operates at layer 4 (TCP, UDP) and distributes incoming network traffic evenly across multiple virtual machine instances to ensure high availability."
  },
  {
    "id": 985,
    "question": "You need to route HTTP traffic to different backend pools based on the URL path. Which Azure service should you use?",
    "options": ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    "answer": 1,
    "explanation": "Azure Application Gateway is a web traffic load balancer that enables you to manage traffic to your web applications, including URL-based routing."
  },
  {
    "id": 986,
    "question": "Which Azure service provides serverless computing functionalities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure."
  },
  {
    "id": 987,
    "question": "Which Azure service allows you to create, schedule, and orchestrate workflows that integrate apps, data, and systems?",
    "options": ["Azure Functions", "Azure Logic Apps", "Azure Event Grid", "Azure Service Bus"],
    "answer": 1,
    "explanation": "Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services."
  },
  {
    "id": 988,
    "question": "Which Azure service is an event routing service that provides reliable message delivery for cloud applications?",
    "options": ["Azure Event Hubs", "Azure Event Grid", "Azure Service Bus", "Azure Queue Storage"],
    "answer": 1,
    "explanation": "Azure Event Grid is a fully managed event routing service that allows you to easily manage events from various Azure services and custom sources."
  },
  {
    "id": 989,
    "question": "Which Azure service is a big data streaming platform and event ingestion service that can handle millions of events per second?",
    "options": ["Azure Event Hubs", "Azure Event Grid", "Azure Service Bus", "Azure Queue Storage"],
    "answer": 0,
    "explanation": "Azure Event Hubs is a big data streaming platform and event ingestion service designed to handle millions of events per second."
  },
  {
    "id": 990,
    "question": "What is the purpose of Azure Service Bus?",
    "options": ["To store large amounts of unstructured data", "To provide reliable, asynchronous message delivery between decoupled applications", "To host web applications", "To manage virtual machine scaling"],
    "answer": 1,
    "explanation": "Azure Service Bus is a fully managed enterprise message broker that provides reliable, asynchronous message delivery between decoupled applications and services."
  },
  {
    "id": 991,
    "question": "Which Azure storage service is used for storing large numbers of messages up to 64 KB in size?",
    "options": ["Azure Blob Storage", "Azure Queue Storage", "Azure File Storage", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure Queue Storage is a service for storing large numbers of messages. A queue message can be up to 64 KB in size."
  },
  {
    "id": 992,
    "question": "Which Azure storage service is optimized for storing massive amounts of unstructured data, such as text or binary data?",
    "options": ["Azure Blob Storage", "Azure Queue Storage", "Azure File Storage", "Azure Table Storage"],
    "answer": 0,
    "explanation": "Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data, including images and videos."
  },
  {
    "id": 993,
    "question": "Which Azure storage service provides fully managed file shares in the cloud that can be accessed via SMB?",
    "options": ["Azure Blob Storage", "Azure Queue Storage", "Azure Files", "Azure Table Storage"],
    "answer": 2,
    "explanation": "Azure Files provides fully managed file shares in the cloud that can be accessed via the industry standard Server Message Block (SMB) protocol."
  },
  {
    "id": 994,
    "question": "Which Azure storage service is a NoSQL key-value store?",
    "options": ["Azure Blob Storage", "Azure Queue Storage", "Azure Files", "Azure Table Storage"],
    "answer": 3,
    "explanation": "Azure Table Storage is a NoSQL key-value store that is ideal for storing large amounts of structured, non-relational data."
  },
  {
    "id": 995,
    "question": "Which Azure storage service provides high-performance, low-latency disk storage for Azure virtual machines?",
    "options": ["Azure Blob Storage", "Azure Disk Storage", "Azure Files", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure Disk Storage provides high-performance, low-latency disk storage for Azure virtual machines, including Premium SSDs and Ultra Disks."
  },
  {
    "id": 996,
    "question": "Which Azure service provides a fully managed, intelligent relational database service in the cloud?",
    "options": ["Azure Cosmos DB", "Azure SQL Database", "Azure Database for MySQL", "Azure Table Storage"],
    "answer": 1,
    "explanation": "Azure SQL Database is a fully managed platform as a service (PaaS) relational database engine that handles most of the database management functions."
  },
  {
    "id": 997,
    "question": "Which Azure service provides a globally distributed, multi-model NoSQL database service with single-digit millisecond latency?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for PostgreSQL", "Azure Synapse Analytics"],
    "answer": 1,
    "explanation": "Azure Cosmos DB is a globally distributed, multi-model NoSQL database service that offers single-digit millisecond latency and multi-region write capabilities."
  },
  {
    "id": 998,
    "question": "Which Azure service provides a fully managed MySQL database service?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for MySQL", "Azure Synapse Analytics"],
    "answer": 2,
    "explanation": "Azure Database for MySQL is a fully managed relational database service based on the open-source MySQL database engine."
  },
  {
    "id": 999,
    "question": "Which Azure service provides a fully managed PostgreSQL database service?",
    "options": ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for MySQL", "Azure Database for PostgreSQL"],
    "answer": 3,
    "explanation": "Azure Database for PostgreSQL is a fully managed relational database service based on the open-source PostgreSQL database engine."
  },
  {
    "id": 1000,
    "question": "Which Azure service is an enterprise analytics service that accelerates time to insight across data warehouses and big data systems?",
    "options": ["Azure Cosmos DB", "Azure Synapse Analytics", "Azure Queue Storage", "Azure Functions"],
    "answer": 1,
    "explanation": "Azure Synapse Analytics is an enterprise analytics service that accelerates time to insight, across data warehouses and big data systems, allowing you to query data using serverless SQL pools."
  },
  {
    "id": 1001,
    "question": "Which Azure service is a fast, easy, and collaborative Apache Spark-based analytics platform?",
    "options": ["Azure Synapse Analytics", "Azure Databricks", "Azure HDInsight", "Azure Machine Learning"],
    "answer": 1,
    "explanation": "Azure Databricks is a fast, easy, and collaborative Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform."
  },
  {
    "id": 1002,
    "question": "Which Azure service is a fully managed, open-source analytics service for big data workloads like Hadoop and Spark?",
    "options": ["Azure Synapse Analytics", "Azure Databricks", "Azure HDInsight", "Azure Machine Learning"],
    "answer": 2,
    "explanation": "Azure HDInsight is a fully managed, full-spectrum, open-source analytics service in the cloud for enterprises, supporting Hadoop, Spark, Hive, and more."
  },
  {
    "id": 1003,
    "question": "Which Azure service allows you to build, train, and deploy machine learning models?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 1,
    "explanation": "Azure Machine Learning is a cloud service for accelerating and managing the machine learning project lifecycle, allowing you to build, train, and deploy models."
  },
  {
    "id": 1004,
    "question": "Which Azure service provides APIs, SDKs, and services to help developers build intelligent applications without direct AI skills?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Cognitive Services", "Azure IoT Hub"],
    "answer": 2,
    "explanation": "Azure Cognitive Services are APIs, SDKs, and services available to help developers build intelligent applications without having direct AI or data science skills."
  },
  {
    "id": 1005,
    "question": "Which Azure service provides a digital online assistant that provides speech and conversational AI capabilities?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 0,
    "explanation": "Azure Bot Service provides a digital online assistant that provides speech support and conversational AI capabilities."
  },
  {
    "id": 1006,
    "question": "Which Azure service acts as a central message hub for bi-directional communication between your IoT application and the devices it manages?",
    "options": ["Azure Bot Service", "Azure Machine Learning", "Azure Functions", "Azure IoT Hub"],
    "answer": 3,
    "explanation": "Azure IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages."
  },
  {
    "id": 1007,
    "question": "Which Azure service is a fully managed SaaS solution that makes it easy to connect, monitor, and manage IoT assets at scale?",
    "options": ["Azure IoT Hub", "Azure IoT Central", "Azure Sphere", "Azure Event Hubs"],
    "answer": 1,
    "explanation": "Azure IoT Central is a fully managed SaaS solution that makes it easy to connect, monitor, and manage IoT assets at scale."
  },
  {
    "id": 1008,
    "question": "Which Azure service is a highly secure IoT solution that includes a microcontroller unit (MCU) and a customized Linux operating system?",
    "options": ["Azure IoT Hub", "Azure IoT Central", "Azure Sphere", "Azure Event Hubs"],
    "answer": 2,
    "explanation": "Azure Sphere is a highly secure IoT solution that includes a microcontroller unit (MCU), a customized Linux operating system, and a cloud-based security service."
  },
  {
    "id": 1009,
    "question": "Which Azure service provides a set of version control tools to manage code?",
    "options": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "answer": 0,
    "explanation": "Azure Repos provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code."
  },
  {
    "id": 1010,
    "question": "Which Azure service provides a managed CI/CD service for building, testing, and deploying applications?",
    "options": ["Azure Boards", "Azure Pipelines", "Azure Artifacts", "Azure Test Plans"],
    "answer": 1,
    "explanation": "Azure Pipelines is a cloud service that you can use to continuously build and test your code project, and make it available to other users."
  },
  {
    "id": 1011,
    "question": "Which Azure service provides agile planning and tracking tools?",
    "options": ["Azure Boards", "Azure Pipelines", "Azure Artifacts", "Azure Test Plans"],
    "answer": 0,
    "explanation": "Azure Boards provides agile planning and tracking tools, including backlogs, boards, and dashboards."
  },
  {
    "id": 1012,
    "question": "Which Azure service allows you to manage and share packages like NuGet, npm, and Maven?",
    "options": ["Azure Boards", "Azure Pipelines", "Azure Artifacts", "Azure Test Plans"],
    "answer": 2,
    "explanation": "Azure Artifacts allows you to create, host, and share packages with your team, and easily integrate them into your CI/CD pipelines."
  },
  {
    "id": 1013,
    "question": "Which Azure service provides manual and exploratory testing tools?",
    "options": ["Azure Boards", "Azure Pipelines", "Azure Artifacts", "Azure Test Plans"],
    "answer": 3,
    "explanation": "Azure Test Plans provides manual and exploratory testing tools to help you deliver high-quality software."
  },
  {
    "id": 1014,
    "question": "Which Azure service simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform?",
    "options": ["Azure Migrate", "Azure Site Recovery", "Azure Arc", "Azure Backup"],
    "answer": 2,
    "explanation": "Azure Arc simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform, projecting non-Azure resources into Azure Resource Manager."
  },
  {
    "id": 1015,
    "question": "Which Azure service helps you discover, assess, and migrate on-premises workloads to Azure?",
    "options": ["Azure Migrate", "Azure Site Recovery", "Azure Arc", "Azure Backup"],
    "answer": 0,
    "explanation": "Azure Migrate is a unified migration platform that provides tools to discover, assess, and migrate on-premises servers, databases, and web apps to Azure."
  },
  {
    "id": 1016,
    "question": "Which Azure service provides business continuity and disaster recovery by orchestrating replication of Azure VMs and on-premises VMs?",
    "options": ["Azure Migrate", "Azure Site Recovery", "Azure Arc", "Azure Backup"],
    "answer": 1,
    "explanation": "Azure Site Recovery is a disaster recovery solution that orchestrates the replication and failover of Azure VMs and on-premises VMs to ensure business continuity."
  },
  {
    "id": 1017,
    "question": "Which Azure service provides automated, application-consistent backups to Azure?",
    "options": ["Azure Migrate", "Azure Site Recovery", "Azure Arc", "Azure Backup"],
    "answer": 3,
    "explanation": "Azure Backup provides automated, application-consistent backups to Azure, helping you protect your data and applications in the cloud and on-premises."
  },
  {
    "id": 1018,
    "question": "Which Azure service allows you to automate the deployment and configuration of Azure resources using declarative templates?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Resource Manager (ARM) templates", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Resource Manager (ARM) templates allow you to define the infrastructure and configuration for your Azure resources in a declarative JSON format, enabling consistent and repeatable deployments."
  },
  {
    "id": 1019,
    "question": "Which Azure service provides a domain-specific language (DSL) for deploying Azure resources declaratively, serving as an alternative to ARM templates?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Bicep", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources, serving as a more concise and readable alternative to ARM templates."
  },
  {
    "id": 1020,
    "question": "Which command-line tool can be used to manage Azure resources from Windows, macOS, or Linux?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Bicep", "Azure Portal"],
    "answer": 0,
    "explanation": "The Azure Command-Line Interface (CLI) is a cross-platform command-line tool that can be installed locally on Windows, macOS, and Linux to manage Azure resources."
  },
  {
    "id": 1021,
    "question": "Which command-line tool provides a rich set of cmdlets for managing Azure resources from Windows, macOS, or Linux?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Bicep", "Azure Portal"],
    "answer": 1,
    "explanation": "Azure PowerShell is a set of cmdlets for managing Azure resources directly from the command line, available on Windows, macOS, and Linux."
  },
  {
    "id": 1022,
    "question": "Which web-based shell experience allows you to manage Azure resources using Bash or PowerShell directly from the browser?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Cloud Shell", "Azure Portal"],
    "answer": 2,
    "explanation": "Azure Cloud Shell is an interactive, authenticated, browser-accessible shell for managing Azure resources, providing the flexibility of choosing either Bash or PowerShell."
  },
  {
    "id": 1023,
    "question": "Which web-based, unified console provides a graphical user interface to deploy, manage, and monitor all your Azure resources?",
    "options": ["Azure CLI", "Azure PowerShell", "Azure Cloud Shell", "Azure Portal"],
    "answer": 3,
    "explanation": "The Azure Portal is a web-based, unified console that provides an alternative to command-line tools, allowing you to view, manage, and monitor all your Azure resources in one place."
  },
  {
    "id": 1024,
    "question": "Which Azure service provides personalized recommendations to help optimize your Azure resources for performance, security, reliability, and cost?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Advisor provides personalized recommendations to help optimize your Azure resources and improve the performance, security, and reliability of your workloads."
  },
  {
    "id": 1025,
    "question": "Which Azure service provides a personalized view of the health of the Azure services and regions you're using, including planned maintenance?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Azure Network Watcher"],
    "answer": 1,
    "explanation": "Azure Service Health provides a personalized view of the health of the Azure services and regions you're using, including service issues, planned maintenance, and health advisories."
  },
  {
    "id": 1026,
    "question": "Which Azure service provides information about the health of your individual cloud resources, such as a specific virtual machine instance?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Resource Health", "Azure Network Watcher"],
    "answer": 2,
    "explanation": "Azure Resource Health provides information about the health of your individual cloud resources, such as a specific virtual machine instance, helping you diagnose and resolve issues."
  },
  {
    "id": 1027,
    "question": "Which Azure support plan is free and provides access to billing support, Azure service health, and Azure Advisor?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 0,
    "explanation": "The Basic support plan is free and includes access to billing and subscription support, Azure Service Health, and Azure Advisor recommendations."
  },
  {
    "id": 1028,
    "question": "Which Azure support plan provides 24/7 access to support engineers via phone and email, and is the lowest cost option to do so?",
    "options": ["Basic", "Developer", "Standard", "Professional Direct"],
    "answer": 2,
    "explanation": "The Standard support plan is the lowest cost option that provides 24/7 access to Support Engineers via email and phone."
  },
  {
    "id": 1029,
    "question": "You need to create a new user for an Azure subscription. What should you use?",
    "options": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "Azure Active Directory", "A web browser"],
    "answer": 2,
    "explanation": "Azure Active Directory (Azure AD) is the centralized identity and access management solution for Azure resources. You create users in Azure AD to grant them access to Azure subscriptions."
  },
  {
    "id": 1030,
    "question": "You need to ensure that each department in your company can use a different payment option for the Azure services it consumes. What should you create for each department?",
    "options": ["A reservation", "A subscription", "A resource group", "A container instance"],
    "answer": 1,
    "explanation": "Your Azure costs are billed 'per subscription'. To use different payment options per department, you will need to create a separate subscription per department."
  },
  {
    "id": 1031,
    "question": "You need to prevent the accidental deletion of a resource group. What should you apply to the resource group?",
    "options": ["Azure Policy", "A resource lock", "Role-based access control (RBAC)", "A tag"],
    "answer": 1,
    "explanation": "A 'CanNotDelete' (or Delete) resource lock prevents authorized users from deleting the resource group, while still allowing them to read and modify it."
  },
  {
    "id": 1032,
    "question": "You need to ensure that a user can only view resources in a resource group but cannot make any changes. Which built-in Azure RBAC role should you assign?",
    "options": ["Owner", "Contributor", "Reader", "User Access Administrator"],
    "answer": 2,
    "explanation": "The Reader role grants view access to all Azure resources but does not allow the user to make any changes."
  },
  {
    "id": 1033,
    "question": "You need to ensure that all virtual machines in a resource group have a specific tag. What should you use?",
    "options": ["Azure Policy", "Azure Blueprints", "Resource locks", "Azure Advisor"],
    "answer": 0,
    "explanation": "Azure Policy can be used to enforce tagging rules and conventions, ensuring that resources are created with specific tags."
  },
  {
    "id": 1034,
    "question": "What is the maximum number of tags you can apply to a single Azure resource or resource group?",
    "options": ["10", "25", "50", "100"],
    "answer": 2,
    "explanation": "Each resource or resource group can have a maximum of 50 tags."
  },
  {
    "id": 1035,
    "question": "You need to grant an external partner temporary access to a specific Azure resource. Which Azure AD feature is best suited for this?",
    "options": ["Azure AD B2C", "Azure AD B2B", "Azure AD Connect", "Azure AD Privileged Identity Management"],
    "answer": 1,
    "explanation": "Azure AD B2B collaboration allows you to securely share your company's applications and services with guest users from external organizations."
  },
  {
    "id": 1036,
    "question": "You need to require users to perform MFA only when they sign in from an untrusted location. Which Azure AD feature should you use?",
    "options": ["Azure AD Identity Protection", "Conditional Access", "Azure AD Privileged Identity Management", "Azure AD Connect"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) based on specific conditions, such as signing in from an untrusted location or network."
  },
  {
    "id": 1037,
    "question": "Which of the following is NOT a valid multi-factor authentication (MFA) method in Azure AD?",
    "options": ["Microsoft Authenticator app", "SMS code", "Picture identification", "Phone call"],
    "answer": 2,
    "explanation": "Picture identification and passport numbers are not valid MFA authentication methods. Valid methods include the Microsoft Authenticator app, SMS, and voice calls."
  },
  {
    "id": 1038,
    "question": "You need to ensure that users must provide a second form of authentication when signing in from an untrusted network. Which Azure AD feature should you configure?",
    "options": ["Azure AD Privileged Identity Management", "Conditional Access", "Azure AD Connect", "Azure AD B2B"],
    "answer": 1,
    "explanation": "Conditional Access policies can be configured to require Multi-Factor Authentication (MFA) when users attempt to sign in from specific conditions, such as an untrusted network or location."
  },
  {
    "id": 1039,
    "question": "You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Azure AD-integrated applications. What should you implement?",
    "options": ["A conditional access policy", "Azure Bastion", "Azure Firewall", "Azure Policy"],
    "answer": 0,
    "explanation": "Conditional Access policies can be configured to require devices to be compliant (e.g., having the latest security patches) before granting access to Azure AD-integrated applications."
  },
  {
    "id": 1040,
    "question": "You need to provide the development team the ability to start and stop Virtual Machines. The access needs to be granted on specific occasions only, using the principle of least privilege. Which security feature would you use?",
    "options": ["Conditional Access policy", "Azure Policies", "Just in time VM access", "Privileged Identity Management"],
    "answer": 3,
    "explanation": "With Privileged Identity Management (PIM), you can implement just-in-time privileges for Azure resources, granting access only when needed."
  },
  {
    "id": 1041,
    "question": "You need to identify which tables need to be queried for security-related events from Windows Event Logs in Log Analytics. Which table should you query?",
    "options": ["Azure Activity", "Azure Diagnostics", "Event", "Syslog"],
    "answer": 2,
    "explanation": "The 'Event' table in Log Analytics contains data from Windows Event Logs."
  },
  {
    "id": 1042,
    "question": "You need to identify which tables need to be queried for security-related events from Linux system logging in Log Analytics. Which table should you query?",
    "options": ["Azure Activity", "Azure Diagnostics", "Event", "Syslog"],
    "answer": 3,
    "explanation": "The 'Syslog' table in Log Analytics contains data from Linux system logging."
  },
  {
    "id": 1043,
    "question": "You need to automatically copy data from an on-premises SQL Server to Azure Blob Storage on a daily schedule. Which service is best suited for this?",
    "options": ["Azure Data Factory", "Azure ExpressRoute", "Azure Site Recovery", "Azure Backup"],
    "answer": 0,
    "explanation": "Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation."
  },
  {
    "id": 1044,
    "question": "You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?",
    "options": ["Azure Sentinel", "Azure Key Vault", "Azure Synapse Analytics", "Azure AD Connect"],
    "answer": 0,
    "explanation": "Microsoft Sentinel is a scalable, cloud-native, security information and event management (SIEM) and security orchestration, automation, and response (SOAR) solution."
  },
  {
    "id": 1045,
    "question": "What is the most severe failure from which an Azure Availability Zone can be used to protect access to Azure services?",
    "options": ["A physical server failure", "An Azure region failure", "A storage failure", "An Azure data center failure"],
    "answer": 3,
    "explanation": "Availability Zones are unique physical locations within an Azure region, each made up of one or more data centers. They protect applications and data from data center failures."
  },
  {
    "id": 1046,
    "question": "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions?",
    "options": ["Deploy the virtual machines to a scale set", "Deploy the virtual machines to two or more resource groups", "Deploy the virtual machines to two or more availability zones", "Deploy the virtual machines to two or more regions"],
    "answer": [2, 3],
    "explanation": "Deploying virtual machines across multiple Availability Zones or multiple Azure Regions ensures that the services remain available even if a single data center or region fails."
  },
  {
    "id": 1047,
    "question": "A company is planning to set up a solution on the Azure platform to manage and scale container-based applications. Which service is best suited?",
    "options": ["Azure Event Grid", "Azure DevOps", "Azure Kubernetes Service", "Azure DevTest Labs"],
    "answer": 2,
    "explanation": "Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies the deployment, management, and scaling of containerized applications."
  },
  {
    "id": 1048,
    "question": "You have to identify the correct concept behind the description: 'A cloud service that can be accessed quickly by users over the Internet (Quick response time is important to users)'.",
    "options": ["Fault Tolerance", "Disaster Recovery", "Dynamic Scalability", "Low Latency"],
    "answer": 3,
    "explanation": "Low latency refers to the minimal delay in data transfer over a network, ensuring quick response times for users accessing cloud services."
  },
  {
    "id": 1049,
    "question": "Where does Azure Monitor store performance data?",
    "options": ["A Log Analytics workspace", "An Azure Storage account", "Azure Event Hubs", "An event subscription"],
    "answer": 0,
    "explanation": "Azure Monitor stores performance and event data in a Log Analytics workspace, where you can use Log Analytics to analyze collected data across sources."
  },
  {
    "id": 1050,
    "question": "Which term represents the ability to increase the computing capacity of a virtual machine by adding memory or CPUs?",
    "options": ["Horizontal scaling", "Agility", "Elasticity", "Vertical scaling"],
    "answer": 3,
    "explanation": "Vertical scaling, also known as scale up, means increasing or decreasing virtual machine (VM) sizes (adding memory or CPUs) in response to a workload."
  },
  {
    "id": 1051,
    "question": "You need to compare a company's cloud usage to industry standard best practices. What should you use?",
    "options": ["Azure Monitor", "Azure Service Health", "Application Insights in Azure Monitor", "Azure Advisor"],
    "answer": 3,
    "explanation": "As your personalized cloud consultant, Azure Advisor continually assesses your usage telemetry and resource configuration to check for industry best practices."
  },
  {
    "id": 1052,
    "question": "You need to start Azure Cloud Shell. What should you use?",
    "options": ["The Azure portal", "Azure Command-Line Interface (CLI)", "Azure PowerShell", "An Azure Resource Manager (ARM) template"],
    "answer": 0,
    "explanation": "You can access Azure Cloud Shell directly from the Azure portal by clicking the Cloud Shell icon."
  },
  {
    "id": 1053,
    "question": "You plan to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?",
    "options": ["Infrastructure as a service (IaaS)", "Software as a service (SaaS)", "Platform as a service (PaaS)"],
    "answer": 0,
    "explanation": "A lift-and-shift migration involves moving an on-premises server to the cloud with minimal changes, which is best suited for Infrastructure as a Service (IaaS) like Azure Virtual Machines."
  },
  {
    "id": 1054,
    "question": "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
    "options": ["Azure subscriptions", "Azure Security Center", "Azure Marketplace", "Microsoft Store"],
    "answer": 2,
    "explanation": "Azure Marketplace is where you can find, try, and purchase third-party software and services, including virtual security appliances, that run on Azure."
  },
  {
    "id": 1055,
    "question": "You have an Azure application that uses an Azure App Service web app (99.9% SLA) and an Azure SQL Database (99.99% SLA). How should you calculate the composite SLA for the application?",
    "options": ["0.999 * 0.9999 = 0.9989001 = 99.89%", "0.999 / 0.9999 = 0.9991 = 99.91%", "Max(0.999, 0.9999) = 0.9999 = 99.99%", "Min(0.999, 0.9999) = 0.999 = 99.9%"],
    "answer": 0,
    "explanation": "The composite SLA is calculated by multiplying the individual SLAs together, as the application fails if either service fails."
  },
  {
    "id": 1056,
    "question": "Your company plans to migrate all its data and resources to Azure. The migration plan states that only Platform as a Service (PaaS) solutions must be used. What should you create?",
    "options": ["An Azure App Service and Azure SQL databases", "Azure storage accounts and web server in Azure virtual machines", "Azure virtual machines, Azure SQL databases, and Azure Storage accounts", "An Azure App Service and Azure virtual machines that have Microsoft SQL Server installed"],
    "answer": 0,
    "explanation": "Azure App Service and Azure SQL databases are both fully managed Platform as a Service (PaaS) offerings, meeting the requirement."
  },
  {
    "id": 1057,
    "question": "You need to manage containers. Which two services can you use?",
    "options": ["Azure Virtual Desktop", "Azure virtual machines", "Azure Functions", "Azure Kubernetes Service (AKS)", "Azure Container Instances"],
    "answer": [3, 4],
    "explanation": "Azure Kubernetes Service (AKS) and Azure Container Instances are the primary Azure services designed specifically for deploying and managing containerized applications."
  }
]