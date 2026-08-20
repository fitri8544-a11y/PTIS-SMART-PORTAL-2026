/* =========================================================
   ICT TECH OPS
   AUDIO SYSTEM V2
========================================================= */

const ICTAudio = (() => {

    let audioContext = null;
    let masterGain = null;

    let audioEnabled =
        localStorage.getItem("ictAudioEnabled") !== "false";

    let ambienceTimer = null;


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function init() {

        if (audioContext) return;

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            console.warn("Web Audio API not supported.");
            return;
        }

        audioContext =
            new AudioContext();

        masterGain =
            audioContext.createGain();

        masterGain.gain.value =
            audioEnabled ? 0.45 : 0;

        masterGain.connect(
            audioContext.destination
        );

    }


    /* =====================================================
       RESUME AUDIO
    ===================================================== */

    function resume() {

        init();

        if (
            audioContext &&
            audioContext.state === "suspended"
        ) {
            audioContext.resume();
        }

    }


    /* =====================================================
       BASIC TONE
    ===================================================== */

    function tone(
        frequency = 440,
        duration = 0.1,
        type = "sine",
        volume = 0.15,
        delay = 0
    ) {

        if (!audioEnabled) return;

        resume();

        if (!audioContext) return;

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = type;

        oscillator.frequency.value =
            frequency;

        gain.gain.value = 0;

        oscillator.connect(gain);

        gain.connect(masterGain);

        const start =
            audioContext.currentTime + delay;

        gain.gain.setValueAtTime(
            0,
            start
        );

        gain.gain.linearRampToValueAtTime(
            volume,
            start + 0.01
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            start + duration
        );

        oscillator.start(start);

        oscillator.stop(
            start + duration + 0.03
        );

    }


    /* =====================================================
       BUTTON CLICK
    ===================================================== */

    function click() {

        tone(
            650,
            0.055,
            "sine",
            0.09
        );

        tone(
            900,
            0.04,
            "sine",
            0.05,
            0.035
        );

    }


    /* =====================================================
       CORRECT ANSWER
    ===================================================== */

    function correct() {

        tone(
            523.25,
            0.12,
            "sine",
            0.14
        );

        tone(
            659.25,
            0.12,
            "sine",
            0.14,
            0.08
        );

        tone(
            783.99,
            0.20,
            "sine",
            0.16,
            0.16
        );

    }


    /* =====================================================
       WRONG ANSWER
    ===================================================== */

    function wrong() {

        tone(
            220,
            0.16,
            "square",
            0.08
        );

        tone(
            174.61,
            0.22,
            "square",
            0.07,
            0.12
        );

    }


    /* =====================================================
       TIMER WARNING
    ===================================================== */

    function warning() {

        tone(
            880,
            0.06,
            "square",
            0.07
        );

    }


    /* =====================================================
       TIME OUT
    ===================================================== */

    function timeout() {

        tone(
            330,
            0.12,
            "sawtooth",
            0.08
        );

        tone(
            220,
            0.30,
            "sawtooth",
            0.08,
            0.12
        );

    }


    /* =====================================================
       MODULE COMPLETE
    ===================================================== */

    function moduleComplete() {

        const notes = [
            523.25,
            659.25,
            783.99,
            1046.50
        ];

        notes.forEach(
            (frequency, index) => {

                tone(
                    frequency,
                    0.22,
                    "sine",
                    0.15,
                    index * 0.12
                );

            }
        );

    }


    /* =====================================================
       ALL MODULES COMPLETE
    ===================================================== */

    function allComplete() {

        const melody = [
            523.25,
            659.25,
            783.99,
            1046.50,
            783.99,
            1046.50
        ];

        melody.forEach(
            (frequency, index) => {

                tone(
                    frequency,
                    0.28,
                    "triangle",
                    0.16,
                    index * 0.14
                );

            }
        );

    }


/* =====================================================
   BACKGROUND TECH AMBIENCE — BOOSTED
===================================================== */

function ambiencePulse() {

    if (!audioEnabled) {
        return;
    }

    resume();

    if (!audioContext) {
        return;
    }


    /* LOW DIGITAL HUM */

    tone(
        82.41,
        3.2,
        "sine",
        0.065
    );


    /* SECOND AMBIENT LAYER */

    tone(
        123.47,
        2.8,
        "sine",
        0.050,
        0.15
    );


    /* MID TECH ATMOSPHERE */

    tone(
        196.00,
        1.8,
        "triangle",
        0.030,
        0.35
    );


    /* DIGITAL TECH PULSE */

    tone(
        329.63,
        0.10,
        "sine",
        0.055,
        0.80
    );


    /* DATA PULSE */

    tone(
        392.00,
        0.08,
        "sine",
        0.045,
        1.60
    );


    /* HIGH DIGITAL SIGNAL */

    tone(
        523.25,
        0.06,
        "sine",
        0.025,
        2.30
    );

}

function startAmbience() {

    if (!audioEnabled) {
        return;
    }

    stopAmbience();

    ambiencePulse();


    ambienceTimer =
        setInterval(
            () => {

                ambiencePulse();

            },
            6500
        );

}


    function stopAmbience() {

        if (ambienceTimer) {

            clearInterval(
                ambienceTimer
            );

            ambienceTimer = null;

        }

    }


    /* =====================================================
       AUDIO ON / OFF
    ===================================================== */

    function setEnabled(value) {

        audioEnabled = value;

        localStorage.setItem(
            "ictAudioEnabled",
            audioEnabled
        );

        resume();

        if (masterGain) {

            masterGain.gain.setTargetAtTime(
                audioEnabled ? 0.45 : 0,
                audioContext.currentTime,
                0.03
            );

        }

        if (audioEnabled) {

            click();
            startAmbience();

        } else {

            stopAmbience();

        }

        updateButton();

    }


    function toggle() {

        setEnabled(
            !audioEnabled
        );

        return audioEnabled;

    }


    /* =====================================================
       UPDATE AUDIO BUTTON
    ===================================================== */

    function updateButton() {

        const button =
            document.getElementById(
                "audioToggle"
            );

        if (!button) return;

        button.textContent =
            audioEnabled
                ? "AUDIO ON"
                : "AUDIO OFF";

    }


    /* =====================================================
       CHECK STATUS
    ===================================================== */

    function isEnabled() {

        return audioEnabled;

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    return {

        init,
        resume,

        click,
        correct,
        wrong,
        warning,
        timeout,

        moduleComplete,
        allComplete,

        startAmbience,
        stopAmbience,

        toggle,
        setEnabled,
        updateButton,
        isEnabled

    };

})();


/* =========================================================
   FIRST USER INTERACTION
========================================================= */

document.addEventListener(
    "pointerdown",
    () => {

        ICTAudio.resume();

        if (
            ICTAudio.isEnabled()
        ) {

            ICTAudio.startAmbience();

        }

    },
    {
        once: true
    }
);


/* =========================================================
   INITIAL BUTTON STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        ICTAudio.updateButton();

    }
);