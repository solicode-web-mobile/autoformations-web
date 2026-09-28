---
title: "Conteneurs et listes HTML"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.114"
type: "classique"
version: "compact"
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

Regrouper les éléments d'une page avec des conteneurs (`article`, `section`) et créer une liste à puces (`ul`, `li`).

## 2. Prérequis

* Connaître la structure de base et les balises textes.

## Partie 1 — Théorie

L'organisation des pages web repose sur des conteneurs :
- `<article>`, `<section>`, `<main>`, `<header>` : pour diviser les grandes zones logiques de la page.
- `<div>` (grand bloc) et `<span>` (petit texte) : conteneurs génériques, utilisés avec l'attribut `class` pour les nommer.
- `<ul>` : liste non ordonnée (à puces), contenant des éléments `<li>`.

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez `tuto-4-html.html` et collez les données de départ.

### 2.2. Ajouter le code complet

Complétez la balise `<body>` pour obtenir ce résultat :

```html
<body>
    <article>
        <header class="article-header">
            <span class="article-category">Développement</span>
            <h2>Le rôle du développeur</h2>
        </header>

        <main>
            <section class="article-body">
                <p>Le développeur crée des applications.</p>
                <ul class="article-list">
                    <li>Analyser le besoin</li>
                    <li>Réaliser l'application</li>
                    <li>Vérifier l'application</li>
                    <li>Déployer l'application</li>
                </ul>
            </section>
        </main>
    </article>
</body>
```

### 2.3. Tester la page

Enregistrez et ouvrez dans votre navigateur.

**Résultat attendu :**
La liste à puces apparaît avec ses tirets, et tout le code est soigneusement encadré par ses conteneurs.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-4/tuto-4-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 4">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser les listes (`<ul>`, `<li>`), les conteneurs (`<article>`, `<section>`), et identifier les balises par des classes.
