---
title: "Affichage CSS"
layout: tuto
slug: "affichage-css"
permalink: /tutos/:slug/
tuto_id: "T.122.219"
version: "normal"
ua: "UA.122.21"
nav_order: 9
---

## 1. Objectif

Apprendre à contrôler l’affichage des éléments avec la propriété `display`.

À la fin du tutoriel, vous savez utiliser `block`, `inline`, `inline-block` et `none` pour contrôler le comportement des éléments de la page.

## 2. Prérequis

* Avoir réalisé `T.122.211` à `T.122.218`.
* Connaître les règles CSS et les sélecteurs.
* Connaître `margin`, `padding` et `border`.
* Avoir la page HTML de détail de l’article.

# Partie 1 — Théorie

## 1.1. `display: block`

`display: block` affiche un élément comme un bloc.

Un élément de type bloc occupe toute la largeur disponible.

**Exemple :**

```css
.element {
    display: block;
}
```

## 1.2. `display: inline`

`display: inline` affiche un élément dans la même ligne que les autres éléments.

**Exemple :**

```css
.element {
    display: inline;
}
```

L’élément occupe seulement l’espace nécessaire à son contenu.

## 1.3. `display: inline-block`

`display: inline-block` permet de garder l’élément sur la même ligne tout en permettant de définir des dimensions et des espaces.

**Exemple :**

```css
.element {
    display: inline-block;
}
```

## 1.4. `display: none`

`display: none` retire un élément de l’affichage.

**Exemple :**

```css
.element {
    display: none;
}
```

L’élément n’apparaît plus dans la page.

## 1.5. À retenir

* `block` affiche un élément comme un bloc.
* `inline` affiche un élément dans une ligne.
* `inline-block` permet un comportement en ligne avec des dimensions.
* `none` masque l’élément.

# Partie 2 — Pratique

## 2.1. Afficher la catégorie comme un bloc en ligne

La page HTML contient :

```html
<span class="article-category">
    Développement
</span>
```

### Étape 1 — Modifier `.article-category`

Dans `style.css`, utilisez :

```css
.article-category {
    display: inline-block;
    margin-bottom: 5px;
    padding: 8px 24px;
    color: #1c5bba;
    font-size: 14px;
    background: white;
    border: 2px solid #f0f6ff;
    border-radius: 20px;
}
```

La catégorie se comporte maintenant comme un élément en ligne qui accepte les dimensions et les espaces.

## 2.2. Afficher l’image de l’auteur

La page contient :

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
>
```

### Étape 2 — Modifier l’affichage de l’image

Ajoutez :

```css
.article-author img {
    display: inline-block;
    width: 44px;
    height: 44px;
}
```

L’image peut maintenant être affichée sur la même ligne que les informations de l’auteur.

## 2.3. Afficher la citation

La page contient :

```html
<cite>
    — Métier de développeur
</cite>
```

### Étape 3 — Afficher la citation sur une nouvelle ligne

Ajoutez :

```css
.article-blockquote cite {
    display: block;
}
```

La citation s’affiche maintenant sur une nouvelle ligne.

## 2.4. Vérifier la page

### Étape 4 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 5 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* la catégorie ;
* l’image de l’auteur ;
* les informations de l’auteur ;
* la citation.

**Résultat attendu :**

Les éléments utilisent maintenant un comportement d’affichage adapté à leur rôle.

## 2.5. Vérifier le CSS final

Votre fichier `css/style.css` doit maintenant contenir progressivement les règles nécessaires à la mise en forme de la page.

Il doit notamment contenir :

```css
body {
    margin: 0;
    color: #1f2937;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

.article-category {
    display: inline-block;
}

.article-author img {
    display: inline-block;
}

.article-blockquote cite {
    display: block;
}
```

Les autres règles ont été construites dans les tutoriels précédents.

# 3. Bilan

**Vous avez réalisé :** la mise en forme complète de la page de détail d’un article avec les bases de CSS.

**Vous savez maintenant :** utiliser `display: block`, `display: inline`, `display: inline-block` et `display: none`.

## 3.1. Présenter le résultat final

### Étape 6 — Enregistrer tous les fichiers

Enregistrez :

```text
index.html
css/style.css
```

### Étape 7 — Ouvrir la page finale

Ouvrez `index.html` dans le navigateur.

Vérifiez la page entière.

Elle doit afficher :

* la catégorie ;
* le titre de l’article ;
* les informations de l’auteur ;
* les images ;
* les titres ;
* les paragraphes ;
* la liste des missions ;
* la figure et sa légende ;
* la citation ;
* les différents espacements ;
* les couleurs ;
* les bordures ;
* les formes arrondies.

### Étape 8 — Présenter le résultat

Présentez le résultat final de votre **page de détail d’un article**.

Comparez votre page avec la conception fournie.

**Résultat attendu :**

Une page de détail d’un article correctement mise en forme avec CSS.

**Livrable :**

* `index.html`
* `css/style.css`

**Critère de réussite :**

La page HTML s’affiche correctement dans le navigateur et la mise en forme CSS correspond à la conception fournie.

# 4. Glossaire

* **`display`** : propriété CSS qui contrôle le mode d’affichage d’un élément.
* **`block`** : affichage d’un élément comme un bloc.
* **`inline`** : affichage d’un élément dans une ligne.
* **`inline-block`** : affichage en ligne avec possibilité de définir des dimensions.
* **`none`** : élément retiré de l’affichage.
