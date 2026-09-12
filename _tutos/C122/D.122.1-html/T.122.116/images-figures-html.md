---
title: "Images et figures HTML"
layout: tuto
slug: "images-figures-html"
permalink: /tutos/:slug/
tuto_id: "T.122.116"
version: "normal"
ua: "UA.122.11"
nav_order: 6
---


## 1. Objectif

Ajouter des images et des figures dans une page HTML.

À la fin du tutoriel, la page de détail du Blog personnel contient les images de l’auteur et de l’article, avec leurs textes alternatifs et leurs légendes.

## 2. Prérequis

* Avoir réalisé `T.122.111` à `T.122.115`.
* Connaître les éléments HTML de base.
* Savoir utiliser un chemin relatif.
* Disposer des images du projet.

# Partie 1 — Théorie

## 1.1. L’image `<img>`

`<img>` permet d’afficher une image.

L’élément utilise notamment l’attribut `src` pour indiquer le fichier de l’image.

**Exemple :**

```html
<img src="images/author.jpg">
```

## 1.2. L’attribut `src`

`src` indique le chemin de l’image.

**Exemple :**

```html
<img src="images/article-cover.png">
```

Le navigateur cherche `article-cover.png` dans le dossier `images`.

## 1.3. L’attribut `alt`

`alt` donne une description de l’image.

Cette description est utile lorsque l’image ne peut pas être affichée.

**Exemple :**

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
>
```

Le texte de `alt` doit décrire l’image.

## 1.4. Les attributs `width` et `height`

`width` indique la largeur de l’image.

`height` indique sa hauteur.

**Exemple :**

```html
<img
    src="images/author.jpg"
    alt="Portrait d'un développeur"
    width="120"
    height="120"
>
```

## 1.5. La figure `<figure>`

`<figure>` permet de regrouper une image avec son contenu associé.

**Exemple :**

```html
<figure>
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>
```

## 1.6. La légende `<figcaption>`

`<figcaption>` permet d'ajouter une légende à une figure.

**Exemple :**

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

## 1.7. À retenir

* `<img>` affiche une image.
* `src` indique le chemin de l’image.
* `alt` décrit l’image.
* `width` indique la largeur.
* `height` indique la hauteur.
* `<figure>` regroupe une image et son contenu associé.
* `<figcaption>` ajoute une légende à une figure.

# Partie 2 — Pratique

## 2.1. Ajouter l’image de l’auteur

### Étape 1 — Ouvrir `index.html`

Ouvrez le fichier `index.html` réalisé dans les tutoriels précédents.

Dans le bloc `article-meta`, ajoutez l’image de l’auteur :

```html
<div class="article-meta">

    <div class="article-author">
        <img
            src="images/author.jpg"
            alt="Portrait d'un développeur"
        >

        <div>
            <strong>
                Madani Ali
            </strong>

            <span>
                Auteur du blog
            </span>
        </div>
    </div>

    <span>
        14 Février 2026
    </span>

    <span>
        5 min de lecture
    </span>

</div>
```

Le chemin :

```text
images/author.jpg
```

correspond à la position de l’image dans le projet.

## 2.2. Ajouter l’image principale de l’article

### Étape 2 — Créer la figure principale

Après l’en-tête de l’article, ajoutez :

```html
<figure class="article-cover">
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>
```

L’image est maintenant regroupée dans un élément `<figure>`.

## 2.3. Ajouter l’image dans le contenu

### Étape 3 — Ajouter une figure dans l’article

Après le titre :

```html
<h3>
    Réaliser l'application
</h3>
```

ajoutez :

```html
<figure class="article-figure">
    <img
        src="images/article-example.png"
        alt="Développeur écrivant du code"
    >
    <figcaption>
        Le développeur écrit le code de l'application.
    </figcaption>
</figure>
```

La figure contient maintenant une image et sa légende.

## 2.4. Vérifier les images

### Étape 4 — Enregistrer le fichier

Enregistrez `index.html`.

### Étape 5 — Ouvrir la page

Ouvrez la page dans le navigateur.

Vérifiez que les trois images s’affichent :

```text
images/author.jpg
images/article-cover.png
images/article-example.png
```

Vérifiez aussi que :

* l’image de l’auteur apparaît ;
* l’image principale apparaît ;
* l’image dans l’article apparaît ;
* la légende de l’image dans l’article apparaît.

**Résultat attendu :**

La page contient maintenant :

```html
<div class="article-author">
    <img
        src="images/author.jpg"
        alt="Portrait d'un développeur"
    >
</div>

<figure class="article-cover">
    <img
        src="images/article-cover.png"
        alt="Écran montrant du code informatique"
    >
</figure>

<figure class="article-figure">
    <img
        src="images/article-example.png"
        alt="Développeur écrivant du code"
    >
    <figcaption>
        Le développeur écrit le code de l'application.
    </figcaption>
</figure>
```

## 2.5. Vérifier la réalisation finale

### Étape 6 — Vérifier toute la page

Relisez maintenant `index.html`.

La page doit contenir :

* la structure HTML ;
* les informations du document ;
* les titres et paragraphes ;
* les conteneurs et classes ;
* la liste des missions ;
* les liens ;
* les images ;
* les figures et la légende.

**Résultat attendu :**

Vous avez construit progressivement la page de détail d’un article du Blog personnel.

La structure obtenue est proche de :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>
        Métier de développeur - Les principales missions
    </title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <article>

        <header class="article-header">

            <span class="article-category">
                Développement
            </span>

            <h1>
                Le métier de développeur et ses principales missions
            </h1>

            <div class="article-meta">

                <div class="article-author">

                    <img
                        src="images/author.jpg"
                        alt="Portrait d'un développeur"
                    >

                    <div>
                        <strong>
                            Madani Ali
                        </strong>

                        <span>
                            Auteur du blog
                        </span>
                    </div>

                </div>

                <span>
                    14 Février 2026
                </span>

                <span>
                    5 min de lecture
                </span>

            </div>

        </header>

        <figure class="article-cover">

            <img
                src="images/article-cover.png"
                alt="Écran montrant du code informatique"
            >

        </figure>

        <main class="article-main">

            <section class="article-body">

                <h2>
                    Le rôle du développeur
                </h2>

                <p>
                    Le développeur crée des applications.
                    Il transforme un besoin en solution informatique.
                    Son travail se fait en plusieurs étapes.
                    Il doit bien comprendre le projet.
                </p>

                <h3>
                    Réaliser l'application
                </h3>

                <figure class="article-figure">

                    <img
                        src="images/article-example.png"
                        alt="Développeur écrivant du code"
                    >

                    <figcaption>
                        Le développeur écrit le code de l'application.
                    </figcaption>

                </figure>

            </section>

        </main>

    </article>

</body>
</html>
```

# 3. Bilan

**Vous avez réalisé :** les images et les figures de la page de détail du Blog personnel.

**Vous savez maintenant :** afficher une image avec `<img>`, utiliser `src`, `alt`, `width` et `height`, et associer une image à une légende avec `<figure>` et `<figcaption>`.

**Vous avez maintenant construit progressivement la structure HTML de la page finale de l’UA `UA.122.11`.**

# 4. Glossaire

* **Image** : ressource visuelle affichée dans une page Web.
* **`src`** : attribut qui indique le fichier de l’image.
* **`alt`** : texte qui décrit une image.
* **Figure** : élément qui regroupe une image et son contenu associé.
* **Légende** : texte qui explique une figure.
