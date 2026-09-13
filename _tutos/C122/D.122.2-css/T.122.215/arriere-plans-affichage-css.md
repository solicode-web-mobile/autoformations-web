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

Utiliser les propriétés `background` et `display` pour modifier l’arrière-plan et l’affichage des éléments.

À la fin du tutoriel, vous saurez appliquer une couleur de fond et comprendre la différence entre les affichages en bloc (`block`), en ligne (`inline`) et mixte (`inline-block`).

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de classe.
* Savoir utiliser les propriétés de texte et de couleur (`color`, `text-align`).

## 3. Données de départ

### HTML

Utilisez le code HTML suivant, qui définit un en-tête contenant deux badges (étiquettes) et un titre :

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

Ces données constituent la base de travail du tutoriel.

## Partie 1 — Théorie

### 1.1. La propriété `background`

La propriété `background` permet de définir l’arrière-plan d’un élément.

Exemple :

```css
.header {
    background: #f0f6ff;
}
```

Ici, l’arrière-plan de `.header` devient bleu très clair.

### 1.2. Le type `block`

Un élément `block` (bloc) occupe normalement toute la largeur disponible sur la ligne et commence sur une nouvelle ligne.
Des éléments HTML comme `<h1>`, `<div>` et `<p>` sont par défaut des éléments de type `block`.

### 1.3. Le type `inline`

Un élément `inline` (en ligne) reste sur la même ligne que le texte et les éléments adjacents, et ne prend que la largeur nécessaire à son contenu. Les éléments `<span>` et `<a>` sont par défaut de type `inline`.

### 1.4. Le type `inline-block`

La valeur `inline-block` permet à un élément de rester sur la même ligne (comme `inline`), tout en permettant de modifier ses dimensions et espacements (comme `block`). C'est très utile pour créer des boutons ou des badges.

Exemple :

```css
.badge {
    display: inline-block;
}
```

### 1.5. L'espacement interne : `padding`

La propriété `padding` permet d'ajouter de l'espace à l'intérieur d'un élément, entre son contenu et ses bords.

```css
.header {
    padding: 40px;
}
```

### 1.6. À retenir

* `background` définit l’arrière-plan d'un élément.
* `display: block` affiche un élément comme un bloc (prend toute la ligne).
* `display: inline` affiche un élément sur la ligne du texte.
* `display: inline-block` permet un affichage en ligne tout en conservant les caractéristiques d’un bloc.
* `padding` crée un espacement interne.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

#### Étape 1 — Fichier HTML

Créez le fichier `tuto-5-css.html` avec le code de départ fourni.

### 2.2. Modifier l’arrière-plan

#### Étape 2 — Fichier CSS

Créez `tuto-5-css.css` et ajoutez une règle pour l'en-tête `.header` :

```css
.header {
    background: #f0f6ff;
    padding: 40px;
    text-align: center;
}
```

**Résultat attendu :** L’en-tête possède un arrière-plan bleu clair, un grand espacement interne et son texte est centré.

### 2.3. Modifier l’affichage des badges

#### Étape 3 — Règle des badges

Les balises `<span>` sont `inline` par défaut. Pour en faire de véritables étiquettes avec de l'espacement et un arrière-plan propre, nous allons les passer en `inline-block`.

Ajoutez la règle :

```css
.badge {
    display: inline-block;
    background: white;
    color: #1c5bba;
    padding: 5px 15px;
}
```

**Résultat attendu :** Les badges restent sur la même ligne mais possèdent un fond blanc, une couleur de texte bleue, et un espacement interne qui les fait ressembler à de petites étiquettes.

### 2.4. Tester

#### Étape 4 — Vérifier le résultat

Ouvrez `tuto-5-css.html` dans le navigateur.

**Résultat attendu :**

L’en-tête possède un arrière-plan coloré et les badges utilisent `inline-block` pour s'afficher correctement côte à côte avec leur propre mise en forme.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-5/tuto-5-css.html' | relative_url}}"
    height="350"
    title="Résultat final du Tuto 5">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une mise en forme combinant les arrière-plans, les espacements et les types d'affichage.

**Vous savez maintenant :** définir un arrière-plan avec `background`, comprendre les différences entre `block`, `inline`, et utiliser `display: inline-block` pour créer des éléments autonomes alignés.

## 4. Glossaire

* **`background`** : propriété qui définit l’arrière-plan d’un élément.
* **`display`** : propriété qui définit le comportement d’affichage d’un élément.
* **`block`** : affichage en tant que bloc, prenant toute la largeur disponible.
* **`inline`** : affichage en ligne, dans le flux du texte.
* **`inline-block`** : affichage en ligne qui permet de définir des dimensions et des marges.
* **`padding`** : espace vide à l'intérieur d'un élément, entre le contenu et la bordure.
