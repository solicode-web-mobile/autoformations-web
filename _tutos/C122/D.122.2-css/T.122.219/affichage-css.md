---
title: "Affichage CSS"
layout: tuto
slug: "affichage-css"
permalink: /tutos/:slug/
tuto_id: "T.122.219"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 9
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Affichage CSS avancé</title>
        <link rel="stylesheet" href="tuto-9-css.css">
    </head>
    <body>
        <p>Ce texte contient un élément <span class="cache">caché</span> qui ne s'affiche pas.</p>
        
        <cite class="citation-bloc">
            Cette balise inline est forcée à s'afficher comme un bloc pour sauter à la ligne.
        </cite>
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

Apprendre à manipuler l'affichage des éléments (`display`) pour masquer du contenu ou forcer un élément en ligne (`inline`) à se comporter comme un bloc (`block`).

## 2. Prérequis

* Comprendre la différence entre un élément de type bloc et un élément en ligne.

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Affichage CSS avancé</title>
    <link rel="stylesheet" href="tuto-9-css.css">
</head>
<body>
    <p>Ce texte contient un élément <span class="cache">caché</span> qui ne s'affiche pas.</p>
    
    <cite class="citation-bloc">
        Cette balise inline est forcée à s'afficher comme un bloc pour sauter à la ligne.
    </cite>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Faire disparaître un élément (`display: none`)

Parfois, on souhaite cacher un élément HTML sans le supprimer du code (par exemple, un menu déroulant fermé, ou un message d'erreur qui ne doit s'afficher que s'il y a un problème).
La valeur `none` de la propriété `display` permet de masquer totalement un élément.
```css
.mon-element {
    display: none;
}
```
Attention : l'élément disparaît visuellement **et** l'espace qu'il occupait disparaît également. C'est comme s'il n'existait pas sur la page.

### 1.2. Modifier la nature d'une balise

Le navigateur impose un comportement par défaut. Par exemple, `<span>` ou `<cite>` sont `inline` (ils restent sur la même ligne et on ne peut pas leur donner de marge ou de hauteur).
En CSS, vous êtes le maître. Vous pouvez forcer un élément `inline` à devenir un `block` !
```css
span {
    display: block; /* Le span va maintenant sauter à la ligne et prendre toute la largeur */
}
```

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez `tuto-9-css.html` (collez le HTML de départ) et `tuto-9-css.css` (vide) dans le même dossier.
Si vous ouvrez le HTML sans CSS, vous verrez la phrase avec le mot "caché", et la citation se mettra à la suite ou juste en dessous.

### 2.2. Masquer un élément

Dans le fichier CSS, nous allons cibler le `<span>` qui a la classe `.cache`, et nous allons le faire disparaître du rendu de la page :

```css
.cache {
    display: none;
}
```
*Le mot "caché" disparaît. La phrase devient "Ce texte contient un élément qui ne s'affiche pas."*

### 2.3. Transformer un élément "inline" en "block"

La balise `<cite>` est `inline` par défaut. Nous voulons qu'elle s'affiche clairement en dessous du texte, comme un vrai paragraphe, et lui donner une marge.
Nous allons la cibler via sa classe `.citation-bloc` et forcer son comportement :

```css
.citation-bloc {
    display: block;      /* On force le passage à la ligne */
    margin-top: 20px;    /* Maintenant qu'elle est block, on peut lui donner une marge ! */
    color: gray;
}
```

### 2.4. Tester la page

Enregistrez et ouvrez votre page HTML.

**Résultat attendu :**
Le mot "caché" est totalement invisible et l'espace s'est refermé. La balise `<cite>` s'affiche comme un gros bloc gris, avec une séparation par rapport au texte au-dessus.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-9/tuto-9-css.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel 9">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une modification comportementale de l'affichage HTML via le CSS.

**Vous savez maintenant :** 
- Masquer n'importe quel élément de la page avec `display: none`.
- Écraser la nature "inline" d'une balise pour en faire un "block" manipulable à l'aide de `display: block`.
