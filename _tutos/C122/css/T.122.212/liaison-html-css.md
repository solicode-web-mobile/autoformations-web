---
title: "Liaison HTML–CSS"
layout: tuto
slug: "liaison-html-css"
permalink: /tutos/:slug/
tuto_id: "T.122.212"
version: "normal"
ua: "UA.122.21"
nav_order: 2
---

## 1. Objectif

Apprendre à utiliser une feuille CSS externe avec une page HTML.

À la fin du tutoriel, le fichier `style.css` est relié à `index.html` et les règles CSS sont appliquées à la page.

## 2. Prérequis

* Avoir réalisé `T.122.211`.
* Avoir les fichiers `index.html` et `css/style.css`.
* Connaître la structure `<head>` d’un document HTML.

# Partie 1 — Théorie

## 1.1. CSS inline

Le CSS inline est écrit directement dans l’élément HTML avec l’attribut `style`.

**Exemple :**

```html
<p style="color: #1f2937;">
    Le développeur crée des applications.
</p>
```

Le style est directement placé dans le HTML.

## 1.2. CSS interne

Le CSS interne est écrit dans un élément `<style>` placé dans `<head>`.

**Exemple :**

```html
<head>
    <style>
        p {
            color: #1f2937;
        }
    </style>
</head>
```

Le CSS reste dans le fichier HTML.

## 1.3. CSS externe

Le CSS externe est placé dans un fichier séparé.

Dans notre projet, le fichier est :

```text
css/style.css
```

Cette méthode permet de séparer le HTML et le CSS.

## 1.4. L’élément `<link>`

`<link>` permet de relier une ressource externe au document HTML.

Pour relier une feuille CSS :

```html
<link rel="stylesheet" href="css/style.css">
```

`rel="stylesheet"` indique qu’il s’agit d’une feuille de style.

`href="css/style.css"` indique le chemin du fichier CSS.

## 1.5. À retenir

* Le **CSS inline** est écrit dans l’élément HTML.
* Le **CSS interne** est écrit dans `<style>`.
* Le **CSS externe** est écrit dans un fichier séparé.
* `<link>` permet de relier le fichier CSS à la page HTML.
* Le CSS externe permet de séparer la structure HTML et la mise en forme CSS.

# Partie 2 — Pratique

## 2.1. Vérifier les fichiers

### Étape 1 — Ouvrir le projet

Ouvrez le projet du Blog personnel.

Vérifiez que les fichiers suivants existent :

```text
blog-personnel/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── author.jpg
    ├── article-cover.png
    └── article-example.png
```

Le fichier `style.css` doit contenir :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

## 2.2. Relier la feuille CSS

### Étape 2 — Ouvrir `index.html`

Ouvrez `index.html`.

Dans `<head>`, vous avez déjà :

```html
<head>
    <meta charset="UTF-8">

    <title>
        Métier de développeur - Les principales missions
    </title>
</head>
```

### Étape 3 — Ajouter `<link>`

Sous `<title>`, ajoutez :

```html
<link rel="stylesheet" href="css/style.css">
```

Le `<head>` devient :

```html
<head>
    <meta charset="UTF-8">

    <title>
        Métier de développeur - Les principales missions
    </title>

    <link rel="stylesheet" href="css/style.css">
</head>
```

## 2.3. Vérifier la liaison

### Étape 4 — Enregistrer les fichiers

Enregistrez :

```text
index.html
css/style.css
```

### Étape 5 — Ouvrir la page

Ouvrez `index.html` dans le navigateur.

Observez le fond de la page et la couleur du texte.

La règle :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

est maintenant appliquée à la page.

## 2.4. Tester la liaison

### Étape 6 — Modifier une valeur

Dans `style.css`, modifiez temporairement :

```css
body {
    color: #111827;
    background: #f0f6ff;
}
```

Enregistrez le fichier et rechargez la page.

La couleur de fond change.

### Étape 7 — Restaurer la valeur

Remettez le code :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

Enregistrez le fichier.

**Résultat attendu :**

`index.html` utilise maintenant le fichier externe :

```html
<link rel="stylesheet" href="css/style.css">
```

et `style.css` contient :

```css
body {
    color: #1f2937;
    background: #f9fafb;
}
```

La liaison HTML–CSS fonctionne.

# 3. Bilan

**Vous avez réalisé :** la liaison entre la page HTML et la feuille CSS externe.

**Vous savez maintenant :** distinguer le CSS inline, interne et externe, et utiliser `<link>` pour charger une feuille CSS externe.

Dans le prochain tutoriel, vous allez apprendre à **cibler les éléments HTML avec les sélecteurs CSS**.

# 4. Glossaire

* **CSS inline** : CSS écrit directement dans un élément HTML.
* **CSS interne** : CSS écrit dans `<style>` dans le document HTML.
* **CSS externe** : CSS écrit dans un fichier séparé.
* **Feuille de style** : fichier qui contient des règles CSS.
* **`<link>`** : élément HTML utilisé pour relier une ressource externe.
