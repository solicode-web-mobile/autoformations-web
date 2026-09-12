// Logique du Live Preview (HTML/CSS/JS)
// Dépend de l'objet global exerciseData défini dans editor-init.js

let lastPhpHtml = null;
let currentViewMode = 'html'; // 'html' ou 'php'

function updateLivePreview(htmlContent = null) {
    const iframe = document.getElementById('live-preview');
    if (!iframe) return;

    if (htmlContent !== null) {
        lastPhpHtml = htmlContent;
        currentViewMode = 'php'; // Forcer le mode PHP si on reçoit une exécution
    }

    // Basculer la source HTML selon le mode de vue actif
    let html = '';
    if (currentViewMode === 'php') {
        html = lastPhpHtml || '';
    } else {
        html = window.exerciseData.html || '';
    }

    const css = `<style>${window.exerciseData.css || ''}</style>`;
    // On échappe le script pour ne pas casser notre propre JS
    const js = `<script>${window.exerciseData.js || ''}<\/script>`;

    // Assembler le code final
    const combinedCode = `
        <!DOCTYPE html>
        <html>
            <head>
                ${css}
            </head>
            <body>
                ${html}
                ${js}
            </body>
        </html>
    `;

    // Injecter dans l'iframe via srcdoc
    iframe.srcdoc = combinedCode;
}

// Initialiser le rendu au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Si l'onglet initial est index.php, on bascule
    if (window.currentTabId === 'index.php') {
        currentViewMode = 'php';
    }
    setTimeout(updateLivePreview, 100);
});

// Écouter les modifications en direct depuis l'éditeur
document.addEventListener('editor-code-changed', (e) => {
    const tabId = e && e.detail ? e.detail.tabId : null;
    
    // Mettre à jour le contexte visuel selon l'onglet
    if (tabId === 'html') currentViewMode = 'html';
    if (tabId === 'index.php') currentViewMode = 'php';
    
    // Mettre à jour l'iframe si c'est une techno Web
    if (!tabId || tabId === 'html' || tabId === 'css' || tabId === 'js' || tabId === 'index.php') {
        updateLivePreview();
    }
});

// Écouter la fin de l'exécution PHP (Back-end)
document.addEventListener('php-executed', (e) => {
    if (e && e.detail && e.detail.html !== undefined) {
        updateLivePreview(e.detail.html);
    }
});
