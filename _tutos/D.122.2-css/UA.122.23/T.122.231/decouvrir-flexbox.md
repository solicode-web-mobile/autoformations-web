---
title: "Découvrir Flexbox"
layout: tuto
slug: "decouvrir-flexbox"
permalink: /tutos/decouvrir-flexbox/
tuto_id: "T.122.231"
type: "classique"
version: "normal"
ua: "UA.122.23"
nav_order: 1
simplified: true
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Liste de cartes</title>
      <style>
          body { font-family: sans-serif; }
          .carte-article {
              box-sizing: border-box;
              width: 220px;
              padding: 20px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
          }
          .liste-cartes {
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              margin: 40px auto;
              padding: 20px;
              background: #f9fafb;
          }
      </style>
  </head>
  <body>

      <section class="liste-cartes">

          <article class="carte-article">
              <h2>HTML</h2>
              <p>Créer la structure d'une page web.</p>
          </article>

          <article class="carte-article">
              <h2>CSS</h2>
              <p>Mettre en forme une page web.</p>
          </article>

          <article class="carte-article">
              <h2>JavaScript</h2>
              <p>Ajouter des comportements à une page.</p>
          </article>

      </section>

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

Apprendre à transformer un élément en **conteneur Flexbox** avec `display: flex`.

## 2. Prérequis

Vous savez déjà utiliser des classes CSS pour donner un style de base (marges, bordures, espacements) à un élément HTML.



## Partie 1 — Théorie

### 1.1. Le modèle Flexbox : Conteneur et Éléments

Flexbox est un modèle CSS qui permet d'organiser facilement plusieurs éléments enfants à l'intérieur d'un élément parent. 

La règle d'or est simple : **le style Flexbox s'applique au parent (le conteneur), et non aux enfants (les éléments flex)**.

<svg viewBox="0 0 600 200" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="40" width="560" height="120" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="5,5"/>
  <text x="30" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569">Conteneur parent (.liste-cartes) avec display: flex;</text>
  
  <rect x="40" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="110" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 1</text>
  
  <rect x="230" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="300" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 2</text>
  
  <rect x="420" y="60" width="140" height="80" rx="4" fill="#3b82f6" />
  <text x="490" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Enfant Flex 3</text>
</svg>

Il suffit d'ajouter la propriété `display: flex;` sur le conteneur parent pour que tous ses enfants directs se positionnent automatiquement selon les règles de Flexbox (par défaut, ils se placent en ligne).

**Exemple d'utilisation dans le code CSS :**

```css
.liste-cartes {
    /* Transforme la section en conteneur flex */
    display: flex; 
}
```

## Partie 2 — Pratique (Projet Fil Rouge)

Tout au long de cette unité d'apprentissage, vous allez construire la page d'accueil complète d'un blog, pas à pas, directement sur votre ordinateur.

### 2.1. Préparation du projet local

1. Sur votre ordinateur, créez un nouveau dossier nommé `projet-blog-flexbox`.
2. À l'intérieur, créez un fichier `index.html` et un dossier `css` contenant un fichier `style.css`.
3. **Le HTML de départ :** Copiez le code suivant dans votre fichier `index.html`.


```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel - Accueil</title>
    <!-- Chargement des différents fichiers CSS -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Catégories</a></li>
                <li><a href="#">À propos</a></li>
            </ul>
            <a href="#" class="bouton-principal">Espace Admin</a>
        </nav>
    </header>
</body>
</html>
```

4. **L'architecture CSS :** Dans votre dossier `css`, créez les trois fichiers suivants et copiez-y le code correspondant. Ils gèrent la typographie, les couleurs et les bordures du menu, mais **ne contiennent aucune disposition Flexbox**. *(Note : vous créerez `pages.css` dans un prochain tutoriel)*.

**`css/global.css`** (Styles globaux) :

```css
body { margin: 0; color: #1f2937; background: #f9fafb; font-family: Arial, sans-serif; line-height: 1.5; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; padding: 0; margin: 0; }
```

**`css/layout.css`** (Structure principale) :

```css
.en-tete-site { padding: 20px 24px; background: white; border-bottom: 1px solid #e5e7eb; }
.logo { font-family: Georgia, serif; font-size: 22px; font-weight: 900; }
.logo-sombre { color: #111827; }
.logo-couleur { color: #2673e8; }
.liens-navigation a { color: #6b7280; font-size: 14px; font-weight: 500; }
```

**`css/components.css`** (Composants réutilisables) :

```css
.bouton-principal { display: inline-block; padding: 10px 20px; color: white; background: #2673e8; border-radius: 8px; font-size: 14px; font-weight: 600; text-align: center; }
```

### 2.2. Activer Flexbox

1. **Ouvrez `index.html` dans votre navigateur.** Vous constaterez que le logo, les liens et le bouton s'empilent verticalement de façon très basique.
2. **Dans votre fichier `css/layout.css`**, ciblez la classe `.barre-navigation` (par exemple à la suite de la règle `.logo-couleur`) et ajoutez-y la propriété `display: flex;`.
3. Enregistrez et actualisez la page dans votre navigateur.

**Livrable :**
Votre fichier `css/layout.css` mis à jour contenant l'activation du Flexbox sur la barre de navigation.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-231-css.html' | relative_url}}"
    height="350"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
Les éléments du menu (logo, liens, bouton) et les 3 cartes d'articles s'affichent désormais sur une seule ligne horizontale !

## Bilan

**Vous avez appris :**
- La différence entre le parent (conteneur flex) et les enfants (éléments flex).
- À activer le modèle Flexbox en utilisant `display: flex`.

## Glossaire

- **Conteneur flex** : Élément parent qui possède la règle `display: flex`.
- **Élément flex** : Enfant direct d'un conteneur flex, positionné par le modèle Flexbox.