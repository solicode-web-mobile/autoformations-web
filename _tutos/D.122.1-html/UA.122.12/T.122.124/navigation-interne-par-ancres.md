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
data_html: ""
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

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser l'attribut `id` ;
- créer un identifiant unique ;
- créer un lien interne avec `href="#id"` ;
- relier un lien à une zone précise de la page.

À la fin du tutoriel, le bouton « Lire les articles » permettra d'aller directement à la zone des articles.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser `header` ;
- utiliser `nav` ;
- utiliser `main` ;
- utiliser `footer` ;
- utiliser `section` ;
- créer des liens avec `a` et `href`.

Vous devez avoir réalisé :

- **T.122.121 — L'en-tête et la navigation** ;
- **T.122.122 — La zone principale et le pied de page** ;
- **T.122.123 — Regrouper en sections**.

## Données de départ

La page d'accueil possède déjà une structure sémantique.

Elle contient :

- un `header` ;
- un `nav` ;
- un `main` ;
- plusieurs `section` ;
- un `footer`.

Le bouton « Lire les articles » contient déjà un lien interne :

```html
<a
    href="#articles"
    class="hero-button hero-button-primary"
>
    Lire les articles
</a>
```

Mais aucune zone ne possède encore l'identifiant `articles`.

Le lien ne peut donc pas encore atteindre la zone des articles.

### HTML

La zone des articles est actuellement :

```html
<section class="articles-section">

    ...

</section>
```

Dans ce tutoriel, vous allez identifier cette zone avec un `id`.

### CSS

Le CSS existant est conservé.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. L'attribut `id`

L'attribut `id` permet d'identifier un élément HTML.

Exemple :

```html
<section id="articles">
    ...
</section>
```

Ici, l'identifiant de la section est `articles`.

L'identifiant permet de retrouver précisément cette zone.

### 1.2. Un identifiant unique

Un `id` identifie une seule zone dans une page.

Exemple :

```html
<section id="articles">
    ...
</section>
```

La valeur `articles` ne doit pas être utilisée pour identifier une autre zone de cette même page.

### 1.3. Le lien interne

Un lien peut pointer vers un élément qui possède un `id`.

Pour cela, on utilise `#` avant la valeur de l'identifiant.

Exemple :

```html
<a href="#articles">
    Lire les articles
</a>
```

Le navigateur cherche l'élément qui possède :

```html
id="articles"
```

Le lien et l'identifiant doivent utiliser la même valeur.

```text
href="#articles"
       ↓
   id="articles"
```

### 1.4. À retenir

- `id` identifie une zone précise ;
- un `id` doit être unique dans la page ;
- `href="#articles"` crée un lien interne ;
- le `#` indique que le lien cible un `id` ;
- la valeur du `href` doit correspondre à la valeur du `id`.

## Partie 2 — Pratique

### 2.1. Repérer le lien interne

Dans la zone d'accueil, recherchez :

```html
<a
    href="#articles"
    class="hero-button hero-button-primary"
>
    Lire les articles
</a>
```

Le lien utilise déjà `#articles`.

Vous devez maintenant créer la zone correspondante.

### 2.2. Identifier la zone des articles

Dans `main`, recherchez :

```html
<section class="articles-section">
```

Cette section contient les catégories et les publications.

Elle est donc la cible du lien « Lire les articles ».

Modifiez la balise ouvrante :

```html
<section class="articles-section">
```

en :

```html
<section
    id="articles"
    class="articles-section"
>
```

Ne modifiez pas le contenu de la section.

### 2.3. Vérifier la correspondance

Vous devez maintenant avoir :

```html
<a href="#articles">
    Lire les articles
</a>
```

et :

```html
<section
    id="articles"
    class="articles-section"
>
```

Les deux utilisent le même nom :

```text
articles
```

Le lien peut maintenant atteindre cette section.

### 2.4. Conserver la structure

Ne supprimez pas :

- le `header` ;
- le `nav` ;
- le `main` ;
- les autres `section` ;
- le `footer` ;
- les contenus des articles.

Vous ajoutez seulement un identifiant à la section des articles.

### 2.5. Vérifier le code

La partie concernée de la page doit maintenant être :

```html
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

<section
    id="articles"
    class="articles-section"
>

    ...

</section>
```

Le bouton et la section sont maintenant reliés.

### 2.6. Tester la navigation

Ouvrez la page dans le navigateur.

Cliquez sur :

**Lire les articles**

Vérifiez que le navigateur se déplace vers la zone des articles.

Vérifiez aussi que :

- les articles sont toujours visibles ;
- les catégories sont toujours visibles ;
- la page garde la même présentation ;
- les autres liens fonctionnent.

### 2.7. Présenter la structure

Expliquez la relation entre le lien et la cible :

```text
Lien
└── href="#articles"
          ↓
Zone cible
└── id="articles"
```

Vous devez pouvoir expliquer pourquoi les deux valeurs doivent être identiques.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 4e tutoriel de la série

**Incrément :** Ajout d'un identifiant à la zone des articles pour activer la navigation interne.

**Intégration demandée :**

Utilisez les notions étudiées dans ce tutoriel pour compléter votre page d'accueil.

Rendez fonctionnel le bouton :

```text
Lire les articles
```

Le lien doit conduire directement à la zone des articles.

Conservez :

- les textes ;
- les liens existants ;
- les classes CSS ;
- les sections ;
- les articles ;
- la présentation.

**Livrable :**

Le fichier HTML de la page d'accueil avec :

- un lien interne `href="#articles"` ;
- une zone cible avec `id="articles"`.

**Critère de réussite :**

Un clic sur « Lire les articles » déplace le navigateur vers la zone des articles.

**Résultat attendu :**

```html
<section class="hero">

    ...

    <a
        href="#articles"
        class="hero-button hero-button-primary"
    >
        Lire les articles
    </a>

    ...

</section>

<section
    id="articles"
    class="articles-section"
>

    <div class="articles-container">

        ...

    </div>

</section>
```

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-124-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le navigateur doit conserver la même présentation.

Le bouton « Lire les articles » doit maintenant conduire à la section des articles.

## Bilan

**Vous avez réalisé :**

La navigation interne entre le bouton d'accueil et la zone des articles.

**Vous savez maintenant :**

- utiliser `id` ;
- créer un identifiant unique ;
- utiliser `href="#id"` ;
- relier un lien à une zone précise ;
- tester une navigation interne dans une page HTML.

## Glossaire

- **`id`** : identifiant unique d'un élément HTML.
- **`href="#id"`** : lien vers un élément identifié par un `id`.
- **Ancre** : point précis d'une page vers lequel un lien peut conduire.
- **Navigation interne** : déplacement vers une zone de la même page.