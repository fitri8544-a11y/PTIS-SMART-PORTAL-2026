/* =========================================================
   PTIS SMART PORTAL 2026
   ORGANIZATION PAGE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       ORGANIZATION TAB ELEMENTS
    ===================================================== */

    const organizationTabs =
      document.querySelectorAll(
        "[data-org-tab]"
      );

    const organizationPanels =
      document.querySelectorAll(
        "[data-org-panel]"
      );


      /* =========================================================
   SCHOOL SUPERVISION MODAL
========================================================= */

const schoolSupervisionModal =
  document.getElementById(
    "schoolSupervisionModal"
  );

const schoolSupervisionTitle =
  document.getElementById(
    "schoolSupervisionTitle"
  );

const schoolSupervisionSummary =
  document.getElementById(
    "schoolSupervisionSummary"
  );

const schoolSupervisionList =
  document.getElementById(
    "schoolSupervisionList"
  );


/* =========================================================
   FIND MEMBER
========================================================= */

function findPtisMember(memberId) {

  for (const zone of Object.values(ptisZones)) {

    const member =
      zone.members.find(
        (item) =>
          item.id === memberId
      );

    if (member) {
      return member;
    }

  }

  return null;

}


/* =========================================================
   OPEN SCHOOL MODAL
========================================================= */

function openSchoolSupervisionModal(
  memberId
) {

  if (
    !schoolSupervisionModal ||
    !schoolSupervisionList
  ) {
    return;
  }


  const member =
    findPtisMember(memberId);

  if (!member) {
    return;
  }


  const schools =
    ptisSchoolSupervision[
      memberId
    ] || [];


  /* ================= TITLE ================= */

  if (schoolSupervisionTitle) {

    schoolSupervisionTitle.textContent =
      member.name;

  }


  if (schoolSupervisionSummary) {

    schoolSupervisionSummary.textContent =
      `${schools.length} sekolah di bawah seliaan`;

  }


  /* ================= SCHOOL LIST ================= */

  if (schools.length === 0) {

    schoolSupervisionList.innerHTML = `

      <div class="school-supervision-empty">

        <i data-lucide="school"></i>

        <strong>
          Tiada sekolah seliaan
        </strong>

        <span>
          Maklumat sekolah belum tersedia.
        </span>

      </div>

    `;

  }

  else {

    schoolSupervisionList.innerHTML =
      schools
        .map(
          (school, index) => `

            <div class="school-supervision-item">

              <div class="school-supervision-number">
                ${String(index + 1).padStart(2, "0")}
              </div>


              <div class="school-supervision-school-icon">
                <i data-lucide="school"></i>
              </div>


              <div class="school-supervision-school-info">

                <span>
                  ${school.code}
                </span>

                <strong>
                  ${school.school}
                </strong>

              </div>

            </div>

          `
        )
        .join("");

  }


  /* ================= SHOW ================= */

  schoolSupervisionModal.classList.add(
    "active"
  );

  schoolSupervisionModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "school-modal-open"
  );


  /* REFRESH LUCIDE */

  if (window.lucide) {

    lucide.createIcons();

  }

}


/* =========================================================
   CLOSE SCHOOL MODAL
========================================================= */

function closeSchoolSupervisionModal() {

  if (!schoolSupervisionModal) {
    return;
  }

  schoolSupervisionModal.classList.remove(
    "active"
  );

  schoolSupervisionModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "school-modal-open"
  );

}


/* =========================================================
   CLICK HANDLER
========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const schoolButton =
      event.target.closest(
        "[data-member-school]"
      );


    if (schoolButton) {

      event.preventDefault();

      event.stopPropagation();

      const memberId =
        schoolButton.dataset.memberSchool;

      openSchoolSupervisionModal(
        memberId
      );

      return;

    }


    const closeButton =
      event.target.closest(
        "[data-close-school-modal]"
      );


    if (closeButton) {

      closeSchoolSupervisionModal();

    }

  }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      schoolSupervisionModal?.classList.contains(
        "active"
      )
    ) {

      closeSchoolSupervisionModal();

    }

  }
);


    /* =====================================================
       SHOW ORGANIZATION PANEL
    ===================================================== */

    function showOrganizationPanel(
      panelName
    ) {

      /* ================= TABS ================= */

      organizationTabs.forEach(
        (tab) => {

          const isActive =
            tab.dataset.orgTab ===
            panelName;

          tab.classList.toggle(
            "active",
            isActive
          );

        }
      );


      /* ================= PANELS ================= */

      organizationPanels.forEach(
        (panel) => {

          const isActive =
            panel.dataset.orgPanel ===
            panelName;

          panel.classList.toggle(
            "active",
            isActive
          );

        }
      );

    }



    /* =====================================================
       ORGANIZATION TAB CLICK
    ===================================================== */

    organizationTabs.forEach(
      (tab) => {

        tab.addEventListener(
          "click",
          () => {

            const panelName =
              tab.dataset.orgTab;

            if (!panelName) return;

            showOrganizationPanel(
              panelName
            );

          }
        );

      }
    );



    /* =====================================================
       DEFAULT ORGANIZATION PANEL
    ===================================================== */

    showOrganizationPanel(
      "sektor"
    );



    /* =====================================================
       RESET PAGE POSITION
    ===================================================== */

    if (
      "scrollRestoration" in history
    ) {

      history.scrollRestoration =
        "manual";

    }


    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });


    setTimeout(
      () => {

        window.scrollTo(
          0,
          0
        );

      },
      50
    );



    /* =====================================================
       PTIS DISTRICT ZONE ELEMENTS
    ===================================================== */

    const zoneCards =
      document.querySelectorAll(
        ".district-zone-card"
      );


    const zoneMemberPanel =
      document.getElementById(
        "zoneMemberPanel"
      );


    const zoneMemberGrid =
      document.getElementById(
        "zoneMemberGrid"
      );


    const zoneMemberTitle =
      document.getElementById(
        "zoneMemberTitle"
      );


    const zoneMemberDescription =
      document.getElementById(
        "zoneMemberDescription"
      );


    const closeZonePanel =
      document.getElementById(
        "closeZonePanel"
      );




/* =========================================================
   DISTRICT SCHOOL SUPERVISION COUNT
========================================================= */

function getDistrictSchoolCount() {

  const uniqueSchools =
    new Set();


  Object.values(
    ptisSchoolSupervision
  ).forEach(
    (schools) => {

      schools.forEach(
        (school) => {

          if (school.code) {

            uniqueSchools.add(
              school.code.trim().toUpperCase()
            );

          }

        }
      );

    }
  );


  return uniqueSchools.size;

}


    /* =====================================================
       PTIS DAERAH BALING DATA
    ===================================================== */

    const ptisZones = {


      /* ================= ZON BALING ================= */

      baling: {

        name:
          "Zon Baling",

        members: [

          {
            id: "nurul-wafa",
            name: "Nurul Wafa",
            imageId: "1Mn84I3W1cQt1UJIbWi-Lmm-SISwH9drM",
            leader: true
          },

          {
            id: "taufik",
            name: "Taufik",
            imageId: "1WoKBhH2nJ13pWabk7xqgkMOxyxt0dJ_4",
            leader: false
          },

          {
            id: "hifzan",
            name: "Hifzan",
            imageId: "1_yToIj5hk_VHu2taQH0nBjuHF8jKRxt7",
            leader: false
          },

          {
            id: "farhah",
            name: "Farhah Zaidar",
            imageId: "1CBFPav83PTYPs7GJt4i5XdyXdM_mGw8q",
            leader: false
          },

          {
            id: "aphiradee",
            name: "Aphiradee",
            imageId: "1-2RT19QGnUIKcHlztYgfb6-fdnDjpU4J",
            leader: false
          },

          {
            id: "abdullah",
            name: "Abdullah",
            imageId: "115BGp09icDcJeu3qGye3JascFIZ3sJ9L",
            leader: false
          },

          {
            id: "norhazfizi",
            name: "Norhafzizi",
            leader: false
          }

        ]

      },



      /* ================= ZON KUALA PEGANG ================= */

      "kuala-pegang": {

        name:
          "Zon Kuala Pegang",

        members: [

          {
            id: "zuhairie",
            name: "Zuhaire",
            imageId: "1YMrZeeXc1yzznvLhb5in8VhIBGK7UX8X",
            leader: true
          },

          {
            id: "fauzi",
            name: "Fauzi",
            imageId: "1diJmJ_EipTgzj8ZztEdnHSBNDD_qps-T",
            leader: false
          },

          {
            id: "bakrizal",
            name: "Bakrizal",
            imageId: "1iW0SgqSjdKTSToSeJctYuGxNSJFy8qc_",
            leader: false
          },

          {
            id: "hussin",
            name: "Hussin",
            imageId: "1FXE0wlKiZsE1EzPUHmtARzpLbyp7HeQg",
            leader: false
          },

          {
            id: "siti-zaleqha",
            name: "Siti Zaleqha",
            imageId: "1KpX7C_gr0twar6M2QzQY3b286GpA2y0P",
            leader: false
          },

          {
            id: "mazlina",
            name: "Mazlina",
            imageId: "1O62DBXz-FQjyc5OHtU80zWW2QEeir6Cx",
            leader: false
          },

          {
            id: "noorshafazillah",
            name: "Noorshafazilah",
            imageId: "1zLsevnbeRcUE_ZhpxRfPWwAojX0Gp_F-",
            leader: false
          }

        ]

      },



      /* ================= ZON KUALA KETIL ================= */

      "kuala-ketil": {

        name:
          "Zon Kuala Ketil",

        members: [

          {
            id: "yusminudin",
            name: "Yusminuddin",
            imageId: "1pj8dUjFeNkPYptzpLoXz9vAGyX6Bp9bm",
            leader: true
          },

          {
            id: "fitri",
            name: "Fitri",
            imageId: "1GG_G3vX0d4F5g6I-zQuHwucU3rfxpMtL",
            leader: false
          },

          {
            id: "ishak",
            name: "Ishak",
            imageId: "1ZVhMBI3oW3yHfrMUFG1wyRXN246Nka3U",
            leader: false
          },

          {
            id: "haris",
            name: "Haris",
            imageId: "1h-pIXll3dvVjCjD8Dq9xVA6ayvO5WcUT",
            leader: false
          },

          {
            id: "noor-diana",
            name: "Noor Diana",
            imageId: "1FOSL85Vib2o-DQ3TTNS4esZ_lul7a7fL",
            leader: false
          },

          {
            id: "dikneswary",
            name: "Dikneswary",
            imageId: "1EIisv5zNPMuw2RrCr64MqoZKUrjt1yn1",
            leader: false
          }

        ]

      }

    };

    /* =========================================================
   UPDATE DISTRICT SCHOOL COUNT
========================================================= */

function updateDistrictSchoolCount() {

  const schoolCountElement =
    document.getElementById(
      "districtSchoolCount"
    );


  if (!schoolCountElement) {
    return;
  }


  const totalSchools =
    getDistrictSchoolCount();


  schoolCountElement.textContent =
    totalSchools;

}



   /* =====================================================
   CREATE MEMBER CARD
===================================================== */

function createMemberCard(
  member
) {

  const leaderClass =
    member.leader
      ? " zone-member-card-leader"
      : "";


  /* =================================================
     MEMBER ROLE
  ================================================= */

  const roleDisplay =
    member.leader
      ? `
        <span class="zone-member-leader-badge">

          <i data-lucide="crown"></i>

          KETUA ZON

        </span>
      `
      : `
        <span class="zone-member-role">
          AHLI PTIS
        </span>
      `;


  /* =================================================
     GOOGLE DRIVE IMAGE
  ================================================= */

  const memberPhoto =
    member.imageId
      ? `
        <div class="zone-member-photo">

          <img
            src="https://drive.google.com/thumbnail?id=${member.imageId}&sz=w400"
            alt="${member.name}"
            loading="lazy"

            onerror="
              this.style.display='none';
              this.nextElementSibling.style.display='flex';
            "
          >

          <div
            class="zone-member-photo-fallback"
            style="display:none;"
          >

            <i data-lucide="user-round"></i>

          </div>

        </div>
      `
      : `
        <div class="zone-member-photo">

          <div
            class="zone-member-photo-fallback"
            style="display:flex;"
          >

            <i data-lucide="user-round"></i>

          </div>

        </div>
      `;


/* =================================================
   SCHOOL SUPERVISION
================================================= */

const schools =
  ptisSchoolSupervision[member.id] || [];

const schoolCount =
  schools.length;


/* =================================================
   CARD
================================================= */

return `

  <article
    class="zone-member-card${leaderClass}"
  >

    ${memberPhoto}


    <div class="zone-member-info">

      ${roleDisplay}

      <h5>
        ${member.name}
      </h5>

      <p>
        Pasukan Teknikal ICT Sekolah
      </p>


      <!-- SCHOOL SUPERVISION -->

      <button
  type="button"
  class="member-school-count"
  data-member-school="${member.id}"
  aria-label="Lihat sekolah seliaan ${member.name}"
>

  <i data-lucide="school"></i>

  <span>
    <strong>
      ${schoolCount}
    </strong>

    Sekolah Seliaan
  </span>

  <i
    data-lucide="chevron-right"
    class="member-school-arrow"
  ></i>

</button>


    </div>

  </article>

`;

}



    /* =====================================================
       OPEN ZONE MEMBERS
    ===================================================== */

    function openZoneMembers(
      zoneId
    ) {

      const zone =
        ptisZones[zoneId];


      if (!zone) {

        console.warn(
          "PTIS zone not found:",
          zoneId
        );

        return;

      }



      /* ================= ACTIVE ZONE CARD ================= */

      zoneCards.forEach(
        (card) => {

          const isActive =
            card.dataset.zone ===
            zoneId;


          card.classList.toggle(
            "active",
            isActive
          );

        }
      );



      /* ================= PANEL TITLE ================= */

      if (zoneMemberTitle) {

        zoneMemberTitle.textContent =
          zone.name;

      }



      /* ================= DESCRIPTION ================= */

      if (zoneMemberDescription) {

        zoneMemberDescription.textContent =
          `${zone.members.length} ahli Pasukan Teknikal ICT Sekolah`;

      }



      /* ================= MEMBER CARDS ================= */

      if (zoneMemberGrid) {

        zoneMemberGrid.innerHTML =
          zone.members
            .map(
              createMemberCard
            )
            .join("");

      }



      /* ================= SHOW PANEL ================= */

      if (zoneMemberPanel) {

        zoneMemberPanel.hidden =
          false;

      }



      /* ================= RELOAD ICONS ================= */

      if (window.lucide) {

        lucide.createIcons();

      }



      /* ================= SCROLL ================= */

      setTimeout(
        () => {

          zoneMemberPanel
            ?.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

        },
        100
      );

    }



    /* =====================================================
       ZONE CARD CLICK
    ===================================================== */

    zoneCards.forEach(
      (card) => {

        card.addEventListener(
          "click",
          () => {

            const zoneId =
              card.dataset.zone;


            if (!zoneId) return;


            openZoneMembers(
              zoneId
            );

          }
        );

      }
    );



    /* =====================================================
       CLOSE ZONE MEMBER PANEL
    ===================================================== */

    closeZonePanel
      ?.addEventListener(
        "click",
        () => {


          /* HIDE PANEL */

          if (zoneMemberPanel) {

            zoneMemberPanel.hidden =
              true;

          }


          /* REMOVE ACTIVE CARD */

          zoneCards.forEach(
            (card) => {

              card.classList.remove(
                "active"
              );

            }
          );


        }
      );



/* =====================================================
   UPDATE DISTRICT SCHOOL COUNT
===================================================== */

updateDistrictSchoolCount();


/* =====================================================
   INITIALIZE LUCIDE ICONS
===================================================== */

if (window.lucide) {

  lucide.createIcons();

}


  }
);