---
title: "Syntaxe CSS"
layout: tuto
slug: "syntaxe-css"
permalink: /tutos/:slug/compact
tuto_id: "T.122.211"
type: "classique"
version: "compact"
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

Appliquer une première règle de style pour colorer du texte en utilisant le CSS de base.

## 2. Prérequis

* Connaître la structure HTML de base.

## Partie 1 — Théorie

Le CSS permet de mettre en forme le HTML. Il fonctionne par **règles** :

```css
selecteur {
    propriete: valeur;
}
```

Exemple pour colorer les paragraphes en bleu :
```css
p {
    color: blue;
}
```
*Ici, `p` est le sélecteur, `color` la propriété, et `blue` la valeur. N'oubliez jamais le point-virgule à la fin.*

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez le fichier `tuto-1-css.html` et collez-y les données de départ.

### 2.2. Ajouter la règle de style

Le CSS peut être inséré directement dans l'en-tête HTML grâce à la balise `<style>`.
Modifiez le `<head>` de votre fichier :

```html
<head>
    <meta charset="UTF-8">
    <title>Syntaxe CSS</title>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

### 2.3. Tester la page

Enregistrez et ouvrez `tuto-1-css.html` dans votre navigateur.

**Résultat attendu :**
Le titre `<h1>` reste noir, mais les deux balises `<p>` sont devenues bleues, car le sélecteur `p` les a toutes ciblées.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1/tuto-1-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 1">
</iframe>

## 3. Bilan

**Vous savez maintenant :** créer une règle CSS (`selecteur { propriete: valeur; }`) et l'intégrer dans un document HTML via la balise `<style>`.
