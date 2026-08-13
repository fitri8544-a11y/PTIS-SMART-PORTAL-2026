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


/* ================= DEMO SUBMIT ================= */

chatForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const question =
      chatInput?.value.trim();


    if (!question) return;


    console.log(
      "PTIS AI Question:",
      question
    );


    chatInput.value = "";

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