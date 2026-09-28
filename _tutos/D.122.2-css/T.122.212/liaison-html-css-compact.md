---
title: "Liaison HTML–CSS"
layout: tuto
slug: "liaison-html-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.212"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 2
data_html: | 
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Liaison HTML-CSS</title>
    </head>
    <body>
        <h1>Mon article</h1>
        <p>Bienvenue sur ma page.</p>
        <p>Voici le contenu de mon article.</p>
    </body>
    </html>
data_css: |
    p {
        color: blue;
    }
data_js: ""
---

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Créer un fichier CSS indépendant et le relier à votre page HTML.

## 2. Prérequis

* Connaître la syntaxe d'une règle CSS.

## Partie 1 — Théorie

Pour que plusieurs pages HTML puissent partager le même design, on écrit le CSS dans un fichier à part (ex: `style.css`).

On relie ensuite ce fichier au HTML en ajoutant la balise `<link>` dans l'en-tête (`<head>`) :
```html
<link rel="stylesheet" href="style.css">
```

## Partie 2 — Pratique

### 2.1. Créer le fichier HTML

Créez `tuto-2-css.html` et collez les données HTML de départ.

### 2.2. Créer le fichier CSS

Dans le même dossier, créez un fichier `tuto-2-css.css` (l'extension est importante).
Insérez uniquement la règle CSS :

```css
p {
    color: blue;
}
```

### 2.3. Lier les deux fichiers

Dans votre fichier HTML, ajoutez la balise `<link>` dans la section `<head>` :

```html
<head>
    <meta charset="UTF-8">
    <title>Liaison HTML-CSS</title>
    
    <link rel="stylesheet" href="tuto-2-css.css">
</head>
```

### 2.4. Tester la page

Enregistrez les **deux fichiers** et ouvrez la page HTML dans votre navigateur.

**Résultat attendu :**
Le navigateur a chargé la feuille de style externe et appliqué la couleur bleue aux paragraphes.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-2/tuto-2-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 2">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser la balise `<link>` (avec `rel="stylesheet"` et `href`) pour importer une feuille de style externe.
