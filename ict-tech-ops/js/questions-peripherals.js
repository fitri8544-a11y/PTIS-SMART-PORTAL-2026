/* =========================================================
   ICT TECH OPS
   MODULE 04 — PERIPHERALS & ICT SUPPORT
   QUESTION BANK

   CLEAN STANDALONE VERSION
   NO GENERATED REPEATED QUESTIONS
========================================================= */

const peripheralQuestions = [

    /* =====================================================
       PRINTER
    ===================================================== */

    {
        id: 'P-001',
        difficulty: 'FOUNDATION',
        category: 'PRINTER',
        q: 'Printer offline after a paper refill. What should be checked first?',
        opts: [
            'Power, ready state and physical connection',
            'DNS cache',
            'GPU driver',
            'BIOS date'
        ],
        ans: 0,
        note: 'Check printer power, ready state and physical connection before moving to software troubleshooting.'
    },

    {
        id: 'P-002',
        difficulty: 'FOUNDATION',
        category: 'PRINTER',
        q: 'Several jobs remain pending although the printer is ready. What should be investigated?',
        opts: [
            'The print queue and Print Spooler',
            'Display resolution',
            'DHCP scope',
            'Audio output'
        ],
        ans: 0,
        note: 'A stalled print queue or Print Spooler service can prevent otherwise ready printers from processing jobs.'
    },

    {
        id: 'P-003',
        difficulty: 'FOUNDATION',
        category: 'PRINTER',
        q: 'A document prints on the wrong device. What is the best first check?',
        opts: [
            'Selected and default printer',
            'USB file system',
            'Projector focus',
            'Microphone permission'
        ],
        ans: 0,
        note: 'Confirm the selected printer and default printer before changing drivers or network configuration.'
    },

    {
        id: 'P-004',
        difficulty: 'FOUNDATION',
        category: 'PRINTER',
        q: 'Text is faint across every page from a laser printer. What is most likely?',
        opts: [
            'Low toner or print-density setting',
            'VGA bandwidth',
            'Bluetooth pairing',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'Consistently faint laser output commonly points to toner level or print-density configuration.'
    },

    {
        id: 'P-005',
        difficulty: 'FOUNDATION',
        category: 'PRINTER',
        q: 'An inkjet prints with missing colour bands. What maintenance is appropriate?',
        opts: [
            'Run printhead cleaning or alignment',
            'Restart the router',
            'Change display mode',
            'Replace the keyboard'
        ],
        ans: 0,
        note: 'Missing colour bands usually indicate clogged or misaligned printheads.'
    },

    {
        id: 'P-006',
        difficulty: 'INTERMEDIATE',
        category: 'PRINTER',
        q: 'A printer reports A4 jobs as the wrong paper size. What should be compared?',
        opts: [
            'Document and printer paper settings',
            'DNS and gateway',
            'Camera permissions',
            'USB power'
        ],
        ans: 0,
        note: 'Mismatch between document size and printer tray or driver settings can trigger paper-size errors.'
    },

    {
        id: 'P-007',
        difficulty: 'INTERMEDIATE',
        category: 'PRINTER',
        q: 'A shared printer is missing after a workstation update. What should be checked?',
        opts: [
            'Printer share path and driver',
            'Projector lamp',
            'Mouse battery',
            'Audio jack'
        ],
        ans: 0,
        note: 'Updates can affect shared-printer mappings or drivers, so confirm the share path and installed driver.'
    },

    {
        id: 'P-008',
        difficulty: 'INTERMEDIATE',
        category: 'PRINTER',
        q: 'Prints are rotated unexpectedly. Which setting is relevant?',
        opts: [
            'Page orientation',
            'Print Spooler',
            'IP address',
            'Webcam selection'
        ],
        ans: 0,
        note: 'Portrait and landscape orientation settings determine page rotation.'
    },

    {
        id: 'P-009',
        difficulty: 'INTERMEDIATE',
        category: 'PRINTER',
        q: 'A USB printer is not detected on one PC. What is a sensible first step?',
        opts: [
            'Try another port and inspect the driver',
            'Change the default gateway',
            'Adjust keystone',
            'Clear microphone mute'
        ],
        ans: 0,
        note: 'Testing another USB port and checking driver status quickly separates a port issue from a printer problem.'
    },

    {
        id: 'P-010',
        difficulty: 'INTERMEDIATE',
        category: 'PRINTER',
        q: 'A printer produces duplicate copies of one job. What should be checked?',
        opts: [
            'Application print quantity and queued jobs',
            'HDMI input',
            'Wi-Fi band',
            'Screen brightness'
        ],
        ans: 0,
        note: 'Duplicate output can come from print quantity settings or repeated jobs already present in the queue.'
    },


    /* =====================================================
       PROJECTOR
    ===================================================== */

    {
        id: 'P-011',
        difficulty: 'FOUNDATION',
        category: 'PROJECTOR',
        q: 'A projector shows No Signal over HDMI. What should be checked first?',
        opts: [
            'Input source and cable connection',
            'Printer queue',
            'DNS server',
            'Antivirus signature'
        ],
        ans: 0,
        note: 'Verify the projector input source and physical HDMI connection before changing computer settings.'
    },

    {
        id: 'P-012',
        difficulty: 'FOUNDATION',
        category: 'PROJECTOR',
        q: 'A teacher wants the same image on laptop and projector. Which mode is correct?',
        opts: [
            'Duplicate',
            'Extend',
            'PC screen only',
            'Second screen only'
        ],
        ans: 0,
        note: 'Duplicate mode mirrors the same desktop on both the laptop and projector.'
    },

    {
        id: 'P-013',
        difficulty: 'FOUNDATION',
        category: 'PROJECTOR',
        q: 'A projector is visible but the desktop is not shown. Which shortcut helps choose a display mode?',
        opts: [
            'Windows + P',
            'Ctrl + Alt + Delete',
            'Alt + Tab',
            'Windows + L'
        ],
        ans: 0,
        note: 'Windows + P opens the projection mode selector.'
    },

    {
        id: 'P-014',
        difficulty: 'INTERMEDIATE',
        category: 'PROJECTOR',
        q: 'The projected image is cut off at the edges. What should be checked?',
        opts: [
            'Resolution and aspect ratio',
            'Print density',
            'USB permissions',
            'Microphone gain'
        ],
        ans: 0,
        note: 'Resolution and aspect-ratio mismatch can crop or stretch the projected image.'
    },

    {
        id: 'P-015',
        difficulty: 'FOUNDATION',
        category: 'PROJECTOR',
        q: 'The image is blurred while the laptop output is correct. What should be adjusted?',
        opts: [
            'Projector focus',
            'DNS settings',
            'Default printer',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'If the source image is sharp but projection is blurry, projector focus is the direct adjustment.'
    },

    {
        id: 'P-016',
        difficulty: 'FOUNDATION',
        category: 'PROJECTOR',
        q: 'The image is trapezoidal on a classroom wall. Which control helps?',
        opts: [
            'Keystone correction',
            'Print queue',
            'Audio balance',
            'USB format'
        ],
        ans: 0,
        note: 'Keystone correction compensates for angled projection that creates a trapezoidal image.'
    },

    {
        id: 'P-017',
        difficulty: 'INTERMEDIATE',
        category: 'PROJECTOR',
        q: 'A lamp warning appears during startup. What is the appropriate action?',
        opts: [
            'Follow lamp replacement and safety guidance',
            'Change the IP address',
            'Reinstall the webcam',
            'Clear browser cache'
        ],
        ans: 0,
        note: 'Lamp warnings should be handled according to the projector manufacturer’s maintenance and safety guidance.'
    },

    {
        id: 'P-018',
        difficulty: 'ADVANCED',
        category: 'PROJECTOR',
        q: 'A projector powers on but immediately shuts down. What should be checked?',
        opts: [
            'Cooling vents and temperature warning',
            'Printer driver',
            'Mouse receiver',
            'DNS record'
        ],
        ans: 0,
        note: 'Thermal protection may shut the projector down if vents are blocked or internal temperature is excessive.'
    },

    {
        id: 'P-019',
        difficulty: 'INTERMEDIATE',
        category: 'PROJECTOR',
        q: 'A second display works intermittently when the lid closes. What should be reviewed?',
        opts: [
            'Power and display settings',
            'Toner level',
            'Scanner resolution',
            'Keyboard language'
        ],
        ans: 0,
        note: 'Laptop lid actions and display-power settings can change external display behaviour.'
    },

    {
        id: 'P-020',
        difficulty: 'INTERMEDIATE',
        category: 'PROJECTOR',
        q: 'The projector displays the wrong laptop screen. What should be verified?',
        opts: [
            'Selected display and cable routing',
            'Print orientation',
            'USB eject status',
            'Speaker volume'
        ],
        ans: 0,
        note: 'Verify which display output is selected and confirm the cable is connected to the intended source.'
    },


    /* =====================================================
       DISPLAY / HDMI / VGA / USB-C
    ===================================================== */

    {
        id: 'P-021',
        difficulty: 'FOUNDATION',
        category: 'DISPLAY',
        q: 'Which connection normally carries digital video and audio together?',
        opts: [
            'HDMI',
            'VGA',
            'PS/2',
            'RJ11'
        ],
        ans: 0,
        note: 'HDMI normally carries both digital video and digital audio.'
    },

    {
        id: 'P-022',
        difficulty: 'FOUNDATION',
        category: 'DISPLAY',
        q: 'Which connector is analogue and normally carries video only?',
        opts: [
            'VGA',
            'HDMI',
            'DisplayPort',
            'USB-C'
        ],
        ans: 0,
        note: 'VGA is an analogue video interface and does not normally carry audio.'
    },

    {
        id: 'P-023',
        difficulty: 'INTERMEDIATE',
        category: 'DISPLAY',
        q: 'A DisplayPort monitor is black while the cable works elsewhere. What should be checked?',
        opts: [
            'Correct input and secure connector',
            'Print Spooler',
            'Microphone mute',
            'Scanner driver'
        ],
        ans: 0,
        note: 'Verify the monitor input and ensure the connector is fully seated.'
    },

    {
        id: 'P-024',
        difficulty: 'INTERMEDIATE',
        category: 'DISPLAY',
        q: 'An HDMI adapter works for video but not audio. What should be investigated?',
        opts: [
            'HDMI audio output and adapter support',
            'Paper size',
            'Mouse battery',
            'DNS cache'
        ],
        ans: 0,
        note: 'Some adapters do not support audio, and Windows may also be using the wrong playback device.'
    },

    {
        id: 'P-025',
        difficulty: 'INTERMEDIATE',
        category: 'DISPLAY',
        q: 'A monitor reports unsupported mode after a resolution change. What is safest?',
        opts: [
            'Return to a supported resolution',
            'Replace the printer',
            'Disable USB',
            'Change the keyboard layout'
        ],
        ans: 0,
        note: 'An unsupported resolution or refresh rate should be reverted to a mode supported by the display.'
    },

    {
        id: 'P-026',
        difficulty: 'FOUNDATION',
        category: 'DISPLAY',
        q: 'A loose cable causes flickering on an external screen. What is the first fix?',
        opts: [
            'Reseat or replace the cable',
            'Clear the print queue',
            'Enable Bluetooth',
            'Restart the scanner'
        ],
        ans: 0,
        note: 'Intermittent video caused by a loose connection should first be addressed at the physical connection.'
    },

    {
        id: 'P-027',
        difficulty: 'ADVANCED',
        category: 'DISPLAY',
        q: 'A VGA image has ghosting over a long cable. What is likely?',
        opts: [
            'Analogue signal quality or cable length',
            'Printer toner',
            'Webcam permission',
            'DHCP lease'
        ],
        ans: 0,
        note: 'Long analogue VGA runs are more susceptible to signal degradation and ghosting.'
    },

    {
        id: 'P-028',
        difficulty: 'ADVANCED',
        category: 'DISPLAY',
        q: 'A USB-C display adapter fails on a port without video support. What explains it?',
        opts: [
            'The port may not support DisplayPort Alt Mode',
            'The printer is offline',
            'The microphone is muted',
            'The scanner is busy'
        ],
        ans: 0,
        note: 'Not every USB-C port supports video output; DisplayPort Alt Mode support is required for many adapters.'
    },

    {
        id: 'P-029',
        difficulty: 'INTERMEDIATE',
        category: 'DISPLAY',
        q: 'A monitor works on another input but not the selected one. What should be changed?',
        opts: [
            'Monitor input source',
            'Windows user password',
            'Print orientation',
            'Audio gain'
        ],
        ans: 0,
        note: 'Selecting the correct input source is necessary when a monitor has multiple video inputs.'
    },

    {
        id: 'P-030',
        difficulty: 'INTERMEDIATE',
        category: 'DISPLAY',
        q: 'A damaged HDMI port causes intermittent signal. What is appropriate?',
        opts: [
            'Test another port or approved adapter',
            'Reinstall Windows',
            'Change DNS',
            'Replace the mouse'
        ],
        ans: 0,
        note: 'Testing another known-good output path helps confirm a damaged HDMI port without unnecessary software changes.'
    },


    /* =====================================================
       USB & EXTERNAL DEVICES
    ===================================================== */

    {
        id: 'P-031',
        difficulty: 'FOUNDATION',
        category: 'USB',
        q: 'A flash drive is not detected on one computer. What is a reasonable first check?',
        opts: [
            'Try another port and inspect Device Manager',
            'Change the printer IP',
            'Adjust projector focus',
            'Restart audio'
        ],
        ans: 0,
        note: 'Trying another port and checking Device Manager can identify a port or driver problem quickly.'
    },

    {
        id: 'P-032',
        difficulty: 'INTERMEDIATE',
        category: 'USB',
        q: 'An external drive disconnects during large copies. What should be checked?',
        opts: [
            'Cable, USB power and port stability',
            'Print density',
            'Display mode',
            'Camera permissions'
        ],
        ans: 0,
        note: 'Large transfers can expose unstable cables, ports or insufficient USB power.'
    },

    {
        id: 'P-033',
        difficulty: 'ADVANCED',
        category: 'USB',
        q: 'A bus-powered hub fails with several hard drives attached. Why?',
        opts: [
            'The hub may lack sufficient power',
            'DNS is unavailable',
            'The projector is out of focus',
            'The printer needs toner'
        ],
        ans: 0,
        note: 'Multiple storage devices can exceed the power available from an unpowered USB hub.'
    },

    {
        id: 'P-034',
        difficulty: 'FOUNDATION',
        category: 'USB',
        q: 'Before removing a flash drive containing open files, what should be done?',
        opts: [
            'Eject it safely after closing files',
            'Change the default printer',
            'Mute the speakers',
            'Select Duplicate'
        ],
        ans: 0,
        note: 'Close active files and safely eject removable storage to reduce the risk of corruption.'
    },

    {
        id: 'P-035',
        difficulty: 'INTERMEDIATE',
        category: 'USB',
        q: 'A USB device works on another PC but has an unknown-device icon here. What is likely?',
        opts: [
            'Driver or connection problem',
            'Wrong paper size',
            'Projector lamp warning',
            'Audio balance'
        ],
        ans: 0,
        note: 'If the device works elsewhere, investigate the local USB connection and driver configuration.'
    },

    {
        id: 'P-036',
        difficulty: 'INTERMEDIATE',
        category: 'USB',
        q: 'A drive is visible but cannot accept a 6 GB file when formatted FAT32. Why?',
        opts: [
            'FAT32 has a roughly 4 GB file limit',
            'The HDMI cable is loose',
            'The printer is offline',
            'The webcam is busy'
        ],
        ans: 0,
        note: 'FAT32 cannot store an individual file larger than approximately 4 GB.'
    },

    {
        id: 'P-037',
        difficulty: 'INTERMEDIATE',
        category: 'USB',
        q: 'A USB webcam works only when plugged directly into the laptop. What should be tested?',
        opts: [
            'The hub power and compatibility',
            'Print Spooler',
            'Projector keystone',
            'DNS resolution'
        ],
        ans: 0,
        note: 'If a webcam fails only through a hub, investigate hub power, bandwidth and compatibility.'
    },

    {
        id: 'P-038',
        difficulty: 'ADVANCED',
        category: 'USB',
        q: 'A portable drive makes repeated disconnect sounds. What should happen first?',
        opts: [
            'Back up data and test cable/port',
            'Format it immediately',
            'Change screen mode',
            'Disable the microphone'
        ],
        ans: 0,
        note: 'Repeated disconnects can indicate impending device, cable or port failure, so protect the data first.'
    },

    {
        id: 'P-039',
        difficulty: 'INTERMEDIATE',
        category: 'USB',
        q: 'A device is detected only after reconnecting it. What should be inspected?',
        opts: [
            'Port condition and device driver',
            'Paper orientation',
            'Projector focus',
            'Speaker volume'
        ],
        ans: 0,
        note: 'Intermittent detection can result from a worn port, poor contact or unstable device driver.'
    },

    {
        id: 'P-040',
        difficulty: 'ADVANCED',
        category: 'USB',
        q: 'A USB printer works on USB 2 but not USB 3. What is a useful test?',
        opts: [
            'Try another port and check compatibility',
            'Change the gateway',
            'Select Extend',
            'Clear browser cache'
        ],
        ans: 0,
        note: 'Testing ports and compatibility helps distinguish a controller issue from a printer problem.'
    },


    /* =====================================================
       AUDIO / MICROPHONE
    ===================================================== */

    {
        id: 'P-041',
        difficulty: 'FOUNDATION',
        category: 'AUDIO',
        q: 'A laptop is connected to a projector but sound remains on speakers. What should be checked?',
        opts: [
            'Windows playback device',
            'Printer queue',
            'USB file system',
            'Camera permission'
        ],
        ans: 0,
        note: 'Windows may still be using the laptop speakers instead of the HDMI audio device.'
    },

    {
        id: 'P-042',
        difficulty: 'FOUNDATION',
        category: 'AUDIO',
        q: 'A headset is detected but no sound is heard. What should be verified first?',
        opts: [
            'Volume, mute state and selected output',
            'Projector resolution',
            'Printer IP',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'Check the simplest audio controls and output selection before replacing hardware.'
    },

    {
        id: 'P-043',
        difficulty: 'INTERMEDIATE',
        category: 'AUDIO',
        q: 'A USB microphone is detected but meeting participants hear nothing. What is best first check?',
        opts: [
            'Selected input, mute state and app permission',
            'Print orientation',
            'DisplayPort input',
            'Mouse battery'
        ],
        ans: 0,
        note: 'Microphone input selection, mute state and application permission are common causes when the device is detected.'
    },

    {
        id: 'P-044',
        difficulty: 'INTERMEDIATE',
        category: 'AUDIO',
        q: 'A speaker produces crackling only at high volume. What should be tried?',
        opts: [
            'Lower volume and test another output',
            'Restart Print Spooler',
            'Change DNS',
            'Enable Duplicate'
        ],
        ans: 0,
        note: 'Distortion only at high output may indicate clipping, speaker limitations or an audio-output issue.'
    },

    {
        id: 'P-045',
        difficulty: 'FOUNDATION',
        category: 'AUDIO',
        q: 'Bluetooth headphones connect but audio uses the laptop. What should be selected?',
        opts: [
            'The Bluetooth headset as playback device',
            'The default printer',
            'The scanner driver',
            'The projector input'
        ],
        ans: 0,
        note: 'A connected Bluetooth device must also be selected as the active audio output.'
    },

    {
        id: 'P-046',
        difficulty: 'INTERMEDIATE',
        category: 'AUDIO',
        q: 'A microphone works in Windows but not in a meeting app. What should be investigated?',
        opts: [
            'App microphone selection and permission',
            'Paper size',
            'HDMI cable length',
            'USB eject'
        ],
        ans: 0,
        note: 'Application-specific input selection or permissions can block an otherwise functioning microphone.'
    },

    {
        id: 'P-047',
        difficulty: 'INTERMEDIATE',
        category: 'AUDIO',
        q: 'A headset microphone is silent while its speakers work. What is likely?',
        opts: [
            'Wrong input or microphone mute',
            'Printer toner',
            'Display resolution',
            'DHCP failure'
        ],
        ans: 0,
        note: 'Headset playback and microphone capture are separate paths, so verify the selected input and mute status.'
    },

    {
        id: 'P-048',
        difficulty: 'INTERMEDIATE',
        category: 'AUDIO',
        q: 'No sound follows an HDMI connection despite video working. What should be checked?',
        opts: [
            'HDMI-capable playback device and driver',
            'Print queue',
            'Mouse receiver',
            'Scanner glass'
        ],
        ans: 0,
        note: 'Video can work while Windows still uses another playback device or lacks the required HDMI audio driver.'
    },

    {
        id: 'P-049',
        difficulty: 'FOUNDATION',
        category: 'AUDIO',
        q: 'A classroom speaker has no power light. What comes first?',
        opts: [
            'Power switch, cable and outlet',
            'DNS cache',
            'Camera selection',
            'Paper orientation'
        ],
        ans: 0,
        note: 'Always verify electrical power and physical connections before software troubleshooting.'
    },

    {
        id: 'P-050',
        difficulty: 'ADVANCED',
        category: 'AUDIO',
        q: 'A recording is distorted but the microphone is detected. What should be adjusted?',
        opts: [
            'Input level or microphone gain',
            'Projector keystone',
            'Printer port',
            'USB safe removal'
        ],
        ans: 0,
        note: 'Excessive microphone gain can cause clipping and distorted recordings.'
    },


    /* =====================================================
       WEBCAM
    ===================================================== */

    {
        id: 'P-051',
        difficulty: 'FOUNDATION',
        category: 'WEBCAM',
        q: 'A webcam works in Camera but not in a meeting app. What should be investigated?',
        opts: [
            'The app camera selection and permission',
            'Print Spooler',
            'Projector input',
            'Mouse battery'
        ],
        ans: 0,
        note: 'A working Camera app confirms the hardware; the meeting app settings and permissions are the next place to check.'
    },

    {
        id: 'P-052',
        difficulty: 'FOUNDATION',
        category: 'WEBCAM',
        q: 'A meeting app says no camera is available. What should be checked first?',
        opts: [
            'Camera privacy permission and USB connection',
            'Paper size',
            'DNS server',
            'Display orientation'
        ],
        ans: 0,
        note: 'Verify both the physical connection and camera privacy permissions.'
    },

    {
        id: 'P-053',
        difficulty: 'INTERMEDIATE',
        category: 'WEBCAM',
        q: 'Video is black while the camera indicator is on. What is a likely check?',
        opts: [
            'Whether another app is using the camera',
            'Printer toner',
            'USB file system',
            'Audio output'
        ],
        ans: 0,
        note: 'Another application may already have exclusive use of the camera.'
    },

    {
        id: 'P-054',
        difficulty: 'FOUNDATION',
        category: 'WEBCAM',
        q: 'Two cameras are connected and the wrong one appears. What should be changed?',
        opts: [
            'The meeting app camera selection',
            'Windows printer port',
            'Projector focus',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'Select the intended camera within the video-conferencing application.'
    },

    {
        id: 'P-055',
        difficulty: 'INTERMEDIATE',
        category: 'WEBCAM',
        q: 'A USB webcam freezes during a call. What should be tested?',
        opts: [
            'Another USB port and available bandwidth',
            'Print density',
            'DNS cache',
            'Speaker balance'
        ],
        ans: 0,
        note: 'USB stability and bandwidth can affect high-resolution webcam streams.'
    },

    {
        id: 'P-056',
        difficulty: 'FOUNDATION',
        category: 'WEBCAM',
        q: 'Participants see a dark image in a bright room. What is appropriate?',
        opts: [
            'Improve lighting and camera exposure',
            'Restart Print Spooler',
            'Change the printer IP',
            'Eject the webcam'
        ],
        ans: 0,
        note: 'Camera exposure and subject lighting should be corrected before treating it as a hardware fault.'
    },

    {
        id: 'P-057',
        difficulty: 'ADVANCED',
        category: 'WEBCAM',
        q: 'A webcam driver update causes failure. What is a controlled recovery?',
        opts: [
            'Roll back the driver if the issue began after update',
            'Format the PC',
            'Change display mode',
            'Replace the printer'
        ],
        ans: 0,
        note: 'Rolling back the recently changed driver is a controlled and reversible troubleshooting action.'
    },

    {
        id: 'P-058',
        difficulty: 'INTERMEDIATE',
        category: 'WEBCAM',
        q: 'A meeting app cannot access a camera after privacy settings changed. What is needed?',
        opts: [
            'Allow camera access for the app',
            'Adjust paper orientation',
            'Change DNS',
            'Enable keystone'
        ],
        ans: 0,
        note: 'Windows camera privacy controls can block access for individual applications.'
    },


    /* =====================================================
       INPUT DEVICES
    ===================================================== */

    {
        id: 'P-059',
        difficulty: 'FOUNDATION',
        category: 'INPUT',
        q: 'A wireless mouse suddenly stops working while its receiver remains connected. What is simplest first check?',
        opts: [
            'Mouse power and battery',
            'Printer driver',
            'Projector input',
            'DNS record'
        ],
        ans: 0,
        note: 'Battery or power state is the fastest basic check for a wireless mouse.'
    },

    {
        id: 'P-060',
        difficulty: 'FOUNDATION',
        category: 'INPUT',
        q: 'A wireless keyboard types nothing but its LED is off. What should be checked?',
        opts: [
            'Power switch and batteries',
            'Print queue',
            'HDMI input',
            'Scanner resolution'
        ],
        ans: 0,
        note: 'An unlit wireless keyboard should first be checked for power and battery condition.'
    },

    {
        id: 'P-061',
        difficulty: 'INTERMEDIATE',
        category: 'INPUT',
        q: 'A keyboard types symbols instead of expected letters. What should be verified?',
        opts: [
            'Keyboard layout and input language',
            'Printer IP',
            'Projector focus',
            'Microphone permission'
        ],
        ans: 0,
        note: 'An incorrect input language or keyboard layout can change the characters produced by keys.'
    },

    {
        id: 'P-062',
        difficulty: 'FOUNDATION',
        category: 'INPUT',
        q: 'A mouse works on a different surface but not a glass desk. What is likely?',
        opts: [
            'Optical tracking surface limitation',
            'USB driver corruption',
            'Printer spooler',
            'Display resolution'
        ],
        ans: 0,
        note: 'Some optical sensors cannot reliably track on transparent or highly reflective surfaces.'
    },

    {
        id: 'P-063',
        difficulty: 'FOUNDATION',
        category: 'INPUT',
        q: 'Num Lock changes numeric key behaviour. What should be checked?',
        opts: [
            'Num Lock state',
            'Default printer',
            'Camera privacy',
            'Projector lamp'
        ],
        ans: 0,
        note: 'Num Lock controls the behaviour of the numeric keypad on many keyboards.'
    },

    {
        id: 'P-064',
        difficulty: 'INTERMEDIATE',
        category: 'INPUT',
        q: 'A Bluetooth keyboard will not pair. What should be checked?',
        opts: [
            'Bluetooth enabled and pairing mode',
            'Paper size',
            'Print density',
            'HDMI audio'
        ],
        ans: 0,
        note: 'Bluetooth must be enabled and the keyboard placed into pairing mode before discovery can succeed.'
    },

    {
        id: 'P-065',
        difficulty: 'INTERMEDIATE',
        category: 'INPUT',
        q: 'A USB keyboard is missing from Device Manager. What is a useful test?',
        opts: [
            'Another port and a known-good keyboard',
            'Change DNS',
            'Adjust keystone',
            'Restart the printer'
        ],
        ans: 0,
        note: 'Cross-testing the port and keyboard helps distinguish device failure from USB-port failure.'
    },


    /* =====================================================
       NETWORK PRINTER
    ===================================================== */

    {
        id: 'P-066',
        difficulty: 'INTERMEDIATE',
        category: 'NETWORK PRINTER',
        q: 'A network printer has no response from one PC but works elsewhere. What should be checked first?',
        opts: [
            'Affected PC connectivity and printer port',
            'Projector focus',
            'Microphone gain',
            'Mouse battery'
        ],
        ans: 0,
        note: 'Because the printer works for other devices, focus first on the affected PC and its configured printer connection.'
    },

    {
        id: 'P-067',
        difficulty: 'ADVANCED',
        category: 'NETWORK PRINTER',
        q: 'A printer web page opens by IP but Windows jobs remain stuck. Which component is now most suspect?',
        opts: [
            'Local queue, Spooler or printer driver',
            'HDMI cable',
            'Scanner glass',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'Network reachability is confirmed, so local Windows printing components become the primary suspects.'
    },

    {
        id: 'P-068',
        difficulty: 'ADVANCED',
        category: 'NETWORK PRINTER',
        q: 'A printer IP changed after DHCP renewal. What should be corrected?',
        opts: [
            'The configured printer port or reservation',
            'Projector resolution',
            'Audio playback',
            'Webcam permission'
        ],
        ans: 0,
        note: 'A changed printer IP can invalidate a static Windows printer port; use the correct port or DHCP reservation.'
    },

    {
        id: 'P-069',
        difficulty: 'INTERMEDIATE',
        category: 'NETWORK PRINTER',
        q: 'A PC can ping a printer but cannot print. What should be checked next?',
        opts: [
            'Driver, port protocol and queue',
            'USB hub power',
            'Screen mode',
            'Mouse battery'
        ],
        ans: 0,
        note: 'Successful ping confirms IP reachability but not printer driver, port or queue operation.'
    },

    {
        id: 'P-070',
        difficulty: 'ADVANCED',
        category: 'NETWORK PRINTER',
        q: 'A shared network printer prompts repeatedly for credentials. What should be reviewed?',
        opts: [
            'Share permissions and saved credentials',
            'Paper orientation',
            'Projector keystone',
            'Microphone mute'
        ],
        ans: 0,
        note: 'Repeated authentication prompts can result from incorrect saved credentials or share permissions.'
    },

    {
        id: 'P-071',
        difficulty: 'ADVANCED',
        category: 'NETWORK PRINTER',
        q: 'Only one subnet cannot reach a network printer. What is relevant?',
        opts: [
            'Routing and firewall rules',
            'Print density',
            'Keyboard layout',
            'Camera selection'
        ],
        ans: 0,
        note: 'A subnet-specific failure points toward routing, ACL or firewall policy rather than the printer itself.'
    },

    {
        id: 'P-072',
        difficulty: 'INTERMEDIATE',
        category: 'NETWORK PRINTER',
        q: 'A printer hostname fails but its IP works. What should be investigated?',
        opts: [
            'DNS or hostname resolution',
            'Projector input',
            'USB safe removal',
            'Audio jack'
        ],
        ans: 0,
        note: 'Successful access by IP but not hostname indicates a name-resolution issue.'
    },

    {
        id: 'P-073',
        difficulty: 'INTERMEDIATE',
        category: 'NETWORK PRINTER',
        q: 'A new PC needs a network printer. What is the best controlled setup?',
        opts: [
            'Install approved driver and add the correct IP/port',
            'Change the gateway randomly',
            'Disable the firewall permanently',
            'Replace the monitor'
        ],
        ans: 0,
        note: 'Use the approved printer driver and correct network port rather than weakening unrelated security controls.'
    },


    /* =====================================================
       SCANNER
    ===================================================== */

    {
        id: 'P-074',
        difficulty: 'FOUNDATION',
        category: 'SCANNER',
        q: 'A USB scanner is powered but absent from the scan app. What should be checked?',
        opts: [
            'USB connection and scanner driver',
            'Printer toner',
            'Projector input',
            'Mouse battery'
        ],
        ans: 0,
        note: 'Verify scanner detection and driver status when the hardware is powered but unavailable to the application.'
    },

    {
        id: 'P-075',
        difficulty: 'FOUNDATION',
        category: 'SCANNER',
        q: 'A scan is too large to email. What setting can reduce it?',
        opts: [
            'Resolution or output compression',
            'Print Spooler',
            'DHCP lease',
            'Keyboard layout'
        ],
        ans: 0,
        note: 'Reducing scan resolution or increasing compression lowers file size.'
    },

    {
        id: 'P-076',
        difficulty: 'ADVANCED',
        category: 'SCANNER',
        q: 'A network scanner works for one user but not another. What should be reviewed?',
        opts: [
            'App profile and network permissions',
            'Projector focus',
            'USB hub power',
            'Audio output'
        ],
        ans: 0,
        note: 'User-specific profile configuration or permissions can explain why a shared scanner works for one account only.'
    },

    {
        id: 'P-077',
        difficulty: 'FOUNDATION',
        category: 'SCANNER',
        q: 'A scanned page is rotated. What should be changed?',
        opts: [
            'Orientation or document feeder settings',
            'Printer IP',
            'Camera permission',
            'Display mode'
        ],
        ans: 0,
        note: 'Scan orientation and feeder settings determine how the resulting page is rotated.'
    },

    {
        id: 'P-078',
        difficulty: 'INTERMEDIATE',
        category: 'SCANNER',
        q: 'A scanner creates blank pages from the feeder. What should be inspected?',
        opts: [
            'Document placement and feeder glass',
            'DNS cache',
            'Mouse receiver',
            'HDMI adapter'
        ],
        ans: 0,
        note: 'Incorrect document placement or dirty feeder scanning surfaces can cause blank output.'
    },


    /* =====================================================
       HELP DESK / ICT SUPPORT
    ===================================================== */

    {
        id: 'P-079',
        difficulty: 'FOUNDATION',
        category: 'HELP DESK',
        q: 'A user says the projector is not working. What is the best first action?',
        opts: [
            'Gather symptoms and verify power, cables and display setup',
            'Reinstall Windows',
            'Replace the motherboard',
            'Delete the user profile'
        ],
        ans: 0,
        note: 'Start by clarifying the symptoms and checking the simplest physical and configuration causes.'
    },

    {
        id: 'P-080',
        difficulty: 'INTERMEDIATE',
        category: 'HELP DESK',
        q: 'A device issue cannot be reproduced at the desk. What should the technician do?',
        opts: [
            'Record exact conditions and reproduce with the user',
            'Change DNS randomly',
            'Replace every cable',
            'Disable security controls'
        ],
        ans: 0,
        note: 'Reproducing the original conditions with the user provides useful evidence instead of guessing.'
    },

    {
        id: 'P-081',
        difficulty: 'FOUNDATION',
        category: 'HELP DESK',
        q: 'After a peripheral repair, what confirms the fix?',
        opts: [
            'Repeat the original task and verify expected output',
            'Close the ticket immediately',
            'Delete event logs',
            'Change the wallpaper'
        ],
        ans: 0,
        note: 'A repair is verified by repeating the original task and confirming that the expected result is restored.'
    },

    {
        id: 'P-082',
        difficulty: 'INTERMEDIATE',
        category: 'HELP DESK',
        q: 'A classroom device fails before a lesson. Which fix should be preferred?',
        opts: [
            'Least disruptive verified workaround',
            'Factory reset first',
            'Replace unrelated hardware',
            'Disable all updates'
        ],
        ans: 0,
        note: 'Use the least disruptive verified workaround to restore service while preserving a path to proper repair.'
    },

    {
        id: 'P-083',
        difficulty: 'FOUNDATION',
        category: 'HELP DESK',
        q: 'A support ticket lacks the device model and error. What should be requested?',
        opts: [
            'Asset details, symptoms and exact error',
            'The user password',
            'A new monitor',
            'The browser theme'
        ],
        ans: 0,
        note: 'Device identity, symptoms and exact errors are useful diagnostic information and avoid unnecessary credential collection.'
    },

    {
        id: 'P-084',
        difficulty: 'INTERMEDIATE',
        category: 'HELP DESK',
        q: 'A repaired printer works but the solution is undocumented. What should happen?',
        opts: [
            'Document the cause, action and verification',
            'Remove the driver',
            'Clear all logs',
            'Disable sharing'
        ],
        ans: 0,
        note: 'Documenting the cause and verified solution supports future incidents and team knowledge sharing.'
    },

    {
        id: 'P-085',
        difficulty: 'ADVANCED',
        category: 'HELP DESK',
        q: 'Two users report the same peripheral failure. What is useful?',
        opts: [
            'Compare common power, cabling and environment factors',
            'Change both passwords',
            'Replace both PCs',
            'Ignore the pattern'
        ],
        ans: 0,
        note: 'A shared failure pattern can reveal a common infrastructure, power, cabling or environmental cause.'
    }

];


/* =========================================================
   VALIDATION
========================================================= */

const peripheralQuestionIds =
    peripheralQuestions.map(q => q.id);

const peripheralUniqueIds =
    new Set(peripheralQuestionIds);


if (
    peripheralUniqueIds.size !==
    peripheralQuestions.length
) {

    console.error(
        '[ICT TECH OPS] Module 04 duplicate question ID detected!'
    );

}


/* =========================================================
   SEMANTIC / TEXT DUPLICATE BASIC CHECK
========================================================= */

const peripheralQuestionTexts =
    peripheralQuestions.map(
        q => q.q.trim().toLowerCase()
    );

const peripheralUniqueTexts =
    new Set(peripheralQuestionTexts);


if (
    peripheralUniqueTexts.size !==
    peripheralQuestions.length
) {

    console.warn(
        '[ICT TECH OPS] Module 04 duplicate question text detected!'
    );

}


/* =========================================================
   CONSOLE CONFIRMATION
========================================================= */

console.log(
    `[ICT TECH OPS] Module 04 loaded: ${peripheralQuestions.length} unique questions`
);