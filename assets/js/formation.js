document.addEventListener("DOMContentLoaded", function () {

  /*
   * ==========================================
   * FORMATION WEB — Préférences apprenant
   * ==========================================
   *
   * Ce fichier gère les préférences générales
   * de lecture dans la plateforme.
   *
   * Fonctionnalités :
   * 1. Version du tutoriel
   * 2. Taille du texte
   */


  /*
   * ==========================================
   * 1. VERSION DU TUTORIEL
   * ==========================================
   *
   * Valeurs possibles :
   * - compact
   * - normal
   * - detaille
   *
   * Valeur par défaut :
   * - normal
   */

  const tutoVersion =
    localStorage.getItem("tuto_version") || "normal";

  document.documentElement.dataset.tutoVersion = tutoVersion;


  /*
   * ==========================================
   * 2. TAILLE DU TEXTE
   * ==========================================
   *
   * La taille est progressive.
   *
   * A+ → augmente de 2px
   * A− → diminue de 2px
   * A  → revient à la taille normale
   *
   * La valeur est enregistrée dans localStorage.
   */

  const content = document.querySelector(".tuto-page");

  /*
   * La gestion de la taille du texte
   * concerne uniquement les pages de tutoriels.
   */
  if (!content) {
    return;
  }


  /*
   * Boutons
   */

  const increaseButton =
    document.querySelector(
      '[data-text-size-action="increase"]'
    );

  const decreaseButton =
    document.querySelector(
      '[data-text-size-action="decrease"]'
    );

  const resetButton =
    document.querySelector(
      '[data-text-size-action="reset"]'
    );


  /*
   * Configuration
   */

  const DEFAULT_SIZE = 16;
  const STEP = 2;
  const MIN_SIZE = 12;
  const MAX_SIZE = 32;


  /*
   * Récupérer la taille enregistrée
   */

  let fontSize = parseInt(
    localStorage.getItem("text_size"),
    10
  );

  /*
   * Si aucune valeur valide n'est enregistrée,
   * utiliser la taille normale.
   */

  if (isNaN(fontSize)) {
    fontSize = DEFAULT_SIZE;
  }


  /*
   * ==========================================
   * Appliquer la taille du texte
   * ==========================================
   */

  function applyFontSize() {

    content.style.fontSize = fontSize + "px";

    localStorage.setItem(
      "text_size",
      fontSize
    );
  }


  /*
   * ==========================================
   * A+ : augmenter la taille
   * ==========================================
   */

  if (increaseButton) {

    increaseButton.addEventListener(
      "click",
      function () {

        if (fontSize < MAX_SIZE) {

          fontSize += STEP;

          /*
           * Ne pas dépasser la limite maximale.
           */
          fontSize = Math.min(
            fontSize,
            MAX_SIZE
          );

          applyFontSize();
        }

      }
    );
  }


  /*
   * ==========================================
   * A− : diminuer la taille
   * ==========================================
   */

  if (decreaseButton) {

    decreaseButton.addEventListener(
      "click",
      function () {

        if (fontSize > MIN_SIZE) {

          fontSize -= STEP;

          /*
           * Ne pas descendre sous la limite minimale.
           */
          fontSize = Math.max(
            fontSize,
            MIN_SIZE
          );

          applyFontSize();
        }

      }
    );
  }


  /*
   * ==========================================
   * A : revenir à la taille normale
   * ==========================================
   */

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      function () {

        fontSize = DEFAULT_SIZE;

        applyFontSize();
      }
    );
  }


  /*
   * ==========================================
   * Initialisation
   * ==========================================
   *
   * Restaurer la préférence enregistrée.
   */

  applyFontSize();

});