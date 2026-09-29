---
title: "Texte & Couleurs"
layout: tuto
slug: "texte-couleurs"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.214"
type: "classique"
version: "detaille"
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

Prendre le contrôle total du rendu typographique (polices websafe, tailles absolues, graisses, rythmes de lecture) et maîtriser l'encodage hexadécimal des couleurs pour un rendu professionnel.

## 2. Prérequis

* Maîtriser le ciblage via les classes CSS (`.ma-classe`).

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

## Partie 1 — Théorie

### 1.1. Les web-safe fonts (`font-family`)

Lorsque vous demandez `font-family: Arial;`, le navigateur cherche cette police *sur l'ordinateur de l'utilisateur*. Si l'utilisateur n'a pas Arial (ex: sur Linux), le navigateur mettra une police par défaut, ce qui casse votre design.
Il faut toujours fournir des **alternatives** (une pile de polices) séparées par des virgules, en terminant par une famille générique (`sans-serif` ou `serif`).
```css
font-family: Arial, Helvetica, sans-serif;
```

### 1.2. Le rythme de lecture (`font-size`, `line-height`)

La lisibilité d'un texte dépend de sa taille et de l'espacement entre ses lignes.
- `font-size: 16px;` : L'unité `px` (pixel) est une unité absolue, très classique.
- `line-height: 1.5;` : Sans unité ! C'est un multiplicateur. Les lignes feront 1.5 fois la taille du texte (ici 24px de haut). C'est le standard pour éviter que les lignes ne s'écrasent.

### 1.3. La colorimétrie Hexadécimale (HEX)

Oubliez `color: blue`. Les écrans sont composés de pixels qui s'allument en **R**ouge, **V**ert et **B**leu (RVB / RGB).
Le code hexadécimal exprime la quantité de lumière pour chaque canal, de `00` (éteint) à `FF` (allumé à fond).

Format : `#RRGGBB`
- `#FF0000` : Rouge à fond, Vert éteint, Bleu éteint → Rouge pur.
- `#000000` : Tout éteint → Noir.
- `#FFFFFF` : Tout allumé → Blanc.
- `#333333` : Un peu de chaque → Gris foncé.

## Partie 2 — Pratique

### 2.1. Préparer les fichiers

Créez `tuto-4-css.html` (collez le HTML) et `tuto-4-css.css` (vide) dans le même dossier.

### 2.2. Sculpter les paragraphes

Dans le fichier CSS, nous allons cibler les paragraphes, leur donner une pile de polices sécurisée, augmenter leur taille, les mettre en gras et italique, et surtout aérer leurs lignes.

```css
p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
}
```

### 2.3. Habiller le titre principal

Utilisons des nuances de gris. Un texte `#333333` (anthracite) sur un fond `#eeeeee` (gris très clair). On va également centrer le texte.

```css
.title {
    text-align: center;
    color: #333333;
    background: #eeeeee;
}
```

### 2.4. Créer un accent visuel

L'introduction doit se démarquer. Ciblage par la classe `.intro` pour appliquer un bleu professionnel personnalisé :

```css
.intro {
    color: #0066cc;
}
```

### 2.5. Vérification

Sauvegardez vos deux fichiers. Ouvrez le fichier HTML.
Observez le contraste entre le titre sur fond gris et le reste de la page. Vérifiez que la classe `.intro` l'emporte bien sur la règle générale des balises `p` (grâce à la spécificité vue au tutoriel 3).

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-4/tuto-4-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 4">
</iframe>

## 4. Bilan

**Vous avez réalisé :** le stylisme approfondi d'une hiérarchie de texte.

**Vous savez maintenant :** 
- Déclarer des *fallback* de polices (web-safe fonts).
- Utiliser le code hexadécimal pour cibler des couleurs précises.
- Régler l'interlignage (`line-height`) pour optimiser l'UX (User Experience).
