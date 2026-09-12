// passage en plein écran + ouverture externe

document.addEventListener("DOMContentLoaded", function() {
  // Cherche toutes les iframes avec la classe 'auto-wrapper'
  const iframes = document.querySelectorAll('iframe.auto-wrapper');

  iframes.forEach(iframe => {
    // 1. Créer le conteneur principal
    const wrapper = document.createElement('div');
    wrapper.className = 'iframe-wrapper';

    // 2. Créer l'en-tête
    const header = document.createElement('div');
    header.className = 'iframe-header';

    // 3. Ajouter le titre
    const titleText = iframe.getAttribute('title') || 'Démonstration';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'iframe-title';

    titleSpan.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      ${titleText}
    `;

    // 4. Conteneur des boutons
    const actions = document.createElement('div');
    actions.className = 'iframe-actions';

    // --------------------------------------------------
    // Bouton : ouvrir la page dans un nouvel onglet
    // --------------------------------------------------
    const externalBtn = document.createElement('button');
    externalBtn.className = 'external-toggle';
    externalBtn.setAttribute('title', 'Ouvrir dans un nouvel onglet');
    externalBtn.setAttribute('aria-label', 'Ouvrir dans un nouvel onglet');

    externalBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2">
        <path d="M14 3h7v7"></path>
        <path d="M10 14L21 3"></path>
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
      </svg>
    `;

    externalBtn.onclick = function() {
      const url = iframe.src;

      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };

    // --------------------------------------------------
    // Bouton : plein écran
    // --------------------------------------------------
    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'fullscreen-toggle';
    fullscreenBtn.setAttribute('title', 'Plein écran');
    fullscreenBtn.setAttribute('aria-label', 'Plein écran');

    fullscreenBtn.innerHTML = `
      <svg class="icon-maximize"
           width="16" height="16"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
      </svg>

      <svg class="icon-minimize"
           style="display:none;"
           width="16" height="16"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2">
        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
      </svg>
    `;

    // Fonctionnalité plein écran
    fullscreenBtn.onclick = function() {
      if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) {
          wrapper.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    // 5. Assembler l'en-tête
    actions.appendChild(externalBtn);
    actions.appendChild(fullscreenBtn);

    header.appendChild(titleSpan);
    header.appendChild(actions);

    // 6. Insérer le wrapper avant l'iframe
    iframe.parentNode.insertBefore(wrapper, iframe);

    wrapper.appendChild(header);

    // 7. Nettoyer et configurer l'iframe
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.backgroundColor = '#ffffff';
    iframe.className = '';

    wrapper.appendChild(iframe);
  });

  // 8. Gérer le changement d'icône du plein écran
  document.addEventListener('fullscreenchange', () => {
    document.querySelectorAll('.iframe-wrapper').forEach(wrapper => {
      const isFs = document.fullscreenElement === wrapper;
      const btn = wrapper.querySelector('.fullscreen-toggle');

      if (btn) {
        btn.querySelector('.icon-maximize').style.display =
          isFs ? 'none' : 'block';

        btn.querySelector('.icon-minimize').style.display =
          isFs ? 'block' : 'none';

        btn.setAttribute(
          'title',
          isFs ? 'Quitter le plein écran' : 'Plein écran'
        );
      }
    });
  });
});