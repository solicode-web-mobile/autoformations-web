---
title: "Ajouter des attributs de données (Data-Attributes)"
layout: tuto
slug: "ajouter-des-attributs-de-donnees-data-attributes"
permalink: /tutos/ajouter-des-attributs-de-donnees-data-attributes/
tuto_id: "T.122.161"
type: "classique"
version: "normal"
ua: "UA.122.16"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Blog Personnel - Accueil</title>

      <link rel="stylesheet" href="css/global.css">
      <link rel="stylesheet" href="css/layout.css">
      <link rel="stylesheet" href="css/components.css">
      <link rel="stylesheet" href="css/pages.css">
  </head>
  <body>

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

      <section class="banniere-accueil">
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
      </section>

      <section id="articles" class="section-articles">
          <div class="conteneur-articles">

              <section class="filtre-categories">
                  <h2>Explorer par thème</h2>

                  <div class="liste-filtres">
                      <a href="public-index.html" class="pilule-filtre actif">
                          Tous les articles
                      </a>

                      <a href="public-categorie.html" class="pilule-filtre">
                          Développement
                      </a>

                      <a href="public-categorie.html" class="pilule-filtre">
                          Design UI/UX
                      </a>

                      <a href="public-categorie.html" class="pilule-filtre">
                          Productivité
                      </a>

                      <a href="public-categorie.html" class="pilule-filtre">
                          Management
                      </a>
                  </div>
              </section>

              <div class="entete-liste-articles">
                  <div>
                      <h2>Dernières publications</h2>
                      <p>Les articles les plus récents de la communauté.</p>
                  </div>

                  <a href="public-categorie.html" class="lien-voir-tout">
                      Explorer tout
                  </a>
              </div>

              <div class="grille-articles">

                  <div class="carte-article">
                      <a href="public-article.html" class="carte-image">
                          <img
                              src="images/article-example.png"
                              alt="Code source affiché sur un écran"
                          >
                      </a>

                      <span class="etiquette-categorie bleu">
                          Développement
                      </span>

                      <div class="carte-contenu">
                          <h3>
                              <a href="public-article.html">
                                  Comment bien débuter avec Tailwind CSS en 2026 ?
                              </a>
                          </h3>

                          <p>
                              Découvrez les concepts fondamentaux de Tailwind CSS
                              et pourquoi cette approche utilitaire est devenue
                              le standard de l'industrie.
                          </p>

                          <div class="carte-meta">
                              <span>14 Fév 2026</span>
                              <span>5 min</span>
                          </div>
                      </div>
                  </div>

                  <div class="carte-article">
                      <a href="public-article.html" class="carte-image">
                          <img
                              src="images/article-example.png"
                              alt="Interface utilisateur moderne"
                          >
                      </a>

                      <span class="etiquette-categorie rose">
                          UI / UX
                      </span>

                      <div class="carte-contenu">
                          <h3>
                              <a href="public-article.html">
                                  L'importance des micro-interactions
                              </a>
                          </h3>

                          <p>
                              Une interface belle n'est pas suffisante.
                              Comprendre comment animer de petites actions
                              peut transformer l'expérience utilisateur.
                          </p>

                          <div class="carte-meta">
                              <span>10 Fév 2026</span>
                              <span>3 min</span>
                          </div>
                      </div>
                  </div>

                  <div class="carte-article">
                      <a href="public-article.html" class="carte-image">
                          <img
                              src="images/article-example.png"
                              alt="Équipe de développeurs en réunion"
                          >
                      </a>

                      <span class="etiquette-categorie vert">
                          Management
                      </span>

                      <div class="carte-contenu">
                          <h3>
                              <a href="public-article.html">
                                  Gérer une équipe de développeurs en Full Remote
                              </a>
                          </h3>

                          <p>
                              Les méthodes agiles et les rituels essentiels
                              pour maintenir la cohésion de groupe et la
                              productivité lorsque tous les membres sont distribués.
                          </p>

                          <div class="carte-meta">
                              <span>05 Fév 2026</span>
                              <span>8 min</span>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      <footer class="pied-de-page">
          <div class="conteneur-pied-de-page">

              <div class="colonne-pied-de-page">
                  <h2>Mon Blog</h2>
                  <p>
                      Partager des connaissances, des tutoriels et des
                      découvertes sur le développement web.
                  </p>
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
                  <p>
                      Retrouvez les nouveaux articles chaque semaine.
                  </p>
              </div>

          </div>

          <div class="bas-pied-de-page">
              <p>&copy; 2026 Mon Blog Personnel.</p>
          </div>
      </footer>

  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Ajouter des attributs de données aux cartes d’articles.

Vous allez apprendre à utiliser les attributs `data-*`.

Vous allez ajouter un attribut `data-categorie` à chaque article.

Cet attribut préparera les futurs traitements JavaScript.

## 2. Prérequis

Vous devez savoir :

- créer une page HTML ;
- utiliser les balises HTML ;
- utiliser `class` ;
- structurer une page avec plusieurs éléments ;
- créer et répéter une carte d’article.

Vous devez également connaître la structure de la page d'accueil du Blog.

## Données de départ

La page d'accueil contient déjà plusieurs cartes d'articles.

Chaque carte affiche une catégorie visible.

Par exemple :

```html
<span class="etiquette-categorie bleu">
    Développement
</span>
```

Les cartes utilisent la classe :

```html
<div class="carte-article">
```

Vous allez ajouter une information supplémentaire à ces éléments.

### HTML

Le code de départ est fourni dans `data_html`.

### CSS

Aucune modification CSS n'est nécessaire.

Le champ `data_css` reste vide.

### JavaScript

Aucun JavaScript n'est nécessaire dans ce tutoriel.

Le tutoriel prépare simplement les données qui seront utilisées plus tard.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un attribut `data-*` ?

Un attribut `data-*` permet d'ajouter une information à un élément HTML.

Le nom commence toujours par :

```text
data-
```

Exemple :

```html
<div data-categorie="developpement">
</div>
```

La valeur `developpement` est une information associée à cet élément.

### 1.2. L'attribut `data-categorie`

Dans notre Blog, chaque article appartient à une catégorie.

Nous pouvons donc stocker cette information sur la carte de l'article.

Exemple :

```html
<div class="carte-article" data-categorie="developpement">
```

L'élément possède maintenant deux informations :

```text
class = style et identification CSS
data-categorie = information sur la catégorie
```

### 1.3. Plusieurs valeurs

Chaque article peut avoir une valeur différente.

Exemple :

```html
<div class="carte-article" data-categorie="developpement">
```

```html
<div class="carte-article" data-categorie="ui-ux">
```

```html
<div class="carte-article" data-categorie="management">
```

La page peut ainsi conserver l'information de catégorie directement dans chaque carte.

### 1.4. Utilité pour JavaScript

Dans un futur tutoriel JavaScript, le programme pourra lire cette information.

Il pourra ensuite utiliser la catégorie pour :

- rechercher un article ;
- filtrer les articles ;
- afficher certains articles ;
- comparer des catégories.

Dans ce tutoriel, nous préparons seulement cette information.

### 1.5. À retenir

Un attribut `data-*` :

- commence par `data-` ;
- stocke une information dans l'élément HTML ;
- peut contenir une valeur choisie pour le projet ;
- peut être utilisé plus tard par JavaScript.

Pour notre Blog :

```html
data-categorie="developpement"
```

stocke la catégorie de l'article.

## Partie 2 — Pratique

### 2.1. Ajouter `data-categorie` au premier article

#### Étape 1 — Repérer la première carte

Dans le code de départ, repérez :

```html
<div class="carte-article">
```

Cette carte contient l'article sur Tailwind CSS.

#### Étape 2 — Ajouter l'attribut

Ajoutez l'attribut `data-categorie`.

La valeur doit être :

```text
developpement
```

La balise devient :

```html
<div class="carte-article" data-categorie="developpement">
```

L'information est maintenant associée à la carte.

### 2.2. Ajouter `data-categorie` au deuxième article

#### Étape 1 — Repérer la deuxième carte

Repérez la carte :

```text
L'importance des micro-interactions
```

Elle appartient à la catégorie **UI / UX**.

#### Étape 2 — Ajouter l'attribut

Ajoutez :

```text
data-categorie="ui-ux"
```

La balise devient :

```html
<div class="carte-article" data-categorie="ui-ux">
```

### 2.3. Ajouter `data-categorie` au troisième article

#### Étape 1 — Repérer la troisième carte

Repérez la carte :

```text
Gérer une équipe de développeurs en Full Remote
```

Elle appartient à la catégorie **Management**.

#### Étape 2 — Ajouter l'attribut

Ajoutez :

```text
data-categorie="management"
```

La balise devient :

```html
<div class="carte-article" data-categorie="management">
```

### 2.4. Vérifier les trois cartes

Vous devez maintenant avoir :

```html
<div class="carte-article" data-categorie="developpement">
```

```html
<div class="carte-article" data-categorie="ui-ux">
```

```html
<div class="carte-article" data-categorie="management">
```

Chaque carte possède donc sa propre information de catégorie.

### 2.5. Exercice individuel

Ajoutez un nouvel article dans la grille.

Utilisez les informations suivantes :

```text
Titre : Découvrir les nouvelles méthodes de travail
Catégorie : Productivité
```

Ajoutez l'attribut :

```text
data-categorie="productivite"
```

Ne modifiez pas le CSS.

Ne créez pas de JavaScript.

L'objectif est uniquement d'associer une catégorie à la nouvelle carte.

**Travail à faire :**

Ajouter une nouvelle carte d'article avec l'attribut `data-categorie` correspondant à sa catégorie.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

- le code de la nouvelle carte ;
- une capture du résultat dans le navigateur.

**Résultat attendu :**

La nouvelle carte possède un attribut `data-categorie` contenant la valeur `productivite`.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/html/tuto-161-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

Chaque carte d'article possède un attribut `data-categorie` avec une valeur correspondant à sa catégorie.

## Bilan

**Vous avez réalisé :**

L'association d'une information de catégorie à chaque carte d'article.

**Vous savez maintenant :**

- utiliser un attribut `data-*` ;
- créer un attribut `data-categorie` ;
- associer une information à un élément HTML ;
- préparer des données pour une utilisation future en JavaScript.

## Glossaire

- **Attribut** : information ajoutée à une balise HTML.
- **`data-*`** : attribut HTML utilisé pour stocker une information personnalisée.
- **`data-categorie`** : attribut utilisé ici pour stocker la catégorie d'un article.
- **Métadonnée** : information qui décrit un élément ou une donnée.