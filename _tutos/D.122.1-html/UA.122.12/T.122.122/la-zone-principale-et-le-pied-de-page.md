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

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser la balise `main` ;
- utiliser la balise `footer` ;
- identifier le contenu principal d'une page ;
- identifier le pied de page.

À la fin, la page aura une structure globale plus claire.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser des attributs HTML ;
- créer des liens ;
- créer une navigation avec `header` et `nav`.

Ces notions ont été étudiées dans les tutoriels précédents.

Vous devez également avoir réalisé le tutoriel **T.122.121 — L'en-tête et la navigation**.

## Données de départ

La page contient déjà un en-tête avec `header` et `nav`.

Le contenu placé après l'en-tête correspond au contenu principal du site.

La page contient aussi une zone située à la fin du document.

### HTML

Le début de la page est déjà structuré ainsi :

```html
<header class="site-header">

    <nav class="navbar">
        ...
    </nav>

</header>
```

Le contenu principal se trouve ensuite.

La fin de la page contient les informations du pied de page.

### CSS

Le CSS existant est conservé.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. La balise `main`

`main` représente le contenu principal de la page.

Elle contient le contenu important de la page courante.

Exemple :

```html
<main>

    <h1>Mon Blog</h1>

    <p>Découvrez mes articles.</p>

</main>
```

La balise `main` permet d'identifier clairement la zone principale.

### 1.2. La balise `footer`

`footer` représente le pied de page.

Il se trouve généralement à la fin de la page.

Il peut contenir :

- des informations sur le site ;
- des liens ;
- des informations de contact ;
- des informations de copyright.

Exemple :

```html
<footer>

    <p>Mon Blog Personnel</p>

</footer>
```

### 1.3. Organiser la page

Une page peut avoir une structure globale comme celle-ci :

```text
header
└── nav

main
└── contenu principal

footer
└── informations de fin de page
```

Chaque balise indique le rôle de la zone.

### 1.4. À retenir

- `main` contient le contenu principal.
- `footer` représente le pied de page.
- `main` se trouve entre l'en-tête et le pied de page.
- `footer` se trouve généralement à la fin du document.

## Partie 2 — Pratique

### 2.1. Transformer la zone principale

Dans le fichier HTML, recherchez :

```html
<div class="page-content">
```

Cette zone contient le contenu principal de la page.

Remplacez la balise ouvrante par :

```html
<main class="page-content">
```

Remplacez ensuite sa balise fermante correspondante :

```html
</div>
```

par :

```html
</main>
```

Ne modifiez pas le contenu situé à l'intérieur.

### 2.2. Transformer le pied de page

À la fin du document, recherchez :

```html
<div class="site-footer">
```

Cette zone contient les informations placées en bas de la page.

Remplacez la balise ouvrante par :

```html
<footer class="site-footer">
```

Remplacez ensuite sa balise fermante correspondante par :

```html
</footer>
```

Conservez le contenu du pied de page.

### 2.3. Vérifier la structure

Le document doit maintenant commencer et se terminer ainsi :

```html
<header class="site-header">

    <nav class="navbar">
        ...
    </nav>

</header>

<main class="page-content">

    ...
    
</main>

<footer class="site-footer">

    ...

</footer>
```

### 2.4. Vérifier le contenu principal

Dans `main`, conservez :

- la zone d'accueil ;
- la zone des articles ;
- les contenus déjà présents.

Vous ne devez pas modifier leur contenu.

Dans ce tutoriel, vous apprenez uniquement à identifier la zone principale avec `main`.

### 2.5. Vérifier le pied de page

Dans `footer`, conservez :

- le nom du blog ;
- les liens de navigation ;
- les informations de contact ;
- le copyright.

Vous ne devez pas modifier ces contenus.

### 2.6. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- l'en-tête est toujours visible ;
- la navigation fonctionne ;
- le contenu principal est toujours visible ;
- le pied de page est toujours visible ;
- la présentation n'est pas modifiée ;
- les liens fonctionnent.

Le changement porte sur la structure HTML.

### 2.7. Vérifier la structure finale

Vous devez obtenir cette organisation :

```html
<header>
    <nav>
        ...
    </nav>
</header>

<main>
    ...
</main>

<footer>
    ...
</footer>
```

Vous devez pouvoir expliquer le rôle de chacune des trois zones.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 2e tutoriel de la série

**Incrément :** Ajout des balises sémantiques `main` et `footer`.

**Intégration demandée :**

Utilisez les notions étudiées dans ce tutoriel pour poursuivre la structure de votre page d'accueil.

Conservez le contenu déjà réalisé dans T.122.121.

Modifiez uniquement les conteneurs qui représentent :

- le contenu principal ;
- le pied de page.

**Livrable :**

Le fichier HTML de la page d'accueil avec :

```html
<header>
    <nav>
        ...
    </nav>
</header>

<main>
    ...
</main>

<footer>
    ...
</footer>
```

**Critère de réussite :**

La page utilise correctement `main` pour le contenu principal et `footer` pour le pied de page, sans supprimer le contenu existant.

**Résultat attendu :**

Le navigateur affiche la même page visuelle, mais sa structure HTML contient maintenant `header`, `nav`, `main` et `footer`.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-122-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :**

La structure globale de la page avec un en-tête, une zone principale et un pied de page.

**Vous savez maintenant :**

- utiliser `main` ;
- utiliser `footer` ;
- identifier le contenu principal ;
- identifier le pied de page ;
- organiser les grandes zones d'une page HTML.

## Glossaire

- **`main`** : zone qui contient le contenu principal de la page.
- **`footer`** : zone située généralement à la fin de la page.
- **Contenu principal** : contenu essentiel de la page actuelle.
- **Pied de page** : zone finale contenant des informations et des liens.