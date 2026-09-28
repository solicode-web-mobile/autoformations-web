---
title: "Regrouper en sections"
layout: tuto
slug: "regrouper-en-sections"
permalink: /tutos/:slug/
tuto_id: "T.122.123"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 3
data_html: ""
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

          <div class="hero">

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
                      class="hero-button hero-button-primary">
                      Lire les articles
                  </a>

                  <a
                      href="public-apropos.html"
                      class="hero-button hero-button-secondary">
                      À propos de moi
                  </a>

              </div>

          </div>

          <div class="articles-section">

              <div class="articles-container">

                  <section class="category-filter">

                      <h2>
                          Explorer par thème
                      </h2>

                      <div class="category-list">

                          <a
                              href="public-index.html"
                              class="category-pill active">
                              Tous les articles
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill">
                              Développement
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill">
                              Design UI/UX
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill">
                              Productivité
                          </a>

                          <a
                              href="public-categorie.html"
                              class="category-pill">
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
                          class="articles-more">
                          Explorer tout
                      </a>

                  </div>

                  <div class="articles-grid">

                      <div class="article-card">

                          <a
                              href="public-article.html"
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

          </div>

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
                  &copy; 2026 Mon Blog Personnel.
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

- utiliser la balise `section` ;
- regrouper des contenus liés ;
- découper le contenu de `main` en plusieurs zones ;
- organiser plus clairement une page d'accueil.

À la fin, le contenu principal sera organisé en sections.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser des attributs ;
- créer des liens ;
- utiliser `header` ;
- utiliser `nav` ;
- utiliser `main` ;
- utiliser `footer`.

Vous devez avoir réalisé **T.122.121** et **T.122.122**.

## Données de départ

La page d'accueil possède déjà une structure globale :

```text
header
└── nav

main
└── contenu de la page

footer
└── informations de fin de page
```

Dans `main`, plusieurs contenus appartiennent à des zones différentes.

Dans ce tutoriel, vous allez utiliser `section` pour mieux découper ces contenus.

### HTML

Le début de `main` est actuellement :

```html
<main class="page-content">

    <div class="hero">
        ...
    </div>

    <div class="articles-section">
        ...
    </div>

</main>
```

Ces deux zones représentent deux parties différentes de la page.

### CSS

Le CSS existant est conservé.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. La balise `section`

`section` permet de regrouper des contenus liés dans une même partie.

Exemple :

```html
<section>

    <h2>
        Derniers articles
    </h2>

    <p>
        Découvrez les nouveaux articles.
    </p>

</section>
```

La balise `section` permet donc de délimiter une partie du contenu.

### 1.2. Une section dans `main`

Une page peut contenir plusieurs sections dans son contenu principal.

Exemple :

```html
<main>

    <section>
        ...
    </section>

    <section>
        ...
    </section>

</main>
```

Chaque `section` représente une partie distincte de `main`.

### 1.3. Regrouper les contenus

Dans la page du blog, le contenu principal contient plusieurs zones.

Par exemple :

```text
main
├── zone d'accueil
└── zone des articles
```

Ces zones peuvent être représentées avec `section`.

### 1.4. À retenir

- `section` représente une partie du contenu.
- Une page peut contenir plusieurs `section`.
- Les `section` peuvent être placées dans `main`.
- Une section regroupe des contenus liés.

## Partie 2 — Pratique

### 2.1. Transformer la zone d'accueil

Dans `main`, recherchez :

```html
<div class="hero">
```

Cette zone contient le message d'accueil et les actions principales.

Remplacez la balise ouvrante par :

```html
<section class="hero">
```

Puis remplacez la balise fermante correspondante :

```html
</div>
```

par :

```html
</section>
```

Conservez tout le contenu situé à l'intérieur.

### 2.2. Transformer la zone des articles

Recherchez ensuite :

```html
<div class="articles-section">
```

Cette zone contient les contenus liés aux articles.

Remplacez la balise ouvrante par :

```html
<section class="articles-section">
```

Puis remplacez sa balise fermante correspondante par :

```html
</section>
```

Conservez le contenu intérieur.

### 2.3. Vérifier la structure

Le contenu de `main` doit maintenant commencer ainsi :

```html
<main class="page-content">

    <section class="hero">

        ...

    </section>

    <section class="articles-section">

        ...

    </section>

</main>
```

Vous avez maintenant deux sections dans le contenu principal.

### 2.4. Conserver les contenus

Ne supprimez pas :

- le titre du blog ;
- le texte d'introduction ;
- les boutons ;
- les catégories ;
- les publications ;
- les cartes d'articles.

Le travail consiste à améliorer la structure HTML.

### 2.5. Vérifier la section des catégories

Dans la zone des articles, une section existe déjà :

```html
<section class="category-filter">

    <h2>
        Explorer par thème
    </h2>

    ...

</section>
```

Elle peut rester telle quelle.

Vous avez donc des sections qui peuvent être imbriquées dans une autre partie du contenu.

### 2.6. Tester la page

Ouvrez la page dans le navigateur.

Vérifiez que :

- la page s'affiche correctement ;
- la zone d'accueil est visible ;
- la zone des articles est visible ;
- les catégories sont visibles ;
- les liens fonctionnent ;
- le pied de page est toujours présent.

La présentation visuelle doit rester identique.

### 2.7. Vérifier la structure finale

Vous devez obtenir une organisation proche de :

```text
header
└── nav

main
├── section — accueil
└── section — articles
    └── section — catégories

footer
```

Vous devez pouvoir expliquer pourquoi chaque `section` correspond à une partie du contenu.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 3e tutoriel de la série

**Incrément :** Découpage du contenu principal en sections.

**Intégration demandée :**

Utilisez la balise `section` pour organiser les différentes parties du contenu de votre page d'accueil.

Transformez les deux grandes zones de `main` en sections :

```text
zone d'accueil
zone des articles
```

Conservez les contenus et les classes CSS existantes.

**Livrable :**

Le fichier HTML de la page d'accueil avec plusieurs `section` permettant de distinguer les différentes parties du contenu.

**Critère de réussite :**

Le contenu de `main` est découpé en zones cohérentes avec la balise `section`.

**Résultat attendu :**

```html
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
                class="hero-button hero-button-primary">
                Lire les articles
            </a>

            <a
                href="public-apropos.html"
                class="hero-button hero-button-secondary">
                À propos de moi
            </a>

        </div>

    </section>

    <section class="articles-section">

        ...

    </section>

</main>
```

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-123-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :**

Le découpage du contenu principal de la page d'accueil en plusieurs sections.

**Vous savez maintenant :**

- utiliser `section` ;
- regrouper des contenus liés ;
- découper `main` en plusieurs parties ;
- organiser une page HTML avec plusieurs sections.

## Glossaire

- **`section`** : partie d'un contenu regroupant des éléments liés.
- **Contenu principal** : contenu principal de la page.
- **Zone** : partie identifiable d'une page.
- **Structure** : organisation des différentes parties d'une page.