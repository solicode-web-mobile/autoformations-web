---
title: "Liens & Listes"
layout: tuto
slug: "liens-listes-css"
permalink: /tutos/:slug/
tuto_id: "T.122.216"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 6
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Liens et Listes</title>
        <link rel="stylesheet" href="tuto-6-css.css">
    </head>
    <body>
        <ul class="liste-liens">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
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

Créer un menu de navigation basique en modifiant l'apparence par défaut d'une liste et des liens qu'elle contient.

## 2. Prérequis

* Maîtriser le ciblage descendant (`.parent enfant`).
* Comprendre la différence entre `padding` (intérieur) et `margin` (extérieur).

## 3. Données de départ

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liens et Listes</title>
    <link rel="stylesheet" href="tuto-6-css.css">
</head>
<body>
    <ul class="liste-liens">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Cibler les éléments imbriqués

Pour construire un menu, on utilise une liste `<ul>` contenant des puces `<li>`, qui contiennent des liens `<a>`.
Pour modifier les liens **uniquement** dans ce menu (sans toucher aux autres liens du site), on utilise un **sélecteur descendant** :

```css
.liste-liens a { ... }
```
*Se lit : Les balises `<a>` situées à l'intérieur de `.liste-liens`.*

### 1.2. Marge extérieure : `margin`

Contrairement au `padding` qui aère l'intérieur, la `margin` repousse les éléments **à l'extérieur**.
On peut spécifier un côté précis : `margin-top`, `margin-bottom`, `margin-left`, `margin-right`.

```css
.liste-liens li {
    margin-bottom: 10px; /* Ajoute 10px de vide sous chaque ligne */
}
```

### 1.3. Ajuster le comportement par défaut

Le navigateur applique par défaut un retrait (un `padding-left`) très grand à la balise `<ul>` pour laisser la place aux puces. Nous pouvons le réduire pour que notre menu s'aligne mieux.

```css
.liste-liens {
    padding-left: 20px;
}
```

## Partie 2 — Pratique

### 2.1. Les fichiers

Créez `tuto-6-css.html` (collez le HTML) et `tuto-6-css.css` (vide).

### 2.2. Ajuster la liste (`ul`)

Dans le fichier CSS, réduisons le décalage par défaut de la liste à 20px :

```css
.liste-liens {
    padding-left: 20px;
}
```

### 2.3. Espacer les lignes (`li`)

Pour éviter que les liens ne soient trop serrés, on cible les balises `<li>` de la liste et on ajoute une marge en bas :

```css
.liste-liens li {
    margin-bottom: 10px;
}
```

### 2.4. Changer la couleur des liens (`a`)

Les liens `<a>` ont une couleur bleue très standard par défaut, et sont soulignés. Nous allons changer leur couleur. On utilise le ciblage descendant pour ne pas affecter de futurs autres liens sur la page :

```css
.liste-liens a {
    color: #2673e8; /* Un bleu plus moderne */
}
```

### 2.5. Vérifier le rendu

Enregistrez et ouvrez la page.

**Résultat attendu :**
La liste est un peu moins décalée vers la droite qu'une liste classique. L'espacement vertical entre "Accueil", "Articles" et "Contact" rend la navigation plus claire. La couleur du lien a changé.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-6/tuto-6-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 6">
</iframe>

## 4. Bilan

**Vous avez réalisé :** les prémices d'un menu de navigation vertical.

**Vous savez maintenant :** 
- Cibler en profondeur dans l'arborescence HTML (`.classe parent enfant`).
- Ajuster les espacements par défaut imposés par le navigateur sur la balise `<ul>`.
- Séparer visuellement des blocs avec `margin`.
