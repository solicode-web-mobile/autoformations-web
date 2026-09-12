document.addEventListener("DOMContentLoaded", function () {

    const codeBlocks = document.querySelectorAll(
        "pre > code.language-html, " +
        "pre > code.language-css, " +
        "pre > code.language-js, " +
        "pre > code.language-javascript, " +
        "pre > code.language-php"
    );

    codeBlocks.forEach(function (codeBlock) {

        const pre = codeBlock.closest("pre");

        if (!pre) {
            return;
        }

        // --------------------------------------------------
        // Déterminer le langage
        // --------------------------------------------------

        let language = "";

        if (
            codeBlock.classList.contains("language-html")
        ) {
            language = "html";
        }

        else if (
            codeBlock.classList.contains("language-css")
        ) {
            language = "css";
        }

        else if (
            codeBlock.classList.contains("language-js") ||
            codeBlock.classList.contains("language-javascript")
        ) {
            language = "js";
        }

        else if (
            codeBlock.classList.contains("language-php")
        ) {
            language = "php";
        }

        if (!language) {
            return;
        }

        // Code original
        const code = codeBlock.textContent.trim();

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
             */
            let iframe = buttonWrapper.nextElementSibling;

            if (
                iframe &&
                iframe.matches("iframe.auto-wrapper")
            ) {
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
                "Résultat du code " + language.toUpperCase();

            // --------------------------------------------------
            // URL de l'éditeur
            // --------------------------------------------------

            const editorUrl =
                window.editeurCodeUrl ||
                "/editeur-code";

            // --------------------------------------------------
            // Construire les paramètres
            // --------------------------------------------------

            const params = new URLSearchParams();

            /*
             * Chaque bloc de code est transmis
             * dans le paramètre correspondant.
             */

            params.set(language, code);

            /*
             * Exemple :
             *
             * HTML :
             * /editeur-code?html=<h1>Bonjour</h1>
             *
             * CSS :
             * /editeur-code?css=body%20%7B...
             *
             * JS :
             * /editeur-code?js=console.log(...)
             *
             * PHP :
             * /editeur-code?php=%3C%3Fphp...
             */

            iframe.src =
                editorUrl +
                "?" +
                params.toString();

            // --------------------------------------------------
            // Afficher l'iframe
            // --------------------------------------------------

            iframe.style.display = "block";
            iframe.style.width = "100%";
            iframe.style.border = "none";

            /*
             * IMPORTANT :
             * placer l'iframe juste après le bouton.
             */
            buttonWrapper.insertAdjacentElement(
                "afterend",
                iframe
            );

            /*
             * Initialiser la barre d'outils
             */
            if (
                typeof window.initAutoIframe === "function"
            ) {
                window.initAutoIframe(iframe);
            }

        });

    });

});