---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/
tuto_id: "T.122.116"
type: "developpement-progressif"
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

Le texte de `alt` décrit l’image.

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
        src="images/article-example.png"
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

### 2.2. Ajouter une image

#### Étape 3 — Ajouter une image

Dans `<body>`, ajoutez :

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
>
```

### 2.3. Utiliser `width` et `height`

#### Étape 4 — Définir les dimensions

Modifiez l’image :

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
    width="120"
    height="120"
>
```

### 2.4. Créer une figure

#### Étape 5 — Ajouter `<figure>`

Ajoutez :

```html
<figure>

    <img
        src="images/article-example.png"
        alt="Développeur écrivant du code"
    >

</figure>
```

### 2.5. Ajouter une légende

#### Étape 6 — Ajouter `<figcaption>`

Ajoutez :

```html
<figure>

    <img
        src="images/article-example.png"
        alt="Développeur écrivant du code"
    >

    <figcaption>
        Le développeur écrit le code de l'application.
    </figcaption>

</figure>
```

### 2.6. Tester

#### Étape 7 — Ouvrir la page

Enregistrez `tuto-6-html.html`.

Ouvrez le fichier dans le navigateur.

Vérifiez que les images s’affichent et que la légende apparaît.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-6-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 6 : HTML">
</iframe>

## Partie 3 — Développement de blog

### 3.1. Exercice

Poursuivez la réalisation de :

```text
detaille-article.html
```

Utilisez les notions étudiées dans ce tutoriel :

* `<img>`
* `src`
* `alt`
* `width`
* `height`
* `<figure>`
* `<figcaption>`

Ajoutez les images et les figures nécessaires à la page.

Utilisez les chemins relatifs correspondant aux fichiers du projet.

### 3.2. Résultat attendu

Après l’application des notions des tutoriels précédents et du T.122.116, reproduisez la nouvelle version de la page :

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-html-v1.html' | relative_url}}"
    height="700"
    title="Résultat attendu après le tutoriel 6">
</iframe>

**Travail à faire :**

Complétez votre fichier :

```text
detaille-article.html
```

pour obtenir le résultat présenté dans l’iframe.

Utilisez uniquement les notions étudiées jusqu’à ce tutoriel.

**Livrable :**

```text
detaille-article.html
```

**Critère de réussite :**

La page obtenue correspond au résultat présenté dans l’iframe.

### 3.3. Résultat final de la série

Le résultat final de la page détaille est :

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detail-v1/page-detail-html-v1.html' | relative_url}}"
    height="700"
    title="Résultat final de la page détaille d’un article">
</iframe>

La version réalisée dans ce tutoriel doit être l’étape finale de la progression HTML de cette série.

## Bilan

**Vous avez réalisé :** la dernière version HTML de la page détaille avec des images, des figures et des légendes.

**Vous savez maintenant :** afficher une image, utiliser un chemin relatif, ajouter un texte alternatif et associer une légende à une image.

## Glossaire

* **Image** : contenu visuel affiché dans une page Web.
* **`src`** : attribut qui indique le fichier de l’image.
* **`alt`** : texte qui décrit une image.
* **Figure** : élément qui regroupe une image et son contenu associé.
* **Légende** : texte qui explique une figure.
