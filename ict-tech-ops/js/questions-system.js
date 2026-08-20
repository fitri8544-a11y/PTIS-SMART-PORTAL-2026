/* =========================================================
   ICT TECH OPS
   MODULE 03 — OPERATING SYSTEM & SOFTWARE
   QUESTION BANK

   CLEAN STANDALONE VERSION
   68 UNIQUE QUESTIONS
========================================================= */

const systemQuestions = [

    /* =====================================================
       S-041 → S-060
    ===================================================== */

    {
        id: 'S-041',
        difficulty: 'FOUNDATION',
        category: 'Windows Settings',
        q: 'A user needs to choose which app opens PDF files by default. Where should the technician look first?',
        opts: [
            'Default apps in Windows Settings',
            'DNS Manager',
            'Disk Management',
            'Device Manager'
        ],
        ans: 0,
        note: 'Default apps controls file associations without reinstalling the application.'
    },

    {
        id: 'S-042',
        difficulty: 'FOUNDATION',
        category: 'File Explorer',
        q: 'A deleted file is needed again and was not permanently removed. Where should it be checked first?',
        opts: [
            'Recycle Bin',
            'Task Manager',
            'Services',
            'System Information'
        ],
        ans: 0,
        note: 'The Recycle Bin commonly retains deleted local files until it is emptied.'
    },

    {
        id: 'S-043',
        difficulty: 'FOUNDATION',
        category: 'Windows Search',
        q: 'A technician needs to locate a document by filename quickly. Which built-in feature is most appropriate?',
        opts: [
            'Windows Search',
            'Print Spooler',
            'Safe Mode',
            'Disk Cleanup'
        ],
        ans: 0,
        note: 'Windows Search is designed to locate files and applications by name and indexed content.'
    },

    {
        id: 'S-044',
        difficulty: 'FOUNDATION',
        category: 'Control Panel',
        q: 'Which Windows tool is commonly used to remove a traditional desktop application?',
        opts: [
            'Programs and Features',
            'Network Connections only',
            'Event Viewer',
            'Clipboard history'
        ],
        ans: 0,
        note: 'Programs and Features in Control Panel can uninstall many traditional desktop applications.'
    },

    {
        id: 'S-045',
        difficulty: 'FOUNDATION',
        category: 'User Account',
        q: 'A standard user cannot change a system-wide setting. What is the likely reason?',
        opts: [
            'Administrator privileges are required',
            'The monitor is disconnected',
            'The DNS cache is full',
            'The Recycle Bin is empty'
        ],
        ans: 0,
        note: 'System-wide changes often require elevation to protect the computer from unauthorized modifications.'
    },

    {
        id: 'S-046',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Service',
        q: 'A print job remains stuck in the queue and new jobs do not start. Which service should be checked?',
        opts: [
            'Print Spooler',
            'Windows Search',
            'Bluetooth Support only',
            'Remote Registry'
        ],
        ans: 0,
        note: 'The Print Spooler manages queued print jobs and should be running for normal printing.'
    },

    {
        id: 'S-047',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Update',
        q: 'Windows Update shows a restart required after installing patches. What is the least disruptive next step?',
        opts: [
            'Schedule or perform a restart when work is saved',
            'Format the drive',
            'Remove all user accounts',
            'Disable Windows permanently'
        ],
        ans: 0,
        note: 'A restart allows pending updates to finish; save work and choose an appropriate maintenance time.'
    },

    {
        id: 'S-048',
        difficulty: 'INTERMEDIATE',
        category: 'Driver Alert',
        q: 'A USB device works on another computer but appears as an unknown device here. What should be investigated first?',
        opts: [
            'The device driver and USB connection',
            'The browser homepage',
            'The printer toner',
            'The screen saver'
        ],
        ans: 0,
        note: 'An unknown device commonly indicates a missing driver, connection issue or hardware identification problem.'
    },

    {
        id: 'S-049',
        difficulty: 'INTERMEDIATE',
        category: 'Display Driver',
        q: 'A screen begins flickering after a graphics driver update. What is a sensible recovery step?',
        opts: [
            'Roll back the display driver if the issue began after the update',
            'Delete every user profile',
            'Change the file system',
            'Disable Windows Update forever'
        ],
        ans: 0,
        note: 'Driver rollback can restore the previous known-good version when a recent update causes symptoms.'
    },

    {
        id: 'S-050',
        difficulty: 'INTERMEDIATE',
        category: 'Audio Driver',
        q: 'A headset is detected but no sound is produced. What should be checked before replacing hardware?',
        opts: [
            'Output device selection and audio driver status',
            'Disk partition style',
            'DNS records',
            'Recycle Bin contents'
        ],
        ans: 0,
        note: 'Confirm the selected output device, volume and driver status before assuming a hardware failure.'
    },

    {
        id: 'S-051',
        difficulty: 'INTERMEDIATE',
        category: 'Storage Alert',
        q: 'Disk Management shows a healthy partition with no drive letter, so it is missing from File Explorer. What should be checked?',
        opts: [
            'Assign an appropriate drive letter',
            'Replace the monitor',
            'Clear the DNS cache',
            'Disable the keyboard'
        ],
        ans: 0,
        note: 'A mounted drive normally needs a drive letter to appear in File Explorer.'
    },

    {
        id: 'S-052',
        difficulty: 'INTERMEDIATE',
        category: 'File Systems',
        q: 'Which file system is generally the most suitable for a large USB drive shared between Windows and macOS?',
        opts: [
            'exFAT',
            'NTFS with Windows-only permissions',
            'FAT12',
            'An unformatted partition'
        ],
        ans: 0,
        note: 'exFAT supports large files and broad modern cross-platform compatibility.'
    },

    {
        id: 'S-053',
        difficulty: 'INTERMEDIATE',
        category: 'File Systems',
        q: 'A FAT32 USB drive refuses to copy a single 6 GB video. What is the likely limitation?',
        opts: [
            'FAT32 has a roughly 4 GB per-file limit',
            'The monitor lacks memory',
            'The DNS server is offline',
            'The CPU needs thermal paste'
        ],
        ans: 0,
        note: 'FAT32 cannot store a single file larger than about 4 GB; exFAT or NTFS may be suitable alternatives.'
    },

    {
        id: 'S-054',
        difficulty: 'INTERMEDIATE',
        category: 'Software Incident',
        q: 'An application crashes immediately after installation. What should be checked first?',
        opts: [
            'Compatibility, error details and whether the installation completed correctly',
            'The Wi-Fi password only',
            'The monitor cable',
            'The Recycle Bin size'
        ],
        ans: 0,
        note: 'Confirm compatibility and installation evidence before taking disruptive recovery actions.'
    },

    {
        id: 'S-055',
        difficulty: 'INTERMEDIATE',
        category: 'Browser Support',
        q: 'A browser displays old page content after a site has been updated. What is a reasonable first step?',
        opts: [
            'Clear the relevant cache and test again',
            'Format Windows',
            'Replace the SSD',
            'Disable all network adapters'
        ],
        ans: 0,
        note: 'Cached content can cause stale display issues; clear it selectively and retest.'
    },

    {
        id: 'S-056',
        difficulty: 'INTERMEDIATE',
        category: 'Startup Incident',
        q: 'A laptop takes several minutes to become usable after login. Which built-in area should be reviewed?',
        opts: [
            'Startup Apps in Task Manager',
            'Printer properties',
            'Recycle Bin',
            'BIOS clock only'
        ],
        ans: 0,
        note: 'Unnecessary startup applications consume resources and can significantly delay login readiness.'
    },

    {
        id: 'S-057',
        difficulty: 'ADVANCED',
        category: 'Permissions',
        q: 'A user can see a shared folder but receives Access Denied when opening a file. What should be compared?',
        opts: [
            'Effective share and NTFS permissions',
            'Monitor brightness and resolution',
            'DNS and browser history',
            'CPU fan speed'
        ],
        ans: 0,
        note: 'Access is determined by the combined effect of share and NTFS permissions.'
    },

    {
        id: 'S-058',
        difficulty: 'ADVANCED',
        category: 'Recovery',
        q: 'A driver change makes Windows unstable, but personal files must remain. Which recovery option is designed to reverse system changes?',
        opts: [
            'System Restore',
            'Empty Recycle Bin',
            'Disk Cleanup only',
            'Changing the hostname'
        ],
        ans: 0,
        note: 'System Restore can revert system files, drivers and settings without being a file backup.'
    },

    {
        id: 'S-059',
        difficulty: 'ADVANCED',
        category: 'Backup',
        q: 'A technician wants protection against accidental deletion of documents. What is required?',
        opts: [
            'A separate file backup',
            'System Restore alone',
            'A new drive letter only',
            'A display driver update'
        ],
        ans: 0,
        note: 'File backup preserves recoverable copies of user data; System Restore is primarily for system configuration.'
    },

    {
        id: 'S-060',
        difficulty: 'ADVANCED',
        category: 'Command Challenge',
        q: 'C:\\> netstat — What can this command help inspect?',
        opts: [
            'Network connections and listening ports',
            'Installed fonts only',
            'Disk partitions only',
            'Windows wallpaper settings'
        ],
        ans: 0,
        note: 'netstat reports active connections, listening ports and related network information.'
    },


    /* =====================================================
       WINDOWS FUNDAMENTALS
    ===================================================== */

    {
        id: 'OS-061',
        difficulty: 'FOUNDATION',
        category: 'Windows Fundamentals',
        q: 'Which Windows utility shows the version and edition of the installed operating system?',
        opts: [
            'winver',
            'hostname',
            'netstat',
            'tasklist'
        ],
        ans: 0,
        note: 'winver displays the Windows version and build information.'
    },

    {
        id: 'OS-062',
        difficulty: 'FOUNDATION',
        category: 'Windows Fundamentals',
        q: 'A user needs to change the default printer. Which area is the most direct starting point?',
        opts: [
            'Printers & scanners',
            'Disk Management',
            'Event Viewer',
            'System Configuration'
        ],
        ans: 0,
        note: 'Printers & scanners manages the default printer and printer preferences.'
    },

    {
        id: 'OS-063',
        difficulty: 'FOUNDATION',
        category: 'Windows Fundamentals',
        q: 'Which built-in tool records application and system warnings for later diagnosis?',
        opts: [
            'Event Viewer',
            'Paint',
            'Character Map',
            'Clipboard'
        ],
        ans: 0,
        note: 'Event Viewer stores application, security and system events.'
    },

    {
        id: 'OS-064',
        difficulty: 'FOUNDATION',
        category: 'Windows Fundamentals',
        q: 'A user wants to capture a selected region of the desktop. Which utility is appropriate?',
        opts: [
            'Snipping Tool',
            'Disk Cleanup',
            'Services',
            'Registry Editor'
        ],
        ans: 0,
        note: 'Snipping Tool captures the full screen or a selected region.'
    },

    {
        id: 'OS-065',
        difficulty: 'FOUNDATION',
        category: 'Windows Fundamentals',
        q: 'Which setting controls whether a laptop sleeps after inactivity?',
        opts: [
            'Power & battery',
            'Accounts',
            'Bluetooth',
            'Optional Features'
        ],
        ans: 0,
        note: 'Power & battery contains sleep and power-plan settings.'
    },


    /* =====================================================
       DEVICE MANAGER & DRIVERS
    ===================================================== */

    {
        id: 'DRV-061',
        difficulty: 'INTERMEDIATE',
        category: 'Device Manager',
        q: 'A device works intermittently and its driver date is very old. What is the safest next step?',
        opts: [
            'Check the vendor driver and create a restore point first',
            'Delete the Windows folder',
            'Change the DNS server',
            'Disable all USB ports'
        ],
        ans: 0,
        note: 'Verify the hardware vendor and preserve a rollback path before updating a driver.'
    },

    {
        id: 'DRV-062',
        difficulty: 'INTERMEDIATE',
        category: 'Device Manager',
        q: 'A newly attached webcam is missing from Teams but appears in Device Manager. What should be checked?',
        opts: [
            'App camera permissions and selected camera',
            'Disk partition style',
            'System time zone',
            'Printer queue'
        ],
        ans: 0,
        note: 'Application permissions and the selected camera can prevent an available device from being used.'
    },

    {
        id: 'DRV-063',
        difficulty: 'INTERMEDIATE',
        category: 'Device Manager',
        q: 'A Bluetooth adapter has Code 10 in Device Manager. What does this indicate?',
        opts: [
            'The device cannot start correctly',
            'The disk is full',
            'The account is locked',
            'The monitor is asleep'
        ],
        ans: 0,
        note: 'Code 10 indicates that the device cannot start, often because of a driver or hardware issue.'
    },

    {
        id: 'DRV-064',
        difficulty: 'ADVANCED',
        category: 'Drivers',
        q: 'A vendor driver causes repeated crashes after installation. Which recovery is most appropriate?',
        opts: [
            'Roll back or uninstall the driver from Device Manager',
            'Disable the firewall permanently',
            'Delete user profiles',
            'Change the screen resolution'
        ],
        ans: 0,
        note: 'Rolling back or removing the problematic driver is a controlled recovery step.'
    },

    {
        id: 'DRV-065',
        difficulty: 'ADVANCED',
        category: 'Drivers',
        q: 'Before deploying a driver to many school PCs, what should be done first?',
        opts: [
            'Test compatibility on a representative device',
            'Install it on every PC immediately',
            'Disable Windows Update',
            'Remove antivirus'
        ],
        ans: 0,
        note: 'Pilot testing identifies compatibility issues before a broad deployment.'
    },


    /* =====================================================
       TASK MANAGER / PERFORMANCE
    ===================================================== */

    {
        id: 'PERF-061',
        difficulty: 'FOUNDATION',
        category: 'Task Manager',
        q: 'Which Task Manager tab shows applications configured to launch at sign-in?',
        opts: [
            'Startup apps',
            'Users',
            'Details',
            'Services'
        ],
        ans: 0,
        note: 'Startup apps lists programs that run when a user signs in.'
    },

    {
        id: 'PERF-062',
        difficulty: 'INTERMEDIATE',
        category: 'Performance',
        q: 'A process is consuming one CPU core continuously. What is the best first action?',
        opts: [
            'Identify the process and confirm whether it is expected',
            'Replace the monitor',
            'Clear the printer queue',
            'Change the hostname'
        ],
        ans: 0,
        note: 'Identify the workload before stopping or remediating it.'
    },

    {
        id: 'PERF-063',
        difficulty: 'INTERMEDIATE',
        category: 'Performance',
        q: 'The system has ample RAM but is paging heavily. Which resource should be investigated next?',
        opts: [
            'Memory pressure and committed memory',
            'Printer toner',
            'Display scaling',
            'DNS suffix'
        ],
        ans: 0,
        note: 'Paging can occur when committed memory pressure is high despite installed RAM.'
    },

    {
        id: 'PERF-064',
        difficulty: 'ADVANCED',
        category: 'Performance Monitor',
        q: 'A server slows only during scheduled backups. What evidence is most useful?',
        opts: [
            'Correlate resource counters with the backup schedule',
            'Change all user passwords',
            'Replace every keyboard',
            'Disable event logging'
        ],
        ans: 0,
        note: 'Time-correlating CPU, disk and network counters with the backup window isolates contention.'
    },

    {
        id: 'PERF-065',
        difficulty: 'ADVANCED',
        category: 'Reliability Monitor',
        q: 'Which Windows feature presents a timeline of application and system failures?',
        opts: [
            'Reliability Monitor',
            'Disk Cleanup',
            'Windows Fax',
            'Character Map'
        ],
        ans: 0,
        note: 'Reliability Monitor provides a chronological view of failures and updates.'
    },


    /* =====================================================
       STORAGE
    ===================================================== */

    {
        id: 'STOR-061',
        difficulty: 'FOUNDATION',
        category: 'Storage',
        q: 'A drive reports 0 bytes free. Which immediate action is safest?',
        opts: [
            'Remove or relocate approved temporary files after checking the data',
            'Format the drive immediately',
            'Disable the page file blindly',
            'Delete System32'
        ],
        ans: 0,
        note: 'Free space should be recovered carefully while preserving required data.'
    },

    {
        id: 'STOR-062',
        difficulty: 'INTERMEDIATE',
        category: 'Storage',
        q: 'A volume is marked RAW in Disk Management and contains required files. What should be avoided first?',
        opts: [
            'Formatting the volume',
            'Documenting the error',
            'Checking backups',
            'Inspecting cabling'
        ],
        ans: 0,
        note: 'Formatting can destroy recoverable data; assess recovery options first.'
    },

    {
        id: 'STOR-063',
        difficulty: 'INTERMEDIATE',
        category: 'NTFS',
        q: 'Which NTFS feature can restore earlier versions when configured by policy?',
        opts: [
            'Shadow Copies',
            'DHCP reservations',
            'Print Spooler',
            'Device Guard only'
        ],
        ans: 0,
        note: 'Volume Shadow Copy can provide previous versions when enabled and available.'
    },

    {
        id: 'STOR-064',
        difficulty: 'ADVANCED',
        category: 'Storage',
        q: 'A disk warning reports increasing reallocated sectors. What should happen first?',
        opts: [
            'Back up the data and plan replacement',
            'Run repeated benchmarks',
            'Defragment aggressively',
            'Ignore the warning'
        ],
        ans: 0,
        note: 'Growing reallocated sectors indicate possible disk degradation and require a backup-first response.'
    },

    {
        id: 'STOR-065',
        difficulty: 'ADVANCED',
        category: 'Storage',
        q: 'BitLocker recovery is requested after a firmware change. What is the correct response?',
        opts: [
            'Use the authorised recovery key and document the change',
            'Guess passwords repeatedly',
            'Format the encrypted volume',
            'Disable all security controls'
        ],
        ans: 0,
        note: 'A legitimate recovery key is required; repeated guessing or formatting risks data loss.'
    },


    /* =====================================================
       SOFTWARE
    ===================================================== */

    {
        id: 'SW-061',
        difficulty: 'FOUNDATION',
        category: 'Software',
        q: 'An application needs a missing runtime component. What should be verified?',
        opts: [
            'The application requirements and approved installer source',
            'The monitor refresh rate',
            'The Wi-Fi channel',
            'The CMOS battery'
        ],
        ans: 0,
        note: 'Check documented prerequisites and use an approved source for the runtime.'
    },

    {
        id: 'SW-062',
        difficulty: 'INTERMEDIATE',
        category: 'Software',
        q: 'A program works for administrators but not standard users. What should be investigated?',
        opts: [
            'Per-user settings and required permissions',
            'The printer cable',
            'The BIOS boot order',
            'The screen brightness'
        ],
        ans: 0,
        note: 'User profile settings and permissions can explain the difference without reinstalling.'
    },

    {
        id: 'SW-063',
        difficulty: 'INTERMEDIATE',
        category: 'Software',
        q: 'An application becomes unstable after an add-in is enabled. What is a sensible test?',
        opts: [
            'Disable the add-in and reproduce the issue',
            'Replace the network switch',
            'Clear the CMOS',
            'Format the SSD'
        ],
        ans: 0,
        note: 'Disabling the recently changed add-in tests a likely cause with minimal disruption.'
    },

    {
        id: 'SW-064',
        difficulty: 'ADVANCED',
        category: 'Software',
        q: 'A line-of-business app fails only with a particular profile. What should be compared?',
        opts: [
            'Profile configuration, permissions and application logs',
            'GPU thermal paste',
            'Ethernet pin order',
            'BIOS fan curve'
        ],
        ans: 0,
        note: 'Comparing the affected and working profiles narrows configuration and permission differences.'
    },

    {
        id: 'SW-065',
        difficulty: 'ADVANCED',
        category: 'Software Deployment',
        q: 'An installer returns error 1603. What should be collected before escalation?',
        opts: [
            'Installer logs, prerequisites and the exact failure context',
            'A new monitor',
            'The user wallpaper',
            'A different mouse'
        ],
        ans: 0,
        note: 'Logs and prerequisite checks provide actionable evidence for installation failures.'
    },


    /* =====================================================
       STARTUP / BOOT
    ===================================================== */

    {
        id: 'BOOT-061',
        difficulty: 'FOUNDATION',
        category: 'Startup',
        q: 'A PC shows "No boot device" after a USB drive was left connected. What should be checked?',
        opts: [
            'Remove the USB or correct boot order',
            'Replace the RAM immediately',
            'Clear browser history',
            'Change the DNS server'
        ],
        ans: 0,
        note: 'The firmware may be attempting to boot from the removable device.'
    },

    {
        id: 'BOOT-062',
        difficulty: 'INTERMEDIATE',
        category: 'Startup',
        q: 'Windows enters Automatic Repair repeatedly after an interrupted update. What should be preserved first?',
        opts: [
            'User data and recovery information',
            'The printer queue only',
            'The desktop wallpaper',
            'The browser bookmarks only'
        ],
        ans: 0,
        note: 'Protect important data before attempting increasingly invasive recovery actions.'
    },

    {
        id: 'BOOT-063',
        difficulty: 'INTERMEDIATE',
        category: 'Startup',
        q: 'A PC reaches the sign-in screen but then returns to it repeatedly. Which area is relevant?',
        opts: [
            'User profile and startup services',
            'Ethernet cable category',
            'Printer toner',
            'Monitor input source'
        ],
        ans: 0,
        note: 'A sign-in loop can involve profile corruption or a startup service.'
    },

    {
        id: 'BOOT-064',
        difficulty: 'ADVANCED',
        category: 'Boot Configuration',
        q: 'Which Windows recovery option can repair boot configuration data?',
        opts: [
            'Startup Repair',
            'Disk Cleanup',
            'Snipping Tool',
            'Print Management'
        ],
        ans: 0,
        note: 'Startup Repair is designed to address common boot configuration problems.'
    },

    {
        id: 'BOOT-065',
        difficulty: 'ADVANCED',
        category: 'Boot Configuration',
        q: 'A system boots after removing a recently added driver in Safe Mode. What should be recorded?',
        opts: [
            'The driver version, hardware and rollback action',
            'The user’s wallpaper',
            'The printer ink level',
            'The Wi-Fi password'
        ],
        ans: 0,
        note: 'Accurate change and rollback records support prevention and future diagnosis.'
    },


    /* =====================================================
       WINDOWS UPDATE
    ===================================================== */

    {
        id: 'UPD-061',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Update',
        q: 'An update is blocked because the device lacks storage. What is the appropriate fix?',
        opts: [
            'Free approved space and retry the update',
            'Delete recovery partitions blindly',
            'Disable update services permanently',
            'Replace the keyboard'
        ],
        ans: 0,
        note: 'Updates need working space; reclaim it safely and retry.'
    },

    {
        id: 'UPD-062',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Update',
        q: 'A restart is pending but a critical presentation is open. What should the technician do?',
        opts: [
            'Save work and schedule the restart for a suitable window',
            'Force power off immediately',
            'Uninstall all updates',
            'Delete the user profile'
        ],
        ans: 0,
        note: 'Coordinate the restart to protect work while completing the update.'
    },

    {
        id: 'UPD-063',
        difficulty: 'ADVANCED',
        category: 'Windows Update',
        q: 'Several PCs fail with the same update error code. What is the best escalation evidence?',
        opts: [
            'The error code, update KB, logs and affected device pattern',
            'Only the desktop wallpaper',
            'A new mouse model',
            'The monitor serial number alone'
        ],
        ans: 0,
        note: 'A repeatable pattern plus logs and identifiers helps isolate a deployment issue.'
    },


    /* =====================================================
       WINDOWS COMMANDS
    ===================================================== */

    {
        id: 'CMD-061',
        difficulty: 'FOUNDATION',
        category: 'Windows Commands',
        q: 'A technician needs the current account name in a terminal. Which command should be used?',
        opts: [
            'whoami',
            'hostname',
            'tracert',
            'chkdsk'
        ],
        ans: 0,
        note: 'whoami reports the current user context.'
    },

    {
        id: 'CMD-062',
        difficulty: 'FOUNDATION',
        category: 'Windows Commands',
        q: 'Which command displays the computer name for an inventory record?',
        opts: [
            'hostname',
            'ping',
            'tasklist',
            'nslookup'
        ],
        ans: 0,
        note: 'hostname prints the local computer name.'
    },

    {
        id: 'CMD-063',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Commands',
        q: 'A technician needs detailed IP, gateway, DHCP and DNS information. Which command is appropriate?',
        opts: [
            'ipconfig /all',
            'hostname',
            'tasklist',
            'whoami'
        ],
        ans: 0,
        note: 'ipconfig /all provides detailed adapter configuration.'
    },

    {
        id: 'CMD-064',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Commands',
        q: 'A host responds by IP but not by name. Which command can query the DNS record?',
        opts: [
            'nslookup',
            'chkdsk',
            'systeminfo',
            'tasklist'
        ],
        ans: 0,
        note: 'nslookup directly tests DNS resolution.'
    },

    {
        id: 'CMD-065',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Commands',
        q: 'Which command shows the route hops taken toward a remote host?',
        opts: [
            'tracert',
            'hostname',
            'whoami',
            'sfc /scannow'
        ],
        ans: 0,
        note: 'tracert reveals intermediary hops and where delay occurs.'
    },

    {
        id: 'CMD-066',
        difficulty: 'INTERMEDIATE',
        category: 'Windows Commands',
        q: 'Which command lists active processes and their process IDs?',
        opts: [
            'tasklist',
            'ipconfig',
            'nslookup',
            'chkdsk'
        ],
        ans: 0,
        note: 'tasklist lists running processes and PIDs.'
    },

    {
        id: 'CMD-067',
        difficulty: 'ADVANCED',
        category: 'Windows Repair',
        q: 'Windows protected system files may be corrupted. Which command checks and repairs them?',
        opts: [
            'sfc /scannow',
            'hostname',
            'ping',
            'tasklist'
        ],
        ans: 0,
        note: 'sfc /scannow verifies and repairs protected Windows system files.'
    },

    {
        id: 'CMD-068',
        difficulty: 'ADVANCED',
        category: 'Storage Repair',
        q: 'A technician needs to check a volume for file-system errors. Which command is relevant?',
        opts: [
            'chkdsk',
            'whoami',
            'tracert',
            'netstat'
        ],
        ans: 0,
        note: 'chkdsk checks a volume and can repair file-system errors with the appropriate options.'
    },


    /* =====================================================
       ACCOUNTS & PERMISSIONS
    ===================================================== */

    {
        id: 'ACC-061',
        difficulty: 'FOUNDATION',
        category: 'Accounts',
        q: 'A staff member has left the organisation. What should happen first?',
        opts: [
            'Disable the account according to policy',
            'Share the password with a colleague',
            'Delete audit logs',
            'Create a public administrator account'
        ],
        ans: 0,
        note: 'Disabling access promptly follows least-privilege and offboarding practice.'
    },

    {
        id: 'ACC-062',
        difficulty: 'INTERMEDIATE',
        category: 'Permissions',
        q: 'A user can read a folder but cannot create files. Which permission is likely missing?',
        opts: [
            'Write permission',
            'Read permission',
            'List computer objects',
            'Remote desktop only'
        ],
        ans: 0,
        note: 'Creating files requires write permission in addition to read access.'
    },

    {
        id: 'ACC-063',
        difficulty: 'ADVANCED',
        category: 'Permissions',
        q: 'A user is in two groups with conflicting permissions. What should be reviewed?',
        opts: [
            'Effective permissions and deny entries',
            'Monitor brightness',
            'DNS cache',
            'Printer alignment'
        ],
        ans: 0,
        note: 'Effective access must account for group membership and explicit deny entries.'
    },

    {
        id: 'ACC-064',
        difficulty: 'ADVANCED',
        category: 'Security',
        q: 'A shared folder contains confidential records. Which control best limits access?',
        opts: [
            'A dedicated security group with least-privilege permissions',
            'A shared administrator password',
            'An open Everyone permission',
            'Disabling audit logs'
        ],
        ans: 0,
        note: 'Group-based least privilege is easier to manage and audit.'
    },


    /* =====================================================
       RECOVERY
    ===================================================== */

    {
        id: 'REC-061',
        difficulty: 'FOUNDATION',
        category: 'Recovery',
        q: 'A user accidentally overwrites a document stored in a managed location. What should be checked?',
        opts: [
            'Version history or an approved backup',
            'The BIOS boot order',
            'The display driver',
            'The DNS suffix'
        ],
        ans: 0,
        note: 'Version history or backups may provide a recoverable earlier copy.'
    },

    {
        id: 'REC-062',
        difficulty: 'INTERMEDIATE',
        category: 'Recovery',
        q: 'Before restoring a large folder, what should be confirmed?',
        opts: [
            'The restore point, destination and impact on current files',
            'The monitor cable',
            'The browser theme',
            'The keyboard layout'
        ],
        ans: 0,
        note: 'Confirming scope and destination prevents an unintended overwrite.'
    },

    {
        id: 'REC-063',
        difficulty: 'ADVANCED',
        category: 'Recovery',
        q: 'A recovery test succeeds but no one can explain the steps. What should improve?',
        opts: [
            'Document and repeat the recovery procedure',
            'Delete the backup',
            'Disable monitoring',
            'Remove all restore points'
        ],
        ans: 0,
        note: 'A documented, repeatable recovery process is essential for operational readiness.'
    }

];


/* =========================================================
   VALIDATION
========================================================= */

const systemQuestionIds =
    systemQuestions.map(q => q.id);

const systemUniqueIds =
    new Set(systemQuestionIds);


/* Check duplicate IDs */

if (
    systemUniqueIds.size !==
    systemQuestions.length
) {

    console.error(
        '[ICT TECH OPS] Module 03 duplicate question ID detected!'
    );

}


/* Console confirmation */

console.log(
    `[ICT TECH OPS] Module 03 loaded: ${systemQuestions.length} unique questions`
);