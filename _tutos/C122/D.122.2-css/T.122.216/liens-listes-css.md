---
title: "Mettre en forme les liens et les listes en CSS"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/
tuto_id: "T.122.216"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 6

data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-6-css.css">
    </head>
    <body>
        <h1>Mon article</h1>

        <p>Bienvenue sur ma page.</p>

        <p>
            Consultez
            <a href="#">notre documentation</a>
            pour en savoir plus.
        </p>

        <h2>Les étapes</h2>

        <ul>
            <li>Préparer le contenu</li>
            <li>Créer la page</li>
            <li>Ajouter les styles</li>
        </ul>
    </body>
    </html>

data_css: |
    a {
        color: blue;
    }

    ul {
        margin: 20px;
        padding-left: 30px;
    }

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

Mettre en forme les liens et les listes avec CSS.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de balise.
* Savoir utiliser `color`.
* Savoir utiliser `margin`.
* Connaître la structure d’une page HTML.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html id="n4a8q6"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-6-css.css">
</head>
<body>

    <h1>Mon article</h1>

    <p>Bienvenue sur ma page.</p>

    <p>
        Consultez
        <a href="#">notre documentation</a>
        pour en savoir plus.
    </p>

    <h2>Les étapes</h2>

    <ul>
        <li>Préparer le contenu</li>
        <li>Créer la page</li>
        <li>Ajouter les styles</li>
    </ul>

</body>
</html>
```

### CSS

Utilisez le code CSS suivant :

```css id="o5a1c3"
a {
    color: blue;
}

ul {
    margin: 20px;
    padding-left: 30px;
}
```

## Partie 1 — Théorie

### 1.1. Le sélecteur `a`

Le sélecteur `a` cible les liens HTML.

Exemple :

```css id="z6nq7k"
a {
    color: blue;
}
```

Il cible les éléments :

```html id="3b9v7s"
<a href="#">notre documentation</a>
```

### 1.2. Le sélecteur `ul`

Le sélecteur `ul` cible une liste non ordonnée.

```css id="f0smr4"
ul {
    margin: 20px;
}
```

### 1.3. Le sélecteur `li`

Le sélecteur `li` cible les éléments d’une liste.

Exemple :

```css id="4v49cq"
li {
    color: #333333;
}
```

### 1.4. La propriété `margin`

`margin` permet de créer un espace autour d’un élément.

Exemple :

```css id="q8r5j2"
ul {
    margin: 20px;
}
```

### 1.5. La propriété `padding-left`

`padding-left` permet de créer un espace à gauche à l’intérieur d’un élément.

Exemple :

```css id="x9w7ke"
ul {
    padding-left: 30px;
}
```

### 1.6. À retenir

* `a` cible les liens.
* `ul` cible une liste.
* `li` cible un élément de liste.
* `margin` crée un espace autour d’un élément.
* `padding-left` crée un espace à gauche à l’intérieur d’un élément.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier CSS

Ouvrez :

```text
tuto-6-css.css
```

### 2.2. Mettre en forme le lien

Ajoutez :

```css id="5h3z1b"
a {
    color: #0066cc;
}
```

**Résultat attendu :**

Le lien apparaît avec la couleur choisie.

### 2.3. Ajouter un espace autour de la liste

Ajoutez :

```css id="h7k2q9"
ul {
    margin: 20px;
}
```

**Résultat attendu :**

Un espace apparaît autour de la liste.

### 2.4. Modifier l’espace intérieur

Ajoutez :

```css id="b9x4st"
ul {
    margin: 20px;
    padding-left: 30px;
}
```

**Résultat attendu :**

Le contenu de la liste est décalé vers la droite.

### 2.5. Mettre en forme les éléments de la liste

Ajoutez :

```css id="p6d8wm"
li {
    color: #333333;
}
```

**Résultat attendu :**

Les éléments de la liste utilisent la couleur définie.

### 2.6. Tester

Ouvrez :

```text
tuto-6-css.html
```

Rechargez la page.

**Résultat attendu :**

La page contient :

* un lien mis en forme ;
* une liste avec une marge ;
* un espace intérieur à gauche ;
* des éléments de liste mis en forme.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-6-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 6">
</iframe>

## Bilan

**Vous avez réalisé :**

La mise en forme de liens et de listes avec CSS.

**Vous savez maintenant :**

* cibler un lien avec `a` ;
* cibler une liste avec `ul` ;
* cibler un élément de liste avec `li` ;
* utiliser `margin` ;
* utiliser `padding-left`.

Ces notions préparent la mise en forme du contenu de la page dans **I3**.

## Glossaire

* **Lien** : élément HTML qui permet d’accéder à une autre page ou ressource.
* **Liste non ordonnée** : liste créée avec `<ul>`.
* **Élément de liste** : élément créé avec `<li>`.
* **`margin`** : espace extérieur autour d’un élément.
* **`padding-left`** : espace intérieur situé à gauche d’un élément.
