---
title: "Tutoriel de Synthèse"
layout: tuto
slug: "tutoriel-synthese"
permalink: /tutos/:slug/compact
tuto_id: "T.122.117"
type: "classique"
version: "compact"
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

Combiner toutes les notions HTML apprises pour monter une page web complète (structuration, médias, textes).

## 2. Prérequis

* Avoir suivi les tutoriels précédents du module.

## Partie 1 — Pratique (Synthèse)

Il n'y a pas de nouvelle théorie ici. L'objectif est de s'entraîner à construire une arborescence complète.

### 1.1. Créer le fichier

Créez `page-detail.html` et collez les données de départ.

### 1.2. Intégrer la totalité du code

Copiez ce bloc HTML à l'intérieur de la balise `<body>` :

```html
<body>
    <article>
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

        <figure class="article-cover">
            <img src="images/article-cover.png" alt="Écran montrant du code informatique">
        </figure>

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

### 1.3. Tester la page

Enregistrez et ouvrez dans votre navigateur. Le fichier CSS fourni va mettre en forme automatiquement votre structure HTML propre.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat de la page complète">
</iframe>

## 2. Bilan

**Vous savez maintenant :** utiliser les balises HTML en synergie pour construire un composant complet.
