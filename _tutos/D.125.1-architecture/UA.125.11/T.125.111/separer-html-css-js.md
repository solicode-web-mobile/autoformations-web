---
title: "Séparer le HTML, CSS et JavaScript"
layout: tuto
slug: "separer-html-css-js"
permalink: /tutos/separer-html-css-js/
tuto_id: "T.125.111"
type: "classique"
version: "normal"
ua: "UA.125.11"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

L'architecture d'un projet web commence par une règle d'or : **La Séparation des Préoccupations** (Separation of Concerns).
Dans ce tutoriel, vous allez apprendre à extraire le style et le comportement d'une page web vers des fichiers dédiés pour rendre votre code propre et maintenable.

## Partie 1 — Le problème : le code "Plat"

Imaginez un projet web dont tout le code est concentré dans un seul fichier `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <!-- MAUVAISE PRATIQUE : CSS dans le HTML -->
    <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; }
    </style>
</head>
<body>
    <h1>Mon article</h1>
    <p>Bienvenue sur ma page.</p>

    <!-- MAUVAISE PRATIQUE : JS dans le HTML -->
    <script>
        console.log("JavaScript chargé.");
    </script>
</body>
</html>
```

Mélanger les langages rend le fichier illisible, empêche de réutiliser le style sur d'autres pages, et rend le travail en équipe (un designer sur le CSS, un dev sur le JS) impossible.

## Partie 2 — La solution : L'architecture découpée

Pour structurer ce projet proprement, nous devons séparer chaque "préoccupation" dans son propre fichier.
Le résultat final doit correspondre à cette arborescence :

{% include arch-svg.html
   title="Architecture séparée"
   tree="
   mon-projet/|folder|0,
   index.html|file-html|1,
   style.css|file-css|1,
   script.js|file-js|1
   "
%}

### Comment relier ces fichiers ?

Une fois séparés, le fichier HTML agit comme le chef d'orchestre qui appelle ses musiciens :

**Pour lier le fichier CSS** (à placer dans le `<head>`) :
```html
<link rel="stylesheet" href="style.css">
```

**Pour lier le fichier JavaScript** (à placer à la fin du `<body>` ou dans le `<head>` avec l'attribut `defer`) :
```html
<script src="script.js" defer></script>
```

## Partie 3 — Pratique (Livrable)

**Travail à faire :**
1. Créez un dossier de projet vide.
2. Recréez le code "Plat" fourni dans la Partie 1 dans un fichier `index.html`.
3. Séparez correctement le CSS dans un nouveau fichier `style.css`.
4. Séparez correctement le JavaScript dans un nouveau fichier `script.js`.
5. Modifiez votre `index.html` pour lier proprement les deux nouveaux fichiers.
6. Ouvrez `index.html` dans votre navigateur pour vérifier que le style s'applique bien et que le message JavaScript s'affiche dans la console.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.111`.
Placez-y l'arborescence complète de votre projet (`index.html`, `style.css`, `script.js`).
Fournissez **le lien vers ce dossier précis sur GitHub**.

*(L'évaluation portera strictement sur la présence des 3 fichiers distincts et le bon usage des balises `<link>` et `<script>`)*.

## Bilan

**Vous savez maintenant :**
- que chaque langage (HTML, CSS, JS) doit avoir son propre fichier ;
- utiliser la balise `<link>` pour importer du style ;
- utiliser la balise `<script>` pour importer du comportement.

La première règle de l'architecture est acquise ! Dans le prochain tutoriel, nous apprendrons à organiser ces fichiers dans des dossiers (pour les projets plus volumineux).