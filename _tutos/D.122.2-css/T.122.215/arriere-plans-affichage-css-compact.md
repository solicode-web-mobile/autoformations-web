---
title: "Arrière-plans & Affichage"
layout: tuto
slug: "arriere-plans-affichage-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.215"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 5
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Arrière-plans et Affichage</title>
        <link rel="stylesheet" href="tuto-5-css.css">
    </head>
    <body>
        <div class="header">
            <span class="badge">CSS</span>
            <span class="badge">Niveau 1</span>
            <h1>Apprendre le CSS</h1>
        </div>
    </body>
    </html>
data_css: ""
data_js: ""
data_php: ""
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

Gérer l'arrière-plan, l'espacement interne et modifier le type d'affichage par défaut des balises.

## 2. Prérequis

* Utilisation des classes et des couleurs en CSS.

## Partie 1 — Théorie

- **`background`** : modifie la couleur de fond d'un élément.
- **`padding`** : crée un espace vide à l'intérieur de l'élément (entre le bord et le texte).
- **`display`** : change le comportement de l'élément.
  - `block` : s'étend sur toute la largeur (ex: `<div>`, `<h1>`).
  - `inline` : s'adapte au texte (ex: `<span>`). On ne peut pas changer sa taille.
  - `inline-block` : reste sur la ligne (comme `inline`) mais accepte les dimensions et marges (comme `block`).

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-5-css.html` (collez le HTML de départ) et `tuto-5-css.css` (vide) dans le même dossier.

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` :

```css
/* L'en-tête (bloc par défaut) prend toute la largeur */
.header {
    background: #f0f6ff;
    padding: 40px;
    text-align: center;
}

/* On force les <span> (inline) à devenir des blocs en ligne pour en faire des étiquettes */
.badge {
    display: inline-block;
    background: white;
    color: #1c5bba;
    padding: 5px 15px;
}
```

### 2.3. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML.

**Résultat attendu :**
L'en-tête est aéré et bleuté. Les deux mots "CSS" et "Niveau 1", contenus dans des balises `<span>`, sont devenus de jolis badges blancs alignés côte à côte grâce à `display: inline-block`.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-5/tuto-5-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 5">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser `background` pour colorer le fond, `padding` pour créer de l'espace interne, et `display: inline-block` pour créer de petits modules (comme des boutons ou badges) alignés sur une ligne.
