---
title: "Conteneurs et listes HTML- Débutant"
layout: tuto
slug: "conteneurs-listes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.114"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.11"
nav_order: 4
---



## 1. Objectif

Organiser le contenu d’une page HTML avec des conteneurs et des listes.

À la fin du tutoriel, vous saurez utiliser `<div>`, `<span>`, `class`, `<ul>` et `<li>`.

## 2. Prérequis

* Connaître `<html>`, `<head>` et `<body>`.
* Savoir utiliser `<h1>`, `<h2>`, `<h3>` et `<p>`.
* Savoir utiliser un attribut.
* Savoir créer et tester une page HTML.

## Partie 1 — Théorie

### 1.1. Le conteneur `<div>`

`<div>` permet de regrouper plusieurs éléments HTML.

Exemple :

```html
<div>
    <h2>Le rôle du développeur</h2>

    <p>
        Le développeur crée des applications.
    </p>
</div>
```

Ici, `<div>` regroupe le titre et le paragraphe.

### 1.2. L’élément `<span>`

`<span>` permet de regrouper une petite partie d’un contenu.

Exemple :

```html
<p>
    Catégorie :
    <span>Développement</span>
</p>
```

Ici, `<span>` contient le mot `Développement`.

### 1.3. L’attribut `class`

`class` permet de donner un nom à un élément.

Exemple :

```html
<div class="article-header">
    <h1>Le métier de développeur</h1>
</div>
```

`article-header` est la valeur de l’attribut `class`.

La classe permet d’identifier un élément.

### 1.4. Utiliser plusieurs éléments avec une classe

Plusieurs éléments peuvent utiliser la même classe.

Exemple :

```html
<div class="article-meta">
    Date de publication
</div>

<div class="article-meta">
    Temps de lecture
</div>
```

Les deux éléments utilisent la classe `article-meta`.

### 1.5. La liste `<ul>`

`<ul>` crée une liste non ordonnée.

Exemple :

```html
<ul>
    <li>Analyser le besoin</li>
    <li>Réaliser l'application</li>
    <li>Vérifier l'application</li>
</ul>
```

Le navigateur affiche une liste à puces.

### 1.6. L’élément `<li>`

`<li>` représente un élément d’une liste.

Il est utilisé à l’intérieur de `<ul>`.

Exemple :

```html
<ul>
    <li>Développer</li>
    <li>Tester</li>
</ul>
```

Ici, la liste contient deux éléments.

### 1.7. À retenir

* `<div>` regroupe plusieurs éléments.
* `<span>` regroupe une petite partie d’un contenu.
* `class` donne un nom à un élément.
* Plusieurs éléments peuvent utiliser la même classe.
* `<ul>` crée une liste non ordonnée.
* `<li>` représente un élément de la liste.

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

    <title>
        Conteneurs et listes HTML
    </title>
</head>

<body>

</body>

</html>
```

### 2.2. Ajouter un conteneur

#### Étape 3 — Créer un `<div>`

Dans `<body>`, ajoutez :

```html
<div>
    <h2>Le rôle du développeur</h2>

    <p>
        Le développeur crée des applications.
    </p>
</div>
```

Le `<div>` regroupe le titre et le paragraphe.

### 2.3. Ajouter un `<span>`

#### Étape 4 — Ajouter une catégorie

Ajoutez :

```html
<p>
    Catégorie :
    <span>Développement</span>
</p>
```

### 2.4. Ajouter une classe

#### Étape 5 — Ajouter une classe

Modifiez le conteneur :

```html
<div class="article-header">
    <h2>Le rôle du développeur</h2>

    <p>
        Le développeur crée des applications.
    </p>
</div>
```

### 2.5. Ajouter une liste

#### Étape 6 — Créer la liste

Ajoutez :

```html
<ul>
    <li>Analyser le besoin</li>
    <li>Réaliser l'application</li>
    <li>Vérifier l'application</li>
    <li>Déployer l'application</li>
</ul>
```

### 2.6. Tester la page

#### Étape 7 — Ouvrir la page

Enregistrez `tuto-4-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page contient :

* un conteneur ;
* une catégorie ;
* une classe ;
* une liste ;
* quatre éléments de liste.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-4-html.html' | relative_url}}"
    height="500"
    title="Résultat du tutoriel 4 : HTML">
</iframe>

## Partie 3 — Développement de blog

### 3.1. Exercice

Poursuivez la réalisation de la page :

```text
detaille-article.html
```

Utilisez les notions apprises dans ce tutoriel :

* `<div>`
* `<span>`
* `class`
* `<ul>`
* `<li>`

Ajoutez ces notions à la version obtenue dans le tutoriel précédent.

Le résultat doit se rapprocher de la structure finale de la page d’article.

### 3.2. Résultat attendu

Après l’application des notions des tutoriels précédents et du T.122.114, votre page doit obtenir la version suivante :

<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detaille-v1/page-detaile-html-v1.tuto-4-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu après le tutoriel 4">
</iframe>

**Travail à faire :**

Reproduisez ce résultat dans :

```text
detaille-article.html
```

Utilisez uniquement les notions étudiées jusqu’à ce tutoriel.

**Livrable :**

```text
detaille-article.html
```

**Critère de réussite :**

La page obtenue correspond au résultat présenté dans l’iframe.

## 4. Bilan

**Vous avez réalisé :** une nouvelle version de la page avec des conteneurs, des classes et une liste.

**Vous savez maintenant :** utiliser `<div>`, `<span>`, `class`, `<ul>` et `<li>` pour organiser le contenu d’une page HTML.

## 5. Glossaire

* **Conteneur** : élément qui regroupe plusieurs éléments HTML.
* **Classe** : nom donné à un élément avec l’attribut `class`.
* **Liste non ordonnée** : liste créée avec `<ul>`.
* **Élément de liste** : élément créé avec `<li>`.
