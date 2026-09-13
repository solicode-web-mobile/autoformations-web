---
title: "Informations et textes HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.113"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 3
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
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

Ajouter des informations techniques au document HTML et structurer son contenu avec différentes balises de texte (titres, dates, citations, texte en gras).

## 2. Prérequis

* Connaître la structure `<html>`, `<head>` et `<body>`.
* Savoir ce qu'est une balise et un attribut.

## 3. Données de départ

Le fichier HTML avec lequel nous allons travailler contient la structure minimale vide :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'encodage et le titre (dans le `<head>`)

Pour que les accents s'affichent correctement, on ajoute `<meta charset="UTF-8">` dans le `<head>`.
Le `<title>` définit le nom de l'onglet.

```html
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
</head>
```

### 1.2. Les titres (dans le `<body>`)

Les titres organisent le document par ordre d'importance, de `<h1>` (le plus important) à `<h6>`.

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
```

### 1.3. Mise en forme du texte

Plusieurs balises permettent de donner du sens et de formater le texte dans le `<body>` :
- `<strong>` : indique qu'un texte est très important (souvent affiché en gras).
- `<time>` : représente une date ou une heure. L'attribut `datetime` permet de préciser le format technique.
- `<blockquote>` : crée un bloc de citation.
- `<cite>` : indique la source de la citation.
- `<br>` : crée un retour à la ligne simple (balise orpheline).
- `<hr>` : crée une ligne de séparation horizontale (balise orpheline).

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Dans VS Code, créez un fichier `tuto-3-html.html` et collez-y les données de départ.

### 2.2. Configurer le `<head>`

Dans la balise `<head>`, ajoutez l'encodage et le titre :

```html
<head>
    <meta charset="UTF-8">
    <title>Le métier de développeur</title>
</head>
```

### 2.3. Remplir le `<body>`

Dans la balise `<body>`, ajoutez le titre principal et la date :

```html
<h1>Le métier de développeur et ses principales missions</h1>

<p>
    Publié le <time datetime="2026-02-14">14 Février 2026</time>
</p>
```

Sous la date, ajoutez un paragraphe avec un mot en gras :

```html
<p>
    Le <strong>développeur</strong> crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

Ajoutez un sous-titre de niveau 2 et un autre paragraphe :

```html
<h2>Le rôle du développeur</h2>

<p>
    La première mission est d'analyser le besoin.
    Le développeur cherche les fonctionnalités nécessaires.
</p>
```

Ajoutez un sous-titre de niveau 3 et un retour à la ligne `<br>` au milieu du paragraphe :

```html
<h3>Réaliser l'application</h3>

<p>
    Le développeur écrit le code de l'application.<br>
    Il organise son travail et crée les fonctionnalités demandées.
</p>
```

Enfin, ajoutez une citation avec sa source, et une ligne de séparation :

```html
<blockquote>
    <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript.</p>
    <cite>— Métier de développeur</cite>
</blockquote>

<hr>
```

### 2.4. Tester la page

Enregistrez le fichier et ouvrez-le dans le navigateur.

**Résultat attendu :**

La page affiche des textes de tailles différentes, des passages en gras, une citation en retrait et une ligne horizontale de séparation.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-3/tuto-3-html.html' | relative_url}}"
    height="600"
    title="Résultat du tutoriel 3">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une page riche en contenus textuels organisés.

**Vous savez maintenant :** configurer correctement le `<head>` et utiliser les balises sémantiques de texte (`h1-h6`, `strong`, `time`, `blockquote`, etc.).
