/* =========================================================
   PTIS SMART PORTAL 2026
   SKOP TUGAS JTK ENGINE
========================================================= */


/* =========================================================
   DATA : PENYELARAS PTIS
========================================================= */

const penyelarasTasks = [

  {
    no: 1,
    title: "Sasaran Kerja Utama (SKU)",
    description:
      "Menyelaras Sasaran Kerja Utama (SKU) Juruteknik Komputer (JTK) di bawah seliaan."
  },

  {
    no: 2,
    title: "Sumber Kewangan & Perolehan",
    description:
      "Menyelaras keperluan sumber kewangan bagi tujuan perolehan dan penyelenggaraan peralatan ICT di peringkat sekolah."
  },

  {
    no: 3,
    title: "Penyelarasan Perkhidmatan Teknikal",
    description:
      "Menyelaras JTK bagi pelaksanaan perkhidmatan teknikal ICT Kementerian, Jabatan (JPN), PPD dan sekolah."
  },

  {
    no: 4,
    title: "Laporan Berkala Perkhidmatan",
    description:
      "Menyediakan laporan perkhidmatan teknikal ICT secara berkala bagi membantu memberi input dalam menyediakan keperluan kelengkapan ICT untuk pengurusan sekolah."
  },

  {
    no: 5,
    title: "Penyeliaan & Pemantauan Operasi",
    description:
      "Menyelaras, menyelia dan memantau aktiviti serta tugasan JTK bagi pengurusan pengoperasian perkhidmatan teknikal ICT di peringkat sekolah."
  },

  {
    no: 6,
    title: "Pegawai Bantuan Teknikal (PBT ICT - ISD)",
    description:
      "Bertindak sebagai Pegawai Bantuan Teknikal ICT (PBT ICT) di peringkat JPN/PPD untuk menyelaras aduan Sistem ISD, menganalisis, mengarahkan JTK dan memantau status aduan sehingga selesai."
  },

  {
    no: 7,
    title: "Penyelenggaraan CM & PM",
    description:
      "Menyelaras, menyelia dan memantau bagi kerja-kerja penyelenggaraan pembaikan (Corrective Maintenance) dan pencegahan (Preventive Maintenance) peralatan ICT sekolah."
  },

  {
    no: 8,
    title: "Pelaporan Berkala ke JPN",
    description:
      "Melaporkan tindakan serta tugasan yang dilaksanakan oleh JTK kepada JPN secara berkala."
  },

  {
    no: 9,
    title: "Kerjasama Latihan & Kursus",
    description:
      "Bekerjasama dengan JPN bagi melaksana dan menyelaras latihan atau kursus untuk JTK yang terlibat dalam pelaksanaan pemusatan perkhidmatan teknikal ICT."
  }

];

/* =========================================================
   DATA : JURUTEKNIK KOMPUTER
========================================================= */

const jtkScopes = [

  {
    no: "i",
    title: "Pelaksanaan Perkhidmatan Teknikal ICT Dirancang",

    items: [

      {
        icon: "download",
        label: "a. Pemasangan",
        description:
          "Melaksanakan pemasangan perkakasan, perisian dan aplikasi mengikut keperluan pengguna."
      },

      {
        icon: "monitor-cog",
        label: "b. Sokongan PdP & PdT",
        description:
          "Memberi perkhidmatan teknikal bagi penggunaan kelengkapan ICT dalam Pengajaran & Pembelajaran (PdP) serta Pengurusan & Pentadbiran (PdT)."
      },

      {
        icon: "users-round",
        label: "c. Latihan Teknikal",
        description:
          "Membantu memberi perkhidmatan teknikal dan latihan dalam penggunaan perkakasan ICT, perisian dan aplikasi."
      },

      {
        icon: "shopping-cart",
        label: "d. Kenal Pasti Perolehan/Pelupusan",
        description:
          "Membantu Penyelaras Pasukan bagi mengenal pasti keperluan perolehan, penggantian dan pelupusan peralatan ICT di sekolah."
      },

      {
        icon: "file-warning",
        label: "e. Laporan Kerosakan",
        description:
          "Melapor dan membantu memohon penggantian kelengkapan ICT sekolah yang rosak."
      },

      {
        icon: "boxes",
        label: "f. Maklumat Aset Alih",
        description:
          "Membantu menyediakan maklumat aset alih kerajaan bagi perkakasan ICT dan perisian kepada pihak pengurusan sekolah."
      },

      {
        icon: "trash-2",
        label: "g. Khidmat Nasihat Pelupusan",
        description:
          "Membantu memberi khidmat nasihat teknikal kepada pihak pengurusan sekolah dalam menguruskan proses pelupusan aset ICT."
      }

    ]

  },


  {
    no: "ii",
    title:
      "Pembaikan & Penyelenggaraan Pencegahan (CM & PM)",

    items: [

      {
        icon: "shield-check",
        label:
          "a. Penyelenggaraan Pencegahan (PM)",
        description:
          "Melaksanakan kerja-kerja penyelenggaraan pencegahan (preventive maintenance) perkakasan ICT, perisian dan rangkaian secara berkala."
      },

      {
        icon: "wrench",
        label:
          "b. Penyelenggaraan Pembaikan (CM)",
        description:
          "Melaksanakan kerja-kerja penyelenggaraan pembaikan (corrective maintenance) perkakasan ICT, perisian dan rangkaian berdasarkan aduan."
      },

      {
        icon: "user-check",
        label:
          "c. Pemantauan Pihak Ketiga",
        description:
          "Melaksanakan pemantauan dan mengesahkan kerja-kerja penyelenggaraan pembaikan dan pencegahan yang dilaksanakan oleh pihak ketiga."
      },

      {
        icon: "clipboard-list",
        label:
          "d. Laporan PM Dalaman",
        description:
          "Menyediakan laporan aktiviti penyelenggaraan pencegahan secara berkala bagi aset ICT yang diselenggara secara dalaman."
      }

    ]

  },


  {
    no: "iii",
    title:
      "Sokongan Tahap Kedua (2nd Level Support)",

    description:
      "Menganalisis dan mengambil tindakan penyelesaian tahap kedua (2nd level support) terhadap isu/aduan kerosakan merangkumi perkakasan ICT, perisian dan rangkaian."
  },


  {
    no: "iv",
    title:
      "Maklum Balas Aduan ISD",

    description:
      "Memberi maklum balas kepada Penyelaras Pasukan terhadap tindakan penyelesaian dan status aduan ICT yang dilaporkan di dalam sistem ISD."
  }

];

/* =========================================================
   GARIS PANDUAN PEMUSATAN PTIS
========================================================= */

const ptisGuidelines = [

  {
    no: "01",
    title: "Tujuan Pemusatan PTIS",
    icon: "target",
    description:
      "Memastikan pengurusan dan penyampaian perkhidmatan teknikal ICT sekolah dilaksanakan secara lebih sistematik, terancang dan berkesan."
  },

  {
    no: "02",
    title: "Penyelarasan Perkhidmatan",
    icon: "workflow",
    description:
      "Penyelaras PTIS menyelaras tugasan Juruteknik Komputer berdasarkan keperluan sekolah, keutamaan perkhidmatan dan arahan semasa."
  },

  {
    no: "03",
    title: "Pengurusan Aduan ICT",
    icon: "headphones",
    description:
      "Aduan berkaitan ICT hendaklah direkod, disemak dan diselaraskan melalui saluran atau sistem aduan yang ditetapkan."
  },

  {
    no: "04",
    title: "Pelaksanaan Tugasan JTK",
    icon: "wrench",
    description:
      "Juruteknik Komputer melaksanakan tugasan teknikal berdasarkan skop perkhidmatan, penugasan dan keutamaan yang telah ditetapkan."
  },

  {
    no: "05",
    title: "Pemantauan & Penyeliaan",
    icon: "clipboard-check",
    description:
      "Pelaksanaan tugasan hendaklah dipantau bagi memastikan tindakan teknikal, penyelenggaraan dan sokongan ICT dilaksanakan dengan teratur."
  },

  {
    no: "06",
    title: "Rekod & Pelaporan",
    icon: "file-text",
    description:
      "Rekod tugasan, tindakan penyelesaian dan laporan perkhidmatan hendaklah dikemas kini sebagai rujukan dan pemantauan."
  },

  {
    no: "07",
    title: "Penyelenggaraan ICT",
    icon: "settings",
    description:
      "Aktiviti penyelenggaraan pencegahan dan pembaikan peralatan ICT hendaklah dilaksanakan mengikut keperluan serta jadual yang ditetapkan."
  },

  {
    no: "08",
    title: "Sokongan Kepada Sekolah",
    icon: "school",
    description:
      "PTIS menyediakan sokongan teknikal kepada sekolah bagi membantu kelancaran penggunaan peralatan, perisian, aplikasi dan rangkaian ICT."
  },

  {
    no: "09",
    title: "Eskalasi Isu Teknikal",
    icon: "arrow-up-right",
    description:
      "Isu yang tidak dapat diselesaikan pada peringkat sekolah hendaklah dirujuk atau dieskalasikan kepada pihak berkaitan untuk tindakan selanjutnya."
  }

];



/* =========================================================
   RENDER PENYELARAS TASK
========================================================= */

function renderPenyelarasTasks(){

  const container =
    document.getElementById(
      "penyelarasTaskGrid"
    );

  if(!container) return;


  container.innerHTML =
    penyelarasTasks
      .map(task => {

        return `

          <article class="task-card">

            <div class="task-number">
              ${task.no}
            </div>


            <div class="task-content">

              <h3>
                ${task.title}
              </h3>

              <p>
                ${task.description}
              </p>

            </div>

          </article>

        `;

      })
      .join("");

}

/* =========================================================
   RENDER JTK SCOPES
========================================================= */

function renderJTKScopes(){

  const container =
    document.getElementById(
      "jtkScopeContainer"
    );

  if(!container) return;


  container.innerHTML =
    jtkScopes
      .map(scope => {

        /* =============================================
           SKOP YANG MEMPUNYAI SUB ITEM
        ============================================= */

        if(scope.items){

          const itemsHTML =
            scope.items
              .map(item => {

                return `

                  <article class="jtk-item">

                    <h4>

                      <i
                        data-lucide="${item.icon}"
                      ></i>

                      ${item.label}

                    </h4>

                    <p>
                      ${item.description}
                    </p>

                  </article>

                `;

              })
              .join("");


          return `

            <section
              class="jtk-scope-card"
              data-scope="${scope.no}"
            >

              <div class="jtk-scope-title">

                <span class="jtk-scope-badge">
                  Skop (${scope.no})
                </span>

                <h3>
                  ${scope.title}
                </h3>

              </div>


              <div class="jtk-item-grid">

                ${itemsHTML}

              </div>

            </section>

          `;

        }


        /* =============================================
           SKOP III & IV
        ============================================= */

        return `

          <section
            class="jtk-scope-card jtk-scope-simple"
            data-scope="${scope.no}"
          >

            <div class="jtk-scope-title">

              <span class="jtk-scope-badge">
                Skop (${scope.no})
              </span>

              <h3>
                ${scope.title}
              </h3>

            </div>

            <p class="jtk-scope-description">
              ${scope.description}
            </p>

          </section>

        `;

      })
      .join("");


  if(
    typeof lucide !==
    "undefined"
  ){

    lucide.createIcons();

  }

}

/* =========================================================
   RENDER GARIS PANDUAN
========================================================= */

function renderGuidelines() {

  const container =
    document.getElementById("guidelineContainer");

  if (!container) return;


  container.innerHTML = `

    <div class="guideline-intro-card">

      <div class="guideline-intro-icon">

        <i data-lucide="book-open-check"></i>

      </div>


      <div>

        <span class="guideline-label">
          GARIS PANDUAN PENGOPERASIAN
        </span>

        <h3>
          Pemusatan Pasukan Teknikal ICT Sekolah
        </h3>

        <p>
          Panduan ini menjadi rujukan asas bagi membantu
          penyelarasan, pelaksanaan, pemantauan dan pelaporan
          perkhidmatan teknikal ICT sekolah.
        </p>

      </div>

    </div>


    <div class="guideline-grid">

      ${ptisGuidelines.map(item => `

        <article class="guideline-card">

          <div class="guideline-card-top">

            <div class="guideline-icon">

              <i data-lucide="${item.icon}"></i>

            </div>

            <span class="guideline-number">
              ${item.no}
            </span>

          </div>


          <h3>
            ${item.title}
          </h3>


          <p>
            ${item.description}
          </p>

        </article>

      `).join("")}

    </div>

  `;


  if (window.lucide) {
    lucide.createIcons();
  }

}



/* =========================================================
   TAB NAVIGATION
========================================================= */

function initScopeTabs(){

  const tabs =
    document.querySelectorAll(
      ".scope-tab"
    );

  const panels =
    document.querySelectorAll(
      ".scope-panel"
    );


  tabs.forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        const target =
          tab.dataset.tab;


        /* REMOVE ACTIVE TAB */

        tabs.forEach(item => {

          item.classList.remove(
            "active"
          );

        });


        /* REMOVE ACTIVE PANEL */

        panels.forEach(panel => {

          panel.classList.remove(
            "active"
          );

        });


        /* ACTIVE CURRENT TAB */

        tab.classList.add(
          "active"
        );


        /* ACTIVE TARGET PANEL */

        const targetPanel =
          document.getElementById(
            target
          );

        if(targetPanel){

          targetPanel.classList.add(
            "active"
          );

        }

      }
    );

  });

}



/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderPenyelarasTasks();

    initScopeTabs();

    renderJTKScopes();

    renderGuidelines();


    if(
      typeof lucide !==
      "undefined"
    ){

      lucide.createIcons();

    }

  }
);

/* =========================================================
   GARIS PANDUAN PEMUSATAN PTIS
========================================================= */

function renderGuidelines() {

  const container =
    document.getElementById("guidelineContainer");

  if (!container) return;


  const guidelineData = [

    {
      icon: "target",
      title: "Tujuan Garis Panduan",
      text:
        "Menjelaskan urusan tadbir urus perjawatan, " +
        "perkhidmatan dan pengoperasian teknikal berikutan " +
        "pelaksanaan pemusatan Perkhidmatan Teknikal ICT " +
        "Sekolah di Jabatan Pendidikan Negeri (JPN)."
    },

    {
      icon: "building-2",
      title: "Pemusatan Perkhidmatan",
      text:
        "Perjawatan Juruteknik Komputer (JTK) dipusatkan " +
        "daripada sekolah ke Jabatan Pendidikan Negeri " +
        "bagi memperkukuh tadbir urus Perkhidmatan " +
        "Teknikal ICT Sekolah."
    },

    {
      icon: "network",
      title: "Tadbir Urus ICT",
      text:
        "Memantapkan tadbir urus ICT secara menyeluruh " +
        "merangkumi Pejabat Pendidikan Daerah dan sekolah " +
        "supaya perkhidmatan teknikal ICT dapat dilaksanakan " +
        "dengan lebih efisien."
    },

    {
      icon: "users",
      title: "Pengoptimuman Sumber Manusia",
      text:
        "Mengoptimumkan penggunaan sumber manusia serta " +
        "meningkatkan kemahiran teknikal dan kompetensi " +
        "Juruteknik Komputer bagi menambah baik penyampaian " +
        "perkhidmatan ICT."
    },

    {
      icon: "monitor-cog",
      title: "Kesediaan Infrastruktur ICT",
      text:
        "Meningkatkan tahap kesediaan infrastruktur ICT " +
        "melalui penyelenggaraan peralatan serta pelaporan " +
        "secara berkala dan berjadual."
    },

    {
      icon: "clipboard-check",
      title: "Pelaksanaan Tugas JTK",
      text:
        "Memastikan tugas Juruteknik Komputer dilaksanakan " +
        "dengan jelas dan teratur mengikut deskripsi tugas " +
        "yang telah ditetapkan."
    },

    {
      icon: "headphones",
      title: "ICT Service Desk (ISD)",
      text:
        "Pengurusan perkhidmatan teknikal ICT hendaklah " +
        "mematuhi Prosedur Meja Perkhidmatan ICT " +
        "(ICT Service Desk - ISD) Kementerian Pendidikan."
    },

    {
      icon: "file-check-2",
      title: "Pematuhan Dasar",
      text:
        "Pelaksanaan hendaklah mematuhi pekeliling, dasar, " +
        "arahan dan kontrak yang sedang berkuat kuasa " +
        "berkaitan pelaksanaan projek ICT."
    }

  ];


  container.innerHTML = `

    <div class="guideline-intro">

      <div class="guideline-intro-icon">
        <i data-lucide="book-open-check"></i>
      </div>

      <div>

        <span class="guideline-label">
          DOKUMEN RUJUKAN
        </span>

        <h3>
          Garis Panduan Pelaksanaan Pemusatan
          Perkhidmatan Teknikal ICT Sekolah
        </h3>

        <p>
          Ringkasan rujukan berkaitan tadbir urus,
          perjawatan, perkhidmatan dan pengoperasian
          Pasukan Teknikal ICT Sekolah.
        </p>

      </div>

    </div>


    <div class="guideline-grid">

      ${guidelineData.map((item, index) => `

        <article class="guideline-card">

          <div class="guideline-card-top">

            <div class="guideline-icon">
              <i data-lucide="${item.icon}"></i>
            </div>

            <span class="guideline-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

          </div>


          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.text}
          </p>

        </article>

      `).join("")}

    </div>


    <div class="guideline-notice">

      <div class="guideline-notice-icon">
        <i data-lucide="calendar-check-2"></i>
      </div>

      <div>

        <strong>
          Tarikh Kuat Kuasa
        </strong>

        <p>
          Garis Panduan Pelaksanaan Pemusatan
          Perkhidmatan Teknikal ICT Sekolah ini
          berkuat kuasa mulai
          <strong>3 Ogos 2023</strong>.
        </p>

      </div>

    </div>

  `;


  if (window.lucide) {
    lucide.createIcons();
  }

}


/* =========================================================
   INITIALIZE GARIS PANDUAN
========================================================= */

renderGuidelines();