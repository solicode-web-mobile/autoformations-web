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

Utiliser les valeurs avancées de la propriété `display` pour masquer des éléments ou forcer un comportement d'affichage différent de celui par défaut.

À la fin du tutoriel, vous saurez masquer un élément avec `display: none` et forcer un élément en ligne à se comporter comme un bloc.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de classe.
* Comprendre la différence par défaut entre un élément `block` et `inline`.

## 3. Données de départ

### HTML

Le fichier `tuto-9-css.html` contient un texte avec un élément `<span>` et une citation `<cite>`.

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

Ces balises `<cite>` et `<span>` sont par défaut des éléments de type `inline` : elles restent sur la ligne.

## Partie 1 — Théorie

### 1.1. Masquer un élément avec `display: none`

La propriété `display` peut prendre la valeur `none`. Cela permet de faire disparaître complètement un élément de la page, comme s'il n'existait pas dans le code HTML.

```css
.cache {
    display: none;
}
```

Contrairement à rendre un élément transparent ou invisible, `display: none` libère également l'espace que l'élément occupait.

### 1.2. Modifier le comportement par défaut

Certains éléments HTML ont un comportement par défaut. Par exemple, un `<span>`, un `<a>` ou un `<cite>` sont `inline`. On ne peut donc pas leur donner de marge verticale ou de largeur facilement.
Il est très courant en CSS de forcer ces éléments à devenir des blocs avec `display: block` pour pouvoir les manipuler comme des `<div>`.

```css
.citation-bloc {
    display: block;
}
```

Une fois devenu un `block`, l'élément va automatiquement passer à la ligne et occuper toute la largeur disponible. On pourra alors lui donner des dimensions et des marges.

### 1.3. À retenir

* `display: none` masque un élément et retire son espace de la page.
* `display: block` force un élément (même s'il est `inline` par défaut) à se comporter comme un bloc et à sauter à la ligne.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez le fichier HTML avec le code de départ fourni, et créez le fichier `tuto-9-css.css`.

Si vous regardez le rendu actuel, la citation s'affiche juste en dessous ou à la suite (selon la largeur de l'écran) et le mot "caché" est visible.

### 2.2. Masquer un élément

Dans `tuto-9-css.css`, ajoutez une règle pour masquer totalement le texte "caché" contenu dans la balise `<span>` de la classe `.cache`.

```css
.cache {
    display: none;
}
```

**Résultat attendu :** Le mot "caché" disparaît de la phrase, et l'espace qu'il occupait se referme.

### 2.3. Transformer un élément en bloc

Ciblez la classe `.citation-bloc`. Par défaut, la balise `<cite>` est un élément en ligne. Nous voulons la transformer en bloc pour qu'elle passe clairement à la ligne et puisse recevoir une marge en haut.

```css
.citation-bloc {
    display: block;
    margin-top: 20px;
    color: gray;
}
```

**Résultat attendu :** La citation se comporte maintenant comme un paragraphe ou une `div`. Elle saute à la ligne et la marge supérieure de `20px` est bien prise en compte.

### 2.4. Tester le résultat

Enregistrez vos fichiers et ouvrez `tuto-9-css.html` dans le navigateur.

**Résultat attendu :**

La phrase ne montre plus le mot "caché", et la citation se positionne clairement en dessous comme un bloc de texte gris.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-9/tuto-9-css.html' | relative_url}}"
    height="250"
    title="Résultat final du Tuto 9">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une modification du comportement d'affichage par défaut d'éléments HTML.

**Vous savez maintenant :** utiliser `display: none` pour masquer entièrement un élément, et utiliser `display: block` pour forcer un élément en ligne à se comporter comme un bloc de contenu.

## 4. Glossaire

* **`display: none`** : valeur retirant complètement l'élément de l'affichage et du flux de la page.
* **Élément `inline` par défaut** : balise HTML (comme `<span>` ou `<cite>`) conçue pour s'insérer dans le texte sans créer de saut de ligne.
* **Forçage en bloc** : action d'appliquer `display: block` à un élément `inline` pour pouvoir le dimensionner et l'espacer plus librement.
