/* =========================================================
   PTIS DAERAH BALING
   MAKLUMAT SEKOLAH
   TEST ENGINE - 3 SEKOLAH
========================================================= */


/* =========================================================
   SCHOOL DATA SOURCE
========================================================= */

const directorySchoolData =
  Array.isArray(schoolData)
    ? schoolData
    : [];


/* =========================================================
   STATE
========================================================= */

let currentFilter = "all";
let currentSearch = "";


/* =========================================================
   ELEMENTS
========================================================= */

const schoolGrid =
  document.getElementById("schoolGrid");

const schoolEmpty =
  document.getElementById("schoolEmpty");

const schoolSearch =
  document.getElementById("schoolSearch");

const visibleSchoolCount =
  document.getElementById("visibleSchoolCount");

const totalSchools =
  document.getElementById("totalSchools");

const totalPrimarySchools =
  document.getElementById("totalPrimarySchools");

const totalSecondarySchools =
  document.getElementById("totalSecondarySchools");

const filterButtons =
  document.querySelectorAll(".filter-btn");


/* =========================================================
   NORMALIZE TEXT
========================================================= */

function normalizeText(value) {

  return String(value || "")
    .toLowerCase()
    .trim();

}

/* =========================================================
   FIND PTIS SUPERVISOR BY SCHOOL CODE
========================================================= */

function getPTISSupervisor(schoolCode) {

  if (
    typeof ptisSchoolSupervision === "undefined" ||
    !ptisSchoolSupervision
  ) {
    return "-";
  }


  const targetCode =
    String(schoolCode || "")
      .trim()
      .toUpperCase();


  for (
    const [memberKey, schools]
    of Object.entries(ptisSchoolSupervision)
  ) {

    if (!Array.isArray(schools)) {
      continue;
    }


    const matchedSchool =
      schools.find(
        item =>
          String(item.code || "")
            .trim()
            .toUpperCase() === targetCode
      );


    if (matchedSchool) {

      return formatPTISMemberName(
        memberKey
      );

    }

  }


  return "-";

}


/* =========================================================
   FORMAT PTIS MEMBER NAME
========================================================= */

function formatPTISMemberName(memberKey) {

  const specialNames = {

    "noor-diana":
      "Noor Diana",

    "nurul-wafa":
      "Nurul Wafa",

    "siti-zaleqha":
      "Siti Zaleqha",

    "noorshafazillah":
      "Noorshafazillah",

    "norhazfizi":
      "Norhazfizi"

  };


  if (specialNames[memberKey]) {

    return specialNames[memberKey];

  }


  return String(memberKey || "")
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      letter =>
        letter.toUpperCase()
    );

}


/* =========================================================
   STATISTICS
========================================================= */

function updateStatistics() {

  const primary =
    directorySchoolData.filter(
      school =>
        school.level === "RENDAH"
    ).length;

  const secondary =
    directorySchoolData.filter(
      school =>
        school.level === "MENENGAH"
    ).length;


  if (totalSchools) {

    totalSchools.textContent =
      directorySchoolData.length;

  }


  if (totalPrimarySchools) {

    totalPrimarySchools.textContent =
      primary;

  }


  if (totalSecondarySchools) {

    totalSecondarySchools.textContent =
      secondary;

  }

}


/* =========================================================
   CREATE SCHOOL CARD
========================================================= */

function createSchoolCard(school) {

  const icon =
    school.level === "MENENGAH"
      ? "🎓"
      : "🏫";


  const levelLabel =
    school.level === "MENENGAH"
      ? "SEKOLAH MENENGAH"
      : "SEKOLAH RENDAH";

  const ptisSupervisor =
    getPTISSupervisor(
        school.code
    );


  return `

    <article class="school-card">

      <div class="school-card-top">

        <div class="school-card-icon">
          ${icon}
        </div>

        <span class="school-code">
          ${school.code}
        </span>

      </div>


      <div class="school-card-body">

        <span class="school-level">
          ${levelLabel}
        </span>

        <h4>
          ${school.name}
        </h4>


        <div class="school-info">

          <div class="school-info-row">

            <span>
              PGB
            </span>

            <strong>
              ${school.pgb || "-"}
            </strong>

          </div>

          <div class="school-info-row school-supervisor-row">

  <span>
    Penyelia PTIS
  </span>

  <strong>
    ${ptisSupervisor}
  </strong>

</div>


          <div class="school-info-row">

            <span>
              Guru ICT
            </span>

            <strong>
              ${school.guruICT || "-"}
            </strong>

          </div>

        </div>

      </div>


      <div class="school-card-footer">

        <span>
          PTIS Daerah Baling
        </span>

      </div>

    </article>

  `;

}


/* =========================================================
   GET FILTERED DATA
========================================================= */

function getFilteredSchools() {

  return directorySchoolData.filter(
    function (school) {

      /* LEVEL FILTER */

      const levelMatch =
        currentFilter === "all" ||
        school.level === currentFilter;


      /* GET PTIS SUPERVISOR */

const ptisSupervisor =
  getPTISSupervisor(
    school.code
  );


/* COMBINE ALL SEARCHABLE INFORMATION */

const searchableText =
  normalizeText(
    [
      school.code,
      school.name,
      school.level,
      school.pgb,
      school.guruICT,
      ptisSupervisor
    ].join(" ")
  );


      const searchMatch =
        !currentSearch ||
        searchableText.includes(
          currentSearch
        );


      return (
        levelMatch &&
        searchMatch
      );

    }
  );

}


/* =========================================================
   RENDER SCHOOL
========================================================= */

function renderSchools() {

  if (!schoolGrid) {
    return;
  }


  const schools =
    getFilteredSchools();


  /* COUNT */

  if (visibleSchoolCount) {

    visibleSchoolCount.textContent =
      schools.length;

  }


  /* EMPTY */

  if (schools.length === 0) {

    schoolGrid.innerHTML = "";

    if (schoolEmpty) {
      schoolEmpty.hidden = false;
    }

    return;

  }


  if (schoolEmpty) {
    schoolEmpty.hidden = true;
  }


  /* CARDS */

  schoolGrid.innerHTML =
    schools
      .map(createSchoolCard)
      .join("");

}


/* =========================================================
   SEARCH
========================================================= */

if (schoolSearch) {

  schoolSearch.addEventListener(
    "input",
    function () {

      currentSearch =
        normalizeText(
          this.value
        );

      renderSchools();

    }
  );

}


/* =========================================================
   FILTER
========================================================= */

filterButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        currentFilter =
          this.dataset.filter;


        filterButtons.forEach(
          btn =>
            btn.classList.remove(
              "active"
            )
        );


        this.classList.add(
          "active"
        );


        renderSchools();

      }
    );

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeSchoolDirectory() {

  updateStatistics();

  renderSchools();

  console.log(
    "PTIS School Directory loaded:",
    directorySchoolData.length,
    "schools"
  );

}

console.log(
  "TEST PENYELIA KBA0030:",
  getPTISSupervisor("KBA0030")
);

initializeSchoolDirectory();