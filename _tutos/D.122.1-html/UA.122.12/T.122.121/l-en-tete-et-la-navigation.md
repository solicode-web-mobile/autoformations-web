---
title: "L'en-tête et la navigation"
layout: tuto
slug: "l-en-tete-et-la-navigation"
permalink: /tutos/:slug/
tuto_id: "T.122.121"
type: "classique"
version: "normal"
ua: "UA.122.12"
nav_order: 1
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

      <div class="site-header">

          <div class="navbar">

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

          </div>

      </div>

  </body>

  </html>
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser la balise `header` ;
- utiliser la balise `nav` ;
- identifier la partie haute d'une page ;
- identifier une zone de navigation.

À la fin, le haut de votre page sera structuré avec les bonnes balises HTML.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser une balise HTML ;
- utiliser les attributs HTML ;
- créer un lien avec `a` ;
- créer une liste avec `ul` et `li`.

Ces notions ont été étudiées dans les tutoriels précédents du domaine HTML.

## Données de départ

Le projet contient déjà le début de la page d'accueil du blog.

### HTML

Le code de départ contient deux `div` :

```html
<div class="site-header">

    <div class="navbar">

        ...

    </div>

</div>
```

Ces `div` permettent de regrouper les éléments.

Dans ce tutoriel, vous allez utiliser des balises HTML plus adaptées.

### CSS

Aucun nouveau CSS n'est étudié dans ce tutoriel.

Le CSS existant est conservé.

### JavaScript

Aucun JavaScript n'est utilisé dans ce tutoriel.

## Partie 1 — Théorie

### 1.1. La balise `header`

`header` représente l'en-tête d'une page ou d'une partie de page.

L'en-tête contient souvent :

- le nom du site ;
- le logo ;
- le menu ;
- des liens importants.

Exemple :

```html
<header>
    <h1>Mon Blog</h1>
</header>
```

Ici, `header` indique que cette zone est l'en-tête.

### 1.2. La balise `nav`

`nav` représente une zone de navigation.

Elle contient les liens qui permettent d'aller vers les principales pages du site.

Exemple :

```html
<nav>
    <a href="public-index.html">Accueil</a>
    <a href="public-categorie.html">Catégories</a>
    <a href="public-apropos.html">À propos</a>
</nav>
```

Ici, les trois liens font partie de la navigation.

### 1.3. `header` et `nav`

Les deux balises ont des rôles différents.

`header` indique une zone d'en-tête.

`nav` indique une zone de navigation.

Elles peuvent être utilisées ensemble :

```html
<header>

    <nav>
        ...
    </nav>

</header>
```

### 1.4. À retenir

- `header` représente un en-tête.
- `nav` représente une zone de navigation.
- `nav` peut être placé dans `header`.
- Les liens du menu peuvent être placés dans `nav`.

## Partie 2 — Pratique

### 2.1. Identifier l'en-tête

Dans le fichier HTML de départ, recherchez :

```html
<div class="site-header">
```

Cette zone contient les éléments situés en haut de la page.

Elle correspond à l'en-tête du site.

Remplacez la balise ouvrante :

```html
<div class="site-header">
```

par :

```html
<header class="site-header">
```

Remplacez aussi la balise fermante correspondante :

```html
</div>
```

par :

```html
</header>
```

Ne modifiez pas les éléments placés à l'intérieur.

### 2.2. Identifier la navigation

Dans l'en-tête, recherchez :

```html
<div class="navbar">
```

Cette zone contient :

- le nom du blog ;
- les liens du menu ;
- le lien vers l'espace administrateur.

Elle représente la navigation principale.

Remplacez :

```html
<div class="navbar">
```

par :

```html
<nav class="navbar">
```

Puis remplacez la balise fermante correspondante :

```html
</div>
```

par :

```html
</nav>
```

### 2.3. Vérifier les liens

La navigation contient toujours les liens déjà présents :

```html
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
```

Ne changez pas les liens.

Vous changez seulement la structure sémantique du conteneur.

### 2.4. Vérifier le code

Le haut de la page doit maintenant avoir cette structure :

```html
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
```

### 2.5. Tester la page

Ouvrez la page HTML dans le navigateur.

Vérifiez que :

- le nom du blog est visible ;
- les trois liens sont visibles ;
- le lien « Espace Admin » est visible ;
- la présentation de la page reste correcte ;
- les liens fonctionnent.

Le remplacement des `div` par `header` et `nav` ne doit pas supprimer les éléments existants.

### 2.6. Présenter la structure

Expliquez la structure obtenue :

```text
header
└── nav
    ├── nom du blog
    ├── liens de navigation
    └── lien Espace Admin
```

Vous devez pouvoir expliquer pourquoi `header` et `nav` sont utilisés.

## Partie 3 — Développement progressif

**Série :** Page d'accueil du blog

**Position :** 1er tutoriel de la série

**Incrément :** Remplacement des conteneurs génériques par les balises sémantiques `header` et `nav`.

**Intégration demandée :**

Utilisez les notions étudiées dans ce tutoriel pour mettre à jour le haut de votre page d'accueil.

Conservez :

- les textes ;
- les liens ;
- les classes CSS ;
- la présentation existante.

Modifiez uniquement la structure HTML nécessaire.

**Livrable :**

Le fichier HTML de la page d'accueil avec :

```html
<header>
```

et :

```html
<nav>
```

**Critère de réussite :**

Le haut de la page utilise correctement `header` pour l'en-tête et `nav` pour la navigation principale.

**Résultat attendu :**

```html
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
```

## Bilan

**Vous avez réalisé :**

Le haut de la page d'accueil du blog avec une structure HTML sémantique.

**Vous savez maintenant :**

- utiliser `header` pour un en-tête ;
- utiliser `nav` pour une navigation ;
- organiser une navigation dans l'en-tête ;
- conserver les éléments existants lors d'une modification de structure.

## Glossaire

- **`header`** : zone d'en-tête d'une page ou d'une partie de page.
- **`nav`** : zone qui contient des liens de navigation.
- **Navigation** : ensemble de liens permettant d'accéder à d'autres pages ou zones.
- **Sémantique** : utilisation d'une balise qui indique clairement le rôle du contenu.