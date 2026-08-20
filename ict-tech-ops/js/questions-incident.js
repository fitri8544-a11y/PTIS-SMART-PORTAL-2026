/* =========================================================
   ICT TECH OPS
   MODULE 06 — ICT INCIDENT RESPONSE
   UNIQUE QUESTION BANK
========================================================= */

const incidentQuestions = [

{
    id: "INC-001",
    difficulty: "FOUNDATION",
    category: "INITIAL RESPONSE",
    q: "A teacher reports that a school computer is behaving abnormally and unknown programs are opening automatically. What should the ICT technician do first?",
    opts: [
        "Ignore the report",
        "Assess the device and determine whether suspicious activity is occurring",
        "Delete every file immediately",
        "Replace the monitor"
    ],
    ans: 1,
    note: "Initial assessment helps determine the nature and severity of a suspected ICT incident before further action is taken."
},

{
    id: "INC-002",
    difficulty: "FOUNDATION",
    category: "CONTAINMENT",
    q: "A workstation is confirmed to be infected and is communicating with other devices. What is an appropriate immediate action?",
    opts: [
        "Disconnect or isolate the affected workstation from the network",
        "Connect more computers to it",
        "Share its files with all users",
        "Disable all security controls"
    ],
    ans: 0,
    note: "Isolation can help contain malicious activity and reduce the possibility of further spread."
},

{
    id: "INC-003",
    difficulty: "INTERMEDIATE",
    category: "RANSOMWARE",
    q: "Several files suddenly become encrypted and a ransom note appears. What should the technician prioritize?",
    opts: [
        "Immediately pay the ransom",
        "Contain the affected system and report the incident through the proper channel",
        "Continue normal work",
        "Delete all backups"
    ],
    ans: 1,
    note: "Ransomware incidents require rapid containment and escalation according to the organization's incident procedures."
},

{
    id: "INC-004",
    difficulty: "FOUNDATION",
    category: "REPORTING",
    q: "Why should an ICT security incident be reported promptly?",
    opts: [
        "So appropriate personnel can respond before the impact becomes greater",
        "To increase internet speed",
        "To reset printer counters",
        "To avoid documenting the incident"
    ],
    ans: 0,
    note: "Prompt reporting allows responsible personnel to coordinate containment, investigation, recovery, and communication."
},

{
    id: "INC-005",
    difficulty: "INTERMEDIATE",
    category: "EVIDENCE",
    q: "Why should an ICT technician avoid unnecessarily modifying an affected system during an incident investigation?",
    opts: [
        "Changes may destroy or alter useful evidence",
        "Computers cannot be modified",
        "The monitor may become brighter",
        "It will automatically change the IP address"
    ],
    ans: 0,
    note: "Unnecessary changes can alter logs, timestamps, files, and other information useful during an investigation."
},

{
    id: "INC-006",
    difficulty: "FOUNDATION",
    category: "PHISHING INCIDENT",
    q: "A teacher reports clicking a suspicious link and entering their account password. What should be done?",
    opts: [
        "Ignore it because the website has already been closed",
        "Treat the account as potentially compromised and begin the appropriate account-security response",
        "Post the password in the staff group",
        "Disable the school's internet permanently"
    ],
    ans: 1,
    note: "Credentials entered into a phishing site should be considered potentially compromised and handled promptly."
},

{
    id: "INC-007",
    difficulty: "INTERMEDIATE",
    category: "ACCOUNT COMPROMISE",
    q: "An account is sending messages that the owner says they did not send. What is the most likely concern?",
    opts: [
        "Possible account compromise",
        "Monitor failure",
        "Printer driver failure",
        "Ethernet cable length"
    ],
    ans: 0,
    note: "Unauthorized messages are a strong indicator that an account or authenticated session may have been compromised."
},

{
    id: "INC-008",
    difficulty: "INTERMEDIATE",
    category: "ACCOUNT RESPONSE",
    q: "After confirming an account compromise, which response is appropriate?",
    opts: [
        "Secure the account, revoke unauthorized access where possible, and investigate",
        "Share the password with other users",
        "Delete unrelated computers",
        "Disable security logging"
    ],
    ans: 0,
    note: "Compromised accounts should be secured and suspicious sessions or access reviewed according to organizational procedures."
},

{
    id: "INC-009",
    difficulty: "FOUNDATION",
    category: "DOCUMENTATION",
    q: "Which information should be recorded when an ICT incident is reported?",
    opts: [
        "What happened, affected system, time observed, symptoms and actions taken",
        "Only the technician's name",
        "Only the computer brand",
        "Nothing until the incident is resolved"
    ],
    ans: 0,
    note: "Accurate incident records provide a timeline and support investigation, escalation, and later review."
},

{
    id: "INC-010",
    difficulty: "INTERMEDIATE",
    category: "TRIAGE",
    q: "Which incident should normally receive higher priority?",
    opts: [
        "A cosmetic desktop wallpaper issue",
        "A suspected compromise affecting multiple school systems",
        "A mouse pad with a small stain",
        "A request to change font size"
    ],
    ans: 1,
    note: "Incident priority should consider impact, scope, urgency, critical services, and information at risk."
},

{
    id: "INC-011",
    difficulty: "INTERMEDIATE",
    category: "MALWARE",
    q: "A computer begins generating unusual network traffic immediately after an unknown attachment was opened. What should be suspected?",
    opts: [
        "Possible malware activity",
        "Normal monitor operation",
        "Printer maintenance",
        "Keyboard calibration"
    ],
    ans: 0,
    note: "Unexpected network activity following execution of an untrusted attachment can indicate malware infection."
},

{
    id: "INC-012",
    difficulty: "FOUNDATION",
    category: "CONTAINMENT",
    q: "What is the primary objective of incident containment?",
    opts: [
        "Limit further damage or spread",
        "Increase CPU clock speed",
        "Delete all documentation",
        "Upgrade every computer"
    ],
    ans: 0,
    note: "Containment limits the scope and impact of an incident while investigation and remediation continue."
},

{
    id: "INC-013",
    difficulty: "INTERMEDIATE",
    category: "NETWORK INCIDENT",
    q: "Multiple users suddenly cannot access an important network service. What should the technician determine first?",
    opts: [
        "Whether the issue is isolated or affects multiple systems and services",
        "The wallpaper colour",
        "The printer paper size",
        "The keyboard language"
    ],
    ans: 0,
    note: "Determining scope is an important part of incident triage and helps identify the appropriate response."
},

{
    id: "INC-014",
    difficulty: "ADVANCED",
    category: "LOG ANALYSIS",
    q: "Why should relevant system and security logs be preserved during an incident?",
    opts: [
        "They may contain evidence about what happened and when",
        "They increase monitor resolution",
        "They replace antivirus software",
        "They automatically restore files"
    ],
    ans: 0,
    note: "Logs can provide valuable evidence for reconstructing an incident timeline and identifying affected resources."
},

{
    id: "INC-015",
    difficulty: "FOUNDATION",
    category: "COMMUNICATION",
    q: "During an ICT incident, who should receive sensitive technical details?",
    opts: [
        "Only appropriate authorized personnel who need the information",
        "Everyone on social media",
        "Any unknown caller",
        "All members of the public"
    ],
    ans: 0,
    note: "Incident information should be communicated through authorized channels and only to appropriate recipients."
},

{
    id: "INC-016",
    difficulty: "INTERMEDIATE",
    category: "USB INCIDENT",
    q: "A user connected an unknown USB drive and the computer immediately began behaving strangely. What should the technician do?",
    opts: [
        "Assess and isolate the potentially affected device",
        "Connect the USB drive to every computer",
        "Give the USB drive to students to test",
        "Ignore the behaviour"
    ],
    ans: 0,
    note: "Unknown removable media can introduce malicious software and affected devices may require containment and investigation."
},

{
    id: "INC-017",
    difficulty: "FOUNDATION",
    category: "RECOVERY",
    q: "Before returning a previously compromised computer to normal use, what should be confirmed?",
    opts: [
        "The threat has been removed or the system has been safely restored and required protections are in place",
        "The wallpaper looks correct",
        "The mouse is wireless",
        "The monitor is at maximum brightness"
    ],
    ans: 0,
    note: "Recovery should return systems to a trusted operational state rather than simply making them usable again."
},

{
    id: "INC-018",
    difficulty: "INTERMEDIATE",
    category: "BACKUP RECOVERY",
    q: "Before restoring data after a ransomware incident, what should be considered?",
    opts: [
        "Whether the backup is trustworthy and the affected environment has been appropriately remediated",
        "Whether the backup filename is short",
        "Whether the monitor supports HDMI",
        "Whether the mouse battery is full"
    ],
    ans: 0,
    note: "Recovery should avoid restoring into an environment that remains compromised and should use trustworthy backups."
},

{
    id: "INC-019",
    difficulty: "FOUNDATION",
    category: "ESCALATION",
    q: "When should an ICT incident be escalated?",
    opts: [
        "When its severity, scope, risk, or required expertise exceeds the technician's authority or capability",
        "Only when the computer is old",
        "Whenever a printer runs out of paper",
        "Never"
    ],
    ans: 0,
    note: "Escalation ensures significant incidents receive appropriate authority, expertise, and organizational coordination."
},

{
    id: "INC-020",
    difficulty: "INTERMEDIATE",
    category: "DATA EXPOSURE",
    q: "A confidential school document was accidentally made publicly accessible online. What should happen first?",
    opts: [
        "Restrict the exposure and report the incident for assessment",
        "Share the public link more widely",
        "Create additional public copies",
        "Ignore it"
    ],
    ans: 0,
    note: "Accidental exposure should be contained promptly and assessed to determine potential unauthorized access."
},

{
    id: "INC-021",
    difficulty: "ADVANCED",
    category: "INCIDENT SCOPE",
    q: "Why is determining the scope of an incident important?",
    opts: [
        "It identifies which systems, users, services or data may be affected",
        "It changes the computer manufacturer",
        "It increases storage capacity",
        "It removes the need for documentation"
    ],
    ans: 0,
    note: "Accurate scoping supports containment, prioritization, communication, investigation, and recovery."
},

{
    id: "INC-022",
    difficulty: "INTERMEDIATE",
    category: "UNAUTHORIZED ACCESS",
    q: "A technician discovers an unknown account with administrative privileges. What is the appropriate response?",
    opts: [
        "Investigate whether the account is authorized and treat unexplained privileged access as a security concern",
        "Give the account more permissions",
        "Share its password",
        "Ignore it permanently"
    ],
    ans: 0,
    note: "Unexpected privileged accounts can indicate unauthorized access or poor account management and require investigation."
},

{
    id: "INC-023",
    difficulty: "FOUNDATION",
    category: "SERVICE OUTAGE",
    q: "An important ICT service suddenly becomes unavailable. What should be checked during initial triage?",
    opts: [
        "Affected users, systems, error symptoms and service status",
        "Only the monitor colour",
        "Only the computer brand",
        "Only the keyboard model"
    ],
    ans: 0,
    note: "Initial triage gathers enough information to establish scope, symptoms, impact, and possible causes."
},

{
    id: "INC-024",
    difficulty: "ADVANCED",
    category: "EVIDENCE",
    q: "Why are timestamps important in incident records?",
    opts: [
        "They help establish the sequence of events",
        "They increase network bandwidth",
        "They automatically encrypt evidence",
        "They repair damaged files"
    ],
    ans: 0,
    note: "Accurate timestamps help responders correlate events across devices, accounts, and logs."
},

{
    id: "INC-025",
    difficulty: "INTERMEDIATE",
    category: "EMAIL INCIDENT",
    q: "Several staff members receive the same malicious phishing email. What is a useful response?",
    opts: [
        "Identify the campaign, warn appropriate users and take available measures to reduce further exposure",
        "Ask everyone to click the link",
        "Disable all email permanently",
        "Forward the malicious message externally"
    ],
    ans: 0,
    note: "Coordinated phishing incidents may require broader containment and communication rather than handling each report independently."
},

{
    id: "INC-026",
    difficulty: "FOUNDATION",
    category: "PASSWORD INCIDENT",
    q: "A user accidentally reveals their password to another person. What should be done?",
    opts: [
        "Treat the credential as exposed and secure the account",
        "Continue using the password indefinitely",
        "Publish the password",
        "Disable the keyboard"
    ],
    ans: 0,
    note: "Once a password is exposed, it should no longer be considered secret."
},

{
    id: "INC-027",
    difficulty: "ADVANCED",
    category: "PERSISTENCE",
    q: "Why might simply deleting one malicious file be insufficient after a system compromise?",
    opts: [
        "The attacker or malware may have established additional persistence mechanisms",
        "Files cannot be deleted",
        "Deleting files increases bandwidth",
        "All malware exists only in RAM"
    ],
    ans: 0,
    note: "Compromised systems may contain multiple malicious components, accounts, scheduled tasks, services, or other persistence mechanisms."
},

{
    id: "INC-028",
    difficulty: "INTERMEDIATE",
    category: "RECOVERY",
    q: "What should happen after an affected service is restored?",
    opts: [
        "Monitor it for signs of recurring or related problems",
        "Delete all incident records",
        "Disable logging",
        "Immediately remove all security controls"
    ],
    ans: 0,
    note: "Post-recovery monitoring helps confirm that remediation was successful and detect recurrence."
},

{
    id: "INC-029",
    difficulty: "FOUNDATION",
    category: "LESSONS LEARNED",
    q: "Why should significant ICT incidents be reviewed after recovery?",
    opts: [
        "To identify improvements that can reduce future risk and improve response",
        "To increase monitor brightness",
        "To remove all backups",
        "To avoid updating procedures"
    ],
    ans: 0,
    note: "Post-incident review helps improve technical controls, procedures, training, and future response."
},

{
    id: "INC-030",
    difficulty: "INTERMEDIATE",
    category: "DEVICE LOSS",
    q: "A school laptop containing organizational information is reported stolen. What is important?",
    opts: [
        "Report it promptly and take available account, device-management and data-protection actions",
        "Wait indefinitely",
        "Publish its login credentials",
        "Ignore the incident because the laptop is offline"
    ],
    ans: 0,
    note: "Lost or stolen devices can create both account and data exposure risks and should be handled promptly."
},

{
    id: "INC-031",
    difficulty: "ADVANCED",
    category: "CHAIN OF CUSTODY",
    q: "Why can documentation of who handled collected incident evidence be important?",
    opts: [
        "It helps establish how evidence was controlled and handled",
        "It increases CPU speed",
        "It automatically decrypts files",
        "It replaces system logs"
    ],
    ans: 0,
    note: "Evidence-handling records help maintain integrity and accountability when formal investigation is required."
},

{
    id: "INC-032",
    difficulty: "INTERMEDIATE",
    category: "REMOTE ACCESS",
    q: "An unauthorized remote-access application is discovered running on a staff computer. What should be suspected?",
    opts: [
        "Possible unauthorized remote control or compromise",
        "Normal printer operation",
        "A monitor resolution issue",
        "A keyboard driver update"
    ],
    ans: 0,
    note: "Unexpected remote-access software can indicate unauthorized access and warrants investigation."
},

{
    id: "INC-033",
    difficulty: "FOUNDATION",
    category: "USER REPORT",
    q: "A user reports a suspicious security event but is unsure whether it is serious. What should the technician do?",
    opts: [
        "Assess the report rather than dismissing it",
        "Tell the user never to report anything",
        "Delete the user's account",
        "Replace the mouse immediately"
    ],
    ans: 0,
    note: "Early user reports can provide valuable warning signs and should be evaluated appropriately."
},

{
    id: "INC-034",
    difficulty: "ADVANCED",
    category: "ROOT CAUSE",
    q: "What is the purpose of root-cause analysis after an incident?",
    opts: [
        "Understand the underlying cause so corrective measures can be improved",
        "Assign random blame",
        "Change monitor resolution",
        "Increase file sizes"
    ],
    ans: 0,
    note: "Understanding root causes helps organizations address underlying weaknesses rather than only treating symptoms."
},

{
    id: "INC-035",
    difficulty: "INTERMEDIATE",
    category: "FALSE POSITIVE",
    q: "A security alert is investigated and determined not to represent malicious activity. What is this commonly called?",
    opts: [
        "False positive",
        "Ransomware",
        "Data encryption",
        "Privilege escalation"
    ],
    ans: 0,
    note: "A false positive occurs when a security control flags benign activity as suspicious or malicious."
},

{
    id: "INC-036",
    difficulty: "FOUNDATION",
    category: "PRIORITY",
    q: "Which factor is important when determining incident severity?",
    opts: [
        "Impact on systems, users, services or sensitive information",
        "Desktop wallpaper",
        "Mouse colour",
        "Keyboard brand"
    ],
    ans: 0,
    note: "Severity assessment should consider operational impact, affected assets, information sensitivity, scope, and urgency."
},

{
    id: "INC-037",
    difficulty: "INTERMEDIATE",
    category: "MALWARE CONTAINMENT",
    q: "Why should an infected computer not simply remain connected to the production network during investigation?",
    opts: [
        "It may continue communicating maliciously or spreading the threat",
        "It makes the monitor darker",
        "It changes the keyboard layout",
        "It reduces printer ink"
    ],
    ans: 0,
    note: "Containment helps prevent an affected system from causing additional harm while investigation continues."
},

{
    id: "INC-038",
    difficulty: "ADVANCED",
    category: "IOC",
    q: "In incident response, what does an Indicator of Compromise (IOC) help identify?",
    opts: [
        "Evidence or artifacts potentially associated with malicious activity",
        "Printer paper size",
        "Monitor colour profile",
        "Computer warranty status"
    ],
    ans: 0,
    note: "Indicators of compromise can include suspicious domains, IP addresses, file hashes, processes, registry changes, or other artifacts."
},

{
    id: "INC-039",
    difficulty: "INTERMEDIATE",
    category: "CREDENTIAL INCIDENT",
    q: "After securing a compromised account, why should active sessions be reviewed or revoked where appropriate?",
    opts: [
        "An attacker may still have an authenticated session",
        "It increases storage space",
        "It repairs the monitor",
        "It changes the username"
    ],
    ans: 0,
    note: "Changing credentials alone may not terminate sessions that were already authenticated."
},

{
    id: "INC-040",
    difficulty: "FOUNDATION",
    category: "PROCEDURE",
    q: "Why is an established ICT incident-response procedure useful?",
    opts: [
        "It provides a consistent framework for handling incidents",
        "It guarantees incidents will never occur",
        "It removes the need for technicians",
        "It replaces backups"
    ],
    ans: 0,
    note: "Defined procedures improve consistency, coordination, escalation, documentation, and recovery."
},

{
    id: "INC-041",
    difficulty: "ADVANCED",
    category: "ERADICATION",
    q: "What is the main goal of the eradication stage of incident response?",
    opts: [
        "Remove the cause and malicious components associated with the incident",
        "Publish confidential information",
        "Increase monitor resolution",
        "Disable all future updates"
    ],
    ans: 0,
    note: "Eradication addresses malicious components, vulnerabilities, compromised accounts, or other causes before full recovery."
},

{
    id: "INC-042",
    difficulty: "INTERMEDIATE",
    category: "CHANGE CONTROL",
    q: "Why should major remediation changes made during an incident be documented?",
    opts: [
        "So responders know what was changed, when, and why",
        "To increase internet speed",
        "To remove accountability",
        "To replace backups"
    ],
    ans: 0,
    note: "Documenting remediation actions supports troubleshooting, coordination, auditability, and post-incident review."
},

{
    id: "INC-043",
    difficulty: "FOUNDATION",
    category: "PHYSICAL INCIDENT",
    q: "Someone is found using an ICT room computer without authorization. What should be done?",
    opts: [
        "Follow the appropriate security and reporting procedure",
        "Give the person an administrator account",
        "Share more passwords",
        "Ignore all unauthorized access"
    ],
    ans: 0,
    note: "Physical unauthorized access can create information and system-security risks and should be handled appropriately."
},

{
    id: "INC-044",
    difficulty: "INTERMEDIATE",
    category: "NETWORK ANOMALY",
    q: "A normally quiet workstation suddenly begins transferring unusually large amounts of data externally. What should the technician do?",
    opts: [
        "Investigate whether the traffic is legitimate or potentially suspicious",
        "Automatically assume everything is normal",
        "Disable all logging",
        "Increase its administrator privileges"
    ],
    ans: 0,
    note: "Unexpected outbound traffic may indicate legitimate activity, misconfiguration, malware, or data exfiltration and warrants investigation."
},

{
    id: "INC-045",
    difficulty: "ADVANCED",
    category: "FORENSIC AWARENESS",
    q: "Why can immediately reinstalling an operating system be inappropriate before a serious incident is assessed?",
    opts: [
        "It may destroy information useful for understanding the compromise",
        "Operating systems cannot be installed twice",
        "It increases internet bandwidth",
        "It changes monitor size"
    ],
    ans: 0,
    note: "Reimaging can be an effective recovery method, but doing it prematurely may destroy evidence needed for investigation."
},

{
    id: "INC-046",
    difficulty: "INTERMEDIATE",
    category: "COMMUNICATION",
    q: "Why should incident communications be accurate and controlled?",
    opts: [
        "Incorrect or uncontrolled information can create confusion and expose sensitive details",
        "It increases CPU temperature",
        "It changes DNS automatically",
        "It replaces firewall rules"
    ],
    ans: 0,
    note: "Clear and controlled communication supports coordinated response while protecting sensitive information."
},

{
    id: "INC-047",
    difficulty: "FOUNDATION",
    category: "RECOVERY",
    q: "What is the goal of the recovery phase?",
    opts: [
        "Safely restore affected services and systems to normal operation",
        "Delete all organizational data",
        "Remove all security software",
        "Make every user an administrator"
    ],
    ans: 0,
    note: "Recovery restores business or operational services after containment and remediation."
},

{
    id: "INC-048",
    difficulty: "ADVANCED",
    category: "POST INCIDENT",
    q: "Which outcome is most useful from a post-incident review?",
    opts: [
        "Specific improvements to controls, procedures, monitoring or training",
        "Deleting all evidence",
        "Disabling security updates",
        "Removing backups"
    ],
    ans: 0,
    note: "Lessons learned should lead to practical improvements that reduce risk or improve future incident response."
},

{
    id: "INC-049",
    difficulty: "INTERMEDIATE",
    category: "REINFECTION",
    q: "A restored computer becomes infected again shortly after reconnecting to the network. What does this suggest?",
    opts: [
        "The original cause or another source of compromise may still exist",
        "The monitor is too large",
        "The keyboard language is wrong",
        "The printer needs toner"
    ],
    ans: 0,
    note: "Rapid reinfection may indicate incomplete remediation, another infected system, vulnerable services, or compromised credentials."
},

{
    id: "INC-050",
    difficulty: "ADVANCED",
    category: "INCIDENT LIFECYCLE",
    q: "Which sequence best represents a practical ICT incident-response lifecycle?",
    opts: [
        "Identify → Contain → Eradicate/Remediate → Recover → Review",
        "Delete → Ignore → Restart → Forget",
        "Purchase → Install → Print → Shutdown",
        "Login → Browse → Download → Share"
    ],
    ans: 0,
    note: "A structured response moves from identification and containment through remediation, recovery, and lessons learned."
}

];