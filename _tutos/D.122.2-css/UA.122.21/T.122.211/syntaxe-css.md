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

Comprendre la structure d’une règle CSS et écrire une première règle simple pour modifier l'apparence d'une page HTML.

## 2. Prérequis

* Savoir créer un fichier HTML de base.
* Savoir ce qu'est une balise HTML.

## 3. Données de départ

Voici notre fichier HTML de base. Il contient un titre et deux paragraphes :

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

### 1.1. À quoi sert le CSS ?

Le **HTML** sert à structurer le contenu (le fond). Le **CSS** (Cascading Style Sheets) sert à le mettre en forme (la forme : couleurs, tailles, positions).

### 1.2. L'anatomie d'une règle CSS

Le code CSS est constitué de **règles**. Une règle explique au navigateur comment afficher un élément précis.

Voici la structure type d'une règle CSS :

```css
selecteur {
    propriete: valeur;
}
```

- **Le sélecteur** : indique "quel élément" on veut modifier dans la page (ex: `p` pour cibler tous les paragraphes).
- **Les accolades `{ }`** : elles encadrent les modifications que l'on veut appliquer.
- **La propriété** : ce que l'on veut changer (ex: `color` pour la couleur du texte, `background` pour l'arrière-plan).
- **La valeur** : le réglage appliqué (ex: `blue`, `red`).
- **Le point-virgule `;`** : très important, il marque la fin d'une consigne (on appelle le duo *propriété: valeur* une **déclaration**).

Exemple concret :
```css
p {
    color: blue;
}
```
*Traduction littérale : "Pour tous les éléments `<p>`, définis la couleur du texte à bleu."*

## Partie 2 — Pratique

### 2.1. Préparer le fichier

Créez le fichier `tuto-1-css.html` dans VS Code et collez-y les données de départ.

### 2.2. Ajouter du CSS dans le HTML

Pour l'instant, nous allons écrire notre CSS directement dans le fichier HTML, à l'intérieur de la balise `<head>`.
Pour cela, nous utilisons la balise spéciale `<style>`.

Ajoutez ce bloc dans le `<head>` de votre page :

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

Enregistrez le fichier `tuto-1-css.html` et ouvrez-le dans votre navigateur.

**Résultat attendu :**

Vous devriez voir que le titre reste noir (car il est dans une balise `<h1>`), mais que les deux paragraphes sont devenus bleus. La règle CSS s'est appliquée automatiquement à tous les sélecteurs correspondants.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1/tuto-1-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 1">
</iframe>

## 4. Bilan

**Vous avez réalisé :** votre première mise en forme CSS.

**Vous savez maintenant :** 
- Que le CSS sert à la présentation visuelle.
- Composer une règle CSS valide avec un **sélecteur**, une **propriété** et une **valeur**.
- Placer du CSS dans la balise `<style>` du document HTML.
