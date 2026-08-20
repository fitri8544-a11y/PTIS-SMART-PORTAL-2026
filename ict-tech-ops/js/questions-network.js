/* =========================================================
   ICT TECH OPS
   MODULE 02 — NETWORK OPERATIONS
   QUESTION BANK
========================================================= */

const networkQuestions = [

    [
        'N-001',
        'FOUNDATION',
        'LAN',
        'Which network connects devices within a limited site such as a school building?',
        ['LAN', 'WAN', 'VPN', 'PAN'],
        0,
        'A LAN covers a local site, while a WAN connects geographically separate networks.'
    ],

    [
        'N-002',
        'FOUNDATION',
        'Ethernet',
        'Which connector is commonly used for copper Ethernet cabling?',
        ['RJ11', 'RJ45', 'USB-C', 'BNC'],
        1,
        'RJ45 connectors are used with standard twisted-pair Ethernet cables.'
    ],

    [
        'N-003',
        'FOUNDATION',
        'Wi-Fi',
        'Which Wi-Fi band generally provides better range through walls?',
        ['2.4 GHz', '5 GHz', '60 GHz', '900 MHz'],
        0,
        '2.4 GHz usually travels farther and penetrates obstacles better than 5 GHz.'
    ],

    [
        'N-004',
        'FOUNDATION',
        'IPv4',
        'How many bits are in an IPv4 address?',
        ['16', '32', '64', '128'],
        1,
        'IPv4 addresses contain 32 bits, normally written as four decimal octets.'
    ],

    [
        'N-005',
        'FOUNDATION',
        'Private IP',
        'Which address is private?',
        ['8.8.8.8', '172.20.4.8', '1.1.1.1', '203.0.113.9'],
        1,
        '172.16.0.0 through 172.31.255.255 is a private IPv4 range.'
    ],

    [
        'N-006',
        'FOUNDATION',
        'Subnet Mask',
        'What does a subnet mask identify?',
        [
            'The network and host portions',
            'The Wi-Fi password',
            'The DNS provider',
            'The cable type'
        ],
        0,
        'A subnet mask separates the network portion from the host portion of an IPv4 address.'
    ],

    [
        'N-007',
        'FOUNDATION',
        'Gateway',
        'What is the usual role of a default gateway?',
        [
            'Route traffic beyond the local network',
            'Assign MAC addresses',
            'Store browser history',
            'Provide electrical power'
        ],
        0,
        'The default gateway is the local router used to reach other networks.'
    ],

    [
        'N-008',
        'FOUNDATION',
        'DNS',
        'What does DNS translate?',
        [
            'Hostnames to IP addresses',
            'MAC addresses to passwords',
            'Files to folders',
            'Ports to cables'
        ],
        0,
        'DNS resolves names such as www.google.com to IP addresses.'
    ],

    [
        'N-009',
        'FOUNDATION',
        'DHCP',
        'What does DHCP normally provide automatically?',
        [
            'IP configuration',
            'Antivirus updates',
            'Screen resolution',
            'File permissions'
        ],
        0,
        'DHCP can provide an IP address, subnet mask, gateway and DNS servers.'
    ],

    [
        'N-010',
        'FOUNDATION',
        'MAC Address',
        'What identifies a network interface at the link layer?',
        [
            'MAC address',
            'DNS name',
            'Subnet mask',
            'URL'
        ],
        0,
        'A MAC address identifies a network interface on the local network.'
    ],

    [
        'N-011',
        'FOUNDATION',
        'Switch',
        'What is the primary function of a network switch?',
        [
            'Forward frames between local devices',
            'Convert names to IPs',
            'Provide internet service',
            'Encrypt every file'
        ],
        0,
        'A switch forwards Ethernet frames using learned MAC addresses.'
    ],

    [
        'N-012',
        'FOUNDATION',
        'Router',
        'What does a router primarily connect?',
        [
            'Different IP networks',
            'Two USB devices',
            'A monitor and GPU',
            'Files and folders'
        ],
        0,
        'Routers forward packets between different networks.'
    ],

    [
        'N-013',
        'FOUNDATION',
        'Access Point',
        'What does a wireless access point provide?',
        [
            'Wi-Fi access to a wired network',
            'A public DNS record',
            'Hard-drive storage',
            'A Windows account'
        ],
        0,
        'An access point bridges wireless clients to a wired network.'
    ],

    [
        'N-014',
        'FOUNDATION',
        'Modem',
        'What is a modem used for?',
        [
            'Connecting to an ISP service',
            'Assigning file ownership',
            'Testing RAM',
            'Printing documents'
        ],
        0,
        'A modem converts signals for the service delivered by an internet provider.'
    ],

    [
        'N-015',
        'FOUNDATION',
        'UTP',
        'What does UTP describe?',
        [
            'Unshielded twisted pair cable',
            'Universal transfer protocol',
            'User terminal profile',
            'Unified telecom power'
        ],
        0,
        'UTP is copper cabling made from twisted wire pairs without shielding.'
    ],

    [
        'N-016',
        'INTERMEDIATE',
        'Cat6',
        'Compared with Cat5e, Cat6 cabling generally offers',
        [
            'Higher performance and reduced crosstalk',
            'Less reliable connectors',
            'Only wireless access',
            'No Ethernet support'
        ],
        0,
        'Cat6 is designed for higher performance and better crosstalk control.'
    ],

    [
        'N-017',
        'INTERMEDIATE',
        'Fiber Optic',
        'What carries data through fiber-optic cable?',
        [
            'Light pulses',
            'Magnetic fields',
            'Water pressure',
            'Radio waves only'
        ],
        0,
        'Fiber carries encoded data as light, providing high bandwidth and distance.'
    ],

    [
        'N-018',
        'INTERMEDIATE',
        'Adapter',
        'A disabled network adapter would most directly cause',
        [
            'The device to lose that network connection',
            'A monitor to dim',
            'A printer to run out of ink',
            'A CPU to overheat'
        ],
        0,
        'The operating system cannot transmit through a disabled adapter.'
    ],

    [
        'N-019',
        'INTERMEDIATE',
        'APIPA',
        'A Windows address of 169.254.25.10 usually indicates',
        [
            'DHCP communication failure',
            'A successful public lease',
            'A GPU fault',
            'A DNS cache hit'
        ],
        0,
        'Windows uses the APIPA range when it cannot obtain an address from DHCP.'
    ],

    [
        'N-020',
        'INTERMEDIATE',
        'Duplicate IP',
        'What is a likely symptom of duplicate IP addresses?',
        [
            'Intermittent or conflicting connectivity',
            'Faster DNS',
            'More disk space',
            'Improved Wi-Fi range'
        ],
        0,
        'Two devices using one address can cause unpredictable network conflicts.'
    ],

    [
        'N-021',
        'INTERMEDIATE',
        'DNS',
        'A PC pings 8.8.8.8 but not www.google.com. Investigate',
        [
            'DNS resolution',
            'RAM seating',
            'GPU drivers',
            'Bluetooth pairing'
        ],
        0,
        'IP connectivity works, but hostname resolution is failing.'
    ],

    [
        'N-022',
        'INTERMEDIATE',
        'ping',
        'What does ping test most directly?',
        [
            'Reachability and response time',
            'Installed applications',
            'Disk health',
            'User permissions'
        ],
        0,
        'Ping sends ICMP echo requests to test whether a host responds.'
    ],

    [
        'N-023',
        'INTERMEDIATE',
        'ipconfig',
        'Which command displays basic Windows IP configuration?',
        [
            'ipconfig',
            'hostname',
            'tasklist',
            'systeminfo'
        ],
        0,
        'ipconfig displays addresses, masks and gateways for Windows adapters.'
    ],

    [
        'N-024',
        'INTERMEDIATE',
        'ipconfig /all',
        'Which command shows DNS and DHCP details?',
        [
            'ipconfig /all',
            'ping /dns',
            'tracert /full',
            'hostname /all'
        ],
        0,
        'ipconfig /all provides detailed adapter, DHCP and DNS information.'
    ],

    [
        'N-025',
        'INTERMEDIATE',
        'DHCP',
        'A PC has 169.254.25.10 and cannot reach the school network. Likely cause?',
        [
            'DHCP communication problem',
            'Monitor failure',
            'Printer driver',
            'GPU overheating'
        ],
        0,
        'An APIPA address commonly means the DHCP request did not succeed.'
    ],

    [
        'N-026',
        'INTERMEDIATE',
        'tracert',
        'What does tracert help reveal?',
        [
            'The path and hops to a destination',
            'The local MAC vendor only',
            'Wi-Fi password strength',
            'Disk fragmentation'
        ],
        0,
        'tracert shows intermediary routing hops and where delay or failure may occur.'
    ],

    [
        'N-027',
        'INTERMEDIATE',
        'nslookup',
        'Which command is designed to query DNS?',
        [
            'nslookup',
            'hostname',
            'ipconfig',
            'netstat'
        ],
        0,
        'nslookup queries DNS records and helps diagnose name resolution.'
    ],

    [
        'N-028',
        'INTERMEDIATE',
        'hostname',
        'What does hostname display?',
        [
            'The computer name',
            'The gateway MAC',
            'The subnet mask',
            'The browser cache'
        ],
        0,
        'hostname prints the local computer name.'
    ],

    [
        'N-029',
        'INTERMEDIATE',
        'Network Cable',
        'One wired PC is offline while nearby PCs work. Check first',
        [
            'Its cable, link light and wall port',
            'The monitor brightness',
            'The printer toner',
            'The wallpaper'
        ],
        0,
        'Physical link checks are fast and appropriate for a single wired failure.'
    ],

    [
        'N-030',
        'INTERMEDIATE',
        'Limited Connectivity',
        'A client has an IP but no internet, while local devices respond. Check',
        [
            'Default gateway and upstream router',
            'RAM frequency',
            'Keyboard layout',
            'Screen scaling'
        ],
        0,
        'Local reachability with no internet points toward gateway or upstream routing.'
    ],

    [
        'N-031',
        'ADVANCED',
        'Switch Uplink',
        'Several computers on one switch lose connectivity while other areas work. Check',
        [
            'The affected switch and its uplink',
            'Every monitor',
            'Printer toner',
            'Windows wallpaper'
        ],
        0,
        'A failed uplink or switch can isolate all attached clients.'
    ],

    [
        'N-032',
        'ADVANCED',
        'Wi-Fi',
        'A 5 GHz client is fast near the AP but drops in distant rooms. Try',
        [
            '2.4 GHz or an additional access point',
            'Replacing the CPU',
            'Changing the DNS name',
            'Removing the subnet mask'
        ],
        0,
        '5 GHz is faster but generally has shorter range than 2.4 GHz.'
    ],

    [
        'N-033',
        'ADVANCED',
        'Printer',
        'A network printer works by IP but not by name. Investigate',
        [
            'DNS or the printer hostname record',
            'The printer paper tray',
            'The monitor cable',
            'CPU thermal paste'
        ],
        0,
        'IP access works, so name resolution or the configured printer hostname is suspect.'
    ],

    [
        'N-034',
        'ADVANCED',
        'Command Diagnostic',
        'ping 192.168.1.1 returns replies. What does this directly indicate?',
        [
            'The local device reaches 192.168.1.1',
            'DNS definitely works',
            'Internet definitely works',
            'The printer is online'
        ],
        0,
        'The replies prove reachability to that address, not full internet or DNS operation.'
    ],

    [
        'N-035',
        'ADVANCED',
        'WAN',
        'A branch LAN works locally but cannot reach headquarters. Focus first on',
        [
            'WAN routing or the site VPN',
            'Local keyboard drivers',
            'Monitor resolution',
            'USB ports'
        ],
        0,
        'Local LAN operation with remote failure points toward WAN routing or VPN connectivity.'
    ],

    [
        'N-036',
        'ADVANCED',
        'Network Adapter',
        'A wired adapter shows no link light after a cable swap. Test',
        [
            'Another known-good port and adapter',
            'The DNS suffix only',
            'Browser cache',
            'Printer ink'
        ],
        0,
        'No link light indicates a physical, port or adapter-layer problem.'
    ],

    [
        'N-037',
        'ADVANCED',
        'Subnet',
        'Two hosts have addresses in different subnets and cannot communicate directly. Check',
        [
            'Routing and subnet configuration',
            'Mouse batteries',
            'File extensions',
            'Screen saver'
        ],
        0,
        'Different subnets require a correctly configured router or layer-3 path.'
    ],

    [
        'N-038',
        'ADVANCED',
        'Wi-Fi Status',
        'Many users disconnect at the same time every day. Investigate',
        [
            'Interference, channel use and AP capacity',
            'Each user’s wallpaper',
            'CPU paste',
            'USB storage'
        ],
        0,
        'Recurring group failures often indicate RF interference, congestion or AP capacity.'
    ],

    [
        'N-039',
        'ADVANCED',
        'Ethernet',
        'A cable tester reports an open pair on a Cat6 run. Replace or repair',
        [
            'The damaged termination or cable',
            'The DNS server',
            'The router firmware first',
            'The monitor'
        ],
        0,
        'An open pair is a physical cabling fault that can prevent reliable Ethernet service.'
    ],

    [
        'N-040',
        'ADVANCED',
        'Service Interruption',
        'All clients lose internet but can reach the gateway. Escalate after checking',
        [
            'The ISP/WAN service and router uplink',
            'Every client keyboard',
            'Local display drivers',
            'Printer spooler'
        ],
        0,
        'Gateway reachability with no external access suggests an upstream WAN or ISP issue.'
    ]

].map(x => ({

    id: x[0],

    difficulty: x[1],

    category: x[2],

    q: x[3],

    opts: x[4],

    ans: x[5],

    note: x[6]

}));


/* =========================================================
   QUESTION BANK VALIDATION
========================================================= */

console.log(
    `[ICT TECH OPS] Module 02 loaded: ${networkQuestions.length} questions`
);