// Récupération des paramètres d'URL (ex: ?html=...&css=...)
const urlParams = new URLSearchParams(window.location.search);

// Données initiales des exercices (Priorité à l'URL, sinon valeurs par défaut)
window.exerciseData = {
    html: urlParams.has('html') ? urlParams.get('html') : `<div class="container">\n  <h1>Bonjour le monde !</h1>\n  <p>Ceci est un test en direct.</p>\n</div>`,
    css: urlParams.has('css') ? urlParams.get('css') : `.container {\n  padding: 20px;\n  text-align: center;\n}\n\nh1 {\n  color: #F97316;\n}`,
    js: urlParams.has('js') ? urlParams.get('js') : `console.log("Prêt pour l'action !");`,
    php: urlParams.has('php') ? urlParams.get('php') : `<?php\n// Écrivez votre code PHP ici\necho "Bienvenue dans l'éditeur PHP !";\n?>`,
    'index.php': urlParams.has('index.php') ? urlParams.get('index.php') : `<?php\n  $titre = "Site Dynamique PHP";\n?>\n<h1><?= $titre ?></h1>`
};

// Sauvegarde de l'état initial pour le bouton Réinitialiser
window.initialExerciseData = Object.assign({}, window.exerciseData);

// Variable globale pour stocker l'instance de Monaco
let monacoEditorInstance = null;
let currentTabId = 'html';
window.currentTabId = 'html';

// Mapping des IDs d'onglets vers les langages reconnus par Monaco
const monacoLanguages = {
    'html': 'html',
    'css': 'css',
    'js': 'javascript',
    'php': 'php',
    'index.php': 'php'
};

// Fonction d'initialisation de Monaco Editor
function initMonacoEditor() {
    // Configuration de RequireJS pour trouver les fichiers Monaco sur le CDN
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
    
    require(['vs/editor/editor.main'], function() {
        const container = document.getElementById('monaco-editor-container');
        
        // Vider le conteneur (enlever le message de chargement)
        container.innerHTML = '';
        
        // Création de l'instance Monaco
        monacoEditorInstance = monaco.editor.create(container, {
            value: window.exerciseData[currentTabId],
            language: monacoLanguages[currentTabId],
            theme: 'vs-dark',
            automaticLayout: true, // Très important pour le responsive
            minimap: { enabled: false }, // Désactivé pour la "Ligne Claire" (moins de bruit visuel)
            fontSize: 15,
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            roundedSelection: false,
            wordWrap: "on"
        });
        
        // Écouter les événements de changement d'onglet (déclenchés par Alpine.js)
        document.addEventListener('editor-tab-changed', (e) => {
            const newTabId = e.detail.language;
            
            if (newTabId !== currentTabId && monacoLanguages[newTabId]) {
                // 1. Sauvegarder le code en cours de frappe dans notre objet
                window.exerciseData[currentTabId] = monacoEditorInstance.getValue();
                
                // 2. Mettre à jour l'onglet actif
                currentTabId = newTabId;
                window.currentTabId = newTabId;
                
                // 3. Informer Monaco du nouveau langage
                const newMonacoLang = monacoLanguages[newTabId];
                monaco.editor.setModelLanguage(monacoEditorInstance.getModel(), newMonacoLang);
                
                // 4. Injecter le code correspondant
                monacoEditorInstance.setValue(window.exerciseData[newTabId]);
            }
        });
        
        // Écouter l'événement de réinitialisation
        document.addEventListener('reset-editor', () => {
            // Restaurer les données initiales
            window.exerciseData = Object.assign({}, window.initialExerciseData);
            
            // Mettre à jour l'éditeur Monaco avec le code restauré de l'onglet actif
            monacoEditorInstance.setValue(window.exerciseData[currentTabId]);
            
            // Si on est sur un onglet Web (HTML/CSS/JS), on rafraîchit la preview
            if (['html', 'css', 'js', 'index.php'].includes(currentTabId)) {
                document.dispatchEvent(new CustomEvent('editor-code-changed', {
                    detail: { tabId: currentTabId }
                }));
            }
        });
        
        // (Préparation pour Sprint 3 & 4) Diffuser les changements de code
        monacoEditorInstance.onDidChangeModelContent(() => {
            const currentCode = monacoEditorInstance.getValue();
            // Mettre à jour les données locales en temps réel pour le Live Preview
            window.exerciseData[currentTabId] = currentCode;
            
            if (currentTabId === 'index.php') {
                document.dispatchEvent(new CustomEvent('request-php-execution'));
            }
            
            document.dispatchEvent(new CustomEvent('editor-code-changed', {
                detail: { 
                    tabId: currentTabId, 
                    code: currentCode 
                }
            }));
        });
    });
}

// Lancer l'initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initMonacoEditor);
