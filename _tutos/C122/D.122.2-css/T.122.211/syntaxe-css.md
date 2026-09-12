---
title: "Syntaxe CSS"
layout: tuto
slug: "syntaxe-css"
permalink: /tutos/:slug/
tuto_id: "T.122.211"
version: "normal"
ua: "UA.122.21"
nav_order: 1
---

## 1. Objectif

Découvrir la syntaxe CSS et écrire une règle CSS.

À la fin du tutoriel, vous savez identifier un sélecteur, une propriété, une valeur et une déclaration.

## 2. Prérequis

* Avoir terminé la page HTML de détail d’un article.
* Connaître les éléments HTML et les attributs.
* Savoir ouvrir le projet dans un éditeur de code.

# Partie 1 — Théorie

## 1.1. Une règle CSS

Une règle CSS permet de définir la présentation d’un élément HTML.

Elle utilise cette structure :

```css
selecteur {
    propriete: valeur;
}
```

**Exemple :**

```css
body {
    color: #1f2937;
}
```

Dans cette règle :

* `body` est le sélecteur.
* `color` est la propriété.
* `#1f2937` est la valeur.
* `color: #1f2937;` est une déclaration.

## 1.2. Le sélecteur

Le sélecteur indique l’élément HTML ciblé.

**Exemple :**

```css
body {
    color: #1f2937;
}
```

Ici, `body` cible l’élément `<body>`.

## 1.3. La propriété

La propriété indique ce que l’on veut modifier.

**Exemple :**

```css
body {
    color: #1f2937;
}
```

Ici, `color` indique que l’on veut modifier la couleur du texte.

## 1.4. La valeur

La valeur indique le réglage choisi pour la propriété.

**Exemple :**

```css
body {
    color: #1f2937;
}
```

Ici, `#1f2937` est la valeur de `color`.

## 1.5. La déclaration

Une déclaration associe une propriété et une valeur.

**Exemple :**

```css
color: #1f2937;
```

Une déclaration se termine par `;`.

Une règle peut contenir plusieurs déclarations.

**Exemple :**

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

## 1.6. À retenir

* Le sélecteur indique quoi cibler.
* La propriété indique quoi modifier.
* La valeur indique le réglage.
* Une déclaration contient une propriété et une valeur.
* Une règle CSS contient un sélecteur et une ou plusieurs déclarations.

# Partie 2 — Pratique

## 2.1. Créer le fichier CSS

### Étape 1 — Ouvrir le projet

Ouvrez le projet qui contient la page `index.html`.

La structure du projet est maintenant proche de :

```text
blog-personnel/
├── index.html
├── images/
│   ├── author.jpg
│   ├── article-cover.png
│   └── article-example.png
└── css/
```

### Étape 2 — Créer le fichier `style.css`

Dans le dossier `css`, créez :

```text
style.css
```

Le fichier est maintenant :

```text
blog-personnel/
├── index.html
├── css/
│   └── style.css
└── images/
```

## 2.2. Écrire une première règle CSS

### Étape 3 — Ouvrir `style.css`

Ouvrez le fichier :

```text
css/style.css
```

### Étape 4 — Écrire une règle CSS

Ajoutez :

```css
body {
}
```

Cette règle cible l’élément `<body>`.

Pour le moment, aucune propriété n’est appliquée.

### Étape 5 — Ajouter une déclaration

Ajoutez une propriété et une valeur :

```css
body {
    color: #1f2937;
}
```

Vous avez maintenant :

* un sélecteur : `body`
* une propriété : `color`
* une valeur : `#1f2937`
* une déclaration : `color: #1f2937;`

## 2.3. Ajouter une deuxième déclaration

### Étape 6 — Compléter la règle

Ajoutez une deuxième déclaration :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

La règle contient maintenant deux déclarations.

## 2.4. Vérifier le fichier

### Étape 7 — Enregistrer `style.css`

Enregistrez le fichier.

Le CSS est maintenant préparé pour la page.

La page HTML ne prend pas encore ce fichier en compte.

La liaison entre HTML et CSS sera réalisée dans le tutoriel suivant.

**Résultat attendu :**

Le fichier `css/style.css` contient :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

# 3. Bilan

**Vous avez réalisé :** le premier fichier CSS de la page de détail d’un article.

**Vous savez maintenant :** écrire une règle CSS avec un sélecteur, une propriété, une valeur et une déclaration.

Dans le prochain tutoriel, vous allez **lier `style.css` à la page HTML**.

# 4. Glossaire

* **CSS** : langage utilisé pour mettre en forme une page Web.
* **Sélecteur** : partie d’une règle CSS qui indique l’élément ciblé.
* **Propriété** : caractéristique que CSS peut modifier.
* **Valeur** : réglage donné à une propriété.
* **Déclaration** : propriété associée à une valeur.
* **Règle CSS** : ensemble formé par un sé
