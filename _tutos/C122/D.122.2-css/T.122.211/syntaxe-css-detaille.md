---
title: "Syntaxe CSS"
layout: tuto
slug: "syntaxe-css"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.211"
type: "classique"
version: "detaille"
ua: "UA.122.21"
nav_order: 1
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Syntaxe CSS</title>
    </head>
    <body>
        <h1>Mon article</h1>
        <p>Bienvenue sur ma page.</p>
        <p>Voici le contenu de mon article.</p>
    </body>
    </html>
data_css: ""
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

Saisir le rôle du CSS dans l'écosystème web, décortiquer la grammaire stricte d'une feuille de style (sélecteurs, propriétés, valeurs, déclarations), et l'appliquer en interne (`<style>`).

## 2. Prérequis

* Maîtriser l'arborescence et l'anatomie d'un document HTML.
* Distinguer les balises d'en-tête (`<head>`) du corps de page (`<body>`).

## 3. Données de départ

Voici notre fichier HTML brut :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Syntaxe CSS</title>
</head>
<body>
    <h1>Mon article</h1>
    <p>Bienvenue sur ma page.</p>
    <p>Voici le contenu de mon article.</p>
</body>
</html>
```

## Partie 1 — Théorie

### 1.1. Séparation des responsabilités

Dans la conception web moderne, il y a une séparation stricte des rôles :
- Le **HTML** ne doit gérer que la **Sémantique et la Structure** (titres, paragraphes, données, liens).
- Le **CSS** (Cascading Style Sheets) gère exclusivement le **Design et l'Apparence** (couleurs, polices, marges, disposition).

Le CSS dit au navigateur *comment* peindre l'architecture construite par le HTML.

### 1.2. La Grammaire du CSS

Le langage CSS n'utilise pas de balises à chevrons (`<>`) comme le HTML, mais des **règles**. Une règle suit toujours cette anatomie :

```text
selecteur {
    propriete: valeur;
}
```

#### Le Sélecteur
C'est le "qui". Il indique au navigateur à quel(s) élément(s) HTML appliquer les modifications. Par exemple, le sélecteur `p` ciblera *tous* les paragraphes `<p>` de la page.

#### Le bloc d'instructions `{ }`
Les accolades délimitent la zone d'influence de la règle. Tout ce qui est écrit à l'intérieur s'appliquera au sélecteur.

#### La Déclaration (`propriete: valeur;`)
C'est le "quoi" et le "comment".
- La **propriété** est la caractéristique à changer (`color`, `font-size`, `margin`, etc.).
- Les **deux-points `:`** agissent comme un signe égal.
- La **valeur** est l'intensité ou la nature du changement (`red`, `12px`, `bold`).
- Le **point-virgule `;`** est vital. Il indique que l'instruction est terminée. Sans lui, le navigateur plante et la règle suivante ne fonctionnera pas.

## Partie 2 — Pratique

### 2.1. Préparer le document

Dans VS Code, créez `tuto-1-css.html` et collez-y les données de départ.

### 2.2. Intégrer le CSS dans la balise `<style>`

Il existe plusieurs façons d'injecter du CSS. Pour commencer, nous allons utiliser la méthode "interne" : on ajoute une balise HTML `<style>` à l'intérieur du `<head>`. Le navigateur lira ces styles avant d'afficher la page.

Ajoutez cette règle :

```html
<head>
    <meta charset="UTF-8">
    <title>Syntaxe CSS</title>
    
    <style>
        /* Ceci est un commentaire en CSS */
        p {
            color: blue;
        }
    </style>
</head>
```

### 2.3. Tester et observer

Enregistrez et ouvrez `tuto-1-css.html` dans le navigateur.

**Résultat attendu :**
Le navigateur a lu le `<head>`, vu la balise `<style>`, mémorisé la règle `p { color: blue; }`. Puis, en peignant le `<body>`, à chaque fois qu'il a rencontré une balise `<p>`, il a appliqué la couleur bleue. Le `<h1>` n'est pas ciblé, il reste donc avec son apparence par défaut (noir).

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1/tuto-1-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 1">
</iframe>

## 4. Bilan

**Vous avez réalisé :** une injection de style interne qui altère l'affichage du navigateur.

**Vous savez maintenant :** 
- Que le HTML et le CSS ont des rôles strictement séparés.
- Analyser la grammaire CSS (sélecteur, accolades, propriété, deux-points, valeur, point-virgule).
- L'importance cruciale du point-virgule `;` pour clore une déclaration CSS.
