---
title: "Arrière-plans & Affichage"
layout: tuto
slug: "arriere-plans-affichage-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.215"
type: "classique"
version: "detaille"
ua: "UA.122.21"
nav_order: 5
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Arrière-plans et Affichage</title>
        <link rel="stylesheet" href="tuto-5-css.css">
    </head>
    <body>
        <div class="header">
            <span class="badge">CSS</span>
            <span class="badge">Niveau 1</span>
            <h1>Apprendre le CSS</h1>
        </div>
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

Maîtriser l'une des notions les plus importantes du positionnement web : la propriété `display`. Nous allons également apprendre à gérer l'espacement interne et les arrière-plans.

## 2. Prérequis

* Utilisation des classes et des couleurs en CSS.

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Arrière-plans et Affichage</title>
    <link rel="stylesheet" href="tuto-5-css.css">
</head>
<body>
    <div class="header">
        <span class="badge">CSS</span>
        <span class="badge">Niveau 1</span>
        <h1>Apprendre le CSS</h1>
    </div>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. L'espacement `padding` et le `background`

En CSS, si vous donnez une couleur de fond (`background`) à un élément, par défaut le texte sera collé contre les bords de la couleur.
Pour repousser les bords vers l'extérieur (sans changer la taille du texte), on utilise l'espacement interne : **`padding`**.

```css
.boite {
    background: #000000;
    padding: 20px; /* Ajoute 20px de vide tout autour du texte, à l'intérieur du fond noir */
}
```

### 1.2. Le choc des titans : `block` vs `inline`

Dans la nature du HTML, il y a deux grandes familles d'affichage (`display`) :

1. **Les éléments "Bloc" (`display: block;`)**
   - Ils prennent 100% de la largeur disponible.
   - Ils chassent tout le reste à la ligne suivante.
   - On peut modifier leur largeur (`width`) et hauteur (`height`).
   - *Exemples natifs : `<div>`, `<p>`, `<h1>`, `<ul>`.*

2. **Les éléments "En ligne" (`display: inline;`)**
   - Ils s'écrivent les uns à la suite des autres, sur la même ligne.
   - Ils prennent juste la place de leur texte.
   - **On NE PEUT PAS modifier leur largeur/hauteur ou leurs marges verticales.**
   - *Exemples natifs : `<span>`, `<a>`, `<strong>`.*

### 1.3. La solution miracle : `inline-block`

Comment faire si l'on veut créer plusieurs petits boutons (qui restent sur la même ligne) mais qu'on veut leur donner une hauteur et des marges ?
On utilise la propriété hybride : `display: inline-block;`.
L'élément reste en ligne, mais se comporte comme une boîte à part entière.

## Partie 2 — Pratique

### 2.1. Mise en place

Créez `tuto-5-css.html` (collez le HTML de départ) et `tuto-5-css.css` (vide) dans le même dossier.

### 2.2. Aérer le conteneur principal (Bloc)

La `<div class="header">` est naturellement un bloc. Nous allons lui donner un fond très clair, la centrer et lui ajouter 40px de vide à l'intérieur pour qu'elle respire.

Dans le fichier CSS :
```css
.header {
    background: #f0f6ff;
    padding: 40px;
    text-align: center;
}
```

### 2.3. Créer des composants Badges (`inline-block`)

Regardez le HTML : nos badges sont des `<span>`. Ils sont donc `inline`. Si on leur donnait juste un fond blanc, ils seraient tous écrasés.
Transformons-les en blocs-en-ligne, donnons-leur des couleurs et un `padding` personnalisé (5px en haut/bas, et 15px à gauche/droite pour un format "pilule").

```css
.badge {
    display: inline-block;
    background: white;
    color: #1c5bba;
    padding: 5px 15px;
}
```

### 2.4. Tester l'intelligence du navigateur

Sauvegardez vos fichiers et ouvrez le HTML.

**Résultat attendu :**
L'en-tête bleu clair s'étend d'un bout à l'autre de l'écran (comportement Block).
À l'intérieur, les badges ressemblent à de petits boutons espacés (grâce au padding) qui cohabitent pacifiquement sur la même ligne (comportement Inline-block). 

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-5/tuto-5-css.html' | relative_url}}"
    height="350"
    title="Résultat du tutoriel 5">
</iframe>

## 4. Bilan

**Vous avez réalisé :** la manipulation structurelle d'éléments pour créer des composants (badges) modernes.

**Vous savez maintenant :** 
- Utiliser `background` (fond) et `padding` (vide interne).
- Expliquer pourquoi un `<span>` ne se comporte pas comme une `<div>`.
- Utiliser `display: inline-block;` pour débloquer les dimensions des éléments en ligne.
