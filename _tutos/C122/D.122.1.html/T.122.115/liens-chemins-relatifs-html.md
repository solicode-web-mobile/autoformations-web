---
title: "Liens et chemins relatifs HTML"
layout: tuto
slug: "liens-chemins-relatifs-html"
permalink: /tutos/:slug/
tuto_id: "T.122.115"
version: "normal"
ua: "UA.122.11"
nav_order: 5
---

## 1. Objectif

Ajouter des liens dans une page HTML et utiliser des chemins relatifs pour accéder aux ressources du projet.

À la fin du tutoriel, la page contient un lien vers une autre page du projet et les chemins nécessaires pour les futures images.

## 2. Prérequis

* Avoir réalisé `T.122.111`, `T.122.112`, `T.122.113` et `T.122.114`.
* Connaître les éléments HTML de base.
* Savoir organiser les fichiers d’un projet.

# Partie 1 — Théorie

## 1.1. Le lien `<a>`

`<a>` permet de créer un lien.

Le texte entre les balises est affiché dans la page.

**Exemple :**

```html
<a href="index.html">
    Accueil
</a>
```

Ici, `Accueil` est le texte du lien.

## 1.2. L’attribut `href`

`href` indique la destination du lien.

**Exemple :**

```html
<a href="index.html">
    Accueil
</a>
```

La valeur `index.html` indique la page à ouvrir.

## 1.3. Le chemin relatif

Un chemin relatif indique une ressource à partir du dossier du fichier courant.

Par exemple, si le projet contient :

```text
projet/
├── index.html
├── articles/
│   └── article.html
└── images/
    └── article-cover.png
```

Depuis `index.html`, l’image se trouve avec :

```text
images/article-cover.png
```

Depuis `articles/article.html`, la même image se trouve avec :

```text
../images/article-cover.png
```

`..` permet de remonter au dossier parent.

## 1.4. À retenir

* `<a>` crée un lien.
* `href` indique la destination.
* Un chemin relatif dépend de l’emplacement du fichier courant.
* `images/article-cover.png` indique un fichier dans le dossier `images`.
* `../` permet de remonter d’un dossier.

# Partie 2 — Pratique

## 2.1. Préparer le dossier du projet

### Étape 1 — Vérifier les dossiers

Dans le projet, vérifiez que vous avez une structure proche de :

```text
blog-personnel/
├── index.html
├── images/
│   ├── author.jpg
│   ├── article-cover.png
│   └── article-example.png
└── pages/
```

Le dossier `pages` peut être utilisé pour les autres pages du projet.

## 2.2. Ajouter un lien

### Étape 2 — Ajouter un lien vers une autre page

Dans `index.html`, sous le titre principal, ajoutez :

```html
<a href="pages/index.html">
    Voir les articles
</a>
```

Le lien utilise un chemin relatif.

Le navigateur cherche :

```text
pages/index.html
```

à partir de l’emplacement de `index.html`.

### Étape 3 — Ajouter un lien dans le contenu

Dans le dernier paragraphe de l’article, ajoutez :

```html
<p>
    Le développeur travaille aussi avec une équipe.
    Il échange avec les autres membres du projet.
    <a href="pages/index.html">
        Voir les autres articles
    </a>
</p>
```

## 2.3. Préparer les chemins des images

### Étape 4 — Vérifier le chemin de l’image

Les images de la page finale se trouvent dans le dossier `images`.

Le chemin relatif depuis `index.html` est :

```text
images/author.jpg
```

Pour l’image principale :

```text
images/article-cover.png
```

Pour l’image de l’exemple :

```text
images/article-example.png
```

Ces chemins seront utilisés dans le prochain tutoriel.

## 2.4. Vérifier les liens

### Étape 5 — Enregistrer le fichier

Enregistrez `index.html`.

### Étape 6 — Ouvrir la page

Ouvrez la page dans le navigateur.

Cliquez sur :

```text
Voir les articles
```

Le navigateur cherche le fichier indiqué dans `href`.

**Résultat attendu :**

La page contient des liens avec une destination définie par `href`.

Les chemins des futures images sont également identifiés dans le projet :

```text
images/author.jpg
images/article-cover.png
images/article-example.png
```

# 3. Bilan

**Vous avez réalisé :** des liens dans la page et préparé les chemins relatifs des ressources du projet.

**Vous savez maintenant :** utiliser `<a>`, `href` et les chemins relatifs dans une page HTML.

# 4. Glossaire

* **Lien** : élément qui permet d’ouvrir une autre ressource.
* **Destination** : ressource ouverte après un clic sur un lien.
* **Chemin relatif** : chemin calculé à partir de l’emplacement du fichier courant.
* **Dossier parent** : dossier situé un niveau au-dessus du dossier courant.
