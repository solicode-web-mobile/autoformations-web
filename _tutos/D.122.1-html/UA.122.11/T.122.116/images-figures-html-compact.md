---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.116"
type: "classique"
version: "compact"
ua: "UA.122.11"
nav_order: 6
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Images et figures HTML</title>
    </head>
    <body>
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

Intégrer des images simples (`<img>`) et des figures avec légende (`<figure>`, `<figcaption>`).

## 2. Prérequis

* Connaître la structure HTML de base.
* Savoir utiliser des attributs et des chemins relatifs.

## Partie 1 — Théorie

- **`<img>`** : Balise pour insérer une image. Elle a deux attributs obligatoires :
  - `src` : Chemin de l'image (ex: `"images/logo.png"`).
  - `alt` : Texte de remplacement si l'image ne charge pas.
- **`<figure>`** : Conteneur sémantique qui associe une image (`<img>`) avec sa légende (`<figcaption>`).

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez `tuto-6-html.html` et collez-y les données de départ.

### 2.2. Ajouter les images

Complétez la balise `<body>` pour qu'elle contienne ce code :

```html
<body>
    <h1>Images et figures HTML</h1>
    <p>Une image permet d'afficher un contenu visuel dans une page HTML.</p>

    <!-- Image simple redimensionnée -->
    <img src="images/author.jpg" alt="Portrait d'un développeur" width="120" height="120">

    <!-- Figure avec image et légende -->
    <figure>
        <img src="images/article-example.600.jpg" alt="Développeur écrivant du code">
        <figcaption>Le développeur écrit le code de l'application.</figcaption>
    </figure>
</body>
```

### 2.3. Tester la page

Enregistrez et ouvrez dans votre navigateur.

**Résultat attendu :**
L'image simple s'affiche. L'image dans la `<figure>` s'affiche avec une légère marge et est accompagnée de sa légende en dessous.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-6/tuto-6-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 6">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser `<img>`, `src`, `alt`, et regrouper un visuel avec une explication textuelle grâce à `<figure>` et `<figcaption>`.
