---
title: "Conteneurs et listes HTML"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.114"
type: "classique"
version: "normal"
ua: "UA.122.11"
nav_order: 4
---


## 1. Objectif

Organiser le contenu d’une page HTML avec des conteneurs, des balises sémantiques et des listes.

À la fin du tutoriel, vous saurez utiliser `div`, `span`, `header`, `main`, `section`, `article`, `class`, `ul` et `li`.

## 2. Prérequis

* Connaître `<html>`, `<head>` et `<body>`.
* Savoir utiliser `<h1>`, `<h2>`, `<h3>` et `<p>`.
* Savoir utiliser un attribut.
* Savoir créer et tester une page HTML.

## Partie 1 — Théorie

### 1.1. Le conteneur générique `<div>`

`<div>` permet de regrouper plusieurs éléments HTML. C'est un conteneur générique.

Exemple :

```html
<div>
    <h2>Le rôle du développeur</h2>
    <p>Le développeur crée des applications.</p>
</div>
```

### 1.2. L’élément `<span>`

`<span>` permet de regrouper une petite partie d’un texte ou contenu, à l'intérieur d'une ligne.

Exemple :

```html
<p>
    Catégorie : <span>Développement</span>
</p>
```

### 1.3. Les conteneurs sémantiques

HTML propose des conteneurs spécifiques qui donnent du sens au contenu, préférables à un simple `<div>` :

* `<main>` : contenu principal de la page.
* `<article>` : contenu indépendant (un article de blog, une actualité).
* `<section>` : regroupement thématique de contenu.
* `<header>` : l'en-tête d'une page, d'un article ou d'une section.

Exemple :

```html
<article>
    <header>
        <h2>Titre de l'article</h2>
    </header>
    <main>
        <section>
            <p>Contenu de la section.</p>
        </section>
    </main>
</article>
```

### 1.4. L’attribut `class`

`class` permet de donner un nom à un élément pour l'identifier facilement.

Exemple :

```html
<header class="article-header">
    <h2>Le métier de développeur</h2>
</header>
```

`article-header` est la valeur de l’attribut `class`. Plusieurs éléments peuvent utiliser la même classe.

### 1.5. La liste `<ul>` et l'élément `<li>`

`<ul>` crée une liste non ordonnée (à puces). `<li>` représente un élément de cette liste.

Exemple :

```html
<ul class="article-list">
    <li>Analyser le besoin</li>
    <li>Réaliser l'application</li>
</ul>
```

### 1.6. À retenir

* `<div>` regroupe plusieurs éléments de manière générique.
* `<span>` regroupe une partie de texte.
* `<main>`, `<article>`, `<section>`, `<header>` sont des conteneurs sémantiques.
* `class` donne un nom à un élément.
* `<ul>` crée une liste non ordonnée et `<li>` définit un élément de la liste.

## Partie 2 — Pratique

### 2.1. Créer le fichier de travail

#### Étape 1 — Créer le fichier

Créez :

```text
tuto-4-html.html
```

#### Étape 2 — Ajouter la structure

Ajoutez :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Conteneurs et listes HTML</title>
</head>
<body>

</body>
</html>
```

### 2.2. Ajouter l'article et son en-tête

#### Étape 3 — Créer `<article>` et `<header>`

Dans `<body>`, ajoutez le conteneur de l'article et son en-tête avec une classe :

```html
    <article>
        <header class="article-header">
        </header>
    </article>
```

#### Étape 4 — Ajouter une catégorie et un titre

Dans `<header>`, ajoutez un `<span>` avec une classe pour la catégorie, et le titre `<h2>` :

```html
        <header class="article-header">
            <span class="article-category">
                Développement
            </span>
            <h2>
                Le rôle du développeur
            </h2>
        </header>
```

### 2.3. Ajouter le contenu principal

#### Étape 5 — Créer `<main>` et `<section>`

Sous le `<header>`, toujours à l'intérieur de `<article>`, ajoutez la zone principale et une section :

```html
        <main>
            <section class="article-body">
            </section>
        </main>
```

#### Étape 6 — Ajouter le paragraphe

Dans `<section>`, ajoutez :

```html
                <p>
                    Le développeur crée des applications.
                </p>
```

### 2.4. Ajouter une liste

#### Étape 7 — Créer la liste

Toujours dans `<section>`, sous le paragraphe, ajoutez la liste des rôles :

```html
                <ul class="article-list">
                    <li>
                        Analyser le besoin
                    </li>
                    <li>
                        Réaliser l'application
                    </li>
                    <li>
                        Vérifier l'application
                    </li>
                    <li>
                        Déployer l'application
                    </li>
                </ul>
```

### 2.5. Tester la page

#### Étape 8 — Ouvrir la page

Enregistrez `tuto-4-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page contient un en-tête, un paragraphe et une liste à puces structurés avec des conteneurs sémantiques et des classes.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-4/tuto-4-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 4 : HTML">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page organisée avec des conteneurs sémantiques, des classes et une liste.

**Vous savez maintenant :** utiliser `<div>`, `<span>`, `<header>`, `<main>`, `<section>`, `<article>`, `class`, `<ul>` et `<li>` pour structurer le contenu d’une page HTML.

## 4. Glossaire

* **Conteneur** : élément qui regroupe plusieurs éléments HTML.
* **Sémantique** : balise qui donne du sens au contenu qu'elle encadre (ex: `<article>` pour un article).
* **Classe** : nom donné à un élément avec l’attribut `class`.
* **Liste non ordonnée** : liste à puces créée avec `<ul>`.
* **Élément de liste** : élément de la liste créé avec `<li>`.
