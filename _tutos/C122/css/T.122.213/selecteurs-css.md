---
title: "Sélecteurs CSS"
layout: tuto
slug: "selecteurs-css"
permalink: /tutos/:slug/
tuto_id: "T.122.213"
version: "normal"
ua: "UA.122.21"
nav_order: 3
---

## 1. Objectif

Apprendre à sélectionner les éléments HTML avec les sélecteurs CSS.

À la fin du tutoriel, vous savez utiliser les sélecteurs de balise, de classe et les sélecteurs multiples pour cibler les éléments de la page.

## 2. Prérequis

* Avoir réalisé `T.122.211` et `T.122.212`.
* Connaître la syntaxe d’une règle CSS.
* Connaître les attributs `class` utilisés dans la page HTML.

# Partie 1 — Théorie

## 1.1. Sélecteur de balise

Un sélecteur de balise cible tous les éléments HTML d’un même type.

**Exemple :**

```css id="c6k9r1"
p {
    color: #1f2937;
}
```

Cette règle cible tous les éléments `<p>`.

## 1.2. Sélecteur de classe

Un sélecteur de classe cible les éléments qui possèdent une classe donnée.

Dans le HTML :

```html id="r40w5v"
<header class="article-header">
```

Le sélecteur CSS correspondant est :

```css id="qgp4bd"
.article-header {
    text-align: center;
}
```

Le point `.` indique une classe.

## 1.3. Sélecteurs multiples

Plusieurs sélecteurs peuvent être regroupés dans une même règle.

**Exemple :**

```css id="v2v4uk"
h2,
h3 {
    color: #0a2042;
}
```

Cette règle cible les éléments `<h2>` et `<h3>`.

Les mêmes propriétés sont donc appliquées aux deux types d’éléments.

## 1.4. À retenir

* Un sélecteur de **balise** cible un type d’élément.
* Un sélecteur de **classe** cible une classe.
* Le point `.` indique une classe.
* Une virgule `,` permet de regrouper plusieurs sélecteurs.

# Partie 2 — Pratique

## 2.1. Cibler les éléments de la page

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text id="k48vub"
css/style.css
```

Vous avez déjà :

```css id="2rt8ni"
body {
    color: #1f2937;
    background: #f9fafb;
}
```

## 2.2. Utiliser un sélecteur de balise

### Étape 2 — Cibler les paragraphes

Ajoutez :

```css id="1clw3r"
p {
    color: #1f2937;
}
```

Cette règle cible tous les paragraphes de la page.

## 2.3. Utiliser un sélecteur de classe

### Étape 3 — Cibler l’en-tête

La page HTML contient :

```html id="1n9cpi"
<header class="article-header">
```

Ajoutez dans `style.css` :

```css id="4d5jxe"
.article-header {
    text-align: center;
}
```

Le contenu de l’en-tête est maintenant centré.

### Étape 4 — Cibler la catégorie

Dans le HTML :

```html id="c7zu6u"
<span class="article-category">
    Développement
</span>
```

Ajoutez :

```css id="8c9v5z"
.article-category {
    text-align: center;
}
```

La classe `article-category` est maintenant ciblée.

## 2.4. Utiliser plusieurs sélecteurs

### Étape 5 — Cibler les titres

La page contient `<h2>` et `<h3>`.

Ajoutez :

```css id="f4vego"
h2,
h3 {
    color: #0a2042;
}
```

Les deux niveaux de titre utilisent maintenant la même couleur.

### Étape 6 — Cibler les éléments du contenu

Ajoutez :

```css id="lq0p1w"
.article-body h2,
.article-body h3 {
    color: #0a2042;
}
```

Ici, la règle cible les titres `<h2>` et `<h3>` qui se trouvent dans `.article-body`.

## 2.5. Vérifier les sélecteurs

### Étape 7 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 8 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez que :

* les paragraphes utilisent la couleur définie ;
* l’en-tête est centré ;
* la catégorie peut être ciblée avec sa classe ;
* les titres `<h2>` et `<h3>` utilisent la couleur définie.

**Résultat attendu :**

Le fichier `style.css` contient maintenant notamment :

```css id="b7tgsi"
body {
    color: #1f2937;
    background: #f9fafb;
}

p {
    color: #1f2937;
}

.article-header {
    text-align: center;
}

.article-category {
    text-align: center;
}

.article-body h2,
.article-body h3 {
    color: #0a2042;
}
```

Les éléments HTML de la page peuvent maintenant être ciblés précisément avec les sélecteurs CSS.

# 3. Bilan

**Vous avez réalisé :** le ciblage des principaux éléments de la page avec les sélecteurs CSS.

**Vous savez maintenant :** utiliser les sélecteurs de balise, de classe et les sélecteurs multiples.

Dans le prochain tutoriel, vous allez utiliser les propriétés CSS de **texte et de couleur** pour mettre en forme les contenus de la page.

# 4. Glossaire

* **Sélecteur de balise** : sélecteur qui cible un type d’élément HTML.
* **Sélecteur de classe** : sélecteur qui cible les éléments portant une classe.
* **Sélecteur multiple** : plusieurs sélecteurs regroupés dans une même règle CSS.
* **Classe** : nom associé à un élément HTML avec l’attribut `class`.
