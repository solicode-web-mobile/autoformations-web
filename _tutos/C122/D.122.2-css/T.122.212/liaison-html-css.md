---
title: "Liaison HTML–CSS"
layout: tuto
slug: "liaison-html-css"
permalink: /tutos/:slug/
tuto_id: "T.122.212"
type: "classique"
version: "normal"
ua: "UA.122.21"
nav_order: 2
data_html: | 
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tuto 2 CSS</title>
    </head>
    <body>
    
        <h1>Mon article</h1>
    
        <p>Bienvenue sur ma page.</p>
    
        <p>Voici le contenu de mon article.</p>
    
    </body>
    </html>
data_css: |
    p {
        color: blue;
    }
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

Comprendre comment relier une page HTML à une feuille CSS externe.

À la fin du tutoriel, vous saurez créer un fichier CSS et le lier à une page HTML à l'aide de la balise `<link>`.

## 2. Prérequis

* Savoir créer une page HTML.
* Connaître la structure d’une règle CSS.
* Savoir modifier un fichier dans VS Code.

## 3. Données de départ

### HTML

Le HTML de départ contient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tuto 2 CSS</title>
</head>
<body>

    <h1>Mon article</h1>

    <p>Bienvenue sur ma page.</p>

    <p>Voici le contenu de mon article.</p>

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
Le HTML et le CSS seront utilisés pour tester la liaison entre les deux fichiers.

## Partie 1 — Théorie

### 1.1. Le CSS inline

Le CSS peut être écrit directement dans une balise HTML.

```html
<p style="color: blue;">
    Bienvenue sur ma page.
</p>
```

Le style est placé dans l’attribut `style`.

### 1.2. Le CSS interne

Le CSS peut être placé dans une balise `<style>`.

```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

Le CSS reste dans le fichier HTML.

### 1.3. Le CSS externe

Le CSS peut être placé dans un fichier séparé.

Exemple :

```text
tuto-2-css.css
```

La page HTML utilise ensuite :

```html
<link rel="stylesheet" href="tuto-2-css.css">
```

La balise `<link>` crée la liaison entre HTML et CSS.

### 1.4. Les attributs de `link`

Dans :

```html
<link rel="stylesheet" href="tuto-2-css.css">
```

* `link` crée une liaison ;
* `rel="stylesheet"` indique une feuille CSS ;
* `href` indique le fichier CSS.

### 1.5. À retenir

* Le CSS inline est écrit dans une balise HTML.
* Le CSS interne est écrit dans `<style>`.
* Le CSS externe est placé dans un fichier CSS.
* `<link>` permet de relier HTML et CSS.
* `href` indique le fichier CSS.

## Partie 2 — Pratique

### 2.1. Ouvrir le fichier HTML

#### Étape 1 — Préparer la page HTML

Créez le fichier `tuto-2-css.html` et ajoutez-y le code HTML de départ du tutoriel.

### 2.2. Observer le CSS

#### Étape 2 — Analyser la règle de style

Le CSS de départ est :

```css
p {
    color: blue;
}
```

Cette règle cible les paragraphes.

### 2.3. Créer la feuille CSS

#### Étape 3 — Créer le fichier externe

Dans le même dossier que votre fichier HTML, créez le fichier :

```text
tuto-2-css.css
```

Ajoutez-y la règle CSS :

```css
p {
    color: blue;
}
```

### 2.4. Créer la liaison HTML–CSS

#### Étape 4 — Ajouter la balise `<link>`

Dans la partie `<head>` du document HTML, ajoutez la balise `<link>` pour relier le fichier externe :

```html
    <link rel="stylesheet" href="tuto-2-css.css">
```

Le haut de la page devient :

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Tuto 2 CSS</title>

    <link rel="stylesheet" href="tuto-2-css.css">
</head>
```

Le fichier HTML utilise maintenant cette feuille CSS externe.

### 2.5. Tester

#### Étape 5 — Vérifier le rendu

Ouvrez `tuto-2-css.html` et rechargez la page dans le navigateur.

**Résultat attendu :**

Les deux paragraphes apparaissent en bleu, prouvant que la liaison fonctionne correctement.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-2/tuto-2-css.html' | relative_url}}"
    height="300"
    title="Résultat final du Tuto 2">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une liaison entre une page HTML et une feuille CSS externe.

**Vous savez maintenant :** distinguer CSS inline, interne et externe, créer une feuille CSS externe, utiliser `<link>`, utiliser `rel="stylesheet"`, et utiliser `href` pour indiquer le fichier CSS.

## 4. Glossaire

* **CSS inline** : CSS écrit directement dans une balise HTML.
* **CSS interne** : CSS écrit dans une balise `<style>`.
* **CSS externe** : CSS écrit dans un fichier séparé.
* **`link`** : balise HTML qui crée une liaison avec une ressource externe.
* **`stylesheet`** : indique que la ressource liée est une feuille CSS.
* **`href`** : indique l’emplacement du fichier lié.
