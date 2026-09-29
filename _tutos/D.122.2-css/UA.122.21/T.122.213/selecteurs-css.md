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

Apprendre à cibler très précisément des éléments HTML en utilisant les sélecteurs de classe, les sélecteurs multiples et les sélecteurs descendants.

## 2. Prérequis

* Savoir écrire une règle CSS de base.
* Avoir compris comment lier un fichier HTML et un fichier CSS.

## 3. Données de départ

Voici notre code HTML. Il contient un lien vers le fichier `tuto-3-css.css`, un attribut `class` sur le `<h1>` et une `div` avec une classe `article-body`.

**Fichier HTML :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
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

## Partie 1 — Théorie

Jusqu'ici, nous avons ciblé des balises entières (comme `p`). Mais cela modifie **tous** les paragraphes de la page ! Le CSS propose des sélecteurs plus intelligents.

### 1.1. Le sélecteur de classe

Pour cibler uniquement les éléments portant un attribut `class` spécifique, on écrit un **point `.`** suivi du nom de la classe.

```css
.title {
    color: red;
}
```
Ce code affectera uniquement les balises qui ont `class="title"`.

### 1.2. Les sélecteurs groupés (multiples)

Si vous voulez appliquer exactement le même style à deux éléments différents (ex: les `<h2>` et les `<h3>`), séparez-les par une **virgule `,`**.

```css
h2, h3 {
    color: blue;
}
```

### 1.3. Le sélecteur descendant

Parfois, vous voulez cibler un paragraphe, mais **uniquement** s'il est situé à l'intérieur d'un certain bloc. Pour cela, on écrit le sélecteur du parent, suivi d'un **espace**, puis le sélecteur de l'enfant.

```css
.article-body p {
    color: green;
}
```
Ici, on cible : "les paragraphes `<p>` situés à l'intérieur de `.article-body`". Les autres paragraphes de la page ne seront pas affectés.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez `tuto-3-css.html` et collez les données de départ.
Créez également un fichier vide nommé `tuto-3-css.css` dans le même dossier.

### 2.2. Utiliser un sélecteur de classe

Dans votre fichier CSS, ciblez la classe `.title` (le gros titre de la page) pour la mettre en rouge :

```css
.title {
    color: red;
}
```

### 2.3. Utiliser les sélecteurs groupés

Ensuite, ciblez à la fois les titres de niveau 2 (`h2`) et de niveau 3 (`h3`) pour les mettre en bleu :

```css
h2, h3 {
    color: blue;
}
```

### 2.4. Utiliser un sélecteur descendant

Enfin, ciblez uniquement les paragraphes situés dans la `div` "article-body" pour les mettre en vert :

```css
.article-body p {
    color: green;
}
```

### 2.5. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML dans le navigateur.

**Résultat attendu :**

* Le titre principal "Les Sélecteurs" est rouge (grâce à sa classe `.title`).
* Tous les `<h2>` et `<h3>` sont bleus (grâce au sélecteur groupé).
* Les deux paragraphes dans la div sont verts.
* Le dernier paragraphe, qui est en dehors de la div, est resté de la couleur par défaut (noir) !

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-3/tuto-3-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 3">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une page web avec des styles appliqués de manière ciblée, sans impacter le reste du document.

**Vous savez maintenant :** 
- Utiliser un sélecteur de classe avec un point (`.ma-classe`).
- Grouper des sélecteurs avec une virgule (`h1, h2`).
- Créer une règle de descendance avec un espace (`.parent enfant`).
