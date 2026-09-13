---
title: "Utiliser les sélecteurs CSS"
layout: tuto
slug: "utiliser-selecteurs-css"
permalink: /tutos/:slug/
tuto_id: "T.122.213"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.21"
nav_order: 3
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
        <link rel="stylesheet" href="tuto-3-css.css">
    </head>
    <body>
        <h1 class="title">Mon article</h1>

        <p class="intro">Bienvenue sur ma page.</p>

        <p class="text">Voici le contenu de mon article.</p>

        <p class="text">Cet article présente les sélecteurs CSS.</p>
    </body>
    </html>
data_css: |
    p {
        color: blue;
    }
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

Utiliser les sélecteurs CSS pour cibler des éléments HTML.

## 2. Prérequis

* Connaître la structure d’une règle CSS.
* Savoir relier une page HTML à une feuille CSS.
* Savoir utiliser VS Code.

## 3. Données de départ

Les données de départ

### HTML

Le fichier de départ contient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon article</title>
    <link rel="stylesheet" href="tuto-3-css.css">
</head>
<body>

    <h1 class="title">Mon article</h1>

    <p class="intro">Bienvenue sur ma page.</p>

    <p class="text">Voici le contenu de mon article.</p>

    <p class="text">Cet article présente les sélecteurs CSS.</p>

</body>
</html>
```

### CSS

Le CSS de départ contient :

```css
p {
    color: blue;
}
```

Ces données constituent la base de travail du tutoriel.

## Partie 1 — Théorie

### 1.1. Le sélecteur de balise

Un sélecteur de balise utilise le nom d’un élément HTML.

Exemple :

```css
p {
    color: blue;
}
```

Le sélecteur `p` cible tous les éléments `<p>`.

### 1.2. Le sélecteur de classe

Un sélecteur de classe commence par `.`.

Exemple :

```css
.title {
    color: red;
}
```

Ce sélecteur cible les éléments qui possèdent :

```html
class="title"
```

Exemple :

```html
<h1 class="title">Mon article</h1>
```

Le sélecteur `.title` cible cet élément.

### 1.3. Utiliser plusieurs sélecteurs

Plusieurs sélecteurs peuvent être regroupés avec une virgule.

Exemple :

```css
h1,
p {
    color: blue;
}
```

La même règle est appliquée aux `<h1>` et aux `<p>`.

### 1.4. À retenir

* `p` cible les balises `<p>`.
* `.title` cible la classe `title`.
* Une classe commence par `.` en CSS.
* Plusieurs sélecteurs peuvent être séparés par une virgule.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier HTML

Ouvrez :

```text
tuto-3-css.html
```

Utilisez les données de départ du tutoriel.

### 2.2. Tester le sélecteur de balise

Le CSS de départ contient :

```css
p {
    color: blue;
}
```

Tous les paragraphes sont donc ciblés.

Rechargez la page.

**Résultat attendu :**

Les trois paragraphes sont bleus.

### 2.3. Cibler une classe

Ajoutez une nouvelle règle dans :

```text
tuto-3-css.css
```

Écrivez :

```css
.title {
    color: red;
}
```

Rechargez la page.

**Résultat attendu :**

Le titre devient rouge.

Les paragraphes restent bleus.

### 2.4. Cibler une autre classe

Ajoutez :

```css
.intro {
    color: green;
}
```

Rechargez la page.

**Résultat attendu :**

Le premier paragraphe devient vert.

Les deux autres paragraphes restent bleus.

### 2.5. Utiliser plusieurs sélecteurs

Ajoutez une règle pour cibler le titre et les paragraphes :

```css
h1,
p {
    font-family: Arial;
}
```

La même propriété est appliquée aux deux types d’éléments.

### 2.6. Tester

Ouvrez :

```text
tuto-3-css.html
```

Rechargez la page.

**Résultat attendu :**

Le résultat final doit montrer :

* un titre rouge ;
* un premier paragraphe vert ;
* les autres paragraphes bleus ;
* une même police utilisée pour le titre et les paragraphes.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-3-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 3">
</iframe>

## Bilan

**Vous avez réalisé :**

Une mise en forme avec des sélecteurs de balise, de classe et plusieurs sélecteurs.

**Vous savez maintenant :**

* cibler une balise HTML ;
* cibler une classe ;
* écrire un sélecteur de classe ;
* utiliser plusieurs sélecteurs dans une même règle CSS.

Ces notions seront utilisées dans les prochaines étapes pour mettre en forme la page de détail.

## Glossaire

* **Sélecteur** : élément CSS qui indique ce que l’on veut cibler.
* **Sélecteur de balise** : sélecteur qui utilise le nom d’une balise HTML.
* **Classe** : nom ajouté à un élément HTML pour pouvoir le cibler.
* **Sélecteur de classe** : sélecteur CSS qui commence par `.`.
* **Sélecteurs multiples** : plusieurs sélecteurs regroupés dans une même règle CSS.
