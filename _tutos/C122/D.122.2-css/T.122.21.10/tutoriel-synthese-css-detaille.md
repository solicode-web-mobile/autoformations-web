---
title: "Projet de Synthèse CSS"
layout: tuto
slug: "tutoriel-synthese-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.21.10"
type: "classique"
version: "detaille"
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

Ce projet est la validation de l'ensemble du module CSS. L'objectif est de structurer un fichier `style.css` complet pour un document HTML complexe et très sémantique, en respectant une méthodologie "Top-Down" (du plus global au plus précis).

## 2. Prérequis

* Maîtrise des tutoriels 1 à 9 (Sélecteurs, Typographie, Box Model, Background, Display).

## 3. Données de départ

**Code HTML de départ :** *(Fourni dans le cadre du tutoriel, voir `page-detail-v1.html`).*

## Partie 1 — Pratique de Synthèse Guidée

### 1.1. Préparation

Créez `page-detail-v1.html` et un dossier `css` contenant `style.css`.
Analysez le HTML : il utilise des balises sémantiques très précises (`<article>`, `<header>`, `<main>`, `<figure>`, `<blockquote>`). Nous allons cibler des classes spécifiques.

### 1.2. Architecture : Les styles globaux

La première règle d'une bonne feuille de style est de définir les fondations.

```css
/* =========================================================
   1. GLOBAL & RESET
========================================================= */
body {
    margin: 0; /* Enlève la marge blanche par défaut du navigateur */
    color: #1f2937;
    background: #f9fafb;
    font-family: Arial, sans-serif;
    line-height: 1.5; /* Interligne confortable pour la lecture */
}

/* Image fluide : empèche les grandes images de casser le design */
img {
    display: block;
    max-width: 100%;
}
```

### 1.3. L'en-tête (Header)

L'en-tête englobe le titre, la catégorie et les infos de l'auteur.

```css
/* =========================================================
   2. HEADER
========================================================= */
.article-header {
    padding: 96px 24px 64px; /* Grand espace en haut (96), petit sur les côtés (24), moyen en bas (64) */
    background: #f9fafb;
    text-align: center;
}

.article-category {
    display: inline-block; /* Pour pouvoir appliquer padding et margin tout en restant compact */
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

/* Avatar de l'auteur */
.article-author img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%; /* Arrondi parfait = cercle */
}

.article-author span {
    color: #9ca3af;
    font-size: 12px;
}
```

### 1.4. L'image de couverture (Hero Image)

```css
/* =========================================================
   3. BANNIÈRE
========================================================= */
.article-cover {
    height: 250px; /* Force la hauteur */
    margin: 0;
}

.article-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Recadrage intelligent sans déformation */
}
```

### 1.5. Layout du contenu principal

Nous allons utiliser la technique de la marge négative pour faire "chevaucher" le texte sur l'image de couverture.

```css
/* =========================================================
   4. LAYOUT PRINCIPAL
========================================================= */
.article-main {
    max-width: 920px;
    margin: -100px auto 80px; /* -100px en haut, auto sur les côtés (centrage), 80px en bas */
    padding: 0 24px; /* Sécurité pour les écrans de téléphone */
}

.article-body {
    padding: 110px 80px;
    color: #1f2937;
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px; /* Bords de la carte adoucis */
    font-size: 16px;
}
```

### 1.6. Mise en forme du corps de texte (Rich Text)

Il s'agit de styliser tous les éléments qui seront rédigés par l'auteur (h2, p, ul).

```css
/* =========================================================
   5. CONTENU RÉDACTIONNEL
========================================================= */
.article-body h2,
.article-body h3 {
    color: #0a2042;
    font-family: Georgia, serif; /* Le serif apporte un côté éditorial */
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

.article-body p { margin: 0 0 24px; }
.article-body ul { margin: 0 0 24px; padding-left: 24px; }
.article-body li { margin-bottom: 12px; }
.article-body strong { color: #111827; }

/* Image dans le texte */
.article-figure { margin: 32px 0; }
.article-figure img { width: 100%; border-radius: 16px; }
.article-figure figcaption { margin-top: 10px; color: #6b7280; font-size: 13px; text-align: center; }

/* Citation en exergue */
.article-blockquote {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid #2673e8; /* Ligne bleue d'emphase */
    border-radius: 0 12px 12px 0;
}

.article-blockquote p {
    margin: 0;
    font-style: italic;
}

.article-blockquote cite {
    display: block; /* Passage à la ligne forcé */
    margin-top: 12px;
    color: #6b7280;
    font-size: 13px;
    font-style: normal;
}
```

### 1.7. Validation Finale

Vérifiez que toutes les accolades sont fermées, sauvegardez `style.css` et ouvrez le fichier HTML.

**Résultat attendu :**
L'intégration est parfaite. L'enchaînement logique des sections (`header` > `cover` > `main` > `body`) se reflète visuellement grâce à l'application des concepts fondamentaux de positionnement et de typographie.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-10/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat de la Synthèse CSS">
</iframe>

## 4. Bilan Professionnel

La maîtrise du CSS permet de transformer une simple structure textuelle (le HTML) en une interface graphique percutante, tout en respectant une logique de flux (Flow) naturel. Vous avez maintenant toutes les armes pour designer des composants statiques d'interface web !
