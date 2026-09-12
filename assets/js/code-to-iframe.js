document.addEventListener("DOMContentLoaded", function () {

    const codeBlocks = document.querySelectorAll(
        "pre > code.language-html"
    );

    codeBlocks.forEach(function (codeBlock) {

        const pre = codeBlock.closest("pre");

        if (!pre) {
            return;
        }

        // Code HTML original
        const htmlCode = codeBlock.textContent.trim();

        // --------------------------------------------------
        // Bouton
        // --------------------------------------------------

        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "code-editor-action";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "open-editor-btn";
        button.textContent = "Exécuter le code";

        buttonWrapper.appendChild(button);

        // Ajouter le bouton après le bloc de code
        pre.insertAdjacentElement(
            "afterend",
            buttonWrapper
        );

        // --------------------------------------------------
        // Au clic
        // --------------------------------------------------

        button.addEventListener("click", function () {

            /*
             * Cherche une iframe déjà créée pour ce bloc.
             * Elle est placée juste après le bouton.
             */
            let iframe = buttonWrapper.nextElementSibling;

            if (
                iframe &&
                iframe.matches("iframe.auto-wrapper")
            ) {
                // L'iframe existe déjà : on l'affiche
                iframe.style.display = "block";
                return;
            }

            // --------------------------------------------------
            // Créer l'iframe
            // --------------------------------------------------

            iframe = document.createElement("iframe");

            iframe.className = "auto-wrapper";

            iframe.height = "500";

            iframe.title =
                "Résultat du code HTML";

            /*
             * URL de l'éditeur
             */
            const editorUrl =
                window.editeurCodeUrl ||
                "/editeur-code";

            /*
             * Construire l'URL :
             *
             * /editeur-code?html=<h1>Bonjour</h1>
             *
             * encodeURIComponent est important pour les
             * caractères spéciaux du HTML.
             */
            iframe.src =
                editorUrl +
                "?html=" +
                encodeURIComponent(htmlCode);

            // --------------------------------------------------
            // Afficher l'iframe
            // --------------------------------------------------

            iframe.style.display = "block";
            iframe.style.width = "100%";
            iframe.style.border = "none";

            /*
             * IMPORTANT :
             * on place l'iframe juste après le bouton.
             */
            buttonWrapper.insertAdjacentElement(
                "afterend",
                iframe
            );

            /*
             * Demande au gestionnaire des iframes
             * d'ajouter la barre d'outils.
             */
            if (typeof window.initAutoIframe === "function") {
                window.initAutoIframe(iframe);
            }

        });

    });

});