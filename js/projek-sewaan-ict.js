/* =========================================================
   PTIS SMART PORTAL 2026
   PROJEK SEWAAN ICT SEKOLAH
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

/* =====================================================
   FOOTER INFO
===================================================== */

const footerYear =
    document.getElementById("footerYear");

const footerLastUpdate =
    document.getElementById("footerLastUpdate");


if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


if (footerLastUpdate) {

    const now = new Date();

    footerLastUpdate.textContent =
        now.toLocaleDateString(
            "ms-MY",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}

    /* =====================================================
       DATA PROJEK
    ===================================================== */

    const projectData = {

        pdp1: {
            title: "PDP FASA 1",
            category: "Peralatan PdP",
            company: "SETIA MAKMUR GEMILANG SDN. BHD.",
            status: "LEASE TO USE",
            duration: "65 Bulan",
            start: "15 Dis 2021",
            end: "14 Mei 2027",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "LENOVO THINKPAD K14"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "WAGENN CT-30"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "CANON MAXIFY GX7070"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "CANON LV-X350"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        },


        pdp2: {
            title: "PDP FASA 2",
            category: "Peralatan PdP",
            company: "SNS NETWORK (M) SDN. BHD.",
            status: "LEASE TO USE",
            duration: "65 Bulan",
            start: "20 Dis 2022",
            end: "19 Mei 2028",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "DELL LATITUDE 3420"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "MOMENTUM CABBYTANK M30"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "CANON MAXIFY GX7070"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "CANON LV-X350"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        },


        pdp3: {
            title: "PDP FASA 3",
            category: "Peralatan PdP",
            company: "PRIVASIA SDN. BHD.",
            status: "LEASE TO USE",
            duration: "65 Bulan",
            start: "26 Okt 2023",
            end: "25 Mac 2029",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "LENOVO THINKPAD K14"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "KINETIC"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "CANON MAXIFY GX7070"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "VIEWSONIC T47X"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        },


        pdp4: {
            title: "PDP FASA 4",
            category: "Peralatan PdP",
            company: "MITRACORP RESOURCES SDN. BHD.",
            status: "LEASE TO OWN",
            duration: "65 Bulan",
            start: "01 Jan 2026",
            end: "31 Mei 2031",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "LENOVO THINKPAD K14"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "KINETIC"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "EPSON"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "EPSON"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        },


        pdt1: {
            title: "PDT FASA 1",
            category: "Peralatan PDT",
            company: "NIGHT ELECTRONICS (M) SDN. BHD.",
            status: "LEASE TO USE",
            duration: "60 Bulan",
            start: "03 Sep 2021",
            end: "02 Sep 2026",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "Tiada"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "Tiada"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "OKI B432DN"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "Tiada"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "ACER VERITON S2670G"
                }
            ]
        },


        pdt2: {
            title: "PDT FASA 2",
            category: "Peralatan PDT",
            company: "ARIZ DIGITAL SDN. BHD.",
            status: "LEASE TO OWN",
            duration: "60 Bulan",
            start: "01 Mei 2025",
            end: "30 Apr 2030",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "Tiada"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "Tiada"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "CANON MAXIFY GX7070"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "Tiada"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "DELL OPTIPLEX TOWER 7020"
                }
            ]
        },


        guru1: {
            title: "PERANTI GURU FASA 1",
            category: "Peranti Guru",
            company: "FGV PRODATA SYSTEMS SDN. BHD.",
            status: "LEASE TO OWN",
            duration: "60 Bulan",
            start: "15 Dis 2023",
            end: "14 Dis 2028",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "LENOVO THINKPAD K14"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "Tiada"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "Tiada"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "Tiada"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        },


        guru2: {
            title: "PERANTI GURU FASA 2",
            category: "Peranti Guru",
            company: "TRIDIMAS SDN. BHD.",
            status: "LEASE TO OWN",
            duration: "60 Bulan",
            start: "01 Mei 2026",
            end: "30 Apr 2031",

            equipment: [
                {
                    icon: "laptop",
                    label: "Komputer Riba (Laptop)",
                    value: "HP PROBOOK 4"
                },
                {
                    icon: "battery-charging",
                    label: "Charging Cart / Troli",
                    value: "Tiada"
                },
                {
                    icon: "printer",
                    label: "Pencetak (Printer)",
                    value: "Tiada"
                },
                {
                    icon: "projector",
                    label: "Projektor (Projector)",
                    value: "Tiada"
                },
                {
                    icon: "monitor",
                    label: "Komputer Meja (PC)",
                    value: "Tiada"
                }
            ]
        }

    };


    /* =====================================================
       TARIKH SEMASA
    ===================================================== */

    const currentDateElement =
        document.getElementById("currentDate");

    if (currentDateElement) {

        const today = new Date();

        currentDateElement.textContent =
            today.toLocaleDateString(
                "ms-MY",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );
    }


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const tabs =
        document.querySelectorAll(".project-tab");

    const cards =
        document.querySelectorAll(".project-card");

    const projectCount =
        document.getElementById("projectCount");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const filter =
                tab.dataset.filter;

            tabs.forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");


            let visibleProjects = 0;


            cards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove(
                        "project-hidden"
                    );

                    visibleProjects++;

                } else {

                    card.classList.add(
                        "project-hidden"
                    );

                }

            });


            if (projectCount) {

                projectCount.textContent =
                    `${visibleProjects} Projek / Fasa`;

            }

        });

    });


    /* =====================================================
       MODAL
    ===================================================== */

    const modal =
        document.getElementById("projectModal");

    const modalContent =
        document.getElementById("projectModalContent");

    const modalClose =
        document.getElementById("projectModalClose");

    const overlay =
        document.querySelector(".project-modal-overlay");


    /* =====================================================
       OPEN PROJECT
    ===================================================== */

    document
        .querySelectorAll(".project-detail-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const projectID =
                    button.dataset.project;

                const project =
                    projectData[projectID];

                if (!project) {
                    return;
                }

                openProjectModal(project);

            });

        });


    /* =====================================================
       CREATE MODAL CONTENT
    ===================================================== */

    function openProjectModal(project) {

        const statusClass =
            project.status === "LEASE TO OWN"
                ? "lease-own"
                : "lease-use";


        const equipmentHTML =
            project.equipment
                .map(item => {

                    const unavailable =
                        item.value.toLowerCase() === "tiada";

                    return `

                        <div class="modal-equipment-row">

                            <div class="modal-equipment-name">

                                <span class="modal-equipment-icon">

                                    <i data-lucide="${item.icon}"></i>

                                </span>

                                <span>
                                    ${item.label}
                                </span>

                            </div>

                            <strong class="${
                                unavailable
                                    ? "equipment-none"
                                    : ""
                            }">

                                ${item.value}

                            </strong>

                        </div>

                    `;

                })
                .join("");


        modalContent.innerHTML = `

            <div class="modal-project-header">

                <span class="section-label">
                    ${project.category.toUpperCase()}
                </span>

                <h2>
                    ${project.title}
                </h2>

                <span class="lease-badge ${statusClass}">
                    ${project.status}
                </span>

            </div>


            <div class="modal-project-grid">


                <!-- CONTRACT -->

                <section class="modal-info-card">

                    <div class="modal-card-title">

                        <i data-lucide="file-check-2"></i>

                        <h3>
                            Maklumat Kontrak
                        </h3>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Nama Projek
                        </span>

                        <strong>
                            ${project.title}
                        </strong>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Syarikat Pembekal
                        </span>

                        <strong>
                            ${project.company}
                        </strong>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Status Projek
                        </span>

                        <strong>
                            ${project.status}
                        </strong>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Tempoh Kontrak
                        </span>

                        <strong>
                            ${project.duration}
                        </strong>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Mula Kontrak
                        </span>

                        <strong>
                            ${project.start}
                        </strong>

                    </div>


                    <div class="modal-contract-row">

                        <span>
                            Tamat Kontrak
                        </span>

                        <strong>
                            ${project.end}
                        </strong>

                    </div>

                </section>


                <!-- EQUIPMENT -->

                <section class="modal-info-card">

                    <div class="modal-card-title equipment-title">

                        <i data-lucide="boxes"></i>

                        <h3>
                            Senarai Perkakasan & Jenama
                        </h3>

                    </div>


                    <div class="modal-equipment-list">

                        ${equipmentHTML}

                    </div>

                </section>


            </div>

        `;


        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";


        /* Reload Lucide icons */

        if (window.lucide) {
            lucide.createIcons();
        }

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeProjectModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeProjectModal
        );

    }


    /* ESC KEY */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeProjectModal();

            }

        }
    );


    /* =====================================================
       INITIAL ICONS
    ===================================================== */

    if (window.lucide) {
        lucide.createIcons();
    }

});