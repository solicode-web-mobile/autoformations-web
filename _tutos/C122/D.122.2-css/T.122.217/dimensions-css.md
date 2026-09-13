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

Utiliser `width`, `height` et `max-width` pour contrôler les dimensions des éléments, et adapter les images avec `object-fit`.

À la fin du tutoriel, vous saurez limiter la largeur d'un conteneur et formater correctement une image de couverture sans la déformer.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de classe.
* Connaître la propriété `display`.

## 3. Données de départ

### HTML

Le fichier `tuto-7-css.html` contient une `div` qui englobe une grande image de couverture :

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
        <!-- Utilisation d'une image générique pour l'exercice de dimensionnement -->
        <img src="https://via.placeholder.com/1200x600" alt="Exemple d'image" class="image-couverture">
    </div>
</body>
</html>
```

Ces données constituent la base de travail du tutoriel.

## Partie 1 — Théorie

### 1.1. La largeur maximale : `max-width`

La propriété `max-width` empêche un élément de dépasser une certaine largeur. Si l'écran est plus petit, l'élément s'adaptera, mais il ne dépassera jamais la valeur définie.

```css
.conteneur {
    max-width: 800px;
}
```

### 1.2. La largeur : `width`

La propriété `width` permet de définir la largeur d’un élément. Utiliser un pourcentage comme `100%` permet à l'élément d'occuper tout l'espace de son parent.

```css
.image-couverture {
    width: 100%;
}
```

### 1.3. La hauteur : `height`

La propriété `height` permet de définir une hauteur fixe.

```css
.image-couverture {
    height: 300px;
}
```

### 1.4. L'ajustement de l'image : `object-fit`

Lorsqu'on force une image à avoir une largeur de `100%` et une hauteur fixe de `300px`, elle risque de se déformer. La propriété `object-fit: cover;` permet de recadrer l'image proprement pour qu'elle remplisse l'espace sans être étirée.

```css
.image-couverture {
    object-fit: cover;
}
```

### 1.5. À retenir

* `max-width` définit une largeur limite.
* `width` définit la largeur (ex: `100%` occupe tout l'espace disponible).
* `height` définit la hauteur fixe.
* `object-fit: cover;` empêche une image de se déformer lorsqu'on force ses dimensions.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez le fichier HTML avec le code de départ fourni. Créez également `tuto-7-css.css`.

### 2.2. Limiter la largeur du conteneur

L'image de base fait 1200 pixels de large. Nous voulons que notre contenu ne dépasse jamais `800px`. Ajoutez la règle :

```css
.conteneur {
    max-width: 800px;
}
```

**Résultat attendu :** Le bloc contenant l'image est limité en largeur. Cependant, l'image peut encore déborder si elle n'est pas adaptée.

### 2.3. Formater l'image de couverture

Pour transformer l'image en vraie image de couverture, nous devons :
1. L'afficher sous forme de bloc (`display: block`).
2. Lui donner la largeur totale du conteneur (`width: 100%`).
3. Fixer sa hauteur (`height: 300px`).
4. Empêcher la déformation (`object-fit: cover`).

Ajoutez la règle :

```css
.image-couverture {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
}
```

### 2.4. Tester le résultat

Enregistrez les deux fichiers et ouvrez `tuto-7-css.html` dans le navigateur. Redimensionnez la fenêtre pour observer le comportement du `max-width`.

**Résultat attendu :**

L’image fait `300px` de hauteur, ne dépasse pas les `800px` de largeur et est recadrée (et non étirée) proprement.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-7/tuto-7-css.html' | relative_url}}"
    height="400"
    title="Résultat final du Tuto 7">
</iframe>

## 3. Bilan

**Vous avez réalisé :** la mise en forme des dimensions d'un conteneur et le recadrage propre d'une image de couverture.

**Vous savez maintenant :** utiliser `max-width` pour limiter la taille d'une page, définir `width` et `height`, et empêcher la déformation d'une image avec `object-fit: cover`.

## 4. Glossaire

* **`max-width`** : propriété qui définit la largeur maximale d'un élément.
* **`width`** : propriété qui définit la largeur.
* **`height`** : propriété qui définit la hauteur.
* **`object-fit: cover`** : propriété qui remplit un espace défini avec une image tout en conservant ses proportions et en recadrant l'excédent.
