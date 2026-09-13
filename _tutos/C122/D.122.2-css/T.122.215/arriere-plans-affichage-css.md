---
title: "Arrière-plans & Affichage"
layout: tuto
slug: "arriere-plans-affichage-css"
permalink: /tutos/:slug/
tuto_id: "T.122.215"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 5
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Arrière-plans et Affichage</title>
        <link rel="stylesheet" href="tuto-5-css.css">
    </head>
    <body>
        <div class="header">
            <span class="badge">CSS</span>
            <span class="badge">Niveau 1</span>
            <h1>Apprendre le CSS</h1>
        </div>
    </body>
    </html>
data_css: ""
data_js: ""
data_php: ""
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

Personnaliser les éléments avec des couleurs de fond et comprendre le comportement d'affichage (`display`) des balises.

## 2. Prérequis

* Connaître la syntaxe CSS et les sélecteurs de classe.
* Comprendre l'usage des couleurs hexadécimales.

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Arrière-plans et Affichage</title>
    <link rel="stylesheet" href="tuto-5-css.css">
</head>
<body>
    <div class="header">
        <span class="badge">CSS</span>
        <span class="badge">Niveau 1</span>
        <h1>Apprendre le CSS</h1>
    </div>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'arrière-plan (`background`)

Pour définir la couleur de fond d'un élément (comme une `div` ou le `body` entier), on utilise la propriété `background` (ou `background-color`).
```css
.ma-boite {
    background: #f0f6ff; /* Bleu très clair */
}
```

### 1.2. La propriété `display` (L'affichage)

C'est une des notions les plus importantes du CSS. Toutes les balises HTML ont un comportement d'affichage par défaut. Il y a trois grandes familles :

#### display: block
L'élément se comporte comme une brique. Il prend **toute la largeur disponible** (100%) et force les éléments suivants à aller à la ligne.
*Exemples : `<div>`, `<h1>`, `<p>`, `<section>`...*

#### display: inline
L'élément s'intègre dans le texte (en ligne). Il ne prend que la largeur de son contenu. Il est impossible de lui donner une largeur, une hauteur ou des marges verticales.
*Exemples : `<span>`, `<a>`, `<strong>`, `<em>`...*

#### display: inline-block
C'est le meilleur des deux mondes. L'élément reste sur la même ligne (comme l'`inline`), mais on peut lui donner une largeur, une hauteur et des marges (comme le `block`). C'est idéal pour créer des boutons ou des badges (étiquettes).

### 1.3. L'espacement interne (`padding`)

Pour que le texte ne colle pas aux bords de son conteneur (surtout quand on met une couleur de fond), on ajoute de l'espace à l'intérieur avec la propriété `padding`.
```css
.ma-boite {
    padding: 40px; /* 40 pixels d'espace à l'intérieur */
}
```

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-5-css.html` (collez le HTML de départ) et `tuto-5-css.css` (vide) dans le même dossier.

### 2.2. Créer l'en-tête (Header)

Dans votre fichier CSS, ciblez la `div` de classe `.header`. Nous allons lui donner un fond bleu clair, la centrer, et ajouter beaucoup d'espace à l'intérieur pour l'aérer :

```css
.header {
    background: #f0f6ff;
    padding: 40px;
    text-align: center;
}
```

### 2.3. Transformer les balises `<span>` en badges

Par défaut, les deux `<span>` ("CSS" et "Niveau 1") sont de type `inline`. Ils se collent sans espace. 
Nous allons les transformer en `.badge` en changeant leur comportement d'affichage vers `inline-block`. Cela va nous permettre de leur donner un fond, une couleur et de l'espacement.

Ajoutez cette règle :

```css
.badge {
    display: inline-block;
    background: white;
    color: #1c5bba;
    padding: 5px 15px;
}
```
*Note : `padding: 5px 15px;` est un raccourci qui signifie "5px d'espace en haut et en bas, 15px à gauche et à droite".*

### 2.4. Tester le rendu

Enregistrez les deux fichiers et ouvrez la page dans le navigateur.

**Résultat attendu :**
L'en-tête prend toute la largeur avec un fond bleuté. À l'intérieur, les deux petits badges blancs se tiennent sagement côte à côte sur la même ligne (grâce au `inline-block`), ce qui aurait été impossible s'ils avaient été des `div` (type `block`).

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-5/tuto-5-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 5">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une bannière d'en-tête stylisée avec des étiquettes (badges).

**Vous savez maintenant :** 
- Définir une couleur d'arrière-plan avec `background`.
- Aérer l'intérieur d'un élément avec `padding`.
- Distinguer les éléments `block` (prennent toute la largeur) et `inline` (suivent le texte).
- Forcer un élément à se comporter de manière hybride grâce à `display: inline-block;`.
