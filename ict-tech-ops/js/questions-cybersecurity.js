/* =========================================================
   ICT TECH OPS
   MODULE 05 — CYBERSECURITY AWARENESS
   UNIQUE QUESTION BANK
========================================================= */

const cybersecurityQuestions = [

{
    id: "CYB-001",
    difficulty: "FOUNDATION",
    category: "PHISHING",
    q: "A teacher receives an email claiming that their school account will be suspended unless they click a link immediately. What should be done first?",
    opts: [
        "Click the link and check the account",
        "Reply to the sender asking whether the email is genuine",
        "Verify the message through an official channel without using the supplied link",
        "Forward the email to other teachers"
    ],
    ans: 2,
    note: "Urgency and account suspension threats are common phishing techniques. Verify suspicious requests independently."
},

{
    id: "CYB-002",
    difficulty: "FOUNDATION",
    category: "PASSWORD",
    q: "Which password practice provides the best protection for multiple online services?",
    opts: [
        "Use the same strong password everywhere",
        "Use unique passwords for different services",
        "Change one character of the same password",
        "Store all passwords in a public document"
    ],
    ans: 1,
    note: "Unique passwords prevent one compromised account from exposing other services."
},

{
    id: "CYB-003",
    difficulty: "FOUNDATION",
    category: "MFA",
    q: "What is the main security benefit of multi-factor authentication (MFA)?",
    opts: [
        "It makes internet connections faster",
        "It removes the need for usernames",
        "It requires an additional verification factor beyond the password",
        "It automatically encrypts every file"
    ],
    ans: 2,
    note: "MFA adds another verification factor, reducing the risk from stolen passwords."
},

{
    id: "CYB-004",
    difficulty: "INTERMEDIATE",
    category: "PHISHING",
    q: "An email appears to come from a familiar organization, but the sender domain contains a subtle spelling difference. What does this most likely indicate?",
    opts: [
        "Normal email forwarding",
        "Possible phishing or domain impersonation",
        "A DNS performance issue",
        "A printer configuration error"
    ],
    ans: 1,
    note: "Attackers frequently register look-alike domains to impersonate trusted organizations."
},

{
    id: "CYB-005",
    difficulty: "FOUNDATION",
    category: "MALWARE",
    q: "What is ransomware primarily designed to do?",
    opts: [
        "Improve computer performance",
        "Encrypt or restrict access to data and demand payment",
        "Update antivirus software",
        "Compress large files"
    ],
    ans: 1,
    note: "Ransomware commonly encrypts files or systems and demands payment for restoration."
},

{
    id: "CYB-006",
    difficulty: "INTERMEDIATE",
    category: "MALWARE",
    q: "A school computer suddenly displays a ransom message and shared files begin becoming inaccessible. What is the safest immediate action?",
    opts: [
        "Continue using the computer",
        "Disconnect the affected device from the network",
        "Pay the ransom immediately",
        "Restart every computer in the school"
    ],
    ans: 1,
    note: "Network isolation can help limit ransomware propagation while the incident is investigated."
},

{
    id: "CYB-007",
    difficulty: "FOUNDATION",
    category: "USB SECURITY",
    q: "You find an unknown USB drive in the school ICT room. What is the safest action?",
    opts: [
        "Insert it into a computer to identify the owner",
        "Test it on the server",
        "Do not connect it to school systems and follow the appropriate security procedure",
        "Format it using a teacher's computer"
    ],
    ans: 2,
    note: "Unknown removable media may contain malicious software and should not be connected to trusted systems."
},

{
    id: "CYB-008",
    difficulty: "INTERMEDIATE",
    category: "ACCOUNT SECURITY",
    q: "Several unsuccessful login attempts appear on an administrator account from an unfamiliar source. What should an ICT technician do?",
    opts: [
        "Ignore them because the login attempts failed",
        "Investigate the attempts and secure the account",
        "Disable logging",
        "Publish the administrator password"
    ],
    ans: 1,
    note: "Repeated unauthorized login attempts may indicate credential attacks and should be investigated."
},

{
    id: "CYB-009",
    difficulty: "FOUNDATION",
    category: "SAFE BROWSING",
    q: "A browser displays a warning that a website connection is unsafe. What is the safest response?",
    opts: [
        "Ignore the warning",
        "Proceed and enter credentials",
        "Stop and verify the website before continuing",
        "Disable browser security warnings permanently"
    ],
    ans: 2,
    note: "Browser security warnings should be investigated before sensitive information is entered."
},

{
    id: "CYB-010",
    difficulty: "INTERMEDIATE",
    category: "SOCIAL ENGINEERING",
    q: "Someone calls claiming to be technical support and urgently asks for an administrator password. What should you do?",
    opts: [
        "Provide the password because they sound professional",
        "Provide only part of the password",
        "Refuse and verify the person's identity through an approved channel",
        "Send the password by email instead"
    ],
    ans: 2,
    note: "Legitimate support procedures should not require users to disclose passwords."
},

{
    id: "CYB-011",
    difficulty: "FOUNDATION",
    category: "DATA PROTECTION",
    q: "Which action is most appropriate when handling confidential student information?",
    opts: [
        "Share it in a public messaging group",
        "Store and share it only through authorized systems",
        "Upload it to any free file-sharing website",
        "Copy it to every available computer"
    ],
    ans: 1,
    note: "Confidential information should only be stored and shared through approved systems with appropriate access controls."
},

{
    id: "CYB-012",
    difficulty: "INTERMEDIATE",
    category: "ACCESS CONTROL",
    q: "Why should normal daily work generally not be performed using an administrator account?",
    opts: [
        "Administrator accounts have slower internet",
        "It increases the impact if the session or account is compromised",
        "Administrator accounts cannot access files",
        "Browsers do not work with administrator accounts"
    ],
    ans: 1,
    note: "Least privilege reduces the potential impact of compromised applications or credentials."
},

{
    id: "CYB-013",
    difficulty: "FOUNDATION",
    category: "UPDATES",
    q: "Why are operating system security updates important?",
    opts: [
        "They only change the desktop appearance",
        "They can fix known security vulnerabilities",
        "They increase monitor brightness",
        "They replace all user passwords"
    ],
    ans: 1,
    note: "Security updates frequently patch vulnerabilities that could otherwise be exploited."
},

{
    id: "CYB-014",
    difficulty: "INTERMEDIATE",
    category: "BACKUP",
    q: "Which backup practice provides stronger protection against ransomware?",
    opts: [
        "Keep the only backup permanently connected to the affected computer",
        "Maintain protected backups that are isolated or otherwise resistant to modification",
        "Back up only shortcuts",
        "Never test whether backups can be restored"
    ],
    ans: 1,
    note: "Backups should be protected from the same compromise affecting production data and should be tested for recovery."
},

{
    id: "CYB-015",
    difficulty: "FOUNDATION",
    category: "WI-FI SECURITY",
    q: "Which configuration is more appropriate for a protected school wireless network?",
    opts: [
        "Open Wi-Fi with no authentication",
        "Strong authentication and modern wireless encryption",
        "A publicly displayed administrator password",
        "WEP with a short password"
    ],
    ans: 1,
    note: "Modern encryption and strong authentication provide substantially better wireless security."
},

{
    id: "CYB-016",
    difficulty: "INTERMEDIATE",
    category: "PHISHING",
    q: "A message asks a teacher to scan a QR code to 'verify' their cloud account. What should be considered?",
    opts: [
        "QR codes cannot be used for phishing",
        "The QR code may direct the user to a malicious credential-harvesting site",
        "QR codes automatically provide encryption",
        "Scanning the code is safe if the email contains a logo"
    ],
    ans: 1,
    note: "QR codes can hide malicious destinations and are increasingly used in phishing attempts."
},

{
    id: "CYB-017",
    difficulty: "INTERMEDIATE",
    category: "DEVICE SECURITY",
    q: "A staff laptop containing school information is lost. What should happen first?",
    opts: [
        "Wait several weeks to see whether it is returned",
        "Report the loss promptly through the appropriate incident process",
        "Delete unrelated files from another computer",
        "Post the login password publicly"
    ],
    ans: 1,
    note: "Prompt reporting enables account protection, device management actions, and assessment of possible data exposure."
},

{
    id: "CYB-018",
    difficulty: "FOUNDATION",
    category: "PASSWORD",
    q: "Which is the strongest example of password management?",
    opts: [
        "Reuse one password across school and personal accounts",
        "Use unique credentials and a trusted password manager where permitted",
        "Write the administrator password on the monitor",
        "Share passwords between technicians"
    ],
    ans: 1,
    note: "Unique credentials and secure password management reduce credential reuse risks."
},

{
    id: "CYB-019",
    difficulty: "INTERMEDIATE",
    category: "EMAIL SECURITY",
    q: "An unexpected attachment named 'Invoice.zip' arrives from an unknown sender. What is the safest action?",
    opts: [
        "Open it immediately",
        "Extract and execute every file",
        "Treat it as suspicious and verify before opening",
        "Disable antivirus before opening it"
    ],
    ans: 2,
    note: "Unexpected compressed attachments can deliver malware and should be treated cautiously."
},

{
    id: "CYB-020",
    difficulty: "FOUNDATION",
    category: "PHYSICAL SECURITY",
    q: "Why should an unattended logged-in ICT workstation be locked?",
    opts: [
        "To reduce screen brightness",
        "To prevent unauthorized access",
        "To improve Wi-Fi performance",
        "To update the printer driver"
    ],
    ans: 1,
    note: "Locking unattended devices prevents other people from accessing active authenticated sessions."
},

{
    id: "CYB-021",
    difficulty: "INTERMEDIATE",
    category: "NETWORK SECURITY",
    q: "An unfamiliar device repeatedly appears on a protected school network. What is the appropriate response?",
    opts: [
        "Ignore it",
        "Investigate and identify whether the device is authorized",
        "Give it administrator access",
        "Disable all logging"
    ],
    ans: 1,
    note: "Unknown devices should be investigated because they may represent unauthorized network access."
},

{
    id: "CYB-022",
    difficulty: "ADVANCED",
    category: "ACCOUNT SECURITY",
    q: "What is credential stuffing?",
    opts: [
        "Encrypting passwords before storage",
        "Trying username and password combinations leaked from other services",
        "Creating multiple backup accounts",
        "Changing a network cable"
    ],
    ans: 1,
    note: "Credential stuffing exploits password reuse by testing credentials exposed in previous breaches."
},

{
    id: "CYB-023",
    difficulty: "INTERMEDIATE",
    category: "SOCIAL ENGINEERING",
    q: "An attacker follows an authorized employee through a secured door without authenticating. What is this technique called?",
    opts: [
        "Tailgating",
        "Hashing",
        "Patching",
        "Tokenization"
    ],
    ans: 0,
    note: "Tailgating is a physical social-engineering technique used to bypass access controls."
},

{
    id: "CYB-024",
    difficulty: "FOUNDATION",
    category: "DATA PROTECTION",
    q: "Before disposing of a storage device that contained sensitive school data, what should be done?",
    opts: [
        "Delete the desktop shortcut only",
        "Use an approved secure data destruction or sanitization process",
        "Rename the files",
        "Turn the device off"
    ],
    ans: 1,
    note: "Sensitive storage media should be securely sanitized or destroyed according to approved procedures."
},

{
    id: "CYB-025",
    difficulty: "INTERMEDIATE",
    category: "MFA",
    q: "A user receives an unexpected MFA approval request while not attempting to sign in. What should they do?",
    opts: [
        "Approve it to make the notification disappear",
        "Reject it and investigate the account activity",
        "Forward the approval request to another user",
        "Disable MFA permanently"
    ],
    ans: 1,
    note: "Unexpected MFA prompts can indicate that an attacker already knows the password."
},

{
    id: "CYB-026",
    difficulty: "ADVANCED",
    category: "NETWORK SECURITY",
    q: "What is the main security benefit of network segmentation?",
    opts: [
        "It guarantees that malware cannot exist",
        "It can restrict communication and limit lateral movement between network areas",
        "It eliminates the need for authentication",
        "It increases monitor resolution"
    ],
    ans: 1,
    note: "Segmentation can reduce the ability of an attacker or malware to move freely across a network."
},

{
    id: "CYB-027",
    difficulty: "INTERMEDIATE",
    category: "BACKUP",
    q: "Why should backup restoration be tested periodically?",
    opts: [
        "To confirm that data can actually be recovered",
        "To make files larger",
        "To disable encryption",
        "To reduce password complexity"
    ],
    ans: 0,
    note: "A backup is only useful if its data can be successfully restored when needed."
},

{
    id: "CYB-028",
    difficulty: "FOUNDATION",
    category: "SAFE BROWSING",
    q: "Which download source is generally safer for software used on school computers?",
    opts: [
        "Unknown file-sharing sites",
        "Random links from social media",
        "Official or approved software sources",
        "Unverified email attachments"
    ],
    ans: 2,
    note: "Using official or approved sources reduces the risk of downloading tampered or malicious software."
},

{
    id: "CYB-029",
    difficulty: "INTERMEDIATE",
    category: "PRIVILEGE",
    q: "What does the principle of least privilege mean?",
    opts: [
        "Every user receives administrator rights",
        "Users receive only the access necessary to perform their tasks",
        "Passwords are unnecessary",
        "Every device can access every network resource"
    ],
    ans: 1,
    note: "Least privilege limits unnecessary permissions and reduces the impact of compromised accounts."
},

{
    id: "CYB-030",
    difficulty: "INTERMEDIATE",
    category: "INCIDENT AWARENESS",
    q: "A teacher reports that files are being renamed unexpectedly and can no longer be opened. What should an ICT technician suspect?",
    opts: [
        "Normal file compression",
        "Possible ransomware or malicious activity",
        "Monitor failure",
        "Printer toner depletion"
    ],
    ans: 1,
    note: "Unexpected mass file modification or encryption is a common ransomware warning sign."
},

{
    id: "CYB-031",
    difficulty: "ADVANCED",
    category: "EMAIL SECURITY",
    q: "Why is the displayed sender name alone insufficient to verify an email sender?",
    opts: [
        "Display names can be spoofed or misleading",
        "Email never contains sender information",
        "Display names are encrypted",
        "Only attachments identify senders"
    ],
    ans: 0,
    note: "Attackers can manipulate display names, so sender addresses and message context should also be verified."
},

{
    id: "CYB-032",
    difficulty: "FOUNDATION",
    category: "PRIVACY",
    q: "A technician needs to troubleshoot a teacher's computer. What is the most appropriate approach to personal or confidential files?",
    opts: [
        "Browse unrelated files out of curiosity",
        "Access only information necessary for the support task",
        "Copy files to a personal device",
        "Share discovered information with friends"
    ],
    ans: 1,
    note: "Technical access should be limited to what is necessary for the authorized support task."
},

{
    id: "CYB-033",
    difficulty: "INTERMEDIATE",
    category: "MALWARE",
    q: "Antivirus software reports a suspicious executable downloaded from an unknown website. What should be done?",
    opts: [
        "Disable antivirus and run it",
        "Treat the file as potentially malicious and follow security procedures",
        "Rename the executable",
        "Upload it to every school computer"
    ],
    ans: 1,
    note: "Security warnings about untrusted executables should not be bypassed without proper investigation."
},

{
    id: "CYB-034",
    difficulty: "FOUNDATION",
    category: "ACCOUNT SECURITY",
    q: "A staff member leaves the school permanently. What should happen to their organizational account?",
    opts: [
        "Leave it active indefinitely",
        "Manage or disable access according to the organization's account lifecycle procedure",
        "Give the account to another employee",
        "Post the password in the ICT room"
    ],
    ans: 1,
    note: "Accounts belonging to departed users should be handled promptly according to access-management policy."
},

{
    id: "CYB-035",
    difficulty: "ADVANCED",
    category: "SECURITY LOGS",
    q: "Why are security logs valuable during an incident investigation?",
    opts: [
        "They can provide evidence of system and account activity",
        "They automatically repair hardware",
        "They increase CPU speed",
        "They replace backups"
    ],
    ans: 0,
    note: "Logs can help reconstruct events, identify affected systems, and understand suspicious activity."
},

{
    id: "CYB-036",
    difficulty: "INTERMEDIATE",
    category: "CLOUD SECURITY",
    q: "A confidential school document is accidentally configured as publicly accessible through a cloud link. What should be done?",
    opts: [
        "Leave it public",
        "Restrict access promptly and assess whether unauthorized exposure occurred",
        "Post the link on social media",
        "Create more public copies"
    ],
    ans: 1,
    note: "Misconfigured sharing permissions should be corrected quickly and potential exposure assessed."
},

{
    id: "CYB-037",
    difficulty: "FOUNDATION",
    category: "PASSWORD",
    q: "Why is sharing an administrator password through a messaging group risky?",
    opts: [
        "Messages can be forwarded, exposed, or accessed by unintended people",
        "It makes the password longer",
        "It automatically changes the username",
        "It prevents internet access"
    ],
    ans: 0,
    note: "Credentials should not be distributed through channels where access and forwarding cannot be adequately controlled."
},

{
    id: "CYB-038",
    difficulty: "ADVANCED",
    category: "NETWORK SECURITY",
    q: "What is the purpose of a firewall in network security?",
    opts: [
        "To physically cool network equipment",
        "To control network traffic according to defined security rules",
        "To create user passwords",
        "To repair damaged Ethernet cables"
    ],
    ans: 1,
    note: "Firewalls enforce traffic-control rules between systems or networks."
},

{
    id: "CYB-039",
    difficulty: "INTERMEDIATE",
    category: "PHISHING",
    q: "A message from a supposed senior officer requests an urgent financial action and insists that normal procedures be bypassed. What should raise concern?",
    opts: [
        "The request uses normal verification procedures",
        "Urgency combined with a request to bypass established controls",
        "The message contains a greeting",
        "The email was received during working hours"
    ],
    ans: 1,
    note: "Attackers often combine authority and urgency to pressure targets into bypassing verification procedures."
},

{
    id: "CYB-040",
    difficulty: "FOUNDATION",
    category: "DEVICE SECURITY",
    q: "Why should automatic screen locking be enabled on staff devices?",
    opts: [
        "To protect unattended authenticated sessions",
        "To improve printer speed",
        "To increase storage capacity",
        "To change IP addresses"
    ],
    ans: 0,
    note: "Automatic locking helps prevent unauthorized access when a user leaves a device unattended."
},

{
    id: "CYB-041",
    difficulty: "ADVANCED",
    category: "VULNERABILITY",
    q: "What is a software vulnerability?",
    opts: [
        "A weakness that may be exploited to compromise a system",
        "A type of network cable",
        "A backup format",
        "A monitor resolution"
    ],
    ans: 0,
    note: "A vulnerability is a weakness in software, hardware, configuration, or process that may be exploited."
},

{
    id: "CYB-042",
    difficulty: "INTERMEDIATE",
    category: "PATCH MANAGEMENT",
    q: "Why should critical security patches be evaluated and deployed in a timely manner?",
    opts: [
        "Known vulnerabilities may be actively exploited",
        "Patches always increase storage capacity",
        "They eliminate the need for backups",
        "They replace firewall rules"
    ],
    ans: 0,
    note: "Delaying important security fixes can leave systems exposed to known attack techniques."
},

{
    id: "CYB-043",
    difficulty: "FOUNDATION",
    category: "SOCIAL ENGINEERING",
    q: "Which situation is an example of social engineering?",
    opts: [
        "An attacker manipulates a staff member into revealing confidential information",
        "A hard disk develops bad sectors",
        "A network switch loses power",
        "A printer runs out of paper"
    ],
    ans: 0,
    note: "Social engineering targets people rather than relying solely on technical exploitation."
},

{
    id: "CYB-044",
    difficulty: "INTERMEDIATE",
    category: "REMOTE ACCESS",
    q: "A stranger asks a teacher to install remote-access software so they can 'fix' the computer. What should happen?",
    opts: [
        "Install it immediately",
        "Verify that the support request and technician are authorized before allowing remote access",
        "Disable security software first",
        "Provide the administrator password"
    ],
    ans: 1,
    note: "Unauthorized remote-access tools can give attackers direct control of a computer."
},

{
    id: "CYB-045",
    difficulty: "ADVANCED",
    category: "DNS SECURITY",
    q: "Users are unexpectedly redirected from a familiar website to a fake login page despite typing the correct address. Which type of security issue could be investigated?",
    opts: [
        "DNS manipulation or related redirection",
        "Printer spooler congestion",
        "Monitor calibration",
        "USB power management"
    ],
    ans: 0,
    note: "Unexpected redirection can involve DNS compromise, malicious proxies, browser compromise, or other traffic manipulation."
},

{
    id: "CYB-046",
    difficulty: "INTERMEDIATE",
    category: "SECURITY INCIDENT",
    q: "Why should suspected cybersecurity incidents be documented?",
    opts: [
        "To support investigation, response, and later review",
        "To increase internet bandwidth",
        "To replace antivirus software",
        "To avoid creating backups"
    ],
    ans: 0,
    note: "Accurate incident records help responders understand what happened and support subsequent analysis."
},

{
    id: "CYB-047",
    difficulty: "FOUNDATION",
    category: "WI-FI SECURITY",
    q: "Why should default administrator credentials on network equipment be changed?",
    opts: [
        "Default credentials may be publicly known or easily guessed",
        "It improves monitor resolution",
        "It increases Ethernet cable length",
        "It changes the device manufacturer"
    ],
    ans: 0,
    note: "Default credentials are frequently documented publicly and are commonly targeted by attackers."
},

{
    id: "CYB-048",
    difficulty: "ADVANCED",
    category: "ACCOUNT SECURITY",
    q: "What security control can reduce automated password-guessing attempts against an account?",
    opts: [
        "Appropriate rate limiting or lockout controls",
        "Disabling all logging",
        "Sharing the password",
        "Removing MFA"
    ],
    ans: 0,
    note: "Rate limiting and carefully configured lockout controls can make automated guessing attacks more difficult."
},

{
    id: "CYB-049",
    difficulty: "INTERMEDIATE",
    category: "DATA PROTECTION",
    q: "A spreadsheet containing sensitive information must be shared with a specific authorized colleague. What is the better approach?",
    opts: [
        "Create a public link",
        "Use an approved sharing method restricted to the intended recipient",
        "Upload it to a public forum",
        "Send it to an unrelated mailing list"
    ],
    ans: 1,
    note: "Sensitive information should be shared using approved methods with access restricted to authorized recipients."
},

{
    id: "CYB-050",
    difficulty: "ADVANCED",
    category: "INCIDENT RESPONSE",
    q: "A technician confirms that one workstation is actively communicating with a known malicious destination. What is an appropriate immediate containment measure?",
    opts: [
        "Allow communication to continue indefinitely",
        "Isolate the affected workstation while preserving information needed for investigation",
        "Delete all organizational backups",
        "Give the workstation administrator access to every server"
    ],
    ans: 1,
    note: "Containment aims to limit further harm while preserving information necessary for investigation and recovery."
}

];