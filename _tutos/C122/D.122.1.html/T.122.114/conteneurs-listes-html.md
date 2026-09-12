---
title: "Conteneurs et listes HTML- Débutant"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.114"
version: "normal"
ua: "UA.122.11"
nav_order: 4
---


## 1. Objectif

Organiser le contenu d’une page HTML avec des conteneurs et des listes.

À la fin du tutoriel, la page contient des groupes de contenus et une liste des principales missions du développeur.

## 2. Prérequis

* Avoir réalisé `T.122.111`, `T.122.112` et `T.122.113`.
* Connaître `<div>`, `<h1>`, `<h2>`, `<h3>` et `<p>`.
* Savoir ajouter un attribut à un élément HTML.

# Partie 1 — Théorie

## 1.1. Le conteneur `<div>`

`<div>` permet de regrouper plusieurs éléments HTML.

Il ne donne pas de sens particulier au contenu.

**Exemple :**

```html
<div>
    <h2>
        Le rôle du développeur
    </h2>

    <p>
        Le développeur crée des applications.
    </p>
</div>
```

Ici, le `<div>` regroupe le titre et le paragraphe.

## 1.2. L’élément `<span>`

`<span>` permet de regrouper une petite partie d’un texte.

Il est souvent utilisé pour identifier une partie précise d’un contenu.

**Exemple :**

```html
<p>
    Catégorie :
    <span>
        Développement
    </span>
</p>
```

Ici, `<span>` contient seulement le mot `Développement`.

## 1.3. L’attribut `class`

`class` permet de donner un nom à un élément.

Ce nom peut ensuite être utilisé pour identifier ou mettre en forme l’élément.

**Exemple :**

```html
<div class="article-header">
    ...
</div>
```

Ici, `article-header` est le nom de la classe.

Dans une même page, plusieurs éléments peuvent utiliser la même classe.

**Exemple :**

```html
<div class="article-meta">
    ...
</div>

<div class="article-meta">
    ...
</div>
```

## 1.4. La liste `<ul>`

`<ul>` permet de créer une liste non ordonnée.

Chaque élément de la liste utilise `<li>`.

**Exemple :**

```html
<ul>
    <li>
        Analyser le besoin
    </li>
    <li>
        Réaliser l'application
    </li>
    <li>
        Vérifier l'application
    </li>
</ul>
```

Le navigateur affiche une liste à puces.

## 1.5. L’élément `<li>`

`<li>` représente un élément d’une liste.

Il est utilisé à l’intérieur de `<ul>`.

**Exemple :**

```html
<ul>
    <li>
        Développer
    </li>
    <li>
        Tester
    </li>
</ul>
```

## 1.6. À retenir

* `<div>` regroupe plusieurs éléments.
* `<span>` regroupe une petite partie d’un contenu.
* `class` donne un nom à un élément.
* `<ul>` crée une liste non ordonnée.
* `<li>` représente un élément de la liste.

# Partie 2 — Pratique

## 2.1. Organiser l’en-tête de l’article

### Étape 1 — Ouvrir `index.html`

Ouvrez le fichier `index.html` réalisé dans le tutoriel précédent.

### Étape 2 — Créer un conteneur pour l’en-tête

Dans `<body>`, autour du titre principal et des premiers contenus, ajoutez un `<div>` :

```html
<div class="article-header">

    <h1>
        Le métier de développeur et ses principales missions
    </h1>

</div>
```

Le titre est maintenant regroupé dans le conteneur `article-header`.

## 2.2. Ajouter la catégorie

### Étape 3 — Ajouter un `<span>`

Dans le conteneur, ajoutez :

```html
<div class="article-header">

    <span class="article-category">
        Développement
    </span>

    <h1>
        Le métier de développeur et ses principales missions
    </h1>

</div>
```

Le `<span>` contient la catégorie de l’article.

## 2.3. Organiser les informations de l’article

### Étape 4 — Créer un conteneur `article-meta`

Sous le `<h1>`, ajoutez :

```html
<div class="article-meta">

    <span>
        Madani Ali
    </span>

    <span>
        14 Février 2026
    </span>

    <span>
        5 min de lecture
    </span>

</div>
```

Les informations de l’article sont maintenant regroupées dans un même conteneur.

## 2.4. Ajouter la liste des missions

### Étape 5 — Créer une liste

Sous les paragraphes de contenu, ajoutez :

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

### Étape 6 — Ajouter une information dans chaque élément

Complétez la liste :

```html
<ul class="article-list">

    <li>
        <strong>Analyser le besoin</strong> :
        comprendre le projet et identifier les fonctionnalités.
    </li>

    <li>
        <strong>Réaliser l'application</strong> :
        écrire le code et développer les fonctionnalités.
    </li>

    <li>
        <strong>Vérifier l'application</strong> :
        tester l'application et corriger les erreurs.
    </li>

    <li>
        <strong>Déployer l'application</strong> :
        mettre l'application sur un serveur pour la rendre disponible.
    </li>

</ul>
```

`<strong>` est utilisé ici pour mettre une partie du texte en importance.

La notion `<strong>` sera étudiée dans un autre apprentissage. Dans cette étape, vous pouvez conserver cet élément dans le code fourni sans l’étudier.

## 2.5. Vérifier la structure

### Étape 7 — Enregistrer le fichier

Enregistrez `index.html`.

### Étape 8 — Ouvrir la page

Ouvrez la page dans le navigateur.

**Résultat attendu :**

La page contient maintenant :

* une catégorie ;
* un titre regroupé dans un conteneur ;
* des informations regroupées dans un conteneur ;
* une liste des missions du développeur.

Une partie de la structure ressemble maintenant à :

```html
<div class="article-header">

    <span class="article-category">
        Développement
    </span>

    <h1>
        Le métier de développeur et ses principales missions
    </h1>

    <div class="article-meta">

        <span>
            Madani Ali
        </span>

        <span>
            14 Février 2026
        </span>

        <span>
            5 min de lecture
        </span>

    </div>

</div>

<ul class="article-list">

    <li>
        <strong>Analyser le besoin</strong> :
        comprendre le projet et identifier les fonctionnalités.
    </li>

    <li>
        <strong>Réaliser l'application</strong> :
        écrire le code et développer les fonctionnalités.
    </li>

    <li>
        <strong>Vérifier l'application</strong> :
        tester l'application et corriger les erreurs.
    </li>

    <li>
        <strong>Déployer l'application</strong> :
        mettre l'application sur un serveur pour la rendre disponible.
    </li>

</ul>
```

**Résultat attendu :**

La structure de la page ressemble maintenant davantage à la page finale du Blog personnel.

# 3. Bilan

**Vous avez réalisé :** les groupes de contenus et la liste des principales missions du développeur.

**Vous savez maintenant :** utiliser `<div>`, `<span>`, `class`, `<ul>` et `<li>` pour organiser le contenu d’une page HTML.

# 4. Glossaire

* **Conteneur** : élément qui regroupe plusieurs éléments HTML.
* **Classe** : nom donné à un ou plusieurs éléments avec l’attribut `class`.
* **Liste non ordonnée** : liste créée avec `<ul>`.
* **Élément de liste** : contenu d’une liste créé avec `<li>`.
