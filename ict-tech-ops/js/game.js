/* =========================================================
   ICT TECH OPS
   STANDALONE GAME ENGINE
========================================================= */


/* =========================================================
   MODULE CONFIGURATION
========================================================= */

const modules = [
    {
        id: 1,
        name: "Hardware Diagnostics",
        icon: "cpu"
    },
    {
        id: 2,
        name: "Network Operations",
        icon: "wifi"
    },
    {
        id: 3,
        name: "Operating System & Software",
        icon: "monitor"
    },
    {
        id: 4,
        name: "Peripherals & ICT Support",
        icon: "printer"
    },
    {
        id: 5,
        name: "Cybersecurity Awareness",
        icon: "shield"
    },
    {
        id: 6,
        name: "ICT Incident Response",
        icon: "triangle-alert"
    }
];


/* =========================================================
   GAME STATE
========================================================= */

let state = {

    timer: null,

    unlocked: [1],

    completed: {},

    scores: {},

    currentQ: 0,

    currentModule: 1,

    sessionQuestions: [],

    usedQuestionIds: [],

    score: 0,

    health: 100,

    streak: 0,

    answers: [],

    questionTimes: [],

    totalTime: 0,

    timeLeft: 0,

    timerInterval: null,

    answerLocked: false,

    audioOn: false
};


/* =========================================================
   LOCAL STORAGE
========================================================= */

const STORAGE_KEY =
    "ict_techops_standalone";


function loadState() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return;
        }

        const data =
            JSON.parse(saved);

        state.timer =
            data.timer ?? null;

        state.unlocked =
            Array.isArray(data.unlocked)
                ? data.unlocked
                : [1];

        state.completed =
            data.completed || {};

        state.scores =
            data.scores || {};

    }

    catch (error) {

        console.warn(
            "[ICT TECH OPS] Unable to load progress:",
            error
        );

    }

}


function saveState() {

    try {

        const data = {

            timer:
                state.timer,

            unlocked:
                state.unlocked,

            completed:
                state.completed,

            scores:
                state.scores

        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    }

    catch (error) {

        console.warn(
            "[ICT TECH OPS] Unable to save progress:",
            error
        );

    }

}


/* =========================================================
   RESET GAME PROGRESS
========================================================= */

function resetProgress() {

    /* =====================================================
       CLOSE RESET MODAL
    ===================================================== */

    hideModal(
        "modal-reset"
    );


    /* =====================================================
       STOP ACTIVE TIMER
    ===================================================== */

    clearGameTimer();


    /* =====================================================
       RESET GAME PROGRESS
    ===================================================== */

    state.currentModule = null;

    state.score = 0;

    state.health = 100;

    state.streak = 0;

    state.currentQ = 0;

    state.sessionQuestions = [];

    state.usedQuestionIds = [];

    state.answers = [];

    state.questionTimes = [];

    state.totalTime = 0;

    state.timeLeft = 0;

    state.answerLocked = false;


    /* =====================================================
       RESET MODULE ACCESS

       Module 01 available.
       Module 02–06 locked.
    ===================================================== */

    state.unlocked = [
        1
    ];


    /* =====================================================
       RESET COMPLETED MODULES
    ===================================================== */

    state.completed = {};


    /* =====================================================
       RESET BEST SCORES
    ===================================================== */

    state.scores = {};


    /* =====================================================
       SAVE CLEAN PROGRESS
    ===================================================== */

    saveState();


    /* =====================================================
       AUDIO FEEDBACK
    ===================================================== */

    if (
        typeof ICTAudio !==
        "undefined"
    ) {

        ICTAudio.click();

    }


    /* =====================================================
       REFRESH OPERATIONS CENTER
    ===================================================== */

    renderOps();


    /* =====================================================
       RETURN TO MAIN MENU
    ===================================================== */

    showScreen(
        "screen-menu"
    );

}


/* =========================================================
   SCREEN SYSTEM
========================================================= */

function showScreen(id) {

    clearGameTimer();

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

            screen.style.display =
                "none";

        });


    const next =
        document.getElementById(id);


    if (!next) {

        console.error(
            `[ICT TECH OPS] Screen not found: ${id}`
        );

        return;

    }


    next.style.display =
        "flex";

    next.classList.add(
        "active"
    );

}


/* =========================================================
   MODALS
========================================================= */

function showModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }


    if (
        id ===
        "modal-achievements"
    ) {

        renderAchievements();

    }


    modal.style.display =
        "flex";

}


function hideModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.style.display =
        "none";

}


/* =========================================================
   AUDIO CONTROL
========================================================= */

function toggleAudio() {

    // Toggle Audio System V2
    const enabled =
        ICTAudio.toggle();

    // Sync dengan state game
    state.audioOn =
        enabled;

    // Update button sedia ada
    const button =
        document.getElementById(
            "btn-audio"
        );

    if (button) {

        button.textContent =
            enabled
                ? "AUDIO ON"
                : "AUDIO OFF";

    }

}


/* =========================================================
   TIMER SELECTION
========================================================= */

function selectTimer(seconds) {

    if (
        ![45, 30, 20, 10]
            .includes(seconds)
    ) {

        return;

    }


    state.timer =
        seconds;


    saveState();

    renderOps();

    showScreen(
        "screen-ops"
    );

}


/* =========================================================
   OPERATIONS CENTER
========================================================= */

function renderOps() {

    const grid =
        document.getElementById(
            "module-grid"
        );

    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    modules.forEach(module => {

        const unlocked =
            state.unlocked.includes(
                module.id
            );


        const completed =
            !!state.completed[
                module.id
            ];


        const card =
            document.createElement(
                "div"
            );


        /* =====================================================
           CARD CLASS
        ===================================================== */

        card.className =
            "module-card glass " +
            (
                unlocked
                    ? "available"
                    : "locked"
            ) +
            (
                completed
                    ? " complete"
                    : ""
            );


        /* =====================================================
           STATUS
        ===================================================== */

        let status = "";


        if (completed) {

            status = `
                <span
                    class="
                        ml-auto
                        text-xs
                        text-green-400
                        mono
                    "
                >
                    ✓ COMPLETE
                </span>
            `;

        }

        else if (!unlocked) {

            status = `
                <span
                    class="
                        ml-auto
                        text-xs
                        text-gray-600
                        mono
                    "
                >
                    LOCKED
                </span>
            `;

        }


        /* =====================================================
           ACTION TEXT
        ===================================================== */

        let actionText = "";


        if (unlocked) {

            if (completed) {

                actionText = `
                    <div
                        class="
                            mt-3
                            text-xs
                            text-green-400
                            mono
                        "
                    >
                        REPLAY MODULE →
                    </div>
                `;

            }

            else {

                actionText = `
                    <div
                        class="
                            mt-3
                            text-xs
                            text-cyan-400
                            mono
                        "
                    >
                        AVAILABLE →
                    </div>
                `;

            }

        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        card.innerHTML = `

            <div
                class="
                    flex
                    items-center
                    gap-3
                    mb-3
                "
            >

                <i
                    data-lucide="${module.icon}"
                    class="
                        w-5
                        h-5
                        ${
                            unlocked
                                ? completed
                                    ? "text-green-400"
                                    : "text-cyan-400"
                                : "text-gray-600"
                        }
                    "
                ></i>


                <span
                    class="
                        mono
                        text-xs
                        ${
                            unlocked
                                ? completed
                                    ? "text-green-400"
                                    : "text-cyan-400"
                                : "text-gray-600"
                        }
                    "
                >
                    ${
                        String(
                            module.id
                        ).padStart(
                            2,
                            "0"
                        )
                    }
                </span>


                ${status}

            </div>


            <h3
                class="
                    font-semibold
                    ${
                        unlocked
                            ? "text-gray-100"
                            : "text-gray-600"
                    }
                "
            >
                ${module.name}
            </h3>


            ${actionText}

        `;


        /* =====================================================
           CLICK MODULE

           IMPORTANT:
           Semua module yang UNLOCKED boleh dimainkan semula,
           termasuk module yang sudah COMPLETE.
        ===================================================== */

        if (unlocked) {

            card.addEventListener(
                "click",
                () => {

                    if (
                        typeof ICTAudio !==
                        "undefined"
                    ) {

                        ICTAudio.click();

                    }


                    startModule(
                        module.id
                    );

                }
            );

        }


        grid.appendChild(
            card
        );

    });


    /* =====================================================
       REFRESH LUCIDE ICONS
    ===================================================== */

    if (
        window.lucide
    ) {

        lucide.createIcons();

    }

}


/* =========================================================
   QUESTION BANK SELECTOR
========================================================= */

function getQuestionBank(
    moduleId
) {

    switch (moduleId) {

        case 1:

            return typeof hwQuestions !==
                "undefined"
                    ? hwQuestions
                    : [];


        case 2:

            return typeof networkQuestions !==
                "undefined"
                    ? networkQuestions
                    : [];


        case 3:

            return typeof systemQuestions !==
                "undefined"
                    ? systemQuestions
                    : [];


        case 4:

            return typeof peripheralQuestions !==
                "undefined"
                    ? peripheralQuestions
                    : [];
        
        case 5:

            return typeof cybersecurityQuestions !==
                "undefined"
                    ? cybersecurityQuestions
                    : [];

        case 6:

            return typeof incidentQuestions !==
                "undefined"
                    ? incidentQuestions
                    : [];


        default:

            return [];

    }

}


/* =========================================================
   QUESTION VALIDATION
========================================================= */

function isValidQuestion(q) {

    return (

        !!q &&

        typeof q.id ===
            "string" &&

        typeof q.q ===
            "string" &&

        q.q.trim() !== "" &&

        Array.isArray(
            q.opts
        ) &&

        q.opts.length === 4 &&

        q.opts.every(
            option =>
                typeof option ===
                    "string" &&
                option.trim() !== ""
        ) &&

        Number.isInteger(
            q.ans
        ) &&

        q.ans >= 0 &&

        q.ans < 4 &&

        typeof q.note ===
            "string" &&

        q.note.trim() !== ""

    );

}


/* =========================================================
   SHUFFLE
========================================================= */

function fisherYates(
    items
) {

    const copy =
        items.slice();


    for (
        let i =
            copy.length - 1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


/* =========================================================
   UNIQUE SESSION GENERATOR
========================================================= */

function createSessionQuestions(
    moduleId
) {

    const bank =
        getQuestionBank(
            moduleId
        )
        .filter(
            isValidQuestion
        );


    if (!bank.length) {

        return [];

    }


    const uniqueById =
        new Map();


    bank.forEach(question => {

        if (
            !uniqueById.has(
                question.id
            )
        ) {

            uniqueById.set(
                question.id,
                question
            );

        }

    });


    const uniqueQuestions =
        Array.from(
            uniqueById.values()
        );


    const shuffled =
        fisherYates(
            uniqueQuestions
        );


    const amount =
        Math.min(
            20,
            shuffled.length
        );


    const selected =
        shuffled.slice(
            0,
            amount
        );


    return selected.map(
        question => {

            const shuffledOptions =
                fisherYates(
                    question.opts.map(
                        (
                            option,
                            originalIndex
                        ) => ({
                            option,
                            originalIndex
                        })
                    )
                );


            const newCorrectIndex =
                shuffledOptions
                    .findIndex(
                        item =>
                            item.originalIndex ===
                            question.ans
                    );


            return {

                ...question,

                opts:
                    shuffledOptions.map(
                        item =>
                            item.option
                    ),

                ans:
                    newCorrectIndex

            };

        }
    );

}


/* =========================================================
   START MODULE
========================================================= */

function startModule(
    moduleId
) {

    if (
        !state.unlocked.includes(
            moduleId
        )
    ) {

        return;

    }


    const questions =
        createSessionQuestions(
            moduleId
        );


    if (
        questions.length === 0
    ) {

        alert(
            "Question bank for this module is unavailable."
        );

        return;

    }


    state.currentModule =
        moduleId;

    state.currentQ =
        0;

    state.sessionQuestions =
        questions;

    state.usedQuestionIds =
        questions.map(
            question =>
                question.id
        );

    state.score =
        0;

    state.health =
        100;

    state.streak =
        0;

    state.answers =
        [];

    state.questionTimes =
        [];

    state.totalTime =
        0;

    state.answerLocked =
        false;


    updateModuleHUD();


    showScreen(
        "screen-game"
    );


    showQuestion();

}


/* =========================================================
   UPDATE MODULE HUD
========================================================= */

function updateModuleHUD() {

    const moduleElement =
        document.getElementById(
            "hud-module"
        );


    if (!moduleElement) {
        return;
    }


    moduleElement.textContent =
        `MODULE ${
            String(
                state.currentModule
            ).padStart(
                2,
                "0"
            )
        }`;

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    clearGameTimer();


    if (
        state.currentQ >=
        state.sessionQuestions.length
    ) {

        endModule();

        return;

    }


    const question =
        state.sessionQuestions[
            state.currentQ
        ];


    if (
        !isValidQuestion(
            question
        )
    ) {

        state.currentQ++;

        showQuestion();

        return;

    }


    state.answerLocked =
        false;


    const incident =
        document.getElementById(
            "q-incident"
        );

    const category =
        document.getElementById(
            "q-category"
        );

    const priority =
        document.getElementById(
            "q-priority"
        );

    const questionText =
        document.getElementById(
            "q-text"
        );


    if (incident) {

        incident.textContent =
            getIncidentLabel(
                question
            );

    }


    if (category) {

        category.textContent =
            `CATEGORY: ${
                question.category ||
                getDefaultCategory()
            }`;

    }


    if (priority) {

        const p =
            getPriority(
                question
            );


        priority.textContent =
            p;


        priority.className =
            "px-2 py-0.5 rounded text-xs font-bold";


        if (
            p === "HIGH"
        ) {

            priority.classList.add(
                "priority-high"
            );

        }

        else if (
            p === "MEDIUM"
        ) {

            priority.classList.add(
                "priority-medium"
            );

        }

        else {

            priority.classList.add(
                "priority-low"
            );

        }

    }


    if (questionText) {

        questionText.textContent =
            question.q;

    }


    renderAnswers(
        question
    );


    updateHUD();


    const questionArea =
        document.getElementById(
            "question-area"
        );

    const feedbackArea =
        document.getElementById(
            "feedback-area"
        );


    if (questionArea) {

        questionArea.classList.remove(
            "hidden"
        );

    }


    if (feedbackArea) {

        feedbackArea.classList.add(
            "hidden"
        );

    }


    startGameTimer();

}


/* =========================================================
   INCIDENT LABEL
========================================================= */

function getIncidentLabel(
    question
) {

    let prefix =
        "INCIDENT";


    if (
        state.currentModule === 2
    ) {

        prefix =
            "NETWORK ALERT";

    }

    else if (
        state.currentModule === 3
    ) {

        prefix =
            "SYSTEM ALERT";

    }

    else if (
        state.currentModule === 4
    ) {

        prefix =
            question.category ||
            "SUPPORT TICKET";

    }


    return `${prefix} #${question.id}`;

}


/* =========================================================
   DEFAULT CATEGORY
========================================================= */

function getDefaultCategory() {

    switch (
        state.currentModule
    ) {

        case 1:
            return "HARDWARE";

        case 2:
            return "NETWORK";

        case 3:
            return "SYSTEM";

        case 4:
            return "ICT SUPPORT";

        default:
            return "ICT";

    }

}


/* =========================================================
   PRIORITY
========================================================= */

function getPriority(
    question
) {

    if (
        question.priority
    ) {

        return question.priority;

    }


    switch (
        question.difficulty
    ) {

        case "FOUNDATION":
            return "LOW";

        case "ADVANCED":
            return "HIGH";

        default:
            return "MEDIUM";

    }

}


/* =========================================================
   ANSWER BUTTONS
========================================================= */

function renderAnswers(
    question
) {

    const container =
        document.getElementById(
            "q-options"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    const labels =
        [
            "A",
            "B",
            "C",
            "D"
        ];


    question.opts.forEach(
        (
            option,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-option";


            button.innerHTML = `
                <span
                    class="
                        mono
                        text-cyan-400
                        mr-2
                    "
                >
                    ${labels[index]}.
                </span>
                ${option}
            `;


            button.addEventListener(
                "click",
                () => {

                    submitAnswer(
                        index
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   HUD
========================================================= */

function updateHUD() {

    setText(
        "hud-score",
        state.score
    );


    setText(
        "hud-health",
        state.health + "%"
    );


    setText(
        "hud-streak",
        state.streak
    );


    setText(
        "hud-progress",
        `${
            state.currentQ + 1
        }/${
            state.sessionQuestions.length
        }`
    );


    const healthElement =
        document.getElementById(
            "hud-health"
        );


    if (healthElement) {

        healthElement.className =
            state.health > 50
                ? "text-green-400"
                : state.health > 20
                    ? "text-amber-400"
                    : "text-red-400";

    }

}


/* =========================================================
   TIMER
========================================================= */

function startGameTimer() {

    if (
        !state.timer
    ) {

        state.timer =
            30;

    }


    state.timeLeft =
        state.timer;


    const timerElement =
        document.getElementById(
            "hud-timer"
        );


    if (timerElement) {

        timerElement.textContent =
            state.timeLeft;


        timerElement.className =
            "text-cyan-300 text-base font-bold";

    }


    clearGameTimer();


    state.timerInterval =
        setInterval(
            () => {

                state.timeLeft--;


                if (
                    state.timeLeft < 0
                ) {

                    state.timeLeft =
                        0;

                }


                if (
                    timerElement
                ) {

                    timerElement.textContent =
                        state.timeLeft;


                    if (
                        state.timeLeft <= 5 &&
                        state.timeLeft > 0
                    ) {

                        timerElement.className =
                            "text-red-400 text-base font-bold pulse-red";

                        if (
                            typeof ICTAudio !==
                            "undefined"
                        ) {

                            ICTAudio.warning();

                        }

                }

                }


                if (
                    state.timeLeft <= 0
                ) {

                    clearGameTimer();

                    handleTimeout();

                }

            },
            1000
        );

}


/* =========================================================
   CLEAR TIMER
========================================================= */

function clearGameTimer() {

    if (
        state.timerInterval
    ) {

        clearInterval(
            state.timerInterval
        );

        state.timerInterval =
            null;

    }

}


/* =========================================================
   TIMEOUT
========================================================= */

function handleTimeout() {

    if (
        state.answerLocked
    ) {

        return;

    }


    state.answerLocked =
        true;
    
    if (
        typeof ICTAudio !==
        "undefined"
    ) {

        ICTAudio.timeout();

    }


    disableAnswerButtons();


    state.health =
        Math.max(
            0,
            state.health - 10
        );


    state.streak =
        0;


    state.answers.push(
        false
    );


    state.questionTimes.push(
        state.timer
    );


    const question =
        state.sessionQuestions[
            state.currentQ
        ];


    showFeedback(
        false,
        question,
        true
    );

}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

function submitAnswer(
    selectedIndex
) {

    if (
        state.answerLocked
    ) {

        return;

    }


    state.answerLocked =
        true;


    clearGameTimer();


    const question =
        state.sessionQuestions[
            state.currentQ
        ];


    if (!question) {
        return;
    }


    const elapsed =
        Math.max(
            0,
            state.timer -
            state.timeLeft
        );


    state.questionTimes.push(
        elapsed
    );


    state.totalTime +=
        elapsed;


    const correct =
        selectedIndex ===
        question.ans;


    const buttons =
        document.querySelectorAll(
            "#q-options .answer-option"
        );


    buttons.forEach(
        (
            button,
            index
        ) => {

            button.disabled =
                true;


            if (
                index ===
                question.ans
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index ===
                    selectedIndex &&
                !correct
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    if (correct) {

    /* ================= AUDIO ================= */

    if (
        typeof ICTAudio !==
        "undefined"
    ) {

        ICTAudio.correct();

    }


    /* ================= SCORE ================= */

    state.score +=
        100;


    if (
        elapsed <=
        state.timer *
            0.30
    ) {

        state.score +=
            25;

    }


    /* ================= STREAK ================= */

    state.streak++;

}

else {

    /* ================= AUDIO ================= */

    if (
        typeof ICTAudio !==
        "undefined"
    ) {

        ICTAudio.wrong();

    }


    /* ================= HEALTH ================= */

    state.health =
        Math.max(
            0,
            state.health - 10
        );


    /* ================= RESET STREAK ================= */

    state.streak =
        0;

}


    state.answers.push(
        correct
    );


    updateHUD();


    setTimeout(
        () => {

            showFeedback(
                correct,
                question,
                false
            );

        },
        450
    );

}


/* =========================================================
   DISABLE ANSWERS
========================================================= */

function disableAnswerButtons() {

    document
        .querySelectorAll(
            "#q-options .answer-option"
        )
        .forEach(
            button => {

                button.disabled =
                    true;

            }
        );

}


/* =========================================================
   FEEDBACK
========================================================= */

function showFeedback(
    correct,
    question,
    timedOut = false
) {

    clearGameTimer();


    const questionArea =
        document.getElementById(
            "question-area"
        );

    const feedbackArea =
        document.getElementById(
            "feedback-area"
        );


    if (questionArea) {

        questionArea.classList.add(
            "hidden"
        );

    }


    if (feedbackArea) {

        feedbackArea.classList.remove(
            "hidden"
        );

    }


    const verdict =
        document.getElementById(
            "fb-verdict"
        );


    const note =
        document.getElementById(
            "fb-note"
        );


    if (verdict) {

        if (timedOut) {

            verdict.textContent =
                "⚠ RESPONSE TIME EXPIRED";

            verdict.className =
                "text-xl font-bold mb-3 text-amber-400";

        }

        else if (correct) {

            verdict.textContent =
                "✓ CORRECT DIAGNOSIS";

            verdict.className =
                "text-xl font-bold mb-3 text-green-400";

        }

        else {

            verdict.textContent =
                "✗ INCORRECT DIAGNOSIS";

            verdict.className =
                "text-xl font-bold mb-3 text-red-400";

        }

    }


    if (note) {

        const correctAnswer =
            question.opts[
                question.ans
            ];


        note.innerHTML = `

            ${
                !correct
                    ? `
                        <div
                            class="
                                mb-3
                                text-left
                            "
                        >

                            <span
                                class="
                                    text-gray-500
                                    text-xs
                                    mono
                                "
                            >
                                CORRECT ACTION
                            </span>

                            <div
                                class="
                                    text-green-300
                                    mt-1
                                "
                            >
                                ${correctAnswer}
                            </div>

                        </div>
                    `
                    : ""
            }


            <div
                class="
                    text-left
                "
            >

                <span
                    class="
                        text-cyan-400
                        font-bold
                    "
                >
                    TECH NOTE:
                </span>

                ${question.note}

            </div>

        `;

    }


    updateHUD();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (
        !state.answerLocked
    ) {

        return;

    }


    state.currentQ++;

    state.answerLocked =
        false;


    showQuestion();

}


/* =========================================================
   END MODULE
========================================================= */

function endModule() {

    /* =====================================================
       STOP TIMER
    ===================================================== */

    clearGameTimer();


    /* =====================================================
       TOTAL QUESTIONS
    ===================================================== */

    const totalQuestions =
        state.sessionQuestions.length;


    /* =====================================================
       CORRECT ANSWERS
    ===================================================== */

    const correct =
        state.answers.filter(
            answer =>
                answer === true
        ).length;


    /* =====================================================
       ACCURACY
    ===================================================== */

    const accuracy =
        totalQuestions
            ? Math.round(
                (
                    correct /
                    totalQuestions
                ) *
                100
            )
            : 0;


    /* =====================================================
       AVERAGE RESPONSE TIME
    ===================================================== */

    const avgTime =
        state.questionTimes.length
            ? (
                state.questionTimes.reduce(
                    (
                        total,
                        value
                    ) =>
                        total +
                        value,
                    0
                ) /
                state.questionTimes.length
            ).toFixed(1)
            : "0.0";


    /* =====================================================
       MARK CURRENT MODULE COMPLETE
    ===================================================== */

    state.completed[
        state.currentModule
    ] = true;


    /* =====================================================
       SAVE BEST SCORE
    ===================================================== */

    state.scores[
        state.currentModule
    ] = Math.max(

        state.scores[
            state.currentModule
        ] || 0,

        state.score

    );


    /* =====================================================
       UNLOCK NEXT MODULE
    ===================================================== */

    unlockNextModule(
        state.currentModule
    );


    /* =====================================================
       SAVE PROGRESS
    ===================================================== */

    saveState();


    /* =====================================================
       COMPLETION AUDIO
    ===================================================== */

    if (
        typeof ICTAudio !==
        "undefined"
    ) {

        const allModulesComplete =
            modules.every(
                module =>
                    state.completed[
                        module.id
                    ] === true
            );


        if (
            allModulesComplete
        ) {

            /* Semua 6 module selesai */

            ICTAudio.allComplete();

        }

        else {

            /* Module biasa selesai */

            ICTAudio.moduleComplete();

        }

    }


    /* =====================================================
       RESULT SUMMARY
    ===================================================== */

    const summary =
        document.getElementById(
            "summary-stats"
        );


    if (summary) {

        summary.innerHTML = `

            <!-- CORRECT ANSWERS -->

            <div
                class="
                    flex
                    justify-between
                    mono
                    text-sm
                "
            >

                <span
                    class="
                        text-gray-400
                    "
                >
                    Correct Answers
                </span>

                <span
                    class="
                        text-cyan-300
                    "
                >
                    ${correct}/${totalQuestions}
                </span>

            </div>


            <!-- ACCURACY -->

            <div
                class="
                    flex
                    justify-between
                    mono
                    text-sm
                "
            >

                <span
                    class="
                        text-gray-400
                    "
                >
                    Accuracy
                </span>

                <span
                    class="
                        text-cyan-300
                    "
                >
                    ${accuracy}%
                </span>

            </div>


            <!-- AVG RESPONSE TIME -->

            <div
                class="
                    flex
                    justify-between
                    mono
                    text-sm
                "
            >

                <span
                    class="
                        text-gray-400
                    "
                >
                    Avg Response Time
                </span>

                <span
                    class="
                        text-cyan-300
                    "
                >
                    ${avgTime}s
                </span>

            </div>


            <!-- TECH SCORE -->

            <div
                class="
                    flex
                    justify-between
                    mono
                    text-sm
                "
            >

                <span
                    class="
                        text-gray-400
                    "
                >
                    Tech Score
                </span>

                <span
                    class="
                        text-cyan-300
                        font-bold
                    "
                >
                    ${state.score}
                </span>

            </div>


            <!-- SYSTEM HEALTH -->

            <div
                class="
                    flex
                    justify-between
                    mono
                    text-sm
                "
            >

                <span
                    class="
                        text-gray-400
                    "
                >
                    System Health
                </span>

                <span
                    class="
                        ${
                            state.health > 50
                                ? "text-green-400"
                                : state.health > 20
                                    ? "text-amber-400"
                                    : "text-red-400"
                        }
                    "
                >
                    ${state.health}%
                </span>

            </div>

        `;

    }


    /* =====================================================
       OPEN MODULE COMPLETE SCREEN
    ===================================================== */

    showScreen(
        "screen-complete"
    );

}


/* =========================================================
   UNLOCK NEXT MODULE
========================================================= */

function unlockNextModule(
    currentModule
) {

    const nextModule =
        currentModule + 1;


    if (
        nextModule <= 6 &&
        !state.unlocked.includes(
            nextModule
        )
    ) {

        state.unlocked.push(
            nextModule
        );

    }

}


/* =========================================================
   RETURN TO OPERATIONS CENTER
========================================================= */

function backToOps() {

    renderOps();

    showScreen(
        "screen-ops"
    );

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

    const list =
        document.getElementById(
            "achieve-list"
        );


    if (!list) {
        return;
    }


    const achievements =
        [];


    /* =====================================================
       MODULE COMPLETION ACHIEVEMENTS
    ===================================================== */

    if (
        state.completed[1]
    ) {

        achievements.push(
            "✓ Hardware Diagnostics Complete"
        );

    }


    if (
        state.completed[2]
    ) {

        achievements.push(
            "✓ Network Operations Complete"
        );

    }


    if (
        state.completed[3]
    ) {

        achievements.push(
            "✓ Operating System & Software Complete"
        );

    }


    if (
        state.completed[4]
    ) {

        achievements.push(
            "✓ Peripherals & ICT Support Complete"
        );

    }


    if (
        state.completed[5]
    ) {

        achievements.push(
            "✓ Cybersecurity Awareness Complete"
        );

    }


    if (
        state.completed[6]
    ) {

        achievements.push(
            "✓ ICT Incident Response Complete"
        );

    }


    /* =====================================================
       SPECIALIST ACHIEVEMENTS
       2000+ TECH SCORE
    ===================================================== */

    if (
        state.scores[1] >=
        2000
    ) {

        achievements.push(
            "🏆 Hardware Expert — 2000+ Tech Score"
        );

    }


    if (
        state.scores[2] >=
        2000
    ) {

        achievements.push(
            "🌐 Network Specialist — 2000+ Tech Score"
        );

    }


    if (
        state.scores[3] >=
        2000
    ) {

        achievements.push(
            "💻 System Specialist — 2000+ Tech Score"
        );

    }


    if (
        state.scores[4] >=
        2000
    ) {

        achievements.push(
            "🖨️ ICT Support Specialist — 2000+ Tech Score"
        );

    }


    if (
        state.scores[5] >=
        2000
    ) {

        achievements.push(
            "🛡️ Cyber Defender — 2000+ Tech Score"
        );

    }


    if (
        state.scores[6] >=
        2000
    ) {

        achievements.push(
            "🚨 Incident Commander — 2000+ Tech Score"
        );

    }


    /* =====================================================
       MASTER ACHIEVEMENT
       ALL 6 MODULES COMPLETE
    ===================================================== */

    const allModulesComplete =
        modules.every(
            module =>
                state.completed[
                    module.id
                ] === true
        );


    if (
        allModulesComplete
    ) {

        achievements.push(
            "⭐ MASTER TECHNICIAN — All 6 ICT Operations Modules Complete"
        );

    }


    /* =====================================================
       NO ACHIEVEMENTS
    ===================================================== */

    if (
        !achievements.length
    ) {

        achievements.push(
            "No achievements yet. Complete modules to earn them."
        );

    }


    /* =====================================================
       RENDER ACHIEVEMENTS
    ===================================================== */

    list.innerHTML =
        achievements
            .map(
                item =>
                    `<p>${item}</p>`
            )
            .join("");

}

/* =========================================================
   HELPER
========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


/* =========================================================
   MODAL BACKDROP CLOSE
========================================================= */

function setupModalBackdrop(
    id
) {

    const modal =
        document.getElementById(id);


    if (!modal) {
        return;
    }


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal
            ) {

                hideModal(id);

            }

        }
    );

}


/* =========================================================
   INITIALISE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadState();


        setupModalBackdrop(
            "modal-howto"
        );

        setupModalBackdrop(
            "modal-achievements"
        );

        
        renderOps();


        if (
            window.lucide
        ) {

            lucide.createIcons();

        }


        /* =========================================================
   FINAL ENGINE DIAGNOSTICS
========================================================= */

        console.log(
            "[ICT TECH OPS] Standalone engine ready."
        );


        console.log(
            "[ICT TECH OPS] Hardware:",
            typeof hwQuestions !==
                "undefined"
                    ? hwQuestions.length
                    : 0
        );


        console.log(
            "[ICT TECH OPS] Network:",
            typeof networkQuestions !==
                "undefined"
                    ? networkQuestions.length
                    : 0
        );


        console.log(
            "[ICT TECH OPS] System:",
            typeof systemQuestions !==
                "undefined"
                    ? systemQuestions.length
                    : 0
        );


        console.log(
            "[ICT TECH OPS] Peripherals:",
            typeof peripheralQuestions !==
                "undefined"
                    ? peripheralQuestions.length
                    : 0
        );


        console.log(
            "[ICT TECH OPS] Cybersecurity:",
            typeof cybersecurityQuestions !==
                "undefined"
                    ? cybersecurityQuestions.length
                    : 0
        );


        console.log(
            "[ICT TECH OPS] Incident Response:",
            typeof incidentQuestions !==
                "undefined"
                    ? incidentQuestions.length
                    : 0
        );

    }
);