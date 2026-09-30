---
title: "La zone principale et le pied de page"
layout: tuto
slug: "la-zone-principale-et-le-pied-de-page"
permalink: /tutos/:slug/
tuto_id: "T.122.122"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 2
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog Personnel - Accueil</title>

      <link rel="stylesheet" href="css/global.css">
      <link rel="stylesheet" href="css/public-index.css">
  </head>

  <body>

      <header class="site-header">

          <nav class="navbar">

              <a href="public-index.html" class="brand">
                  <span class="brand-dark">Mon</span>
                  <span class="brand-primary">Blog.</span>
              </a>

              <ul class="nav-links">
                  <li>
                      <a href="public-index.html">Accueil</a>
                  </li>

                  <li>
                      <a href="public-categorie.html">Catégories</a>
                  </li>

                  <li>
                      <a href="public-apropos.html">À propos</a>
                  </li>
              </ul>

              <a href="admin-login.html" class="button">
                  Espace Admin
              </a>

          </nav>

      </header>

      <div class="page-content">

          <div class="hero">

              <h1>
                  Mon Blog Personnel :
                  <br>
                  <span>Développer &amp; Partager</span>
              </h1>

              <p>
                  Découvrez mes derniers articles sur le développement web,
                  l'architecture logicielle et les bonnes pratiques
                  d'intégration UI/UX.
              </p>

              <div class="hero-actions">

                  <a href="#articles"
                     class="hero-button hero-button-primary">
                      Lire les articles
                  </a>

                  <a href="public-apropos.html"
                     class="hero-button hero-button-secondary">
                      À propos de moi
                  </a>

              </div>

          </div>

          <div id="articles" class="articles-section">

              <div class="articles-container">

                  <div class="category-filter">

                      <h2>Explorer par thème</h2>

                      <div class="category-list">

                          <a href="public-index.html"
                             class="category-pill active">
                              Tous les articles
                          </a>

                          <a href="public-categorie.html"
                             class="category-pill">
                              Développement
                          </a>

                          <a href="public-categorie.html"
                             class="category-pill">
                              Design UI/UX
                          </a>

                          <a href="public-categorie.html"
                             class="category-pill">
                              Productivité
                          </a>

                          <a href="public-categorie.html"
                             class="category-pill">
                              Management
                          </a>

                      </div>

                  </div>

                  <div class="articles-header">

                      <div>

                          <h2>Dernières publications</h2>

                          <p>
                              Les articles les plus récents de la communauté.
                          </p>

                      </div>

                      <a href="public-categorie.html"
                         class="articles-more">
                          Explorer tout
                      </a>

                  </div>

                  <div class="articles-grid">

                      <div class="article-card">

                          <a href="public-article.html"
                             class="article-image">

                              <img
                                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                                  alt="Code source affiché sur un écran">

                          </a>

                          <span class="article-category blue">
                              Développement
                          </span>

                          <div class="article-content">

                              <h3>
                                  <a href="public-article.html">
                                      Comment bien débuter avec Tailwind CSS en 2026 ?
                                  </a>
                              </h3>

                              <p>
                                  Découvrez les concepts fondamentaux de Tailwind CSS
                                  et pourquoi cette approche utilitaire est devenue
                                  le standard de l'industrie pour les développeurs
                                  frontend modernes.
                              </p>

                              <div class="article-meta">
                                  <span>14 Fév 2026</span>
                                  <span>5 min</span>
                              </div>

                          </div>

                      </div>

                      <div class="article-card">

                          <a href="public-article.html"
                             class="article-image">

                              <img
                                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=400&fit=crop"
                                  alt="Interface utilisateur moderne">

                          </a>

                          <span class="article-category pink">
                              UI / UX
                          </span>

                          <div class="article-content">

                              <h3>
                                  <a href="public-article.html">
                                      L'importance des micro-interactions
                                  </a>
                              </h3>

                              <p>
                                  Une interface belle n'est pas suffisante.
                                  Comprendre comment animer de petites actions peut
                                  transformer l'expérience utilisateur et augmenter
                                  l'engagement.
                              </p>

                              <div class="article-meta">
                                  <span>10 Fév 2026</span>
                                  <span>3 min</span>
                              </div>

                          </div>

                      </div>

                      <div class="article-card">

                          <a href="public-article.html"
                             class="article-image">

                              <img
                                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                  alt="Équipe de développeurs en réunion">

                          </a>

                          <span class="article-category green">
                              Management
                          </span>

                          <div class="article-content">

                              <h3>
                                  <a href="public-article.html">
                                      Gérer une équipe de développeurs en Full Remote
                                  </a>
                              </h3>

                              <p>
                                  Les méthodes agiles et les rituels essentiels pour
                                  maintenir la cohésion de groupe et la productivité
                                  lorsque tous les membres sont distribués.
                              </p>

                              <div class="article-meta">
                                  <span>05 Fév 2026</span>
                                  <span>8 min</span>
                              </div>

                          </div>

                      </div>

                  </div>

              </div>

          </div>

      </div>

      <div class="site-footer">

          <div class="footer-container">

              <div class="footer-column">

                  <h2>Mon Blog</h2>

                  <p>
                      Partager des connaissances, des tutoriels
                      et des découvertes sur le développement web.
                  </p>

              </div>

              <div class="footer-column">

                  <h2>Navigation</h2>

                  <ul>

                      <li>
                          <a href="public-index.html">
                              Accueil
                          </a>
                      </li>

                      <li>
                          <a href="public-categorie.html">
                              Catégories
                          </a>
                      </li>

                      <li>
                          <a href="public-apropos.html">
                              À propos
                          </a>
                      </li>

                  </ul>

              </div>

              <div class="footer-column">

                  <h2>Contact</h2>

                  <p>
                      Retrouvez les nouveaux articles
                      chaque semaine.
                  </p>

              </div>

          </div>

          <div class="footer-bottom">

              <p>
                  &copy; 2026 Mon Blog Personnel.
              </p>

          </div>

      </div>

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

- Structurer le contenu central avec la balise sémantique `main`.
- Structurer le bas de page avec la balise sémantique `footer`.

## 2. Prérequis

- Savoir structurer l'en-tête avec `header` et `nav`.

## Données de départ

Le fichier contient déjà un en-tête (`<header>`). Le reste du code est structuré avec des `div` génériques pour la zone principale et le pied de page :

```html
<header class="site-header">
    <!-- ... -->
</header>

<div class="page-content">
    <!-- Contenu des articles -->
</div>

<div class="site-footer">
    <!-- Pied de page -->
</div>
```

## Partie 1 — Théorie

### 1.1. Les balises `<main>` et `<footer>`

Pour identifier clairement les grandes zones d'une page HTML, on utilise des balises sémantiques spécifiques à la place de simples `div` :

- **`<main>`** : Définit le contenu principal de la page. On n'utilise qu'un seul `<main>` par page, placé entre l'en-tête et le pied de page.
- **`<footer>`** : Définit le pied de page (souvent situé à la fin du document, contenant des informations comme le copyright ou les liens de navigation de bas de page).

**Structure globale sémantique d'une page HTML :**

```html
<header>
    <nav>
        <!-- En-tête et navigation principale -->
    </nav>
</header>

<main>
    <!-- Le contenu principal et important de la page -->
</main>

<footer>
    <!-- Le pied de page -->
</footer>
```

## Partie 2 — Pratique

### 2.1. Sémantiser la zone principale et le pied de page

Dans le fichier HTML de départ, remplacez les balises génériques par les balises sémantiques adaptées.

1. **La zone principale :** Remplacez la balise `<div class="page-content">` (et sa balise fermante correspondante) par `<main class="page-content">`.
2. **Le pied de page :** Remplacez la balise `<div class="site-footer">` (et sa balise fermante correspondante) par `<footer class="site-footer">`.

*(Attention à ne pas modifier le contenu à l'intérieur de ces balises).*

### 2.2. Résultat attendu

L'affichage visuel de la page reste inchangé, mais la structure du document est désormais correcte :

```html
<header class="site-header">
    <!-- ... -->
</header>

<main class="page-content">
    <!-- Contenu principal ... -->
</main>

<footer class="site-footer">
    <!-- Pied de page ... -->
</footer>
```



## Bilan

Vous savez désormais structurer les trois grandes zones sémantiques d'une page Web complète en combinant `header`, `main` et `footer`.

## Glossaire

- **`<main>`** : Zone contenant le contenu principal de la page.
- **`<footer>`** : Pied de page contenant généralement des informations de conclusion ou de navigation.