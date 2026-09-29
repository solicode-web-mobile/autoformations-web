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
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-4-css.css">
    </head>
    <body>
        <h1 class="title">Mon article</h1>
        <p class="intro">Bienvenue sur ma page.</p>
        <p class="text">Voici le contenu de mon article.</p>
        <p class="text">Cet article présente le CSS.</p>
    </body>
    </html>
data_css: |
    p {
        color: blue;
    }
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

Apprendre à mettre en forme vos textes en manipulant la typographie (polices, tailles, graisses) et les couleurs.

## 2. Prérequis

* Savoir cibler des éléments HTML (balises et classes) depuis un fichier CSS.

## 3. Données de départ

**Code HTML de départ :**
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
    <p class="text">Cet article présente le CSS.</p>
</body>
</html>
```

**Code CSS de départ :**
```css
p {
    color: blue;
}
```

## Partie 1 — Théorie

### 1.1. La Typographie (`font-*`)

Le CSS propose un ensemble de propriétés commençant par `font-` pour gérer l'apparence des caractères :
* `font-family` : La police d'écriture (ex: `Arial`, `Helvetica`, `Times New Roman`).
* `font-size` : La taille du texte (généralement en pixels, ex: `16px`).
* `font-weight` : L'épaisseur ou la graisse du texte (ex: `normal`, `bold` pour gras).
* `font-style` : Le style du texte (ex: `italic` pour italique).

### 1.2. L'alignement (`text-align`)

Par défaut, le texte est aligné à gauche. Vous pouvez modifier cela avec `text-align` :
* `left` : à gauche.
* `center` : centré.
* `right` : à droite.
* `justify` : justifié (les lignes prennent toute la largeur disponible).

### 1.3. La hauteur de ligne (`line-height`)

Pour aérer vos paragraphes et les rendre plus lisibles, on augmente l'espace entre les lignes.
* `line-height: 1.5;` : L'espace sera de 1,5 fois la taille du texte (valeur recommandée pour le web).

### 1.4. Les couleurs Hexadécimales

Jusqu'ici nous utilisions des noms de couleurs en anglais (`red`, `blue`). Mais il n'y a que 140 noms reconnus !
Pour avoir des millions de nuances, les développeurs web utilisent le code **Hexadécimal** : un dièse `#` suivi de 6 caractères (chiffres de 0 à 9 et lettres de A à F).
* `#000000` : Noir pur.
* `#FFFFFF` : Blanc pur.
* `#FF0000` : Rouge pur.
* `#333333` : Gris très foncé (souvent utilisé à la place du noir pour adoucir la lecture).

On l'utilise pour le texte (`color: #...;`) ou pour l'arrière-plan (`background: #...;`).

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Dans VS Code, créez `tuto-4-css.html` et `tuto-4-css.css`. Collez-y les données de départ.

### 2.2. Modifier les paragraphes

Dans `tuto-4-css.css`, modifiez la règle ciblant les paragraphes `p` pour qu'ils soient en Arial, taille 18px, et bien espacés. (Remplacez la couleur bleue par du texte en gras et italique) :

```css
p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
}
```
*Note : on ajoute `, sans-serif` en deuxième choix au cas où l'ordinateur ne posséderait pas la police Arial.*

### 2.3. Habiller le titre

Ajoutez une règle ciblant la classe `.title` pour le centrer, le mettre en gris foncé, sur un fond gris clair :

```css
.title {
    text-align: center;
    color: #333333;
    background: #eeeeee;
}
```

### 2.4. Distinguer l'introduction

Ajoutez une règle pour la classe `.intro` afin de lui donner une couleur différente du reste du texte :

```css
.intro {
    color: #0066cc; /* Un bleu plus doux */
}
```

### 2.5. Tester la page

Enregistrez les deux fichiers et ouvrez le HTML dans le navigateur.

**Résultat attendu :**
Le titre est centré et mis en valeur. Les paragraphes sont devenus imposants (gras, italique, 18px). Le premier paragraphe (intro) prend la couleur bleue, tandis que les autres restent noirs.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-4/tuto-4-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 4">
</iframe>

## 4. Bilan

**Vous avez réalisé :** la mise en page typographique d'un article, digne d'un véritable site web.

**Vous savez maintenant :** 
- Manipuler la famille de propriétés `font-*`.
- Aligner du texte et aérer les lignes (`text-align`, `line-height`).
- Utiliser la précision chirurgicale des codes de couleur hexadécimaux (`#RRGGBB`).
