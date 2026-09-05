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