---
title: "Navigation interne par ancres"
layout: tuto
slug: "navigation-interne-par-ancres"
permalink: /tutos/:slug/
tuto_id: "T.122.124"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 4
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>
          Mon Blog Personnel - Accueil
      </title>

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

              <a href="admin-login.html" class="button">
                  Espace Admin
              </a>

          </nav>

      </header>

      <main class="page-content">

          <section class="hero">

              <h1>

                  Mon Blog Personnel :

                  <br>

                  <span>
                      Développer &amp; Partager
                  </span>

              </h1>

              <p>

                  Découvrez mes derniers articles sur le développement web,
                  l'architecture logicielle et les bonnes pratiques
                  d'intégration UI/UX.

              </p>

              <div class="hero-actions">

                  <a
                      href="#articles"
                      class="hero-button hero-button-primary"
                  >
                      Lire les articles
                  </a>

                  <a
                      href="public-apropos.html"
                      class="hero-button hero-button-secondary"
                  >
                      À propos de moi
                  </a>

              </div>

          </section>

          <section class="articles-section">

              <div class="articles-container">

                  <section class="category-filter">

                      <h2>
                          Explorer par thème
                      </h2>

                      <div class="category-list">

                          <a
                              href="public-index.html"
                              class="category-pill active"
                          >
                              Tous les articles
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill"
                          >
                              Développement
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill"
                          >
                              Design UI/UX
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill"
                          >
                              Productivité
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill"
                          >
                              Management
                          </a>

                      </div>

                  </section>

                  <div class="articles-header">

                      <div>

                          <h2>
                              Dernières publications
                          </h2>

                          <p>
                              Les articles les plus récents de la communauté.
                          </p>

                      </div>

                      <a
                          href="public-categorie.html"
                          class="articles-more"
                      >
                          Explorer tout
                      </a>

                  </div>

                  <div class="articles-grid">

                      <div class="article-card">

                          <a
                              href="public-article.html"
                              class="article-image"
                          >

                              <img
                                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                                  alt="Code source affiché sur un écran"
                              >

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

                                  <span>
                                      14 Fév 2026
                                  </span>

                                  <span>
                                      5 min
                                  </span>

                              </div>

                          </div>

                      </div>

                      <div class="article-card">

                          <a
                              href="public-article.html"
                              class="article-image"
                          >

                              <img
                                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=400&fit=crop"
                                  alt="Interface utilisateur moderne"
                              >

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

                                  <span>
                                      10 Fév 2026
                                  </span>

                                  <span>
                                      3 min
                                  </span>

                              </div>

                          </div>

                      </div>

                      <div class="article-card">

                          <a
                              href="public-article.html"
                              class="article-image"
                          >

                              <img
                                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                  alt="Équipe de développeurs en réunion"
                              >

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

                                  <span>
                                      05 Fév 2026
                                  </span>

                                  <span>
                                      8 min
                                  </span>

                              </div>

                          </div>

                      </div>

                  </div>

              </div>

          </section>

      </main>

      <footer class="site-footer">

          <div class="footer-container">

              <div class="footer-column">

                  <h2>
                      Mon Blog
                  </h2>

                  <p>
                      Partager des connaissances, des tutoriels
                      et des découvertes sur le développement web.
                  </p>

              </div>

              <div class="footer-column">

                  <h2>
                      Navigation
                  </h2>

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

                  <h2>
                      Contact
                  </h2>

                  <p>
                      Retrouvez les nouveaux articles
                      chaque semaine.
                  </p>

              </div>

          </div>

          <div class="footer-bottom">

              <p>
                  © 2026 Mon Blog Personnel.
              </p>

          </div>

      </footer>

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

- Créer des ancres avec l'attribut `id`.
- Créer des liens internes permettant de scroller directement vers ces ancres.

## 2. Prérequis

- Savoir structurer une page HTML (`main`, `section`, `a`, `href`).

## Données de départ

Dans notre page, un bouton « Lire les articles » existe déjà dans la zone d'accueil avec un lien interne (`href="#articles"`) :

```html
<a href="#articles" class="hero-button hero-button-primary">
    Lire les articles
</a>
```

Cependant, il ne fonctionne pas car aucune section n'a encore l'identifiant correspondant (`id="articles"`).

## Partie 1 — Théorie

### 1.1. Les ancres et les liens internes

Pour naviguer à l'intérieur d'une même page, on utilise un système d'ancres :

1. **La cible (l'ancre) :** On ajoute un attribut `id` (identifiant unique) sur l'élément de destination.
2. **Le lien :** On crée un lien (`<a>`) dont l'attribut `href` commence par un `#` suivi du nom de l'identifiant.

**Exemple :**

```html
<!-- Le lien -->
<a href="#contact">Aller au formulaire de contact</a>

<!-- Beaucoup de contenu ... -->

<!-- La cible -->
<section id="contact">
    <h2>Contactez-nous</h2>
</section>
```

*(Note : Un `id` doit être strictement unique sur toute la page).*

## Partie 2 — Pratique

### 2.1. Ajouter l'identifiant à la cible

Dans votre code HTML de départ, cherchez la section qui contient les articles.

```html
<section class="articles-section">
```

Ajoutez-lui l'attribut `id="articles"`.

```html
<section id="articles" class="articles-section">
```

*(Ne modifiez pas le contenu à l'intérieur de la section).*

### 2.2. Tester le résultat

Le lien `<a href="#articles">` et la cible `<section id="articles">` sont maintenant reliés !

Dans l'aperçu de votre navigateur, cliquez sur le bouton "Lire les articles". Vous verrez que la page scrolle automatiquement jusqu'à la section des articles.

## Bilan

Vous savez désormais créer une navigation interne (ancres) pour fluidifier le parcours utilisateur sur des pages longues !

## Glossaire

- **`id`** : Identifiant unique d'un élément HTML.
- **`href="#id"`** : Cible d'un lien pointant vers un élément identifié par un `id` dans la même page.
- **Ancre** : Point précis de la page vers lequel un lien interne scrolle.