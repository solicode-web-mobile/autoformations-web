/*
 * ==========================================================
 * FORMATION WEB
 * JavaScript — Organisation par template
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", function () {


  /*
   * ==========================================================
   * BASE
   * ==========================================================
   *
   * Fonctionnalités communes :
   *
   * 1. Version du tutoriel
   * 2. Navigation vers l'étape suivante
   *
   */


  /*
   * ==========================================================
   * BASE — VERSION DU TUTORIEL
   * ==========================================================
   *
   * Valeurs :
   * - compact
   * - normal
   * - detaille
   *
   * Valeur par défaut :
   * - normal
   */

  const tutoVersion =
    localStorage.getItem("tuto_version") || "normal";


  /*
   * Vérifier la valeur enregistrée.
   */

  const validVersions = [
    "compact",
    "normal",
    "detaille"
  ];

  const currentVersion =
    validVersions.includes(tutoVersion)
      ? tutoVersion
      : "normal";

  document.documentElement.dataset.tutoVersion =
    currentVersion;


  /*
   * ==========================================================
   * BASE — NAVIGATION ÉTAPE SUIVANTE
   * ==========================================================
   *
   * L'ordre est défini par next-step.html :
   *
   * Tutoriel suivant
   *       ↓
   * UA suivante
   *       ↓
   * Lab
   *       ↓
   * Prototype
   *       ↓
   * Projet Fil Rouge
   *
   * Pour un tutoriel, la version sélectionnée est conservée.
   */

  const nextStepLink =
    document.querySelector("#next-step-link");

  if (nextStepLink) {

    const nextType =
      nextStepLink.dataset.nextType;


    /*
     * Les Tutoriels possèdent trois versions.
     */

    if (nextType === "tuto") {

      let nextUrl =
        nextStepLink.dataset.normalUrl;


      if (
        currentVersion === "compact" &&
        nextStepLink.dataset.compactUrl
      ) {

        nextUrl =
          nextStepLink.dataset.compactUrl;

      }


      if (
        currentVersion === "detaille" &&
        nextStepLink.dataset.detailleUrl
      ) {

        nextUrl =
          nextStepLink.dataset.detailleUrl;

      }


      nextStepLink.href =
        nextUrl;

    }

  }


  /*
   * ==========================================================
   * TUTO
   * ==========================================================
   *
   * Fonctionnalité :
   *
   * - Taille progressive du texte
   * - Mémorisation dans localStorage
   *
   */


  /*
   * ==========================================================
   * TUTO — CONTENU
   * ==========================================================
   *
   * Les contrôles de taille existent uniquement
   * sur les pages de tutoriels.
   */

  const content =
    document.querySelector(".tuto-page, .session-page");


  if (!content) {
    return;
  }


  /*
   * ==========================================================
   * TUTO — BOUTONS
   * ==========================================================
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
   * ==========================================================
   * TUTO — CONFIGURATION
   * ==========================================================
   */

  const DEFAULT_SIZE = 16;
  const STEP = 2;
  const MIN_SIZE = 12;
  const MAX_SIZE = 32;


  /*
   * ==========================================================
   * TUTO — RÉCUPÉRER LA TAILLE ENREGISTRÉE
   * ==========================================================
   */

  let fontSize =
    parseInt(
      localStorage.getItem("text_size"),
      10
    );


  /*
   * Vérifier la valeur récupérée.
   */

  if (
    Number.isNaN(fontSize) ||
    fontSize < MIN_SIZE ||
    fontSize > MAX_SIZE
  ) {

    fontSize =
      DEFAULT_SIZE;

  }


  /*
   * ==========================================================
   * TUTO — APPLIQUER LA TAILLE
   * ==========================================================
   */

  function applyFontSize() {

    content.style.fontSize =
      `${fontSize}px`;

    localStorage.setItem(
      "text_size",
      String(fontSize)
    );

  }


  /*
   * ==========================================================
   * TUTO — A+
   * ==========================================================
   */

  if (increaseButton) {

    increaseButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        fontSize =
          Math.min(
            fontSize + STEP,
            MAX_SIZE
          );

        applyFontSize();

      }
    );

  }


  /*
   * ==========================================================
   * TUTO — A−
   * ==========================================================
   */

  if (decreaseButton) {

    decreaseButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        fontSize =
          Math.max(
            fontSize - STEP,
            MIN_SIZE
          );

        applyFontSize();

      }
    );

  }


  /*
   * ==========================================================
   * TUTO — A : TAILLE NORMALE
   * ==========================================================
   */

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        fontSize =
          DEFAULT_SIZE;

        applyFontSize();

      }
    );

  }


  /*
   * ==========================================================
   * TUTO — INITIALISATION
   * ==========================================================
   *
   * Restaurer la préférence enregistrée.
   */

  applyFontSize();

});