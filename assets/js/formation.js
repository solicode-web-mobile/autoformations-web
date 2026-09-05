document.addEventListener("DOMContentLoaded", function () {

  // -----------------------------
  // Version du tutoriel
  // -----------------------------

  const version =
    localStorage.getItem("tuto_version") || "normal";

  document.documentElement.dataset.tutoVersion = version;


  // -----------------------------
  // Taille du texte
  // -----------------------------

  const textSize =
    localStorage.getItem("text_size") || "normal";

  document.documentElement.dataset.textSize = textSize;

});


document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("[data-text-size]");

  const savedSize =
    localStorage.getItem("text_size") || "normal";

  applyTextSize(savedSize);

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const size = button.dataset.textSize;

      localStorage.setItem("text_size", size);

      applyTextSize(size);
    });

  });

  function applyTextSize(size) {

    document.documentElement.dataset.textSize = size;

    buttons.forEach(function (button) {

      button.classList.toggle(
        "active",
        button.dataset.textSize === size
      );

    });

  }

});



document.addEventListener("DOMContentLoaded", function () {

  const content = document.querySelector(".tuto-page");

  if (!content) {
    return;
  }

  const increaseButton =
    document.querySelector('[data-text-size-action="increase"]');

  const decreaseButton =
    document.querySelector('[data-text-size-action="decrease"]');

  const resetButton =
    document.querySelector('[data-text-size-action="reset"]');

  const DEFAULT_SIZE = 16;
  const STEP = 2;
  const MIN_SIZE = 12;
  const MAX_SIZE = 32;

  let fontSize =
    parseInt(localStorage.getItem("text_size"), 10);

  if (isNaN(fontSize)) {
    fontSize = DEFAULT_SIZE;
  }

  function applyFontSize() {
    content.style.fontSize = fontSize + "px";

    localStorage.setItem("text_size", fontSize);
  }

  increaseButton?.addEventListener("click", function () {
    if (fontSize < MAX_SIZE) {
      fontSize += STEP;
      applyFontSize();
    }
  });

  decreaseButton?.addEventListener("click", function () {
    if (fontSize > MIN_SIZE) {
      fontSize -= STEP;
      applyFontSize();
    }
  });

  resetButton?.addEventListener("click", function () {
    fontSize = DEFAULT_SIZE;
    applyFontSize();
  });

  applyFontSize();

});
