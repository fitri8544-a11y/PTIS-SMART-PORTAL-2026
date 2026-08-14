/* =========================================================
   PTIS SMART PORTAL 2026
   MAIN APPLICATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const sidebar =
      document.getElementById("sidebar");

    const sidebarOverlay =
      document.getElementById("sidebarOverlay");

    const menuButton =
      document.getElementById("menuButton");

    const currentDate =
      document.getElementById("currentDate");

    
    /* ================= CHATBOT ELEMENTS ================= */

    const chatButton =
      document.getElementById("chatButton");

    const chatPanel =
      document.getElementById("chatPanel");

    const chatCloseButton =
      document.getElementById("chatCloseButton");

    const chatForm =
      document.getElementById("chatForm");

    const chatInput =
      document.getElementById("chatInput");

    const chatMessages =
      document.getElementById("chatMessages");

    const chatSuggestions =
      document.querySelectorAll(".chat-suggestion");



    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    function openSidebar() {

      sidebar?.classList.add("open");

      sidebarOverlay?.classList.add("active");

      document.body.style.overflow =
        "hidden";

    }


    function closeSidebar() {

      sidebar?.classList.remove("open");

      sidebarOverlay?.classList.remove("active");

      document.body.style.overflow =
        "";

    }


    menuButton?.addEventListener(
      "click",
      openSidebar
    );


    sidebarOverlay?.addEventListener(
      "click",
      closeSidebar
    );

    /* =====================================================
   CLOSE MOBILE SIDEBAR AFTER MENU CLICK
===================================================== */

const sidebarLinks =
  document.querySelectorAll(".sidebar .nav-link");


sidebarLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      () => {

        if (window.innerWidth <= 820) {

          closeSidebar();

        }

      }
    );

  }
);



    /* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeSidebar();

      if (typeof closeChat === "function") {

        closeChat();

      }

    }

  }
);



    /* =====================================================
       CURRENT DATE
    ===================================================== */

    if (currentDate) {

      const today =
        new Date();


      currentDate.textContent =
        new Intl.DateTimeFormat(
          "ms-MY",
          {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }
        ).format(today);

    }


    /* =====================================================
   FOOTER INFORMATION
===================================================== */

const footerYear =
  document.getElementById("footerYear");

const footerLastUpdate =
  document.getElementById("footerLastUpdate");


const footerNow =
  new Date();


/* ================= COPYRIGHT YEAR ================= */

if (footerYear) {

  footerYear.textContent =
    footerNow.getFullYear();

}


/* ================= LAST UPDATE ================= */

if (footerLastUpdate) {

  footerLastUpdate.textContent =
    new Intl.DateTimeFormat(
      "ms-MY",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    ).format(footerNow);

}


/* =====================================================
   PTIS AI ASSISTANT
===================================================== */

function openChat() {

  if (!chatPanel) return;

  chatPanel.classList.add("open");

  chatPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  chatButton?.setAttribute(
    "aria-expanded",
    "true"
  );


  setTimeout(
    () => {

      chatInput?.focus();

    },
    200
  );

}


function closeChat() {

  if (!chatPanel) return;

  chatPanel.classList.remove("open");

  chatPanel.setAttribute(
    "aria-hidden",
    "true"
  );

  chatButton?.setAttribute(
    "aria-expanded",
    "false"
  );

}


chatButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      chatPanel?.classList.contains("open");


    if (isOpen) {

      closeChat();

    }

    else {

      openChat();

    }

  }
);


chatCloseButton?.addEventListener(
  "click",
  closeChat
);


/* ================= QUICK QUESTIONS ================= */

chatSuggestions.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const question =
          button.dataset.question;

        if (!question || !chatInput) return;


        chatInput.value =
          question;

        chatInput.focus();

      }
    );

  }
);


/* =====================================================
   PTIS AI — MESSAGE ENGINE
===================================================== */

function addUserMessage(message) {

  if (!chatMessages) return;

  const messageElement =
    document.createElement("div");

  messageElement.className =
    "chat-message chat-message-user";

  messageElement.innerHTML = `
    <div class="message-content">

      <div class="message-bubble">
        <p>${escapeHTML(message)}</p>
      </div>

      <span class="message-time">
        Anda
      </span>

    </div>
  `;

  chatMessages.appendChild(messageElement);

  scrollChatToBottom();

}



function addAIMessage(message) {

  if (!chatMessages) return;

  const messageElement =
    document.createElement("div");

  messageElement.className =
    "chat-message chat-message-ai";

  messageElement.innerHTML = `
    <div class="message-avatar">
      <i data-lucide="bot"></i>
    </div>

    <div class="message-content">

      <div class="message-bubble">
        <p>${message}</p>
      </div>

      <span class="message-time">
        PTIS AI
      </span>

    </div>
  `;

  chatMessages.appendChild(messageElement);


  if (typeof lucide !== "undefined") {

    lucide.createIcons();

  }

  scrollChatToBottom();

}



function scrollChatToBottom() {

  if (!chatMessages) return;

  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}



/* =====================================================
   SECURITY — ESCAPE USER INPUT
===================================================== */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =====================================================
   PTIS AI — SCHOOL SUPERVISION SEARCH
===================================================== */

function normalizePTISText(text) {

  return text
    .toLowerCase()
    .replace(/[().,/\\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

}

/* =====================================================
   PTIS AI — SMART QUESTION NORMALIZER
===================================================== */

function normalizePTISQuestion(text) {

  let q =
    normalizePTISText(text);


  const replacements = [

    /* ================= PROJECT ================= */

    ["pdp 1", "pdp fasa 1"],
    ["pdp1", "pdp fasa 1"],

    ["pdp 2", "pdp fasa 2"],
    ["pdp2", "pdp fasa 2"],

    ["pdp 3", "pdp fasa 3"],
    ["pdp3", "pdp fasa 3"],

    ["pdp 4", "pdp fasa 4"],
    ["pdp4", "pdp fasa 4"],


    /* ================= COMMON WORDS ================= */

    ["vendor", "syarikat"],
    ["pembekal", "syarikat"],

    ["notebook", "laptop"],
    ["komputer riba", "laptop"],

    ["pencetak", "printer"],

    ["projector", "projektor"],

    ["charging cart", "troli"],


    /* ================= SCHOOL ================= */

    ["gb", "guru besar"],

    ["kod sk", "kod sekolah"],


    /* ================= SUPERVISION ================= */

    ["jaga sekolah", "selia sekolah"],
    ["menjaga sekolah", "selia sekolah"],
    ["pegang sekolah", "selia sekolah"],
    ["sekolah bawah", "sekolah seliaan"],
    ["sekolah di bawah", "sekolah seliaan"],
    ["bawah seliaan", "sekolah seliaan"],
    ["sekolah yang diselia", "sekolah seliaan"],
    ["sekolah mana dia jaga", "selia sekolah mana"],
    ["sekolah mana dia selia", "selia sekolah mana"],

    /* ================= ZONE & MEMBERS ================= */

    ["staf zon", "ahli zon"],
    ["staff zon", "ahli zon"],
    ["orang zon", "ahli zon"],
    ["anggota zon", "ahli zon"],
    ["member zon", "ahli zon"],

    ["senarai staf", "senarai ahli"],
    ["senarai staff", "senarai ahli"],
    ["senarai anggota", "senarai ahli"],
    ["senarai orang", "senarai ahli"],

    ["ketua bagi zon", "ketua zon"],
    ["ketua untuk zon", "ketua zon"],
    ["siapa ketua", "ketua"],

    ["berada zon mana", "zon mana"],
    ["dalam zon mana", "zon mana"],
    ["bertugas zon mana", "zon mana"]

  ];


  for (const [from, to] of replacements) {

    const pattern =
      new RegExp(
        `\\b${escapePTISRegex(from)}\\b`,
        "g"
      );

    q =
      q.replace(
        pattern,
        to
      );

  }


  return q
    .replace(/\s+/g, " ")
    .trim();

}


/* =====================================================
   ESCAPE REGEX
===================================================== */

function escapePTISRegex(text) {

  return text.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

}

/* ================= DISPLAY NAME ================= */

function formatPTISName(key) {

  const names = {

    "abdullah": "Abdullah",
    "aphiradee": "Aphiradee",
    "dikneswary": "Dikneswary",
    "farhah": "Farhah",
    "hussin": "Hussin",
    "mazlina": "Mazlina",
    "fauzi": "Fauzi",
    "hifzan": "Hifzan",
    "haris": "Haris",
    "ishak": "Ishak",
    "taufik": "Taufik",
    "fitri": "Fitri",
    "noor-diana": "Noor Diana",
    "noorshafazillah": "Noorshafazillah",
    "norhazfizi": "Norhazfizi",
    "nurul-wafa": "Nurul Wafa",
    "siti-zaleqha": "Siti Zaleqha",
    "bakrizal": "Bakrizal",
    "yusminudin": "Yusminudin",
    "zuhairie": "Zuhairie"

  };

  return names[key] || key;

}


/* ================= SEARCH BY PTIS MEMBER ================= */

function findSupervisionByMember(question) {

  if (!window.ptisSchoolSupervision) {
    return null;
  }

  const normalizedQuestion =
    normalizePTISText(question);


  for (
    const [memberKey, schools]
    of Object.entries(window.ptisSchoolSupervision)
  ) {

    const memberName =
      normalizePTISText(
        formatPTISName(memberKey)
      );


    if (
      normalizedQuestion.includes(memberName)
    ) {

      return {
        key: memberKey,
        name: formatPTISName(memberKey),
        schools: schools
      };

    }

  }


  return null;

}


/* ================= SEARCH BY SCHOOL ================= */

function findSupervisorBySchool(question) {

  if (!window.ptisSchoolSupervision) {
    return null;
  }


  const normalizedQuestion =
    normalizePTISText(question);


  for (
    const [memberKey, schools]
    of Object.entries(window.ptisSchoolSupervision)
  ) {

    for (const school of schools) {

      const normalizedSchool =
        normalizePTISText(school.school);

      const normalizedCode =
        school.code.toLowerCase();


      if (
        normalizedQuestion.includes(normalizedSchool) ||
        normalizedQuestion.includes(normalizedCode)
      ) {

        return {
          key: memberKey,
          name: formatPTISName(memberKey),
          school: school
        };

      }

    }

  }


  return null;

}


/* ================= SCHOOL LIST HTML ================= */

function buildSupervisionList(member) {

  const schoolList =
    member.schools
      .map(
        (school, index) => `
          <div style="margin-top:6px;">
            <strong>${index + 1}. ${school.school}</strong><br>
            <span>${school.code}</span>
          </div>
        `
      )
      .join("");


  return `
    <strong>${member.name}</strong> mempunyai
    <strong>${member.schools.length} sekolah seliaan</strong>:
    ${schoolList}
  `;

}

/* =====================================================
   PTIS AI — ZONE SEARCH
===================================================== */

function findPTISZone(question) {

  if (!window.ptisZoneData) {
    return null;
  }

  const q =
    normalizePTISText(question);


  for (
    const [zoneKey, zone]
    of Object.entries(window.ptisZoneData)
  ) {

    const zoneName =
      normalizePTISText(zone.name);


    if (q.includes(zoneName)) {

      return {
        key: zoneKey,
        ...zone
      };

    }

  }

  return null;
}


/* =====================================================
   PTIS AI — ZONE LEADER SEARCH
===================================================== */

function findZoneByLeader(question) {

  if (!window.ptisZoneData) {
    return null;
  }

  const q =
    normalizePTISText(question);


  for (
    const [zoneKey, zone]
    of Object.entries(window.ptisZoneData)
  ) {

    const leaderName =
      normalizePTISText(zone.leader);


    if (q.includes(leaderName)) {

      return {
        key: zoneKey,
        ...zone
      };

    }

  }


  return null;
}


/* =====================================================
   PTIS AI — MEMBER TO ZONE SEARCH
===================================================== */

function findZoneByMember(question) {

  if (!window.ptisZoneData) {
    return null;
  }

  const q =
    normalizePTISText(question);


  for (
    const [zoneKey, zone]
    of Object.entries(window.ptisZoneData)
  ) {

    if (!Array.isArray(zone.members)) {
      continue;
    }


    for (const member of zone.members) {

      const memberName =
        normalizePTISText(member);


      if (q.includes(memberName)) {

        return {
          key: zoneKey,
          member: member,
          name: zone.name,
          leader: zone.leader,
          totalMembers: zone.totalMembers
        };

      }

    }

  }


  return null;
}


/* =====================================================
   PTIS AI — SCHOOL INFORMATION SEARCH
===================================================== */

function findSchoolInformation(question) {

  if (
    typeof schoolData === "undefined" ||
    !Array.isArray(schoolData)
  ) {
    return null;
  }


  const q =
    normalizePTISText(question);


  /* ================= SEARCH BY CODE ================= */

  for (const school of schoolData) {

    const code =
      school.code.toLowerCase();

    if (q.includes(code)) {

      return school;

    }

  }


  /* ================= SEARCH BY SCHOOL NAME ================= */

  for (const school of schoolData) {

    const fullName =
      normalizePTISText(school.name);


    /* SEKOLAH KEBANGSAAN → SK */

    const shortName =
      normalizePTISText(
        school.name
          .replace(
            /^SEKOLAH KEBANGSAAN /i,
            "SK "
          )
          .replace(
            /^SEKOLAH MENENGAH KEBANGSAAN /i,
            "SMK "
          )
      );


    if (
      q.includes(fullName) ||
      q.includes(shortName)
    ) {

      return school;

    }

  }


  return null;

}


/* =====================================================
   PTIS AI — SCHOOL PROFILE
===================================================== */

function buildSchoolProfile(school) {

  const supervisor =
    findSupervisorBySchool(
      school.code
    );


  const supervisorName =
    supervisor
      ? supervisor.name
      : "Maklumat belum tersedia";


  const pgb =
    school.pgb &&
    school.pgb !== "-"
      ? school.pgb
      : "Maklumat belum tersedia";


  const guruICT =
    school.guruICT &&
    school.guruICT !== "-"
      ? school.guruICT
      : "Maklumat belum tersedia";


  return `
    <strong>${school.name}</strong><br><br>

    Kod Sekolah:
    <strong>${school.code}</strong><br>

    Peringkat:
    <strong>${school.level}</strong><br><br>

    PGB:
    <strong>${pgb}</strong><br><br>

    Guru Penyelaras ICT:
    <strong>${guruICT}</strong><br><br>

    Pegawai PTIS Seliaan:
    <strong>${supervisorName}</strong>
  `;

}

/* =====================================================
   PTIS AI — JTK TASK SEARCH
===================================================== */

function searchJTKTask(question) {

  if (!Array.isArray(window.ptisJTKScopes)) {
    return null;
  }

  const q =
    normalizePTISText(question);


  /* ================= PELUPUSAN ================= */

  if (
    q.includes("pelupusan") ||
    q.includes("lupus aset")
  ) {

    return `
      <strong>Tugas JTK berkaitan pelupusan aset ICT:</strong><br><br>

      JTK membantu Penyelaras Pasukan mengenal pasti
      keperluan <strong>perolehan, penggantian dan pelupusan
      peralatan ICT</strong> di sekolah.<br><br>

      JTK juga membantu memberi
      <strong>khidmat nasihat teknikal</strong> kepada pihak
      pengurusan sekolah dalam menguruskan proses
      pelupusan aset ICT.
    `;

  }


  /* ================= CM & PM ================= */

  if (
    q.includes("cm") ||
    q.includes("pm") ||
    q.includes("penyelenggaraan")
  ) {

    const scope =
      window.ptisJTKScopes.find(
        item => item.no === "ii"
      );

    if (!scope) return null;


    const items =
      scope.items
        .map(
          item => `
            <strong>${item.label}</strong><br>
            ${item.description}
          `
        )
        .join("<br><br>");


    return `
      <strong>${scope.title}</strong><br><br>
      ${items}
    `;

  }


  /* ================= SECOND LEVEL SUPPORT ================= */

  if (
    q.includes("second level") ||
    q.includes("2nd level") ||
    q.includes("tahap kedua")
  ) {

    const scope =
      window.ptisJTKScopes.find(
        item => item.no === "iii"
      );

    if (!scope) return null;


    return `
      <strong>${scope.title}</strong><br><br>
      ${scope.description}
    `;

  }


  /* ================= ISD ================= */

  if (
    q.includes("isd") ||
    q.includes("aduan")
  ) {

    const scope =
      window.ptisJTKScopes.find(
        item => item.no === "iv"
      );

    if (!scope) return null;


    return `
      <strong>${scope.title}</strong><br><br>
      ${scope.description}
    `;

  }


  return null;

}


function buildAllJTKScopes() {

  if (!Array.isArray(window.ptisJTKScopes)) {
    return null;
  }


  return window.ptisJTKScopes
    .map(
      scope => {

        return `
          <div style="margin-bottom:12px;">
            <strong>
              Skop ${scope.no}: ${scope.title}
            </strong>
          </div>
        `;

      }
    )
    .join("");

}


/* =====================================================
   PTIS AI — PENYELARAS PTIS TASK SEARCH
===================================================== */

function buildPenyelarasTasks() {

  if (!Array.isArray(window.ptisPenyelarasTasks)) {
    return null;
  }


  return window.ptisPenyelarasTasks
    .map(
      task => `
        <div style="margin-bottom:14px;">

          <strong>
            ${task.no}. ${task.title}
          </strong>

          <br>

          ${task.description}

        </div>
      `
    )
    .join("");

}


/* =====================================================
   PTIS AI — SEARCH SPECIFIC PENYELARAS TASK
===================================================== */

function searchPenyelarasTask(question) {

  if (!Array.isArray(window.ptisPenyelarasTasks)) {
    return null;
  }

  const q =
    normalizePTISText(question);

  const keywordGroups = [

    ["sku", "sasaran kerja"],

    ["jadual", "jadual bertugas", "jadual tugas"],

    ["pemantauan", "pantau", "prestasi"],

    ["laporan"],

    ["mesyuarat", "perbincangan"],

    [
      "aset",
      "peralatan",
      "pelupusan",
      "perolehan",
      "penggantian"
    ]

  ];


  for (const keywords of keywordGroups) {

    const questionMatched =
      keywords.some(
        keyword =>
          q.includes(
            normalizePTISText(keyword)
          )
      );


    if (!questionMatched) {
      continue;
    }


    const matchingTasks =
      window.ptisPenyelarasTasks.filter(
        task => {

          const taskContent =
            normalizePTISText(
              `${task.title} ${task.description}`
            );

          return keywords.some(
            keyword =>
              taskContent.includes(
                normalizePTISText(keyword)
              )
          );

        }
      );


    if (matchingTasks.length > 0) {

      return matchingTasks
        .map(
          task => `
            <div style="margin-bottom:14px;">

              <strong>
                ${task.no}. ${task.title}
              </strong>

              <br>

              ${task.description}

            </div>
          `
        )
        .join("");

    }

  }


  return null;

}

/* =====================================================
   PTIS AI — GURU PENYELARAS ICT
===================================================== */

function buildGPIRoles() {

  if (!Array.isArray(window.ptisGPIRoles)) {
    return null;
  }

  return window.ptisGPIRoles
    .map(
      role => `
        <div style="margin-bottom:14px;">

          <strong>
            ${role.no}. ${role.title}
          </strong>

          <br>

          ${role.description}

        </div>
      `
    )
    .join("");

}


/* =====================================================
   SEARCH SPECIFIC GPI ROLE
===================================================== */

function searchGPIRole(question) {

  if (!Array.isArray(window.ptisGPIRoles)) {
    return null;
  }

  const q =
    normalizePTISText(question);


  const keywordGroups = [

    [
      "rangkaian",
      "network",
      "internet",
      "infrastruktur"
    ],

    [
      "aset",
      "peralatan",
      "inventori"
    ],

    [
      "keselamatan",
      "security"
    ],

    [
      "dokumentasi",
      "rekod"
    ],

    [
      "sokongan",
      "teknikal"
    ]

  ];


  for (const keywords of keywordGroups) {

    const questionMatched =
      keywords.some(
        keyword =>
          q.includes(
            normalizePTISText(keyword)
          )
      );

    if (!questionMatched) {
      continue;
    }


    const matchingRoles =
      window.ptisGPIRoles.filter(
        role => {

          const content =
            normalizePTISText(
              `${role.title} ${role.description}`
            );

          return keywords.some(
            keyword =>
              content.includes(
                normalizePTISText(keyword)
              )
          );

        }
      );


    if (matchingRoles.length > 0) {

      return matchingRoles
        .map(
          role => `
            <div style="margin-bottom:14px;">

              <strong>
                ${role.no}. ${role.title}
              </strong>

              <br>

              ${role.description}

            </div>
          `
        )
        .join("");

    }

  }

  return null;

}


/* =====================================================
   GPI REFERENCES
===================================================== */

function buildGPIReferences() {

  if (!Array.isArray(window.ptisGPIReferences)) {
    return null;
  }

  return window.ptisGPIReferences
    .map(
      reference => {

        const points =
          Array.isArray(reference.points)
            ? reference.points
                .map(
                  point => `• ${point}`
                )
                .join("<br>")
            : "";


        return `
          <div style="margin-bottom:16px;">

            <strong>
              ${reference.title}
            </strong>

            <br>

            ${reference.description}

            ${
              points
                ? `<br><br>${points}`
                : ""
            }

          </div>
        `;

      }
    )
    .join("");

}

/* =====================================================
   PTIS AI — PROJEK SEWAAN ICT SEARCH
===================================================== */

function findPTISProject(question) {

  if (
    !window.ptisProjectData ||
    typeof window.ptisProjectData !== "object"
  ) {
    return null;
  }

  const q =
    normalizePTISText(question);


  for (
    const [projectKey, project]
    of Object.entries(window.ptisProjectData)
  ) {

    const title =
      normalizePTISText(project.title);


    /* ================= EXACT TITLE ================= */

    if (q.includes(title)) {

      return {
        key: projectKey,
        ...project
      };

    }


    /* ================= PROJECT KEY ================= */

    const normalizedKey =
      normalizePTISText(projectKey);

    if (q.includes(normalizedKey)) {

      return {
        key: projectKey,
        ...project
      };

    }

  }


  return null;

}

/* =====================================================
   PTIS AI — PROJECT PROFILE
===================================================== */

function buildPTISProjectProfile(project) {

  if (!project) {
    return null;
  }


  const equipmentList =
    Array.isArray(project.equipment)
      ? project.equipment
          .map(
            equipment => `
              <div style="margin-bottom:8px;">
                <strong>${equipment.label}</strong><br>
                ${equipment.value}
              </div>
            `
          )
          .join("")
      : "Maklumat peralatan belum tersedia";


  return `
    <strong>${project.title}</strong><br><br>

    Kategori:
    <strong>${project.category}</strong><br>

    Syarikat:
    <strong>${project.company}</strong><br>

    Status:
    <strong>${project.status}</strong><br>

    Tempoh:
    <strong>${project.duration}</strong><br>

    Tarikh Mula:
    <strong>${project.start}</strong><br>

    Tarikh Tamat:
    <strong>${project.end}</strong><br><br>

    <strong>Peralatan:</strong><br><br>

    ${equipmentList}
  `;

}

/* =====================================================
   PTIS AI — ALL PROJECTS SUMMARY
===================================================== */

function buildPTISProjectsSummary() {

  if (
    !window.ptisProjectData ||
    typeof window.ptisProjectData !== "object"
  ) {
    return null;
  }


  const projects =
    Object.values(window.ptisProjectData);


  if (projects.length === 0) {
    return null;
  }


  const projectList =
    projects
      .map(
        (project, index) => `
          <div style="margin-bottom:14px;">

            <strong>
              ${index + 1}. ${project.title}
            </strong>

            <br>

            ${project.category}

            <br>

            Syarikat:
            <strong>${project.company}</strong>

          </div>
        `
      )
      .join("");


  return `
    Projek Sewaan ICT Sekolah mempunyai
    <strong>${projects.length} fasa/projek</strong>
    yang direkodkan dalam portal.<br><br>

    ${projectList}
  `;

}

function buildPTISProjectIntroduction() {

  return `
    <strong>Projek Sewaan ICT Sekolah</strong>
    menyediakan maklumat berkaitan projek dan
    peralatan ICT yang dibekalkan melalui kaedah
    sewaan kepada sekolah.<br><br>

    PTIS Smart Portal menyediakan maklumat seperti:

    <br><br>

    • Fasa projek<br>
    • Kategori peralatan<br>
    • Syarikat pembekal<br>
    • Status projek<br>
    • Tempoh sewaan<br>
    • Tarikh mula dan tamat<br>
    • Jenis serta model peralatan

    <br><br>

    Anda juga boleh bertanya secara khusus seperti
    <strong>"Syarikat PDP Fasa 1 siapa?"</strong>
    atau
    <strong>"Laptop PDP Fasa 2 model apa?"</strong>.
  `;

}


/* =====================================================
   PTIS AI — BASIC RESPONSE ENGINE
===================================================== */

function processPTISQuestion(question) {

  const q =
    normalizePTISQuestion(question);

/* ===================================================
   GENERAL PROJECT QUESTIONS
=================================================== */

if (
  q.includes("projek sewaan ict") ||
  q.includes("projek sewaan sekolah")
) {

  if (
    q.includes("berapa") ||
    q.includes("senarai") ||
    q.includes("fasa") ||
    q.includes("projek apa")
  ) {

    const summary =
      buildPTISProjectsSummary();

    if (summary) {
      return summary;
    }

  }


  return buildPTISProjectIntroduction();

}    

/* ===================================================
   PROJEK SEWAAN ICT
=================================================== */

const project =
  findPTISProject(q);


if (project) {


  /* ================= COMPANY ================= */

  if (
    q.includes("syarikat") ||
    q.includes("vendor")
  ) {

    return `
      Syarikat bagi
      <strong>${project.title}</strong> ialah
      <strong>${project.company}</strong>.
    `;

  }


  /* ================= END DATE ================= */

  if (
    q.includes("tamat") ||
    q.includes("tarikh tamat") ||
    q.includes("berakhir")
  ) {

    return `
      Tempoh
      <strong>${project.title}</strong>
      tamat pada
      <strong>${project.end}</strong>.
    `;

  }


  /* ================= START DATE ================= */

  if (
    q.includes("mula") ||
    q.includes("tarikh mula")
  ) {

    return `
      <strong>${project.title}</strong>
      bermula pada
      <strong>${project.start}</strong>.
    `;

  }


  /* ================= DURATION ================= */

  if (
    q.includes("tempoh") ||
    q.includes("berapa bulan")
  ) {

    return `
      Tempoh
      <strong>${project.title}</strong> ialah
      <strong>${project.duration}</strong>.
    `;

  }


  /* ================= STATUS ================= */

  if (
    q.includes("status")
  ) {

    return `
      Status
      <strong>${project.title}</strong> ialah
      <strong>${project.status}</strong>.
    `;

  }


  /* ================= SPECIFIC EQUIPMENT ================= */

  if (Array.isArray(project.equipment)) {

    const equipment =
      project.equipment.find(
        item => {

          const label =
            normalizePTISText(item.label);

          return (
            q.includes("laptop") &&
            label.includes("laptop")
          ) ||
          (
            q.includes("komputer riba") &&
            label.includes("komputer riba")
          ) ||
          (
            q.includes("printer") &&
            label.includes("printer")
          ) ||
          (
            q.includes("pencetak") &&
            label.includes("pencetak")
          ) ||
          (
            q.includes("projektor") &&
            label.includes("projektor")
          ) ||
          (
            q.includes("projector") &&
            label.includes("projector")
          ) ||
          (
            q.includes("troli") &&
            label.includes("troli")
          ) ||
          (
            q.includes("charging cart") &&
            label.includes("charging cart")
          ) ||
          (
            q.includes("komputer meja") &&
            label.includes("komputer meja")
          ) ||
          (
            q.includes("pc") &&
            label.includes("pc")
          );

        }
      );


    if (equipment) {

      return `
        Peralatan
        <strong>${equipment.label}</strong>
        bagi
        <strong>${project.title}</strong> ialah
        <strong>${equipment.value}</strong>.
      `;

    }

  }


  /* ================= EQUIPMENT LIST ================= */

  if (
    q.includes("peralatan") ||
    q.includes("senarai peralatan")
  ) {

    const equipmentList =
      project.equipment
        .map(
          (item, index) => `
            ${index + 1}.
            <strong>${item.label}</strong><br>
            ${item.value}
          `
        )
        .join("<br><br>");


    return `
      Peralatan bagi
      <strong>${project.title}</strong>:<br><br>

      ${equipmentList}
    `;

  }


  /* ================= DEFAULT PROFILE ================= */

  return buildPTISProjectProfile(
    project
  );

}

/* ===================================================
   GURU PENYELARAS ICT
=================================================== */

if (
  q.includes("guru penyelaras ict") ||
  q.includes("peranan guru ict") ||
  q.includes("tugas guru ict")
) {

  /* ---------- RUJUKAN ---------- */

  if (
    q.includes("rujukan") ||
    q.includes("panduan")
  ) {

    const references =
      buildGPIReferences();

    if (references) {

      return `
        <strong>
          Rujukan Guru Penyelaras ICT
        </strong><br><br>

        ${references}
      `;

    }

  }


  /* ---------- SPECIFIC ROLE ---------- */

  const specificRole =
    searchGPIRole(question);

  if (specificRole) {

    return `
      <strong>
        Peranan Guru Penyelaras ICT berkaitan perkara tersebut:
      </strong><br><br>

      ${specificRole}
    `;

  }


  /* ---------- ALL ROLES ---------- */

  const allRoles =
    buildGPIRoles();

  if (allRoles) {

    return `
      <strong>
        Peranan & Tanggungjawab Guru Penyelaras ICT
      </strong><br><br>

      ${allRoles}
    `;

  }

}

/* ===================================================
   PENYELARAS PTIS
=================================================== */

if (
  q.includes("penyelaras ptis") ||
  q.includes("tugas penyelaras") ||
  q.includes("peranan penyelaras")
) {

  const specificPenyelarasTask =
    searchPenyelarasTask(question);


  if (specificPenyelarasTask) {

    return `
      <strong>
        Tugas Penyelaras PTIS berkaitan perkara tersebut:
      </strong><br><br>

      ${specificPenyelarasTask}
    `;

  }


  const allPenyelarasTasks =
    buildPenyelarasTasks();


  if (allPenyelarasTasks) {

    return `
      Penyelaras PTIS mempunyai
      <strong>
        ${window.ptisPenyelarasTasks.length} tugas utama
      </strong>:<br><br>

      ${allPenyelarasTasks}
    `;

  }

}


/* ===================================================
   SKOP TUGAS JTK
=================================================== */

if (
  q.includes("skop tugas jtk") ||
  q.includes("tugas jtk") ||
  q.includes("peranan jtk")
) {

  const specificJTKTask =
    searchJTKTask(question);


  if (specificJTKTask) {

    return specificJTKTask;

  }


  const allScopes =
    buildAllJTKScopes();


  if (allScopes) {

    return `
      Juruteknik Komputer mempunyai
      <strong>4 skop tugas utama</strong>:<br><br>

      ${allScopes}

      Anda juga boleh bertanya secara khusus mengenai
      <strong>pelupusan, CM & PM, sokongan tahap kedua
      atau ISD</strong>.
    `;

  }

}


/* ================= SPECIFIC JTK TOPIC ================= */

const specificJTKTask =
  searchJTKTask(question);

if (specificJTKTask) {

  return specificJTKTask;

}


  /* ===================================================
     PTIS ZONE
  =================================================== */

  const zone =
    findPTISZone(q);

  if (zone) {

    if (
      q.includes("ketua") ||
      q.includes("ketua zon") ||
      q.includes("siapa ketua")
    ) {

      return `
        Ketua <strong>${zone.name}</strong> ialah
        <strong>${zone.leader}</strong>.
      `;

    }

        if (
      q.includes("siapa ahli") ||
      q.includes("senarai ahli") ||
      q.includes("ahli siapa") ||
      q.includes("nama ahli")
    ) {

      const memberList =
        zone.members
          .map(
            (member, index) =>
              `${index + 1}. <strong>${member}</strong>`
          )
          .join("<br>");

      return `
        Ahli <strong>${zone.name}</strong>
        adalah:<br><br>

        ${memberList}<br><br>

        Ketua Zon:
        <strong>${zone.leader}</strong>
      `;

    }


    if (
      q.includes("berapa") ||
      q.includes("jumlah") ||
      q.includes("ahli")
    ) {

      return `
        <strong>${zone.name}</strong> mempunyai
        <strong>${zone.totalMembers} orang ahli PTIS</strong>.
      `;

    }


    return `
      <strong>${zone.name}</strong><br>
      Ketua Zon: <strong>${zone.leader}</strong><br>
      Jumlah Ahli: <strong>${zone.totalMembers} orang</strong>
    `;

  }


    /* ===================================================
     ZONE LEADER REVERSE SEARCH
  =================================================== */

  const leaderZone =
    findZoneByLeader(q);


  if (
    leaderZone &&
    (
      q.includes("ketua") ||
      q.includes("zon") ||
      q.includes("mengetuai")
    )
  ) {

    return `
      <strong>${leaderZone.leader}</strong>
      merupakan Ketua
      <strong>${leaderZone.name}</strong>.<br><br>

      Zon ini mempunyai
      <strong>${leaderZone.totalMembers} orang ahli PTIS</strong>.
    `;

  }


  /* ===================================================
   MEMBER ZONE SEARCH
=================================================== */

const memberZone =
  findZoneByMember(q);


if (
  memberZone &&
  (
    q.includes("zon mana") ||
    q.includes("zon apa") ||
    q.includes("ahli zon") ||
    q.includes("dari zon")
  )
) {

  return `
    <strong>${memberZone.member}</strong>
    merupakan ahli
    <strong>${memberZone.name}</strong>.<br><br>

    Ketua Zon:
    <strong>${memberZone.leader}</strong>
  `;

}


if (
  memberZone &&
  (
    q.includes("ketua zon") ||
    q.includes("siapa ketua")
  )
) {

  return `
    <strong>${memberZone.member}</strong>
    berada dalam
    <strong>${memberZone.name}</strong>.<br><br>

    Ketua zon tersebut ialah
    <strong>${memberZone.leader}</strong>.
  `;

}


  /* ===================================================
     SCHOOL SUPERVISION
  =================================================== */

  const memberSupervision =
    findSupervisionByMember(question);

  if (memberSupervision) {

    return buildSupervisionList(
      memberSupervision
    );

  }

/* ===================================================
   SCHOOL INFORMATION
=================================================== */

const schoolInfo =
  findSchoolInformation(question);


/* ================= SCHOOL SPECIFIC QUESTIONS ================= */

if (schoolInfo) {

  /* ---------- GURU ICT ---------- */

  if (
    q.includes("guru ict") ||
    q.includes("guru penyelaras ict") ||
    q.includes("penyelaras ict")
  ) {

    const guruICT =
      schoolInfo.guruICT &&
      schoolInfo.guruICT !== "-"
        ? schoolInfo.guruICT
        : "Maklumat belum tersedia";

    return `
      Guru Penyelaras ICT bagi
      <strong>${schoolInfo.name}</strong> ialah
      <strong>${guruICT}</strong>.
    `;

  }


  /* ---------- PGB / GURU BESAR / PENGETUA ---------- */

  if (
    q.includes("guru besar") ||
    q.includes("pengetua") ||
    q.includes("pgb")
  ) {

    const pgb =
      schoolInfo.pgb &&
      schoolInfo.pgb !== "-"
        ? schoolInfo.pgb
        : "Maklumat belum tersedia";

    return `
      PGB bagi
      <strong>${schoolInfo.name}</strong> ialah
      <strong>${pgb}</strong>.
    `;

  }


  /* ---------- KOD SEKOLAH ---------- */

  if (
    q.includes("kod sekolah") ||
    q.includes("kod apa") ||
    q.includes("apa kod")
  ) {

    return `
      Kod sekolah bagi
      <strong>${schoolInfo.name}</strong> ialah
      <strong>${schoolInfo.code}</strong>.
    `;

  }


  /* ---------- PERINGKAT SEKOLAH ---------- */

  if (
    q.includes("peringkat") ||
    q.includes("rendah atau menengah") ||
    q.includes("sekolah rendah") ||
    q.includes("sekolah menengah")
  ) {

    return `
      <strong>${schoolInfo.name}</strong>
      merupakan sekolah peringkat
      <strong>${schoolInfo.level}</strong>.
    `;

  }

}  


/* ================= FULL SCHOOL PROFILE ================= */

if (
  schoolInfo &&
  (
    q.includes("maklumat") ||
    q.includes("info") ||
    q.includes("profil")
  )
) {

  return buildSchoolProfile(
    schoolInfo
  );

}


/* ================= SCHOOL SUPERVISOR ================= */

const schoolSupervisor =
  findSupervisorBySchool(question);

if (
  schoolSupervisor &&
  (
    q.includes("selia") ||
    q.includes("seliaan") ||
    q.includes("penyelia") ||
    q.includes("pegawai ptis")
  )
) {

  return `
    <strong>${schoolSupervisor.school.school}</strong>
    (${schoolSupervisor.school.code})
    berada di bawah seliaan
    <strong>${schoolSupervisor.name}</strong>.
  `;

}


/* ================= GENERAL SCHOOL SEARCH ================= */

if (schoolInfo) {

  return buildSchoolProfile(
    schoolInfo
  );

}


  if (
    q.includes("fungsi ptis") ||
    q.includes("apa itu ptis")
  ) {

    return `
      PTIS ialah <strong>Pasukan Teknikal ICT Sekolah</strong>
      yang membantu menyokong pengurusan dan perkhidmatan
      ICT sekolah secara sistematik, cekap dan berkesan.
    `;

  }


  if (
    q.includes("digital form") ||
    q.includes("borang digital")
  ) {

    return `
      <strong>PTIS Digital Forms</strong> menyediakan
      kemudahan pengurusan borang secara digital.
      Anda boleh mengaksesnya melalui menu
      <strong>Digital Forms</strong> pada portal.
    `;

  }


  if (
    q.includes("bantuan ict") ||
    q.includes("bantuan")
  ) {

    return `
      Untuk mendapatkan bantuan berkaitan ICT,
      sila rujuk maklumat dan perkhidmatan yang
      disediakan melalui <strong>PTIS Daerah Baling</strong>.
    `;

  }


/* ===================================================
   SMART FALLBACK
=================================================== */

return `
  <strong>Maaf, saya belum dapat mengenal pasti pertanyaan tersebut.</strong>

  <br><br>

  Saya boleh membantu anda mendapatkan maklumat mengenai:

  <br><br>

  <strong>👥 Ahli & Zon PTIS</strong><br>
  Contoh: "Siapa ahli Zon Baling?"

  <br><br>

  <strong>🏫 Maklumat Sekolah</strong><br>
  Contoh: "Maklumat SK Kuala Ketil"

  <br><br>

  <strong>🗂️ Sekolah Seliaan</strong><br>
  Contoh: "Fitri selia sekolah mana?"

  <br><br>

  <strong>🛠️ Skop Tugas JTK</strong><br>
  Contoh: "Apa tugas JTK berkaitan pelupusan?"

  <br><br>

  <strong>💻 Guru Penyelaras ICT</strong><br>
  Contoh: "Apakah tugas Guru Penyelaras ICT?"

  <br><br>

  <strong>📡 Projek Sewaan ICT</strong><br>
  Contoh: "Syarikat PDP Fasa 1 siapa?"

  <br><br>

  <strong>📄 Digital Forms</strong><br>
  Contoh: "Di mana saya boleh mendapatkan Digital Forms?"
`;

}



/* =====================================================
   PTIS AI — SUBMIT QUESTION
===================================================== */

chatForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const question =
      chatInput?.value.trim();


    if (!question) return;


    /* PAPAR SOALAN */

    addUserMessage(question);


    /* KOSONGKAN INPUT */

    chatInput.value = "";


    /* PROSES JAWAPAN */

    const answer =
      processPTISQuestion(question);


    /* SIMULASI AI TYPING */

    setTimeout(
      () => {

        addAIMessage(answer);

      },
      400
    );

  }
);


    /* =====================================================
       LUCIDE ICONS
    ===================================================== */

    if (window.lucide) {

      lucide.createIcons();

    }


  }
);