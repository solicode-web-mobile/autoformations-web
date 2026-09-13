---
title: "Liens et chemins relatifs HTML"
layout: tuto
slug: "liens-chemins-relatifs-html"
permalink: /tutos/:slug/
tuto_id: "T.122.115"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 5
---


## 1. Objectif

Créer des liens HTML et utiliser des chemins relatifs.

À la fin du tutoriel, vous saurez utiliser `<a>`, `href` et les chemins relatifs pour accéder à une autre ressource.

## 2. Prérequis

* Savoir utiliser une structure HTML.
* Savoir utiliser des éléments HTML.
* Savoir utiliser l’attribut `class`.
* Savoir organiser des fichiers dans des dossiers.

## Partie 1 — Théorie

### 1.1. Le lien `<a>`

`<a>` permet de créer un lien.

Exemple :

```html
<a href="index.html">
    Accueil
</a>
```

Le texte `Accueil` est affiché dans la page.

### 1.2. L’attribut `href`

`href` indique la destination du lien.

Exemple :

```html
<a href="index.html">
    Accueil
</a>
```

Ici, `index.html` est la destination.

### 1.3. Le chemin relatif

Un chemin relatif indique l’emplacement d’une ressource à partir du fichier courant.

Exemple :

```text
blog/
├── detaille-article.html
├── index.html
└── pages/
    └── articles.html
```

Depuis `detaille-article.html`, le fichier `index.html` est accessible avec :

```text
index.html
```

Le fichier `articles.html` est accessible avec :

```text
pages/articles.html
```

### 1.4. Remonter dans un dossier

`..` permet de remonter d’un dossier.

Exemple :

```text
blog/
├── detaille-article.html
└── pages/
    └── article.html
```

Depuis `pages/article.html`, pour accéder à `detaille-article.html` :

```text
../detaille-article.html
```

### 1.5. À retenir

* `<a>` crée un lien.
* `href` indique la destination.
* Un chemin relatif dépend de l’emplacement du fichier courant.
* `..` permet de remonter d’un dossier.
* Le chemin doit être adapté à la position du fichier.

## Partie 2 — Pratique

### 2.1. Créer une structure simple

#### Étape 1 — Créer le fichier

Créez :

```text
tuto-5-html.html
```

#### Étape 2 — Ajouter la structure

Ajoutez :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">

    <title>
        Liens et chemins relatifs HTML
    </title>
</head>

<body>

</body>

</html>
```

### 2.2. Ajouter le contenu principal

#### Étape 3 — Ajouter un titre et un paragraphe

Dans `<body>`, ajoutez :

```html
    <h1>
        Liens et chemins relatifs HTML
    </h1>

    <p>
        Un lien permet d'accéder à une autre page.
    </p>
```

### 2.3. Ajouter un lien

#### Étape 4 — Ajouter un lien

Toujours dans `<body>`, ajoutez :

```html
    <a href="index.html">
        Accueil
    </a>
```

Le lien permet d’ouvrir `index.html`.

### 2.4. Utiliser un chemin relatif

#### Étape 5 — Ajouter un autre lien

Ajoutez un saut de ligne et un deuxième lien pointant vers un sous-dossier :

```html
    <br>

    <a href="pages/articles.html">
        Voir les articles
    </a>
```

Le navigateur cherche :

```text
pages/articles.html
```

à partir du dossier du fichier courant.

### 2.5. Tester

#### Étape 6 — Ouvrir la page

Enregistrez `tuto-5-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page contient un titre, un texte et deux liens.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-5/tuto-5-html.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel 5 : HTML">
</iframe>


## 3. Bilan

**Vous avez réalisé :** une page avec des liens et des chemins relatifs.

**Vous savez maintenant :** utiliser `<a>`, `href` et les chemins relatifs pour accéder à des ressources d’un projet.

## 4. Glossaire

* **Lien** : élément qui permet d’ouvrir une autre ressource.
* **Destination** : ressource ouverte après un clic sur un lien.
* **Chemin relatif** : chemin calculé à partir de l’emplacement du fichier courant.
* **Dossier parent** : dossier situé un niveau au-dessus du dossier courant.
