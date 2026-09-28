---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/
tuto_id: "T.122.116"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 6
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Images et figures HTML</title>
    </head>
    <body>
    </body>
    </html>
data_css: ""
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

Ajouter et structurer du contenu visuel dans une page HTML à l'aide d'images, de figures et de légendes.

## 2. Prérequis

* Connaître la structure d’un document HTML.
* Savoir utiliser des balises (comme `<h1>` et `<p>`) et des attributs.
* Comprendre le fonctionnement des chemins relatifs.

## 3. Données de départ

Nous partons d'un document HTML de base structuré :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Images et figures HTML</title>
</head>
<body>
</body>
</html>
```
*Note : Pour cet exercice, vous aurez besoin de deux images fictives placées dans un sous-dossier `images/` : `author.jpg` et `article-example.jpg`.*

## Partie 1 — Théorie

### 1.1. La balise image (`<img>`)

Pour afficher une image, on utilise la balise `<img>`. C'est une balise **orpheline** (elle n'a pas de balise de fin `</img>`).
Elle nécessite deux attributs obligatoires : `src` et `alt`.

```html
<img src="images/author.jpg" alt="Portrait du développeur">
```

### 1.2. Les attributs essentiels de l'image

* `src` (source) : Indique le chemin relatif vers le fichier de l'image.
* `alt` (texte alternatif) : Décrit l'image pour les personnes malvoyantes (liseuses d'écran) ou si l'image ne charge pas.
* `width` et `height` (largeur et hauteur) : Permettent de redimensionner l'image (en pixels) directement en HTML.

### 1.3. La figure (`<figure>`) et sa légende (`<figcaption>`)

Pour regrouper une image avec un texte explicatif (sa légende), HTML5 a introduit deux balises sémantiques très utiles :
* `<figure>` : Conteneur global de l'image.
* `<figcaption>` : La légende associée.

```html
<figure>
    <img src="logo.png" alt="Logo de l'entreprise">
    <figcaption>Notre nouveau logo</figcaption>
</figure>
```

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Dans VS Code, créez un fichier `tuto-6-html.html` et collez-y les données de départ.

### 2.2. Ajouter le texte introductif

Dans la balise `<body>`, ajoutez un titre de niveau 1 et un paragraphe :

```html
<body>
    <h1>Images et figures HTML</h1>
    <p>Une image permet d'afficher un contenu visuel dans une page HTML.</p>
```

### 2.3. Ajouter une image simple

Sous le paragraphe, ajoutez une première image (le portrait). Indiquez un redimensionnement avec `width` et `height` :

```html
    <img src="images/author.jpg" alt="Portrait d'un développeur" width="120" height="120">
```

### 2.4. Ajouter une image avec sa légende (figure)

Sous la première image, ajoutez l'illustration principale de l'article dans un bloc `<figure>`, avec sa légende :

```html
    <figure>
        <img src="images/article-example.600.jpg" alt="Développeur écrivant du code">
        <figcaption>Le développeur écrit le code de l'application.</figcaption>
    </figure>
</body>
```

### 2.5. Tester la page

Enregistrez `tuto-6-html.html` et ouvrez-le dans le navigateur.

**Résultat attendu :**

Vous devriez voir les textes, ainsi que les deux images (ou au moins les "icônes d'image cassée" avec leur texte alternatif si vous n'avez pas réellement les fichiers sur votre ordinateur). La deuxième image est naturellement décalée avec sa légende car la balise `<figure>` applique une marge par défaut.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-6/tuto-6-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 6">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page affichant différents formats visuels.

**Vous savez maintenant :** utiliser la balise `<img>` avec ses attributs obligatoires (`src` et `alt`), et structurer sémantiquement des illustrations grâce à `<figure>` et `<figcaption>`.

## 4. Glossaire

* **Source (`src`)** : attribut indiquant le chemin de l'image.
* **Texte alternatif (`alt`)** : texte qui décrit l'image, affiché en cas de problème de chargement.
* **Figure** : conteneur sémantique qui associe un média et sa légende.
