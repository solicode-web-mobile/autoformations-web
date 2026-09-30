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

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

- Structurer le haut d'une page avec les balises sémantiques `header` et `nav`.

## 2. Prérequis

- Créer une page HTML et utiliser des balises de base (`a`, `ul`, `li`).

## Données de départ

Le projet contient le début de la page d'accueil d'un blog structuré avec des `div` génériques :

```html
<div class="site-header">
    <div class="navbar">
        <!-- Liens et menu -->
    </div>
</div>
```

## Partie 1 — Théorie

### 1.1. Les balises `<header>` et `<nav>`

Pour donner du sens (sémantique) à notre code, nous utilisons des balises spécifiques plutôt que des balises `div` génériques :

- **`<header>`** : Définit la zone d'en-tête (souvent le haut de la page avec le logo et le titre).
- **`<nav>`** : Définit une zone contenant les principaux liens de navigation. 

**Structure classique :**

```html
<header>
    <h1>Mon Blog</h1>
    <nav>
        <a href="index.html">Accueil</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>
```

> **À retenir :** On place généralement la navigation `<nav>` à l'intérieur de l'en-tête `<header>`.

## Partie 2 — Pratique

### 2.1. Sémantiser l'en-tête et la navigation

Dans votre fichier HTML de départ, remplacez les balises génériques par les balises sémantiques adaptées.

1. **L'en-tête :** Remplacez `<div class="site-header">` (et sa balise fermante) par `<header class="site-header">`.
2. **La navigation :** À l'intérieur, remplacez `<div class="navbar">` (et sa balise fermante) par `<nav class="navbar">`.

### 2.2. Résultat attendu

Voici la structure HTML que vous devez obtenir (le reste du contenu reste inchangé) :

```html
<header class="site-header">
    <nav class="navbar">
        <a href="public-index.html" class="brand">
            <span class="brand-dark">Mon</span>
            <span class="brand-primary">Blog.</span>
        </a>

        <ul class="nav-links">
            <li><a href="public-index.html">Accueil</a></li>
            <li><a href="public-categorie.html">Catégories</a></li>
            <li><a href="public-apropos.html">À propos</a></li>
        </ul>

        <a href="admin-login.html" class="button">Espace Admin</a>
    </nav>
</header>
```

> **Test :** Ouvrez la page dans le navigateur. La présentation et le fonctionnement des liens ne doivent pas avoir changé !

## Bilan

Vous savez maintenant structurer le haut d'une page de manière sémantique grâce aux balises `<header>` et `<nav>`.

## Glossaire

- **`<header>`** : En-tête d'une page.
- **`<nav>`** : Zone de liens de navigation principale.
- **Sémantique** : Le fait d'utiliser une balise qui décrit le sens de son contenu (ex: `nav` pour la navigation, plutôt qu'une `div` générique).