---
title: "Informations et textes HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.113"
type: "classique"
version: "compact"
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

Enrichir un document HTML avec des informations d'en-tête et des balises de structuration de texte.

## 2. Prérequis

* Connaître les balises `<html>`, `<head>`, `<body>`, et `<p>`.

## Partie 1 — Théorie

Voici un résumé des balises essentielles :
* `<meta charset="UTF-8">` (dans le head) : affiche les accents.
* `<title>` (dans le head) : nomme l'onglet du navigateur.
* `<h1>` à `<h6>` : titres, du plus au moins important.
* `<strong>` : mot important (gras).
* `<time datetime="...">` : date et heure.
* `<blockquote>` et `<cite>` : citation et sa source.
* `<br>` et `<hr>` : retour à la ligne et trait de séparation (sans balise fermante).

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez `tuto-3-html.html` et collez-y les données de départ.

### 2.2. Ajouter le contenu complet

Complétez votre fichier pour qu'il ressemble exactement à cela :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Le métier de développeur</title>
</head>
<body>
    <h1>Le métier de développeur et ses principales missions</h1>
    <p>
        Publié le <time datetime="2026-02-14">14 Février 2026</time>
    </p>
    <p>
        Le <strong>développeur</strong> crée des applications.
        Il transforme un besoin en solution informatique.
    </p>
    <h2>Le rôle du développeur</h2>
    <p>
        La première mission est d'analyser le besoin.
        Le développeur cherche les fonctionnalités nécessaires.
    </p>
    <h3>Réaliser l'application</h3>
    <p>
        Le développeur écrit le code de l'application.<br>
        Il organise son travail et crée les fonctionnalités demandées.
    </p>
    <blockquote>
        <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript.</p>
        <cite>— Métier de développeur</cite>
    </blockquote>
    <hr>
</body>
</html>
```

### 2.3. Tester la page

Enregistrez et ouvrez le fichier dans le navigateur.

**Résultat attendu :**
La page est correctement structurée avec des titres, des citations et des mises en valeur textuelles.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-3/tuto-3-html.html' | relative_url}}"
    height="600"
    title="Résultat du tutoriel 3">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser les balises sémantiques pour organiser vos paragraphes, citations, et titres.
