# Intégration de l'Éditeur : Passer des Données (Exercices)

L'éditeur de code in-browser a été conçu pour être 100% côté client ("client-side"). Il ne possède pas de base de données intégrée ni de backend lourd. L'injection des exercices (code HTML, CSS, JS, ou PHP) se fait **uniquement via une variable globale JavaScript**.

Cette architecture modulaire permet à n'importe quel système extérieur (un vrai backend comme Laravel/Symfony, un CMS, ou même un simple fichier statique JSON) de configurer l'éditeur très facilement avant son chargement.

---

## 1. Comment ça fonctionne sous le capot ?

L'éditeur dépend d'une variable globale définie sur l'objet `window` :
**`window.exerciseData`**

Si vous regardez le début du fichier `assets/js/editor-init.js`, vous verrez ceci :

```javascript
// Déclaration de l'état initial (valeurs par défaut)
window.exerciseData = {
    html: `...`,
    css: `...`,
    js: `...`,
    php: `...`
};
```

Lorsque l'éditeur s'initialise (à l'événement `DOMContentLoaded`), Monaco Editor lit les valeurs de `window.exerciseData` pour remplir les différents onglets.

---

## 2. Comment injecter votre propre code ?

Pour passer vos propres exercices, vous devez **déclarer ou écraser `window.exerciseData` avant que le fichier `editor-init.js` ne s'exécute**.

Voici trois scénarios d'intégration courants :

### Scénario A : Depuis un Backend (ex: PHP, Laravel, Node.js)
Si vous générez la page d'exercice depuis un serveur backend, vous pouvez injecter les données directement dans une balise `<script>` dans le `<head>` de votre page, avant le chargement des scripts de l'éditeur.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 42</title>
    
    <!-- INJECTION DE L'EXERCICE DEPUIS LE BACKEND -->
    <script>
        // Le backend (ex: PHP) génère cet objet JSON
        window.exerciseData = {
            html: "<h1>Titre de l'exercice</h1>\n<p>Complétez le CSS</p>",
            css: "/* Écrivez votre style ici */",
            js: "",
            php: "",
            'index.php': ""
        };
    </script>

    <!-- Ensuite on charge Tailwind et l'éditeur... -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Structure HTML de l'éditeur... -->
    
    <!-- Les scripts de l'éditeur (qui liront window.exerciseData) -->
    <script src="assets/js/components/tabs.js" defer></script>
    <script src="assets/js/editor-init.js" defer></script>
    <script src="assets/js/live-preview.js" defer></script>
    <script src="assets/js/php-runner.js" defer></script>
</body>
</html>
```

### Scénario B : Depuis une API Externe (AJAX / Fetch)
Si vous construisez une Single Page Application (SPA) ou si vous chargez les exercices de manière asynchrone, vous devrez mettre à jour l'instance Monaco après avoir récupéré les données.

```javascript
async function chargerExercice(idExercice) {
    // 1. Récupération des données depuis votre API
    const response = await fetch(`/api/exercices/${idExercice}`);
    const data = await response.json();
    
    // 2. Mise à jour de la variable globale
    window.exerciseData = {
        html: data.html_code,
        css: data.css_code,
        js: data.js_code,
        php: data.php_code,
        'index.php': data.index_php_code
    };
    
    // 3. Mise à jour de l'état initial pour le bouton "Réinitialiser"
    window.initialExerciseData = Object.assign({}, window.exerciseData);
    
    // 4. Mettre à jour l'éditeur Monaco s'il est déjà affiché
    if (window.monacoEditorInstance) {
        // window.currentTabId est l'onglet actuellement sélectionné ('html', 'css', etc.)
        window.monacoEditorInstance.setValue(window.exerciseData[window.currentTabId]);
        
        // Rafraîchir la Live Preview manuellement
        document.dispatchEvent(new CustomEvent('editor-code-changed'));
    }
}
```

### Scénario C : Définir des valeurs vides par défaut
Si l'exercice ne concerne que le PHP pur ou le Web dynamique, vous pouvez tout à fait laisser HTML, CSS et JS vides. 

```javascript
window.exerciseData = {
    html: "",
    css: "",
    js: "",
    php: "<?php\n\n// Exercice CLI (Console) :\necho 'Hello' ",
    'index.php': "<?php\n\n// Exercice Web (Aperçu Live) :\necho '<h1>Hello Web</h1>' "
};
```

### Scénario D : Depuis les paramètres de l'URL (Query Strings)
Le fichier `editor-init.js` est programmé pour lire en priorité les paramètres d'URL (grâce à l'API `URLSearchParams`).
C'est la méthode la plus simple pour partager un exercice sans coder la moindre ligne de backend.

Vous pouvez construire un lien contenant le code HTML, CSS, JS, PHP ou index.php, préalablement encodé pour l'URL.

**Exemple d'URL :**
```text
http://localhost/editeur-code/index.html?html=<h1>Bonjour</h1>&index.php=<?php echo "Test"; ?>
```

Pour générer correctement ces liens depuis un script PHP (Backend) :
```php
<?php
$html = urlencode('<h1>Bonjour</h1>');
$index = urlencode('<?php echo "<h2>Test</h2>"; ?>');
$url = "http://votre-site.com/editeur/index.html?html=$html&index.php=$index";
echo "<a href='$url'>Faire l'exercice</a>";
?>
```
Lors de l'ouverture de l'URL, l'éditeur extraira ces paramètres et peuplera automatiquement les bons onglets !

---

## 3. Le bouton "Réinitialiser"

Dans le fichier `editor-init.js`, une copie des données est effectuée lors du premier chargement :
`window.initialExerciseData = Object.assign({}, window.exerciseData);`

Si vous utilisez le **Scénario B** (chargement asynchrone), n'oubliez pas de mettre à jour `window.initialExerciseData` vous-même, sinon le bouton "Réinitialiser" remettra l'exercice précédent !
