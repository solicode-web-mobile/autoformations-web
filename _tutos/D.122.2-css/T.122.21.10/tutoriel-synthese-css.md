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

Combiner toutes les compétences CSS acquises (sélecteurs, couleurs, typographie, affichage, espacements) pour construire de zéro la feuille de style d'une véritable page d'article de blog.

## 2. Prérequis

* Avoir assimilé les tutoriels CSS précédents.

## 3. Données de départ

Le fichier HTML complet vous est fourni. Il représente la structure sémantique parfaite d'un article de blog.

**Code HTML de départ :** *(Voir le code HTML dans votre fichier `page-detail-v1.html`)*

Votre mission est de créer le fichier `css/style.css` pour donner vie à cette page.

## Partie 1 — Pratique de Synthèse

### 1.1. Préparation

Créez le fichier `page-detail-v1.html` avec le code fourni.
Créez un dossier `css` contenant un fichier `style.css`.
*(Assurez-vous d'avoir les images dans un dossier `images` si vous travaillez en local, sinon le design s'appliquera aux textes alternatifs).*

### 1.2. Réinitialisation et base de la page

On commence toujours par définir le fond de la page et la typographie globale.
Dans `css/style.css` :

```css
body {
    margin: 0;
    color: #1f2937;
    background: #f9fafb; /* Fond gris très clair */
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

/* On force les images à ne jamais déborder de l'écran */
img {
    display: block;
    max-width: 100%;
}
```

### 1.3. L'en-tête (Header) de l'article

L'en-tête doit être centré. On donne au titre principal une police à empattements (serif) pour le côté "journal". Le petit badge de catégorie est converti en bloc-en-ligne.

```css
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
    border-radius: 20px; /* Badge en forme de pilule */
}

.article-header h1 {
    margin: 0 auto;
    color: #111827;
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}
```

### 1.4. L'auteur et l'image de couverture

Transformons la photo de l'auteur en cercle parfait (`border-radius: 50%`).
Pour l'image de couverture, on crée une bannière (`cover`) de 250px de haut.

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

/* Bannière de l'article */
.article-cover {
    height: 250px;
    margin: 0;
}

.article-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Pas de déformation ! */
}
```

### 1.5. Le "Card" principal et la marge négative

C'est ici qu'on crée l'effet magique : le corps de l'article sera un bloc blanc qui va remonter par-dessus l'image de couverture.

```css
.article-main {
    max-width: 920px;
    margin: auto; /* Centrage */
    margin-top: -100px; /* Remonte sur l'image de couverture */
    margin-bottom: 80px;
    padding: 0 24px;
}

.article-body {
    padding: 110px 80px;
    color: #1f2937;
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px; /* Bords très arrondis */
    font-size: 16px;
}
```

### 1.6. Mise en forme typographique interne

Aérons les titres, paragraphes et listes à l'intérieur de notre bloc principal.

```css
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
```

### 1.7. Les éléments visuels (Figures et Citations)

Pour finir, on stylise l'image illustrative du texte, et on transforme la citation `<blockquote>` en un bel encart bleu. Le `<cite>` qui est inline par défaut est forcé en bloc.

```css
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
    display: block; /* Oblige le nom de l'auteur à passer à la ligne */
    margin-top: 12px;
    color: #6b7280;
    font-size: 13px;
    font-style: normal;
}
```

### 1.8. Tester la page

Enregistrez le fichier CSS. Ouvrez le fichier HTML dans le navigateur.

**Résultat attendu :**
Vous obtenez une magnifique page d'article. L'en-tête est clair, l'image de couverture prend toute la largeur, et le texte se lit parfaitement sur une "carte" blanche aux coins très arrondis qui flotte par-dessus l'image de fond. 

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-10/page-detail-v1.html' | relative_url}}"
    height="700"
    title="Résultat de la Synthèse CSS">
</iframe>

## 4. Bilan

**Félicitations ! Vous avez réalisé :** une page web complète digne d'un projet professionnel en combinant toutes les briques du CSS.

**Vous savez maintenant :** 
- Structurer une feuille de style complète de haut en bas (du `body` jusqu'aux éléments enfants).
- Créer des compositions complexes en alliant le Box Model (marges, paddings) et la Typographie.
