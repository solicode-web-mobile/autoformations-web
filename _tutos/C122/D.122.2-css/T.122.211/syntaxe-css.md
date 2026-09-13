---
title: "Syntaxe CSS"
layout: tuto
slug: "syntaxe-css"
permalink: /tutos/:slug/
tuto_id: "T.122.211"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tuto 1 CSS - Syntaxe CSS</title>
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

Comprendre la structure d’une règle CSS et écrire une règle CSS simple.

À la fin du tutoriel, vous saurez identifier et écrire un sélecteur, une propriété et une valeur CSS.

## 2. Prérequis

* Savoir créer un fichier HTML.
* Savoir ouvrir une page HTML dans un navigateur.
* Savoir utiliser VS Code.

## 3. Données de départ

Code HTML de départ

Utilisez le code suivant :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tuto 1 CSS - Syntaxe CSS</title>
</head>
<body>

    <h1>Mon article</h1>

    <p>Bienvenue sur ma page.</p>

    <p>Voici le contenu de mon article.</p>

</body>
</html>
```

Ce code est la **base de départ** du tutoriel.
Toutes les règles CSS étudiées dans ce tutoriel sont testées sur cette page.

## Partie 1 — Théorie

### 1.1. Une règle CSS

Une règle CSS permet de définir une mise en forme pour un élément HTML.

Elle contient un sélecteur et un bloc de déclarations.

```css
selecteur {
    propriete: valeur;
}
```

**Exemple :**

```css
p {
    color: blue;
}
```

### 1.2. Le sélecteur

Le sélecteur indique l’élément HTML concerné par la règle.

Dans :

```css
p {
    color: blue;
}
```

`p` est le sélecteur.

### 1.3. La propriété

La propriété indique ce que l’on veut modifier.

Dans :

```css
p {
    color: blue;
}
```

`color` est la propriété.

### 1.4. La valeur

La valeur indique le réglage appliqué à la propriété.

Dans :

```css
p {
    color: blue;
}
```

`blue` est la valeur.

### 1.5. La déclaration

Une déclaration associe une propriété et une valeur.

```css
color: blue;
```

### 1.6. Les accolades

Les accolades délimitent les déclarations :

```css
p {
    color: blue;
}
```

### 1.7. À retenir

* Le sélecteur indique ce que l’on cible.
* La propriété indique ce que l’on modifie.
* La valeur indique le réglage choisi.
* Une déclaration contient une propriété et une valeur.
* Une règle CSS contient un sélecteur et des déclarations.

## Partie 2 — Pratique

### 2.1. Ouvrir la page de test

#### Étape 1 — Créer le fichier HTML

Créez le fichier `tuto-1-css.html` et ajoutez-y le code de départ fourni.

### 2.2. Ajouter une règle CSS

#### Étape 2 — Ajouter la balise style

Dans la page HTML, ajoutez une balise `<style>` dans `<head>` contenant la règle CSS :

```html
    <style>
        p {
            color: blue;
        }
    </style>
```

La règle CSS cible tous les paragraphes et les colore en bleu.

### 2.3. Lire la règle

#### Étape 3 — Analyser la règle

Identifiez les éléments de votre code :

```text
p              → sélecteur
color          → propriété
blue           → valeur
color: blue;   → déclaration
```

### 2.4. Tester

#### Étape 4 — Vérifier le rendu

Enregistrez `tuto-1-css.html` et ouvrez-le dans le navigateur.

**Résultat attendu :**

Les paragraphes apparaissent en bleu.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1/tuto-1-css.html' | relative_url}}"
    height="300"
    title="Résultat final du Tuto 1">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une première règle CSS appliquée à une page HTML.

**Vous savez maintenant :** lire une règle CSS, identifier un sélecteur, identifier une propriété, identifier une valeur et écrire une déclaration CSS.

## 4. Glossaire

* **CSS** : langage utilisé pour mettre en forme une page HTML.
* **Règle CSS** : ensemble formé par un sélecteur et des déclarations.
* **Sélecteur** : élément qui indique ce que la règle cible.
* **Propriété** : élément qui indique ce que l’on veut modifier.
* **Valeur** : réglage donné à une propriété.
* **Déclaration** : association d’une propriété et d’une valeur.
