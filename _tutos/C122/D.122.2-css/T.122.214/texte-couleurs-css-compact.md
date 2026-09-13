---
title: "Texte & Couleurs"
layout: tuto
slug: "texte-couleurs"
permalink: /tutos/:slug/compact
tuto_id: "T.122.214"
type: "classique"
version: "compact"
ua: "UA.122.21"
nav_order: 4
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-4-css.css">
    </head>
    <body>
        <h1 class="title">Mon article</h1>
        <p class="intro">Bienvenue sur ma page.</p>
        <p class="text">Voici le contenu de mon article.</p>
        <p class="text">Cet article présente le CSS.</p>
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

Gérer la typographie, l'alignement et les codes de couleurs.

## 2. Prérequis

* Savoir écrire et lier des fichiers HTML et CSS.

## Partie 1 — Théorie

- **`font-family`** : police d'écriture (ex: `Arial`).
- **`font-size`** : taille (ex: `16px`).
- **`font-weight`** : graisse (ex: `bold` pour gras).
- **`font-style`** : style (ex: `italic`).
- **`text-align`** : alignement (`left`, `center`, `right`).
- **`color` / `background`** : couleur du texte / du fond. S'utilise souvent avec des codes hexadécimaux (`#333333` pour gris foncé, `#FF0000` pour rouge).

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-4-css.html` et `tuto-4-css.css`. Collez les données de départ (remplacez le contenu actuel du CSS pour faire les étapes suivantes).

### 2.2. Le code CSS complet

Copiez ce code dans votre fichier `.css` pour observer toutes les propriétés en action :

```css
/* Modification globale des paragraphes */
p {
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
}

/* Habillage du titre avec des codes couleurs */
.title {
    text-align: center;
    color: #333333;
    background: #eeeeee;
}

/* Changement de couleur d'une classe spécifique */
.intro {
    color: #0066cc;
}
```

### 2.3. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML.

**Résultat attendu :**
Le titre est centré sur fond gris. L'ensemble des paragraphes est passé en Arial 18px gras et italique. L'introduction est en bleu.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-4/tuto-4-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 4">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser les préfixes `font-` et `text-`, et appliquer des couleurs hexadécimales.
