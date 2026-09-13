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

        // --------------------------------------------------
        // Code de l'exemple
        // --------------------------------------------------

        const exampleCode =
            codeBlock.textContent.trim();

        // --------------------------------------------------
        // Bouton
        // --------------------------------------------------

        const buttonWrapper = document.createElement("div");

        buttonWrapper.className =
            "code-editor-action";

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

            // --------------------------------------------------
            // Chercher une iframe déjà créée
            // --------------------------------------------------

            let iframe =
                buttonWrapper.nextElementSibling;

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
                "Résultat du code " +
                language.toUpperCase();

            // --------------------------------------------------
            // URL de l'éditeur
            // --------------------------------------------------

            const editorUrl =
                window.editeurCodeUrl ||
                "/editeur-code";

            // --------------------------------------------------
            // Données de la page
            // --------------------------------------------------

            const pageData = window.pageData || {};

            /*
             * Les données de la page constituent
             * les données de départ.
             */

            const data_html =
                pageData.html || "";

            const data_css =
                pageData.css || "";

            const data_js =
                pageData.js || "";

            const data_php =
                pageData.php || "";

            // --------------------------------------------------
            // Construire les données finales
            // --------------------------------------------------

            let finalHtml = data_html;
            let finalCss = data_css;
            let finalJs = data_js;
            let finalPhp = data_php;

            /*
             * Le code de l'exemple remplace uniquement
             * le langage correspondant.
             */

            if (language === "html") {
                finalHtml = exampleCode;
            }

            else if (language === "css") {
                finalCss = exampleCode;
            }

            else if (language === "js") {
                finalJs = exampleCode;
            }

            else if (language === "php") {
                finalPhp = exampleCode;
            }

            // --------------------------------------------------
            // Paramètres
            // --------------------------------------------------

            const params = new URLSearchParams();

            /*
             * Ajouter toutes les données disponibles.
             */

            if (finalHtml) {
                params.set(
                    "html",
                    finalHtml
                );
            }

            if (finalCss) {
                params.set(
                    "css",
                    finalCss
                );
            }

            if (finalJs) {
                params.set(
                    "js",
                    finalJs
                );
            }

            if (finalPhp) {
                params.set(
                    "php",
                    finalPhp
                );
            }

            // --------------------------------------------------
            // Construire l'URL
            // --------------------------------------------------

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

            // --------------------------------------------------
            // Insérer juste après le bouton
            // --------------------------------------------------

            buttonWrapper.insertAdjacentElement(
                "afterend",
                iframe
            );

            // --------------------------------------------------
            // Initialiser la toolbar
            // --------------------------------------------------

            if (
                typeof window.initAutoIframe ===
                "function"
            ) {
                window.initAutoIframe(iframe);
            }

        });

    });

});