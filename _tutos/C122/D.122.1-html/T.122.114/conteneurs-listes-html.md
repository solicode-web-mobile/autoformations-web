---
title: "Conteneurs et listes HTML"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.114"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 4
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Conteneurs et listes HTML</title>
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

Apprendre à regrouper et structurer le contenu d'une page en utilisant des conteneurs (balises de regroupement) et créer des listes à puces.

## 2. Prérequis

* Connaître la structure de base du document HTML.
* Savoir utiliser les titres (`<h1>` à `<h6>`) et les paragraphes (`<p>`).
* Savoir utiliser des attributs.

## 3. Données de départ

Nous partons d'un document HTML de base structuré :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Conteneurs et listes HTML</title>
</head>
<body>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Les conteneurs génériques : `<div>` et `<span>`

Parfois, on a besoin de regrouper plusieurs éléments ensemble, ou d'isoler un mot dans un paragraphe.
- `<div>` (division) : regroupe un grand bloc de code.
- `<span>` : encadre un petit bout de texte à l'intérieur d'une ligne.

### 1.2. Les conteneurs sémantiques

Pour aider les moteurs de recherche, le HTML moderne utilise des balises plus précises qu'un simple `<div>` :
* `<article>` : contient un contenu qui a du sens tout seul (ex: un article de blog).
* `<header>` : l'en-tête (le haut) de la page ou d'un article.
* `<main>` : le contenu principal.
* `<section>` : une section du document.

### 1.3. L’attribut `class`

Pour donner un "nom" ou une étiquette à n'importe quelle balise (pour pouvoir la styliser plus tard en CSS), on utilise l'attribut `class`.

```html
<header class="article-header">
```
Ici, l'en-tête est nommé "article-header".

### 1.4. Les listes à puces

Pour faire une liste :
* `<ul>` (Unordered List) déclare le début de la liste.
* `<li>` (List Item) déclare chaque élément à l'intérieur de la liste.

```html
<ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
</ul>
```

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Dans VS Code, créez un fichier `tuto-4-html.html` et collez-y les données de départ.

### 2.2. Ajouter le conteneur principal et son en-tête

Dans `<body>`, ajoutez un conteneur `<article>` qui va tout englober, et son en-tête `<header>` :

```html
<article>
    <header class="article-header">
        <span class="article-category">Développement</span>
        <h2>Le rôle du développeur</h2>
    </header>
</article>
```

### 2.3. Ajouter le contenu principal

À la suite de l'en-tête (toujours à l'intérieur de `<article>`), ajoutez la balise `<main>` et une `<section>` :

```html
    <main>
        <section class="article-body">
            <p>Le développeur crée des applications.</p>
        </section>
    </main>
```

### 2.4. Ajouter une liste à puces

À l'intérieur de la `<section>`, juste après le paragraphe, ajoutez la liste des rôles :

```html
            <ul class="article-list">
                <li>Analyser le besoin</li>
                <li>Réaliser l'application</li>
                <li>Vérifier l'application</li>
                <li>Déployer l'application</li>
            </ul>
```

### 2.5. Tester la page

Enregistrez et ouvrez `tuto-4-html.html` dans le navigateur.

**Résultat attendu :**

La page affiche un titre, une petite balise de catégorie (span), un paragraphe et une liste à puces. L'organisation du code est maintenant propre et prête pour être mise en page plus tard (avec du CSS).

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-4/tuto-4-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 4">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une page organisée avec des conteneurs, des classes et une liste à puces.

**Vous savez maintenant :** utiliser `<div>` et `<span>`, structurer un document avec `<article>`, `<header>`, `<main>` et `<section>`, identifier des éléments avec l'attribut `class`, et construire des listes avec `<ul>` et `<li>`.
