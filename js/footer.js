/* =========================================================
   PTIS SMART PORTAL 2026
   GLOBAL FOOTER COMPONENT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const footerContainer =
    document.getElementById("globalFooter");

  if (!footerContainer) {
    console.warn("Global footer container tidak dijumpai.");
    return;
  }


  /* =========================================================
     FOOTER HTML
  ========================================================= */

  footerContainer.innerHTML = `

    <footer
      id="footer"
      class="footer"
    >

      <div class="footer-main">


        <!-- ================= BRAND ================= -->

        <div class="footer-brand">

          <div class="footer-brand-header">

            <div class="footer-logo">

  <img
    src="assets/logo-ptis.png"
    alt="Logo PTIS Daerah Baling"
    class="footer-logo-image"
  >

</div>

            <div>

              <strong>
                PTIS DAERAH BALING
              </strong>

              <span>
                Pasukan Teknikal ICT Sekolah
              </span>

            </div>

          </div>


          <p>
            Menyokong transformasi digital pendidikan melalui
            pengurusan dan perkhidmatan ICT sekolah yang
            sistematik, cekap dan berkesan.
          </p>


          <div class="footer-status">

            <span class="status-dot"></span>

            <span>
              Semua Sistem Beroperasi
            </span>

          </div>

        </div>



        <!-- ================= PORTAL ================= -->

        <div class="footer-column">

          <h3>
            Portal
          </h3>

          <a href="index.html">
            Dashboard
          </a>

          <a href="organisasi.html">
            Organisasi
          </a>

          <a href="maklumat-sekolah.html">
            Maklumat Sekolah
          </a>

        </div>



        <!-- ================= PERKHIDMATAN ================= -->

        <div class="footer-column">

          <h3>
            Perkhidmatan
          </h3>

          <a href="skop-tugas-jtk.html">
            Skop Tugas JTK
          </a>

          <a href="guru-penyelaras-ict.html">
            Guru Penyelaras ICT
          </a>

          <a href="digital-forms.html">
            Digital Forms
          </a>

          <a href="projek-sewaan-ict.html">
            Projek Sewaan ICT Sekolah
          </a>

        </div>



        <!-- ================= STATUS ================= -->

        <div class="footer-column footer-info">

          <h3>
            Portal Status
          </h3>


          <div class="footer-status-card">

            <div class="footer-status-top">

              <span class="status-dot"></span>

              <strong>
                System Online
              </strong>

            </div>


            <p>
              Portal beroperasi seperti biasa.
            </p>

          </div>


          <div class="footer-update">

            <i data-lucide="clock-3"></i>

            <div>

              <span>
                Kemaskini Terakhir
              </span>

              <strong id="footerLastUpdate">
                -
              </strong>

            </div>

          </div>

        </div>


      </div>



      <!-- ================= FOOTER BOTTOM ================= -->

      <div class="footer-bottom">

        <p>
          © <span id="footerYear"></span>
          Pasukan Teknikal ICT Sekolah (PTIS)
          Daerah Baling.
        </p>


        <div class="footer-bottom-right">

          <span>
            Digital ICT Support Portal
          </span>

          <span class="footer-separator">
            •
          </span>

          <span>
            PTIS Smart Portal 2026
          </span>

        </div>

      </div>


    </footer>

  `;


  /* =========================================================
     CURRENT YEAR
  ========================================================= */

  const footerYear =
    document.getElementById("footerYear");

  if (footerYear) {

    footerYear.textContent =
      new Date().getFullYear();

  }


  /* =========================================================
     LAST UPDATE
  ========================================================= */

  const footerLastUpdate =
    document.getElementById("footerLastUpdate");

  if (footerLastUpdate) {

    const today = new Date();

    const months = [
      "Jan",
      "Feb",
      "Mac",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ogo",
      "Sep",
      "Okt",
      "Nov",
      "Dis"
    ];

    footerLastUpdate.textContent =
      `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

  }


  /* =========================================================
     REFRESH LUCIDE ICONS
  ========================================================= */

  if (typeof lucide !== "undefined") {

    lucide.createIcons();

  }

});