---
title: "Comprendre la syntaxe CSS"
layout: tuto
slug: "comprendre-syntaxe-css"
permalink: /tutos/:slug/
tuto_id: "T.122.211"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 1
data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>
  </head>
  <body>

      <h1>Mon article</h1>

      <p>Bienvenue sur ma page.</p>

      <p>Voici le contenu de mon article.</p>

  </body>
  </html>

data_css: |
  h1 {
      color: blue;
  }

  p {
      font-size: 18px;
  }

data_js: |
  console.log("Page chargée");
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
    <title>Tuto 1 CSS</title>
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

Ouvrez :

```text
/autoformations-web/code/css/tuto-1-css.html
```

Utilisez cette page pour tester les règles CSS.

### 2.2. Ajouter une règle CSS

Dans la page HTML, ajoutez une balise `<style>` dans `<head>` :

```html
<style>
    p {
        color: blue;
    }
</style>
```

La règle CSS cible tous les paragraphes.

### 2.3. Lire la règle

```css
p {
    color: blue;
}
```

Identifiez :

```text
p              → sélecteur
color          → propriété
blue           → valeur
color: blue;   → déclaration
```

### 2.4. Tester

Enregistrez le fichier puis ouvrez :

```text
/autoformations-web/code/css/tuto-1-css.html
```

Rechargez la page.

**Résultat attendu :**

Les paragraphes apparaissent en bleu.

<iframe
    class="auto-wrapper"
    src="{{'/autoformations-web/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 1">
</iframe>

## Bilan

**Vous avez réalisé :**

Une première règle CSS appliquée à une page HTML.

**Vous savez maintenant :**

* lire une règle CSS ;
* identifier un sélecteur ;
* identifier une propriété ;
* identifier une valeur ;
* écrire une déclaration CSS.

Ce tutoriel prépare les tutoriels suivants et ne produit pas encore d’itération du projet.

## Glossaire

* **CSS** : langage utilisé pour mettre en forme une page HTML.
* **Règle CSS** : ensemble formé par un sélecteur et des déclarations.
* **Sélecteur** : élément qui indique ce que la règle cible.
* **Propriété** : élément qui indique ce que l’on veut modifier.
* **Valeur** : réglage donné à une propriété.
* **Déclaration** : association d’une propriété et d’une valeur.
