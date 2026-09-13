---
title: "Projet de Synthèse CSS"
layout: tuto
slug: "tutoriel-synthese-css"
permalink: /tutos/:slug/
tuto_id: "T.122.21.10"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 10
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Métier de développeur - Les principales missions</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <article>
            <header class="article-header">
                <span class="article-category">Développement</span>
                <h1>Le métier de développeur et ses principales missions</h1>
                <div class="article-meta">
                    <div class="article-author">
                        <img src="images/author.jpg" alt="Portrait d'un développeur">
                        <div>
                            <strong>Madani Ali</strong>
                            <span>Auteur du blog</span>
                        </div>
                    </div>
                    <time datetime="2026-02-14">14 Février 2026</time>
                    <span>5 min de lecture</span>
                </div>
            </header>
            <figure class="article-cover">
                <img src="images/article-cover.png" alt="Écran montrant du code informatique">
            </figure>
            <main class="article-main">
                <section class="article-body">
                    <h2>Le rôle du développeur</h2>
                    <p>Le développeur crée des applications. Il transforme un besoin en solution informatique. Son travail se fait en plusieurs étapes. Il doit bien comprendre le projet.</p>
                    <p>La première mission est d'analyser le besoin. Le développeur cherche les fonctionnalités nécessaires. Il étudie les informations à utiliser. Il peut aussi analyser une base de données.</p>
                    
                    <h3>Réaliser l'application</h3>
                    <figure class="article-figure">
                        <img src="images/article-example.png" alt="Développeur écrivant du code">
                        <figcaption>Le développeur écrit le code de l'application.</figcaption>
                    </figure>
                    <blockquote class="article-blockquote">
                        <p>Le développeur réalise l'application à partir du besoin. Il utilise des technologies comme HTML, CSS et JavaScript. Il organise son code et crée les fonctionnalités demandées.</p>
                        <cite>— Métier de développeur</cite>
                    </blockquote>
                    <p>Après la réalisation, le développeur doit vérifier l'application. Il réalise des tests pour trouver les erreurs. Il fait aussi du débogage pour corriger le code.</p>
                    
                    <ul class="article-list">
                        <li><strong>Analyser le besoin</strong> : comprendre le projet et identifier les fonctionnalités.</li>
                        <li><strong>Réaliser l'application</strong> : écrire le code et développer les fonctionnalités.</li>
                        <li><strong>Vérifier l'application</strong> : tester l'application et corriger les erreurs.</li>
                        <li><strong>Déployer l'application</strong> : mettre l'application sur un serveur pour la rendre disponible.</li>
                    </ul>
                    
                    <h3>Travailler en équipe</h3>
                    <p>Le développeur travaille aussi avec une équipe. Il échange avec les autres membres du projet. Il partage son code et ses informations. Il participe aux différentes étapes du projet. La collaboration est importante pour réussir le projet.</p>
                </section>
            </main>
        </article>
    </body>
    </html>
data_css: ""
data_js: ""
data_php: ""
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

Mettre en pratique toutes les notions CSS étudiées pour finaliser la page de détail d'un article de blog. 

À la fin de ce tutoriel de synthèse, vous obtiendrez la version finale de la page stylisée.

## 2. Prérequis

* Avoir suivi tous les tutoriels CSS précédents (Tuto 1 à Tuto 9).
* Comprendre le fonctionnement des sélecteurs, dimensions, espacements, et affichages.

## 3. Données de départ

Le fichier HTML complet de la page de détail vous est fourni. Votre objectif est de construire le fichier `style.css` de A à Z.

### HTML

Créez un fichier `page-detail-v1.html` et ajoutez le code de base du tutoriel.

## Partie 1 — Pratique de Synthèse

Nous allons construire la feuille de style étape par étape. Créez un fichier `css/style.css` (et les dossiers correspondants si nécessaire).

### Étape 1 — Styles globaux et images

Ajoutons d'abord des styles globaux au corps de la page (`body`) pour la police, le fond et la hauteur de ligne. Nous assurons aussi que toutes les images s'affichent en bloc pour faciliter leur manipulation et qu'elles ne dépassent jamais la largeur de l'écran.

```css
/* =========================================================
   GLOBAL
========================================================= */

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
```

### Étape 2 — L'en-tête de l'article

L'en-tête de l'article (`.article-header`) doit être centré. Nous stylisons également la catégorie pour qu'elle ressemble à un badge avec des bordures arrondies.

```css
/* =========================================================
   PAGE DÉTAIL D'ARTICLE
========================================================= */

.article-header {
    padding: 96px 24px 64px;
    background: #f9fafb;
    text-align: center;
}

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

.article-header h1 {
    margin: 0 auto;
    color: #111827;
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}
```

### Étape 3 — L'auteur de l'article

Nous transformons la photo de l'auteur en un petit cercle (grâce à `border-radius: 50%`) et ajustons les textes.

```css
.article-author img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
}

.article-author span {
    color: #9ca3af;
    font-size: 12px;
}
```

### Étape 4 — L'image de couverture

L'image principale ne doit pas déborder et doit couvrir sa zone avec élégance grâce à `object-fit: cover`.

```css
.article-cover {
    height: 250px;
    margin: 0;
}

.article-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Étape 5 — Le corps de l'article

Le texte de l'article sera contenu dans un bloc blanc (`.article-body`) avec des coins fortement arrondis, remonté par-dessus l'image de couverture grâce à une marge négative (`margin-top: -100px`).

```css
.article-main {
    max-width: 920px;
    margin: -100px auto 80px;
    padding: 0 24px;
}

.article-body {
    padding: 110px 80px;
    color: #1f2937;
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
    font-size: 16px;
}
```

### Étape 6 — Les titres internes et le texte

Nous changeons la police des sous-titres (`<h2>`, `<h3>`), et ajoutons des espacements aux paragraphes et à la liste.

```css
/* =========================================================
   TITRES ET CONTENU
========================================================= */

.article-body h2,
.article-body h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}

.article-body h2 {
    margin: 0 0 24px;
    font-size: 32px;
}

.article-body h3 {
    margin: 48px 0 20px;
    font-size: 22px;
}

.article-body p {
    margin: 0 0 24px;
}

.article-body ul {
    margin: 0 0 24px;
    padding-left: 24px;
}

.article-body li {
    margin-bottom: 12px;
}

.article-body strong {
    color: #111827;
}
```

### Étape 7 — Les images internes et citations

Enfin, nous finalisons les images à l'intérieur du texte et la citation (mise en valeur avec un fond et une bordure colorée à gauche).

```css
/* =========================================================
   IMAGE INTERNE
========================================================= */

.article-figure {
    margin: 32px 0;
}

.article-figure img {
    width: 100%;
    border-radius: 16px;
}

.article-figure figcaption {
    margin-top: 10px;
    color: #6b7280;
    font-size: 13px;
    text-align: center;
}

/* =========================================================
   CITATION
========================================================= */

.article-blockquote {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid #2673e8;
    border-radius: 0 12px 12px 0;
}

.article-blockquote p {
    margin: 0;
    font-style: italic;
}

.article-blockquote cite {
    display: block;
    margin-top: 12px;
    color: #6b7280;
    font-size: 13px;
    font-style: normal;
}
```

## Partie 2 — Résultat Final

Enregistrez le fichier `style.css` et rafraîchissez la page HTML. Vous devriez obtenir une belle page d'article de blog avec une couverture, une carte de texte remontée, et des éléments formatés proprement.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-10/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat final de la Synthèse">
</iframe>

Félicitations, vous avez maîtrisé les bases du langage CSS !
