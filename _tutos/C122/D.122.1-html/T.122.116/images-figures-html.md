---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/
tuto_id: "T.122.116"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 6
---


## 1. Objectif

Ajouter des images et des figures dans une page HTML.

À la fin du tutoriel, vous saurez utiliser `<img>`, `src`, `alt`, `width`, `height`, `<figure>` et `<figcaption>`.

## 2. Prérequis

* Connaître la structure d’un document HTML.
* Savoir utiliser les balises, les éléments et les attributs HTML.
* Savoir utiliser `<div>`, `<span>`, `class`, `<ul>` et `<li>`.
* Savoir utiliser un chemin relatif.
* Savoir créer et tester une page HTML.

## Partie 1 — Théorie

### 1.1. L’image `<img>`

`<img>` permet d’afficher une image.

Exemple :

```html
<img src="images/author.jpg">
```

`<img>` utilise notamment l’attribut `src` pour indiquer le fichier de l’image.

### 1.2. L’attribut `src`

`src` indique le chemin de l’image.

Exemple :

```html
<img src="images/article-cover.png">
```

Le navigateur cherche l’image dans le dossier `images`.

### 1.3. L’attribut `alt`

`alt` donne une description de l’image.

Exemple :

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
>
```

Le texte de `alt` décrit l’image. Ce texte est utile si l'image ne se charge pas, ou pour les lecteurs d'écran.

### 1.4. Les attributs `width` et `height`

`width` indique la largeur de l’image.

`height` indique la hauteur de l’image.

Exemple :

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
    width="120"
    height="120"
>
```

### 1.5. La figure `<figure>`

`<figure>` permet de regrouper une image avec son contenu associé.

Exemple :

```html
<figure>
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>
```

### 1.6. La légende `<figcaption>`

`<figcaption>` permet d’ajouter une légende à une figure.

Exemple :

```html
<figure>
    <img
        src="images/article-example.600.jpg"
        alt="Développeur écrivant du code"
    >

    <figcaption>
        Le développeur écrit le code de l'application.
    </figcaption>
</figure>
```

### 1.7. À retenir

* `<img>` affiche une image.
* `src` indique le chemin de l’image.
* `alt` décrit l’image.
* `width` indique la largeur.
* `height` indique la hauteur.
* `<figure>` regroupe une image et son contenu associé.
* `<figcaption>` ajoute une légende à une figure.

## Partie 2 — Pratique

### 2.1. Créer le fichier de travail

#### Étape 1 — Créer le fichier

Créez :

```text
tuto-6-html.html
```

#### Étape 2 — Ajouter la structure

Ajoutez :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">

    <title>
        Images et figures HTML
    </title>
</head>

<body>

</body>

</html>
```

### 2.2. Ajouter un titre et un paragraphe

#### Étape 3 — Ajouter le contenu texte initial

Dans `<body>`, ajoutez le titre de la page et un texte explicatif :

```html
    <h1>
        Images et figures HTML
    </h1>

    <p>
        Une image permet d'afficher un contenu visuel dans une page HTML.
    </p>
```

### 2.3. Ajouter une image avec ses attributs

#### Étape 4 — Ajouter une image

En dessous du paragraphe, ajoutez une image en précisant sa source, son texte alternatif et ses dimensions :

```html
    <img
        src="images/author.jpg"
        alt="Portrait d'un développeur"
        width="120"
        height="120"
    >
```

### 2.4. Créer une figure avec une légende

#### Étape 5 — Ajouter `<figure>` et `<figcaption>`

Ajoutez maintenant une figure complète contenant une image et une légende :

```html
    <figure>

        <img
            src="images/article-example.600.jpg"
            alt="Développeur écrivant du code"
        >

        <figcaption>
            Le développeur écrit le code de l'application.
        </figcaption>

    </figure>
```

### 2.5. Tester

#### Étape 6 — Ouvrir la page

Enregistrez `tuto-6-html.html`.

Ouvrez le fichier dans le navigateur.

Vérifiez que les images s’affichent et que la légende apparaît.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-6/tuto-6-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 6 : HTML">
</iframe>


## 3. Bilan

**Vous avez réalisé :** une page HTML contenant des images, des figures et des légendes.

**Vous savez maintenant :** afficher une image, utiliser un chemin relatif, ajouter un texte alternatif et associer une légende à une image avec les balises `<figure>` et `<figcaption>`.

## 4. Glossaire

* **Image** : contenu visuel affiché dans une page Web à l'aide de la balise `<img>`.
* **`src`** : attribut qui indique le fichier de l’image.
* **`alt`** : attribut contenant un texte qui décrit l'image.
* **Figure** : élément qui regroupe une image et son contenu associé avec la balise `<figure>`.
* **Légende** : texte qui explique une figure, inséré avec `<figcaption>`.
