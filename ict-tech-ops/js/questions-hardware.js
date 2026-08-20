/* =========================================================
   ICT TECH OPS
   MODULE 01 — HARDWARE DIAGNOSTICS
   QUESTION BANK
========================================================= */

const hwQuestions = [

    {
        id: 'H-001',
        priority: 'HIGH',
        q: 'A desktop PC powers on but produces repeated beep codes and does not display anything on screen. What should be checked first?',
        opts: [
            'Printer driver',
            'RAM seating',
            'Browser cache',
            'DNS configuration'
        ],
        ans: 1,
        note: 'POST beep codes often indicate hardware problems. RAM seating is one of the first components to inspect when no display output is present.'
    },

    {
        id: 'H-002',
        priority: 'MEDIUM',
        q: 'A user reports their PC is running extremely slow. Task Manager shows 99% disk usage with no heavy applications open. What is the most likely hardware issue?',
        opts: [
            'Faulty GPU',
            'Failing HDD',
            'Disconnected monitor',
            'Bad Ethernet cable'
        ],
        ans: 1,
        note: 'High disk usage with no applications running often indicates a failing HDD with bad sectors causing constant read retries.'
    },

    {
        id: 'H-003',
        priority: 'HIGH',
        q: 'After a power outage, a PC will not power on at all. No LEDs, no fan spin. What component should be tested first?',
        opts: [
            'RAM module',
            'Hard drive',
            'Power supply unit (PSU)',
            'Graphics card'
        ],
        ans: 2,
        note: 'No signs of power at all strongly indicates a PSU failure. Test with a PSU tester or known-good replacement.'
    },

    {
        id: 'H-004',
        priority: 'MEDIUM',
        q: 'A system displays the date and time incorrectly after every shutdown. What is the most likely cause?',
        opts: [
            'Corrupted OS',
            'Dead CMOS battery',
            'Faulty CPU',
            'Bad RAM'
        ],
        ans: 1,
        note: 'The CMOS battery maintains BIOS settings including date/time when the system is off. A dead battery causes these to reset.'
    },

    {
        id: 'H-005',
        priority: 'LOW',
        q: 'Which component stores the BIOS/UEFI firmware?',
        opts: [
            'RAM',
            'HDD',
            'Flash ROM chip on motherboard',
            'CPU cache'
        ],
        ans: 2,
        note: 'BIOS/UEFI firmware is stored on a flash ROM chip soldered to the motherboard, allowing it to persist without power.'
    },

    {
        id: 'H-006',
        priority: 'HIGH',
        q: 'A PC shuts down unexpectedly after 10-15 minutes of use. The CPU temperature reads 95°C. What is the most likely cause?',
        opts: [
            'Insufficient RAM',
            'Failed thermal paste / heatsink',
            'Virus infection',
            'Monitor malfunction'
        ],
        ans: 1,
        note: 'Overheating to 95°C indicates failed thermal interface. Dried thermal paste or a detached heatsink prevents proper heat dissipation.'
    },

    {
        id: 'H-007',
        priority: 'MEDIUM',
        q: 'A newly installed SSD is not detected in BIOS. What should be checked first?',
        opts: [
            'Install antivirus',
            'Check SATA/NVMe connection and BIOS storage mode',
            'Update web browser',
            'Replace the CPU'
        ],
        ans: 1,
        note: 'An undetected SSD usually means a loose cable, wrong M.2 slot, or BIOS storage mode (AHCI vs RAID) misconfiguration.'
    },

    {
        id: 'H-008',
        priority: 'LOW',
        q: 'What does POST stand for in computer hardware diagnostics?',
        opts: [
            'Power On Self Test',
            'Primary Operating System Transfer',
            'Peripheral Output Signal Test',
            'Processor Overload Safety Threshold'
        ],
        ans: 0,
        note: 'POST (Power On Self Test) is a diagnostic sequence run by BIOS/UEFI to verify basic hardware functionality before booting.'
    },

    {
        id: 'H-009',
        priority: 'HIGH',
        q: 'A workstation displays vertical colored lines on screen immediately at POST. What is the likely faulty component?',
        opts: [
            'Hard drive',
            'Network card',
            'GPU or video cable',
            'Sound card'
        ],
        ans: 2,
        note: 'Artifacts appearing at POST (before OS loads) indicate a hardware-level GPU failure or damaged video cable.'
    },

    {
        id: 'H-010',
        priority: 'MEDIUM',
        q: 'A PC has 16GB RAM installed but BIOS only shows 8GB. What should be investigated?',
        opts: [
            'One RAM stick is not properly seated or faulty',
            'The HDD is too small',
            'The monitor resolution is wrong',
            'The OS needs reinstalling'
        ],
        ans: 0,
        note: 'If BIOS shows less RAM than installed, a module is likely not seated correctly or has failed. Reseat and test each stick individually.'
    },

    {
        id: 'H-011',
        priority: 'MEDIUM',
        q: 'USB 3.0 devices work in some ports but not others on the same PC. What is the most likely issue?',
        opts: [
            'The devices are incompatible',
            'Specific USB controller or port hardware failure',
            'The OS is corrupted',
            'The monitor is faulty'
        ],
        ans: 1,
        note: 'If some USB ports work and others do not, the issue is typically with the specific port hardware or its controller on the motherboard.'
    },

    {
        id: 'H-012',
        priority: 'HIGH',
        q: 'A server emits a burning smell and shuts down. After inspection, scorch marks are visible on the motherboard near the VRM. What happened?',
        opts: [
            'Software virus',
            'VRM (Voltage Regulator Module) failure/burnout',
            'Bad monitor cable',
            'DNS error'
        ],
        ans: 1,
        note: 'Scorch marks near VRMs indicate electrical failure in the power delivery system, often from overcurrent or component degradation.'
    },

    {
        id: 'H-013',
        priority: 'LOW',
        q: 'Which interface provides the highest data transfer speed for internal storage?',
        opts: [
            'SATA III (6 Gbps)',
            'USB 2.0 (480 Mbps)',
            'NVMe PCIe Gen 4 (up to 64 Gbps)',
            'IDE/PATA (133 MB/s)'
        ],
        ans: 2,
        note: 'NVMe over PCIe Gen 4 provides significantly higher bandwidth than SATA, making it the fastest common internal storage interface.'
    },

    {
        id: 'H-014',
        priority: 'MEDIUM',
        q: 'A dual-monitor setup shows display on one monitor but not the second. The cable and monitor work individually. What should be checked?',
        opts: [
            'RAM amount',
            'Display output settings and GPU multi-monitor support',
            'Keyboard layout',
            'Antivirus software'
        ],
        ans: 1,
        note: 'Check display settings (extend/duplicate), ensure GPU supports dual output, and verify the correct port is being used.'
    },

    {
        id: 'H-015',
        priority: 'HIGH',
        q: 'After installing a new GPU, the system will not POST. The motherboard debug LED shows VGA error. What is the likely issue?',
        opts: [
            'Insufficient PSU wattage or missing PCIe power connector',
            'Bad RAM',
            'Corrupted browser',
            'Network cable unplugged'
        ],
        ans: 0,
        note: 'New GPUs often require dedicated PCIe power connectors. Without adequate power, the system cannot POST.'
    },

    {
        id: 'H-016',
        priority: 'MEDIUM',
        q: 'A laptop battery shows 100% but dies within minutes of unplugging. What is the diagnosis?',
        opts: [
            'Screen too bright',
            'Battery cell degradation — replacement needed',
            'Too many browser tabs',
            'Faulty mouse'
        ],
        ans: 1,
        note: 'A battery showing full charge but dying quickly has degraded cells that can no longer hold capacity. Battery replacement is required.'
    },

    {
        id: 'H-017',
        priority: 'LOW',
        q: 'What is the primary function of thermal paste between a CPU and heatsink?',
        opts: [
            'Increase clock speed',
            'Fill microscopic gaps to improve heat transfer',
            'Add RGB lighting',
            'Boost WiFi signal'
        ],
        ans: 1,
        note: 'Thermal paste fills tiny imperfections between the CPU and heatsink surfaces, dramatically improving thermal conductivity.'
    },

    {
        id: 'H-018',
        priority: 'HIGH',
        q: 'A file server experiences frequent Blue Screen of Death (BSOD) with MEMORY_MANAGEMENT errors. What hardware should be tested?',
        opts: [
            'Monitor',
            'Keyboard',
            'RAM modules (run MemTest86)',
            'Speakers'
        ],
        ans: 2,
        note: 'MEMORY_MANAGEMENT BSODs strongly indicate faulty RAM. Running MemTest86 will identify which module has errors.'
    },

    {
        id: 'H-019',
        priority: 'MEDIUM',
        q: 'A PC makes a repetitive clicking sound from inside the case. Performance is severely degraded. What component is likely failing?',
        opts: [
            'CPU fan',
            'Mechanical HDD (head crash imminent)',
            'GPU',
            'RAM'
        ],
        ans: 1,
        note: 'Clicking from a mechanical HDD indicates the read/write head is failing (click of death). Immediate backup and replacement is critical.'
    },

    {
        id: 'H-020',
        priority: 'LOW',
        q: 'Which BIOS/UEFI setting must be enabled to boot from a USB drive for OS installation?',
        opts: [
            'Secure Boot only',
            'USB Boot / Legacy Boot priority',
            'Overclocking',
            'RGB control'
        ],
        ans: 1,
        note: 'To boot from USB, ensure USB Boot is enabled in BIOS and the boot priority order places USB before the internal drive.'
    }

];


/* =========================================================
   QUESTION BANK VALIDATION
========================================================= */

console.log(
    `[ICT TECH OPS] Module 01 loaded: ${hwQuestions.length} questions`
);