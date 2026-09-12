document.addEventListener("DOMContentLoaded", function () {

    const codeBlocks = document.querySelectorAll(
        "pre > code.language-html"
    );

    codeBlocks.forEach(function (codeBlock) {

        // Récupère le code HTML original
        const htmlCode = codeBlock.textContent.trim();

        // Récupère le <pre>
        const pre = codeBlock.closest("pre");

        // --------------------------------------------------
        // Créer le bouton
        // --------------------------------------------------
        const button = document.createElement("button");

        button.className = "open-editor-btn";
        button.type = "button";
        button.textContent = "Ouvrir dans l’éditeur";

        // --------------------------------------------------
        // Créer le conteneur du bouton
        // --------------------------------------------------
        const buttonWrapper = document.createElement("div");

        buttonWrapper.className = "code-editor-action";
        buttonWrapper.appendChild(button);

        // Ajouter le bouton après le code
        pre.insertAdjacentElement("afterend", buttonWrapper);

        // --------------------------------------------------
        // Au clic : créer l'iframe
        // --------------------------------------------------
        button.addEventListener("click", function () {

            // Évite de créer plusieurs iframes
            if (document.querySelector(".code-editor-modal")) {
                return;
            }

            // --------------------------------------------------
            // Conteneur plein écran
            // --------------------------------------------------
            const wrapper = document.createElement("div");

            wrapper.className = "code-editor-modal";

            // --------------------------------------------------
            // iframe
            // --------------------------------------------------
            const iframe = document.createElement("iframe");

            iframe.src =
                window.editeurCodeUrl +
                "?html=" +
                encodeURIComponent(htmlCode);

            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";

            iframe.title = "Éditeur de code HTML";

            // --------------------------------------------------
            // Ajouter l'iframe
            // --------------------------------------------------
            wrapper.appendChild(iframe);

            document.body.appendChild(wrapper);

            // --------------------------------------------------
            // Passage en plein écran
            // --------------------------------------------------
            if (wrapper.requestFullscreen) {
                wrapper.requestFullscreen();
            }

            // --------------------------------------------------
            // Nettoyage après sortie du plein écran
            // --------------------------------------------------
            function removeEditor() {

                if (!document.fullscreenElement && wrapper.parentNode) {
                    wrapper.remove();
                    document.removeEventListener(
                        "fullscreenchange",
                        removeEditor
                    );
                }
            }

            document.addEventListener(
                "fullscreenchange",
                removeEditor
            );
        });

    });

});