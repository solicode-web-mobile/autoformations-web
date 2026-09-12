// passage en plein écran 


document.addEventListener("DOMContentLoaded", function() {
  // Cherche toutes les iframes avec la classe 'auto-wrapper'
  const iframes = document.querySelectorAll('iframe.auto-wrapper');

  iframes.forEach(iframe => {
    // 1. Créer le conteneur principal
    const wrapper = document.createElement('div');
    wrapper.className = 'iframe-wrapper';

    // 2. Créer l'en-tête (barre grise)
    const header = document.createElement('div');
    header.className = 'iframe-header';

    // 3. Ajouter le titre (récupéré depuis l'attribut title de l'iframe)
    const titleText = iframe.getAttribute('title') || 'Démonstration';
    const titleSpan = document.createElement('span');
    titleSpan.className = 'iframe-title';
    titleSpan.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> ${titleText}`;

    // 4. Ajouter le bouton Plein écran
    const btn = document.createElement('button');
    btn.className = 'fullscreen-toggle';
    btn.setAttribute('title', 'Plein écran');
    btn.innerHTML = `
      <svg class="icon-maximize" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      <svg class="icon-minimize" style="display:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
    `;
    
    // Fonctionnalité plein écran au clic
    btn.onclick = function() {
      if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) wrapper.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    };

    // 5. Assembler le tout
    header.appendChild(titleSpan);
    header.appendChild(btn);
    
    // Insérer le wrapper avant l'iframe dans le HTML, puis déplacer l'iframe dedans
    iframe.parentNode.insertBefore(wrapper, iframe);
    wrapper.appendChild(header);
    
    // Nettoyer l'iframe et forcer le fond blanc (votre problème d'écran noir)
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.backgroundColor = '#ffffff';
    iframe.className = ''; // on enlève la classe initiale
    wrapper.appendChild(iframe);
  });

  // 6. Gérer le changement d'icône (quand on fait Échap par exemple)
  document.addEventListener('fullscreenchange', () => {
    document.querySelectorAll('.iframe-wrapper').forEach(wrapper => {
      const isFs = document.fullscreenElement === wrapper;
      const btn = wrapper.querySelector('.fullscreen-toggle');
      if (btn) {
        btn.querySelector('.icon-maximize').style.display = isFs ? 'none' : 'block';
        btn.querySelector('.icon-minimize').style.display = isFs ? 'block' : 'none';
        btn.setAttribute('title', isFs ? 'Quitter' : 'Plein écran');
      }
    });
  });
});