---
title: "Sélecteurs"
layout: tuto
slug: "selecteurs"
permalink: /tutos/:slug/
tuto_id: "T.122.213"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 3
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sélecteurs Multiples et Descendants</title>
        <link rel="stylesheet" href="tuto-3-css.css">
    </head>
    <body>
    
        <h1 class="title">Les Sélecteurs</h1>
    
        <div class="article-body">
            <h2>Titre de section</h2>
            <p>Un paragraphe dans le corps de l'article.</p>
            <h3>Sous-titre</h3>
            <p>Un autre paragraphe.</p>
        </div>
    
        <h2>Titre hors article</h2>
        <p>Ce paragraphe n'est pas dans l'article.</p>
    
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

Utiliser les différents types de sélecteurs CSS (classe, multiples et descendants) pour cibler précisément des éléments HTML.

À la fin du tutoriel, vous saurez appliquer un style à une classe spécifique, à plusieurs éléments en même temps, et à des éléments situés à l'intérieur d'un conteneur.

## 2. Prérequis

* Connaître la structure d’une règle CSS.
* Savoir relier une page HTML à une feuille CSS.
* Savoir utiliser VS Code.

## 3. Données de départ

### HTML

Le fichier de départ contient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sélecteurs Multiples et Descendants</title>
    <link rel="stylesheet" href="tuto-3-css.css">
</head>
<body>

    <h1 class="title">Les Sélecteurs</h1>

    <div class="article-body">
        <h2>Titre de section</h2>
        <p>Un paragraphe dans le corps de l'article.</p>
        <h3>Sous-titre</h3>
        <p>Un autre paragraphe.</p>
    </div>

    <h2>Titre hors article</h2>
    <p>Ce paragraphe n'est pas dans l'article.</p>

</body>
</html>
```

Ce code constitue la base de travail du tutoriel.

## Partie 1 — Théorie

### 1.1. Le sélecteur de classe simple

Un sélecteur de classe commence par `.` (un point).

Exemple :

```css
.title {
    color: red;
}
```

Ce sélecteur cible l'élément (ou les éléments) qui possède(nt) l'attribut `class="title"`.

### 1.2. Les sélecteurs groupés (multiples)

Plusieurs sélecteurs peuvent être regroupés en les séparant par une virgule. Cela permet d'appliquer la même règle à plusieurs éléments sans répéter le code.

Exemple :

```css
h2, h3 {
    color: darkblue;
    font-family: Georgia, serif;
}
```

La même règle (couleur et police) est appliquée à tous les `<h2>` et à tous les `<h3>`.

### 1.3. Le sélecteur descendant

Le sélecteur descendant cible un élément contenu à l'intérieur d'un autre élément parent. On sépare les deux sélecteurs par un espace.

Exemple :

```css
.article-body p {
    color: darkgreen;
}
```

Ce sélecteur cible uniquement les balises `<p>` qui se trouvent à l'intérieur d'un élément ayant la classe `article-body`. Les autres balises `<p>` de la page ne sont pas modifiées.

### 1.4. À retenir

* `.title` cible la classe `title`.
* `h2, h3` cible les éléments `<h2>` et `<h3>`.
* `.parent .enfant` cible les éléments `.enfant` situés dans `.parent`.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier HTML

#### Étape 1 — Préparer la page HTML

Créez le fichier `tuto-3-css.html` et copiez le code HTML de départ. Ce fichier fait déjà le lien vers `tuto-3-css.css`.

### 2.2. Utiliser un sélecteur de classe

#### Étape 2 — Cibler le titre principal

Créez le fichier `tuto-3-css.css` et ajoutez une règle pour cibler le titre qui possède la classe `title` :

```css
/* Sélecteur de classe simple */
.title {
    color: red;
}
```

### 2.3. Utiliser les sélecteurs groupés

#### Étape 3 — Mettre en forme les sous-titres

Ajoutez une règle pour cibler tous les titres de niveau 2 et 3 en même temps :

```css
/* Sélecteurs groupés (multiple) */
h2, h3 {
    color: darkblue;
    font-family: Georgia, serif;
}
```

### 2.4. Utiliser un sélecteur descendant

#### Étape 4 — Cibler les paragraphes du corps de l'article

Ajoutez une règle pour cibler uniquement les paragraphes situés dans la `div` qui a la classe `article-body` :

```css
/* Sélecteur descendant (.parent .enfant) */
.article-body p {
    color: darkgreen;
}
```

### 2.5. Tester

#### Étape 5 — Vérifier le résultat

Enregistrez `tuto-3-css.html` et `tuto-3-css.css`, puis ouvrez la page dans votre navigateur.

**Résultat attendu :**

* Le titre `<h1>` est rouge.
* Les titres `<h2>` et `<h3>` sont bleu foncé avec une nouvelle police.
* Les paragraphes à l'intérieur de `.article-body` sont vert foncé.
* Le paragraphe en dehors de `.article-body` (à la fin de la page) reste noir (couleur par défaut).

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-3/tuto-3-css.html' | relative_url}}"
    height="350"
    title="Résultat final du Tuto 3">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une mise en forme ciblant des éléments précis en utilisant différentes méthodes de sélection CSS.

**Vous savez maintenant :** utiliser un sélecteur de classe, regrouper des sélecteurs (sélecteurs multiples), et cibler un élément spécifique à l'intérieur d'un parent (sélecteur descendant).

## 4. Glossaire

* **Sélecteur de classe** : sélecteur CSS qui commence par `.` (ex: `.title`).
* **Sélecteurs multiples** : plusieurs sélecteurs séparés par une virgule pour appliquer une règle commune.
* **Sélecteur descendant** : sélecteur composé de plusieurs éléments séparés par un espace, ciblant un enfant spécifique dans un élément parent.
