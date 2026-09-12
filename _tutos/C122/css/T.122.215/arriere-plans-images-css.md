---
title: "Arrière-plans et images CSS"
layout: tuto
slug: "arriere-plans-images-css"
permalink: /tutos/:slug/
tuto_id: "T.122.215"
version: "normal"
ua: "UA.122.21"
nav_order: 5
---

## 1. Objectif

Mettre en forme les arrière-plans et les images d’une page avec CSS.

À la fin du tutoriel, vous savez utiliser `background`, `background-color`, `width`, `height`, `max-width` et `display: block` pour mettre en forme les zones et les images de la page.

## 2. Prérequis

* Avoir réalisé `T.122.211` à `T.122.214`.
* Connaître les règles CSS et les sélecteurs.
* Connaître les propriétés de texte et de couleur.
* Avoir les images du projet.

# Partie 1 — Théorie

## 1.1. `background-color`

`background-color` définit la couleur de fond d’un élément.

**Exemple :**

```css
.article-header {
    background-color: #f9fafb;
}
```

## 1.2. `background`

`background` permet de définir le fond d’un élément.

On peut utiliser une couleur directement :

```css
body {
    background: #f9fafb;
}
```

Dans notre page, `background` et `background-color` permettent de définir les fonds des différentes zones.

## 1.3. `width`

`width` définit la largeur d’un élément.

**Exemple :**

```css
.article-cover img {
    width: 100%;
}
```

L’image prend toute la largeur disponible.

## 1.4. `height`

`height` définit la hauteur d’un élément.

**Exemple :**

```css
.article-cover {
    height: 250px;
}
```

La zone de couverture possède une hauteur de `250px`.

## 1.5. `max-width`

`max-width` définit une largeur maximale.

**Exemple :**

```css
img {
    max-width: 100%;
}
```

L’image ne dépasse pas la largeur disponible.

## 1.6. `display: block`

`display: block` permet de faire afficher un élément comme un bloc.

Pour une image :

```css
img {
    display: block;
}
```

Cela permet notamment d’éviter certains espaces créés par l’affichage en ligne.

## 1.7. À retenir

* `background-color` définit une couleur de fond.
* `background` définit le fond d’un élément.
* `width` définit la largeur.
* `height` définit la hauteur.
* `max-width` définit une largeur maximale.
* `display: block` affiche un élément comme un bloc.

# Partie 2 — Pratique

## 2.1. Mettre en forme le fond de l’en-tête

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text
css/style.css
```

La page possède déjà les règles des tutoriels précédents.

Ajoutez :

```css
.article-header {
    background: #f9fafb;
}
```

L’en-tête possède maintenant un fond clair.

## 2.2. Préparer les images

### Étape 2 — Cibler toutes les images

Ajoutez :

```css
img {
    display: block;
    max-width: 100%;
}
```

Les images sont maintenant affichées comme des blocs et ne dépassent pas leur conteneur.

## 2.3. Mettre en forme la couverture

La page HTML contient :

```html
<figure class="article-cover">
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>
```

### Étape 3 — Définir la hauteur de la couverture

Ajoutez :

```css
.article-cover {
    height: 250px;
}
```

La zone de couverture possède maintenant une hauteur définie.

### Étape 4 — Définir la largeur de l’image

Ajoutez :

```css
.article-cover img {
    width: 100%;
    height: 100%;
}
```

L’image utilise maintenant toute la largeur et toute la hauteur de la zone.

## 2.4. Mettre en forme l’image de l’article

La page contient :

```html
<figure class="article-figure">
    <img
        src="images/article-example.png"
        alt="Développeur écrivant du code"
    >
    <figcaption>
        Le développeur écrit le code de l'application.
    </figcaption>
</figure>
```

### Étape 5 — Définir la largeur de l’image

Ajoutez :

```css
.article-figure img {
    width: 100%;
}
```

L’image utilise toute la largeur de la figure.

## 2.5. Mettre en forme le contenu principal

### Étape 6 — Ajouter le fond du contenu

La page contient :

```html
<section class="article-body">
```

Ajoutez :

```css
.article-body {
    background: white;
}
```

Le contenu principal possède maintenant un fond blanc.

## 2.6. Vérifier le résultat

### Étape 7 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 8 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* le fond clair de la page ;
* le fond de l’en-tête ;
* l’affichage des images ;
* la largeur de l’image de couverture ;
* la hauteur de la couverture ;
* la largeur de l’image de l’article ;
* le fond blanc du contenu principal.

**Résultat attendu :**

La page commence à prendre la forme de la conception finale.

Le fichier `style.css` contient maintenant notamment :

```css
body {
    color: #1f2937;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

.article-header {
    background: #f9fafb;
}

.article-cover {
    height: 250px;
}

.article-cover img {
    width: 100%;
    height: 100%;
}

.article-body {
    background: white;
}

.article-figure img {
    width: 100%;
}
```

# 3. Bilan

**Vous avez réalisé :** la mise en forme des arrière-plans et des principales images de la page.

**Vous savez maintenant :** utiliser `background`, `background-color`, `width`, `height`, `max-width` et `display: block`.

Dans le prochain tutoriel, vous allez mettre en forme les **liens et les listes** de la page.

# 4. Glossaire

* **Arrière-plan** : fond visuel d’un élément.
* **Largeur** : dimension horizontale d’un élément.
* **Hauteur** : dimension verticale d’un élément.
* **Largeur maximale** : limite maximale de la largeur d’un élément.
* **Bloc** : élément qui occupe une zone de la page.
