---
title: "Dimensions CSS"
layout: tuto
slug: "dimensions-css"
permalink: /tutos/:slug/
tuto_id: "T.122.217"
version: "normal"
ua: "UA.122.21"
nav_order: 7
---

## 1. Objectif

Contrôler les dimensions des éléments avec CSS.

À la fin du tutoriel, vous savez utiliser `width`, `height`, `max-width`, `px` et `%` pour définir les dimensions des principales zones de la page.

## 2. Prérequis

* Avoir réalisé `T.122.211` à `T.122.216`.
* Connaître les règles CSS et les sélecteurs.
* Connaître les notions de largeur et de hauteur.
* Avoir la page HTML de détail de l’article.

# Partie 1 — Théorie

## 1.1. `width`

`width` définit la largeur d’un élément.

**Exemple :**

```css
.article-main {
    width: 100%;
}
```

L’élément utilise toute la largeur disponible.

## 1.2. `height`

`height` définit la hauteur d’un élément.

**Exemple :**

```css
.article-cover {
    height: 250px;
}
```

La zone possède une hauteur de `250px`.

## 1.3. `max-width`

`max-width` définit la largeur maximale d’un élément.

**Exemple :**

```css
.article-main {
    max-width: 920px;
}
```

La zone ne dépasse pas `920px` de largeur.

## 1.4. `px`

`px` est une unité de mesure CSS.

**Exemple :**

```css
.article-main {
    max-width: 920px;
}
```

`920px` indique une largeur maximale de 920 pixels.

## 1.5. `%`

`%` permet de définir une dimension en fonction de l’espace disponible.

**Exemple :**

```css
.article-cover img {
    width: 100%;
}
```

L’image utilise toute la largeur disponible dans son conteneur.

## 1.6. À retenir

* `width` définit la largeur.
* `height` définit la hauteur.
* `max-width` limite la largeur maximale.
* `px` permet de définir une dimension précise.
* `%` permet de définir une dimension relative au conteneur.

# Partie 2 — Pratique

## 2.1. Définir la largeur du contenu principal

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text
css/style.css
```

Vous avez déjà construit les règles précédentes.

### Étape 2 — Cibler `.article-main`

Ajoutez :

```css
.article-main {
    max-width: 920px;
}
```

Le contenu principal ne dépasse maintenant pas `920px`.

## 2.2. Définir la largeur de la couverture

### Étape 3 — Vérifier la couverture

La page contient :

```html
<figure class="article-cover">
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>
```

La couverture possède déjà une hauteur définie dans le tutoriel précédent.

Ajoutez maintenant :

```css
.article-cover img {
    width: 100%;
}
```

L’image utilise toute la largeur de la couverture.

## 2.3. Définir la largeur de l’image de l’article

### Étape 4 — Cibler `.article-figure img`

Ajoutez :

```css
.article-figure img {
    width: 100%;
}
```

L’image utilise toute la largeur disponible dans sa figure.

## 2.4. Utiliser `max-width` pour les images

### Étape 5 — Vérifier les images

La règle suivante existe déjà :

```css
img {
    display: block;
    max-width: 100%;
}
```

`max-width: 100%` empêche une image de dépasser la largeur disponible.

Cette règle est utile pour les différentes images de la page.

## 2.5. Vérifier les dimensions

### Étape 6 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 7 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* la largeur maximale du contenu principal ;
* la largeur de l’image de couverture ;
* la largeur de l’image de l’article ;
* la hauteur de la couverture ;
* le comportement des images dans leur conteneur.

**Résultat attendu :**

La zone principale de l’article possède une largeur limitée et les images utilisent correctement l’espace disponible.

Le fichier `style.css` contient maintenant notamment :

```css
img {
    display: block;
    max-width: 100%;
}

.article-cover {
    height: 250px;
}

.article-cover img {
    width: 100%;
    height: 100%;
}

.article-main {
    max-width: 920px;
}

.article-figure img {
    width: 100%;
}
```

# 3. Bilan

**Vous avez réalisé :** le réglage des dimensions principales de la page et des images.

**Vous savez maintenant :** utiliser `width`, `height`, `max-width`, `px` et `%` pour contrôler les dimensions des éléments.

Dans le prochain tutoriel, vous allez utiliser le **Box Model** pour régler les marges, les espacements internes et les bordures des éléments.

# 4. Glossaire

* **Largeur** : dimension horizontale d’un élément.
* **Hauteur** : dimension verticale d’un élément.
* **Largeur maximale** : limite maximale de la largeur d’un élément.
* **Pixel (`px`)** : unité de mesure CSS.
* **Pourcentage (`%`)** : unité relative à la dimension du conteneur.
* **Conteneur** : élément qui contient un autre élément.
