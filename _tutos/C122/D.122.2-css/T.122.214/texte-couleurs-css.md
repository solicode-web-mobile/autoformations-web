---
title: "Mettre en forme les textes et les couleurs"
layout: tuto
slug: "mettre-en-forme-textes-couleurs"
permalink: /tutos/:slug/
tuto_id: "T.122.214"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 4
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-4-css.css">
    </head>
    <body>
        <h1 class="title">Mon article</h1>

        <p class="intro">Bienvenue sur ma page.</p>

        <p class="text">Voici le contenu de mon article.</p>

        <p class="text">Cet article présente les sélecteurs CSS.</p>
    </body>
    </html>
data_css: |
    p {
        color: blue;
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

Mettre en forme les textes avec les propriétés CSS de typographie, d’alignement et de couleur.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de balise.
* Savoir utiliser un sélecteur de classe.
* Savoir relier une page HTML à une feuille CSS.

## 3. Données de départ

### HTML

Utilisez le code HTML suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-4-css.css">
</head>
<body>

    <h1 class="title">Mon article</h1>

    <p class="intro">Bienvenue sur ma page.</p>

    <p class="text">Voici le contenu de mon article.</p>

    <p class="text">Cet article présente les sélecteurs CSS.</p>

</body>
</html>
```

### CSS

Utilisez le CSS suivant :

```css
p {
    color: blue;
}
```

## Partie 1 — Théorie

### 1.1. La famille de police

La propriété `font-family` permet de choisir la police du texte.

```css
p {
    font-family: Arial;
}
```

### 1.2. La taille du texte

La propriété `font-size` permet de définir la taille du texte.

```css
p {
    font-size: 18px;
}
```

### 1.3. L’épaisseur du texte

La propriété `font-weight` permet de modifier l’épaisseur du texte.

```css
p {
    font-weight: bold;
}
```

### 1.4. Le style du texte

La propriété `font-style` permet de modifier le style du texte.

```css
p {
    font-style: italic;
}
```

### 1.5. La hauteur de ligne

La propriété `line-height` permet de définir l’espace entre les lignes.

```css
p {
    line-height: 1.6;
}
```

### 1.6. L’alignement du texte

La propriété `text-align` permet de définir l’alignement du texte.

```css
.title {
    text-align: center;
}
```

Exemples :

```css
text-align: left;
text-align: center;
text-align: right;
```

### 1.7. La couleur du texte

La propriété `color` permet de définir la couleur du texte.

```css
p {
    color: blue;
}
```

### 1.8. Les couleurs hexadécimales

Une couleur peut être écrite avec une valeur hexadécimale.

Exemple :

```css
.title {
    color: #333333;
}
```

Une couleur hexadécimale commence par `#`.

Exemples :

```text
#000000
#FFFFFF
#333333
#FF0000
```

### 1.9. La couleur d’arrière-plan

La propriété `background` permet de définir un arrière-plan.

```css
.title {
    background: #eeeeee;
}
```

### 1.10. À retenir

* `font-family` définit la police.
* `font-size` définit la taille.
* `font-weight` définit l’épaisseur.
* `font-style` définit le style.
* `line-height` définit la hauteur des lignes.
* `text-align` définit l’alignement.
* `color` définit la couleur du texte.
* Une couleur peut être écrite avec une valeur hexadécimale.
* `background` définit un arrière-plan.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier CSS

Ouvrez :

```text
tuto-4-css.css
```

Le fichier contient :

```css
p {
    color: blue;
}
```

### 2.2. Modifier la police

Ajoutez la propriété `font-family` :

```css
p {
    color: blue;
    font-family: Arial;
}
```

Rechargez la page.

**Résultat attendu :**

Les paragraphes utilisent la police Arial.

### 2.3. Modifier la taille

Ajoutez `font-size` :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
}
```

**Résultat attendu :**

Les paragraphes sont plus grands.

### 2.4. Modifier l’épaisseur

Ajoutez `font-weight` :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
}
```

**Résultat attendu :**

Les paragraphes apparaissent en gras.

### 2.5. Modifier le style

Ajoutez :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
}
```

**Résultat attendu :**

Les paragraphes apparaissent en gras et en italique.

### 2.6. Modifier la hauteur de ligne

Ajoutez :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
}
```

### 2.7. Mettre en forme le titre

Ajoutez une règle pour la classe `title` :

```css
.title {
    color: #333333;
    text-align: center;
    background: #eeeeee;
}
```

**Résultat attendu :**

Le titre est centré, gris foncé et possède un arrière-plan gris clair.

### 2.8. Mettre en forme le texte d’introduction

Ajoutez :

```css
.intro {
    color: #555555;
}
```

**Résultat attendu :**

Le texte d’introduction utilise une couleur différente.

### 2.9. Tester le résultat

Ouvrez :

```text
tuto-4-css.html
```

Rechargez la page.

**Résultat attendu :**

La page affiche :

* un titre centré ;
* un titre avec un arrière-plan ;
* des paragraphes avec une police définie ;
* des paragraphes plus grands ;
* des paragraphes en gras et en italique ;
* des paragraphes avec une hauteur de ligne définie ;
* des couleurs différentes pour les textes.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-4-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 4">
</iframe>

## Bilan

**Vous avez réalisé :**

La mise en forme des textes avec les propriétés CSS de typographie, d’alignement et de couleur.

**Vous savez maintenant :**

* choisir une police ;
* modifier la taille du texte ;
* modifier son épaisseur ;
* modifier son style ;
* modifier la hauteur de ligne ;
* aligner un texte ;
* utiliser une couleur ;
* utiliser une couleur hexadécimale ;
* définir un arrière-plan.

Ces notions préparent la mise en forme de l’en-tête dans **I1**.

## Glossaire

* **Typographie** : mise en forme visuelle du texte.
* **`font-family`** : propriété qui définit la police.
* **`font-size`** : propriété qui définit la taille du texte.
* **`font-weight`** : propriété qui définit l’épaisseur du texte.
* **`font-style`** : propriété qui définit le style du texte.
* **`line-height`** : propriété qui définit la hauteur des lignes.
* **`text-align`** : propriété qui définit l’alignement du texte.
* **Couleur hexadécimale** : couleur écrite avec une valeur commençant par `#`.
