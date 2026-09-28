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
        <title>Liaison HTML-CSS</title>
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

Comprendre comment externaliser son code CSS dans un fichier dédié, et relier ce fichier à la page HTML.

## 2. Prérequis

* Connaître la structure de base d'une page HTML.
* Savoir écrire une règle CSS simple.

## 3. Données de départ

Nous utiliserons deux fichiers distincts pour ce tutoriel : un fichier HTML et un fichier CSS.

**Code HTML de départ :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liaison HTML-CSS</title>
</head>
<body>
    <h1>Mon article</h1>
    <p>Bienvenue sur ma page.</p>
    <p>Voici le contenu de mon article.</p>
</body>
</html>
```

**Code CSS de départ :**
```css
p {
    color: blue;
}
```

## Partie 1 — Théorie

### 1.1. Pourquoi séparer le HTML et le CSS ?

Dans le tutoriel précédent, nous avons écrit le CSS dans la balise `<style>` à l'intérieur du HTML.
C'est pratique pour des tests, mais sur un vrai site web, vous aurez souvent des dizaines de pages (Accueil, Contact, À propos...). Si le style est "bloqué" dans la page Accueil, il faudra le copier-coller dans toutes les autres pages. 

La bonne pratique est d'écrire le CSS dans un fichier `.css` séparé, puis de "relier" toutes les pages HTML à ce fichier unique.

### 1.2. La balise de liaison `<link>`

Pour relier une feuille de style externe à une page HTML, on utilise la balise orpheline `<link>` (lien en anglais).
Cette balise doit **toujours** être placée dans la zone `<head>` du fichier HTML.

```html
<link rel="stylesheet" href="style.css">
```

- **`rel="stylesheet"`** : Indique la "relation". On prévient le navigateur que le fichier que l'on va charger est une "feuille de style" (stylesheet).
- **`href="style.css"`** : Indique le chemin relatif vers le fichier CSS.

## Partie 2 — Pratique

### 2.1. Créer le fichier HTML

Dans VS Code, créez un fichier nommé `tuto-2-css.html` et collez-y les données de départ (le code HTML).

### 2.2. Créer le fichier CSS

Dans le **même dossier** que votre fichier HTML, créez un nouveau fichier nommé `tuto-2-css.css` (attention à l'extension `.css`). 
Collez-y la règle de style prévue dans les données de départ :

```css
p {
    color: blue;
}
```
*Note: Un fichier `.css` ne contient que des règles CSS. N'y ajoutez aucune balise HTML (pas de `<style>`, ni de `<head>`).*

### 2.3. Créer la liaison

Maintenant, nous devons indiquer à notre fichier HTML d'utiliser ce fichier CSS.
Dans `tuto-2-css.html`, ajoutez la balise `<link>` dans la section `<head>` :

```html
<head>
    <meta charset="UTF-8">
    <title>Liaison HTML-CSS</title>
    
    <!-- Ligne ajoutée pour lier le CSS -->
    <link rel="stylesheet" href="tuto-2-css.css">
</head>
```

### 2.4. Tester le résultat

Enregistrez vos **deux** fichiers (`.html` et `.css`).
Ouvrez `tuto-2-css.html` dans votre navigateur.

**Résultat attendu :**
Le navigateur lit le code HTML, arrive sur la balise `<link>`, télécharge instantanément le fichier `.css` et applique la règle : les paragraphes apparaissent en bleu.

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-2/tuto-2-css.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 2">
</iframe>

## 4. Bilan

**Vous avez réalisé :** la séparation propre du contenu (HTML) et de la mise en forme (CSS).

**Vous savez maintenant :** 
- Créer un fichier `.css` externe.
- Utiliser la balise `<link>` avec ses attributs `rel` et `href` pour connecter la feuille de style à un document HTML.
