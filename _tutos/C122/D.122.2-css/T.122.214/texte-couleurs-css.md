---
title: "Texte & Couleurs"
layout: tuto
slug: "texte-couleurs"
permalink: /tutos/:slug/
tuto_id: "T.122.214"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 4
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

À la fin du tutoriel, vous saurez modifier la police, la taille, l'épaisseur, le style, l'alignement et la couleur de vos textes.

## 2. Prérequis

* Savoir écrire une règle CSS.
* Savoir utiliser un sélecteur de balise.
* Savoir utiliser un sélecteur de classe.
* Savoir relier une page HTML à une feuille CSS.

## 3. Données de départ

### HTML

Le fichier de départ `tuto-4-css.html` contient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

Le fichier de départ `tuto-4-css.css` contient :

```css
p {
    color: blue;
}
```

Ces données constituent la base de travail du tutoriel.

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

La propriété `background` permet de définir un arrière-plan (couleur, image...).

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

### 2.1. Préparer les fichiers

Créez le fichier HTML et le fichier CSS en y ajoutant les données de départ.

### 2.2. Modifier la police

Dans `tuto-4-css.css`, complétez la règle des paragraphes avec `font-family` :

```css
p {
    color: blue;
    font-family: Arial;
}
```

Rechargez la page. Les paragraphes utilisent la police Arial.

### 2.3. Modifier la taille

Ajoutez `font-size` :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
}
```

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

Les paragraphes apparaissent en gras.

### 2.5. Modifier le style

Ajoutez `font-style` :

```css
p {
    color: blue;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
}
```

Les paragraphes apparaissent en gras et en italique.

### 2.6. Modifier la hauteur de ligne

Ajoutez `line-height` :

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

Le titre est centré, gris foncé et possède un arrière-plan gris clair.

### 2.8. Mettre en forme le texte d’introduction

Ajoutez une règle pour la classe `intro` :

```css
.intro {
    color: #555555;
}
```

Le texte d’introduction utilise une couleur différente de l'autre paragraphe.

### 2.9. Tester le résultat

Enregistrez `tuto-4-css.css` et `tuto-4-css.html`.
Rechargez la page dans le navigateur.

**Résultat attendu :**

La page affiche :
* un titre centré avec un arrière-plan ;
* des paragraphes avec une police définie, plus grands, en gras, en italique, et avec une hauteur de ligne définie ;
* des couleurs différentes selon les textes et les classes.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-4/tuto-4-css.html' | relative_url}}"
    height="350"
    title="Résultat final du Tuto 4">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une mise en forme complète de textes avec les propriétés CSS de typographie, d’alignement et de couleur.

**Vous savez maintenant :** utiliser les propriétés commençant par `font-`, aligner un texte avec `text-align`, appliquer des couleurs hexadécimales, et définir des couleurs de texte ou d'arrière-plan.

## 4. Glossaire

* **Typographie** : mise en forme visuelle du texte.
* **`font-family`** : propriété qui définit la famille de police.
* **`font-size`** : propriété qui définit la taille du texte.
* **`font-weight`** : propriété qui définit l’épaisseur (graisse) du texte.
* **`font-style`** : propriété qui définit le style du texte (ex: italique).
* **`line-height`** : propriété qui définit la hauteur d'une ligne de texte.
* **`text-align`** : propriété qui définit l’alignement horizontal du texte.
* **Couleur hexadécimale** : code de couleur écrit avec une valeur de 6 caractères commençant par `#` (ex: `#333333`).
