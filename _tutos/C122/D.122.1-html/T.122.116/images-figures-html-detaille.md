---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.116"
type: "classique"
version: "detaille"
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

Maîtriser l'intégration d'images en HTML, comprendre l'importance critique de l'accessibilité avec l'attribut `alt`, et regrouper sémantiquement les médias avec leurs légendes via les balises `<figure>` et `<figcaption>`.

## 2. Prérequis

* Connaître la structure d’un document HTML.
* Savoir utiliser des balises (comme `<h1>` et `<p>`) et des attributs.
* Comprendre le fonctionnement des chemins relatifs.

## 3. Données de départ

Nous partons d'un document HTML de base structuré :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Images et figures HTML</title>
</head>
<body>
</body>
</html>
```
*Note : Si vous testez en local, assurez-vous d'avoir des images nommées `author.jpg` et `article-example.600.jpg` dans un sous-dossier `images/`.*

## Partie 1 — Théorie

### 1.1. L'image (`<img>`) et ses 2 piliers

Pour afficher une image, la balise `<img>` nécessite toujours deux attributs. Sans eux, votre code HTML sera considéré comme invalide (ou de mauvaise qualité) :

1. **`src` (Source)** : Le chemin (généralement relatif) qui mène au fichier de l'image (formats `.jpg`, `.png`, `.svg`, `.webp`, etc.).
2. **`alt` (Alternative Text)** : Un texte descriptif. Ce texte est **absolument obligatoire** pour deux raisons :
   - Si le lien de l'image est cassé, le texte s'affichera à la place.
   - Les synthèses vocales utilisées par les personnes non-voyantes liront ce texte pour décrire l'image. (Pour les images purement décoratives, on doit laisser l'attribut vide : `alt=""`).

### 1.2. Optimisation : Redimensionnement natif

Les attributs `width` et `height` (exprimés en pixels, sans écrire "px") permettent d'indiquer au navigateur la taille de l'image *avant même* qu'elle ne soit téléchargée. Cela empêche le contenu de la page de "sauter" pendant le chargement.

```html
<img src="images/logo.png" alt="Logo du site" width="200" height="100">
```

### 1.3. La structuration avancée : `<figure>`

Lorsqu'une image illustre un propos complexe et nécessite une légende, il ne faut pas se contenter de mettre un paragraphe en dessous. Il faut lier sémantiquement l'image et son texte.

- **`<figure>`** : Agit comme une boîte englobant le média (image, schéma, code, vidéo...).
- **`<figcaption>`** : Contient le texte de la légende. Il doit être placé en premier ou en dernier enfant du `<figure>`.

```html
<figure>
    <img src="graphique-ventes.png" alt="Courbe des ventes en hausse de 20%">
    <figcaption>Évolution des ventes au 3ème trimestre</figcaption>
</figure>
```

## Partie 2 — Pratique

### 2.1. L'architecture de la page

Créez le fichier `tuto-6-html.html` et construisez l'arborescence complète suivante. Remarquez bien la différence d'utilisation entre une image simple "décorative" (le portrait) et une figure illustrative.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Images et figures HTML</title>
</head>
<body>
    
    <h1>Images et figures HTML</h1>
    <p>Une image permet d'afficher un contenu visuel dans une page HTML.</p>

    <!-- 1. L'image simple avec ses dimensions réservées -->
    <img 
        src="images/author.jpg" 
        alt="Portrait d'un développeur" 
        width="120" 
        height="120"
    >

    <!-- 2. La figure regroupant l'illustration et sa légende -->
    <figure>
        <img 
            src="images/article-example.600.jpg" 
            alt="Développeur écrivant du code"
        >
        <figcaption>Le développeur écrit le code de l'application.</figcaption>
    </figure>

</body>
</html>
```

### 2.2. Tester la page

Enregistrez le fichier et ouvrez-le. 

Observez le comportement du bloc `<figure>` : par défaut, les navigateurs appliquent une marge (`margin`) de 40 pixels autour de `<figure>`, ce qui décale légèrement l'image et la légende par rapport au texte principal.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-6/tuto-6-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 6">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page web intégrant et structurant proprement des contenus médias.

**Vous savez maintenant :** utiliser l'attribut fondamental `alt` pour l'accessibilité, utiliser `width` et `height` pour fluidifier le chargement, et regrouper un média avec sa légende via la balise sémantique `<figure>`.
