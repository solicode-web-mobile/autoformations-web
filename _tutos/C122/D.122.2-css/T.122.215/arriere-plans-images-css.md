---
title: "Utiliser les arrière-plans et display en CSS"
layout: tuto
slug: "arriere-plans-display-css"
permalink: /tutos/:slug/
tuto_id: "T.122.215"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 5

data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-5-css.css">
    </head>
    <body>
        <header class="article-header">
            <span class="category">Développement web</span>
            <h1>Créer une page web</h1>
            <p class="author">Par Madani Ali</p>
            <p class="description">Découvrez les bases pour créer une page web.</p>
        </header>
    </body>
    </html>

data_css: |
    p {
        color: blue;
    }

data_js: ""

data_php: ""
---


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

Utiliser `background` et `display` pour modifier l’arrière-plan et l’affichage des éléments.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de classe.
* Savoir utiliser `color`.
* Savoir utiliser `font-family`.
* Savoir utiliser `font-size`.
* Savoir utiliser `font-weight`.
* Savoir utiliser `font-style`.
* Savoir utiliser `line-height`.
* Savoir utiliser `text-align`.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-5-css.css">
</head>
<body>

    <header class="article-header">
        <span class="category">Développement web</span>

        <h1>Créer une page web</h1>

        <p class="author">Par Madani Ali</p>

        <p class="description">
            Découvrez les bases pour créer une page web.
        </p>
    </header>

</body>
</html>
```

### CSS

Utilisez le code CSS suivant :

```css
.article-header {
    background: #eeeeee;
    text-align: center;
}

.category {
    display: inline-block;
}
```

## Partie 1 — Théorie

### 1.1. La propriété `background`

La propriété `background` permet de définir l’arrière-plan d’un élément.

Exemple :

```css
.article-header {
    background: #eeeeee;
}
```

Ici, l’arrière-plan de `.article-header` devient gris clair.

### 1.2. Le type `block`

Un élément `block` occupe normalement toute la largeur disponible.

Des éléments HTML comme `<h1>` et `<p>` sont généralement des éléments de type `block`.

Exemple :

```css
h1 {
    display: block;
}
```

### 1.3. Le type `inline`

Un élément `inline` reste sur la même ligne que les autres éléments.

Exemple :

```css
.category {
    display: inline;
}
```

### 1.4. Le type `inline-block`

`inline-block` permet à un élément de rester sur la même ligne tout en conservant des caractéristiques d’un bloc.

Exemple :

```css
.category {
    display: inline-block;
}
```

### 1.5. Comparer les trois valeurs

```css
display: block;
display: inline;
display: inline-block;
```

Ces valeurs permettent de modifier le comportement d’un élément dans la page.

### 1.6. À retenir

* `background` définit l’arrière-plan.
* `display: block` affiche un élément comme un bloc.
* `display: inline` affiche un élément sur la ligne.
* `display: inline-block` permet un affichage en ligne avec des caractéristiques de bloc.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier CSS

Ouvrez :

```text
tuto-5-css.css
```

### 2.2. Modifier l’arrière-plan

Ajoutez une couleur d’arrière-plan à l’en-tête :

```css
.article-header {
    background: #eeeeee;
    text-align: center;
}
```

**Résultat attendu :**

L’en-tête possède un arrière-plan gris clair.

### 2.3. Modifier l’affichage de la catégorie

Utilisez :

```css
.category {
    display: inline-block;
}
```

**Résultat attendu :**

La catégorie utilise un affichage `inline-block`.

### 2.4. Tester les différents affichages

Testez :

```css
.category {
    display: block;
}
```

Puis :

```css
.category {
    display: inline;
}
```

Puis :

```css
.category {
    display: inline-block;
}
```

Observez les différences.

### 2.5. Résultat final du tutoriel

Le résultat final du tutoriel utilise :

```css
.article-header {
    background: #eeeeee;
    text-align: center;
}

.category {
    display: inline-block;
}
```

**Résultat attendu :**

L’en-tête possède un arrière-plan et la catégorie utilise `inline-block`.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-5-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 5">
</iframe>

## Partie 3 — Développement progressif

### 3.1. Développer l’itération I1

**Série :** Page détail

**Position :** I1 sur I3

**Incrément :** En-tête de l’article

Utilisez les notions étudiées dans ce tutoriel pour construire l’en-tête de la page de détail.

L’en-tête doit présenter :

* un arrière-plan ;
* une catégorie ;
* un titre ;
* un auteur ;
* une description ;
* un alignement cohérent ;
* un affichage `inline-block` pour la catégorie.

Conservez les notions disponibles dans les tutoriels précédents.

Ne pas utiliser les notions des tutoriels suivants.

### 3.2. Résultat attendu

L’en-tête de l’article présente une première version proche du rendu final.

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-html-v1.tuto-5-css.html' | relative_url}}"
    height="700"
    title="Résultat final de l'itération I1">
</iframe>

### 3.3. Livrable

Une première version de l’en-tête de la page de détail.

### 3.4. Critère de réussite

L’en-tête :

* possède un arrière-plan ;
* contient une catégorie ;
* contient un titre ;
* contient un auteur ;
* contient une description ;
* présente un alignement cohérent ;
* utilise `display: inline-block` pour la catégorie.

## Bilan

**Vous avez réalisé :**

Une mise en forme utilisant `background` et `display`.

**Vous savez maintenant :**

* définir un arrière-plan ;
* utiliser `display: block` ;
* utiliser `display: inline` ;
* utiliser `display: inline-block`.

**Vous avez également commencé l’itération I1 de la page de détail.**

## Glossaire

* **`background`** : propriété qui définit l’arrière-plan d’un élément.
* **`display`** : propriété qui définit le mode d’affichage d’un élément.
* **`block`** : affichage d’un élément comme un bloc.
* **`inline`** : affichage d’un élément sur la ligne.
* **`inline-block`** : affichage en ligne avec des caractéristiques de bloc.
