---
title: "Dimensions"
layout: tuto
slug: "dimensions-css"
permalink: /tutos/:slug/
tuto_id: "T.122.217"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 7
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Dimensions et Images</title>
        <link rel="stylesheet" href="tuto-7-css.css">
    </head>
    <body>
        <div class="conteneur">
            <img src="https://via.placeholder.com/1200x600" alt="Exemple d'image" class="image-couverture">
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

Apprendre à contrôler la largeur et la hauteur des éléments, et découvrir comment formater parfaitement une image sans la déformer.

## 2. Prérequis

* Comprendre le fonctionnement de la propriété `display`.

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Dimensions et Images</title>
    <link rel="stylesheet" href="tuto-7-css.css">
</head>
<body>
    <div class="conteneur">
        <!-- Une grande image de 1200 pixels de large par 600 pixels de haut -->
        <img src="https://via.placeholder.com/1200x600" alt="Exemple d'image" class="image-couverture">
    </div>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Gérer la largeur (`width` et `max-width`)

Par défaut, une `<div>` prend 100% de la largeur de l'écran. Sur un très grand écran, cela peut rendre le texte illisible s'il est étiré d'un bout à l'autre.
On peut utiliser :
- `width: 800px;` : Force la boîte à faire *toujours* 800px. S'il y a un petit écran (téléphone), cela créera une barre de défilement horizontale.
- `max-width: 800px;` : La boîte peut être plus petite, mais elle ne **dépassera jamais** 800px. C'est idéal pour le Web moderne (design responsif).

### 1.2. Gérer la hauteur (`height`)

De la même manière, on peut définir la hauteur d'un élément avec `height`.
```css
height: 300px;
```

### 1.3. La gestion des images (`object-fit`)

Les images sont compliquées en CSS. Si vous forcez une image (qui fait 600px de haut) à n'en faire que 300px, elle va s'écraser et se déformer (effet "aplati").
Pour éviter cela, on utilise la propriété magique `object-fit: cover;`. Le navigateur va agir comme un photographe : il va conserver les proportions de l'image et va *recadrer* (couper) tout ce qui dépasse du cadre pour la faire rentrer sans déformation.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez `tuto-7-css.html` (collez le HTML de départ) et `tuto-7-css.css` (vide) dans le même dossier.

### 2.2. Limiter la largeur du conteneur

L'image mesure 1200 pixels. C'est grand ! Nous allons limiter la boîte `.conteneur` (qui contient l'image) à 800px maximum.

Dans `tuto-7-css.css` :
```css
.conteneur {
    max-width: 800px;
}
```

### 2.3. Transformer l'image de couverture

Maintenant, nous voulons que l'image fasse exactement la taille de son conteneur (100% de largeur), qu'elle ait une hauteur fixe de 300px (pour un bel effet bandeau), sans être aplatie.

Ajoutez cette règle :
```css
.image-couverture {
    display: block;      /* Enlève les marges bizarres sous l'image */
    width: 100%;         /* Prend toute la largeur de .conteneur */
    height: 300px;       /* Force une hauteur fixe */
    object-fit: cover;   /* Empêche la déformation */
}
```

### 2.4. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML.

**Résultat attendu :**
L'image ne fait plus 1200x600. Elle est restreinte par le conteneur (`max-width: 800px`), elle est forcé à `300px` de haut, et grâce à `cover`, elle a été rognée proprement en haut et en bas au lieu d'être écrasée.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-7/tuto-7-css.html' | relative_url}}"
    height="400"
    title="Résultat du tutoriel 7">
</iframe>

## 4. Bilan

**Vous avez réalisé :** l'intégration correcte d'une grande image de couverture (Hero Banner).

**Vous savez maintenant :** 
- Différencier `width` et `max-width` (limite bloquante).
- Imposer une hauteur (`height`).
- Recadrer proprement une image avec `object-fit: cover;` pour éviter son écrasement.
