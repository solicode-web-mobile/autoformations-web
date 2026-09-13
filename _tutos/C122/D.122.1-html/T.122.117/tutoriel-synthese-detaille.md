---
title: "Tutoriel de Synthèse"
layout: tuto
slug: "tutoriel-synthese"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.117"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 7
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Métier de développeur - Les principales missions</title>
        <link rel="stylesheet" href="css/style.css">
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

Mettre en pratique toutes les connaissances acquises lors des précédents tutoriels HTML en construisant la structure complète et rigoureuse d'un article de blog. L'accent sera mis sur l'organisation sémantique du code et l'indentation.

## 2. Prérequis

* Avoir assimilé les tutoriels T.122.111 à T.122.116.
* Comprendre le rôle d'un fichier CSS (qui se charge du design, tandis que le HTML gère le fond).

## 3. Données de départ

Nous utilisons une base classique. Remarquez la balise `<link rel="stylesheet" href="css/style.css">` dans le `<head>`. Elle permet d'attacher un fichier de style. Le design de cette page a déjà été codé pour vous, votre seul objectif est de fournir le bon squelette HTML pour que le CSS puisse s'y accrocher (grâce aux classes).

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Métier de développeur - Les principales missions</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
</body>
</html>
```

## Partie 1 — Pratique

### 1.1. Préparer le fichier

Créez le fichier `page-detail.html` dans VS Code et collez-y les données de départ.

### 1.2. Construire l'en-tête (Header)

Dans `<body>`, nous ouvrons la balise englobante `<article>`.
Puis, nous construisons un `<header>` complexe : il contiendra une catégorie (span), le grand titre (h1), et une div `.article-meta` servant à regrouper les informations de l'auteur, la date et le temps de lecture.

```html
<body>
    <article>
        
        <!-- Le Header -->
        <header class="article-header">
            <span class="article-category">Développement</span>
            <h1>Le métier de développeur et ses principales missions</h1>
            
            <div class="article-meta">
                <div class="article-author">
                    <img src="images/author.jpg" alt="Portrait de l'auteur">
                    <div>
                        <strong>Madani Ali</strong>
                        <span>Auteur du blog</span>
                    </div>
                </div>
                <time datetime="2026-02-14">14 Février 2026</time>
                <span>5 min de lecture</span>
            </div>
        </header>
```

### 1.3. L'image de couverture

Entre le `<header>` et le `<main>`, on place généralement la grande image illustrative du sujet.

```html
        <!-- L'image de couverture (Hero image) -->
        <figure class="article-cover">
            <img src="images/article-cover.png" alt="Écran montrant du code informatique">
        </figure>
```

### 1.4. Le cœur de l'article

Ouvrez la balise `<main>` (la zone principale) puis une `<section>`. Vous y ajouterez les paragraphes, les sous-titres (`<h2>`, `<h3>`), ainsi qu'une figure et une citation (`<blockquote>`).

```html
        <!-- Le contenu texte -->
        <main class="article-main">
            <section class="article-body">
                
                <h2>Le rôle du développeur</h2>
                <p>Le développeur crée des applications. Il transforme un besoin en solution informatique.</p>
                
                <h3>Réaliser l'application</h3>
                <figure class="article-figure">
                    <img src="images/article-example.png" alt="Développeur écrivant du code">
                    <figcaption>Le développeur écrit le code de l'application.</figcaption>
                </figure>
                
                <blockquote class="article-blockquote">
                    <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript.</p>
                    <cite>— Métier de développeur</cite>
                </blockquote>
```

### 1.5. La liste récapitulative et conclusion

Terminez la section avec une liste à puces (`<ul>`), dont chaque point met en gras le nom de la tâche.
Fermez ensuite toutes les balises. L'indentation doit vous permettre de vérifier que chaque balise ouverte a bien été refermée.

```html
                <ul class="article-list">
                    <li><strong>Analyser le besoin</strong> : comprendre le projet.</li>
                    <li><strong>Réaliser l'application</strong> : écrire le code.</li>
                    <li><strong>Vérifier l'application</strong> : tester et corriger.</li>
                    <li><strong>Déployer l'application</strong> : mettre en ligne sur un serveur.</li>
                </ul>

                <h3>Travailler en équipe</h3>
                <p>Le développeur travaille aussi avec une équipe. La collaboration est importante pour réussir le projet.</p>
                
            </section>
        </main>
        
    </article>
</body>
```

### 1.6. Tester la page

Enregistrez et ouvrez `page-detail.html`. Observez le résultat : le HTML que vous avez écrit, rigoureusement sémantique et parsemé des bonnes `class`, a été capté par le fichier CSS pré-existant pour générer un rendu professionnel.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat de la page complète">
</iframe>

## 2. Bilan

**Vous avez réalisé :** l'intégration complète d'une maquette d'article de blog, étape par étape.

**Vous savez maintenant :** utiliser en synergie toutes les notions de base du langage HTML. L'arborescence, la sémantique et les attributs n'ont plus de secret pour vous. Vous êtes prêt pour la suite !
