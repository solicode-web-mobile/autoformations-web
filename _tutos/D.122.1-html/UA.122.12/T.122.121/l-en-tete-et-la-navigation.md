---
title: "En-tête, Navigation et Pied de page"
layout: tuto
slug: "en-tete-navigation-pied-de-page"
permalink: /tutos/:slug/
tuto_id: "T.122.121"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 1
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog Personnel - Accueil</title>
  </head>
  <body>
      <!-- EN-TÊTE DU SITE -->
      <div class="en-tete-site">
          <div class="barre-navigation">
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
          </div>
      </div>
  
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
                  <div class="carte-article">
                      <a href="public-article.html" class="carte-image">
                          <img src="images/article-example.png" alt="Interface utilisateur moderne">
                      </a>
                      <span class="etiquette-categorie rose">UI / UX</span>
                      <div class="carte-contenu">
                          <h3><a href="public-article.html">L'importance des micro-interactions</a></h3>
                          <p>Une interface belle n'est pas suffisante. Comprendre comment animer de petites actions peut transformer l'expérience utilisateur.</p>
                          <div class="carte-meta">
                              <span>10 Fév 2026</span>
                              <span>3 min</span>
                          </div>
                      </div>
                  </div>
                  <div class="carte-article">
                      <a href="public-article.html" class="carte-image">
                          <img src="images/article-example.png" alt="Équipe de développeurs en réunion">
                      </a>
                      <span class="etiquette-categorie vert">Management</span>
                      <div class="carte-contenu">
                          <h3><a href="public-article.html">Gérer une équipe de développeurs en Full Remote</a></h3>
                          <p>Les méthodes agiles et les rituels essentiels pour maintenir la cohésion de groupe et la productivité lorsque tous les membres sont distribués.</p>
                          <div class="carte-meta">
                              <span>05 Fév 2026</span>
                              <span>8 min</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <!-- PIED DE PAGE -->
      <div class="pied-de-page">
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

- Utiliser les balises `header` et `nav` pour créer un en-tête sémantique.
- Utiliser la balise `footer` pour le pied de page.

## 2. Prérequis

- Savoir structurer une page HTML simple (titres, paragraphes, liens).

## Données de départ

La page contient déjà tout le code de notre blog. Cependant, la structure n'utilise pour l'instant que des balises génériques `<div>` pour définir les grandes zones (en-tête, navigation, pied de page).

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
    <div class="en-tete-site">
        <div class="barre-navigation">
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
        </div>
    </div>

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
    <div class="pied-de-page">
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
    </div>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'en-tête et la navigation

Les balises `<header>` et `<nav>` remplacent les `<div class="en-tete">` pour donner du sens à la page :
- **`<header>`** : Identifie l'en-tête du site ou d'une section.
- **`<nav>`** : Contient les liens de navigation principaux. Se place souvent dans l'en-tête.

### 1.2. Le pied de page

La balise **`<footer>`** remplace les div de type "bas de page" et contient les mentions légales, le copyright ou des liens secondaires.

**Structure sémantique typique :**

```html
<header>
    <nav>
        <!-- Liens vers Accueil, Contact, etc. -->
    </nav>
</header>

<!-- Contenu de la page -->

<footer>
    <!-- Copyright et infos -->
</footer>
```

## Partie 2 — Pratique

### 2.1. Transformer l'en-tête

Dans votre éditeur, trouvez la section d'en-tête (vers le début de la page) :

1. Remplacez `<div class="en-tete-site">` (et sa balise fermante) par `<header class="en-tete-site">`.
2. Remplacez `<div class="barre-navigation">` (et sa balise fermante) par `<nav class="barre-navigation">`.

### 2.2. Transformer le pied de page

Dans votre éditeur, trouvez la toute dernière grande balise div avant `</body>` :

1. Remplacez `<div class="pied-de-page">` (et sa balise fermante `</div>`) par `<footer class="pied-de-page">`.

### 2.3. Résultat attendu

Si vous testez la page, le rendu visuel est exactement le même ! En revanche, l'architecture HTML a beaucoup plus de sens :

```html
<!-- Résultat attendu pour l'en-tête -->
<header class="en-tete-site">
    <nav class="barre-navigation">
        ...
    </nav>
</header>
```

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat attendu complet</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/html/T.122.121.html' | relative_url }}"
    height="320"
    title="Résultat attendu">
</iframe>

## Bilan

Vous savez désormais structurer les bordures d'une page Web (`header`, `nav` et `footer`) !