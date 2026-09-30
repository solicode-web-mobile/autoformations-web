---
title: "Comprendre le dimensionnement réel d'une carte"
layout: tuto
slug: "dimensionnement-reel-carte"
permalink: /tutos/dimensionnement-reel-carte/
tuto_id: "T.122.221"
type: "classique"
version: "normal"
ua: "UA.122.22"
nav_order: 1
simplified: true
data_html: |
  <article class="carte">
      <h2>Le métier de développeur</h2>
      <p>Un développeur crée des applications et des sites web.</p>
  </article>

data_css: |
  body {
      padding: 20px;
      font-family: sans-serif;
  }
  .carte {
      width: 300px;
      padding: 20px;
      border: 4px solid #3b82f6;
      background-color: #f8fafc;
      /* Modifiez cette propriété pour voir la différence : */
      box-sizing: content-box; 
  }

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

Comprendre comment `padding` (marges internes) et `border` (bordures) influencent la taille réelle d’un élément, et comment contrôler ce comportement avec `box-sizing`.

## 2. Prérequis

- Connaître `width`, `padding` et `border`.

## Partie 1 — Théorie

### 1.1. Le modèle de boîte : content-box vs border-box

En CSS, tout élément est une "boîte" rectangulaire. La taille totale de cette boîte dépend de son contenu, de son `padding` (l'espace interne) et de son `border` (la bordure). 

La propriété `box-sizing` permet de décider **comment** le navigateur calcule la largeur (`width`) de l'élément :

<svg viewBox="0 0 600 250" width="800px" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- content-box -->
  <g transform="translate(10, 10)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">box-sizing: content-box; (Par défaut)</text>
    <rect x="0" y="30" width="344" height="80" fill="#f8fafc" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
    <rect x="22" y="52" width="300" height="36" fill="#3b82f6"/>
    <text x="172" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">width (300px) s'applique SEULEMENT au contenu</text>
    <text x="172" y="130" font-family="sans-serif" font-size="12" fill="#ef4444" text-anchor="middle">Largeur totale = 300(width) + 40(padding) + 4(border) = 344px !</text>
  </g>
  
  <!-- border-box -->
  <g transform="translate(10, 150)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" font-weight="bold" fill="#22c55e">box-sizing: border-box;</text>
    <rect x="0" y="30" width="300" height="80" fill="#f8fafc" stroke="#22c55e" stroke-width="2"/>
    <rect x="22" y="52" width="256" height="36" fill="#3b82f6"/>
    <text x="150" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">width (300px) INCLUT padding et border</text>
    <text x="150" y="130" font-family="sans-serif" font-size="12" fill="#22c55e" text-anchor="middle">Largeur totale = 300px. Le contenu se rétrécit pour faire de la place.</text>
  </g>
</svg>

Dans 99% des projets web modernes, on utilise `box-sizing: border-box;` pour éviter que les éléments ne débordent de leur espace lorsqu'on leur ajoute des bordures ou des marges internes.

### 1.2. Exemple d'application

Voici comment la règle s'applique concrètement en CSS pour contrôler la taille d'une boîte (le code HTML correspondant est disponible dans l'onglet HTML de l'éditeur ci-contre) :

```css
.carte {
    width: 300px;
    padding: 20px;
    border: 4px solid #3b82f6;
    background-color: #f8fafc;
    /* La boîte mesurera exactement 300px de large, padding et bordure inclus */
    box-sizing: border-box; 
}
```
*(Vous pouvez tester et modifier cet exemple dans l'éditeur de code intégré à cette page pour voir la différence avec `content-box`).*

## Partie 2 — Pratique (Projet Fil Rouge)

Nous allons commencer la construction de la page d'accueil d'un blog sur votre propre machine.

### 2.1. Initialisation du projet

1. Créez un dossier `projet-blog-boxmodel`.
2. À l'intérieur, créez un fichier `index.html` et copiez-y ce code de départ (qui représente une simple carte d'article) :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Blog</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <div class="carte-article">
        <div class="carte-contenu">
            <h3>Comment bien débuter avec Tailwind CSS en 2026 ?</h3>
            <p>Découvrez les concepts fondamentaux de Tailwind CSS.</p>
        </div>
    </div>
</body>
</html>
```

3. Créez un dossier `css` contenant un fichier `components.css`. Ajoutez-y ce style pour voir le problème du modèle de boîte par défaut :

```css
.carte-article {
    width: 300px;
    background: #f9fafb;
    border: 2px solid #e5e7eb;
}
.carte-contenu {
    padding: 30px;
}
```

### 2.2. Maîtriser le modèle de boîte universel

1. **Observez le problème :** Ouvrez `index.html` dans votre navigateur web local. Si vous utilisez l'inspecteur d'éléments de votre navigateur, vous constaterez que la `.carte-article` ne fait pas exactement 300px de large, car sa bordure ajoute 4px (2px de chaque côté) à la taille totale, la faisant passer à 304px.
2. **La solution universelle :** Pour que nos dimensions soient strictes et prévisibles tout au long du projet, créez un fichier `css/global.css` et ajoutez-y la "règle d'or" du CSS moderne :

```css
/* Ce sélecteur "étoile" cible absolument TOUS les éléments HTML */
* {
    box-sizing: border-box;
}
```

3. **Vérifiez :** Rechargez la page. La carte fait désormais très exactement 300px de bord extérieur à bord extérieur.

**Livrable :**

Votre dossier de projet local contenant `index.html`, et les fichiers `global.css` et `components.css` avec le code indiqué.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/css/tuto-122-221-css.html' | relative_url}}"
    height="250"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**
La règle universelle `* { box-sizing: border-box; }` est en place dans `global.css` et la carte est parfaitement dimensionnée.

## Bilan

**Vous avez appris :**
- À visualiser l'impact du padding et des bordures sur la taille d'un élément.
- À forcer les éléments à respecter la largeur définie avec `box-sizing: border-box`.

## Glossaire

- **Box Model** : La façon dont le navigateur calcule la taille (contenu + padding + bordure).
- **box-sizing** : Propriété qui change le calcul du Box Model.