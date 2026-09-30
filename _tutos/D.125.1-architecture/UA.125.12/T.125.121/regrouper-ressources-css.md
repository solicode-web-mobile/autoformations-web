---
title: "Regrouper les ressources communes"
layout: tuto
slug: "regrouper-ressources-css"
permalink: /tutos/regrouper-ressources-css/
tuto_id: "T.125.121"
type: "classique"
version: "normal"
ua: "UA.125.12"
nav_order: 1
data_js: ""
data_html: ""
data_css: ""
simplified: true
---

## 1. Objectif

Lorsque votre projet commence à compter plusieurs pages web (ex: `index.html` et `article.html`), le nombre de fichiers de ressources (CSS, Images, JS) augmente rapidement. 
Pour garder une arborescence claire, la seconde règle de l'architecture est de **ranger les fichiers par type** dans des dossiers dédiés.

## Partie 1 — Le problème : l'arborescence chaotique

Imaginez un mini-site avec deux pages et plusieurs fichiers CSS et images déposés en vrac à la racine :

{% include arch-svg.html
   title="Arborescence désorganisée"
   tree="
   mon-projet/|folder|0,
   index.html|file-html|1,
   article.html|file-html|1,
   global.css|file-css|1,
   layout.css|file-css|1,
   logo.png|file|1,
   banniere.jpg|file|1
   "
%}

Si le site grandit avec 50 pages et 200 images, retrouver un fichier deviendra un cauchemar !

## Partie 2 — La solution : Les dossiers de ressources

Pour corriger ce problème, il suffit de créer un dossier `css/` et un dossier `img/` (ou `images/`), et d'y ranger les fichiers correspondants.

Le résultat final doit correspondre à cette arborescence propre :

{% include arch-svg.html
   title="Architecture organisée"
   tree="
   mon-projet/|folder|0,
   css/|folder|1,
   -- global.css|file-css|2,
   -- layout.css|file-css|2,
   img/|folder|1,
   -- logo.png|file|2,
   -- banniere.jpg|file|2,
   index.html|file-html|1,
   article.html|file-html|1
   "
%}

### Réparer les liens cassés

En déplaçant les fichiers dans des sous-dossiers, vos anciens liens (`<link href="global.css">`) ne fonctionneront plus.
Il faut indiquer au navigateur le **chemin relatif** en précisant le dossier parent :

```html
<!-- Avant (fichier à la racine) -->
<link rel="stylesheet" href="global.css">
<img src="logo.png" alt="Logo">

<!-- Après (fichier dans un dossier) -->
<link rel="stylesheet" href="css/global.css">
<img src="img/logo.png" alt="Logo">
```

## Partie 3 — Pratique (Livrable)

**Travail à faire :**
1. À partir du projet précédent, créez une deuxième page web `article.html`.
2. Créez un dossier `css/` et un dossier `img/` à la racine de votre projet.
3. Déplacez vos fichiers CSS dans le dossier `css/`. Séparez éventuellement votre ancien fichier unique en `global.css` (couleurs, polices) et `layout.css` (structure, header/footer).
4. Ajoutez une image de logo et déposez-la dans le dossier `img/`.
5. Modifiez vos balises `<link>` et `<img>` dans vos fichiers HTML pour utiliser les nouveaux **chemins relatifs**.
6. Ouvrez vos deux pages dans le navigateur pour vérifier que les styles et le logo s'affichent correctement.

**Livrable exigé :**
Dans votre dépôt GitHub de livrables, créez un dossier nommé `T.125.121`.
Placez-y l'arborescence complète de votre projet (dossiers `css/`, `img/` et vos fichiers `.html`).
Fournissez **le lien vers ce dossier précis sur GitHub**.

## Bilan

**Vous savez maintenant :**
- Regrouper des ressources par types (`css/`, `img/`).
- Corriger les chemins relatifs après avoir déplacé des fichiers.
- Partager un même fichier CSS entre plusieurs pages HTML.