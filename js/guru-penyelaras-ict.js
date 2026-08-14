/* =========================================================
   PTIS SMART PORTAL 2026
   GURU PENYELARAS ICT ENGINE
========================================================= */


/* =========================================================
   TAB NAVIGATION
========================================================= */

function initGPITabs() {

  const tabs =
    document.querySelectorAll(".gpi-tab");

  const panels =
    document.querySelectorAll(".gpi-panel");


  if (!tabs.length || !panels.length) {
    return;
  }


  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target =
        tab.dataset.tab;


      /* ================= REMOVE ACTIVE TAB ================= */

      tabs.forEach(item => {

        item.classList.remove("active");

      });


      /* ================= REMOVE ACTIVE PANEL ================= */

      panels.forEach(panel => {

        panel.classList.remove("active");

      });


      /* ================= ACTIVE CURRENT TAB ================= */

      tab.classList.add("active");


      /* ================= ACTIVE TARGET PANEL ================= */

      const targetPanel =
        document.getElementById(target);

      if (targetPanel) {

        targetPanel.classList.add("active");

      }


      /* ================= REFRESH ICON ================= */

      if (window.lucide) {

        lucide.createIcons();

      }

    });

  });

}


/* =========================================================
   INITIALIZE PAGE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderGPIRoles();

    renderGPIManagement();

    renderGPIReferences();

    initGPITabs();


    if (window.lucide) {

      lucide.createIcons();

    }

  }
);

/* =========================================================
   DATA : PERANAN & TANGGUNGJAWAB GURU PENYELARAS ICT
========================================================= */

const gpiRoles = [

  {
    no: "01",
    icon: "monitor-cog",
    title: "Pengurusan ICT Sekolah",
    description:
      "Menyelaras dan membantu memastikan pengurusan ICT sekolah dilaksanakan secara terancang, sistematik dan berkesan."
  },

  {
    no: "02",
    icon: "network",
    title: "Infrastruktur & Rangkaian",
    description:
      "Membantu menyelaras penggunaan infrastruktur, peralatan dan rangkaian ICT bagi menyokong keperluan pengurusan serta pembelajaran di sekolah."
  },

  {
    no: "03",
    icon: "laptop",
    title: "Peralatan ICT",
    description:
      "Membantu memantau penggunaan, keperluan dan status peralatan ICT sekolah serta melaporkan isu yang memerlukan tindakan teknikal."
  },

  {
    no: "04",
    icon: "clipboard-check",
    title: "Rekod & Dokumentasi",
    description:
      "Memastikan maklumat, rekod dan dokumentasi berkaitan pengurusan ICT sekolah diselenggara dan dikemas kini untuk tujuan rujukan."
  },

  {
    no: "05",
    icon: "headphones",
    title: "Aduan & Sokongan Teknikal",
    description:
      "Menyelaras pelaporan isu atau aduan ICT sekolah melalui saluran yang ditetapkan dan bekerjasama dengan pihak teknikal bagi tindakan susulan."
  },

  {
    no: "06",
    icon: "shield-check",
    title: "Keselamatan ICT",
    description:
      "Membantu meningkatkan kesedaran serta pematuhan terhadap amalan keselamatan ICT dalam penggunaan peralatan, sistem dan perkhidmatan digital sekolah."
  },

  {
    no: "07",
    icon: "users",
    title: "Sokongan Warga Sekolah",
    description:
      "Membantu guru dan warga sekolah dalam penggunaan kemudahan, aplikasi serta perkhidmatan ICT berdasarkan keperluan semasa."
  },

  {
    no: "08",
    icon: "refresh-cw",
    title: "Pemantauan & Penambahbaikan",
    description:
      "Membantu memantau pelaksanaan pengurusan ICT dan mengenal pasti keperluan penambahbaikan bagi meningkatkan keberkesanan penggunaan teknologi di sekolah."
  }

];

/* =========================================================
   RENDER : PERANAN & TANGGUNGJAWAB
========================================================= */

function renderGPIRoles() {

  const container =
    document.getElementById("gpiRoleGrid");

  if (!container) return;


  container.innerHTML =
    gpiRoles.map(role => `

      <article class="gpi-role-card">

        <div class="gpi-role-card-top">

          <div class="gpi-role-icon">

            <i data-lucide="${role.icon}"></i>

          </div>


          <span class="gpi-role-number">
            ${role.no}
          </span>

        </div>


        <h3>
          ${role.title}
        </h3>


        <p>
          ${role.description}
        </p>

      </article>

    `).join("");


  if (window.lucide) {
    lucide.createIcons();
  }

}

/* =========================================================
   DATA : PENGURUSAN ICT SEKOLAH
========================================================= */

const gpiManagement = [

  {
    no: "01",
    icon: "wifi",
    title: "Rangkaian & Internet",
    description:
      "Membantu memantau kemudahan rangkaian dan capaian internet sekolah serta melaporkan gangguan atau isu kepada pihak berkaitan.",
    items: [
      "Status capaian internet",
      "Peralatan rangkaian",
      "Liputan rangkaian",
      "Pelaporan gangguan"
    ]
  },

  {
    no: "02",
    icon: "monitor",
    title: "Peralatan ICT",
    description:
      "Membantu memastikan penggunaan dan status peralatan ICT sekolah dipantau bagi menyokong operasi serta PdP.",
    items: [
      "Komputer & laptop",
      "Projektor / paparan",
      "Pencetak",
      "Peralatan sokongan ICT"
    ]
  },

  {
    no: "03",
    icon: "database",
    title: "Data & Rekod ICT",
    description:
      "Menyelaras dan mengemas kini rekod berkaitan kemudahan serta pengurusan ICT sekolah untuk tujuan rujukan dan pelaporan.",
    items: [
      "Inventori ICT",
      "Maklumat peralatan",
      "Rekod kerosakan",
      "Status tindakan"
    ]
  },

  {
    no: "04",
    icon: "headphones",
    title: "Aduan Teknikal",
    description:
      "Membantu memastikan isu teknikal ICT direkod dan disalurkan melalui saluran sokongan yang telah ditetapkan.",
    items: [
      "Kenal pasti masalah",
      "Rekod aduan",
      "Rujukan kepada JTK",
      "Pemantauan tindakan"
    ]
  },

  {
    no: "05",
    icon: "shield-check",
    title: "Keselamatan Digital",
    description:
      "Membantu sekolah melaksanakan amalan penggunaan ICT yang selamat serta meningkatkan kesedaran keselamatan digital.",
    items: [
      "Keselamatan akaun",
      "Kata laluan",
      "Perlindungan data",
      "Amalan penggunaan selamat"
    ]
  },

  {
    no: "06",
    icon: "cloud-cog",
    title: "Sistem & Aplikasi",
    description:
      "Membantu menyelaras penggunaan sistem dan aplikasi digital yang digunakan dalam pengurusan serta perkhidmatan sekolah.",
    items: [
      "Akaun pengguna",
      "Akses sistem",
      "Aplikasi pendidikan",
      "Sokongan penggunaan"
    ]
  }

];

/* =========================================================
   RENDER : PENGURUSAN ICT
========================================================= */

function renderGPIManagement() {

  const container =
    document.getElementById("gpiManagementGrid");

  if (!container) return;


  container.innerHTML =
    gpiManagement.map(item => `

      <article class="gpi-management-card">

        <div class="gpi-management-header">

          <div class="gpi-management-icon">

            <i data-lucide="${item.icon}"></i>

          </div>


          <div class="gpi-management-title">

            <span>
              BIDANG ${item.no}
            </span>

            <h3>
              ${item.title}
            </h3>

          </div>


          <span class="gpi-management-number">
            ${item.no}
          </span>

        </div>


        <p class="gpi-management-description">
          ${item.description}
        </p>


        <div class="gpi-management-items">

          ${item.items.map(subItem => `

            <div class="gpi-management-item">

              <i data-lucide="check"></i>

              <span>
                ${subItem}
              </span>

            </div>

          `).join("")}

        </div>

      </article>

    `).join("");


  if (window.lucide) {
    lucide.createIcons();
  }

}

/* =========================================================
   DATA : RUJUKAN GURU PENYELARAS ICT
========================================================= */

const gpiReferences = [

  {
    icon: "book-open-check",
    category: "PENGURUSAN ICT",
    title: "Panduan Pengurusan ICT Sekolah",
    description:
      "Rujukan asas bagi membantu penyelarasan pengurusan ICT, " +
      "infrastruktur, peralatan dan perkhidmatan digital di sekolah.",
    points: [
      "Pengurusan kemudahan ICT",
      "Pemantauan infrastruktur",
      "Rekod dan dokumentasi",
      "Penyelarasan tindakan"
    ]
  },

  {
    icon: "headphones",
    category: "SOKONGAN TEKNIKAL",
    title: "Pelaporan Aduan ICT",
    description:
      "Panduan asas untuk mengenal pasti, merekod dan menyalurkan " +
      "isu teknikal ICT kepada saluran sokongan yang berkaitan.",
    points: [
      "Kenal pasti isu",
      "Rekod maklumat aduan",
      "Salurkan kepada pihak berkaitan",
      "Pantau status tindakan"
    ]
  },

  {
    icon: "shield-check",
    category: "KESELAMATAN",
    title: "Keselamatan & Penggunaan ICT",
    description:
      "Rujukan amalan penggunaan teknologi secara selamat dan " +
      "bertanggungjawab dalam persekitaran digital sekolah.",
    points: [
      "Keselamatan akaun",
      "Pengurusan kata laluan",
      "Perlindungan maklumat",
      "Kesedaran keselamatan digital"
    ]
  },

  {
    icon: "database",
    category: "DATA ICT",
    title: "Rekod & Pelaporan",
    description:
      "Rujukan bagi memastikan maklumat berkaitan ICT sekolah " +
      "dikemas kini dan tersedia untuk tujuan pemantauan serta pelaporan.",
    points: [
      "Rekod peralatan",
      "Status kemudahan",
      "Rekod kerosakan",
      "Maklumat tindakan"
    ]
  }

];

/* =========================================================
   EXPOSE GURU PENYELARAS ICT DATA FOR PTIS AI
========================================================= */

window.ptisGPIRoles =
  gpiRoles;

window.ptisGPIReferences =
  gpiReferences;

/* =========================================================
   RENDER : RUJUKAN
========================================================= */

function renderGPIReferences() {

  const container =
    document.getElementById("gpiReferenceContainer");

  if (!container) return;


  container.innerHTML = `

    <div class="gpi-reference-intro">

      <div class="gpi-reference-intro-icon">

        <i data-lucide="library"></i>

      </div>


      <div>

        <span>
          PUSAT RUJUKAN ICT
        </span>

        <h3>
          Panduan Pengurusan ICT Sekolah
        </h3>

        <p>
          Ringkasan maklumat untuk membantu Guru Penyelaras ICT
          mengurus, menyelaras dan memantau keperluan ICT
          di peringkat sekolah.
        </p>

      </div>

    </div>


    <div class="gpi-reference-grid">

      ${gpiReferences.map(item => `

        <article class="gpi-reference-card">


          <div class="gpi-reference-card-header">

            <div class="gpi-reference-icon">

              <i data-lucide="${item.icon}"></i>

            </div>


            <span class="gpi-reference-category">
              ${item.category}
            </span>

          </div>


          <h3>
            ${item.title}
          </h3>


          <p class="gpi-reference-description">
            ${item.description}
          </p>


          <div class="gpi-reference-points">

            ${item.points.map(point => `

              <div class="gpi-reference-point">

                <i data-lucide="check-circle-2"></i>

                <span>
                  ${point}
                </span>

              </div>

            `).join("")}

          </div>


        </article>

      `).join("")}

    </div>

  `;


  if (window.lucide) {
    lucide.createIcons();
  }

}