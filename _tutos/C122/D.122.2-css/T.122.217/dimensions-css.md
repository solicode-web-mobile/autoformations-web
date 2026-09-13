---
title: "Utiliser les dimensions CSS"
layout: tuto
slug: "utiliser-dimensions-css"
permalink: /tutos/:slug/
tuto_id: "T.122.217"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 7

data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-7-css.css">
    </head>
    <body>
        <h1 class="title">Mon article</h1>

        <div class="content">
            <img
                class="cover"
                src="https://picsum.photos/800/400"
                alt="Image de couverture">

            <p>
                Voici le contenu de mon article.
            </p>

            <p>
                Cette page permet de tester les dimensions CSS.
            </p>
        </div>
    </body>
    </html>

data_css: |
    .cover {
        width: 400px;
        height: 200px;
    }

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

Utiliser `width`, `height` et `max-width` pour contrôler les dimensions des éléments.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de classe.
* Savoir utiliser `color`.
* Savoir utiliser `background`.
* Savoir utiliser `display`.
* Savoir utiliser `margin`.
* Savoir utiliser `padding`.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html id="1s7gkr"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-7-css.css">
</head>
<body>

    <h1 class="title">Mon article</h1>

    <div class="content">

        <img
            class="cover"
            src="https://picsum.photos/800/400"
            alt="Image de couverture">

        <p>
            Voici le contenu de mon article.
        </p>

        <p>
            Cette page permet de tester les dimensions CSS.
        </p>

    </div>

</body>
</html>
```

### CSS

Utilisez le code CSS suivant :

```css id="e7mw1f"
.cover {
    width: 400px;
    height: 200px;
}
```

## Partie 1 — Théorie

### 1.1. La propriété `width`

`width` permet de définir la largeur d’un élément.

```css id="g6x2us"
.cover {
    width: 400px;
}
```

### 1.2. La propriété `height`

`height` permet de définir la hauteur d’un élément.

```css id="j9u4mk"
.cover {
    height: 200px;
}
```

### 1.3. La propriété `max-width`

`max-width` définit une largeur maximale.

```css id="8h6t3v"
.cover {
    max-width: 100%;
}
```

L’image ne dépasse pas la largeur disponible.

### 1.4. Combiner les dimensions

On peut utiliser plusieurs propriétés dans une même règle.

```css id="1k4z8c"
.cover {
    width: 400px;
    height: 200px;
    max-width: 100%;
}
```

### 1.5. À retenir

* `width` définit la largeur.
* `height` définit la hauteur.
* `max-width` définit la largeur maximale.
* Plusieurs propriétés peuvent être utilisées dans une même règle.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier CSS

Ouvrez :

```text id="r6y2pm"
tuto-7-css.css
```

### 2.2. Définir la largeur de l’image

Ajoutez :

```css id="s2c8r5"
.cover {
    width: 400px;
}
```

**Résultat attendu :**

L’image possède une largeur de `400px`.

### 2.3. Définir la hauteur

Ajoutez :

```css id="v5n7ka"
.cover {
    width: 400px;
    height: 200px;
}
```

**Résultat attendu :**

L’image possède une largeur de `400px` et une hauteur de `200px`.

### 2.4. Limiter la largeur

Ajoutez :

```css id="m3j8qv"
.cover {
    width: 400px;
    height: 200px;
    max-width: 100%;
}
```

**Résultat attendu :**

L’image ne dépasse pas la largeur disponible.

### 2.5. Tester

Ouvrez :

```text id="x5q0np"
tuto-7-css.html
```

Rechargez la page.

**Résultat attendu :**

L’image possède une largeur et une hauteur définies et ne dépasse pas la largeur disponible.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-7-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 7">
</iframe>

## Partie 3 — Développement progressif

### 3.1. Développer l’itération I2

**Série :** Page détail

**Position :** I2 sur I3

**Incrément :** Structure principale et images

L’itération I2 commence à partir du **résultat final de l’itération I1**.

Utilisez les notions étudiées dans ce tutoriel pour ajouter la structure principale et les images à la page de détail.

Conservez l’en-tête réalisé dans I1.

Ajoutez :

* une image de couverture ;
* une zone de contenu ;
* des dimensions pour l’image ;
* une largeur maximale pour l’image.

Les propriétés étudiées sont :

```text
width
height
max-width
```

Utilisez également les notions déjà disponibles nécessaires à l’intégration.

### 3.2. Résultat attendu

L’itération I2 conserve l’en-tête de I1 et ajoute la structure principale ainsi que les images.

<iframe
    class="auto-wrapper"
    src="{{'/autoformations-web/code/blog/page-detail/page-detail-html-v1.tuto-7-css.html' | relative_url}}"
    height="700"
    title="Résultat final de l’itération I2">
</iframe>

### 3.3. Livrable

Une nouvelle version de la page de détail avec :

* l’en-tête de I1 ;
* une structure principale ;
* une image de couverture ;
* des images correctement dimensionnées.

### 3.4. Critère de réussite

L’itération I2 :

* conserve l’en-tête de I1 ;
* affiche une image de couverture ;
* contrôle la largeur et la hauteur de l’image ;
* empêche l’image de dépasser la largeur disponible.

## Bilan

**Vous avez réalisé :**

Une mise en forme utilisant `width`, `height` et `max-width`.

**Vous savez maintenant :**

* définir la largeur d’un élément ;
* définir sa hauteur ;
* définir une largeur maximale ;
* contrôler les dimensions d’une image.

**Vous avez également développé l’itération I2 du projet.**

## Glossaire

* **`width`** : propriété qui définit la largeur.
* **`height`** : propriété qui définit la hauteur.
* **`max-width`** : propriété qui définit la largeur maximale.
* **Dimension** : taille d’un élément.
* **Image de couverture** : image principale placée dans une page ou un article.
