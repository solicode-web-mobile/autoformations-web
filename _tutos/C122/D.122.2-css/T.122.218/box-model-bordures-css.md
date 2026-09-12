---
title: "Box Model et bordures CSS"
layout: tuto
slug: "box-model-bordures-css"
permalink: /tutos/:slug/
tuto_id: "T.122.218"
version: "normal"
ua: "UA.122.21"
nav_order: 8
---

## 1. Objectif

Utiliser le Box Model pour contrôler les espaces et les bordures des éléments HTML.

À la fin du tutoriel, vous savez utiliser `margin`, `padding`, `border`, `border-left` et `border-radius` pour organiser les principaux blocs de la page.

## 2. Prérequis

* Avoir réalisé `T.122.211` à `T.122.217`.
* Connaître les règles CSS et les sélecteurs.
* Connaître `width`, `height` et `max-width`.
* Avoir la page HTML de détail de l’article.

# Partie 1 — Théorie

## 1.1. Le Box Model

En CSS, un élément possède plusieurs zones :

```text
Contenu
   ↓
Padding
   ↓
Border
   ↓
Margin
```

* **Contenu** : texte, image ou autre élément.
* **Padding** : espace entre le contenu et la bordure.
* **Border** : bordure autour de l’élément.
* **Margin** : espace autour de l’élément.

## 1.2. `padding`

`padding` ajoute un espace à l’intérieur de l’élément.

**Exemple :**

```css id="xg9z4m"
.article-body {
    padding: 40px;
}
```

Le contenu est éloigné de la bordure de l’élément.

## 1.3. `margin`

`margin` ajoute un espace à l’extérieur de l’élément.

**Exemple :**

```css id="d29v1k"
.article-body {
    margin: 40px auto;
}
```

L’élément possède un espace autour de lui.

## 1.4. `border`

`border` ajoute une bordure autour d’un élément.

**Exemple :**

```css id="c2u1ss"
.article-body {
    border: 1px solid #f3f4f6;
}
```

## 1.5. `border-left`

`border-left` permet de définir uniquement la bordure gauche.

**Exemple :**

```css id="kz0vbn"
.article-blockquote {
    border-left: 4px solid #2673e8;
}
```

## 1.6. `border-radius`

`border-radius` arrondit les coins d’un élément.

**Exemple :**

```css id="5lhggw"
.article-body {
    border-radius: 40px;
}
```

## 1.7. À retenir

* `padding` crée un espace à l’intérieur.
* `margin` crée un espace à l’extérieur.
* `border` ajoute une bordure.
* `border-left` ajoute une bordure à gauche.
* `border-radius` arrondit les coins.
* Ces propriétés font partie du **Box Model**.

# Partie 2 — Pratique

## 2.1. Créer l’espace autour du contenu

### Étape 1 — Ouvrir `style.css`

Ouvrez :

```text
css/style.css
```

### Étape 2 — Modifier `.article-main`

La zone principale doit être séparée des autres éléments.

Ajoutez :

```css
.article-main {
    max-width: 920px;
    margin: 0 auto 80px;
}
```

`auto` permet de centrer horizontalement la zone.

`80px` ajoute un espace sous la zone.

## 2.2. Créer l’espace intérieur de l’article

### Étape 3 — Modifier `.article-body`

Ajoutez :

```css
.article-body {
    padding: 110px 80px;
}
```

Le contenu possède maintenant un espace intérieur.

## 2.3. Ajouter une bordure

### Étape 4 — Compléter `.article-body`

Ajoutez :

```css
.article-body {
    padding: 110px 80px;
    border: 1px solid #f3f4f6;
}
```

Une bordure légère apparaît autour du contenu.

## 2.4. Arrondir le bloc principal

### Étape 5 — Ajouter `border-radius`

Complétez :

```css
.article-body {
    padding: 110px 80px;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
}
```

Les coins du bloc sont maintenant arrondis.

## 2.5. Espacer les paragraphes

### Étape 6 — Modifier les paragraphes

Ajoutez :

```css
.article-body p {
    margin: 0 0 24px;
}
```

Un espace de `24px` est ajouté sous chaque paragraphe.

## 2.6. Espacer les titres

### Étape 7 — Modifier les titres

Ajoutez :

```css
.article-body h2 {
    margin: 0 0 24px;
}

.article-body h3 {
    margin: 48px 0 20px;
}
```

Les titres sont maintenant séparés des autres contenus.

## 2.7. Ajouter le style de la citation

### Étape 8 — Modifier le bloc de citation

La page HTML contient :

```html
<blockquote class="article-blockquote">
```

Ajoutez :

```css
.article-blockquote {
    margin: 40px 0;
    padding: 24px 28px;
    border-left: 4px solid #2673e8;
}
```

La citation possède maintenant :

* un espace extérieur ;
* un espace intérieur ;
* une bordure à gauche.

## 2.8. Vérifier le résultat

### Étape 9 — Enregistrer `style.css`

Enregistrez le fichier.

### Étape 10 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Vérifiez :

* l’espace autour de l’article ;
* l’espace intérieur du bloc principal ;
* la bordure du bloc ;
* les coins arrondis ;
* l’espace entre les paragraphes ;
* l’espace entre les titres ;
* la bordure de la citation.

**Résultat attendu :**

Le contenu de l’article est maintenant organisé avec le Box Model.

Le fichier `style.css` contient notamment :

```css
.article-main {
    max-width: 920px;
    margin: 0 auto 80px;
}

.article-body {
    padding: 110px 80px;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
}

.article-body h2 {
    margin: 0 0 24px;
}

.article-body h3 {
    margin: 48px 0 20px;
}

.article-body p {
    margin: 0 0 24px;
}

.article-blockquote {
    margin: 40px 0;
    padding: 24px 28px;
    border-left: 4px solid #2673e8;
}
```

# 3. Bilan

**Vous avez réalisé :** les principaux espaces et bordures de la page avec le Box Model.

**Vous savez maintenant :** utiliser `margin`, `padding`, `border`, `border-left` et `border-radius`.

Dans le prochain tutoriel, vous allez travailler **l’affichage des éléments avec `display`** pour finaliser la présentation de la page.

# 4. Glossaire

* **Box Model** : modèle qui décrit le contenu, le padding, la bordure et la marge d’un élément.
* **Padding** : espace intérieur d’un élément.
* **Margin** : espace extérieur d’un élément.
* **Border** : bordure autour d’un élément.
* **Border radius** : arrondi des coins d’un élément.
