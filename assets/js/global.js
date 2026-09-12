window.initAutoIframe = function (iframe) {

    // Éviter de traiter deux fois la même iframe
    if (iframe.dataset.initialized === "true") {
        return;
    }

    iframe.dataset.initialized = "true";

    // --------------------------------------------------
    // Wrapper
    // --------------------------------------------------

    const wrapper = document.createElement("div");
    wrapper.className = "iframe-wrapper";

    // --------------------------------------------------
    // Header
    // --------------------------------------------------

    const header = document.createElement("div");
    header.className = "iframe-header";

    // --------------------------------------------------
    // Titre
    // --------------------------------------------------

    const titleText =
        iframe.getAttribute("title") ||
        "Démonstration";

    const titleSpan = document.createElement("span");
    titleSpan.className = "iframe-title";

    titleSpan.innerHTML = `
        <svg width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">

            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>

            <polyline points="14 2 14 8 20 8"></polyline>

        </svg>

        ${titleText}
    `;

    // --------------------------------------------------
    // Actions
    // --------------------------------------------------

    const actions = document.createElement("div");
    actions.className = "iframe-actions";

    // ==================================================
    // Bouton : nouvel onglet
    // ==================================================

    const externalBtn = document.createElement("button");

    externalBtn.className = "external-toggle";

    externalBtn.setAttribute(
        "title",
        "Ouvrir dans un nouvel onglet"
    );

    externalBtn.setAttribute(
        "aria-label",
        "Ouvrir dans un nouvel onglet"
    );

    externalBtn.innerHTML = `
        <svg width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">

            <path d="M14 3h7v7"></path>
            <path d="M10 14L21 3"></path>

            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>

        </svg>
    `;

    externalBtn.onclick = function () {

        if (iframe.src) {
            window.open(
                iframe.src,
                "_blank",
                "noopener,noreferrer"
            );
        }

    };

    // ==================================================
    // Bouton : plein écran
    // ==================================================

    const fullscreenBtn =
        document.createElement("button");

    fullscreenBtn.className =
        "fullscreen-toggle";

    fullscreenBtn.setAttribute(
        "title",
        "Plein écran"
    );

    fullscreenBtn.setAttribute(
        "aria-label",
        "Plein écran"
    );

    fullscreenBtn.innerHTML = `

        <svg class="icon-maximize"
             width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">

            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>

        </svg>

        <svg class="icon-minimize"
             style="display:none;"
             width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">

            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>

        </svg>
    `;

    fullscreenBtn.onclick = function () {

        if (!document.fullscreenElement) {

            if (wrapper.requestFullscreen) {
                wrapper.requestFullscreen();
            }

        } else {

            document.exitFullscreen();

        }

    };

    // ==================================================
    // Bouton : supprimer
    // ==================================================

    const deleteBtn = document.createElement("button");

    deleteBtn.className = "delete-toggle";

    deleteBtn.setAttribute(
        "title",
        "Supprimer"
    );

    deleteBtn.setAttribute(
        "aria-label",
        "Supprimer"
    );

    deleteBtn.innerHTML = `
        <svg width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <polyline points="3 6 5 6 21 6"></polyline>

            <path d="M19 6l-1 14H6L5 6"></path>

            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>

            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>

        </svg>
    `;

    deleteBtn.onclick = function () {

        // Si l'iframe est en plein écran,
        // on quitte d'abord le plein écran.
        if (document.fullscreenElement === wrapper) {
            document.exitFullscreen().finally(function () {
                wrapper.remove();
            });
        } else {
            wrapper.remove();
        }

    };

    // --------------------------------------------------
    // Assemblage des boutons
    // --------------------------------------------------

    actions.appendChild(externalBtn);
    actions.appendChild(fullscreenBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(titleSpan);
    header.appendChild(actions);

    // --------------------------------------------------
    // Insérer wrapper avant iframe
    // --------------------------------------------------

    iframe.parentNode.insertBefore(
        wrapper,
        iframe
    );

    wrapper.appendChild(header);

    // --------------------------------------------------
    // Configurer iframe
    // --------------------------------------------------

    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.backgroundColor = "#ffffff";

    wrapper.appendChild(iframe);
};

// ======================================================
// Initialisation automatique
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    document
        .querySelectorAll("iframe.auto-wrapper")
        .forEach(function (iframe) {

            window.initAutoIframe(iframe);

        });

});