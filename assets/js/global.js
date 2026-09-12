function toggleFullscreen() {
  const wrapper = document.getElementById('iframeWrapper');

  if (!document.fullscreenElement) {
    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullscreen) { /* Safari */
      wrapper.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    }
  }
}

// Détecte le changement d'état (clic sur le bouton ou touche Échap)
document.addEventListener('fullscreenchange', updateFullscreenUI);
document.addEventListener('webkitfullscreenchange', updateFullscreenUI);

function updateFullscreenUI() {
  const iconMax = document.querySelector('.icon-maximize');
  const iconMin = document.querySelector('.icon-minimize');
  const btn = document.getElementById('fs-btn');

  // Si on est en plein écran
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    iconMax.style.display = 'none';
    iconMin.style.display = 'block';
    btn.setAttribute('title', 'Quitter le plein écran');
  } else {
    // Si on est en mode normal
    iconMax.style.display = 'block';
    iconMin.style.display = 'none';
    btn.setAttribute('title', 'Plein écran');
  }
}