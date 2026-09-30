---
title: "Le cœur de la page"
layout: tuto
slug: "le-coeur-de-la-page"
permalink: /tutos/:slug/
tuto_id: "T.122.122"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 2
simplified: true
data_html: ""
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

- Utiliser la balise `main` pour délimiter le contenu principal.
- Utiliser la balise `section` pour découper la page en grandes zones thématiques.

## 2. Prérequis

- Avoir sémantisé l'en-tête et le pied de page au tutoriel précédent.

## Données de départ

Copiez et collez le code suivant dans votre éditeur pour commencer :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel - Accueil</title>
</head>
<body>
    <!-- EN-TÊTE DU SITE -->
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <div class="banniere-accueil">
        <h1>
            Mon Blog Personnel :<br>
            <span>Développer &amp; Partager</span>
        </h1>
        <p>
            Découvrez mes derniers articles sur le développement web,
            l'architecture logicielle et les bonnes pratiques
            d'intégration UI/UX.
        </p>
        <div class="actions-banniere">
            <a href="#articles" class="bouton-principal">Lire les articles</a>
            <a href="public-apropos.html" class="bouton-secondaire">À propos de moi</a>
        </div>
    </div>

    <div class="section-articles">
        <div class="conteneur-articles">

            <div class="filtre-categories">
                <h2>Explorer par thème</h2>
                <div class="liste-filtres">
                    <a href="public-index.html" class="pilule-filtre actif">Tous les articles</a>
                    <a href="public-categorie.html" class="pilule-filtre">Développement</a>
                    <a href="public-categorie.html" class="pilule-filtre">Design UI/UX</a>
                    <a href="public-categorie.html" class="pilule-filtre">Productivité</a>
                    <a href="public-categorie.html" class="pilule-filtre">Management</a>
                </div>
            </div>

            <div class="entete-liste-articles">
                <div>
                    <h2>Dernières publications</h2>
                    <p>Les articles les plus récents de la communauté.</p>
                </div>
                <a href="public-categorie.html" class="lien-voir-tout">Explorer tout</a>
            </div>

            <div class="grille-articles">
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Code source affiché sur un écran">
                    </a>
                    <span class="etiquette-categorie bleu">Développement</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">Comment bien débuter avec Tailwind CSS en 2026 ?</a></h3>
                        <p>Découvrez les concepts fondamentaux de Tailwind CSS et pourquoi cette approche utilitaire est devenue le standard de l'industrie.</p>
                        <div class="carte-meta">
                            <span>14 Fév 2026</span>
                            <span>5 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PIED DE PAGE -->
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>
</body>
</html>
```

L'en-tête et le pied de page sont désormais dans des balises `header` et `footer`. Il nous reste à gérer tout ce qui se trouve entre les deux, qui utilise encore de simples `<div>`.

## Partie 1 — Théorie

### 1.1. Le contenu principal (`main`)

La balise **`<main>`** indique au navigateur et aux moteurs de recherche où se trouve le contenu principal de la page. 
*Règle : Il ne doit y avoir qu'un seul `<main>` par page, placé entre l'en-tête et le pied de page.*

### 1.2. Les sections thématiques (`section`)

À l'intérieur de ce contenu principal, nous avons plusieurs grandes zones logiques (l'accueil, les articles, etc.). On utilise la balise **`<section>`** pour délimiter ces blocs.

**Structure idéale :**

```html
<header>...</header>

<main>
    <section class="banniere">
        <!-- Message de bienvenue -->
    </section>

    <section class="articles">
        <!-- Liste des articles -->
    </section>
</main>

<footer>...</footer>
```

## Partie 2 — Pratique

### 2.1. Englober le cœur de la page

1. Juste en dessous de la fermeture de l'en-tête (`</header>`), ouvrez une balise `<main>`.
2. Juste avant l'ouverture du pied de page (`<footer class="pied-de-page">`), fermez cette balise : `</main>`.

Tout le contenu central est maintenant officiellement le contenu principal de votre site.

### 2.2. Créer des sections thématiques

Transformons maintenant les `<div>` majeures en `<section>`. Dans votre code :

1. Remplacez `<div class="banniere-accueil">` (et sa fermeture) par `<section class="banniere-accueil">`.
2. Remplacez `<div class="section-articles">` (et sa fermeture) par `<section class="section-articles">`.
3. À l'intérieur des articles, repérez `<div class="filtre-categories">` et transformez-la également en `<section class="filtre-categories">` (et sa fermeture).

### 2.3. Résultat attendu

L'affichage ne change toujours pas (c'est normal, c'est de la sémantique !), mais votre code est prêt à être compris par tous les robots et lecteurs d'écran.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat attendu complet</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/html/T.122.122.html' | relative_url }}"
    height="320"
    title="Résultat attendu">
</iframe>

## Bilan

Votre page HTML respecte désormais la majorité des bonnes pratiques de découpage sémantique !
