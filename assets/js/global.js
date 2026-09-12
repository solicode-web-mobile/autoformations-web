

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('tutoWrapper');
  const btn = document.getElementById('fsToggleBtn');
  const iconExpand = document.getElementById('icon-expand');
  const iconCompress = document.getElementById('icon-compress');

  // Action du clic
  btn.addEventListener('click', () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      // Demande le plein écran sur le CONTENEUR (pour garder le bouton visible)
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if (wrapper.webkitRequestFullscreen) { /* Safari */
        wrapper.webkitRequestFullscreen();
      }
    } else {
      // Quitte le plein écran
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      }
    }
  });

  // Détecte les changements (ex: si l'utilisateur appuie sur "Échap")
  const updateUI = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      // Mode plein écran actif
      iconExpand.style.display = 'none';
      iconCompress.style.display = 'block';
      btn.title = 'Quitter le plein écran';
    } else {
      // Mode normal
      iconExpand.style.display = 'block';
      iconCompress.style.display = 'none';
      btn.title = 'Plein écran';
    }
  };

  document.addEventListener('fullscreenchange', updateUI);
  document.addEventListener('webkitfullscreenchange', updateUI); // Safari
});